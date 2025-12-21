import { FlowLegalFooter } from '@/components/flow/RemainingSections';

export const metadata = {
    title: 'プライバシーポリシー | TechCurator',
    description: 'プライバシーポリシー',
};

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-tech-navy text-white font-noto-sans selection:bg-tech-cyan selection:text-tech-navy pb-20">
            <header className="py-8 px-6 border-b border-white/10 mb-12">
                <div className="container mx-auto">
                    <h1 className="text-2xl font-montserrat font-bold tracking-wide text-white">
                        Tech<span className="text-tech-cyan">Curator</span>
                    </h1>
                </div>
            </header>

            <main className="container mx-auto px-6 max-w-4xl">
                <h1 className="text-3xl md:text-4xl font-bold mb-12 text-white">プライバシーポリシー</h1>

                <div className="space-y-12 text-white/90 leading-relaxed">
                    <section>
                        <h2 className="text-xl font-bold text-tech-cyan mb-4 border-b border-white/10 pb-2">1. 個人情報の定義</h2>
                        <p>「個人情報」とは、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日その他の記述等により特定の個人を識別することができるもの、及び他の情報と容易に照合することができ、それにより特定の個人を識別することができることとなるものをいいます。</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-tech-cyan mb-4 border-b border-white/10 pb-2">2. 個人情報の収集</h2>
                        <p className="mb-4">当サービスでは、お問合せをされた際にお客様の個人情報を収集することがございます。収集するにあたっては利用目的を明記の上、適法かつ公正な手段によります。</p>
                        <p>収集する個人情報は以下の通りです。</p>
                        <ul className="list-disc list-inside ml-4 mt-2 text-white/70">
                            <li>お名前、会社名</li>
                            <li>メールアドレス</li>
                            <li>電話番号</li>
                            <li>お問合せ履歴</li>
                            <li>その他、サービス提供に必要な情報</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-tech-cyan mb-4 border-b border-white/10 pb-2">3. 個人情報の利用</h2>
                        <p className="mb-4">当サービスでは、お客様からお預かりした個人情報を以下の目的で利用いたします。</p>
                        <ul className="list-disc list-inside ml-4 mt-2 text-white/70">
                            <li>お問合せの確認・回答のため</li>
                            <li>サービスの提供・向上のため</li>
                            <li>重要なお知らせなどのご案内のため</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-tech-cyan mb-4 border-b border-white/10 pb-2">4. 個人情報の第三者への提供</h2>
                        <p>当サービスでは、下記の場合を除いてはお客様の断りなく第三者に個人情報を開示・提供することはいたしません。</p>
                        <ul className="list-disc list-inside ml-4 mt-2 text-white/70">
                            <li>法令に基づく場合、及び国の機関若しくは地方公共団体又はその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合</li>
                            <li>人の生命、身体又は財産の保護のために必要がある場合であって、本人の同意を得ることが困難である場合</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-tech-cyan mb-4 border-b border-white/10 pb-2">5. 個人情報の安全管理</h2>
                        <p>お客様よりお預かりした個人情報の安全管理はサービス提供会社によって合理的、組織的、物理的、人的、技術的施策を講じるとともに、当サービスでは関連法令に準じた適切な取扱いを行うことで個人データへの不正な侵入、個人情報の紛失、改ざん、漏えい等の危険防止に努めます。</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-tech-cyan mb-4 border-b border-white/10 pb-2">6. プライバシーポリシーの変更</h2>
                        <p>当サービスでは、収集する個人情報の変更、利用目的の変更、またはその他プライバシーポリシーの変更を行う際は、当ページへの変更をもって公表とさせていただきます。</p>
                    </section>
                </div>

                <div className="mt-12">
                    <a href="/flow" className="text-tech-cyan hover:underline font-bold">
                        ← トップページへ戻る
                    </a>
                </div>
            </main>
            <FlowLegalFooter activePage="privacy" />
        </div>
    );
}
