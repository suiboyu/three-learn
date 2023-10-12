import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import scenePath from "./scene-transformed.glb";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";

export function Bird(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(scenePath);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions.Flying.play();
  }, [actions]);

  useFrame(() => {
    if (group.current.position.x > 7) {
      group.current.position.set(-7, 0, 0);
    } else {
      group.current.position.add(new Vector3(0.005, 0, 0));
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <primitive object={nodes.GLTF_created_0_rootJoint} />
        <skinnedMesh
          name="Object_7"
          geometry={nodes.Object_7.geometry}
          material={materials.Bird_Body}
          skeleton={nodes.Object_7.skeleton}
          position={[0, 0.205, 0]}
          rotation={[1.485, 0, 0]}
          scale={0.313}
        />
        <skinnedMesh
          name="Object_8"
          geometry={nodes.Object_8.geometry}
          material={materials.Bird_Eye}
          skeleton={nodes.Object_8.skeleton}
          position={[0, 0.205, 0]}
          rotation={[1.485, 0, 0]}
          scale={0.313}
        />
        <skinnedMesh
          name="Object_9"
          geometry={nodes.Object_9.geometry}
          material={materials.Bird_Yellow}
          skeleton={nodes.Object_9.skeleton}
          position={[0, 0.205, 0]}
          rotation={[1.485, 0, 0]}
          scale={0.313}
        />
        <skinnedMesh
          name="Object_10"
          geometry={nodes.Object_10.geometry}
          material={materials.Bird_White}
          skeleton={nodes.Object_10.skeleton}
          position={[0, 0.205, 0]}
          rotation={[1.485, 0, 0]}
          scale={0.313}
        />
      </group>
    </group>
  );
}

useGLTF.preload(scenePath);
