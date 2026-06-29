import React, { useRef, useState, useMemo } from 'react';
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
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.2} />
      </mesh>
      <Text position={[0, size + 1.5, 0]} fontSize={1} color="white">
        {name}
      </Text>
    </group>
  );
}

function OrbitingPlanet({ orbitRadius, speed, size, color, name }) {
  const meshRef = useRef();
  const groupRef = useRef();
  const [angle, setAngle] = useState(0);

  useFrame((state, delta) => {
    const newAngle = angle + speed * delta;
    setAngle(newAngle);
    if (groupRef.current) {
      groupRef.current.position.x = Math.cos(newAngle) * orbitRadius;
      groupRef.current.position.z = Math.sin(newAngle) * orbitRadius;
    }
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <Text position={[0, size + 1.2, 0]} fontSize={0.8} color="white">
        {name}
      </Text>
    </group>
  );
}

function OrbitLine({ radius, color }) {
  const points = useMemo(() => {
    const pts = [];
    for (let i = 0; i <= 64; i++) {
      const angle = (i / 64) * 2 * Math.PI;
      pts.push([Math.cos(angle) * radius, 0, Math.sin(angle) * radius]);
    }
    return pts;
  }, [radius]);
  
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

function Asteroid({ orbitRadius, speed, size, color, isHazardous, inclinationX, inclinationZ }) {
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
    <group rotation={[inclinationX, 0, inclinationZ]}>
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
    <div className="w-full h-full min-h-[350px] bg-slate-950 rounded-xl overflow-hidden relative border border-brand-border">
      <div className="absolute top-4 left-4 z-10 bg-black/60 backdrop-blur-sm p-3 rounded-lg border border-slate-800 text-sm shadow-lg text-white">
        <h4 className="font-bold mb-2">Sistem Tata Surya (Simulasi)</h4>
        <div className="flex items-center gap-2 mb-1 text-xs"><div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div> Matahari (Pusat)</div>
        <div className="flex items-center gap-2 mb-1 text-xs"><div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div> Bumi (Mengorbit)</div>
        <div className="flex items-center gap-2 mb-1 text-xs"><div className="w-2.5 h-2.5 rounded-full bg-slate-400"></div> Asteroid Aman</div>
        <div className="flex items-center gap-2 text-xs"><div className="w-2.5 h-2.5 rounded-full bg-red-500"></div> Asteroid Berbahaya</div>
        <p className="text-[9px] text-slate-400 mt-2 italic">*Radius & inklinasi disimulasikan dari data JSON</p>
      </div>

      <Canvas camera={{ position: [0, 25, 35], fov: 45 }}>
        <color attach="background" args={['#020617']} />
        <ambientLight intensity={0.4} />
        <pointLight position={[0, 0, 0]} intensity={2.5} color="#fef08a" distance={100} />
        <directionalLight position={[10, 20, 10]} intensity={1.0} color="#ffffff" />
        
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />

        {/* Sun at Center */}
        <Planet position={[0, 0, 0]} size={3.5} color="#eab308" name="Matahari" />
        
        {/* Earth Orbiting */}
        <OrbitLine radius={15} color="#3b82f6" />
        <OrbitingPlanet orbitRadius={15} speed={0.1} size={1.2} color="#3b82f6" name="Bumi" />

        {/* Asteroids (visualizing max 15 to avoid clutter) */}
        {neoData && neoData.slice(0, 15).map((neo, idx) => {
          // Map actual miss distance to orbit radius (Earth is at 15)
          const distanceOffset = Math.min(10, neo.missDistance * 0.2); 
          const orbitRadius = 15 + (idx % 2 === 0 ? distanceOffset : -distanceOffset);
          
          // Speed based on relative velocity (typical 5-30 km/s)
          const speed = Math.max(0.05, (neo.velocity || 10) * 0.02) * (idx % 3 === 0 ? -1 : 1);
          const isHazard = neo.isPotentiallyHazardous;
          
          // Size based on diameter
          const size = isHazard ? Math.min(1.0, Math.max(0.6, (neo.diameterMax || 100) / 150)) : 0.4;
          
          // Mock Inclination between -20 deg (-0.35 rad) and +20 deg (+0.35 rad)
          // We use pseudo-random based on id character so it's stable
          const charCode = neo.id.charCodeAt(0) || 65;
          const mockIncX = ((charCode % 40) - 20) * (Math.PI / 180);
          const charCode2 = neo.id.charCodeAt(1) || 65;
          const mockIncZ = ((charCode2 % 40) - 20) * (Math.PI / 180);
          
          return (
            <Asteroid 
              key={neo.id}
              name={neo.name}
              orbitRadius={orbitRadius}
              speed={speed}
              size={size}
              color={isHazard ? "#ef4444" : "#94a3b8"}
              isHazardous={isHazard}
              inclinationX={mockIncX}
              inclinationZ={mockIncZ}
            />
          );
        })}
      </Canvas>
    </div>
  );
}
