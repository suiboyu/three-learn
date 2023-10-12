import { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useGUI } from "../../useGUI";
import scenePath from "./scene-transformed.glb";
import { useFrame, useThree } from "@react-three/fiber";

export function Island({
  setCurrentStage,
  setIsPlaneAnimating,
  setShowHint,
  soundEngineRef,
  isPlaying,
  ...props
}) {
  const { nodes, materials } = useGLTF(scenePath);
  const groupRef = useRef();

  const { viewport } = useThree();
  const { gl } = useThree();

  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [lastX, setLastX] = useState(0);

  const handlePointerDown = (event) => {
    setIsDragging(true);
    const clientX = event.touches ? event.touches[0].clientX : event.clientX;
    setLastX(clientX);
    setShowHint(false);
    setIsPlaneAnimating(true);
    if (isPlaying) {
      soundEngineRef.current.play();
    }
  };

  const handlePointerUp = (event) => {
    setIsDragging(false);
    setIsPlaneAnimating(false);

    if (isPlaying) {
      soundEngineRef.current.pause();
    }
  };

  const handlePointerMove = (event) => {
    if (isDragging) {
      const clientX = event.touches ? event.touches[0].clientX : event.clientX;
      const delta = (clientX - lastX) / viewport.width;
      const newRotation = rotation + delta * 0.002 * Math.PI;
      setRotation(newRotation);
      setLastX(clientX);
    }
  };

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointermove", handlePointerMove);

    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointermove", handlePointerMove);
    };
  });

  const sectionThresholds = [
    Math.PI / 3,
    (2 * Math.PI) / 3,
    Math.PI,
    (4 * Math.PI) / 3,
    (5 * Math.PI) / 3,
    2 * Math.PI,
  ];

  useEffect(() => {
    const normalizedRotation =
      ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 % Math.PI);

    let sectionIndex = 0;
    while (
      sectionIndex < sectionThresholds.length &&
      normalizedRotation >= sectionThresholds[sectionIndex]
    ) {
      sectionIndex++;
    }

    setCurrentStage(sectionIndex + 1);
  }, [rotation]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = rotation;
    }
  });

  // useGUI((gui) => {
  //   const positionFolder = gui.addFolder("Position");
  //   positionFolder.add(groupRef.current.position, "x", -100, 100);
  //   positionFolder.add(groupRef.current.position, "y", -100, 100);
  //   positionFolder.add(groupRef.current.position, "z", -100, 100);

  //   const rotationFolder = gui.addFolder("Rotation");
  //   rotationFolder.add(groupRef.current.rotation, "x", 0, Math.PI * 2);
  //   rotationFolder.add(groupRef.current.rotation, "y", 0, Math.PI * 2);
  //   rotationFolder.add(groupRef.current.rotation, "z", 0, Math.PI * 2);

  //   const scaleFolder = gui.addFolder("Scale");
  //   scaleFolder.add(groupRef.current.scale, "x", 0.1, 10);
  //   scaleFolder.add(groupRef.current.scale, "y", 0.1, 10);
  //   scaleFolder.add(groupRef.current.scale, "z", 0.1, 10);
  // });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh
        geometry={nodes.pCube11_rocks1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.pCube27_phongE1_0.geometry}
        material={materials.PaletteMaterial002}
      />
      <mesh
        geometry={nodes.pCylinder139_fox_readyfox_white_0.geometry}
        material={materials.PaletteMaterial003}
        position={[0.47, 0, 1.217]}
        rotation={[0, -1.198, 0]}
      />
      <mesh
        geometry={nodes.polySurface1541_water_0.geometry}
        material={materials.PaletteMaterial004}
        position={[-10.297, 0, 5.622]}
        rotation={[0, -0.411, 0]}
      />
      <instancedMesh
        args={[
          nodes.polySurface944_tree_body_0.geometry,
          materials.PaletteMaterial001,
          8,
        ]}
        instanceMatrix={nodes.polySurface944_tree_body_0.instanceMatrix}
      />
      <instancedMesh
        args={[
          nodes.polySurface945_tree1_0.geometry,
          materials.PaletteMaterial001,
          5,
        ]}
        instanceMatrix={nodes.polySurface945_tree1_0.instanceMatrix}
      />
      <instancedMesh
        args={[
          nodes.polySurface946_tree2_0.geometry,
          materials.PaletteMaterial001,
          5,
        ]}
        instanceMatrix={nodes.polySurface946_tree2_0.instanceMatrix}
      />
      <instancedMesh
        args={[
          nodes.polySurface947_tree1_0.geometry,
          materials.PaletteMaterial001,
          5,
        ]}
        instanceMatrix={nodes.polySurface947_tree1_0.instanceMatrix}
      />
      <instancedMesh
        args={[
          nodes.polySurface948_tree_body_0.geometry,
          materials.PaletteMaterial001,
          8,
        ]}
        instanceMatrix={nodes.polySurface948_tree_body_0.instanceMatrix}
      />
      <instancedMesh
        args={[
          nodes.polySurface949_tree_body_0.geometry,
          materials.PaletteMaterial001,
          8,
        ]}
        instanceMatrix={nodes.polySurface949_tree_body_0.instanceMatrix}
      />
    </group>
  );
}

useGLTF.preload(scenePath);
