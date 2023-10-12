import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import scenePath from "./scene-transformed.glb";

export function Fox(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(scenePath);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions.walk.play();
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <primitive object={nodes.GLTF_created_0_rootJoint} />
        <skinnedMesh
          name="Object_7"
          geometry={nodes.Object_7.geometry}
          material={materials["Material.012"]}
          skeleton={nodes.Object_7.skeleton}
        />
        <skinnedMesh
          name="Object_8"
          geometry={nodes.Object_8.geometry}
          material={materials["Material.013"]}
          skeleton={nodes.Object_8.skeleton}
        />
        <skinnedMesh
          name="Object_9"
          geometry={nodes.Object_9.geometry}
          material={materials["Material.014"]}
          skeleton={nodes.Object_9.skeleton}
        />
        <skinnedMesh
          name="Object_10"
          geometry={nodes.Object_10.geometry}
          material={materials["Material.016"]}
          skeleton={nodes.Object_10.skeleton}
        />
        <skinnedMesh
          name="Object_11"
          geometry={nodes.Object_11.geometry}
          material={materials["Material.016"]}
          skeleton={nodes.Object_11.skeleton}
        />
      </group>
    </group>
  );
}

useGLTF.preload(scenePath);
