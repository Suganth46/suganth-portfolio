import { Canvas } from '@react-three/fiber';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import ParticleBackground from './ParticleBackground';
import CameraRig from './CameraRig';

export default function Scene3D() {
  return (
    <Canvas
      style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }}
      camera={{ position: [0, 0, 5], fov: 60 }}
    >
      <ParticleBackground />
      <CameraRig />
      <EffectComposer>
        <Bloom
          intensity={0.4}
          luminanceThreshold={0.5}
          luminanceSmoothing={0.9}
        />
      </EffectComposer>
    </Canvas>
  );
}
