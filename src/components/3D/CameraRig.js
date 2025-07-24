import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function CameraRig() {
  useFrame((state) => {
    state.camera.position.lerp(
      new THREE.Vector3(state.pointer.x * 0.5, state.pointer.y * 0.5, 5),
      0.03
    );
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}
