import { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Island } from "../../assets/foxs_islands/Scene";
import { BigPlane } from "../../assets/biplane/Scene";
import { Bird } from '../../assets/bird/Scene';
// import { Fox } from '../../assets/fox/Scene';
import PlayButton from "../PlayButton/PalyButton";
import { mediaConstants } from "../../config/mediaConstants";
import "./HomePage.css";

const HomePage = () => {
  const soundEngineRef = useRef(new Audio(mediaConstants.engineSound));
  soundEngineRef.current.volume = 0.1;

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [isPlaneAnimating, setIsPlaneAnimating] = useState(false);
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    const audio = new Audio(mediaConstants.muiscPath);
    audio.volume = 0.5;
    audio.loop = true;

    if (isPlaying) {
      audio.play();
    }

    return () => {
      audio.pause();
    };
  }, [isPlaying]);

  return (
    <>
      <div className="homepage-container">
        <PlayButton isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
        <Canvas camera={{ fov: 60, near: 0.1, far: 1000 }}>
          <ambientLight intensity={0.9} />
          <spotLight position={[20, 50, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[50, 50, 20]} />
          <Island
            position={[0, -5.7, -43.4]}
            rotation={[0.1, 0.67, 0]}
            scale={[1, 1, 1]}
            setCurrentStage={setCurrentStage}
            setIsPlaneAnimating={setIsPlaneAnimating}
            soundEngineRef={soundEngineRef}
            isPlaying={isPlaying}
            setShowHint={setShowHint}
          />

          <BigPlane
            position={[0, -2, -2]}
            scale={[1, 1, 1]}
            rotation={[0, 0, 0]}
            isPlaneAnimating={isPlaneAnimating}
          />

          <Bird
            rotation={[0, 1, 0]}
            scale={[0.4, 0.4, 0.4]}
          />

          {/* <Fox
            position={[-3.1, -0.7, 0]}
            scale={[0.06, 0.06, 0.06]}
            rotation={[0, -1, 0]}
          /> */}
        </Canvas>
      </div>
    </>
  );
};

export default HomePage;
