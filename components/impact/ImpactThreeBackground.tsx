"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ImpactThreeBackground: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Init Scene
        const scene = new THREE.Scene();
        // Light Reddish Fog for White Background
        scene.fog = new THREE.FogExp2(0xfff0f0, 0.02);

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        containerRef.current.appendChild(renderer.domElement);

        // --- 1. Rotating Tunnel (TubeGeometry or Lines) ---
        // Darker Red for visibility on White Background
        const tunnelGeometry = new THREE.CylinderGeometry(10, 10, 200, 32, 20, true);
        const tunnelMaterial = new THREE.MeshBasicMaterial({
            color: 0xcc0000,
            wireframe: true,
            transparent: true,
            opacity: 0.15,
            side: THREE.BackSide
        });
        const tunnel = new THREE.Mesh(tunnelGeometry, tunnelMaterial);
        tunnel.rotation.x = -Math.PI / 2;
        scene.add(tunnel);

        // --- 2. High Velocity Particles (Embers/Sparks) ---
        const pCount = 1000;
        const pGeo = new THREE.BufferGeometry();
        const pPos = new Float32Array(pCount * 3);
        const pSpeeds = new Float32Array(pCount);

        for (let i = 0; i < pCount; i++) {
            pPos[i * 3] = (Math.random() - 0.5) * 30; // X
            pPos[i * 3 + 1] = (Math.random() - 0.5) * 30; // Y
            pPos[i * 3 + 2] = (Math.random() - 0.5) * 100; // Z
            pSpeeds[i] = 0.2 + Math.random() * 0.5; // Random speed
        }

        pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
        const pMat = new THREE.PointsMaterial({
            color: 0xff0000, // Pure Red
            size: 0.15,
            transparent: true,
            opacity: 0.8,
            blending: THREE.NormalBlending // Normal blending for visibility on white
        });
        const particles = new THREE.Points(pGeo, pMat);
        scene.add(particles);

        // --- 3. Central "Core" Pulse (Optional, adds focus) ---
        // Removed to keep text legible, but maybe a subtle central glow?

        // Mouse interaction vars
        let mouseX = 0;
        let mouseY = 0;
        const widthHalf = window.innerWidth / 2;
        const heightHalf = window.innerHeight / 2;

        const handleMouseMove = (event: MouseEvent) => {
            mouseX = (event.clientX - widthHalf) / 100;
            mouseY = (event.clientY - heightHalf) / 100;
        };
        document.addEventListener('mousemove', handleMouseMove);

        // Animation
        const animate = () => {
            requestAnimationFrame(animate);

            // Tunnel Animation: Rotate and "Move"
            tunnel.rotation.y += 0.002;
            // Texture offset simulation (if we had texture) - here we just rotate
            // To simulate forward movement in a wireframe cylinder, we can't easily "scroll" the wireframe 
            // without shaders. But rotation gives a dizzying effect.

            // Particle "Warp Speed"
            const positions = particles.geometry.attributes.position.array as Float32Array;
            for (let i = 0; i < pCount; i++) {
                positions[i * 3 + 2] += pSpeeds[i];

                // If passes camera, reset far back
                if (positions[i * 3 + 2] > 10) {
                    positions[i * 3 + 2] = -100;
                    // Reset X/Y randomly for variation
                    positions[i * 3] = (Math.random() - 0.5) * 30;
                    positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
                }
            }
            particles.geometry.attributes.position.needsUpdate = true;

            // Camera Parallax
            camera.position.x += (mouseX - camera.position.x) * 0.05;
            camera.position.y += (-mouseY - camera.position.y) * 0.05;
            camera.lookAt(scene.position);

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
            document.removeEventListener('mousemove', handleMouseMove);
            if (containerRef.current && renderer.domElement) {
                containerRef.current.removeChild(renderer.domElement);
            }
            renderer.dispose();
        };
    }, []);

    return (
        <div ref={containerRef} className="fixed inset-0 z-0 bg-white" />
    );
};

export default ImpactThreeBackground;
