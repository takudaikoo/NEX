import React from 'react';
import CyberThreeBackground from '@/components/cyber/CyberThreeBackground';
import { CheckCircle } from 'lucide-react';

export default function SuccessPage() {
    return (
        <div className="relative min-h-screen bg-cyber-midnight text-white selection:bg-cyber-vermilion selection:text-white flex items-center justify-center">
            {/* Background */}
            <CyberThreeBackground />

            <main className="relative z-10 container mx-auto px-6">
                <div className="max-w-2xl mx-auto p-12 bg-white/5 border border-white/10 rounded-3xl text-center backdrop-blur-md">
                    <div className="flex justify-center mb-6">
                        <CheckCircle className="w-20 h-20 text-tech-cyan" />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">決済・お申し込み完了</h1>
                    <p className="text-white/70 mb-8 leading-relaxed">
                        オンライン動作解析にお申し込みいただき、誠にありがとうございます。<br />
                        決済が正常に完了いたしました。
                    </p>
                    <div className="p-6 bg-white/5 rounded-xl border border-white/10 text-left mb-10">
                        <h3 className="text-tech-cyan font-bold mb-4 text-center">今後の流れ</h3>
                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-tech-cyan/20 text-tech-cyan flex items-center justify-center font-bold">1</span>
                                <div>
                                    <h4 className="font-bold text-white">確認メールの受信</h4>
                                    <p className="text-sm text-white/60">ご登録のアドレスへ確認メールをお送りしました。</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-tech-cyan/20 text-tech-cyan flex items-center justify-center font-bold">2</span>
                                <div>
                                    <h4 className="font-bold text-white">日程調整</h4>
                                    <p className="text-sm text-white/60">担当者より、解析日時の調整連絡を差し上げます。</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-tech-cyan/20 text-tech-cyan flex items-center justify-center font-bold">3</span>
                                <div>
                                    <h4 className="font-bold text-white">動画の準備</h4>
                                    <p className="text-sm text-white/60">解析当日までに、指定の方法で動画をご準備ください。</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <a href="/cyber" className="inline-block px-10 py-3 bg-tech-cyan text-black font-bold hover:bg-tech-cyan/90 transition-colors rounded-full">
                        トップページへ戻る
                    </a>
                </div>
            </main>
        </div>
    );
}
