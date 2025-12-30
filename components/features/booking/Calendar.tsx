"use client";

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CalendarProps {
    selectedDate: Date | null;
    onSelectDate: (date: Date) => void;
    minDate?: Date;
    maxDate?: Date;
    theme?: 'impact' | 'cyber' | 'flow';
}

export const BookingCalendar: React.FC<CalendarProps> = ({ selectedDate, onSelectDate, minDate, maxDate, theme = 'impact' }) => {
    const [currentMonth, setCurrentMonth] = useState(new Date());

    const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();

    const handlePrevMonth = () => {
        const prev = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1);
        // Prevent going before minDate's month
        if (minDate && prev < new Date(minDate.getFullYear(), minDate.getMonth(), 1)) return;
        setCurrentMonth(prev);
    };

    const handleNextMonth = () => {
        const next = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1);
        // Prevent going after maxDate's month
        if (maxDate && next > new Date(maxDate.getFullYear(), maxDate.getMonth() + 1, 0)) return;
        setCurrentMonth(next);
    };

    const handleDateClick = (day: number) => {
        const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
        onSelectDate(newDate);
    };

    const isPrevDisabled = minDate && new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1) < new Date(minDate.getFullYear(), minDate.getMonth(), 1);
    const isNextDisabled = maxDate && new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1) > new Date(maxDate.getFullYear(), maxDate.getMonth(), 1);

    // Theme Styles
    const styles = {
        impact: {
            text: 'text-gray-700',
            bg: 'bg-white',
            selected: 'bg-impact-red text-white font-bold',
            today: 'border border-impact-red text-impact-red',
            hover: 'hover:bg-gray-100 text-gray-700',
            disabled: 'text-gray-300 bg-gray-50',
            nav: 'text-gray-600 hover:bg-gray-100',
            header: 'text-gray-800'
        },
        cyber: {
            text: 'text-gray-300',
            bg: 'bg-transparent',
            selected: 'bg-cyber-green text-black font-bold shadow-[0_0_10px_#00ff41]',
            today: 'border border-cyber-green text-cyber-green',
            hover: 'hover:bg-white/10 text-white',
            disabled: 'text-gray-600 opacity-30',
            nav: 'text-cyber-green hover:bg-white/10',
            header: 'text-cyber-green'
        },
        flow: {
            text: 'text-gray-300',
            bg: 'bg-transparent',
            selected: 'bg-tech-cyan text-tech-navy font-bold shadow-[0_0_10px_#00f0ff]',
            today: 'border border-tech-cyan text-tech-cyan',
            hover: 'hover:bg-white/10 text-white',
            disabled: 'text-gray-600 opacity-30',
            nav: 'text-tech-cyan hover:bg-white/10',
            header: 'text-tech-cyan'
        }
    };

    const s = styles[theme];

    const renderDays = () => {
        const days = [];
        for (let i = 0; i < firstDayOfMonth; i++) {
            days.push(<div key={`empty-${i}`} className="h-10 w-10"></div>);
        }
        for (let i = 1; i <= daysInMonth; i++) {
            const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i);
            const isSelected = selectedDate?.toDateString() === date.toDateString();
            const isToday = new Date().toDateString() === date.toDateString();

            // Check limits
            let isDisabled = false;
            // 1. Past check (default)
            if (date < new Date(new Date().setHours(0, 0, 0, 0))) isDisabled = true;
            // 2. Min Date check
            if (minDate && date < new Date(minDate.setHours(0, 0, 0, 0))) isDisabled = true;
            // 3. Max Date check
            if (maxDate && date > maxDate) isDisabled = true;

            days.push(
                <button
                    key={i}
                    onClick={() => !isDisabled && handleDateClick(i)}
                    disabled={isDisabled}
                    className={`h-10 w-10 rounded-full flex items-center justify-center text-sm transition-all duration-200
                        ${isSelected ? s.selected : ''}
                        ${!isSelected && isToday ? s.today : ''}
                        ${!isSelected && !isToday && !isDisabled ? s.hover : ''}
                        ${isDisabled ? s.disabled : ''}
                    `}
                >
                    {i}
                </button>
            );
        }
        return days;
    };

    return (
        <div className={`p-4 rounded-lg shadow-sm max-w-sm mx-auto ${theme === 'impact' ? 'bg-white border border-gray-100' : 'bg-transparent border border-white/10'}`}>
            <div className="flex justify-between items-center mb-4">
                <button
                    onClick={handlePrevMonth}
                    disabled={!!isPrevDisabled}
                    className={`p-1 rounded-full transition-colors ${isPrevDisabled ? 'opacity-30 cursor-not-allowed' : s.nav}`}
                >
                    <ChevronLeft size={20} />
                </button>
                <div className={`font-bold ${s.header}`}>
                    {currentMonth.getFullYear()}年 {currentMonth.getMonth() + 1}月
                </div>
                <button
                    onClick={handleNextMonth}
                    disabled={!!isNextDisabled}
                    className={`p-1 rounded-full transition-colors ${isNextDisabled ? 'opacity-30 cursor-not-allowed' : s.nav}`}
                >
                    <ChevronRight size={20} />
                </button>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center mb-2">
                {['日', '月', '火', '水', '木', '金', '土'].map(d => (
                    <div key={d} className="text-xs text-gray-400 font-medium">{d}</div>
                ))}
            </div>
            <div className="grid grid-cols-7 gap-1">
                {renderDays()}
            </div>
        </div>
    );
};
