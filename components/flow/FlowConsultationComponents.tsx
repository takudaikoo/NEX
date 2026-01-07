"use client";

import React from 'react';
import Link from 'next/link';
import { Quote, MessageSquare, ChevronDown, Check, ArrowRight } from 'lucide-react';
import Image from 'next/image';

// --- HeroSection ---
export const HeroSection: React.FC = () => {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-tech-navy">
            {/* Background elements would be managed by FlowThreeBackground or similar if present in parent */}

            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 animate-fade-in-down">
                    <span className="w-2 h-2 rounded-full bg-tech-cyan animate-pulse"></span>
                    <span className="text-white/80 text-sm font-medium tracking-wide">Flow - Business Acceleration</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight leading-none animate-fade-in-up font-montserrat">
                    Build Fast.<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">Grow Faster.</span>
                </h1>

                {/* Sub Heading */}
                <p className="text-lg md:text-xl text-white/60 max-w-2xl mb-12 leading-relaxed animate-fade-in-up delay-100 font-light">
                    半年かかる開発を、2週間に。<br />
                    <span className="text-tech-cyan font-normal">Tech Curator</span> が最適なツールを選定・統合し、<br className="md:hidden" />あなたのビジネスを最速で加速させます。
                </p>

                {/* CTA */}
                <div className="flex flex-col md:flex-row gap-6 w-full max-w-lg animate-fade-in-up delay-200">
                    <Link
                        href="/flow/reserve"
                        className="group relative flex-1 bg-tech-cyan text-tech-navy font-bold py-4 px-8 rounded-full overflow-hidden transition-transform hover:scale-105"
                    >
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        <span className="relative flex items-center justify-center gap-2">
                            無料相談を予約
                            <ArrowRight size={18} />
                        </span>
                    </Link>
                    <Link
                        href="#works" // Assuming anchor exists or linking to works section
                        className="flex-1 bg-transparent border border-white/20 text-white font-bold py-4 px-8 rounded-full hover:bg-white/5 transition-colors flex items-center justify-center"
                    >
                        事例を見る
                    </Link>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
                <span className="text-xs text-white tracking-widest uppercase">Scroll</span>
                <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
            </div>
        </section>
    );
};

// --- SocialProofSection ---
export const SocialProofSection = () => (
    <section className="py-24 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-16 font-noto-sans text-center">
                数値で証明する、<br className="md:hidden" />「常識外れ」の成果
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Case 1: Cost Innovation */}
                <div className="bg-tech-navy-light/30 border border-white/10 p-8 rounded-3xl relative overflow-hidden group hover:border-tech-cyan/30 transition-all duration-300">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-tech-cyan/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-tech-cyan/10 transition-all"></div>

                    <div className="flex items-center gap-3 mb-6">
                        <span className="bg-tech-cyan/10 text-tech-cyan text-xs font-bold px-3 py-1 rounded-full border border-tech-cyan/20">COST INNOVATION</span>
                    </div>

                    <h3 className="text-2xl font-bold mb-6 leading-relaxed h-24 flex items-center">
                        「見積もり150万円が、<br />5万円で完結しました」
                    </h3>

                    <div className="flex gap-4 mb-8 border-y border-white/5 py-6">
                        <div className="w-1/2">
                            <div className="text-xs text-white/40 mb-1">COST</div>
                            <div className="text-3xl font-bold text-tech-cyan">5<span className="text-sm font-normal ml-1">万円</span></div>
                        </div>
                        <div className="w-px bg-white/10"></div>
                        <div className="w-1/2">
                            <div className="text-xs text-white/40 mb-1">SPEED</div>
                            <div className="text-3xl font-bold text-tech-cyan">3<span className="text-sm font-normal ml-1">Days</span></div>
                        </div>
                    </div>

                    <p className="text-white/70 leading-loose mb-8 text-sm">
                        他社で150万円かかると言われたシステム開発。<br />
                        私たちはゼロから作ることはせず、既存のSaaSを組み合わせることで、わずか「3日」、費用「5万円」で実装しました。<br />
                        <span className="text-white font-bold">手軽に、決断しやすい価格で。まずは小さく始めて、走りながら育てる。</span><br />
                        それが正解でした。
                    </p>

                    <div className="flex items-center gap-4 opacity-80">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center font-bold text-xs">P</div>
                        <div className="text-sm">
                            <div className="font-bold">パーソナルトレーニングジム</div>
                            <div className="text-white/40 text-xs">オーナー</div>
                        </div>
                    </div>
                </div>

                {/* Case 2: UX Revolution */}
                <div className="bg-tech-navy-light/30 border border-white/10 p-8 rounded-3xl relative overflow-hidden group hover:border-tech-cyan/30 transition-all duration-300">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-purple-500/10 transition-all"></div>

                    <div className="flex items-center gap-3 mb-6">
                        <span className="bg-purple-500/10 text-purple-400 text-xs font-bold px-3 py-1 rounded-full border border-purple-500/20">UX REVOLUTION</span>
                    </div>

                    <h3 className="text-2xl font-bold mb-6 leading-relaxed h-24 flex items-center">
                        「シンプルで簡単だから、<br />長く愛されています」
                    </h3>

                    <div className="flex gap-4 mb-8 border-y border-white/5 py-6">
                        <div className="w-1/2">
                            <div className="text-xs text-white/40 mb-1">MANUAL WORK</div>
                            <div className="text-3xl font-bold text-purple-400">0<span className="text-sm font-normal ml-1">min</span></div>
                        </div>
                        <div className="w-px bg-white/10"></div>
                        <div className="w-1/2">
                            <div className="text-xs text-white/40 mb-1">ERROR RATE</div>
                            <div className="text-3xl font-bold text-purple-400">0<span className="text-sm font-normal ml-1">%</span></div>
                        </div>
                    </div>

                    <p className="text-white/70 leading-loose mb-8 text-sm">
                        「見積・請求・契約・決済」。<br />
                        これら一連の業務フローを完全に自動化しました。<br />
                        多機能すぎるツールは結局使われません。「原点」に立ち返り、本当に必要な機能だけを、直感的に使える形にする。<br />
                        <span className="text-white font-bold">「シンプルであること」が、現場のミスをなくし、愛される理由でした。</span>
                    </p>

                    <div className="flex items-center gap-4 opacity-80">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center font-bold text-xs">M</div>
                        <div className="text-sm">
                            <div className="font-bold">D2Cコスメブランド</div>
                            <div className="text-white/40 text-xs">マネージャー</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// --- StorySection ---
export const StorySection = () => (
    <section className="py-32 px-6 bg-[#111] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

        <div className="container mx-auto max-w-3xl text-center relative z-10">
            <span className="text-tech-cyan text-xs font-bold tracking-[0.2em] mb-6 block">PHILOSOPHY</span>
            <h2 className="text-3xl md:text-4xl font-noto-serif mb-16 text-white leading-relaxed">
                AI時代にこそ、<br />
                「人間らしい」システムを。
            </h2>

            <div className="space-y-12 font-noto-serif text-lg leading-loose text-white/80">
                <div className="space-y-6">
                    <p>
                        実は、私自身もかつては業務が回らず、<br />
                        「何がいま最も必要か？」を理解できていませんでした。
                    </p>
                    <p>
                        便利で格好いいシステムは世に溢れています。<br />
                        「どれを選んでも変わらないのでは？」<br />
                        そう思うのも無理はありません。
                    </p>
                </div>

                <div className="relative py-8">
                    <Quote className="absolute top-0 left-0 text-white/5 w-12 h-12 -translate-x-full" />
                    <p className="text-2xl md:text-3xl text-white font-bold leading-relaxed">
                        お客様が求めているのは、<br />
                        「便利で強固なシステム」ではない。<br />
                        「人間のような柔軟性」だったのです。
                    </p>
                    <Quote className="absolute bottom-0 right-0 text-white/5 w-12 h-12 scale-x-[-1] translate-x-full" />
                </div>

                <div className="space-y-6">
                    <p>
                        だから私たちは、「最高傑作の高価なシステム」を作りません。<br />
                        あなたの業務に寄り添い、状況に合わせて形を変えられる。<br />
                        そんな「生きたシステム」を最速でお届けします。
                    </p>
                    <p>
                        <span className="text-tech-cyan/80 border-b border-tech-cyan/30 pb-1">システム開発にも、人間の思いを込める。</span><br />
                        それが、Tech Curatorの信念です。
                    </p>
                </div>

                <div className="bg-white/5 p-8 rounded-2xl border border-white/5 mx-auto max-w-2xl mt-12 text-base">
                    <p className="mb-4 font-bold text-white">Tech Curatorの約束</p>
                    <p className="text-white/60">
                        私たちは車輪の再発明はしません。<br />
                        世界中にある「最高傑作の車輪（SaaS）」を見つけ出し、<br />
                        あなたのビジネスという車体に、最適に組み込みます。<br />
                        <br />
                        システム構築は、私たちが瞬きする間に終わらせます。<br />
                        あなたは、あなたにしかできない「攻めの仕事」に没頭してください。
                    </p>
                </div>
            </div>
        </div>
    </section>
);

// --- AuthoritySection ---
export const AuthoritySection = () => (
    <section className="py-12 border-y border-white/5 bg-white/[0.02]">
        <div className="container mx-auto text-center opacity-50 grayscale hover:grayscale-0 transition-all">
            <div className="flex flex-wrap justify-center gap-12 items-center text-4xl font-bold text-white/20">
                <span>Shopify</span>
                <span>Stripe</span>
                <span>Notion</span>
                <span>Webflow</span>
                <span>Make</span>
                <span>Bubble</span>
            </div>
        </div>
    </section>
);

// --- FlowSimulationSection ---
export const FlowSimulationSection = () => (
    <section className="py-24 px-6 bg-tech-navy">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-center text-3xl font-bold mb-16 font-noto-sans text-white">開発フロー</h2>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 relative">
                <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-white/10 -z-10 transform -translate-y-1/2"></div>
                <FlowStep number="01" title="Hearing" desc="30分" />
                <FlowStep number="02" title="Curation" desc="設計" />
                <FlowStep number="03" title="Prototype" desc="デモ確認(契約)" highlight />
                <FlowStep number="04" title="Launch" desc="実装" />
            </div>
        </div>
    </section>
);

const FlowStep = ({ number, title, desc, highlight }: { number: string, title: string, desc: string, highlight?: boolean }) => (
    <div className={`bg-tech-navy p-6 rounded-2xl border ${highlight ? 'border-tech-cyan shadow-[0_0_20px_rgba(0,243,255,0.2)]' : 'border-white/10'} text-center w-full md:w-48`}>
        <div className={`text-sm font-mono mb-2 ${highlight ? 'text-tech-cyan' : 'text-white/40'}`}>STEP {number}</div>
        <div className="text-xl font-bold mb-2 text-white">{title}</div>
        <div className="text-white/60 text-sm">{desc}</div>
    </div>
);

// --- FAQSection ---
export const FAQSection = () => (
    <section className="py-24 px-6 bg-tech-navy-light/20">
        <div className="container mx-auto max-w-3xl">
            <h2 className="text-center text-3xl font-bold mb-16 font-noto-sans text-white">よくある質問</h2>
            <div className="space-y-4">
                <FAQItem q="本当に「ちょっとしたツール」１個だけでも頼めますか？" a="大歓迎です。「スプレッドシートのここを自動化したい」といった小さなご依頼こそ、Tech Curatorの腕の見せ所です。" />
                <FAQItem q="大規模なHPやLP制作も可能ですか？" a="もちろんです。コードを書かない分、デザインや戦略といった「本質」に予算をかけられるため、高品質なサイトが作れます。" />
                <FAQItem q="将来的に機能を追加したくなったら？" a="ブロック遊びのように追加できます。API連携を前提としているため、柔軟に拡張可能です。" />
            </div>
        </div>
    </section>
);

const FAQItem = ({ q, a }: { q: string, a: string }) => (
    <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
        <div className="p-6 font-bold flex items-center justify-between cursor-pointer text-white">
            <span className="flex items-center gap-4"><span className="text-tech-cyan">Q.</span> {q}</span>
            <ChevronDown size={20} className="opacity-50" />
        </div>
        <div className="px-6 pb-6 pt-0 text-white/70 leading-relaxed border-t border-white/5 mt-2">
            <div className="pt-4 flex gap-4">
                <span className="text-tech-green font-bold">A.</span>
                {a}
            </div>
        </div>
    </div>
);

// --- FlowLegalFooter ---
export const FlowLegalFooter = ({ activePage }: { activePage?: 'tokusho-ho' | 'privacy' }) => (
    <footer className="relative py-12 px-6 overflow-hidden bg-tech-navy border-t border-white/10">
        <div className="container mx-auto max-w-4xl text-center relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/20 text-sm">
                <div className="order-2 md:order-1">&copy; 2025 Tech Curator. All rights reserved.</div>
                <div className="flex gap-6 order-1 md:order-2">
                    <Link href="/" className="hover:text-tech-cyan transition-colors">運営会社</Link>
                    {activePage !== 'tokusho-ho' && (
                        <Link href="/flow/legal/tokusho-ho" className="hover:text-tech-cyan transition-colors">特定商取引法に基づく表記</Link>
                    )}
                    {activePage !== 'privacy' && (
                        <Link href="/flow/legal/privacy" className="hover:text-tech-cyan transition-colors">プライバシーポリシー</Link>
                    )}
                </div>
            </div>
        </div>
    </footer>
);

// --- FooterCTA ---
export const FooterCTA = () => (
    <footer className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-tech-cyan/10 to-tech-navy pointer-events-none"></div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
            <div className="inline-block px-4 py-1 border border-white/30 rounded-full mb-8 text-sm tracking-widest uppercase">Last Message</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-white">
                テクノロジーの進化は待ってくれません。<br />
                半年後ではなく、<span className="text-tech-cyan">来週</span>、<br className="md:hidden" />
                あなたのビジネスを進化させましょう。
            </h2>

            <Link href="/flow/reserve" className="px-12 py-6 bg-tech-cyan text-tech-navy rounded-full font-bold text-xl hover:bg-white hover:scale-105 hover:shadow-[0_0_50px_rgba(0,243,255,0.6)] transition-all duration-300 flex items-center justify-center gap-3 mx-auto shadow-[0_0_20px_rgba(0,243,255,0.3)] w-fit">
                無料相談とデモ制作依頼はこちら
                <MessageSquare />
            </Link>

            <div className="mt-20 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/20 text-sm">
                <div className="order-2 md:order-1">&copy; 2025 Tech Curator. All rights reserved.</div>
                <div className="flex gap-6 order-1 md:order-2">
                    <Link href="/" className="hover:text-tech-cyan transition-colors">運営会社</Link>
                    <Link href="/flow/legal/tokusho-ho" className="hover:text-tech-cyan transition-colors">特定商取引法に基づく表記</Link>
                    <Link href="/flow/legal/privacy" className="hover:text-tech-cyan transition-colors">プライバシーポリシー</Link>
                </div>
            </div>
        </div>
    </footer>
);
