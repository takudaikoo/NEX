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
        <section className="relative z-10 py-24 px-6 md:px-12 bg-gray-50/90 backdrop-blur-sm overflow-hidden">
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
                        <div className="absolute text-center">
                            <div className="text-xs text-impact-red tracking-widest mb-2 font-bold">REPEATED ERROR</div>
                            <div className="text-2xl font-bold text-gray-900 tracking-widest">再現性<span className="text-gray-400">ゼロ</span></div>
                        </div>

                        {/* Floating Dots */}
                        <div className="absolute top-10 right-20 w-2 h-2 bg-impact-red rounded-full animate-ping"></div>
                        <div className="absolute bottom-10 left-20 w-2 h-2 bg-impact-red rounded-full animate-bounce"></div>
                    </div>

                    {/* Checklist */}
                    <div className="space-y-6">
                        {painPoints.map((point, index) => (
                            <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-200 hover:border-impact-red/30 transition-colors duration-300 shadow-sm">
                                <div className="mt-1 min-w-[20px] text-impact-red">
                                    <AlertCircle size={20} />
                                </div>
                                <p className="text-gray-700 font-light leading-relaxed">
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
