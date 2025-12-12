import React from 'react';
import { PatternType } from '../types';
import { Monitor, Zap, Droplets, ArrowRight, ChevronRight } from 'lucide-react';

interface Props {
    onSelect: (pattern: PatternType) => void;
}

const Gateway: React.FC<Props> = ({ onSelect }) => {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col md:flex-row overflow-hidden relative font-sans">
            <div className="absolute top-0 left-0 w-full p-6 z-50 flex justify-between items-center pointer-events-none">
                <div className="text-xl font-bold tracking-widest pointer-events-auto">NEX<span className="text-gray-500">SPORT</span></div>
                <div className="text-xs text-gray-500 hidden md:block">SELECT INTERFACE PROTOCOL</div>
            </div>

            {/* AI Solutions Option (Cyber) */}
            <div 
                onClick={() => onSelect(PatternType.CYBER)}
                className="group relative flex-1 border-b md:border-b-0 md:border-r border-gray-800 cursor-pointer transition-all duration-500 hover:flex-[1.5] flex items-center justify-center overflow-hidden"
            >
                <div className="absolute inset-0 bg-cyber-black opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-[linear-gradient(transparent_2px,#00ff41_2px)] bg-[length:100%_4px]"></div>
                
                <div className="relative z-10 flex flex-col items-center gap-4 transition-transform duration-300 group-hover:scale-110">
                    <div className="p-4 rounded-full border border-gray-700 group-hover:border-cyber-green group-hover:bg-cyber-green/10 text-gray-400 group-hover:text-cyber-green transition-all">
                        <Monitor size={32} />
                    </div>
                    <h2 className="text-2xl font-mono tracking-widest text-gray-400 group-hover:text-cyber-green transition-colors text-center">AI Solutions</h2>
                    <p className="text-xs text-gray-500 font-mono transition-all transform md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 opacity-100 translate-y-0 text-center">
                        AI技術コンサルタント
                    </p>
                </div>
            </div>

            {/* Body Mechanics Option (Impact) */}
            <div 
                onClick={() => onSelect(PatternType.IMPACT)}
                className="group relative flex-1 border-b md:border-b-0 md:border-r border-gray-800 cursor-pointer transition-all duration-500 hover:flex-[1.5] flex items-center justify-center overflow-hidden bg-black"
            >
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-impact-red transform skew-x-12 translate-x-full group-hover:translate-x-1/2 transition-transform duration-700 opacity-20"></div>
                
                <div className="relative z-10 flex flex-col items-center gap-4 transition-transform duration-300 group-hover:scale-110">
                    <div className="p-4 rounded-none border-2 border-gray-700 group-hover:border-impact-red group-hover:bg-impact-red group-hover:text-white text-gray-400 transition-all transform -skew-x-12">
                        <Zap size={32} className="transform skew-x-12" />
                    </div>
                    <h2 className="text-3xl font-black italic tracking-tighter text-gray-400 group-hover:text-black transition-colors text-center">Body Mechanics</h2>
                    <p className="text-xs font-bold uppercase tracking-widest text-impact-red transition-all transform md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 opacity-100 translate-y-0 text-center">
                        スポーツバイオメカニクス改善
                    </p>
                </div>
            </div>

            {/* Dev Management Option (Flow) */}
            <div 
                onClick={() => onSelect(PatternType.FLOW)}
                className="group relative flex-1 cursor-pointer transition-all duration-500 hover:flex-[1.5] flex items-center justify-center overflow-hidden"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-flow-deep to-flow-purple opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute w-[300px] h-[300px] bg-blue-500 rounded-full blur-[80px] opacity-0 group-hover:opacity-30 animate-pulse"></div>
                
                <div className="relative z-10 flex flex-col items-center gap-4 transition-transform duration-300 group-hover:scale-110">
                    <div className="p-4 rounded-2xl border border-gray-700 group-hover:border-white/20 group-hover:bg-white/10 group-hover:backdrop-blur-md text-gray-400 group-hover:text-white transition-all">
                        <Droplets size={32} />
                    </div>
                    <h2 className="text-2xl font-sans font-light tracking-wide text-gray-400 group-hover:text-white transition-colors text-center">Dev Management</h2>
                    <p className="text-xs text-blue-200 font-light tracking-widest transition-all transform md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 opacity-100 translate-y-0 text-center">
                        Web構築から開発のサポート
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Gateway;