import { useState } from 'react';

function generateTimeSlots(startHour: number, endHour: number, stepMinutes: number) {
  const slots: string[] = [];
  const date = new Date();

  for (let hour = startHour; hour < endHour; hour++) {
    for (let minutes = 0; minutes < 60; minutes += stepMinutes) {
      date.setHours(hour);
      date.setMinutes(minutes);
      slots.push(
        date.toLocaleTimeString('de-DE', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        })
      );
    }
  }

  return slots;
}

export function useBookingSelection() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const timeSlots = generateTimeSlots(6, 20, 30); // 6:00 to 19:30

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
