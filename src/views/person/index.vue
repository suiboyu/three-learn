<template></template>

<script setup>
import { onMounted } from "vue";
import * as THREE from "three";
import { FBXLoader } from "three/addons/loaders/FBXLoader.js";
import { AnimationMixer } from "three";

onMounted(() => {
  // 获取画布元素
  const canvas = document.getElementById("webgl");

  // 创建场景
  const scene = new THREE.Scene();

  // 创建相机
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  // 创建渲染器
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // 添加灯光
  const light = new THREE.AmbientLight(0xffffff);
  scene.add(light);

  const loader = new FBXLoader();
  let character;
  let mixer;
  loader.load("/model/FiringRifle.fbx", (fbx) => {
    character = fbx;

    // 创建骨架控制器
    mixer = new AnimationMixer(character);

    // 导入动画数据
    const walkAnimation = loader.parse("/model/FiringRifle.fbx");
    const jumpAnimation = loader.parse("/model/FiringRifle.fbx");

    // 将动画添加到骨架控制器
    const walkAction = mixer.clipAction(walkAnimation.animations[0]);
    const jumpAction = mixer.clipAction(jumpAnimation.animations[0]);

    // 播放默认动画（例如行走）
    walkAction.play();

    // 将模型添加到场景
    scene.add(character);
  });

  const animate = () => {
    if (mixer) {
      mixer.update(0.01); // 更新动画时间
    }
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  };

  animate();

  // 设置相机的位置
  camera.position.z = 5;

  window.addEventListener("resize", () => {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;
    camera.aspect = newWidth / newHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(newWidth, newHeight);
  });
});
</script>

<style scoped>
#webgl {
  width: 100%;
  height: 100%;
}
</style>
