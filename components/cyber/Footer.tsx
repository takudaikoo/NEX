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
                    /* Content removed as per request */
                    null
                )}

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
                    <div className="font-mono">© 2025 NXS. All Rights Reserved.</div>
                    <div className="flex gap-6">
                        <Link href="/" className="hover:text-cyber-green transition-colors">運営会社</Link>
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
