"use client";

import React from 'react';
import Link from 'next/link';
import { Zap, AlertTriangle, XCircle, ArrowDown, Network, CheckCircle2, X, Check, Eye, TrendingUp, Shield, Rocket, ArrowRight, Code2, Database, MessageSquare } from 'lucide-react';

// --- FirstOfferSection ---
export const FirstOfferSection: React.FC = () => {
    return (
        <div className="w-full bg-tech-navy-light/80 backdrop-blur-md border-y border-white/5 py-4 px-6 relative z-20">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Hook Text */}
                <div className="flex items-center gap-4 text-center md:text-left">
                    <div className="p-2 bg-tech-cyan/10 rounded-full text-tech-cyan">
                        <Zap size={18} />
                    </div>
                    <p className="text-sm md:text-base font-medium text-white/90">
                        あなたの課題、既存ツールで解決可能か<span className="text-tech-cyan font-bold">無料診断</span>します。
                    </p>
                </div>

                {/* Badge */}
                <div className="flex items-center gap-3">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tech-green opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-tech-green"></span>
                    </span>
                    <span className="text-xs md:text-sm font-mono text-tech-green tracking-wider uppercase font-bold">
                        プロトタイプ提供まで最短3日
                    </span>
                </div>
            </div>
        </div>
    );
};

// --- ProblemSection ---
export const ProblemSection: React.FC = () => {
    return (
        <section className="bg-tech-navy-light py-20 px-6 relative overflow-hidden">
            {/* Background Illustration */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <line x1="0" y1="0" x2="100" y2="100" stroke="white" strokeWidth="0.5" />
                    <line x1="100" y1="0" x2="0" y2="100" stroke="white" strokeWidth="0.5" />
                </svg>
            </div>

            <div className="container mx-auto max-w-5xl relative z-10">
                {/* 3. Problem */}
                <div className="text-center mb-24">
                    <div className="inline-block p-3 bg-red-500/10 rounded-full text-red-500 mb-6 animate-pulse">
                        <AlertTriangle size={32} />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8 text-white">
                        半年かけて作ったシステムが、<br className="hidden md:block" />
                        リリース初日に<span className="text-red-500 bg-red-500/10 px-2 rounded">「使い物にならない」</span>と気づく。
                    </h2>
                    <p className="text-xl text-white/60 font-light">
                        そんな悪夢はもう終わりにしませんか？
                    </p>
                </div>

                {/* 4. Agitation */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-tech-navy/50 p-8 md:p-12 rounded-3xl border border-white/5 backdrop-blur-sm">
                    <div className="space-y-6">
                        <h3 className="text-2xl md:text-3xl font-bold text-white">
                            原因はエンジニアの腕ではありません。
                        </h3>
                        <div className="space-y-4 text-white/70 leading-relaxed font-light">
                            <p>
                                「ゼロからコードを書く」というアプローチそのものが、現代のスピード感に負けているのです。
                            </p>
                            <p>
                                車に乗るために、エンジンを鋳造から始める人はいません。<br />
                                なぜシステムだけ、ネジ一本から作ろうとするのですか？
                            </p>
                        </div>
                    </div>

                    {/* Visual Metaphor */}
                    <div className="h-64 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 flex items-center justify-center relative overflow-hidden">
                        <div className="text-center space-y-2 opacity-50">
                            <CodeBlock />
                            <div className="absolute inset-0 bg-red-500/20 flex items-center justify-center rotate-12 transform scale-150">
                                <XCircle size={120} className="text-red-500" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Transition Arrow */}
                <div className="flex justify-center mt-20 opacity-50">
                    <ArrowDown className="animate-bounce" />
                </div>
            </div>
        </section>
    );
};

const CodeBlock = () => (
    <div className="font-mono text-xs text-left p-4 space-y-1 text-white/30">
        <p>function createWheel() &#123;</p>
        <p className="pl-4">iron.melt();</p>
        <p className="pl-4">rubber.mold();</p>
        <p className="pl-4"> // 6 months later...</p>
        <p className="pl-4">return error;</p>
        <p>&#125;</p>
    </div>
);

// --- SolutionSection ---
export const SolutionSection: React.FC = () => {
    return (
        <section className="py-24 px-6 relative bg-tech-navy">
            {/* 5. Solution */}
            <div className="container mx-auto max-w-6xl mb-32">
                <div className="text-center space-y-8 mb-16">
                    <span className="text-tech-cyan text-sm font-mono tracking-widest uppercase">The Answer</span>
                    <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-tech-cyan to-tech-green">
                        必要なのは「開発」ではなく<br />
                        「編集（Curation）」です。
                    </h2>
                    <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                        Tech Curatorは、世界中に存在する数百万のSaaS、API、NoCodeツールの中から、
                        御社に最適な「正解」を選び抜き、接続します。
                    </p>
                </div>

                {/* Visual: Connection Diagram */}
                <div className="relative h-[400px] w-full bg-tech-navy-light/30 rounded-3xl border border-tech-cyan/20 flex items-center justify-center overflow-hidden">
                    {/* Central Logo */}
                    <div className="relative z-10 bg-tech-navy p-6 rounded-2xl border border-tech-cyan shadow-[0_0_50px_rgba(0,243,255,0.2)]">
                        <span className="font-montserrat font-bold text-2xl text-white">Tech<span className="text-tech-cyan">Curator</span></span>
                    </div>

                    {/* Connecting Nodes (Abstract) */}
                    <div className="absolute inset-0">
                        <div className="absolute top-1/2 left-1/4 w-1/4 h-[1px] bg-gradient-to-r from-transparent to-tech-cyan animate-pulse"></div>
                        <div className="absolute top-1/4 left-1/2 h-1/4 w-[1px] bg-gradient-to-b from-transparent to-tech-cyan animate-pulse delay-100"></div>
                        <div className="absolute top-1/2 right-1/4 w-1/4 h-[1px] bg-gradient-to-l from-transparent to-tech-cyan animate-pulse delay-75"></div>
                        <ToolIcon name="Stripe" x="10%" y="20%" />
                        <ToolIcon name="HubSpot" x="85%" y="30%" />
                        <ToolIcon name="Supabase" x="20%" y="80%" />
                        <ToolIcon name="OpenAI" x="75%" y="75%" />
                    </div>
                </div>
            </div>

            {/* 6. Comparison */}
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl font-bold font-noto-sans">比較・優位性</h2>
                    <p className="text-white/60">技術への愛着（Ego）を捨て、ビジネスへの成果（Impact）だけを追求する。</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Conventional */}
                    <div className="bg-white/5 rounded-3xl p-8 border border-white/10 opacity-70 hover:opacity-100 transition-opacity">
                        <h3 className="text-2xl font-bold mb-8 text-white/50 border-b border-white/10 pb-4">通常開発</h3>
                        <div className="space-y-6">
                            <ComparisonItem label="納期" value="半年〜" isPositive={false} />
                            <ComparisonItem label="コスト" value="300万〜" isPositive={false} />
                            <ComparisonItem label="品質" value="バグ多 / 属人化" isPositive={false} />
                        </div>
                    </div>

                    {/* Tech Curator */}
                    <div className="bg-gradient-to-br from-tech-navy-light to-tech-navy rounded-3xl p-8 border border-tech-cyan/50 shadow-[0_0_30px_rgba(0,243,255,0.1)] relative overflow-hidden transform hover:-translate-y-2 transition-transform">
                        <div className="absolute top-0 right-0 p-3 bg-tech-cyan text-tech-navy font-bold text-xs uppercase tracking-wider rounded-bl-xl">
                            Recommended
                        </div>
                        <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-3 border-b border-white/10 pb-4">
                            <span className="text-tech-cyan">Tech Curator</span>
                        </h3>
                        <div className="space-y-6">
                            <ComparisonItem label="納期" value="1週間" isPositive={true} highlight />
                            <ComparisonItem label="コスト" value="5万〜" isPositive={true} highlight />
                            <ComparisonItem label="品質" value="世界基準 (Global Standard)" isPositive={true} highlight />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ToolIcon = ({ name, x, y }: { name: string, x: string, y: string }) => (
    <div className="absolute px-3 py-1 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 text-xs text-white/80" style={{ left: x, top: y }}>
        {name}
    </div>
);

const ComparisonItem = ({ label, value, isPositive, highlight }: { label: string, value: string, isPositive: boolean, highlight?: boolean }) => (
    <div className="flex items-center justify-between">
        <span className="text-white/60 font-light">{label}</span>
        <div className={`flex items-center gap-2 font-bold text-xl ${highlight ? 'text-tech-cyan' : isPositive ? 'text-white' : 'text-white/40'}`}>
            {isPositive ? <CheckCircle2 size={20} /> : <X size={20} />}
            <span>{value}</span>
        </div>
    </div>
);

// --- TargetUserSection ---
export const TargetUserSection: React.FC = () => {
    const targets = [
        "IT担当者がいない中小企業",
        "新規事業を素早く検証したいスタートアップ",
        "外注コストを抑えたい個人事業主"
    ];

    return (
        <section className="bg-tech-navy/50 py-16 px-6 border-b border-white/5">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-white text-center mb-10 font-noto-sans">
                    こんな方に向いています
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {targets.map((target, index) => (
                        <div key={index} className="flex items-center gap-4 bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors">
                            <div className="w-8 h-8 rounded-full bg-tech-cyan/20 flex items-center justify-center flex-shrink-0 text-tech-cyan">
                                <Check size={18} strokeWidth={3} />
                            </div>
                            <span className="text-white font-bold leading-relaxed">{target}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- USPSection ---
export const USPSection: React.FC = () => {
    return (
        <section className="py-24 px-6 relative">
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <USPCard
                        icon={<Eye size={32} />}
                        title="Showroom Strategy"
                        desc="まず「動くもの」をお見せします。試着してから購入してください。"
                    />
                    <USPCard
                        icon={<Zap size={32} />}
                        title="Hyper Speed"
                        desc="100点の完成度を待たず、60点のプロトタイプで来週からPDCAを回せます。"
                    />
                    <USPCard
                        icon={<TrendingUp size={32} />}
                        title="Business Logic"
                        desc="専門用語は使いません。経営の言葉（利益・効率）で対話します。"
                    />
                </div>
            </div>
        </section>
    );
};

const USPCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
    <div className="group p-8 bg-tech-navy-light/40 backdrop-blur-md border border-white/10 rounded-2xl hover:border-tech-cyan/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,243,255,0.1)] hover:-translate-y-1">
        <div className="w-16 h-16 rounded-xl bg-tech-navy flex items-center justify-center text-tech-cyan mb-6 group-hover:bg-tech-cyan group-hover:text-tech-navy transition-colors duration-300">
            {icon}
        </div>
        <h3 className="text-xl font-bold font-montserrat mb-4 text-white group-hover:text-tech-cyan transition-colors">{title}</h3>
        <p className="text-white/60 leading-relaxed font-light">
            {desc}
        </p>
    </div>
);

// --- UseCaseMatrix ---
export const UseCaseMatrix: React.FC = () => {
    return (
        <section className="py-24 px-6 bg-tech-navy-light/30 border-y border-white/5">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">攻めと守り、あらゆる課題を解決します。</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Aggressive */}
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
                    {/* Defensive */}
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

// --- WorksSection ---
export const WorksSection: React.FC = () => {
    return (
        <section className="py-24 px-6 bg-tech-navy relative">
            <div className="container mx-auto max-w-6xl">
                <div className="mb-16 text-center lg:text-left">
                    <h2 className="text-3xl font-bold font-noto-sans text-white mb-4">Case Study</h2>
                    <p className="text-white/60">実際の構築事例</p>
                </div>
                <div className="space-y-16">
                    {/* Case 01 */}
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-12">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Visual */}
                            <div className="relative h-[300px] lg:h-[360px] bg-[#0A0F1C] rounded-2xl border border-white/10 overflow-hidden group shadow-2xl">
                                <div className="absolute top-0 w-full h-8 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                                </div>
                                <div className="absolute top-8 inset-0 flex">
                                    <div className="w-16 md:w-48 border-r border-white/10 p-4 space-y-4">
                                        <div className="h-4 w-20 bg-white/10 rounded mb-6"></div>
                                        <div className="h-3 w-full bg-white/5 rounded"></div>
                                        <div className="h-3 w-3/4 bg-white/5 rounded"></div>
                                        <div className="h-3 w-5/6 bg-white/5 rounded"></div>
                                        <div className="h-3 w-full bg-white/5 rounded"></div>
                                    </div>
                                    <div className="flex-1 p-6 space-y-6 bg-black/20">
                                        <div className="flex justify-between items-center">
                                            <div className="h-6 w-32 bg-white/20 rounded"></div>
                                            <div className="h-8 w-24 bg-tech-cyan/20 rounded"></div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="h-32 bg-white/5 rounded border border-white/5 p-4">
                                                <div className="h-4 w-12 bg-white/10 rounded mb-4"></div>
                                                <div className="h-8 w-20 bg-white/20 rounded"></div>
                                            </div>
                                            <div className="h-32 bg-white/5 rounded border border-white/5 p-4">
                                                <div className="h-4 w-12 bg-white/10 rounded mb-4"></div>
                                                <div className="h-8 w-20 bg-tech-cyan/20 rounded"></div>
                                            </div>
                                        </div>
                                        <div className="h-32 bg-white/5 rounded border border-white/5 p-4 flex gap-4 items-end">
                                            <div className="h-12 w-8 bg-white/10 rounded-t"></div>
                                            <div className="h-20 w-8 bg-tech-cyan/30 rounded-t"></div>
                                            <div className="h-16 w-8 bg-white/10 rounded-t"></div>
                                            <div className="h-24 w-8 bg-tech-cyan/50 rounded-t"></div>
                                            <div className="h-10 w-8 bg-white/10 rounded-t"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur px-3 py-1 rounded text-white/50 text-xs border border-white/5">
                                    Dashboard Demo
                                </div>
                            </div>
                            {/* Text */}
                            <div className="space-y-8">
                                <div>
                                    <div className="inline-block px-3 py-1 bg-tech-cyan/10 text-tech-cyan rounded-full text-xs font-bold tracking-wider uppercase mb-4">Case 01</div>
                                    <h3 className="text-2xl font-bold text-white mb-6">管理ダッシュボード・Webシステム</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/5">
                                            <div className="text-red-400 font-bold text-sm pt-1">Before</div>
                                            <div className="text-white/70">
                                                スクラッチ開発の見積もりが<br />
                                                <span className="font-bold text-white">500万円・納期2ヶ月</span> で断念
                                            </div>
                                        </div>
                                        <div className="flex justify-center -my-2 relative z-10">
                                            <div className="bg-tech-navy p-1 rounded-full border border-white/10 text-tech-cyan"><ArrowDown size={16} /></div>
                                        </div>
                                        <div className="flex items-start gap-4 p-4 bg-tech-cyan/10 rounded-xl border border-tech-cyan/30">
                                            <div className="text-tech-cyan font-bold text-sm pt-1">After</div>
                                            <div className="text-white">
                                                最新スタックの活用で<br />
                                                <span className="font-bold text-tech-cyan text-lg">数値可視化まで 3日で実装</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-white/40 font-mono border-t border-white/10 pt-6">
                                    <Database size={14} />
                                    <span>Javascript / Google Cloud</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Case 02 */}
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-12">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Text */}
                            <div className="space-y-8 order-2 lg:order-1">
                                <div>
                                    <div className="inline-block px-3 py-1 bg-tech-cyan/10 text-tech-cyan rounded-full text-xs font-bold tracking-wider uppercase mb-4">Case 02</div>
                                    <h3 className="text-2xl font-bold text-white mb-6">ECサイト・決済基盤の実装</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/5">
                                            <div className="text-red-400 font-bold text-sm pt-1">Before</div>
                                            <div className="text-white/70">
                                                外注見積もり<br />
                                                <span className="font-bold text-white">300万円・納期3ヶ月</span> と言われた
                                            </div>
                                        </div>
                                        <div className="flex justify-center -my-2 relative z-10">
                                            <div className="bg-tech-navy p-1 rounded-full border border-white/10 text-tech-cyan"><ArrowDown size={16} /></div>
                                        </div>
                                        <div className="flex items-start gap-4 p-4 bg-tech-cyan/10 rounded-xl border border-tech-cyan/30">
                                            <div className="text-tech-cyan font-bold text-sm pt-1">After</div>
                                            <div className="text-white">
                                                Shopifyの活用により<br />
                                                <span className="font-bold text-tech-cyan text-lg">制作費 10万円・納期1週間</span> でローンチ
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-white/40 font-mono border-t border-white/10 pt-6">
                                    <Database size={14} />
                                    <span>Commerce Platform / Payment API</span>
                                </div>
                            </div>
                            {/* Visual */}
                            <div className="relative h-[300px] lg:h-[360px] bg-[#0A0F1C] rounded-2xl border border-white/10 overflow-hidden group shadow-2xl order-1 lg:order-2">
                                <div className="absolute top-0 w-full h-8 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                                </div>
                                <div className="absolute top-8 inset-0 overflow-hidden">
                                    <div className="h-12 border-b border-white/10 flex items-center justify-between px-6">
                                        <div className="h-4 w-24 bg-white/20 rounded"></div>
                                        <div className="flex gap-4">
                                            <div className="h-4 w-12 bg-white/5 rounded"></div>
                                            <div className="h-4 w-12 bg-white/5 rounded"></div>
                                            <div className="h-4 w-4 bg-tech-cyan/50 rounded-full"></div>
                                        </div>
                                    </div>
                                    <div className="h-32 bg-gradient-to-r from-tech-cyan/10 to-transparent flex items-center px-6">
                                        <div className="space-y-2">
                                            <div className="h-6 w-48 bg-white/20 rounded"></div>
                                            <div className="h-3 w-32 bg-white/10 rounded"></div>
                                        </div>
                                    </div>
                                    <div className="p-6 grid grid-cols-3 gap-4">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="space-y-2">
                                                <div className="h-24 bg-white/5 rounded-lg border border-white/5"></div>
                                                <div className="h-3 w-20 bg-white/10 rounded"></div>
                                                <div className="h-3 w-12 bg-white/5 rounded"></div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur px-3 py-1 rounded text-white/50 text-xs border border-white/5">
                                    EC Store Demo
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center text-white/40 text-sm mt-12">
                        ※ 上記は一例です。課題に合わせて最適な組み合わせを提案します。
                    </div>

                    <div className="flex justify-center mt-12">
                        <Link href="/flow/reserve" className="inline-flex items-center justify-center px-12 py-5 bg-white/5 text-white rounded-full font-bold text-lg hover:bg-white/10 border border-tech-cyan/30 hover:border-tech-cyan hover:shadow-[0_0_30px_rgba(0,243,255,0.2)] transition-all duration-300 gap-3">
                            無料相談はこちら
                            <MessageSquare size={20} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};
