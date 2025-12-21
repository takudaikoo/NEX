"use client";

import React from 'react';
import { Atom, Smartphone, UserCheck } from 'lucide-react';

const USPSection: React.FC = () => {
    return (
        <section className="py-24 px-6 bg-gray-50 relative">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold font-noto-sans text-gray-900 mb-4">
                        理系脳アスリートに選ばれる3つの理由
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {/* Point 1 */}
                    <div className="space-y-6 group">
                        <div className="w-16 h-16 border border-impact-red/30 rounded-full flex items-center justify-center text-impact-red group-hover:bg-impact-red group-hover:text-white transition-all duration-500">
                            <Atom size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">
                            <span className="text-impact-red block text-xs tracking-widest uppercase mb-1">Point 1</span>
                            Physics（物理学的根拠）
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
                            「もっと気合で」は禁句です。ニュートン力学に基づき、あなたの身体にかかる負荷やベクトルを論理的に解説します。「なぜ」が分かるから、迷いが消えます。
                        </p>
                    </div>

                    {/* Point 2 */}
                    <div className="space-y-6 group">
                        <div className="w-16 h-16 border border-impact-red/30 rounded-full flex items-center justify-center text-impact-red group-hover:bg-impact-red group-hover:text-white transition-all duration-500">
                            <Smartphone size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">
                            <span className="text-impact-red block text-xs tracking-widest uppercase mb-1">Point 2</span>
                            AI Tools（再現性）
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
                            あなたのスマホがコーチになります。高額な機材は不要。無料〜安価なアプリを使って、日々の練習で自分のフォームを「セルフチェック」する技術を伝授します。
                        </p>
                    </div>

                    {/* Point 3 */}
                    <div className="space-y-6 group">
                        <div className="w-16 h-16 border border-impact-red/30 rounded-full flex items-center justify-center text-impact-red group-hover:bg-impact-red group-hover:text-white transition-all duration-500">
                            <UserCheck size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">
                            <span className="text-impact-red block text-xs tracking-widest uppercase mb-1">Point 3</span>
                            Spot Consulting（完結型）
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
                            私たちは、あなたを依存させません。車の車検のように、不調な時やレベルアップしたい時だけ使ってください。しつこい継続勧誘は一切ありません。
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default USPSection;
