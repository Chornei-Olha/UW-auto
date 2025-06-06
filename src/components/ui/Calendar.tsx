'use client';

import React, { useState } from 'react';

interface CalendarProps {
  onDateSelect: (date: Date) => void;
  selectedDate?: Date | null;
  className?: string;
}

const Calendar: React.FC<CalendarProps> = ({ onDateSelect, className = '' }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const daysOfWeek = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = (firstDay.getDay() + 6) % 7; // Adjust for Monday start

    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }

    return days;
  };

  const handleDateClick = (date: Date | null) => {
    if (date) {
      setSelectedDate(date);
      onDateSelect(date);
    }
  };

  const isDateSelected = (date: Date | null) => {
    if (!date || !selectedDate) return false;
    return date.toDateString() === selectedDate.toDateString();
  };

  const isDateAvailable = (date: Date | null) => {
    if (!date) return false;
    const today = new Date();
    return date >= today;
  };

  const days = getDaysInMonth(currentDate);

  return (
    <div className={`bg-white rounded-lg ${className}`}>
      {/* Days of week header */}
      <div className="grid grid-cols-7 gap-1 mb-4">
        {daysOfWeek.map((day) => (
          <div key={day} className="text-center text-sm font-medium text-[#000000] py-2">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-4">
        {days.map((date, index) => (
          <div key={index} className="aspect-square">
            {date ? (
              <button
                onClick={() => handleDateClick(date)}
                disabled={!isDateAvailable(date)}
                className={`w-10 lg:w-10 h-10 lg:h-10 rounded-full flex items-center justify-center text-sm lg:text-base font-medium transition-colors ${
                  isDateSelected(date)
                    ? 'bg-[#4d899e] text-white'
                    : isDateAvailable(date)
                      ? 'bg-[#4d899e] text-white hover:bg-[#3a7a8f]'
                      : 'text-[#21212166] cursor-not-allowed'
                }`}
              >
                {date.getDate()}
              </button>
            ) : (
              <div className="w-10 h-10"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
