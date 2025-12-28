import type { Metadata } from "next";
import { Montserrat, Noto_Sans_JP, Noto_Serif_JP } from "next/font/google"; // Import fonts
import "./globals.css";

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat",
    weight: ["300", "400", "500", "600", "700"], // Weights needed
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

export const metadata: Metadata = {
    title: "NXS | 人・技術・身体をつなぎ、実装する",
    description: "NXS（NEXUS）は、AI・テクノロジー・身体知を横断し、「使える」「変わる」「結果が出る」状態まで落とし込む実装カンパニーです。",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${montserrat.variable} ${notoSansJP.variable} ${notoSerifJP.variable}`}>
            <body>
                {children}
            </body>
        </html>
    );
}
// Force rebuild timestamp: 2025-12-20T02:05:00
