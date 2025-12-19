"use client";

import React from 'react';
import { Users, Zap } from 'lucide-react';

const SolutionSection: React.FC = () => {
    return (
        <section className="py-24 px-6 bg-white relative overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>

            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    <div>
                        <div className="flex items-center gap-3 text-cyber-midnight mb-6">
                            <Users size={24} className="text-cyber-vermilion" />
                            <span className="font-bold uppercase tracking-widest text-sm">The Co-Pilot Method</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold font-noto-sans text-cyber-midnight mb-8 leading-tight">
                            必要なのは「正解」ではなく<br />
                            <span className="text-cyber-vermilion">「あなたの実務」</span>を<br />
                            一緒に解くパートナーです。
                        </h2>
                        <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                            <p>
                                NEX AI Solutionsは、あなたの業務課題をその場で解決しながらスキルを定着させる、新しい<b className="text-cyber-midnight">「開発伴走型」トレーニング</b>です。
                            </p>
                            <p>
                                エラーが出ても、もう一人で止まる必要はありません。<br />
                                私たちが隣で（オンラインで）、あなたが動かしたいプログラムが動くまで付き合います。
                            </p>
                        </div>

                        <div className="mt-8 flex items-center gap-4">
                            <div className="px-6 py-3 bg-cyber-midnight text-white text-sm font-bold rounded-full flex items-center gap-2">
                                <Zap size={16} className="text-cyber-gold" />
                                即座にレスポンス・解決
                            </div>
                        </div>
                    </div>

                    {/* Visual: High Five / Collaboration */}
                    <div className="relative">
                        <div className="relative aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl group">
                            {/* Abstract Screen Share UI */}
                            <div className="absolute top-0 left-0 w-full h-8 bg-gray-800 flex items-center px-4 gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>

                            {/* Placeholder for High Five / Happy Coding */}
                            <div className="absolute inset-0 top-8 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
                                {/* Silhouette 1 (User) */}
                                <div className="w-32 h-32 bg-gray-700 rounded-full absolute left-1/4 top-1/2 -translate-y-1/2 opacity-50"></div>
                                {/* Silhouette 2 (Pro) */}
                                <div className="w-32 h-32 bg-cyber-midnight rounded-full absolute right-1/4 top-1/2 -translate-y-1/2 opacity-80 border-4 border-cyber-gold"></div>

                                <div className="relative z-10 text-white font-bold text-2xl tracking-widest uppercase">
                                    Problem Solved
                                </div>
                                <div className="absolute inset-0 bg-cyber-vermilion/20 mix-blend-overlay"></div>
                            </div>

                            {/* Floating Success Toast */}
                            <div className="absolute bottom-8 right-8 bg-white text-black px-4 py-2 rounded shadow-lg flex items-center gap-2 animate-bounce">
                                <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center text-[10px] text-white">✓</div>
                                <span className="text-xs font-bold">Deploy Successful</span>
                            </div>
                        </div>

                        {/* Back Glow */}
                        <div className="absolute -inset-4 bg-cyber-vermilion/10 blur-[60px] -z-10 rounded-full"></div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SolutionSection;
