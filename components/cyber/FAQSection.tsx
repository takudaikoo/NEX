"use client";

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQSection: React.FC = () => {
    const faqs = [
        {
            q: "全くの初心者でも大丈夫ですか？",
            a: "大歓迎です。専門用語を使わず、あなたのレベルに合わせて「翻訳」して伝えます。PCの操作から不安な方でも、手取り足取りサポートします。"
        },
        {
            q: "本当に追加料金はかかりませんか？",
            a: "はい。体験セッションは表示価格（4,980円）のみです。継続をご希望の場合も、明確なチケット料金表をご提示します。勝手に課金されることは一切ありません。"
        },
        {
            q: "自分の持っているデータを使えますか？",
            a: "はい、可能です。機密情報に当たらない範囲で、実務で使われているcsvやExcelデータをご用意いただければ、それを使って開発を行います。最も学習効果が高い方法です。"
        },
        {
            q: "オンラインセッションはどのようなツールを使いますか？",
            a: "基本的にはGoogle MeetやZoomを使用し、画面共有を行いながら進めます。事前に特別なソフトをインストールする必要はありません。"
        }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 px-6 bg-gray-50 text-cyber-midnight">
            <div className="container mx-auto max-w-3xl">
                <h2 className="text-3xl font-bold font-noto-sans text-center mb-16">
                    よくあるご質問
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
                            <button
                                onClick={() => toggle(index)}
                                className="w-full flex items-center justify-between p-6 text-left font-bold"
                            >
                                <span>Q. {faq.q}</span>
                                {openIndex === index ? (
                                    <Minus size={20} className="text-cyber-vermilion min-w-[20px]" />
                                ) : (
                                    <Plus size={20} className="text-gray-400 min-w-[20px]" />
                                )}
                            </button>
                            <div
                                className={`transition-all duration-300 ease-in-out px-6 text-gray-600 leading-relaxed ${openIndex === index ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                A. {faq.a}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
