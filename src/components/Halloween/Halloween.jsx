import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Lantern } from "../../assets/halloween_lantern/Scene";
import { HalloweenModel } from "../../assets/halloween/Scene";
import { Ghost } from "../../assets/the_ghost/Scene";
import { Fire } from "../../assets/fire/Scene";
import "./Halloween.css";

const Halloween = () => {
  return (
    <div className="halloween-container">
      <Canvas
        camera={{
          fov: 90,
        }}
      >
        <ambientLight intensity={1} />
        <pointLight color={"orange"} intensity={1} position={[2, 3, 4]} />
        <OrbitControls />
        <Lantern position={[0, 0.3, 0]} scale={[0.8, 0.8, 0.8]} />
        <HalloweenModel />
        <Ghost position={[1, 1, 0]} scale={[0.004, 0.004, 0.004]} />
        <Fire position={[1.5, 0.26, 3]} />
      </Canvas>
    </div>
  );
};

export default Halloween;
