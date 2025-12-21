"use client";

import React from 'react';
import Link from 'next/link';

const SocialProofSection: React.FC = () => {
    return (
        <section className="py-24 px-6 bg-gray-50">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-3xl font-bold font-noto-sans text-center text-cyber-midnight mb-16">
                    「もっと早く出会いたかった」<br />
                    驚きと感謝の声。
                </h2>

                <div className="space-y-8">
                    {/* Testimonial 1 */}
                    <div className="flex gap-4 items-start">
                        <div className="w-12 h-12 rounded-full bg-gray-300 flex-shrink-0"></div>
                        <div className="flex flex-col gap-1 max-w-[80%]">
                            <span className="text-xs text-gray-500 ml-1">28歳 女性 / 事務職</span>
                            <div className="bg-white p-6 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 relative">
                                <p className="text-gray-700 leading-relaxed">
                                    もっと早く頼めばよかった。独学で3ヶ月悩んでいたエラーが、<span className="font-bold text-cyber-midnight bg-yellow-100">たった30分のセッションで解決しました。</span>
                                    <br />
                                    魔法を見ているようでしたが、解説がとても丁寧で「なぜ動かなかったのか」が腹落ちしました。
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="flex gap-4 items-start flex-row-reverse">
                        <div className="w-12 h-12 rounded-full bg-cyber-midnight flex-shrink-0 border-2 border-cyber-gold"></div>
                        <div className="flex flex-col gap-1 items-end max-w-[80%]">
                            <span className="text-xs text-gray-500 mr-1">30歳 男性 / 営業職</span>
                            <div className="bg-[#E8F0FE] p-6 rounded-2xl rounded-tr-none shadow-sm relative">
                                <p className="text-gray-800 leading-relaxed">
                                    ビジネスライクじゃなく、<span className="font-bold text-cyber-green">兄貴のように親身になってくれる</span>のが嬉しかったです。
                                    <br />
                                    「未経験でも大丈夫」という言葉に嘘はありませんでした。自信がつきました！
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Testimonial 3 */}
                    <div className="flex gap-4 items-start">
                        <div className="w-12 h-12 rounded-full bg-gray-300 flex-shrink-0"></div>
                        <div className="flex flex-col gap-1 max-w-[80%]">
                            <span className="text-xs text-gray-500 ml-1">34歳 男性 / フリーランス</span>
                            <div className="bg-white p-6 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 relative">
                                <p className="text-gray-700 leading-relaxed">
                                    単発で利用できるのが本当に助かります。<br />
                                    必要な時だけピンポイントでプロの知恵を借りられるので、<span className="font-bold text-cyber-midnight border-b-2 border-cyber-gold">学習コストが劇的に下がりました。</span>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Mid-Page CTA */}
                <div className="mt-20 text-center">
                    <p className="font-bold text-cyber-midnight mb-6">次は、あなたの番です。</p>
                    <Link href="/cyber/application" className="inline-block px-10 py-4 bg-cyber-green text-black font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                        体験セッションに申し込む
                    </Link>
                    <p className="mt-4 text-xs text-gray-400">体験価格は予告なく終了する場合があります</p>
                </div>

            </div>
        </section>
    );
};

export default SocialProofSection;
