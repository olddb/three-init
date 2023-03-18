import { Inter } from "next/font/google";
import { Canvas, useFrame } from "@react-three/fiber";
import CubeBase from "./CubeBase/CubeBase";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Canvas>
        <CubeBase />
      </Canvas>
    </>
  );
}
