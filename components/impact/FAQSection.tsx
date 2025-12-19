"use client";

import React from 'react';

const FAQSection: React.FC = () => {
    return (
        <section className="py-24 px-6 bg-[#050505]">
            <div className="container mx-auto max-w-3xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold font-noto-sans text-white mb-4">よくある質問</h2>
                </div>

                <div className="space-y-6">
                    {/* Q1 */}
                    <div className="border border-white/10 rounded-xl overflow-hidden">
                        <div className="bg-[#0a0a0a] p-6 flex items-start gap-4">
                            <span className="text-tech-cyan font-bold font-mono text-xl">Q.</span>
                            <h3 className="text-white font-bold text-lg pt-0.5">初心者でも大丈夫ですか？</h3>
                        </div>
                        <div className="p-6 pt-0 bg-[#0a0a0a] text-white/60 leading-relaxed pl-14">
                            はい。むしろ変な癖が定着する前に「構造上の正解」を知ることは、上達への最短ルートです。
                        </div>
                    </div>

                    {/* Q2 */}
                    <div className="border border-white/10 rounded-xl overflow-hidden">
                        <div className="bg-[#0a0a0a] p-6 flex items-start gap-4">
                            <span className="text-tech-cyan font-bold font-mono text-xl">Q.</span>
                            <h3 className="text-white font-bold text-lg pt-0.5">特別なアプリや機材は必要ですか？</h3>
                        </div>
                        <div className="p-6 pt-0 bg-[#0a0a0a] text-white/60 leading-relaxed pl-14">
                            いいえ、無料または数百円のアプリで十分です。設定方法からレクチャーします。
                        </div>
                    </div>

                    {/* Q3 */}
                    <div className="border border-white/10 rounded-xl overflow-hidden">
                        <div className="bg-[#0a0a0a] p-6 flex items-start gap-4">
                            <span className="text-tech-cyan font-bold font-mono text-xl">Q.</span>
                            <h3 className="text-white font-bold text-lg pt-0.5">定期的に通わないと意味がないですか？</h3>
                        </div>
                        <div className="p-6 pt-0 bg-[#0a0a0a] text-white/60 leading-relaxed pl-14">
                            1回で課題を特定し、数ヶ月分の宿題を出しますので、頻繁に通う必要はありません。
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
