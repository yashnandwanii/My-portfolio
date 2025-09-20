import React from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

// Camera controller
function CameraController() {
  const { camera } = useThree();
  
  useFrame((state) => {
    // Very subtle camera movement
    camera.position.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.5;
    camera.position.z = Math.cos(state.clock.elapsedTime * 0.05) * 0.5;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

// Main Scene Component
function Scene() {
  return (
    <>
      {/* Camera controller */}
      <CameraController />
      
      {/* Stars background - this works reliably */}
      <Stars 
        radius={60} 
        depth={30} 
        count={1500} 
        factor={2} 
        saturation={0} 
        fade 
        speed={0.5}
      />
      
      {/* Simple orbit controls */}
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        autoRotate 
        autoRotateSpeed={0.2}
        maxPolarAngle={Math.PI / 1.8}
        minPolarAngle={Math.PI / 3}
      />
    </>
  );
}

// Main Animated Background Component
const AnimatedBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <Scene />
      </Canvas>
      
      {/* Enhanced CSS-based animated background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating particles using CSS */}
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-indigo-400 rounded-full opacity-60 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
        
        {/* Overlay gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/20" />
      </div>
    </div>
  );
};

export default AnimatedBackground; 