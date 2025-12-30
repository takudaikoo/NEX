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
                            <Users size={24} className="text-cyber-green" />
                            <span className="font-bold uppercase tracking-widest text-sm">The Co-Pilot Method</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold font-noto-sans text-cyber-midnight mb-8 leading-tight">
                            必要なのは「正解」ではなく<br />
                            <span className="text-cyber-green">「あなたの実務」</span>を<br />
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

                    {/* Visual: Pair Programming / Git Graph */}
                    <div className="relative">
                        <div className="relative aspect-video bg-[#0d1117] rounded-2xl overflow-hidden shadow-2xl group border border-gray-800">
                            {/* Header */}
                            <div className="absolute top-0 left-0 w-full h-10 bg-[#161b22] flex items-center px-4 gap-2 border-b border-gray-800">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                                </div>
                                <div className="ml-4 text-xs text-gray-400 font-mono">main.tsx — VS Code</div>
                            </div>

                            {/* Content: Split Screen Code + Chat */}
                            <div className="absolute inset-0 top-10 flex">
                                {/* Left: Code Editor (User) */}
                                <div className="w-2/3 border-r border-gray-800 p-4 font-mono text-[10px] md:text-xs text-gray-300 relative">
                                    <div className="absolute top-4 left-4 bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded text-[10px]">YOU (Writing...)</div>
                                    <div className="mt-8 space-y-1 opacity-70">
                                        <div className="flex"><span className="text-gray-600 mr-2">1</span> <span className="text-purple-400">const</span> <span className="text-yellow-200">App</span> = () {'=>'} {'{'}</div>
                                        <div className="flex"><span className="text-gray-600 mr-2">2</span> &nbsp;&nbsp;<span className="text-purple-400">return</span> (</div>
                                        <div className="flex"><span className="text-gray-600 mr-2">3</span> &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">Error: undefined variable</span></div>
                                        <div className="flex"><span className="text-gray-600 mr-2">4</span> &nbsp;&nbsp;);</div>
                                        <div className="flex"><span className="text-gray-600 mr-2">5</span> {'}'};</div>
                                    </div>
                                </div>

                                {/* Right: Co-Pilot (Pro) */}
                                <div className="w-1/3 bg-[#0d1117] p-4 font-mono text-[10px] md:text-xs relative">
                                    <div className="absolute top-4 left-4 bg-cyber-green/20 text-cyber-green px-2 py-0.5 rounded text-[10px]">NEX MENTOR</div>
                                    <div className="mt-8 space-y-2">
                                        <div className="bg-gray-800 p-2 rounded text-gray-300 text-[9px] leading-relaxed">
                                            Here's the fix.<br />
                                            Import the missing hook first.
                                        </div>
                                        <div className="text-cyber-green">
                                            + import {'{'} useState {'}'} ...
                                        </div>
                                        <div className="flex justify-end">
                                            <div className="bg-cyber-green text-black px-2 py-1 rounded text-[9px] font-bold">Fixed! 🚀</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Git Graph Overlay (Visualizing Progress) */}
                            <div className="absolute bottom-0 left-0 w-full h-16 bg-[#161b22]/90 backdrop-blur flex items-center justify-around px-8 border-t border-gray-700">
                                <div className="flex flex-col items-center gap-1 opacity-50"><div className="w-2 h-2 rounded-full bg-gray-500"></div><div className="text-[9px] text-gray-500">Init</div></div>
                                <div className="h-0.5 w-8 bg-gray-600"></div>
                                <div className="flex flex-col items-center gap-1 opacity-50"><div className="w-2 h-2 rounded-full bg-gray-500"></div><div className="text-[9px] text-gray-500">WIP</div></div>
                                <div className="h-0.5 w-8 bg-gray-600"></div>
                                <div className="flex flex-col items-center gap-1"><div className="w-3 h-3 rounded-full bg-cyber-green shadow-[0_0_10px_rgba(0,255,65,0.5)]"></div><div className="text-[9px] text-cyber-green font-bold">Merged</div></div>
                            </div>
                        </div>

                        {/* Back Glow */}
                        <div className="absolute -inset-4 bg-cyber-green/10 blur-[60px] -z-10 rounded-full"></div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SolutionSection;
