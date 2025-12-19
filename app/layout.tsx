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
    title: "Tech Curator | XADS",
    description: "Architect, not Mason. Tech Curator Official LP.",
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
