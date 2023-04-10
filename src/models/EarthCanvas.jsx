import React,{Suspense} from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import gltf from './assets/GLTF.jsx'

const Earth = () => {
  const earth = useGLTF(gltf.earth);

  return <primitive object={spider.scene} />;
};

export default function SpiderCanvas() {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<>loading...</>}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Spider />

        <Preload all />
      </Suspense>
    </Canvas>
  );
}
