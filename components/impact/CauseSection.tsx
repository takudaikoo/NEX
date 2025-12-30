"use client";

import React from 'react';
import { MoveRight } from 'lucide-react';

const CauseSection: React.FC = () => {
    return (
        <section className="relative z-10 py-24 px-6 md:px-12 bg-white/80 backdrop-blur-sm text-gray-900 overflow-hidden">
            <div className="max-w-5xl mx-auto text-center">

                {/* Title */}
                <div className="inline-block px-4 py-1 border border-impact-red text-impact-red text-xs tracking-widest mb-6 rounded-full font-mono">
                    ROOT CAUSE
                </div>
                <h2 className="text-3xl md:text-5xl font-bold font-noto-sans mb-12">
                    問題は「動き」ではなく<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-impact-red to-gray-900">
                        「動く前」
                    </span>
                    にある
                </h2>

                {/* Text Content */}
                <div className="max-w-3xl mx-auto space-y-8 mb-20 text-gray-600 leading-loose">
                    <p>
                        多くの人は、不調や不安定さの原因を<br className="hidden md:block" />
                        <span className="text-gray-900 font-bold border-b border-gray-300 pb-1">フォーム・筋力・柔軟性</span>に求めます。
                    </p>
                    <p>
                        しかし実際には、<br className="md:hidden" />
                        動作そのものではなく、<br />
                        <span className="text-impact-red font-bold text-xl">動作に入る前の身体条件</span>や
                        <span className="text-impact-red font-bold text-xl">認知の前提</span>によって、<br />
                        結果にばらつきが生まれているケースが少なくありません。
                    </p>
                    <p className="pt-4 border-t border-gray-200">
                        Impactでは、すべての動作を<span className="text-gray-900 font-bold">「立つ」「歩く」という最小単位まで分解</span>し、<br className="hidden md:block" />
                        身体が安定して動作に入れる土台が成立しているかを確認します。
                    </p>
                </div>

                {/* Visual Logic Block */}
                <div className="grid md:grid-cols-3 gap-4 items-stretch">
                    {/* Common Approach (Mistake) */}
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 flex flex-col items-center opacity-50 grayscale transition-all hover:grayscale-0 hover:opacity-100">
                        <div className="text-sm text-gray-400 mb-2 font-mono">COMMON BIAS</div>
                        <div className="text-2xl font-bold text-gray-400 mb-4">動きそのもの</div>
                        <p className="text-xs text-gray-500">フォーム / 筋力 / トリック</p>
                        <div className="mt-auto pt-4 text-xs font-mono text-gray-400">SURFACE LEVEL</div>
                    </div>

                    {/* Arrow */}
                    <div className="flex items-center justify-center py-4 md:py-0">
                        <div className="bg-impact-red/5 p-4 rounded-full text-impact-red animate-pulse">
                            <MoveRight size={32} className="rotate-90 md:rotate-0" />
                        </div>
                    </div>

                    {/* Impact Approach (Solution) */}
                    <div className="bg-white p-8 rounded-2xl border border-impact-red flex flex-col items-center shadow-xl shadow-impact-red/5">
                        <div className="text-sm text-impact-red mb-2 font-mono">REAL CAUSE</div>
                        <div className="text-2xl font-bold text-gray-900 mb-4">動く前の条件</div>
                        <p className="text-xs text-gray-600">重心位置 / 感覚入力 / 骨格配列</p>
                        <div className="mt-auto pt-4 text-xs font-mono text-impact-red">DEEP LEVEL</div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CauseSection;
