"use client";

import React from 'react';

const ImpactTheorySection: React.FC = () => {
    return (
        <section className="relative z-10 py-24 px-6 md:px-12 bg-black text-white">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                {/* Content */}
                <div className="order-2 md:order-1 space-y-8">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold font-sans text-impact-red mb-4 tracking-tighter">
                            Impactとは
                        </h2>
                        <h3 className="text-xl md:text-2xl font-bold text-white">
                            動作の“前提条件”を可視化する<br />解析サービス
                        </h3>
                    </div>

                    <div className="space-y-6 text-gray-300 leading-relaxed">
                        <p>
                            立つ・歩くという無意識の動作は、<br />
                            すべてのスポーツ・運動の土台です。
                        </p>
                        <p>
                            ここが崩れていると、<br />
                            どれだけフォームや技術を積み上げても<br />
                            再現性は生まれません。
                        </p>
                        <p>
                            Impactは、<br />
                            <span className="text-white font-bold border-b border-impact-red">身体の使える範囲・安定性・左右差</span>を解析し、<br />
                            「なぜうまくいかないのか」を構造として明らかにします。
                        </p>
                    </div>
                </div>

                {/* Visual: The Pyramid of Performance */}
                <div className="order-1 md:order-2 relative h-96 flex flex-col items-center justify-end p-8">
                    {/* Background Grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,46,46,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,46,46,0.05)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]"></div>

                    {/* Level 3: Sport Performance (Top) */}
                    <div className="w-full max-w-[200px] h-24 mb-2 bg-gray-800 border border-gray-700 rounded-lg flex items-center justify-center relative translate-y-4 opacity-70">
                        <span className="text-sm font-bold text-gray-400">競技スキル / フォーム</span>
                        {/* Unstable Indicator */}
                        <div className="absolute -right-4 top-0 text-red-500 animate-pulse text-xs font-mono">UNSTABLE?</div>
                    </div>

                    {/* Level 2: Physical Capacity */}
                    <div className="w-full max-w-[280px] h-28 mb-2 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center relative">
                        <span className="text-sm font-bold text-gray-400">筋力 / 柔軟性 / 持久力</span>
                    </div>

                    {/* Level 1: Foundation (Impact Focus) */}
                    <div className="w-full max-w-[360px] h-32 bg-gradient-to-b from-impact-red/20 to-black border-2 border-impact-red rounded-xl flex flex-col items-center justify-center relative shadow-[0_0_40px_rgba(255,46,46,0.2)]">
                        <span className="text-lg font-bold text-white tracking-widest">IMPACT AREA</span>
                        <span className="text-sm text-impact-red mt-1">「立つ」「歩く」動作の前提条件</span>

                        {/* Highlights */}
                        <div className="absolute bottom-0 w-full h-1 bg-impact-red shadow-[0_0_20px_red]"></div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default ImpactTheorySection;
