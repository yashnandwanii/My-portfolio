import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, RoundedBox, Html } from "@react-three/drei";

const IPhone3D: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 35 }} style={{ background: 'transparent' }}>
        {/* iPhone body */}
        <RoundedBox args={[2, 4.2, 0.2]} radius={0.25} smoothness={8} position={[0, 0, 0]}>
          {/* @ts-ignore - three/fiber intrinsic element types in this project setup */}
          <meshStandardMaterial color="#18181b" metalness={0.7} roughness={0.3} />
        </RoundedBox>
        {/* Screen (where content will be rendered) */}
        <Html
          transform
          position={[0, 0, 0.12]}
          style={{ width: 340, height: 740, borderRadius: 32, overflow: 'hidden', background: 'white' }}
          className="overflow-hidden rounded-3xl shadow-lg"
        >
          {children}
        </Html>
        {/* Lighting */}
  {/* @ts-ignore - three/fiber intrinsic element types in this project setup */}
  <ambientLight intensity={0.7} />
  {/* @ts-ignore - three/fiber intrinsic element types in this project setup */}
  <directionalLight position={[5, 5, 5]} intensity={0.5} />
        {/* Controls for demo, can be removed for production */}
        <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2.1} minPolarAngle={Math.PI / 2.1} />
      </Canvas>
    </div>
  );
};

export default IPhone3D; 