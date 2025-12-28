import React from 'react';
import Link from 'next/link';
import BrandFooter from '@/components/brand/BrandFooter';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
    title: 'プライバシーポリシー | NXS',
    description: 'NXSのプライバシーポリシー（個人情報保護方針）について',
};

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-black text-white font-noto-sans selection:bg-tech-cyan selection:text-black flex flex-col">
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
                <h1 className="text-3xl md:text-4xl font-bold mb-16 tracking-wide border-l-4 border-tech-cyan pl-6">プライバシーポリシー</h1>

                <div className="space-y-12 text-white/80 leading-relaxed">
                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">1. 個人情報の定義</h2>
                        <p>
                            本プライバシーポリシーにおいて、個人情報とは、個人情報保護法第2条第1項により定義された個人情報、すなわち、生存する個人に関する情報であって、
                            当該情報に含まれる氏名、生年月日その他の記述等により特定の個人を識別することができるもの（他の情報と容易に照合することができ、
                            それにより特定の個人を識別することができることとなるものを含みます。）を意味するものとします。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">2. 個人情報の利用目的</h2>
                        <p className="mb-4">当社は、お客様の個人情報を以下の目的で利用いたします。</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>当社サービス（Flow, Cyber, Impact等）の提供および案内</li>
                            <li>サービスに関するお問い合わせ等への対応</li>
                            <li>サービスに関する規約等の変更などの通知</li>
                            <li>当社サービスの改善、新サービスの開発等に役立てるため</li>
                            <li>個人を識別できない形式に加工した統計データの作成</li>
                            <li>その他、上記利用目的に付随する目的のため</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">3. 個人情報の第三者提供</h2>
                        <p>
                            当社は、個人情報保護法その他の法令に基づき開示が認められる場合を除くほか、あらかじめお客様の同意を得ないで、
                            個人情報を第三者に提供しません。ただし、次に掲げる場合は上記に定める第三者への提供には該当しません。
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li>当社が利用目的の達成に必要な範囲内において個人情報の取扱いの全部または一部を委託する場合</li>
                            <li>合併その他の事由による事業の承継に伴って個人情報が提供される場合</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">4. 安全管理措置</h2>
                        <p>
                            当社は、取り扱う個人情報の漏洩、滅失またはき損の防止その他の個人情報の安全管理のために必要かつ適切な措置を講じます。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">5. お問い合わせ窓口</h2>
                        <p>
                            当社の個人情報の取扱いに関するご意見、ご質問、苦情のお申出その他利用者情報の取扱いに関するお問い合わせは、
                            下記までお願いいたします。
                        </p>
                        <div className="mt-4 p-6 bg-white/5 rounded-xl border border-white/10">
                            <p className="font-bold mb-2">株式会社NXS 個人情報問合せ窓口</p>
                            <p>E-mail: takudai.koo@gmail.com</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">6. プライバシーポリシーの変更</h2>
                        <p>
                            当社は、ユーザーの情報の取扱いに関する運用状況を適宜見直し、継続的な改善に努めるものとし、必要に応じて、本ポリシーを変更することがあります。
                        </p>
                    </section>
                </div>
            </main>

            <BrandFooter />
        </div>
    );
}
