import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import scenePath from "./scene-transformed.glb";

export function HalloweenModel(props) {
  const { nodes, materials } = useGLTF(scenePath);
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials.material}
        position={[1.366, 0.341, 1.231]}
        rotation={[0.015, -0.011, -0.081]}
      />
      <mesh
        geometry={nodes.Object_124.geometry}
        material={materials.emis}
        position={[-1.829, 3.096, -0.816]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_160.geometry}
        material={materials.grass}
        position={[-0.453, 0.648, 1.178]}
        rotation={[1.556, 0.211, -1.577]}
        scale={[0.78, 0.64, 0.436]}
      />
      <mesh geometry={nodes.Object_162.geometry} material={materials.ground} />
      <mesh
        geometry={nodes.Object_170.geometry}
        material={materials.haze}
        position={[0.775, 1.264, -1.959]}
        rotation={[1.064, -0.005, -3.133]}
      />
      <mesh
        geometry={nodes.Object_188.geometry}
        material={materials.pumpLP}
        position={[2.242, 0.772, -0.315]}
        rotation={[0.048, -0.003, -0.082]}
      />
      <mesh
        geometry={nodes.Object_194.geometry}
        material={materials.tree_lp}
        position={[-1.851, 0.294, -1.265]}
        rotation={[0.01, 0.581, -0.002]}
      />
      <instancedMesh
        args={[nodes.Object_10.geometry, materials.material, 21]}
        instanceMatrix={nodes.Object_10.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Object_37.geometry, materials.material, 6]}
        instanceMatrix={nodes.Object_37.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Object_44.geometry, materials.material, 10]}
        instanceMatrix={nodes.Object_44.instanceMatrix}
      />
    </group>
  );
}

useGLTF.preload(scenePath);
