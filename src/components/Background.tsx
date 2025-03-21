import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Globe() {
  const ref = useRef<THREE.Points>(null);
  const radius = 2;
  const kampalaCoords = {
    lat: 0.3476, // Kampala latitude
    lon: 32.5825 // Kampala longitude
  };

  const points = useMemo(() => {
    const points = [];
    const sphereGeometry = new THREE.SphereGeometry(radius, 64, 64);
    const positions = sphereGeometry.attributes.position.array;

    for (let i = 0; i < positions.length; i += 3) {
      points.push(new THREE.Vector3(positions[i], positions[i + 1], positions[i + 2]));
    }

    // Add extra points around Kampala
    const kampalaRad = {
      lat: kampalaCoords.lat * Math.PI / 180,
      lon: kampalaCoords.lon * Math.PI / 180
    };

    const kampalaPos = new THREE.Vector3(
      radius * Math.cos(kampalaRad.lat) * Math.cos(kampalaRad.lon),
      radius * Math.sin(kampalaRad.lat),
      radius * Math.cos(kampalaRad.lat) * Math.sin(kampalaRad.lon)
    );

    // Add cluster of points around Kampala
    for (let i = 0; i < 100; i++) {
      const offset = new THREE.Vector3(
        (Math.random() - 0.5) * 0.3,
        (Math.random() - 0.5) * 0.3,
        (Math.random() - 0.5) * 0.3
      );
      points.push(kampalaPos.clone().add(offset));
    }

    return Float32Array.from(points.flatMap(p => [p.x, p.y, p.z]));
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y += 0.001;
      
      // Pulsing effect for Kampala region
      const time = state.clock.getElapsedTime();
      const scale = 1 + Math.sin(time) * 0.1;
      ref.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <Points ref={ref} positions={points} stride={3}>
      <PointMaterial
        transparent
        color="#8b5cf6"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
}

export function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Globe />
      </Canvas>
    </div>
  );
}