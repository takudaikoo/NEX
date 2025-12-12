"use client";

import React, { useState, useRef, useEffect } from 'react';
import { GeneratedContent } from '../types';
import { getChatResponse } from '../services/geminiService';
import { Flame, Trophy, Target, X, MessageSquare, Send, Instagram, Youtube, Facebook } from 'lucide-react';
import Link from 'next/link';

interface Props {
    content: GeneratedContent;
}

const PatternImpact: React.FC<Props> = ({ content }) => {
    // Chat State
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [chatInput, setChatInput] = useState('');
    const [messages, setMessages] = useState<{ sender: 'user' | 'ai', text: string }[]>([
        { sender: 'ai', text: "限界を超える準備はできていますか？フォームやトレーニングについて聞いてください。" }
    ]);
    const [isTyping, setIsTyping] = useState(false);
    const chatEndRef = useRef<HTMLDivElement>(null);

    const handleSend = async () => {
        if (!chatInput.trim()) return;
        const userMsg = chatInput;
        setChatInput('');
        setMessages(prev => [...prev, { sender: 'user', text: userMsg }]);
        setIsTyping(true);

        const aiResponse = await getChatResponse(userMsg);

        setIsTyping(false);
        setMessages(prev => [...prev, { sender: 'ai', text: aiResponse }]);
    };

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <div className="min-h-screen bg-impact-white text-impact-black font-sans overflow-x-hidden relative">

            {/* Exit Button */}
            <Link
                href="/"
                className="fixed top-6 right-6 z-[100] group flex items-center gap-2 px-6 py-2 bg-black text-white font-black italic uppercase hover:bg-impact-red hover:scale-105 transition-all transform -skew-x-12 shadow-xl"
            >
                <span>ハブに戻る</span>
                <X size={18} />
            </Link>

            {/* Dynamic Background Shapes */}
            <div className="absolute top-0 right-0 w-[80vw] h-full bg-impact-red transform skew-x-[-20deg] translate-x-1/3 z-0 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[40vw] h-full bg-impact-black transform skew-x-[-20deg] -translate-x-1/2 z-0 opacity-10 pointer-events-none"></div>

            <main className="relative z-10 flex flex-col">

                {/* HERO SECTION */}
                <section className="container mx-auto px-4 md:px-10 py-12 min-h-screen flex flex-col justify-between">
                    <header className="flex justify-between items-center mb-12">
                        <div className="text-3xl font-black italic tracking-tighter">NEX<span className="text-impact-red">SPORT</span></div>
                        <div className="text-sm font-bold uppercase tracking-widest text-impact-red">Body Mechanics</div>
                    </header>

                    <div className="flex flex-col md:flex-row items-center relative">
                        <div className="w-full md:w-3/5 pt-10 z-20">
                            <h1 className="text-7xl md:text-9xl font-black uppercase leading-[0.85] italic tracking-tighter drop-shadow-lg">
                                {content.headline.split(' ').map((word, i) => (
                                    <div key={i} className={`${i % 2 !== 0 ? 'text-white' : 'text-impact-black'} transform ${i % 2 !== 0 ? 'translate-x-10' : ''}`}>
                                        {word}
                                    </div>
                                ))}
                            </h1>
                            <div className="mt-8 bg-impact-black text-white p-6 max-w-lg transform -skew-x-12 border-l-8 border-impact-red shadow-[10px_10px_0px_0px_rgba(0,0,0,0.2)]">
                                <p className="text-xl md:text-2xl font-bold uppercase transform skew-x-12">
                                    {content.subheadline}
                                </p>
                            </div>
                        </div>

                        <div className="w-full md:w-2/5 mt-10 md:mt-0 relative z-10">
                            <div className="relative transform rotate-3 hover:rotate-0 transition-transform duration-500">
                                <img
                                    src="https://picsum.photos/600/800?grayscale"
                                    alt="Athlete"
                                    className="w-full h-[60vh] object-cover border-8 border-white shadow-2xl contrast-125 brightness-90"
                                />
                                <div className="absolute inset-0 bg-impact-red mix-blend-multiply opacity-60"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* PHILOSOPHY SECTION */}
                <section className="bg-impact-black text-white py-24 transform -skew-y-3 origin-left mt-10 mb-20 overflow-hidden">
                    <div className="container mx-auto px-6 transform skew-y-3">
                        <h2 className="text-4xl md:text-6xl font-black italic uppercase text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                            私たちの哲学
                        </h2>
                        <div className="max-w-4xl mx-auto text-center">
                            <p className="text-2xl md:text-4xl font-bold uppercase leading-tight">
                                "{content.mission}"
                            </p>
                            <div className="mt-8 w-24 h-2 bg-impact-red mx-auto"></div>
                        </div>
                    </div>
                </section>

                {/* CONTENT/SERVICES SECTION */}
                <section className="container mx-auto px-6 py-12 mb-20">
                    <h2 className="text-4xl font-black italic uppercase mb-12 flex items-center gap-4">
                        <Target className="text-impact-red w-10 h-10" />
                        トレーニングモジュール
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-4 border-black">
                        {content.services.map((service, idx) => (
                            <div key={idx} className="group border-b-4 md:border-b-0 md:border-r-4 border-black p-8 hover:bg-impact-black hover:text-white transition-colors duration-300 flex flex-col justify-between h-64 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 font-black text-6xl opacity-10 group-hover:opacity-20 transition-opacity">
                                    0{idx + 1}
                                </div>
                                <div className="mb-4">
                                    {idx === 0 ? <Flame className="w-12 h-12 text-impact-red" /> :
                                        idx === 1 ? <Trophy className="w-12 h-12 text-impact-red" /> :
                                            <Target className="w-12 h-12 text-impact-red" />}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black italic uppercase mb-2">{service}</h3>
                                    <p className="font-bold opacity-60 group-hover:opacity-100">
                                        データ駆動型のバイオメカニクス改善。
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* SNS FOOTER */}
                <footer className="bg-impact-red text-white py-16">
                    <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                        <div className="text-4xl font-black italic mb-6 md:mb-0">
                            革命に<span className="text-black">参加せよ</span>
                        </div>
                        <div className="flex gap-4">
                            {[Instagram, Youtube, Facebook].map((Icon, i) => (
                                <a key={i} href="#" className="bg-white text-impact-red p-4 rounded-full hover:bg-black hover:text-white hover:scale-110 transition-all shadow-lg">
                                    <Icon size={24} />
                                </a>
                            ))}
                        </div>
                    </div>
                </footer>

            </main>

            {/* AI CHAT WIDGET */}
            <div className="fixed bottom-10 right-10 z-50 flex flex-col items-end">
                {isChatOpen && (
                    <div className="bg-white border-4 border-black w-80 md:w-96 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] mb-4 animate-float">
                        <div className="bg-black text-white p-3 font-bold flex justify-between items-center">
                            <span className="flex items-center gap-2"><div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div> AIトレーナー</span>
                            <button onClick={() => setIsChatOpen(false)}><X size={16} /></button>
                        </div>
                        <div className="h-64 overflow-y-auto p-4 bg-gray-50 space-y-3">
                            {messages.map((msg, i) => (
                                <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[80%] p-3 font-bold text-sm ${msg.sender === 'user' ? 'bg-impact-red text-white' : 'bg-gray-200 text-black'}`}>
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            {isTyping && <div className="text-xs text-gray-400 italic">AIが分析中...</div>}
                            <div ref={chatEndRef} />
                        </div>
                        <div className="p-3 border-t-2 border-black bg-white flex gap-2">
                            <input
                                type="text"
                                value={chatInput}
                                onChange={(e) => setChatInput(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                placeholder="トレーニングについて質問..."
                                className="flex-1 bg-gray-100 p-2 font-bold outline-none border-2 border-transparent focus:border-impact-red"
                            />
                            <button onClick={handleSend} className="bg-black text-white p-2 hover:bg-impact-red transition-colors">
                                <Send size={20} />
                            </button>
                        </div>
                    </div>
                )}

                <button
                    onClick={() => setIsChatOpen(!isChatOpen)}
                    className="bg-impact-black text-white p-4 rounded-full shadow-2xl hover:bg-impact-red transition-colors group relative"
                >
                    <MessageSquare size={32} />
                    {!isChatOpen && (
                        <span className="absolute -top-2 -right-2 w-4 h-4 bg-impact-red rounded-full animate-ping"></span>
                    )}
                </button>
            </div>
        </div>
    );
};

export default PatternImpact;
