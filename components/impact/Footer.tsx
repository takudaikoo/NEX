"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import ImpactThreeBackground from './ImpactThreeBackground';

const Footer: React.FC = () => {
    return (
        <footer className="relative bg-black pt-32 pb-12 px-6 overflow-hidden">
            {/* Reuse 3D Background just for footer area? Or simple gradient. 
                 Let's stick to simple to not overhead. Or re-instantiate particles. */}

            <div className="container mx-auto max-w-4xl text-center relative z-10">
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-8 leading-relaxed">
                    追伸：今のフォームで走り続けて、<br />
                    1年後に怪我をしているか。<br /><br />
                    今日60分を使って、<br />
                    <span className="text-tech-cyan">「正しい地図」</span>を手に入れるか。
                </h2>
                <p className="text-white/60 mb-12">リスクのない選択をしてください。</p>

                <div className="flex flex-col items-center gap-4 mb-24">
                    <button className="group relative px-12 py-5 bg-tech-cyan text-black font-bold text-xl tracking-widest uppercase overflow-hidden transition-all hover:bg-white hover:scale-105 shadow-[0_0_50px_rgba(0,243,255,0.4)]">
                        <div className="absolute inset-0 bg-white/40 translate-y-full group-hover:translate-y-0 transition-transform duration-300 transform skew-y-12"></div>
                        <span className="relative z-10 flex items-center gap-3">
                            初回動作解析を予約する
                            <ArrowRight size={20} />
                        </span>
                    </button>
                    <p className="text-sm text-white/40 font-mono">¥8,000 / オンライン</p>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/30">
                    <div>© Sports Mechanics Lab. All Rights Reserved.</div>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-white">特定商取引法に基づく表記</Link>
                        <Link href="#" className="hover:text-white">プライバシーポリシー</Link>
                    </div>
                </div>
            </div>

            {/* Background Gradient for footer */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-tech-cyan/5 to-transparent pointer-events-none"></div>
        </footer>
    );
};

export default Footer;
