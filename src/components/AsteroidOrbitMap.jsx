import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Text } from '@react-three/drei';

function Planet({ position, size, color, name }) {
  const meshRef = useRef();
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group position={position}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <Text position={[0, size + 1, 0]} fontSize={1} color="white">
        {name}
      </Text>
    </group>
  );
}

function OrbitLine({ radius, color }) {
  const points = [];
  for (let i = 0; i <= 64; i++) {
    const angle = (i / 64) * 2 * Math.PI;
    points.push([Math.cos(angle) * radius, 0, Math.sin(angle) * radius]);
  }
  
  return (
    <line>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length}
          array={new Float32Array(points.flat())}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial color={color} opacity={0.3} transparent />
    </line>
  );
}

function Asteroid({ orbitRadius, speed, size, color, name, isHazardous }) {
  const meshRef = useRef();
  const [angle, setAngle] = useState(Math.random() * Math.PI * 2);

  useFrame((state, delta) => {
    const newAngle = angle + speed * delta;
    setAngle(newAngle);
    if (meshRef.current) {
      meshRef.current.position.x = Math.cos(newAngle) * orbitRadius;
      meshRef.current.position.z = Math.sin(newAngle) * orbitRadius;
      meshRef.current.rotation.x += 0.05;
      meshRef.current.rotation.y += 0.05;
    }
  });

  return (
    <group>
      <OrbitLine radius={orbitRadius} color={isHazardous ? "#ef4444" : "#9ca3af"} />
      <mesh ref={meshRef}>
        <dodecahedronGeometry args={[size, 0]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </group>
  );
}

export function AsteroidOrbitMap({ neoData }) {
  return (
    <div className="w-full h-[500px] bg-slate-950 rounded-md overflow-hidden relative border">
      <div className="absolute top-4 left-4 z-10 bg-background/80 backdrop-blur-sm p-3 rounded-md border text-sm">
        <h4 className="font-semibold mb-2">Legenda</h4>
        <div className="flex items-center gap-2 mb-1"><div className="w-3 h-3 rounded-full bg-yellow-500"></div> Matahari</div>
        <div className="flex items-center gap-2 mb-1"><div className="w-3 h-3 rounded-full bg-blue-500"></div> Bumi</div>
        <div className="flex items-center gap-2 mb-1"><div className="w-3 h-3 rounded-full bg-slate-400"></div> Asteroid Aman</div>
        <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-red-500"></div> Asteroid Berbahaya</div>
        <p className="text-xs text-muted-foreground mt-2 italic">*Skala dan jarak diubahsuai untuk visualisasi</p>
      </div>

      <Canvas camera={{ position: [0, 20, 30], fov: 45 }}>
        <color attach="background" args={['#020617']} />
        <ambientLight intensity={0.5} />
        <pointLight position={[0, 0, 0]} intensity={2} color="#fef08a" />
        <directionalLight position={[10, 20, 10]} intensity={1.5} color="#ffffff" />
        
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />

        {/* Sun */}
        <Planet position={[0, 0, 0]} size={3} color="#eab308" name="Matahari" />
        
        {/* Earth */}
        <OrbitLine radius={15} color="#3b82f6" />
        <Planet position={[15, 0, 0]} size={1} color="#3b82f6" name="Bumi" />

        {/* Asteroids (visualizing max 15 to avoid clutter) */}
        {neoData && neoData.slice(0, 15).map((neo, idx) => {
          // Calculate arbitrary orbit paths based on ID just for visual simulation
          const orbitRadius = 10 + (parseInt(neo.id.substring(3, 7)) % 15);
          const speed = 0.1 + (parseInt(neo.id.substring(0, 2)) % 10) * 0.05;
          const isHazard = neo.isPotentiallyHazardous;
          
          return (
            <Asteroid 
              key={neo.id}
              name={neo.name}
              orbitRadius={orbitRadius}
              speed={speed}
              size={isHazard ? 0.6 : 0.4}
              color={isHazard ? "#ef4444" : "#94a3b8"}
              isHazardous={isHazard}
            />
          );
        })}
      </Canvas>
    </div>
  );
}
