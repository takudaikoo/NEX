"use client";

import React from 'react';
import { CheckSquare, X, AlertTriangle } from 'lucide-react';

const ProblemAgitationSection: React.FC = () => {
    return (
        <section className="py-24 px-6 bg-[#f5f5f7] text-black">
            <div className="container mx-auto max-w-5xl">

                {/* Problem: Empathy (Checklist) */}
                <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
                    <div className="order-2 md:order-1">
                        <h2 className="text-3xl font-bold font-noto-sans mb-8">
                            「今のままで、自分はこれから<br />生き残れるのだろうか？」
                        </h2>
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <div className="space-y-6">
                                <label className="flex items-start gap-4 cursor-pointer group">
                                    <div className="mt-1 w-6 h-6 border-2 border-gray-300 rounded flex items-center justify-center group-hover:border-cyber-midnight transition-colors">
                                        <div className="w-3 h-3 bg-cyber-midnight rounded-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    </div>
                                    <span className="text-lg font-medium text-gray-700 group-hover:text-black transition-colors">
                                        仕事の成果が出ないのは、環境のせい？自分の能力不足？
                                    </span>
                                </label>
                                <div className="h-px bg-gray-100"></div>
                                <label className="flex items-start gap-4 cursor-pointer group">
                                    <div className="mt-1 w-6 h-6 border-2 border-gray-300 rounded flex items-center justify-center group-hover:border-cyber-midnight transition-colors">
                                        <div className="w-3 h-3 bg-cyber-midnight rounded-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    </div>
                                    <span className="text-lg font-medium text-gray-700 group-hover:text-black transition-colors">
                                        毎日残業ばかりで、スキルアップの時間なんて取れない。
                                    </span>
                                </label>
                                <div className="h-px bg-gray-100"></div>
                                <label className="flex items-start gap-4 cursor-pointer group">
                                    <div className="mt-1 w-6 h-6 border-2 border-gray-300 rounded flex items-center justify-center group-hover:border-cyber-midnight transition-colors">
                                        <div className="w-3 h-3 bg-cyber-midnight rounded-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    </div>
                                    <span className="text-lg font-medium text-gray-700 group-hover:text-black transition-colors">
                                        AIニュースを見るたび、「自分の席がなくなる」と焦る。
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>
                    {/* Visual: Silhouette */}
                    <div className="order-1 md:order-2 flex justify-center opacity-80">
                        {/* Abstract Silhouette using CSS shapes or Placeholder */}
                        <div className="w-64 h-64 bg-gray-200 rounded-full relative overflow-hidden grayscale">
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-gray-400 rounded-full"></div>
                            <div className="absolute bottom-32 left-1/2 -translate-x-1/2 w-24 h-24 bg-gray-400 rounded-full"></div>
                            {/* Question marks */}
                            <div className="absolute top-10 right-10 text-6xl font-bold text-gray-300">?</div>
                            <div className="absolute top-20 left-10 text-4xl font-bold text-gray-300">?</div>
                        </div>
                    </div>
                </div>

                {/* Agitation: Reject Old Methods */}
                <div className="text-center max-w-4xl mx-auto">
                    <div className="inline-block p-3 mb-6 bg-red-100 rounded-full text-red-600">
                        <AlertTriangle size={32} />
                    </div>
                    <h2 className="text-3xl font-bold mb-6">
                        あなたが成長できないのは、能力のせいではありません。<br />
                        <span className="text-red-600 underline decoration-wavy underline-offset-8">「学び方」が古いだけです。</span>
                    </h2>
                    <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto mb-12">
                        「動画を見るだけの独学」や「高額なだけの座学研修」で、明日の業務が変わりましたか？<br />
                        現場で使えない知識を詰め込んでも、現実は1ミリも動きません。
                    </p>

                    {/* Visual: Rejected Methods */}
                    <div className="grid grid-cols-2 gap-8 max-w-2xl mx-auto">
                        <div className="bg-white p-6 rounded-xl border border-gray-200 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-red-500/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
                                <X size={64} className="text-red-600" />
                            </div>
                            <div className="text-4xl mb-4 grayscale opacity-30">📚</div>
                            <h3 className="font-bold text-gray-400">大量の動画教材</h3>
                            <p className="text-xs text-gray-400">見ても手が動かない</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-gray-200 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-red-500/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
                                <X size={64} className="text-red-600" />
                            </div>
                            <div className="text-4xl mb-4 grayscale opacity-30">😴</div>
                            <h3 className="font-bold text-gray-400">眠くなる座学</h3>
                            <p className="text-xs text-gray-400">現場と乖離している</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ProblemAgitationSection;
