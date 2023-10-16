import { Canvas } from "@react-three/fiber";
import { Office } from "../../assets/room/WawaOffice";
import { OrbitControls, ScrollControls } from "@react-three/drei";
import "./index.css";

const ScrollRoom = () => {
  return (
    <div className="scroll-room-container">
      <Canvas
        camera={{
          fov: 64,
          position: [2.3, 1.5, 2.3],
        }}
      >
        <ambientLight intensity={1} />
        <OrbitControls enableZoom={false} />
        <ScrollControls pages={3} damping={0.25}>
          <Office />
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default ScrollRoom;
