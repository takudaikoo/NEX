"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Mail } from 'lucide-react';

interface FooterProps {
    isApplicationPage?: boolean;
    variant?: 'default' | 'simple';
    activePage?: 'tokusho-ho' | 'privacy';
}

const Footer: React.FC<FooterProps> = ({ isApplicationPage = false, variant = 'default', activePage }) => {
    return (
        <footer className="bg-cyber-black text-white pt-24 pb-8 border-t border-white/5 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-cyber-green/5 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto max-w-4xl px-6 relative z-10 text-center">

                {/* Last Push - Hidden in Simple variant */}
                {variant !== 'simple' && (
                    <div className="mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold font-noto-sans mb-8">
                            今の行動が、<br />
                            半年後のあなたを救います。
                        </h2>
                        <p className="text-lg text-white/60 mb-12">
                            変わるなら、今、ここから。<br />
                            私の体が一つしかないため、毎月の受付人数には限りがあります。
                        </p>

                        {isApplicationPage ? (
                            <a href={`mailto:takudai.koo@gmail.com?subject=30分ハンズオンサポートについて相談&body=${encodeURIComponent(`（以下をご記入の上、送信してください）

お名前：
貴社名：
ご役職：

ご相談内容：
（例：自社の△△業務を動作解析で効率化できるか知りたい、等）`)}`} className="group relative inline-flex items-center justify-center w-full md:w-auto px-12 py-5 bg-cyber-dark border border-cyber-green text-white font-bold text-xl rounded-full shadow-[0_10px_40px_rgba(0,255,65,0.1)] overflow-hidden transition-all hover:scale-105 hover:bg-cyber-green hover:text-black">
                                <span className="relative z-10 flex items-center justify-center gap-3">
                                    メールで相談する
                                    <Mail size={24} />
                                </span>
                            </a>
                        ) : (
                            <Link href="/cyber/application" className="group relative inline-flex items-center justify-center w-full md:w-auto px-12 py-5 bg-cyber-green text-black font-bold text-xl rounded-full shadow-[0_10px_40px_rgba(0,255,65,0.4)] overflow-hidden transition-all hover:scale-105 hover:shadow-[0_20px_60px_rgba(0,255,65,0.6)]">
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                                <span className="relative z-10 flex items-center justify-center gap-3">
                                    体験ハンズオン（30分）に申し込む
                                    <ArrowRight size={24} />
                                </span>
                            </Link>
                        )}
                        <p className="mt-6 text-sm text-cyber-gold animate-pulse">
                            ※今月の残り枠数：あと<span className="font-bold text-xl mx-1">3</span>名
                        </p>
                    </div>
                )}

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
                    <div className="font-mono">© 2025 NXS. All Rights Reserved.</div>
                    <div className="flex gap-6">
                        {activePage !== 'tokusho-ho' && (
                            <Link href="/cyber/legal/tokusho-ho" className="hover:text-cyber-green transition-colors">特定商取引法に基づく表記</Link>
                        )}
                        {activePage !== 'privacy' && (
                            <Link href="/cyber/legal/privacy" className="hover:text-cyber-green transition-colors">プライバシーポリシー</Link>
                        )}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
