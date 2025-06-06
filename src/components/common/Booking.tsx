'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import Calendar from '@/components/ui/Calendar';
export default function HomePage() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const timeSlots = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30'];

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };
  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };
  return (
    <div className="min-h-screen bg-white">
      {/* Booking Section */}
      <section className="container px-5 lg:px-10 inset-0 bg-white flex items-center justify-center z-50">
        <div className="bg-[#B1DCEB] rounded-[36px] px-[80px] py-9 max-w-4xl w-full overflow-y-auto">
          <div className="bg-white bg-opacity-20 rounded-[60px] p-11 backdrop-blur-sm border border-white">
            <div className="bg-white rounded-[38px] p-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Service buchen</h2>
              <p className="text-gray-600 mb-8">
                Hier befinden sich die verfügbaren Termine. Jetzt ein passendes Datum und Uhrzeit
                finden und buchen.
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Side - Service Details */}
                <div>
                  <h3 className="text-2xl font-medium text-gray-900 mb-6">Servicedetails</h3>
                  <div className="space-y-2 text-gray-700">
                    <p>Büroreinigung</p>
                    <p>22. Mai 2025 um 10:30</p>
                    <p>Beim Kunden</p>
                    <p>Ilja Gixt</p>
                    <p>1 Std.</p>
                    <p>1 Stunde</p>
                    <p>Auf Anfrage</p>
                  </div>
                  <div className="mt-8">
                    <Image
                      src="/images/img_frame_2.png"
                      alt="Service Frame"
                      width={119}
                      height={32}
                    />
                  </div>
                </div>
                {/* Right Side - Calendar and Time Selection */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-4">
                    Datum und Uhrzeit wählen
                  </h3>
                  <p className="text-sm text-[#508FA8] mb-6">
                    Zeitzone: Mitteleuropäische Sommerzeit (MESZ)
                  </p>
                  <Calendar
                    onDateSelect={handleDateSelect}
                    selectedDate={selectedDate}
                    className="mb-6"
                  />
                  {selectedDate && (
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">
                        Verfügbarkeit für{' '}
                        {selectedDate.toLocaleDateString('de-DE', {
                          weekday: 'long',
                          day: 'numeric',
                          month: 'long',
                        })}
                      </h4>
                      <div className="grid grid-cols-1 gap-2 mb-6">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            onClick={() => handleTimeSelect(time)}
                            className={`p-4 text-left border border-gray-200 rounded hover:bg-gray-50 ${
                              selectedTime === time ? 'bg-blue-50 border-blue-300' : ''
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                      <p className="text-sm text-gray-600 mb-6">Alle Sessions anzeigen</p>
                    </div>
                  )}
                  <Button
                    variant="primary"
                    className="w-full bg-blue-600 text-white py-4 rounded-2xl text-2xl font-semibold hover:bg-blue-700"
                    disabled={!selectedDate || !selectedTime}
                  >
                    Weiter
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
