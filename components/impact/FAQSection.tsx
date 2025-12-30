"use client";

import React from 'react';

const FAQSection: React.FC = () => {
    const faqs = [
        {
            q: "治療やリハビリを行うサービスですか？",
            a: "いいえ。Impactは医療行為や治療、リハビリを目的としたサービスではありません。競技レベル向上のために、身体の動作条件や前提を解析・整理する「研究所」のような立ち位置です。"
        },
        {
            q: "フォーム指導やトレーニング指導はありますか？",
            a: "直接的な指導や矯正は行いません。解析と対話を通じて、どこに可能性や制約があるかを明らかにし、今後の方向性を整理します。"
        },
        {
            q: "整体・トレーナー・コーチとは何が違うのですか？",
            a: "Impactは「良くする」「直す」ことを目的にせず、競技動作の土台となる条件を可視化する点が異なります。判断材料を提供することが役割です。"
        },
        {
            q: "競技レベルが高くないと受けられませんか？",
            a: "いいえ。競技レベルは全く問いません。競技力向上を目的として自身の身体と向き合いたい方はもちろん、日常動作における身体の使い方を整理し、不調の背景にある条件を理解したい方にも適しています。"
        }
    ];

    return (
        <section className="relative z-10 py-24 px-6 bg-white/90 backdrop-blur-sm">
            <div className="container mx-auto max-w-3xl">
                <div className="text-center mb-16">
                    <span className="text-impact-red text-sm font-mono tracking-widest border border-impact-red/30 px-3 py-1 rounded mb-4 inline-block">FAQ</span>
                    <h2 className="text-3xl font-bold font-noto-sans text-gray-900 mb-4">よくある質問</h2>
                </div>

                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                            <div className="bg-gray-50 p-6 flex items-start gap-4">
                                <span className="text-impact-red font-bold font-mono text-xl">Q.</span>
                                <h3 className="text-gray-900 font-bold text-lg pt-0.5">{faq.q}</h3>
                            </div>
                            <div className="p-6 pt-0 bg-gray-50 text-gray-600 leading-relaxed pl-14">
                                {faq.a}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
