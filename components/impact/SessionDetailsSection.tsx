"use client";

import React from 'react';
import { Check, Info } from 'lucide-react';

const SessionDetailsSection: React.FC = () => {
    const sessionSteps = [
        "基本動作（立位・歩行）に関するヒアリング",
        "動作の安定性・再現性についての対話",
        "身体の使える範囲・優位性を踏まえた方向性の整理",
        "今後のパフォーマンス向上に向けた改善ポイントのピックアップ"
    ];

    const benefits = [
        "自分の動きが安定しない「理由」がわかる",
        "何を変えるべきで、何を変えなくていいかが明確になる",
        "トレーニングやフォーム修正の精度が上がる"
    ];

    return (
        <section className="relative z-10 py-24 px-6 md:px-12 bg-black text-white">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-24">

                    {/* Session Content */}
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-impact-red pl-4">
                            初回体験セッションで行うこと
                        </h2>
                        <ul className="space-y-6">
                            {sessionSteps.map((step, index) => (
                                <li key={index} className="flex items-start gap-4">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-impact-red text-white flex items-center justify-center text-xs font-bold mt-1">
                                        {index + 1}
                                    </span>
                                    <span className="text-gray-300 leading-relaxed">{step}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-8 p-4 bg-gray-900 border border-gray-700 rounded-lg flex items-start gap-3">
                            <Info size={20} className="text-gray-500 mt-1 flex-shrink-0" />
                            <p className="text-sm text-gray-500 leading-relaxed">
                                ※トレーニング指導や矯正を行う場ではありません。<br />
                                あくまで「現状の解析」と「指針の提示」に特化しています。
                            </p>
                        </div>
                    </div>

                    {/* Benefits */}
                    <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-3xl border border-gray-800 shadow-xl">
                        <h2 className="text-2xl font-bold text-white mb-8 text-center">
                            Impactで得られるもの
                        </h2>
                        <ul className="space-y-6">
                            {benefits.map((benefit, index) => (
                                <li key={index} className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/5">
                                    <div className="text-impact-red mt-1">
                                        <Check size={20} />
                                    </div>
                                    <span className="text-white font-bold leading-relaxed">{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SessionDetailsSection;
