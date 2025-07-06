import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Text, Float, OrbitControls, Stars, Sphere, Box } from '@react-three/drei';
import * as THREE from 'three';

// Floating Code Elements with better typography
function FloatingCode({ position, code, color }: { position: [number, number, number], code: string, color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime * 0.3) * 0.002;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.3} floatIntensity={0.3}>
      <Text
        ref={meshRef}
        position={position}
        fontSize={0.4}
        color={color}
        anchorX="center"
        anchorY="middle"
        maxWidth={3}
        textAlign="center"
      >
        {code}
      </Text>
    </Float>
  );
}

// App Icons and UI Elements
function AppIcons() {
  const iconsRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (iconsRef.current) {
      iconsRef.current.rotation.y += 0.001;
      iconsRef.current.children.forEach((child, index) => {
        child.position.y += Math.sin(state.clock.elapsedTime * 0.4 + index) * 0.001;
        child.rotation.x += 0.005;
      });
    }
  });

  const appIcons = useMemo(() => [
    { name: "📱", position: [-8, 3, -5], color: "#6366f1" },
    { name: "💻", position: [8, -2, -3], color: "#a855f7" },
    { name: "⚡", position: [-6, -4, 4], color: "#ec4899" },
    { name: "🔧", position: [6, 5, 2], color: "#06b6d4" },
    { name: "🚀", position: [-4, 6, -2], color: "#22c55e" },
    { name: "🎯", position: [4, -6, 6], color: "#f59e0b" },
  ], []);

  return (
    <group ref={iconsRef}>
      {appIcons.map((icon, index) => (
        <Float key={index} speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
          <Text
            position={icon.position as [number, number, number]}
            fontSize={1}
            color={icon.color}
            anchorX="center"
            anchorY="middle"
          >
            {icon.name}
          </Text>
        </Float>
      ))}
    </group>
  );
}

// Floating Geometric Shapes representing tech concepts
function TechShapes() {
  const shapesRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (shapesRef.current) {
      shapesRef.current.rotation.y += 0.001;
      shapesRef.current.children.forEach((child, index) => {
        child.position.y += Math.sin(state.clock.elapsedTime * 0.3 + index) * 0.001;
        child.rotation.x += 0.008;
        child.rotation.z += 0.003;
      });
    }
  });

  const shapes = useMemo(() => {
    const geometries = [
      new THREE.BoxGeometry(0.4, 0.4, 0.4), // Mobile app
      new THREE.SphereGeometry(0.3, 16, 16), // API
      new THREE.ConeGeometry(0.25, 0.5, 8), // Database
      new THREE.TorusGeometry(0.15, 0.08, 8, 16), // Network
      new THREE.OctahedronGeometry(0.25), // Algorithm
    ];
    
    return geometries.map((geometry, index) => ({
      geometry,
      position: [
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 12
      ] as [number, number, number],
      color: ['#6366f1', '#a855f7', '#ec4899', '#06b6d4', '#22c55e'][index % 5]
    }));
  }, []);

  return (
    <group ref={shapesRef}>
      {shapes.map((shape, index) => (
        <mesh key={index} position={shape.position}>
          <primitive object={shape.geometry} />
          <meshStandardMaterial 
            color={shape.color} 
            transparent 
            opacity={0.2}
            wireframe
          />
        </mesh>
      ))}
    </group>
  );
}

// Data Flow Lines representing API calls and data streams
function DataFlowLines() {
  const linesRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.children.forEach((child, index) => {
        const line = child as THREE.Line;
        const positions = line.geometry.attributes.position.array as Float32Array;
        
        for (let i = 0; i < positions.length; i += 3) {
          positions[i + 1] += Math.sin(state.clock.elapsedTime * 0.3 + index + i) * 0.0005;
        }
        
        line.geometry.attributes.position.needsUpdate = true;
      });
    }
  });

  const lines = useMemo(() => {
    const lineData = [];
    for (let i = 0; i < 12; i++) {
      const points = [];
      const startX = (Math.random() - 0.5) * 15;
      const startY = (Math.random() - 0.5) * 8;
      const startZ = (Math.random() - 0.5) * 15;
      
      for (let j = 0; j < 8; j++) {
        points.push(
          new THREE.Vector3(
            startX + Math.sin(j * 0.6) * 1.5,
            startY + Math.cos(j * 0.4) * 1,
            startZ + Math.sin(j * 0.8) * 1.5
          )
        );
      }
      
      lineData.push({
        points,
        color: ['#6366f1', '#a855f7', '#ec4899'][i % 3]
      });
    }
    return lineData;
  }, []);

  return (
    <group ref={linesRef}>
      {lines.map((line, index) => (
        <line key={index}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={line.points.length}
              array={new Float32Array(line.points.flatMap(p => [p.x, p.y, p.z]))}
              itemSize={3}
              args={[new Float32Array(line.points.flatMap(p => [p.x, p.y, p.z])), 3]}
            />
          </bufferGeometry>
          <lineBasicMaterial color={line.color} transparent opacity={0.3} />
        </line>
      ))}
    </group>
  );
}

// Main Scene Component
function Scene() {
  const { camera } = useThree();
  
  useFrame((state) => {
    // Very subtle camera movement
    camera.position.x = Math.sin(state.clock.elapsedTime * 0.05) * 1;
    camera.position.z = Math.cos(state.clock.elapsedTime * 0.05) * 1;
    camera.lookAt(0, 0, 0);
  });

  return (
    <>
      {/* Lighting setup */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={0.6} />
      <pointLight position={[-10, -10, -5]} intensity={0.4} color="#6366f1" />
      <pointLight position={[10, -10, -5]} intensity={0.4} color="#a855f7" />
      
      {/* Stars background */}
      <Stars 
        radius={80} 
        depth={40} 
        count={3000} 
        factor={3} 
        saturation={0} 
        fade 
        speed={0.8}
      />
      
      {/* Tech shapes */}
      <TechShapes />
      
      {/* Data flow lines */}
      <DataFlowLines />
      
      {/* Central sphere representing the developer */}
      <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1.5}>
        <Sphere args={[0.8, 24, 24]} position={[0, 0, 0]}>
          <meshStandardMaterial 
            color="#6366f1" 
            transparent 
            opacity={0.2}
            wireframe
          />
        </Sphere>
      </Float>
      
      {/* Subtle orbit controls */}
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        autoRotate 
        autoRotateSpeed={0.3}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </>
  );
}

// Main Animated Background Component
const AnimatedBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 70 }}
        style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <Scene />
      </Canvas>
      
      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/30 pointer-events-none" />
    </div>
  );
};

export default AnimatedBackground; 