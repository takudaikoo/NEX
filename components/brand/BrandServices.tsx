"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Monitor, Zap, Droplets, ArrowRight } from 'lucide-react';

interface Props {
    setHoverState: (state: 'cyber' | 'impact' | 'flow' | null) => void;
}

export default function BrandServices({ setHoverState }: Props) {
    const [activeCard, setActiveCard] = useState<'flow' | 'cyber' | 'impact' | null>(null);

    const flowRef = useRef<HTMLAnchorElement>(null);
    const cyberRef = useRef<HTMLAnchorElement>(null);
    const impactRef = useRef<HTMLAnchorElement>(null);

    // Mobile Scroll Detection
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -20% 0px', // Activate when element is in the middle 60% of screen
            threshold: 0.6,
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            // Only run on mobile/tablet (touch devices) or if we want scroll to drive it on desktop too.
            // For simplicity, we let it run always, but mouse hover will override visual focus if needed via CSS behavior,
            // though here we are driving state. To avoid conflicts, we prioritize mouse enter/leave in the handlers below,
            // but for the background setHoverState, updates from scroll are fine.

            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (entry.target === flowRef.current) {
                        setActiveCard('flow');
                        setHoverState('flow');
                    } else if (entry.target === cyberRef.current) {
                        setActiveCard('cyber');
                        setHoverState('cyber');
                    } else if (entry.target === impactRef.current) {
                        setActiveCard('impact');
                        setHoverState('impact');
                    }
                } else {
                    // When leaving view, if it was the active one, clear it?
                    // But we might want to keep the last one active until a new one takes over or we scroll completely out.
                    // Let's check if the currently active card is the one leaving.
                    // This logic can be tricky with multiple entries.
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        if (flowRef.current) observer.observe(flowRef.current);
        if (cyberRef.current) observer.observe(cyberRef.current);
        if (impactRef.current) observer.observe(impactRef.current);

        return () => {
            observer.disconnect();
        };
    }, [setHoverState]);

    const handleMouseEnter = (state: 'flow' | 'cyber' | 'impact') => {
        setActiveCard(state);
        setHoverState(state);
    };

    const handleMouseLeave = () => {
        setActiveCard(null);
        setHoverState(null);
    };

    return (
        <section id="brand-services" className="relative w-full pt-0 pb-24 md:pb-48 z-10 px-4 md:px-8">
            <h2 className="text-xl md:text-2xl font-bold font-sans text-center text-white mb-4 tracking-widest uppercase opacity-70">
                OUR DOMAINS
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto h-auto md:h-[450px]">

                {/* Flow */}
                <Link
                    href="/flow"
                    ref={flowRef}
                    className={`group relative border rounded-3xl bg-black/40 backdrop-blur-md overflow-hidden flex flex-col justify-end p-8 md:p-12 transition-all duration-500 
                        ${activeCard === 'flow'
                            ? 'border-flow-blue shadow-[0_0_50px_rgba(0,162,255,0.2)]'
                            : 'border-white/10 hover:border-flow-blue hover:shadow-[0_0_50px_rgba(0,162,255,0.2)]'}`}
                    onMouseEnter={() => handleMouseEnter('flow')}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className={`absolute inset-0 bg-gradient-to-t from-flow-deep/80 to-transparent transition-opacity duration-500
                        ${activeCard === 'flow' ? 'opacity-100' : 'opacity-60 group-hover:opacity-100'}`}
                    />

                    <div className={`relative z-10 transform transition-transform duration-500
                        ${activeCard === 'flow' ? 'translate-y-0' : 'translate-y-4 group-hover:translate-y-0'}`}>
                        <div className="w-16 h-16 rounded-2xl bg-flow-blue/20 flex items-center justify-center text-flow-blue mb-6">
                            <Droplets size={32} />
                        </div>
                        <div className="flex items-center gap-3 mb-2 font-mono text-flow-blue text-sm tracking-wider">
                            <span>01</span>
                            <span className="w-8 h-[1px] bg-flow-blue"></span>
                            <span>AI × BUSINESS</span>
                        </div>
                        <h3 className="text-4xl font-bold text-white mb-4">Flow</h3>
                        <p className="text-white/60 mb-8 min-h-[3rem]">
                            アイデアや課題を、<br />最短距離で“使える形”にする。
                        </p>
                        <div className={`inline-flex items-center gap-2 font-bold transition-colors
                            ${activeCard === 'flow' ? 'text-flow-blue' : 'text-white group-hover:text-flow-blue'}`}>
                            Flowを見る <ArrowRight size={18} />
                        </div>
                    </div>
                </Link>

                {/* Cyber */}
                <Link
                    href="/cyber"
                    ref={cyberRef}
                    className={`group relative border rounded-3xl bg-black/40 backdrop-blur-md overflow-hidden flex flex-col justify-end p-8 md:p-12 transition-all duration-500 
                        ${activeCard === 'cyber'
                            ? 'border-cyber-green shadow-[0_0_50px_rgba(0,255,65,0.2)]'
                            : 'border-white/10 hover:border-cyber-green hover:shadow-[0_0_50px_rgba(0,255,65,0.2)]'}`}
                    onMouseEnter={() => handleMouseEnter('cyber')}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className={`absolute inset-0 bg-gradient-to-t from-cyber-dark/80 to-transparent transition-opacity duration-500
                        ${activeCard === 'cyber' ? 'opacity-100' : 'opacity-60 group-hover:opacity-100'}`}
                    />

                    <div className={`relative z-10 transform transition-transform duration-500
                        ${activeCard === 'cyber' ? 'translate-y-0' : 'translate-y-4 group-hover:translate-y-0'}`}>
                        <div className="w-16 h-16 rounded-2xl bg-cyber-green/20 flex items-center justify-center text-cyber-green mb-6">
                            <Monitor size={32} />
                        </div>
                        <div className="flex items-center gap-3 mb-2 font-mono text-cyber-green text-sm tracking-wider">
                            <span>02</span>
                            <span className="w-8 h-[1px] bg-cyber-green"></span>
                            <span>AI × EDUCATION</span>
                        </div>
                        <h3 className="text-4xl font-bold text-white mb-4">Cyber</h3>
                        <p className="text-white/60 mb-8 min-h-[3rem]">
                            AIを学ぶのではなく、<br />使いこなせる状態をつくる。
                        </p>
                        <div className={`inline-flex items-center gap-2 font-bold transition-colors
                            ${activeCard === 'cyber' ? 'text-cyber-green' : 'text-white group-hover:text-cyber-green'}`}>
                            Cyberを見る <ArrowRight size={18} />
                        </div>
                    </div>
                </Link>

                {/* Impact */}
                <Link
                    href="/impact"
                    ref={impactRef}
                    className={`group relative border rounded-3xl bg-black/40 backdrop-blur-md overflow-hidden flex flex-col justify-end p-8 md:p-12 transition-all duration-500 
                        ${activeCard === 'impact'
                            ? 'border-impact-red shadow-[0_0_50px_rgba(255,46,46,0.2)]'
                            : 'border-white/10 hover:border-impact-red hover:shadow-[0_0_50px_rgba(255,46,46,0.2)]'}`}
                    onMouseEnter={() => handleMouseEnter('impact')}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className={`absolute inset-0 bg-gradient-to-t from-impact-black/80 to-transparent transition-opacity duration-500
                        ${activeCard === 'impact' ? 'opacity-100' : 'opacity-60 group-hover:opacity-100'}`}
                    />

                    <div className={`relative z-10 transform transition-transform duration-500
                        ${activeCard === 'impact' ? 'translate-y-0' : 'translate-y-4 group-hover:translate-y-0'}`}>
                        <div className="w-16 h-16 rounded-2xl bg-impact-red/20 flex items-center justify-center text-impact-red mb-6">
                            <Zap size={32} />
                        </div>
                        <div className="flex items-center gap-3 mb-2 font-mono text-impact-red text-sm tracking-wider">
                            <span>03</span>
                            <span className="w-8 h-[1px] bg-impact-red"></span>
                            <span>BODY × PERFORMANCE</span>
                        </div>
                        <h3 className="text-4xl font-bold text-white mb-4">Impact</h3>
                        <p className="text-white/60 mb-8 min-h-[3rem]">
                            感覚ではなく、<br />構造で身体を理解する。
                        </p>
                        <div className={`inline-flex items-center gap-2 font-bold transition-colors
                            ${activeCard === 'impact' ? 'text-impact-red' : 'text-white group-hover:text-impact-red'}`}>
                            Impactを見る <ArrowRight size={18} />
                        </div>
                    </div>
                </Link>

            </div>
        </section>
    );
}
