import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Environment, MeshDistortMaterial, Sphere } from "@react-three/drei";
import { Suspense, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function AnimatedCandy({ position, color, scale = 1 }: { position: [number, number, number]; color: string; scale?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <sphereGeometry args={[1, 32, 32]} />
        <MeshDistortMaterial
          color={color}
          envMapIntensity={0.4}
          clearcoat={0.8}
          clearcoatRoughness={0}
          metalness={0.2}
          roughness={0.1}
          distort={0.3}
          speed={2}
        />
      </mesh>
    </Float>
  );
}

function CandyWrapper({ position, rotation }: { position: [number, number, number]; rotation?: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.5}>
      <mesh ref={meshRef} position={position} rotation={rotation || [0, 0, 0]}>
        <capsuleGeometry args={[0.5, 1.5, 8, 16]} />
        <meshStandardMaterial
          color="#FFD700"
          roughness={0.2}
          metalness={0.8}
          emissive="#FFD700"
          emissiveIntensity={0.1}
        />
      </mesh>
    </Float>
  );
}

function ChocolateBar({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.3;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.3} floatIntensity={1}>
      <group ref={meshRef} position={position}>
        <mesh>
          <boxGeometry args={[2, 0.3, 1]} />
          <meshStandardMaterial
            color="#5D3A1A"
            roughness={0.3}
            metalness={0.1}
          />
        </mesh>
        {/* Chocolate squares */}
        {[...Array(6)].map((_, i) => (
          <mesh key={i} position={[(i % 3 - 1) * 0.6, 0.17, (Math.floor(i / 3) - 0.5) * 0.4]}>
            <boxGeometry args={[0.5, 0.05, 0.35]} />
            <meshStandardMaterial color="#4A2E15" roughness={0.2} />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

export function CandyScene() {
  return (
    <div className="absolute inset-0 -z-10 opacity-60 dark:opacity-40">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        dpr={[1, 2]}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} intensity={0.5} color="#ffd700" />
          
          {/* Candies */}
          <AnimatedCandy position={[-3, 2, 0]} color="#FF6B9D" scale={0.8} />
          <AnimatedCandy position={[3, -1, -1]} color="#FF9F43" scale={0.6} />
          <AnimatedCandy position={[-2, -2, 1]} color="#4ECDC4" scale={0.5} />
          <AnimatedCandy position={[2.5, 2.5, -0.5]} color="#A855F7" scale={0.7} />
          
          {/* Wrapped candies */}
          <CandyWrapper position={[4, 0, 0]} rotation={[0.3, 0.5, 0.2]} />
          <CandyWrapper position={[-4, -1, -1]} rotation={[-0.2, 0.8, 0.1]} />
          
          {/* Chocolate */}
          <ChocolateBar position={[0, -3, -2]} />
          
          <Environment preset="sunset" />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
