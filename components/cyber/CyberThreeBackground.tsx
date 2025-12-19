"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const CyberThreeBackground: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Init Scene
        const scene = new THREE.Scene();
        // Darker fog for depth
        scene.fog = new THREE.FogExp2(0x020b05, 0.02);

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(0, 5, 10);
        camera.lookAt(0, 0, 0);

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        containerRef.current.appendChild(renderer.domElement);

        // --- Matrix / Circuit Grid Effect ---
        // Unlike Impact's "tunnel", this is a flat, scanning grid
        const gridHelper = new THREE.GridHelper(100, 50, 0x008F11, 0x003300); // Cyber Green / Dark Green
        gridHelper.position.y = -2;
        scene.add(gridHelper);

        // Vertical "Data Columns" (Matrix Rain style static pillars)
        const geometry = new THREE.BoxGeometry(0.2, 10, 0.2);
        const material = new THREE.MeshBasicMaterial({
            color: 0x00FF41,
            transparent: true,
            opacity: 0.3,
            wireframe: true
        });

        const columns: THREE.Mesh[] = [];
        for (let i = 0; i < 20; i++) {
            const mesh = new THREE.Mesh(geometry, material);
            mesh.position.x = (Math.random() - 0.5) * 40;
            mesh.position.z = (Math.random() - 0.5) * 40;
            mesh.position.y = Math.random() * 5;
            mesh.scale.y = Math.random() * 2 + 0.5;
            scene.add(mesh);
            columns.push(mesh);
        }

        // Floating "Bits" (Random cubes)
        const bitGeo = new THREE.BoxGeometry(0.5, 0.5, 0.5);
        const bitMat = new THREE.MeshBasicMaterial({ color: 0xE34234, wireframe: false }); // Vermilion accents
        const bits: THREE.Mesh[] = [];

        for (let i = 0; i < 30; i++) {
            const bit = new THREE.Mesh(bitGeo, bitMat);
            bit.position.set(
                (Math.random() - 0.5) * 30,
                Math.random() * 10,
                (Math.random() - 0.5) * 30
            );
            scene.add(bit);
            bits.push(bit);
        }

        // Animation Loop
        const animate = () => {
            requestAnimationFrame(animate);

            // Rotate grid slightly
            gridHelper.rotation.y += 0.001;

            // Pulse columns
            columns.forEach((col, i) => {
                col.position.y += Math.sin(Date.now() * 0.001 + i) * 0.02;
                (col.material as THREE.Material).opacity = 0.3 + Math.sin(Date.now() * 0.002 + i) * 0.2;
            });

            // Float bits
            bits.forEach((bit, i) => {
                bit.rotation.x += 0.02;
                bit.rotation.y += 0.02;
                bit.position.y += Math.sin(Date.now() * 0.001 + i) * 0.01;
            });

            renderer.render(scene, camera);
        };

        animate();

        // Resize Handler
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (containerRef.current) {
                containerRef.current.innerHTML = '';
            }
            renderer.dispose();
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none bg-[#020b05]" // Dark Matrix background
        />
    );
};

export default CyberThreeBackground;
