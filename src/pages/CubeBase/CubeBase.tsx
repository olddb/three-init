import { Inter } from "next/font/google";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useState } from "react";

export default function CubeBase() {
  const [clicked, setClicked] = useState(false);

  useFrame(({ clock }) => {
    if (clicked) {
      myMesh.current.rotation.x = clock.getElapsedTime();
      myMesh.current.rotation.y = clock.getElapsedTime();
    }
  });

  const myMesh = React.useRef();

  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight
        position={[0, 0, 5]}
        color={clicked ? "yellow" : "red"}
      />

      <mesh ref={myMesh} onClick={() => setClicked(!clicked)}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial />
      </mesh>
    </>
  );
}
