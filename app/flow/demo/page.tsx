"use client";

import React from 'react';
import Link from 'next/link';
import { ChevronLeft, Play, ArrowRight, CheckCircle2, Bot, Database, FileSpreadsheet, ArrowDown } from 'lucide-react';

export default function DemoPage() {
    return (
        <div className="min-h-screen bg-tech-navy text-white relative font-noto-sans selection:bg-tech-cyan selection:text-tech-navy">

            {/* Background Effects */}
            <div className="fixed inset-0 top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-tech-navy-light/30 via-tech-navy to-black -z-10 pointer-events-none"></div>

            {/* Header / Nav */}
            <header className="fixed top-0 left-0 w-full p-6 z-50 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
                <Link href="/flow" className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 backdrop-blur-md rounded-full border border-white/10 text-white/80 hover:text-white transition-all pointer-events-auto">
                    <ChevronLeft size={16} />
                    <span className="text-sm">Back to LP</span>
                </Link>
            </header>

            <main className="container mx-auto px-6 pt-32 pb-20 max-w-5xl">

                {/* 1. First View */}
                <div className="text-center mb-16">
                    <div className="inline-block px-3 py-1 bg-tech-cyan/10 text-tech-cyan rounded-full text-xs font-bold tracking-wider uppercase mb-6 border border-tech-cyan/20">
                        Actual Implementation Demo
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                        実際に、こう動きます。
                    </h1>
                    <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
                        Flowで開発した業務プロトタイプの実例をご紹介します。<br />
                        企画・設計ではなく「実装結果」をご覧ください。
                    </p>
                </div>

                {/* Main Demo Video */}
                <div className="w-full aspect-video bg-black rounded-2xl border border-white/10 relative overflow-hidden shadow-2xl mb-24 group">
                    {/* Placeholder for Video */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black">
                        <div className="w-20 h-20 rounded-full bg-tech-cyan/10 border border-tech-cyan/30 flex items-center justify-center mb-4 relative">
                            <div className="absolute inset-0 bg-tech-cyan/20 rounded-full animate-ping"></div>
                            <Play className="fill-tech-cyan text-tech-cyan ml-1 relative z-10" size={32} />
                        </div>
                        <p className="text-white/30 font-mono text-sm">DEMO VIDEO AUTO-PLAY</p>
                        <p className="text-tech-cyan/50 text-xs mt-2">Muted / Loop</p>
                    </div>

                    {/* Video Overlay Text */}
                    <div className="absolute top-6 left-6 bg-black/60 backdrop-blur px-4 py-2 rounded-lg border border-white/10">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                            <span className="text-xs font-bold text-white/90">REC: 業務自動化フロー</span>
                        </div>
                    </div>
                </div>

                {/* 2. Demo Overview */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold border-l-4 border-tech-cyan pl-4">このデモで分かること</h2>
                        <ul className="space-y-4">
                            {[
                                "どんな業務が、どこまで自動化できるのか",
                                "現場でどう使われるのか（UI/UX）",
                                "導入後の業務スピードの変化"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-white/80 bg-white/5 p-4 rounded-xl border border-white/5">
                                    <CheckCircle2 className="text-tech-cyan flex-shrink-0" size={20} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold border-l-4 border-tech-green pl-4">想定業務例</h2>
                        <div className="grid grid-cols-1 gap-4">
                            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5">
                                <div className="p-2 bg-tech-cyan/10 rounded-lg text-tech-cyan"><CheckCircle2 size={20} /></div>
                                <span>ECサイトの短期間立ち上げ</span>
                            </div>
                            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5">
                                <div className="p-2 bg-tech-purple/10 rounded-lg text-purple-400"><FileSpreadsheet size={20} /></div>
                                <span>管理ダッシュボード・Webシステムの構築</span>
                            </div>
                            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5">
                                <div className="p-2 bg-tech-green/10 rounded-lg text-tech-green"><Database size={20} /></div>
                                <span>社内申請・管理業務</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. Before / After */}
                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 mb-24 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-32 bg-tech-cyan/5 rounded-full blur-3xl -z-10"></div>

                    <h2 className="text-2xl font-bold text-center mb-12">導入効果イメージ</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                        {/* Before */}
                        <div className="bg-black/40 p-8 rounded-2xl border border-white/5 text-center relative max-w-sm mx-auto w-full">
                            <div className="text-red-400 font-bold mb-4 uppercase tracking-widest text-sm">Before</div>
                            <h3 className="text-xl font-bold mb-4">手作業・属人化</h3>
                            <ul className="text-sm text-white/60 space-y-2 text-left list-disc list-inside">
                                <li>手入力での転記ミス多発</li>
                                <li>担当者しか分からない手順</li>
                                <li>対応漏れの発生</li>
                            </ul>
                        </div>

                        {/* Arrow */}
                        <div className="flex justify-center text-tech-cyan">
                            <ArrowRight size={40} className="hidden md:block" />
                            <ArrowDown size={40} className="md:hidden" />
                        </div>

                        {/* After */}
                        <div className="bg-tech-cyan/10 p-8 rounded-2xl border border-tech-cyan/30 text-center relative max-w-sm mx-auto w-full shadow-[0_0_30px_rgba(0,243,255,0.1)]">
                            <div className="text-tech-cyan font-bold mb-4 uppercase tracking-widest text-sm">After</div>
                            <h3 className="text-xl font-bold mb-4 text-white">自動化・標準化</h3>
                            <div className="space-y-2">
                                <div className="text-3xl font-bold text-tech-cyan">作業時間 0分</div>
                                <div className="text-sm text-white/80">誰でも同じ品質で対応可能</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 4. Tech Stack */}
                <div className="text-center mb-24">
                    <h3 className="text-white/40 font-mono text-sm mb-6 uppercase tracking-widest">Powered By</h3>
                    <div className="flex flex-wrap justify-center gap-8 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Mock Icons/Names */}
                        <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg">
                            <Bot size={18} />
                            <span className="font-bold">ChatGPT / LLMs</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg">
                            <FileSpreadsheet size={18} />
                            <span className="font-bold">Excel / Spreadsheets</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg">
                            <Database size={18} />
                            <span className="font-bold">No-Code Tools</span>
                        </div>
                    </div>
                    <p className="mt-4 text-xs text-white/30">※技術選定は要件に応じて最適化します</p>
                </div>

                {/* 5. Low-tone CTA */}
                <div className="text-center border-t border-white/10 pt-16">
                    <p className="text-white/60 mb-8">
                        ※ 本デモは一例です。業務内容・要件に応じて設計は異なります。<br />
                        セキュリティ・権限設計を考慮した実装が可能です。
                    </p>

                    <a
                        href="mailto:info@nex-s.jp"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full border border-white/20 transition-all hover:scale-105"
                    >
                        <span>自社業務で実現できるか相談する</span>
                        <ArrowRight size={18} />
                    </a>
                </div>

            </main>
        </div>
    );
}
