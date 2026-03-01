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
    const animationIdRef = useRef<number | null>(null);

    useEffect(() => {
        if (!containerRef.current) return;
        const container = containerRef.current;

        const scene = new THREE.Scene();
        sceneRef.current = scene;
        scene.fog = new THREE.FogExp2(0x000000, 0.03);

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 20;
        cameraRef.current = camera;

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);
        rendererRef.current = renderer;

        // Central Core
        const coreGroup = new THREE.Group();
        const coreMesh = new THREE.Mesh(
            new THREE.IcosahedronGeometry(3, 1),
            new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true, transparent: true, opacity: 0.3 })
        );
        coreGroup.add(coreMesh);

        const innerMesh = new THREE.Mesh(
            new THREE.IcosahedronGeometry(2, 2),
            new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.1, blending: THREE.AdditiveBlending })
        );
        coreGroup.add(innerMesh);

        scene.add(coreGroup);
        coreRef.current = coreGroup;

        // Background Particles
        const particlesGeo = new THREE.BufferGeometry();
        const isMobileInit = window.innerWidth < 768;
        const count = isMobileInit ? 800 : 2000;
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 60;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 60;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 60;
            colors[i * 3] = 0.1;
            colors[i * 3 + 1] = 0.2;
            colors[i * 3 + 2] = 0.3;
        }
        particlesGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        particlesGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const particles = new THREE.Points(particlesGeo, new THREE.PointsMaterial({
            size: 0.1,
            vertexColors: true,
            blending: THREE.AdditiveBlending,
            transparent: true,
            opacity: 0.6
        }));
        scene.add(particles);
        particlesRef.current = particles;

        // Moons (Satellites)
        const moonsContainer = new THREE.Group();
        scene.add(moonsContainer);

        const moons: { group: THREE.Group; mesh: THREE.Mesh; t: number; speed: number }[] = [];
        const moonCount = 2;

        const curve = new THREE.CatmullRomCurve3([
            new THREE.Vector3(0, 0, -120),
            new THREE.Vector3(-50, 30, -80),
            new THREE.Vector3(-20, 10, -40),
            new THREE.Vector3(25, -15, 25),
            new THREE.Vector3(80, -50, 80)
        ]);

        const moonGeo = new THREE.IcosahedronGeometry(4, 1);
        const moonMat = new THREE.MeshBasicMaterial({
            color: 0xddeeff,
            wireframe: true,
            transparent: true,
            opacity: 0.6
        });

        for (let i = 0; i < moonCount; i++) {
            const moonGroup = new THREE.Group();
            const moonMesh = new THREE.Mesh(moonGeo, moonMat);
            moonGroup.add(moonMesh);

            const moonCore = new THREE.Mesh(
                new THREE.IcosahedronGeometry(2, 0),
                new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true, transparent: true, opacity: 0.1 })
            );
            moonMesh.add(moonCore);
            moonsContainer.add(moonGroup);

            moons.push({
                group: moonGroup,
                mesh: moonMesh,
                t: i * (1 / moonCount),
                speed: 0.006
            });
        }

        // Animation Loop
        const animate = () => {
            animationIdRef.current = requestAnimationFrame(animate);

            coreGroup.rotation.x += 0.001;
            coreGroup.rotation.y += 0.002;
            particles.rotation.y -= 0.0005;

            moons.forEach(moon => {
                moon.t += moon.speed;
                if (moon.t > 1) moon.t = 0;

                moon.group.position.copy(curve.getPoint(moon.t));
                moon.group.lookAt(camera.position);
                moon.group.rotateX(10 * (Math.PI / 180));
                moon.mesh.rotation.z += 0.15;
                moon.mesh.rotation.x = Math.sin(Date.now() * 0.003) * 0.2;
                moon.mesh.rotation.y = Math.cos(Date.now() * 0.002) * 0.2;
            });

            renderer.render(scene, camera);
        };
        animate();

        const handleResize = () => {
            if (!cameraRef.current || !rendererRef.current) return;
            cameraRef.current.aspect = window.innerWidth / window.innerHeight;
            cameraRef.current.updateProjectionMatrix();
            rendererRef.current.setSize(window.innerWidth, window.innerHeight);

            const isMobile = window.innerWidth < 768;
            const targetScale = isMobile ? 0.45 : 1;
            moonsContainer.scale.set(targetScale, targetScale, targetScale);
        };
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current);
            window.removeEventListener('resize', handleResize);
            if (container && renderer.domElement) {
                container.removeChild(renderer.domElement);
            }
            renderer.dispose();
        };
    }, []);

    // Camera & Color shift on hover
    useEffect(() => {
        if (!cameraRef.current || !sceneRef.current) return;

        const camera = cameraRef.current;

        let targetPos = { x: 0, y: 0, z: 20 };
        let targetColor = { r: 0.1, g: 0.2, b: 0.3 };

        if (hoverState === 'cyber') {
            targetPos = { x: -5, y: 2, z: 15 };
            targetColor = { r: 0.0, g: 1.0, b: 0.25 };
        } else if (hoverState === 'impact') {
            targetPos = { x: 5, y: -2, z: 15 };
            targetColor = { r: 1.0, g: 0.2, b: 0.2 };
        } else if (hoverState === 'flow') {
            targetPos = { x: 0, y: 5, z: 15 };
            targetColor = { r: 0.0, g: 0.95, b: 1.0 };
        }

        gsap.to(camera.position, {
            x: targetPos.x,
            y: targetPos.y,
            z: targetPos.z,
            duration: 1.5,
            ease: "power2.inOut"
        });

        if (sceneRef.current.fog instanceof THREE.FogExp2) {
            gsap.to(sceneRef.current.fog.color, {
                r: targetColor.r * 0.2,
                g: targetColor.g * 0.2,
                b: targetColor.b * 0.2,
                duration: 1.0
            });
        }

        if (coreRef.current) {
            coreRef.current.children.forEach((child) => {
                const mesh = child as THREE.Mesh;
                if (mesh.material && 'color' in mesh.material) {
                    const material = mesh.material as THREE.MeshBasicMaterial;
                    const colorTarget = hoverState
                        ? { r: targetColor.r, g: targetColor.g, b: targetColor.b }
                        : { r: 1, g: 1, b: 1 };
                    gsap.to(material.color, { ...colorTarget, duration: 1.0 });
                }
            });
        }
    }, [hoverState]);

    return (
        <div ref={containerRef} className="fixed inset-0 z-0 bg-black" aria-hidden="true" />
    );
};

export default HubThreeScene;
