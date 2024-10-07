import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const CubeVisualizer: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;

    // Create Scene
    const scene = new THREE.Scene();

    // Set up Camera
    const camera = new THREE.PerspectiveCamera(75, mount!.clientWidth / mount!.clientHeight, 0.1, 1000);
    camera.position.z = 5;

    // Set up Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mount!.clientWidth, mount!.clientHeight);
    mount!.appendChild(renderer.domElement);

    // Create Cube Geometry and Material
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Add Wireframe to the Cube
    const wireframeGeometry = new THREE.WireframeGeometry(geometry);
    const wireframeMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
    const wireframe = new THREE.LineSegments(wireframeGeometry, wireframeMaterial);
    scene.add(wireframe);

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the cube and wireframe
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      wireframe.rotation.x += 0.01;
      wireframe.rotation.y += 0.01;

      // Render the scene from the camera's perspective
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup when component unmounts
    return () => {
      mount!.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '100vh' }} />;
};

export default CubeVisualizer;
