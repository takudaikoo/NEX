"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';

interface Props {
    hoverState: 'cyber' | 'impact' | 'flow' | null;
}

const HubThreeScene: React.FC<Props> = ({ hoverState }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const sceneRef = useRef<THREE.Scene | null>(null);
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const particlesRef = useRef<THREE.Points | null>(null);
    const coreRef = useRef<THREE.Group | null>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Init Scene
        const scene = new THREE.Scene();
        sceneRef.current = scene;
        scene.fog = new THREE.FogExp2(0x000000, 0.03);

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 20;
        cameraRef.current = camera;

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        containerRef.current.appendChild(renderer.domElement);
        rendererRef.current = renderer;

        // --- Objects ---

        // 1. Central Core (NEXUS) - Abstract Geometry
        const coreGroup = new THREE.Group();
        const coreGeo = new THREE.IcosahedronGeometry(3, 1);
        const coreMat = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true, transparent: true, opacity: 0.3 });
        const coreMesh = new THREE.Mesh(coreGeo, coreMat);
        coreGroup.add(coreMesh);

        // Inner glowing sphere
        const innerGeo = new THREE.IcosahedronGeometry(2, 2);
        const innerMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.1, blending: THREE.AdditiveBlending });
        const innerMesh = new THREE.Mesh(innerGeo, innerMat);
        coreGroup.add(innerMesh);

        scene.add(coreGroup);
        coreRef.current = coreGroup;

        // 2. Background Particles
        const particlesGeo = new THREE.BufferGeometry();
        const count = 2000;
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 60;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 60;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 60;

            // Base color: Greyish Blue
            colors[i * 3] = 0.1;
            colors[i * 3 + 1] = 0.2;
            colors[i * 3 + 2] = 0.3;
        }
        particlesGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        particlesGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const particlesMat = new THREE.PointsMaterial({
            size: 0.1,
            vertexColors: true,
            blending: THREE.AdditiveBlending,
            transparent: true,
            opacity: 0.6
        });
        const particles = new THREE.Points(particlesGeo, particlesMat);
        scene.add(particles);
        particlesRef.current = particles;

        // 3. Moons (Satellites)
        const moons: { group: THREE.Group, mesh: THREE.Mesh, t: number, speed: number }[] = [];
        const moonCount = 2;

        // Trajectory: Deep Center -> Hook Top-Left -> Exit Bottom-Right
        const curve = new THREE.CatmullRomCurve3([
            new THREE.Vector3(0, 0, -120),    // Start: Deep Center
            new THREE.Vector3(-50, 30, -80),  // Hook: Move towards Top-Left
            new THREE.Vector3(-20, 10, -40),  // Stabilization: Curving back
            new THREE.Vector3(25, -15, 25),   // Near Camera (ZOOM! Closer to z=20)
            new THREE.Vector3(80, -50, 80)    // Exit: Bottom-Right with momentum
        ]);

        const moonGeo = new THREE.IcosahedronGeometry(4, 1);
        const moonMat = new THREE.MeshBasicMaterial({
            color: 0x88ccff,
            wireframe: true,
            transparent: true,
            opacity: 0.15
        });

        for (let i = 0; i < moonCount; i++) {
            const moonGroup = new THREE.Group();

            // Gyro Ring Effect (optional, just pure geometry for now as per "Moon")
            const moonMesh = new THREE.Mesh(moonGeo, moonMat);
            moonGroup.add(moonMesh);

            // Add inner core for the moon to make it look solid but techy
            const moonCoreGeo = new THREE.IcosahedronGeometry(2, 0);
            const moonCoreMat = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true, transparent: true, opacity: 0.1 });
            const moonCore = new THREE.Mesh(moonCoreGeo, moonCoreMat);
            moonMesh.add(moonCore);

            scene.add(moonGroup);

            // Offset starting time so they are equal intervals
            // t goes from 0 to 1.
            // i=0 -> t=0
            // i=1 -> t=0.5
            moons.push({
                group: moonGroup,
                mesh: moonMesh,
                t: i * (1 / moonCount),
                speed: 0.006 // Hyper Speed for "Rush" feel
            });
        }

        // Animation Loop
        const animate = () => {
            requestAnimationFrame(animate);

            if (coreGroup) {
                coreGroup.rotation.x += 0.001;
                coreGroup.rotation.y += 0.002;
            }

            if (particles) {
                particles.rotation.y -= 0.0005;
            }

            // Animate Moons
            moons.forEach(moon => {
                // Update position on curve
                moon.t += moon.speed;
                if (moon.t > 1) moon.t = 0;

                const position = curve.getPoint(moon.t);
                moon.group.position.copy(position);

                // Scale effect: Grow as it gets closer? (Natural perspective handles this generally, but maybe enhance)
                // Perspective camera handles sizing naturally.

                // Gyro Rotation Logic
                // 1. Point Rotation Axis towards Camera
                moon.group.lookAt(camera.position);

                // 2. Tilt Axis 10 degrees UP relative to camera view
                // Rotating around local X axis tilts the Z axis (which points to camera) up/down.
                moon.group.rotateX(10 * (Math.PI / 180));

                // 3. Spin: High RPM Counter-Clockwise (CCW) around the tilted axis (Local Z)
                moon.mesh.rotation.z += 0.15;

                // Slight Precession/Wobble on other axes to keep 3D feel
                moon.mesh.rotation.x = Math.sin(Date.now() * 0.003) * 0.2;
                moon.mesh.rotation.y = Math.cos(Date.now() * 0.002) * 0.2;
            });

            renderer.render(scene, camera);
        };
        animate();

        // Resize
        const handleResize = () => {
            if (!cameraRef.current || !rendererRef.current) return;
            cameraRef.current.aspect = window.innerWidth / window.innerHeight;
            cameraRef.current.updateProjectionMatrix();
            rendererRef.current.setSize(window.innerWidth, window.innerHeight);
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

    // Camera Shift & Color Shift Logic
    useEffect(() => {
        if (!cameraRef.current || !sceneRef.current || !particlesRef.current) return;

        const camera = cameraRef.current;
        const colorAttribute = particlesRef.current.geometry.getAttribute('color');
        const count = particlesRef.current.geometry.attributes.position.count;
        const colors = particlesRef.current.geometry.attributes.color.array as Float32Array;

        // Target Configuration
        let targetPos = { x: 0, y: 0, z: 20 };
        let targetLookAt = { x: 0, y: 0, z: 0 };
        let targetColor = { r: 0.1, g: 0.2, b: 0.3 }; // Default

        if (hoverState === 'cyber') {
            // Cyber: Green, Camera shifts Left
            targetPos = { x: -5, y: 2, z: 15 };
            targetLookAt = { x: 5, y: 0, z: 0 };
            targetColor = { r: 0.0, g: 1.0, b: 0.25 }; // Tech Green
        } else if (hoverState === 'impact') {
            // Impact: Red, Camera shifts Right
            targetPos = { x: 5, y: -2, z: 15 };
            targetLookAt = { x: -5, y: 0, z: 0 };
            targetColor = { r: 1.0, g: 0.2, b: 0.2 }; // Impact Red
        } else if (hoverState === 'flow') {
            // Flow: Cyan, Camera shifts Up
            targetPos = { x: 0, y: 5, z: 15 };
            targetLookAt = { x: 0, y: -5, z: 0 };
            targetColor = { r: 0.0, g: 0.95, b: 1.0 }; // Tech Cyan
        }

        // Animate Camera Position
        gsap.to(camera.position, {
            x: targetPos.x,
            y: targetPos.y,
            z: targetPos.z,
            duration: 1.5,
            ease: "power2.inOut"
        });

        // Simulating camera.lookAt via simple object tween? 
        // Best approach for lookAt is updating it in render loop OR tweening a proxy object.
        // For simplicity, we just move position. 
        // But pivoting helps immersion.
        // Let's tween `camera.rotation` is hard. 
        // We'll skip complex lookAt rotation for now, just position shift provides parallax.

        // Animate Particle Colors
        const tempColor = { r: 0, g: 0, b: 0 }; // We need to interpolate
        // This is expensive to tween 2000 points. 
        // Easier: Change Scene Fog or Global Material Color.
        // Or update a 'uniform' if using ShaderMaterial.
        // For PointsMaterial vertex colors, we can just tween a "master" color and apply to all? 
        // No, let's just tween the first few or use `scene.background`? 
        // Let's use `scene.fog.color` for atmosphere context.

        if (sceneRef.current.fog instanceof THREE.FogExp2) {
            gsap.to(sceneRef.current.fog.color, {
                r: targetColor.r * 0.2, // Darker fog
                g: targetColor.g * 0.2,
                b: targetColor.b * 0.2,
                duration: 1.0
            });
        }

        // Let's also animate the Core color
        if (coreRef.current) {
            coreRef.current.children.forEach((child: any) => {
                if (child.material) {
                    gsap.to(child.material.color, {
                        r: targetColor.r,
                        g: targetColor.g,
                        b: targetColor.b,
                        duration: 1.0
                    });

                    // If default, revert to white
                    if (!hoverState) {
                        gsap.to(child.material.color, { r: 1, g: 1, b: 1, duration: 1 });
                    }
                }
            });
        }

    }, [hoverState]);

    return (
        <div ref={containerRef} className="fixed inset-0 z-0 bg-black" />
    );
};

export default HubThreeScene;
