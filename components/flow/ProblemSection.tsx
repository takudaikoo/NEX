"use client";

import React from 'react';
import { AlertTriangle, XCircle, ArrowDown } from 'lucide-react';

const ProblemSection: React.FC = () => {
    return (
        <section className="bg-tech-navy-light py-20 px-6 relative overflow-hidden">
            {/* Background Illustration - "Collapsing Blocks" Abstract */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <line x1="0" y1="0" x2="100" y2="100" stroke="white" strokeWidth="0.5" />
                    <line x1="100" y1="0" x2="0" y2="100" stroke="white" strokeWidth="0.5" />
                    {/* Add more chaotic lines here later */}
                </svg>
            </div>

            <div className="container mx-auto max-w-5xl relative z-10">
                {/* 3. Problem */}
                <div className="text-center mb-24">
                    <div className="inline-block p-3 bg-red-500/10 rounded-full text-red-500 mb-6 animate-pulse">
                        <AlertTriangle size={32} />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8 text-white">
                        半年かけて作ったシステムが、<br className="hidden md:block" />
                        リリース初日に<span className="text-red-500 bg-red-500/10 px-2 rounded">「使い物にならない」</span>と気づく。
                    </h2>
                    <p className="text-xl text-white/60 font-light">
                        そんな悪夢はもう終わりにしませんか？
                    </p>
                </div>

                {/* 4. Agitation */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-tech-navy/50 p-8 md:p-12 rounded-3xl border border-white/5 backdrop-blur-sm">
                    <div className="space-y-6">
                        <h3 className="text-2xl md:text-3xl font-bold text-white">
                            原因はエンジニアの腕ではありません。
                        </h3>
                        <div className="space-y-4 text-white/70 leading-relaxed font-light">
                            <p>
                                「ゼロからコードを書く」というアプローチそのものが、現代のスピード感に負けているのです。
                            </p>
                            <p>
                                車に乗るために、エンジンを鋳造から始める人はいません。<br />
                                なぜシステムだけ、ネジ一本から作ろうとするのですか？
                            </p>
                        </div>
                    </div>

                    {/* Visual Metaphor */}
                    <div className="h-64 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 flex items-center justify-center relative overflow-hidden">
                        <div className="text-center space-y-2 opacity-50">
                            <CodeBlock />
                            <div className="absolute inset-0 bg-red-500/20 flex items-center justify-center rotate-12 transform scale-150">
                                <XCircle size={120} className="text-red-500" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Transition Arrow */}
                <div className="flex justify-center mt-20 opacity-50">
                    <ArrowDown className="animate-bounce" />
                </div>
            </div>
        </section>
    );
};

const CodeBlock = () => (
    <div className="font-mono text-xs text-left p-4 space-y-1 text-white/30">
        <p>function createWheel() &#123;</p>
        <p className="pl-4">iron.melt();</p>
        <p className="pl-4">rubber.mold();</p>
        <p className="pl-4"> // 6 months later...</p>
        <p className="pl-4">return error;</p>
        <p>&#125;</p>
    </div>
);

export default ProblemSection;
