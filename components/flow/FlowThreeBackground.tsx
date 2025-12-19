"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const FlowThreeBackground: React.FC<{ className?: string }> = ({ className }) => {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!mountRef.current) return;

        // --- Scene Setup ---
        const scene = new THREE.Scene();
        // Match the 'tech-navy' background color somewhat, or keep it transparent/black
        // scene.background = new THREE.Color('#020c1b'); 
        // Better to be transparent so CSS runs the show? No, fog needs color.
        scene.fog = new THREE.FogExp2(0x020c1b, 0.002);

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
        camera.position.z = 100;

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        mountRef.current.appendChild(renderer.domElement);

        // --- Particles ---
        const particleCount = 400; // Hundreds as requested
        const particles = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const velocities: { x: number; y: number; z: number }[] = [];

        for (let i = 0; i < particleCount; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 800; // x
            positions[i * 3 + 1] = (Math.random() - 0.5) * 800; // y
            positions[i * 3 + 2] = (Math.random() - 0.5) * 800; // z

            velocities.push({
                x: (Math.random() - 0.5) * 0.2,
                y: (Math.random() - 0.5) * 0.2,
                z: (Math.random() - 0.5) * 0.2
            });
        }
        particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        // Material - Glowing Cyan
        const particleMaterial = new THREE.PointsMaterial({
            color: 0x00f3ff, // Tech Cyan
            size: 2.5,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending, // Gives a glow-like effect when overlapping
        });

        const particleSystem = new THREE.Points(particles, particleMaterial);
        scene.add(particleSystem);

        // --- Lines (Connections) ---
        // We will use LineSegments for better performance than individual Line objects
        const lineMaterial = new THREE.LineBasicMaterial({
            color: 0x00f3ff,
            transparent: true,
            opacity: 0.15,
            blending: THREE.AdditiveBlending
        });

        // This geometry will change every frame
        const lineGeometry = new THREE.BufferGeometry();
        const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
        scene.add(lines);

        // --- Interaction ---
        const mouse = new THREE.Vector2(-9999, -9999); // Start off-screen

        const onMouseMove = (event: MouseEvent) => {
            // Calculate mouse position in normalized device coordinates
            // But here we need world space roughly.
            // Simplified: Map mouse pixels to a plane at distance Z.
            // Or raycaster. For background effect, "screen space" mapping is enough.

            // Let's project mouse to a plane at z=0 (mostly)
            // Normalized Device Coords (-1 to +1)
            const ndcX = (event.clientX / window.innerWidth) * 2 - 1;
            const ndcY = -(event.clientY / window.innerHeight) * 2 + 1;

            // Unproject?
            // Simple approximation: camera z=100. FOV 75.
            // Width at z=0 is roughly: 2 * 100 * tan(75/2) * aspect.
            // Let's just use raw values scaled to scene bounds for simplicity or use Raycaster for precision.

            // Raycaster approach (accurate)
            const raycaster = new THREE.Raycaster();
            raycaster.setFromCamera(new THREE.Vector2(ndcX, ndcY), camera);

            // Find intersection with a plane at z=0? No, particles are everywhere.
            // Just move a "cursor point" in 3D space?
            // Let's just track normalized coords and use them to influence particles "near the ray".

            mouse.x = ndcX;
            mouse.y = ndcY;
        };

        window.addEventListener('mousemove', onMouseMove);

        // --- Resize ---
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        // --- Animation Loop ---
        let frameId: number;
        const clock = new THREE.Clock();

        const animate = () => {
            frameId = requestAnimationFrame(animate);

            // Update Particle Positions
            const positionsAttribute = particleSystem.geometry.attributes.position;
            const posArray = positionsAttribute.array as Float32Array;

            for (let i = 0; i < particleCount; i++) {
                // Determine indices
                const ix = i * 3;
                const iy = i * 3 + 1;
                const iz = i * 3 + 2;

                // Move
                posArray[ix] += velocities[i].x;
                posArray[iy] += velocities[i].y;
                posArray[iz] += velocities[i].z;

                // Wrap around bounds (Keep within -400 to 400)
                if (posArray[ix] > 400) posArray[ix] = -400;
                if (posArray[ix] < -400) posArray[ix] = 400;
                if (posArray[iy] > 400) posArray[iy] = -400;
                if (posArray[iy] < -400) posArray[iy] = 400;
                if (posArray[iz] > 400) posArray[iz] = -400;
                if (posArray[iz] < -400) posArray[iz] = 400;
            }
            positionsAttribute.needsUpdate = true;

            // Update Lines (Interaction)
            // Logic: Find particles near the "mouse ray" or just near the mouse on screen?
            // "Cursor near -> connect"
            // Let's do: Project all particles to screen space. If close to mouse ND coords, activate.
            // Then calculate distance between active particles. If close, connect.

            const linePositions: number[] = [];

            // Very naive loop (Performance critical!)
            // Optimization: Only check particles? 400 is small enough for N loop.

            // Get camera helper vector
            const vector = new THREE.Vector3();
            const activeIndices: number[] = [];
            const mouseDistanceThreshold = 0.3; // NDC space distance (0-2)

            if (mouse.x !== -9999) {
                for (let i = 0; i < particleCount; i++) {
                    vector.set(posArray[i * 3], posArray[i * 3 + 1], posArray[i * 3 + 2]);
                    vector.project(camera); // map to NDC (-1 to 1)

                    const dx = mouse.x - vector.x;
                    const dy = mouse.y - vector.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < mouseDistanceThreshold && vector.z < 1) { // Z < 1 means in front of camera
                        activeIndices.push(i);
                    }
                }
            }

            // Connect active particles
            // Connect 'active' to each other if close in 3D space
            // Limit connections to avoid messy web
            const connectionDistance = 60;

            for (let i = 0; i < activeIndices.length; i++) {
                const idx1 = activeIndices[i];
                const p1x = posArray[idx1 * 3];
                const p1y = posArray[idx1 * 3 + 1];
                const p1z = posArray[idx1 * 3 + 2];

                for (let j = i + 1; j < activeIndices.length; j++) {
                    const idx2 = activeIndices[j];
                    const p2x = posArray[idx2 * 3];
                    const p2y = posArray[idx2 * 3 + 1];
                    const p2z = posArray[idx2 * 3 + 2];

                    const d = Math.sqrt(
                        Math.pow(p1x - p2x, 2) +
                        Math.pow(p1y - p2y, 2) +
                        Math.pow(p1z - p2z, 2)
                    );

                    if (d < connectionDistance) {
                        linePositions.push(p1x, p1y, p1z);
                        linePositions.push(p2x, p2y, p2z);
                    }
                }
            }

            lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));

            // Rotate the whole system slowly for "floating" feel
            particleSystem.rotation.y += 0.0005;
            lines.rotation.y += 0.0005;

            renderer.render(scene, camera);
        };

        animate();

        // --- Cleanup ---
        return () => {
            cancelAnimationFrame(frameId);
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', onMouseMove);
            if (mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
            }
            // Dispose geometries/materials to prevent leaks
            particles.dispose();
            particleMaterial.dispose();
            lineGeometry.dispose();
            lineMaterial.dispose();
            renderer.dispose();
        };

    }, []);

    return (
        <div
            ref={mountRef}
            className={`w-full h-full overflow-hidden ${className || ''}`}
        />
    );
};

export default FlowThreeBackground;
