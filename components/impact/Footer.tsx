"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import ImpactThreeBackground from './ImpactThreeBackground';

interface FooterProps {
    variant?: 'default' | 'application' | 'simple';
    activePage?: 'tokusho-ho' | 'privacy';
}

const Footer: React.FC<FooterProps> = ({ variant = 'default', activePage }) => {
    return (
        <footer className="relative bg-white pt-32 pb-12 px-6 overflow-hidden">
            {/* Reuse 3D Background just for footer area? Or simple gradient. 
                 Let's stick to simple to not overhead. Or re-instantiate particles. */}

            <div className="container mx-auto max-w-4xl text-center relative z-10">
                {variant === 'default' ? (
                    <>
                        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 leading-relaxed">
                            追伸：今の身体の使い方が<br />
                            「再現性のある条件なのか」<br />
                            「偶然成立している状態なのか」<br /><br />
                            その違いを整理します。
                        </h2>
                        <p className="text-xl text-gray-900 mb-12 font-medium">
                            判断材料を持った上で、<br />
                            次に進むかどうかを決めてください。
                        </p>

                        <div className="flex flex-col items-center gap-4 mb-24">
                            <Link href="/impact/application" className="group relative px-12 py-5 bg-impact-red text-white font-bold text-xl tracking-widest uppercase overflow-hidden transition-all hover:bg-white hover:text-black hover:scale-105 shadow-[0_0_50px_rgba(255,0,0,0.4)]">
                                <div className="absolute inset-0 bg-white/40 translate-y-full group-hover:translate-y-0 transition-transform duration-300 transform skew-y-12"></div>
                                <span className="relative z-10 flex items-center gap-3">
                                    初回動作解析を予約する
                                    <ArrowRight size={20} />
                                </span>
                            </Link>
                            <p className="text-sm text-gray-400 font-mono">¥8,000 / オンライン</p>
                        </div>
                    </>
                ) : variant === 'application' ? (
                    <>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 leading-relaxed">
                            最新情報は X (Twitter) で発信中
                        </h2>
                        <p className="text-gray-600 mb-12">
                            動作解析の事例や、日々の気付きをつぶやいています。<br />
                            質問などもDMでお気軽にどうぞ。
                        </p>

                        <div className="flex flex-col items-center gap-4 mb-24">
                            <a href="https://twitter.com/takudaikoo" target="_blank" rel="noopener noreferrer" className="group relative px-12 py-5 bg-black text-white font-bold text-xl tracking-widest uppercase overflow-hidden transition-all hover:bg-gray-800 hover:scale-105">
                                <span className="relative z-10 flex items-center gap-3">
                                    Follow on X
                                    <ArrowRight size={20} />
                                </span>
                            </a>
                        </div>
                    </>
                ) : null}

                <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
                    <div>© Sports Mechanics Lab. All Rights Reserved.</div>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="/" className="hover:text-impact-red">運営会社</Link>
                        {activePage !== 'tokusho-ho' && (
                            <Link href="/impact/legal/tokusho-ho" className="hover:text-impact-red">特定商取引法に基づく表記</Link>
                        )}
                        {activePage !== 'privacy' && (
                            <Link href="/impact/legal/privacy" className="hover:text-impact-red">プライバシーポリシー</Link>
                        )}
                    </div>
                </div>
            </div>

            {/* Background Gradient for footer */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-impact-red/5 to-transparent pointer-events-none"></div>
        </footer>
    );
};

export default Footer;
