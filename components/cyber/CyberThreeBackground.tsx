"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const CyberThreeBackground: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Init Scene
        const scene = new THREE.Scene();
        // Fog for depth fading
        scene.fog = new THREE.FogExp2(0x0B1026, 0.05);

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 20;

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        containerRef.current.appendChild(renderer.domElement);

        // --- Digital Light Stream Effect (Particles moving diagonally) ---
        const particleCount = 1000;
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const sizes = new Float32Array(particleCount);
        const speeds = new Float32Array(particleCount);

        for (let i = 0; i < particleCount; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 100; // X
            positions[i * 3 + 1] = (Math.random() - 0.5) * 100; // Y
            positions[i * 3 + 2] = (Math.random() - 0.5) * 100; // Z
            sizes[i] = Math.random() * 0.2;
            speeds[i] = 0.1 + Math.random() * 0.3;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

        // Shader Material for glowing particles
        const material = new THREE.PointsMaterial({
            color: 0x00f3ff,
            size: 0.2, // Will be scaled by attribute if using ShaderMaterial but PointsMaterial is simpler
            transparent: true,
            opacity: 0.8,
            vertexColors: false,
            blending: THREE.AdditiveBlending
        });

        const particles = new THREE.Points(geometry, material);
        scene.add(particles);

        // Add some "Data Packets" (Larger, faster particles)
        const packetGeo = new THREE.BufferGeometry();
        const packetCount = 50;
        const packetPos = new Float32Array(packetCount * 3);
        for (let i = 0; i < packetCount; i++) {
            packetPos[i * 3] = (Math.random() - 0.5) * 80;
            packetPos[i * 3 + 1] = (Math.random() - 0.5) * 80;
            packetPos[i * 3 + 2] = (Math.random() - 0.5) * 80;
        }
        packetGeo.setAttribute('position', new THREE.BufferAttribute(packetPos, 3));
        const packetMat = new THREE.PointsMaterial({ color: 0xFFD700, size: 0.5, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending });
        const packets = new THREE.Points(packetGeo, packetMat);
        scene.add(packets);


        // Animation
        const animate = () => {
            requestAnimationFrame(animate);

            // Rotate entire system slowly
            particles.rotation.y += 0.001;
            packets.rotation.y += 0.002;

            // Move particles diagonally (Digital Rain style horizontal drift)
            const positions = particles.geometry.attributes.position.array as Float32Array;
            for (let i = 0; i < particleCount; i++) {
                // positions[i*3+1] -= speeds[i]; // Fall down?
                // drift right
                positions[i * 3] += speeds[i] * 0.2;
                positions[i * 3 + 1] -= speeds[i] * 0.2; // Down-Right

                // Reset bound
                if (positions[i * 3] > 50) positions[i * 3] = -50;
                if (positions[i * 3 + 1] < -50) positions[i * 3 + 1] = 50;
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
        <div ref={containerRef} className="fixed inset-0 z-0 bg-gradient-to-br from-cyber-midnight via-[#050714] to-[#1a0524]" />
    );
};

export default CyberThreeBackground;
