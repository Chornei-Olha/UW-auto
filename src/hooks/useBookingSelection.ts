import { useState } from 'react';

export function useBookingSelection() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const timeSlots = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30'];

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  return {
    selectedDate,
    selectedTime,
    timeSlots,
    handleDateSelect,
    handleTimeSelect,
  };
}
