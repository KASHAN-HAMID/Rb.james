
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';

function WaveParticles() {
  const ref = useRef<THREE.Points>(null);
  
  const particles = useMemo(() => {
    const temp = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      const x = (Math.random() - 0.5) * 50;
      const y = (Math.random() - 0.5) * 50;
      const z = (Math.random() - 0.5) * 50;
      temp.set([x, y, z], i * 3);
    }
    return temp;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.1;
      
      const positions = ref.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i];
        const z = positions[i + 2];
        positions[i + 1] = Math.sin(x * 0.1 + state.clock.elapsedTime * 0.5) * 
                          Math.cos(z * 0.1 + state.clock.elapsedTime * 0.3) * 2;
      }
      ref.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#4F9CF9"
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function FloatingDots() {
  const ref = useRef<THREE.Points>(null);
  
  const particles = useMemo(() => {
    const temp = new Float32Array(800 * 3);
    for (let i = 0; i < 800; i++) {
      temp.set([
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 40,
      ], i * 3);
    }
    return temp;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.05;
      const positions = ref.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += Math.sin(state.clock.elapsedTime + positions[i]) * 0.01;
      }
      ref.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#FFD700"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#4F9CF9" />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#FFD700" />
      
      <WaveParticles />
      <FloatingDots />
    </>
  );
}

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      {/* 3D Canvas Background */}
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        className="absolute inset-0"
      >
        <Scene />
      </Canvas>
      
      {/* Gradient Overlay */}
      <motion.div 
        className="absolute inset-0 opacity-95"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.95 }}
        transition={{ duration: 2 }}
        style={{
          background: `
            radial-gradient(circle at 20% 20%, rgba(79, 156, 249, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(255, 215, 0, 0.06) 0%, transparent 50%),
            linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.95) 100%)
          `,
        }}
      />

      {/* Animated gradient mesh */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            'radial-gradient(circle at 10% 20%, rgba(79, 156, 249, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 90% 80%, rgba(255, 215, 0, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 50%, rgba(79, 156, 249, 0.08) 0%, transparent 50%)',
            'radial-gradient(circle at 10% 20%, rgba(79, 156, 249, 0.1) 0%, transparent 50%)',
          ]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
