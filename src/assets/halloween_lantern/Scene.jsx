import React, { useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import scenePath from "./scene-transformed.glb";

export function Lantern(props) {
  const { nodes, materials } = useGLTF(scenePath);

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Lantern1_2_Lantern1_0.geometry}
        material={materials.Lantern1}
        position={[-0.007, 0.006, -0.006]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.Lantern1_Light_Lantern1_Light_0.geometry}
        material={materials.Lantern1_Light}
        position={[-0.015, 2.673, 1.219]}
        scale={0.01}
      />
    </group>
  );
}

useGLTF.preload(scenePath);
