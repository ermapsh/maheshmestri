"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function HeroCanvas({ className = "" }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || typeof window === "undefined") return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 24;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 1. Interactive 3D Wireframe Core (Icosahedron / Cyber Geo)
    const geo = new THREE.IcosahedronGeometry(7, 2);
    const wireframeMat = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6, // electric purple
      wireframe: true,
      transparent: true,
      opacity: 0.28,
    });
    const coreMesh = new THREE.Mesh(geo, wireframeMat);
    scene.add(coreMesh);

    // Inner glowing ring
    const ringGeo = new THREE.TorusGeometry(8.5, 0.08, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4, // electric cyan
      transparent: true,
      opacity: 0.65,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 3;
    scene.add(ringMesh);

    // Secondary ring
    const ringGeo2 = new THREE.TorusGeometry(10, 0.05, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0xa855f7, // purple
      transparent: true,
      opacity: 0.45,
    });
    const ringMesh2 = new THREE.Mesh(ringGeo2, ringMat2);
    ringMesh2.rotation.y = Math.PI / 4;
    scene.add(ringMesh2);

    // 2. Starfield / Floating Particle Galaxy
    const particleCount = 700;
    const posArray = new Float32Array(particleCount * 3);
    const colorArray = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color(0x06b6d4); // cyan
    const color2 = new THREE.Color(0x8b5cf6); // violet
    const color3 = new THREE.Color(0x38bdf8); // sky

    for (let i = 0; i < particleCount * 3; i += 3) {
      const r = 12 + Math.random() * 24;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      posArray[i] = r * Math.sin(phi) * Math.cos(theta);
      posArray[i + 1] = r * Math.sin(phi) * Math.sin(theta);
      posArray[i + 2] = r * Math.cos(phi);

      const chosenColor = Math.random() > 0.5 ? (Math.random() > 0.5 ? color1 : color2) : color3;
      colorArray[i] = chosenColor.r;
      colorArray[i + 1] = chosenColor.g;
      colorArray[i + 2] = chosenColor.b;
    }

    const particlesGeo = new THREE.BufferGeometry();
    particlesGeo.setAttribute("position", new THREE.BufferAttribute(posArray, 3));
    particlesGeo.setAttribute("color", new THREE.BufferAttribute(colorArray, 3));

    const particlesMat = new THREE.PointsMaterial({
      size: 0.16,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particlesMesh);

    // Mouse interactive coordinates
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onPointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetX = x * 2.5;
      targetY = y * 2.5;
    };

    window.addEventListener("mousemove", onPointerMove, { passive: true });

    // Resize handler
    const onResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    const resizeObserver = new ResizeObserver(onResize);
    resizeObserver.observe(container);

    // Animation Loop
    let animationId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth damping mouse follower
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      coreMesh.rotation.y = elapsedTime * 0.15 + mouseX * 0.3;
      coreMesh.rotation.x = elapsedTime * 0.08 + mouseY * 0.3;

      ringMesh.rotation.z = elapsedTime * 0.25;
      ringMesh.rotation.x = Math.PI / 3 + mouseY * 0.2;

      ringMesh2.rotation.z = -elapsedTime * 0.2;
      ringMesh2.rotation.y = Math.PI / 4 + mouseX * 0.2;

      particlesMesh.rotation.y = -elapsedTime * 0.04;
      particlesMesh.rotation.x = elapsedTime * 0.02;

      camera.position.x = mouseX * 1.5;
      camera.position.y = mouseY * 1.5;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", onPointerMove);
      resizeObserver.disconnect();
      renderer.dispose();
      geo.dispose();
      wireframeMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      particlesGeo.dispose();
      particlesMat.dispose();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      aria-hidden="true"
    />
  );
}

export default HeroCanvas;

