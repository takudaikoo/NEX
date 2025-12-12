import React, { useEffect, useState } from 'react';
import { GeneratedContent } from '../types';
import { Terminal, Activity, Cpu, Zap, Radio, Globe, X, Share2, Linkedin, Twitter, Github } from 'lucide-react';

interface Props {
    content: GeneratedContent;
    onBack: () => void;
}

const PatternCyber: React.FC<Props> = ({ content, onBack }) => {
    const [typedHeadline, setTypedHeadline] = useState('');

    useEffect(() => {
        setTypedHeadline('');
        let i = 0;
        const interval = setInterval(() => {
            if (i < content.headline.length) {
                setTypedHeadline(prev => prev + content.headline.charAt(i));
                i++;
            } else {
                clearInterval(interval);
            }
        }, 100);
        return () => clearInterval(interval);
    }, [content.headline]);

    return (
        <div className="min-h-screen bg-cyber-black text-cyber-green font-mono relative overflow-x-hidden selection:bg-cyber-green selection:text-black">
            
            {/* Exit Button */}
            <button 
                onClick={onBack}
                className="fixed top-6 right-6 z-[100] group flex items-center gap-2 px-4 py-2 border border-cyber-green/50 hover:bg-cyber-green hover:text-black transition-all bg-black/80 backdrop-blur-sm"
            >
                <span className="text-xs tracking-widest">[ SYSTEM_EXIT ]</span>
                <X size={14} />
            </button>

            {/* Grid Background */}
            <div className="fixed inset-0 z-0 opacity-20" 
                 style={{ 
                     backgroundImage: 'linear-gradient(rgba(0, 255, 65, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 65, 0.1) 1px, transparent 1px)',
                     backgroundSize: '40px 40px'
                 }}>
            </div>

            {/* Scanline Effect */}
            <div className="fixed inset-0 pointer-events-none z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] animate-pulse"></div>

            <main className="relative z-10 flex flex-col items-center">
                
                {/* HERO SECTION */}
                <section className="min-h-screen flex flex-col justify-center container mx-auto px-6 py-20 relative">
                     {/* HUD Elements */}
                    <div className="absolute top-10 left-6 md:left-10 border border-cyber-green/50 p-2 text-xs">
                        <div className="flex items-center gap-2">
                            <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-cyber-green opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-green"></span>
                            AI_CORE: ONLINE
                        </div>
                        <div>LAT: 35.6762 N</div>
                        <div>LNG: 139.6503 E</div>
                    </div>

                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <div className="inline-block border border-cyber-green px-4 py-1 text-sm tracking-[0.3em] mb-4 bg-cyber-green/10 backdrop-blur-sm">
                            PROTOCOL: AI_SOLUTIONS
                        </div>
                        
                        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase glitch-text break-words" data-text={content.headline}>
                            {typedHeadline}<span className="animate-pulse">_</span>
                        </h1>
                        
                        <p className="text-xl md:text-2xl text-cyber-cyan max-w-2xl mx-auto border-l-2 border-cyber-cyan pl-6 text-left">
                            {`// ${content.subheadline}`}
                        </p>
                    </div>

                     {/* Floating geometric decorative elements */}
                    <div className="absolute bottom-20 right-20 w-32 h-32 border border-cyber-cyan/30 rounded-full animate-spin-slow border-t-transparent border-r-transparent hidden md:block"></div>
                </section>

                {/* PHILOSOPHY SECTION */}
                <section className="w-full bg-cyber-dark border-y border-cyber-green/20 py-20 px-6">
                    <div className="container mx-auto max-w-4xl text-center">
                        <h2 className="text-sm tracking-[0.5em] text-cyber-cyan mb-8 uppercase">:: Core Directive ::</h2>
                        <div className="relative">
                            <Terminal className="absolute -top-6 -left-6 text-cyber-green/20 w-12 h-12" />
                            <p className="text-2xl md:text-4xl font-bold leading-relaxed relative z-10">
                                "{content.mission}"
                            </p>
                            <Terminal className="absolute -bottom-6 -right-6 text-cyber-green/20 w-12 h-12 transform rotate-180" />
                        </div>
                    </div>
                </section>

                {/* CONTENT/SERVICES SECTION */}
                <section className="container mx-auto px-6 py-20">
                     <h2 className="text-sm tracking-[0.5em] text-cyber-cyan mb-12 text-center uppercase">:: System Modules ::</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {content.services.map((service, idx) => (
                            <div key={idx} className="group border border-cyber-green/30 p-6 bg-black/50 hover:bg-cyber-green hover:text-black transition-all duration-300 cursor-pointer relative overflow-hidden">
                                <div className="absolute top-2 right-2 text-xs font-mono opacity-50">V.{idx}.0{idx}</div>
                                <div className="mb-4 text-cyber-cyan group-hover:text-black">
                                    {idx === 0 ? <Activity size={32} /> : idx === 1 ? <Cpu size={32} /> : <Globe size={32} />}
                                </div>
                                <h3 className="text-xl font-bold mb-2 uppercase tracking-wide">{service}</h3>
                                <div className="w-full h-0.5 bg-cyber-green/30 group-hover:bg-black mt-4"></div>
                                <p className="text-xs mt-4 opacity-70 group-hover:opacity-100 font-sans">
                                    Optimized for high-throughput analysis and logical inference.
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* SNS / CONNECT */}
                <section className="w-full border-t border-cyber-green/30 bg-black py-12">
                    <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="text-left">
                            <div className="text-xl font-bold tracking-widest mb-2">NEX<span className="text-cyber-green">SPORT</span></div>
                            <div className="text-xs text-gray-500">EST. 2025 // TOKYO_HQ</div>
                        </div>

                        <div className="flex gap-6">
                            {[Twitter, Github, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="p-3 border border-cyber-green/50 hover:bg-cyber-green hover:text-black transition-colors rounded-none">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>

                        <div className="text-right">
                             <div className="text-xs text-cyber-cyan animate-pulse">ESTABLISH_UPLINK</div>
                             <a href="mailto:contact@nexsport.ai" className="text-lg hover:underline decoration-cyber-green underline-offset-4">contact@nexsport.ai</a>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
};

export default PatternCyber;