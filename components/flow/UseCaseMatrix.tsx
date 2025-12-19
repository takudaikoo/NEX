"use client";

import React from 'react';
import { ArrowRight, Shield, Rocket } from 'lucide-react';

const UseCaseMatrix: React.FC = () => {
    return (
        <section className="py-24 px-6 bg-tech-navy-light/30 border-y border-white/5">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">攻めと守り、あらゆる課題を解決します。</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Aggressive (Red/Growth) */}
                    <div className="bg-gradient-to-br from-[#1a0505] to-transparent p-8 rounded-3xl border border-red-500/20 hover:border-red-500/50 transition-colors">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 bg-red-500/20 rounded-xl text-red-500">
                                <Rocket size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white">攻めのTech Curation <span className="text-sm font-normal opacity-60 ml-2">（売上拡大）</span></h3>
                        </div>
                        <ul className="space-y-4">
                            <UseCaseItem text="高額商材専用 LP構築 (CVR向上)" />
                            <UseCaseItem text="コーポレートブランディングサイト (採用増)" />
                            <UseCaseItem text="会員制動画スクール立ち上げ (自動化)" />
                            <UseCaseItem text="ウェビナー自動集客ファネル" />
                            <UseCaseItem text="越境EC / D2Cストア構築 (多言語)" />
                        </ul>
                    </div>

                    {/* Defensive (Blue/Efficiency) */}
                    <div className="bg-gradient-to-br from-[#050a1a] to-transparent p-8 rounded-3xl border border-blue-500/20 hover:border-blue-500/50 transition-colors">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 bg-blue-500/20 rounded-xl text-blue-500">
                                <Shield size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white">守りのTech Curation <span className="text-sm font-normal opacity-60 ml-2">（業務効率化）</span></h3>
                        </div>
                        <ul className="space-y-4">
                            <UseCaseItem text="見積・請求・契約オートメーション" />
                            <UseCaseItem text="CS対応 AIチャットボット (コスト70%減)" />
                            <UseCaseItem text="在庫・受発注管理システム (脱エクセル)" />
                            <UseCaseItem text="社内ナレッジベース構築 (検索ゼロへ)" />
                            <UseCaseItem text="経営数値 リアルタイムダッシュボード" />
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

const UseCaseItem = ({ text }: { text: string }) => (
    <li className="flex items-start gap-3 text-white/80 hover:text-white transition-colors">
        <ArrowRight size={18} className="mt-1 opacity-50 shrink-0" />
        <span>{text}</span>
    </li>
);

export default UseCaseMatrix;
