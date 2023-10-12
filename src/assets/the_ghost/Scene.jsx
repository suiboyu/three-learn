import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import scenePath from "./scene-transformed.glb";

export function Ghost(props) {
  const { nodes, materials } = useGLTF(scenePath);
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.defaultMaterial.geometry}
        material={materials.Chain}
        position={[-101.832, 181.286, 148.485]}
        rotation={[-0.114, 0.148, 0.017]}
        scale={100}
      />
      <mesh
        geometry={nodes.defaultMaterial_1.geometry}
        material={materials.Pumpkin}
        position={[-114.653, 329.22, 156.137]}
        rotation={[-2.286, -0.176, 0.199]}
        scale={100}
      />
      <mesh
        geometry={nodes.defaultMaterial_2.geometry}
        material={materials.Ceket}
        position={[4.63, 295.609, 33.908]}
        rotation={[-2.304, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.defaultMaterial_3.geometry}
        material={materials.Body}
        position={[3.164, 246.613, 48.566]}
        rotation={[-2.304, 0, 0]}
        scale={100}
      />
    </group>
  );
}

useGLTF.preload(scenePath);
