import React from 'react';
import Link from 'next/link';
import BrandFooter from '@/components/brand/BrandFooter';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
    title: '特定商取引法に基づく表記 | NXS',
    description: '特定商取引法に基づく表記',
};

export default function TokushoHoPage() {
    return (
        <div className="min-h-screen bg-tech-navy text-white font-noto-sans selection:bg-tech-cyan selection:text-tech-navy flex flex-col">
            <header className="py-8 px-6 border-b border-white/10">
                <div className="container mx-auto flex justify-between items-center">
                    <Link href="/" className="text-2xl font-bold tracking-widest hover:text-tech-cyan transition-colors">
                        NXS
                    </Link>
                    <Link href="/" className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors">
                        <ArrowLeft size={16} />
                        TOPへ戻る
                    </Link>
                </div>
            </header>

            <main className="flex-grow container mx-auto px-6 py-20 max-w-4xl">
                <h1 className="text-3xl md:text-4xl font-bold mb-16 tracking-wide border-l-4 border-tech-cyan pl-6">特定商取引法に基づく表記</h1>

                <div className="space-y-8">
                    {/* Item */}
                    <div className="border-b border-white/10 pb-8 grid md:grid-cols-[200px_1fr] gap-4">
                        <div className="font-bold text-white/60">販売事業者名</div>
                        <div>株式会社NXS</div>
                    </div>

                    <div className="border-b border-white/10 pb-8 grid md:grid-cols-[200px_1fr] gap-4">
                        <div className="font-bold text-white/60">代表責任者</div>
                        <div>小尾 拓大</div>
                    </div>

                    <div className="border-b border-white/10 pb-8 grid md:grid-cols-[200px_1fr] gap-4">
                        <div className="font-bold text-white/60">所在地</div>
                        <div>東京都荒川区荒川</div>
                    </div>

                    <div className="border-b border-white/10 pb-8 grid md:grid-cols-[200px_1fr] gap-4">
                        <div className="font-bold text-white/60">電話番号</div>
                        <div>
                            090-2031-3841<br />
                            <span className="text-sm text-white/40">※お問い合わせはメールにてお願い致します。</span>
                        </div>
                    </div>

                    <div className="border-b border-white/10 pb-8 grid md:grid-cols-[200px_1fr] gap-4">
                        <div className="font-bold text-white/60">メールアドレス</div>
                        <div>takudai.koo@gmail.com</div>
                    </div>

                    <div className="border-b border-white/10 pb-8 grid md:grid-cols-[200px_1fr] gap-4">
                        <div className="font-bold text-white/60">販売価格</div>
                        <div>各商品ページに記載</div>
                    </div>

                    <div className="border-b border-white/10 pb-8 grid md:grid-cols-[200px_1fr] gap-4">
                        <div className="font-bold text-white/60">商品代金以外の必要料金</div>
                        <div>銀行振込手数料（銀行振込の場合）</div>
                    </div>

                    <div className="border-b border-white/10 pb-8 grid md:grid-cols-[200px_1fr] gap-4">
                        <div className="font-bold text-white/60">お支払い方法</div>
                        <div>クレジットカード決済、銀行振込</div>
                    </div>

                    <div className="border-b border-white/10 pb-8 grid md:grid-cols-[200px_1fr] gap-4">
                        <div className="font-bold text-white/60">お支払い時期</div>
                        <div>
                            クレジットカード：各カード会社の引き落とし日<br />
                            銀行振込：お申し込みから7日以内
                        </div>
                    </div>

                    <div className="border-b border-white/10 pb-8 grid md:grid-cols-[200px_1fr] gap-4">
                        <div className="font-bold text-white/60">商品のお渡し時期</div>
                        <div>
                            決済完了後、直ちに（または日程調整後、サービス提供日）
                        </div>
                    </div>

                    <div className="border-b border-white/10 pb-8 grid md:grid-cols-[200px_1fr] gap-4">
                        <div className="font-bold text-white/60">返品・キャンセルについて</div>
                        <div>
                            商品の性質上、決済完了後のキャンセル・返金はお受けしておりません。<br />
                            ただし、当社の都合によりサービスが提供できない場合はこの限りではありません。
                        </div>
                    </div>
                </div>
            </main>

            <BrandFooter />
        </div>
    );
}
