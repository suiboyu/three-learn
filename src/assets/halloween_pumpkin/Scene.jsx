import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import scenePath from "./scene-transformed.glb";

export function Pumpkin(props) {
  const { nodes, materials } = useGLTF(scenePath);
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.defaultMaterial.geometry}
        material={materials.initialShadingGroup}
      />
    </group>
  );
}

useGLTF.preload(scenePath);
