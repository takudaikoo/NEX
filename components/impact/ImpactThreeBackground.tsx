"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ImpactThreeBackground: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Init Scene
        const scene = new THREE.Scene();
        // Fog for depth fading
        scene.fog = new THREE.FogExp2(0x050505, 0.05);

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 10;
        camera.position.y = 2;

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        containerRef.current.appendChild(renderer.domElement);

        // --- Vector Lines (Grid/Tunnel effect) ---
        const geometry = new THREE.BufferGeometry();
        const points = [];
        const size = 30;
        const step = 2;

        for (let i = -size; i <= size; i += step) {
            // Floor lines (X-axis)
            points.push(-size, 0, i);
            points.push(size, 0, i);
            // Floor lines (Z-axis)
            points.push(i, 0, -size);
            points.push(i, 0, size);

            // Ceiling lines (mirror)
            points.push(-size, 10, i);
            points.push(size, 10, i);
            points.push(i, 10, -size);
            points.push(i, 10, size);
        }

        geometry.setAttribute('position', new THREE.Float32BufferAttribute(points, 3));
        const material = new THREE.LineBasicMaterial({ color: 0x00f3ff, transparent: true, opacity: 0.15 }); // Tech Cyan
        const grid = new THREE.LineSegments(geometry, material);
        scene.add(grid);

        // Add some moving particles for "Data Flow"
        const pGeo = new THREE.BufferGeometry();
        const pCount = 200;
        const pPos = new Float32Array(pCount * 3);
        for (let i = 0; i < pCount; i++) {
            pPos[i * 3] = (Math.random() - 0.5) * 40;
            pPos[i * 3 + 1] = Math.random() * 10;
            pPos[i * 3 + 2] = (Math.random() - 0.5) * 60; // Deep depth
        }
        pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
        const pMat = new THREE.PointsMaterial({ color: 0x00f3ff, size: 0.05, transparent: true, opacity: 0.5 });
        const particles = new THREE.Points(pGeo, pMat);
        scene.add(particles);


        // Animation
        let time = 0;
        const animate = () => {
            requestAnimationFrame(animate);
            time += 0.005;

            // Move grid slowly backward to simulate forward motion
            grid.position.z = (time * 2) % step;

            // Particles flow
            const positions = particles.geometry.attributes.position.array as Float32Array;
            for (let i = 0; i < pCount; i++) {
                positions[i * 3 + 2] += 0.1; // Move towards camera
                if (positions[i * 3 + 2] > 10) {
                    positions[i * 3 + 2] = -50; // Reset
                }
            }
            particles.geometry.attributes.position.needsUpdate = true;

            renderer.render(scene, camera);
        };
        animate();

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (containerRef.current && renderer.domElement) {
                containerRef.current.removeChild(renderer.domElement);
            }
            renderer.dispose();
        };
    }, []);

    return (
        <div ref={containerRef} className="fixed inset-0 z-0 bg-[#050505]" />
    );
};

export default ImpactThreeBackground;
