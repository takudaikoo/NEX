
import React from 'react';

export default function BookingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <header className="bg-white border-b border-gray-100 py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 z-50">
                <div className="font-bold text-xl font-noto-sans tracking-tight">
                    NEX <span className="text-gray-400 font-normal">Booking System</span>
                </div>
                {/* Safe exit link */}
                <a href="/" className="text-sm text-gray-500 hover:text-black transition-colors">
                    サイトに戻る
                </a>
            </header>
            <main className="flex-1 py-12 px-4 md:px-8">
                {children}
            </main>
            <footer className="text-center py-8 text-gray-400 text-xs">
                &copy; {new Date().getFullYear()} NEX Inc. All rights reserved.
            </footer>
        </div>
    );
}
