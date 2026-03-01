"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUp } from 'lucide-react';
import { useActiveOnScroll } from '@/hooks/useActiveOnScroll';

const steps = [
    {
        key: 'think' as const,
        title: 'Think',
        subtitle: '構想・理解・設計',
        description: '本質的な課題は何か。\nあるべき姿はどのようなものか。\nまずは構造を正しく捉えます。',
        activeClass: 'border-white/40 bg-white/10 shadow-[0_0_30px_rgba(255,255,255,0.1)]',
        numberClass: 'text-white/30',
        titleClass: 'text-white',
    },
    {
        key: 'build' as const,
        title: 'Build',
        subtitle: '実装・仕組み化・習得',
        description: '絵に描いた餅にしない。\n実際に機能するシステムや\n身体動作として構築します。',
        activeClass: 'border-tech-cyan bg-tech-cyan/10 shadow-[0_0_30px_rgba(0,255,255,0.1)]',
        numberClass: 'text-tech-cyan/30',
        titleClass: 'text-tech-cyan',
    },
    {
        key: 'perform' as const,
        title: 'Perform',
        subtitle: '成果・再現性・継続',
        description: '一度きりでは意味がない。\n継続的に成果を出し続ける\n「状態」を定着させます。',
        activeClass: 'border-impact-red bg-impact-red/10 shadow-[0_0_30px_rgba(255,46,46,0.1)]',
        numberClass: 'text-impact-red/30',
        titleClass: 'text-impact-red',
    },
] as const;

export default function BrandPhilosophy() {
    const { refs, activeKey } = useActiveOnScroll({
        keys: ['think', 'build', 'perform'],
    });

    return (
        <section className="relative w-full py-24 px-6 md:px-12 bg-black/60 backdrop-blur-sm z-10">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-sm md:text-base font-mono text-tech-green mb-16 text-center tracking-[0.3em] uppercase">
                    Our Approach
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step, index) => {
                        const isActive = activeKey === step.key;
                        return (
                            <div
                                key={step.key}
                                ref={refs[step.key] as React.RefObject<HTMLDivElement>}
                                className={`relative group p-8 border rounded-2xl transition-all duration-500
                                    ${isActive ? step.activeClass : 'border-white/10 bg-white/5 hover:bg-white/10'}`}
                            >
                                <div className={`text-5xl font-bold absolute top-4 right-6 transition-colors duration-500
                                    ${isActive ? step.numberClass : 'text-white/10 group-hover:text-white/20'}`}>
                                    {String(index + 1).padStart(2, '0')}
                                </div>
                                <h3 className={`text-3xl font-bold mb-4 transition-colors duration-500
                                    ${isActive ? step.titleClass : 'text-white'}`}>
                                    {step.title}
                                </h3>
                                <p className="text-sm font-mono text-white/40 mb-6">{step.subtitle}</p>
                                <p className="text-white/70 leading-relaxed whitespace-pre-line">
                                    {step.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                <div className="text-center mt-12 bg-gradient-to-r from-transparent via-white/5 to-transparent p-6 rounded-xl flex flex-col items-center gap-6">
                    <p className="text-lg md:text-xl text-white font-bold leading-relaxed">
                        NXSは、3つの事業で「知らない」から「わかる」へ、<br className="hidden md:block" />
                        そして「できる」まで。<br className="hidden md:block" />
                        あなたの人生が豊かになるお手伝いをします。
                    </p>
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white text-black font-bold hover:bg-white/90 transition-all duration-300"
                    >
                        事業詳細を見る <ArrowUp size={18} />
                    </button>
                </div>
            </div>
        </section>
    );
}
