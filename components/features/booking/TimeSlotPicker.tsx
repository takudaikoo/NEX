"use client";

import React from 'react';

interface TimeSlotPickerProps {
    slots: Date[];
    selectedSlot: Date | null;
    onSelectSlot: (slot: Date) => void;
    isLoading?: boolean;
    theme?: 'impact' | 'cyber' | 'flow';
}

export const TimeSlotPicker: React.FC<TimeSlotPickerProps> = ({ slots, selectedSlot, onSelectSlot, isLoading, theme = 'impact' }) => {

    const styles = {
        impact: {
            loading: 'bg-gray-100 text-gray-400',
            selected: 'bg-impact-red text-white border-impact-red shadow-md transform scale-105',
            default: 'bg-white border-gray-200 text-gray-700 hover:border-impact-red hover:text-impact-red'
        },
        cyber: {
            loading: 'bg-white/5 text-gray-500',
            selected: 'bg-cyber-green text-black border-cyber-green shadow-[0_0_10px_#00ff41] transform scale-105',
            default: 'bg-black/50 border-white/20 text-white hover:border-cyber-green hover:text-cyber-green hover:bg-white/5'
        },
        flow: {
            loading: 'bg-white/5 text-gray-500',
            selected: 'bg-tech-cyan text-tech-navy border-tech-cyan shadow-[0_0_10px_#00f0ff] transform scale-105',
            default: 'bg-tech-navy/50 border-white/20 text-white hover:border-tech-cyan hover:text-tech-cyan hover:bg-white/5'
        }
    };

    const s = styles[theme];

    if (isLoading) {
        return (
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 animate-pulse">
                {[1, 2, 3, 4, 5, 6].map(i => (
                    <div key={i} className={`h-12 rounded-lg ${s.loading}`}></div>
                ))}
            </div>
        );
    }

    if (slots.length === 0) {
        return <div className={`text-center py-6 ${theme === 'impact' ? 'text-gray-500' : 'text-gray-400'}`}>予約可能な枠がありません</div>;
    }

    return (
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
            {slots.map((slot, index) => (
                <button
                    key={index}
                    onClick={() => onSelectSlot(slot)}
                    className={`py-2 px-1 rounded-lg border text-sm font-medium transition-all duration-200
                        ${selectedSlot?.getTime() === slot.getTime()
                            ? s.selected
                            : s.default
                        }
                    `}
                >
                    {slot.toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit' })}
                </button>
            ))}
        </div>
    );
};
