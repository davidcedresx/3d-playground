import React, { useRef, useEffect } from "react";
import * as THREE from "three";

export default function Playground() {
  const node = useRef(null)

  useEffect(() => {
    // main instances
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();

    // setup renderer
    renderer.setSize(window.innerWidth, window.innerHeight);
    node.current.appendChild(renderer.domElement);

    // create cube
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({ color: 0x7e31eb });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // setup some lighting
    const light = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
    scene.add(light);

    // setup camera
    camera.position.z = 2;

    // animation loop
    const animate = function () {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      cube.rotation.z += 0.01;
      renderer.render(scene, camera);
    };
    animate();
  }, [])


  return (
    <div ref={node} />
  )
}
