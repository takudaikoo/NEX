"use client";

import React, { useRef } from 'react';
import { GeneratedContent } from '../types';
import { Wind, Sparkles, ArrowUpRight, X, Code, Database, Cloud, Linkedin, Github, Twitter } from 'lucide-react';
import Link from 'next/link';

interface Props {
    content: GeneratedContent;
}

const PatternFlow: React.FC<Props> = ({ content }) => {
    // Optimization: Use ref instead of state to prevent re-renders on every mouse move
    const cardRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current || !cardRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Calculate rotation (max 10 degrees)
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        // Apply transform directly to the DOM element
        cardRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
        if (cardRef.current) {
            cardRef.current.style.transform = 'rotateX(0deg) rotateY(0deg)';
        }
    };

    return (
        <div className="min-h-screen bg-flow-deep text-white font-sans overflow-x-hidden relative" onMouseMove={handleMouseMove}>

            {/* Exit Button - Using Link */}
            <Link
                href="/"
                className="fixed top-6 right-6 z-[100] px-6 py-2 bg-white/5 hover:bg-white/20 backdrop-blur-md rounded-full border border-white/10 text-sm font-light tracking-wide transition-all flex items-center gap-2 group"
            >
                <span>戻る</span>
                <X size={14} className="opacity-70 group-hover:opacity-100" />
            </Link>

            {/* Ambient Background */}
            <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-flow-purple rounded-full blur-[120px] opacity-40 animate-float pointer-events-none"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-flow-blue rounded-full blur-[100px] opacity-30 animate-pulse pointer-events-none"></div>

            <nav className="absolute top-0 left-0 w-full p-8 flex justify-between items-center z-50 pointer-events-none">
                <div className="text-2xl font-light tracking-wide bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/10 pointer-events-auto">
                    Nex<span className="font-bold">Sport</span>
                </div>
            </nav>

            <main className="relative z-10 flex flex-col">

                {/* HERO SECTION WITH 3D INTERACTION */}
                <section className="container mx-auto px-6 h-screen flex items-center" ref={containerRef} onMouseLeave={handleMouseLeave}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">

                        {/* Text Content */}
                        <div className="space-y-8 relative z-20" style={{ transform: `translateZ(50px)` }}>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-flow-purple to-flow-blue text-xs font-bold uppercase tracking-wider shadow-lg shadow-flow-purple/20">
                                <Sparkles size={12} />
                                開発マネジメント
                            </div>

                            <h1 className="text-6xl md:text-8xl font-thin tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-white/50">
                                {content.headline}
                            </h1>

                            <p className="text-lg md:text-xl text-white/60 font-light max-w-md leading-relaxed">
                                {content.subheadline}
                            </p>

                            <div className="flex gap-4 pt-4">
                                <button className="px-8 py-4 bg-white text-flow-deep rounded-2xl font-semibold hover:bg-gray-100 transition-colors shadow-lg shadow-white/10 flex items-center gap-2 group">
                                    技術スタック
                                    <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                                </button>
                            </div>
                        </div>

                        {/* Visual Element - 3D Card Stack */}
                        <div className="relative h-[600px] hidden lg:block perspective-1000" style={{ perspective: '1000px' }}>
                            <div
                                ref={cardRef}
                                className="w-full h-full relative transition-transform duration-100 ease-out will-change-transform"
                                style={{ transformStyle: 'preserve-3d' }}
                            >

                                {/* Floating Code Block (Back) */}
                                <div className="absolute top-0 right-10 w-80 h-64 bg-[#1e1e1e] rounded-xl p-4 font-mono text-xs text-green-400 opacity-80 shadow-2xl border border-white/10 transform -translate-z-20 translate-x-10 translate-y-10">
                                    <div className="flex gap-2 mb-4">
                                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    </div>
                                    <p>import &#123; Future &#125; from 'nexsport';</p>
                                    <p>const init = async () =&gt; &#123;</p>
                                    <p className="pl-4">await Future.connect();</p>
                                    <p className="pl-4">return "Success";</p>
                                    <p>&#125;</p>
                                </div>

                                {/* Main Image Card */}
                                <div className="absolute top-20 right-40 w-80 h-96 rounded-[30px] overflow-hidden shadow-2xl shadow-flow-purple/30 border border-white/30 bg-gray-900"
                                    style={{ transform: 'translateZ(50px)' }}>
                                    <img
                                        src="https://picsum.photos/400/500?blur=2"
                                        alt="Abstract Tech"
                                        className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-flow-deep/90 to-transparent p-6 flex flex-col justify-end">
                                        <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                                            <div className="flex items-center gap-3 mb-2">
                                                <div className="p-2 bg-flow-blue rounded-full"><Wind size={16} /></div>
                                                <span className="text-sm font-semibold">デプロイ: 安定</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Element (Front) */}
                                <div className="absolute bottom-20 right-80 bg-white/10 backdrop-blur-xl p-4 rounded-2xl border border-white/20 shadow-xl"
                                    style={{ transform: 'translateZ(80px)' }}>
                                    <div className="text-3xl font-bold">99.9%</div>
                                    <div className="text-xs uppercase tracking-wider">稼働率</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* PHILOSOPHY SECTION */}
                <section className="container mx-auto px-6 py-24 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <span className="inline-block px-4 py-1 rounded-full border border-white/20 text-sm mb-6 uppercase tracking-widest text-flow-blue">
                            ビジョン
                        </span>
                        <h2 className="text-3xl md:text-5xl font-light leading-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
                            "{content.mission}"
                        </h2>
                    </div>
                </section>

                {/* CONTENT/SERVICES - 3D CARDS */}
                <section className="container mx-auto px-6 py-24">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {content.services.map((service, idx) => (
                            <div key={idx} className="group relative h-80 perspective-1000">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 rounded-3xl border border-white/10 backdrop-blur-sm p-8 transition-all duration-500 group-hover:transform group-hover:-translate-y-4 group-hover:shadow-[0_20px_40px_rgba(59,130,246,0.2)]">
                                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-flow-blue to-flow-purple flex items-center justify-center mb-6">
                                        {idx === 0 ? <Code size={24} /> : idx === 1 ? <Database size={24} /> : <Cloud size={24} />}
                                    </div>
                                    <h3 className="text-2xl font-semibold mb-4">{service}</h3>
                                    <p className="text-white/50 font-light">
                                        スケーラブルで強固、そして未来志向のデジタルアーキテクチャを構築します。
                                    </p>
                                    <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-2">
                                        <ArrowUpRight />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* SOCIAL CONNECT */}
                <section className="py-20 border-t border-white/5 bg-flow-deep/50 backdrop-blur-lg">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-2xl font-light mb-8">スケールする準備はいいですか？</h2>
                        <div className="flex justify-center gap-6">
                            {[Github, Twitter, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-flow-deep transition-all duration-300 hover:scale-110">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                        <div className="mt-12 text-white/20 text-sm">
                            &copy; 2025 NexSport Dev Management. All rights reserved.
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
};

export default PatternFlow;
