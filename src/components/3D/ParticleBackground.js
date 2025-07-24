import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function ParticleBackground({ count = 5000 }) {
  const pointsRef = useRef();
  const linesRef = useRef();

  const { positions, colors } = useMemo(() => {
    const colorPalette = [
      new THREE.Color('#00aaff'), // Primary Theme Color
      new THREE.Color('#ffffff'), // White
      new THREE.Color('#888888'), // Muted Grey
    ];
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3 + 0] = THREE.MathUtils.randFloatSpread(100);
      pos[i * 3 + 1] = THREE.MathUtils.randFloatSpread(100);
      pos[i * 3 + 2] = THREE.MathUtils.randFloatSpread(100);
      const randomColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      col[i * 3 + 0] = randomColor.r;
      col[i * 3 + 1] = randomColor.g;
      col[i * 3 + 2] = randomColor.b;
    }
    return { positions: pos, colors: col };
  }, [count]);

  const mousePosition = new THREE.Vector3(9999, 9999, 9999);

  useFrame((state, delta) => {
    pointsRef.current.rotation.y += delta * 0.02;
    mousePosition.x = (state.pointer.x * state.viewport.width) / 2;
    mousePosition.y = (state.pointer.y * state.viewport.height) / 2;

    const positions = pointsRef.current.geometry.attributes.position.array;
    const linePositions = linesRef.current.geometry.attributes.position.array;
    let vertexIndex = 0;
    const connectionDistance = 2.5;

    for (let i = 0; i < count; i++) {
      const pX = positions[i * 3];
      const pY = positions[i * 3 + 1];
      const pZ = positions[i * 3 + 2];
      const currentPoint = new THREE.Vector3(pX, pY, pZ);

      if (currentPoint.distanceTo(mousePosition) < connectionDistance) {
        linePositions[vertexIndex++] = mousePosition.x;
        linePositions[vertexIndex++] = mousePosition.y;
        linePositions[vertexIndex++] = mousePosition.z;
        linePositions[vertexIndex++] = pX;
        linePositions[vertexIndex++] = pY;
        linePositions[vertexIndex++] = pZ;
      }
    }

    for (let i = vertexIndex; i < linePositions.length; i++) {
      linePositions[i] = 0;
    }

    linesRef.current.geometry.setDrawRange(0, vertexIndex / 3);
    linesRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
          <bufferAttribute attach="attributes-color" count={colors.length / 3} array={colors} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={0.02} vertexColors={true} sizeAttenuation={true} />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={count} array={new Float32Array(count * 3)} itemSize={3} />
        </bufferGeometry>
        <lineBasicMaterial color="#ffffff" transparent={true} opacity={0.3} depthWrite={false} />
      </lineSegments>
    </group>
  );
}
