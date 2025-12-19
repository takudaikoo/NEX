"use client";

import React from 'react';
import { Network, CheckCircle2, X } from 'lucide-react';

const SolutionSection: React.FC = () => {
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
                        {/* We can use CSS animations for lines flowing into center */}
                        <div className="absolute top-1/2 left-1/4 w-1/4 h-[1px] bg-gradient-to-r from-transparent to-tech-cyan animate-pulse"></div>
                        <div className="absolute top-1/4 left-1/2 h-1/4 w-[1px] bg-gradient-to-b from-transparent to-tech-cyan animate-pulse delay-100"></div>
                        <div className="absolute top-1/2 right-1/4 w-1/4 h-[1px] bg-gradient-to-l from-transparent to-tech-cyan animate-pulse delay-75"></div>

                        {/* Floating Icons (Placeholders for Stripe, Notion, etc) */}
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

export default SolutionSection;
