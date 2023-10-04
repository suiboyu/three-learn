<template>
  <canvas id="webgl"></canvas>
</template>

<script setup>
import { onMounted } from "vue";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

onMounted(() => {
  // 获取画布元素
  const canvas = document.getElementById("webgl");

  // 创建场景
  const scene = new THREE.Scene();

  // 创建相机
  const camera = new THREE.PerspectiveCamera(
    75,
    canvas.clientWidth / canvas.clientHeight,
    0.1,
    1000
  );
  camera.position.set(0, 2, 6);
  camera.lookAt(scene.position);

  // 创建渲染器
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  renderer.setClearColor("#000");

  // 添加网格地面
  const gridHelper = new THREE.GridHelper(10, 10);
  scene.add(gridHelper);
  gridHelper.material.transparent = true;
  gridHelper.material.opacity = 0.5;

  // 添加控制器
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.minPolarAngle = 0.5;
  controls.maxPolarAngle = 1.35;
  controls.zoomSpeed = 0.3;

  // 添加灯光
  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(0, 10, 0);
  scene.add(light);

  const loader = new GLTFLoader();
  loader.load("/model/ferrari_458_italia.glb", (gltf) => {
    const model = gltf.scene;
    const rotate = () => {
      model.rotation.y = 0.001;
      requestAnimationFrame(rotate);
    }
    rotate();
    const groundCenter = new THREE.Vector3(0, 0, 0);
    model.position.copy(groundCenter);
    scene.add(model);
  });

  // 渲染函数
  const render = () => {
    renderer.render(scene, camera);
    requestAnimationFrame(render);
  };

  // 开始渲染
  render();
});
</script>

<style scoped>
#webgl {
  width: 100%;
  height: 100%;
}
</style>
