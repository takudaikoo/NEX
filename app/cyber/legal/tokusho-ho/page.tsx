import React from 'react';
import Footer from '@/components/cyber/Footer';
import Link from 'next/link';

export const metadata = {
    title: '特定商取引法に基づく表記 | Cyber Analysis',
    description: '特定商取引法に基づく表記',
};

export default function TokushoHoPage() {
    return (
        <div className="min-h-screen bg-cyber-black text-white font-noto-sans selection:bg-cyber-green selection:text-black">
            <header className="py-8 px-6 border-b border-white/5 mb-12">
                <div className="container mx-auto">
                    <h1 className="text-2xl font-montserrat font-bold tracking-wide text-white">
                        AI <span className="text-cyber-green">SOLUTIONS</span>
                    </h1>
                </div>
            </header>

            <main className="container mx-auto px-6 max-w-4xl pb-24">
                <h1 className="text-3xl md:text-4xl font-bold mb-12 text-white border-l-4 border-cyber-green pl-6">特定商取引法に基づく表記</h1>

                <div className="space-y-8">
                    {/* Items */}
                    <div className="border-b border-white/5 pb-8 grid md:grid-cols-[200px_1fr] gap-4 group hover:border-cyber-green/30 transition-colors">
                        <div className="font-bold text-gray-400 group-hover:text-cyber-green transition-colors">販売事業者名</div>
                        <div>株式会社XADS</div>
                    </div>

                    <div className="border-b border-white/5 pb-8 grid md:grid-cols-[200px_1fr] gap-4 group hover:border-cyber-green/30 transition-colors">
                        <div className="font-bold text-gray-400 group-hover:text-cyber-green transition-colors">代表責任者</div>
                        <div>小尾 拓大</div>
                    </div>

                    <div className="border-b border-white/5 pb-8 grid md:grid-cols-[200px_1fr] gap-4 group hover:border-cyber-green/30 transition-colors">
                        <div className="font-bold text-gray-400 group-hover:text-cyber-green transition-colors">所在地</div>
                        <div>東京都荒川区荒川</div>
                    </div>

                    <div className="border-b border-white/5 pb-8 grid md:grid-cols-[200px_1fr] gap-4 group hover:border-cyber-green/30 transition-colors">
                        <div className="font-bold text-gray-400 group-hover:text-cyber-green transition-colors">電話番号</div>
                        <div>
                            090-2031-3841<br />
                            <span className="text-sm text-gray-500">※お問い合わせはメールにてお願い致します。</span>
                        </div>
                    </div>

                    <div className="border-b border-white/5 pb-8 grid md:grid-cols-[200px_1fr] gap-4 group hover:border-cyber-green/30 transition-colors">
                        <div className="font-bold text-gray-400 group-hover:text-cyber-green transition-colors">メールアドレス</div>
                        <div>takudai.koo@gmail.com</div>
                    </div>

                    <div className="border-b border-white/5 pb-8 grid md:grid-cols-[200px_1fr] gap-4 group hover:border-cyber-green/30 transition-colors">
                        <div className="font-bold text-gray-400 group-hover:text-cyber-green transition-colors">販売価格</div>
                        <div>各商品ページに記載</div>
                    </div>

                    <div className="border-b border-white/5 pb-8 grid md:grid-cols-[200px_1fr] gap-4 group hover:border-cyber-green/30 transition-colors">
                        <div className="font-bold text-gray-400 group-hover:text-cyber-green transition-colors">商品代金以外の必要料金</div>
                        <div>銀行振込手数料（銀行振込の場合）</div>
                    </div>

                    <div className="border-b border-white/5 pb-8 grid md:grid-cols-[200px_1fr] gap-4 group hover:border-cyber-green/30 transition-colors">
                        <div className="font-bold text-gray-400 group-hover:text-cyber-green transition-colors">お支払い方法</div>
                        <div>クレジットカード決済、銀行振込</div>
                    </div>

                    <div className="border-b border-white/5 pb-8 grid md:grid-cols-[200px_1fr] gap-4 group hover:border-cyber-green/30 transition-colors">
                        <div className="font-bold text-gray-400 group-hover:text-cyber-green transition-colors">お支払い時期</div>
                        <div>
                            クレジットカード：各カード会社の引き落とし日<br />
                            銀行振込：お申し込みから7日以内
                        </div>
                    </div>

                    <div className="border-b border-white/5 pb-8 grid md:grid-cols-[200px_1fr] gap-4 group hover:border-cyber-green/30 transition-colors">
                        <div className="font-bold text-gray-400 group-hover:text-cyber-green transition-colors">商品のお渡し時期</div>
                        <div>
                            決済完了後、直ちに（または日程調整後、サービス提供日）
                        </div>
                    </div>

                    <div className="border-b border-white/5 pb-8 grid md:grid-cols-[200px_1fr] gap-4 group hover:border-cyber-green/30 transition-colors">
                        <div className="font-bold text-gray-400 group-hover:text-cyber-green transition-colors">返品・キャンセルについて</div>
                        <div>
                            商品の性質上、決済完了後のキャンセル・返金はお受けしておりません。<br />
                            ただし、当社の都合によりサービスが提供できない場合はこの限りではありません。
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <Link href="/cyber" className="inline-flex items-center gap-2 text-cyber-green hover:text-white font-bold transition-colors group">
                        <span className="group-hover:-translate-x-1 transition-transform">←</span>
                        トップページへ戻る
                    </Link>
                </div>
            </main>

            <Footer variant="simple" activePage="tokusho-ho" />
        </div>
    );
}
