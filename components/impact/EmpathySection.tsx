"use client";

import React from 'react';
import { RefreshCw, AlertCircle } from 'lucide-react';

const EmpathySection: React.FC = () => {
    const painPoints = [
        "練習量は増えているのに、記録や感覚が安定しない",
        "同じ部位を、何度も痛めてしまう",
        "フォームを修正しても、しばらくすると元に戻る",
        "トレーニングの効き方が日によって違う",
        "調子の良い日と悪い日の差が大きい",
    ];

    return (
        <section className="relative z-10 py-24 px-6 md:px-12 bg-gray-50/80 backdrop-blur-sm overflow-hidden">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <h2 className="text-2xl md:text-4xl font-bold font-noto-sans text-center text-gray-900 mb-16 leading-relaxed">
                    こんな<span className="text-impact-red">“繰り返し”</span>に<br className="md:hidden" />
                    心当たりはありませんか？
                </h2>

                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Visual: The Infinite Loop of Frustration */}
                    <div className="relative h-80 flex items-center justify-center">
                        {/* Background Rings */}
                        <div className="absolute w-64 h-64 border-2 border-dashed border-gray-300 rounded-full animate-spin-slow opacity-50"></div>
                        <div className="absolute w-48 h-48 border border-gray-200 rounded-full opacity-30"></div>

                        {/* The Loop Icon */}
                        <div className="text-impact-red animate-reverse-spin">
                            <RefreshCw size={80} strokeWidth={1} />
                        </div>

                        {/* Text Inside */}
                        <div className="absolute text-center z-10">
                            <div className="text-sm text-impact-red tracking-[0.3em] mb-2 font-mono font-bold uppercase drop-shadow-sm">REPEATED ERROR</div>
                            <div className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-wider drop-shadow-sm">
                                再現性<span className="text-impact-red">ゼロ</span>
                            </div>
                        </div>


                    </div>

                    {/* Checklist */}
                    <div className="space-y-4">
                        {painPoints.map((point, index) => (
                            <div key={index} className="flex items-center gap-5 p-5 rounded-xl bg-white/90 backdrop-blur-md border border-gray-100/50 hover:border-impact-red/50 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(255,46,46,0.1)] group">
                                <div className="flex-shrink-0 text-gray-300 group-hover:text-impact-red transition-colors duration-300">
                                    <AlertCircle size={24} strokeWidth={2} />
                                </div>
                                <p className="text-lg text-gray-800 font-bold leading-relaxed tracking-wide">
                                    {point}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Conclusion */}
                <div className="mt-20 text-center">
                    <p className="text-lg md:text-xl text-gray-900 font-medium">
                        それらはすべて、<br className="md:hidden" />
                        <span className="text-gray-500">能力や努力の問題ではない可能性があります。</span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default EmpathySection;
