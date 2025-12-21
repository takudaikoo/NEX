import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#0B1026] text-white pt-24 pb-8 border-t border-white/5 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-cyber-vermilion/5 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto max-w-4xl px-6 relative z-10 text-center">

                {/* Last Push */}
                <div className="mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold font-noto-sans mb-8">
                        今の行動が、<br />
                        半年後のあなたを救います。
                    </h2>
                    <p className="text-lg text-white/60 mb-12">
                        変わるなら、今、ここから。<br />
                        私の体が一つしかないため、毎月の受付人数には限りがあります。
                    </p>

                    <button className="group relative w-full md:w-auto px-12 py-5 bg-cyber-vermilion text-white font-bold text-xl rounded-full shadow-[0_10px_40px_rgba(227,66,52,0.4)] overflow-hidden transition-all hover:scale-105 hover:shadow-[0_20px_60px_rgba(227,66,52,0.6)]">
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        <span className="relative z-10 flex items-center justify-center gap-3">
                            体験ハンズオン（30分）に申し込む
                            <ArrowRight size={24} />
                        </span>
                    </button>
                    <p className="mt-6 text-sm text-cyber-gold animate-pulse">
                        ※今月の残り枠数：あと<span className="font-bold text-xl mx-1">3</span>名
                    </p>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
                    <div className="font-mono">© 2024 NEX AI Solutions.</div>
                    <div className="flex gap-6">
                        <Link href="/legal/tokusho-ho" className="hover:text-white transition-colors">特定商取引法に基づく表記</Link>
                        <a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
