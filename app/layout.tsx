import type { Metadata } from "next";
import { Montserrat, Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat",
    weight: ["300", "400", "500", "600", "700"],
});

const notoSansJP = Noto_Sans_JP({
    subsets: ["latin"],
    variable: "--font-noto-sans-jp",
    weight: ["300", "400", "500", "700"],
});

const notoSerifJP = Noto_Serif_JP({
    subsets: ["latin"],
    variable: "--font-noto-serif-jp",
    weight: ["400", "700"],
});

const siteTitle = "NXS | 人・技術・身体をつなぎ、実装する";
const siteDescription = "NXS（NEXUS）は、AI・テクノロジー・身体知を横断し、「使える」「変わる」「結果が出る」状態まで落とし込む実装カンパニーです。";

export const metadata: Metadata = {
    title: siteTitle,
    description: siteDescription,
    openGraph: {
        title: siteTitle,
        description: siteDescription,
        siteName: "NXS",
        locale: "ja_JP",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: siteTitle,
        description: siteDescription,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja" className={`${montserrat.variable} ${notoSansJP.variable} ${notoSerifJP.variable}`}>
            <body>
                {children}
            </body>
        </html>
    );
}
