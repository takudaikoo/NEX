"use client";

import React from 'react';
import Link from 'next/link';
import { Quote, MessageSquare, ChevronDown, Check } from 'lucide-react';

export const SocialProofSection = () => (
    <section className="py-24 px-6 bg-white/5 border-y border-white/10">
        <div className="container mx-auto max-w-5xl text-center">
            <h2 className="text-3xl font-bold mb-12 font-noto-sans">実績・お客様の声</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white text-tech-navy p-8 rounded-2xl shadow-xl relative">
                    <Quote className="absolute top-4 left-4 text-tech-cyan/20 scale-y-[-1]" size={40} />
                    <p className="text-xl font-bold mb-6 pt-6">「魔法を見ているようだった」</p>
                    <div className="flex items-center justify-end gap-3 opacity-70">
                        <div className="text-right text-sm">
                            <div className="font-bold">D2Cブランド マネージャー</div>
                        </div>
                    </div>
                </div>
                <div className="bg-white text-tech-navy p-8 rounded-2xl shadow-xl relative">
                    <Quote className="absolute top-4 left-4 text-tech-cyan/20 scale-y-[-1]" size={40} />
                    <p className="text-xl font-bold mb-6 pt-6">「1000万の見積もりが30万で実現した」</p>
                    <div className="flex items-center justify-end gap-3 opacity-70">
                        <div className="text-right text-sm">
                            <div className="font-bold">コンサルティング会社 代表</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export const StorySection = () => (
    <section className="py-32 px-6 bg-[#333] relative overflow-hidden">
        <div className="container mx-auto max-w-3xl text-center relative z-10">
            <h2 className="text-3xl font-noto-serif mb-12 text-white">私がコードを書くことをやめた理由。</h2>
            <div className="space-y-8 font-noto-serif text-lg leading-loose text-white/90">
                <p>
                    かつて私も、深夜まで画面にかじりつき、ゼロからプログラムを組んでいました。<br />
                    しかし、ある日気づいたのです。
                </p>
                <p>
                    お客様が本当に求めているのは、「美しいコード」でも「多機能なシステム」でもない。<br />
                    <span className="text-2xl border-b border-white/30 inline-block pb-2">「本来やるべきことに集中するための、時間」</span>だと。
                </p>
                <p>
                    新しい事業を構想する時間。家族と笑って過ごす時間。あるいは、何もしない贅沢な時間。<br />
                    システム開発に数ヶ月かけ、その間、あなたの貴重な時間を奪うのは本末転倒です。
                </p>
                <p>
                    世界中の優れたツールを組み合わせれば、開発期間は1/10になります。<br />
                    その浮いた時間で、あなたはもっと大きな価値を生み出せる。
                </p>
                <p className="font-bold text-xl pt-4">
                    システムは、私が最速で整えます。<br />
                    あなたは、あなたにしかできない「攻めの仕事」に没頭してください。
                </p>
            </div>
        </div>
    </section>
);

export const AuthoritySection = () => (
    <section className="py-12 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto text-center opacity-50 grayscale hover:grayscale-0 transition-all">
            <div className="flex flex-wrap justify-center gap-12 items-center text-4xl font-bold text-gray-400">
                {/* Text placeholders for logos as per instruction to use simple implementation first */}
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

export const FlowSimulationSection = () => (
    <section className="py-24 px-6 bg-tech-navy">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-center text-3xl font-bold mb-16 font-noto-sans text-white">開発フロー</h2>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 relative">
                {/* Connector Line */}
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

export const FooterCTA = () => (
    <footer className="relative py-32 px-6 overflow-hidden">
        {/* Reuse simple background effect or just gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-tech-cyan/10 to-tech-navy pointer-events-none"></div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
            <div className="inline-block px-4 py-1 border border-white/30 rounded-full mb-8 text-sm tracking-widest uppercase">Last Message</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-white">
                テクノロジーの進化は待ってくれません。<br />
                半年後ではなく、<span className="text-tech-cyan">来週</span>、<br className="md:hidden" />
                あなたのビジネスを進化させましょう。
            </h2>

            <Link href="/flow/consultation" className="px-12 py-6 bg-tech-cyan text-tech-navy rounded-full font-bold text-xl hover:bg-white hover:scale-105 hover:shadow-[0_0_50px_rgba(0,243,255,0.6)] transition-all duration-300 flex items-center justify-center gap-3 mx-auto shadow-[0_0_20px_rgba(0,243,255,0.3)] w-fit">
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
