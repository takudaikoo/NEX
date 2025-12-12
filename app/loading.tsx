export default function Loading() {
    return (
        <div className="fixed inset-0 z-[90] bg-black flex items-center justify-center">
            <div className="text-center">
                <div className="text-white font-mono text-2xl animate-pulse mb-4">INITIALIZING SYSTEM...</div>
                <div className="w-64 h-1 bg-gray-800 mx-auto rounded overflow-hidden">
                    <div className="h-full bg-white animate-progress"></div>
                </div>
                <style>{`
                    @keyframes progress {
                        0% { width: 0%; }
                        50% { width: 70%; }
                        100% { width: 100%; }
                    }
                    .animate-progress {
                        animation: progress 2s ease-in-out infinite;
                    }
                `}</style>
            </div>
        </div>
    );
}
