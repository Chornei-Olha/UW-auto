'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import Calendar from '@/components/ui/Calendar';
import { useBookingSelection } from '@/hooks/useBookingSelection';

export default function HomePage() {
  const { selectedDate, selectedTime, timeSlots, handleDateSelect, handleTimeSelect } =
    useBookingSelection();

  const [showAllSessions, setShowAllSessions] = useState(false);

  const morningSlots = timeSlots.filter((time) => {
    const hour = parseInt(time.split(':')[0], 10);
    return hour < 13;
  });

  const afternoonSlots = timeSlots.filter((time) => {
    const hour = parseInt(time.split(':')[0], 10);
    return hour >= 13;
  });

  const visibleSlots = showAllSessions ? [...morningSlots, ...afternoonSlots] : morningSlots;

  return (
    <section className="container px-1 lg:px-10 inset-0 bg-white flex items-center justify-center z-50 py-10 mb-[200px] lg:mb-[170px]">
      <div className="bg-[#B1DCEB] rounded-[36px] px-1 lg:px-[80px] py-5 lg:py-9 max-w-4xl w-full overflow-y-auto">
        <div className="bg-white bg-opacity-20 rounded-[60px] p-1 lg:p-11 backdrop-blur-sm border border-white">
          <div className="bg-white rounded-[38px] p-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Service buchen</h2>
            <p className="text-gray-600 mb-8">
              Hier befinden sich die verfügbaren Termine. Jetzt ein passendes Datum und Uhrzeit
              finden und buchen.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Side - Service Details */}
              <div>
                <h3 className="text-xl lg:text-2xl font-medium text-gray-900 mb-6">
                  Servicedetails
                </h3>
                <div className="space-y-1 lg:space-y-2 text-gray-700">
                  <p>Büroreinigung</p>
                  <p>
                    {selectedDate && selectedTime ? (
                      <>
                        {selectedDate.toLocaleDateString('de-DE', {
                          day: '2-digit',
                          month: 'long',
                          year: 'numeric',
                        })}{' '}
                        um {selectedTime}
                      </>
                    ) : (
                      'Datum und Uhrzeit auswählen'
                    )}
                  </p>
                  <p>Beim Kunden</p>
                  <p>Ilja Gixt</p>
                  <p>1 Std.</p>
                  <p>1 Stunde</p>
                  <p>Auf Anfrage</p>
                </div>
                <div className="mt-8">
                  <Image src="/images/people.svg" alt="Service Frame" width={119} height={32} />
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
                    <h4 className="text-base lg:text-lg font-semibold text-gray-900 mb-4">
                      Verfügbarkeit für{' '}
                      {selectedDate.toLocaleDateString('de-DE', {
                        weekday: 'long',
                        day: 'numeric',
                        month: 'long',
                      })}
                    </h4>
                    <div className="grid grid-cols-1 gap-2 mb-6">
                      {visibleSlots.map((time) => (
                        <button
                          key={time}
                          onClick={() => handleTimeSelect(time)}
                          className={`p-2 lg:p-4 text-left border border-gray-200 rounded hover:bg-gray-50 ${
                            selectedTime === time ? 'bg-blue-50 border-blue-300' : ''
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                    {!showAllSessions && afternoonSlots.length > 0 && (
                      <button
                        onClick={() => setShowAllSessions(true)}
                        className="text-sm text-[#508FA8] underline hover:text-black mb-6"
                      >
                        Alle Sessions anzeigen
                      </button>
                    )}
                  </div>
                )}
                <Button
                  variant="primary"
                  className="w-full bg-blue-600 text-white py-4 rounded-2xl text-2xl font-semibold hover:bg-black"
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
  );
}

// 'use client';
// import React, { useState } from 'react';
// import Image from 'next/image';
// import Button from '@/components/ui/Button';
// import Calendar from '@/components/ui/Calendar';
// import { useBookingSelection } from '@/hooks/useBookingSelection';

// export default function HomePage() {
//   const { selectedDate, selectedTime, timeSlots, handleDateSelect, handleTimeSelect } =
//     useBookingSelection();
//   return (
//     <section className="container px-1 lg:px-10 inset-0 bg-white flex items-center justify-center z-50 py-10 mb-[200px] lg:mb-[170px]">
//       <div className="bg-[#B1DCEB] rounded-[36px] px-1 lg:px-[80px] py-5 lg:py-9 max-w-4xl w-full overflow-y-auto">
//         <div className="bg-white bg-opacity-20 rounded-[60px] p-1 lg:p-11 backdrop-blur-sm border border-white">
//           <div className="bg-white rounded-[38px] p-6">
//             <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Service buchen</h2>
//             <p className="text-gray-600 mb-8">
//               Hier befinden sich die verfügbaren Termine. Jetzt ein passendes Datum und Uhrzeit
//               finden und buchen.
//             </p>
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//               {/* Left Side - Service Details */}
//               <div>
//                 <h3 className="text-xl lg:text-2xl font-medium text-gray-900 mb-6">
//                   Servicedetails
//                 </h3>
//                 <div className="space-y-1 lg:space-y-2 text-gray-700">
//                   <p>Büroreinigung</p>
//                   <p>22. Mai 2025 um 10:30</p>
//                   <p>Beim Kunden</p>
//                   <p>Ilja Gixt</p>
//                   <p>1 Std.</p>
//                   <p>1 Stunde</p>
//                   <p>Auf Anfrage</p>
//                 </div>
//                 <div className="mt-8">
//                   <Image src="/images/people.svg" alt="Service Frame" width={119} height={32} />
//                 </div>
//               </div>
//               {/* Right Side - Calendar and Time Selection */}
//               <div>
//                 <h3 className="text-sm font-semibold text-gray-900 mb-4">
//                   Datum und Uhrzeit wählen
//                 </h3>
//                 <p className="text-sm text-[#508FA8] mb-6">
//                   Zeitzone: Mitteleuropäische Sommerzeit (MESZ)
//                 </p>
//                 <Calendar
//                   onDateSelect={handleDateSelect}
//                   selectedDate={selectedDate}
//                   className="mb-6"
//                 />
//                 {selectedDate && (
//                   <div>
//                     <h4 className="text-base lg:text-lg font-semibold text-gray-900 mb-4">
//                       Verfügbarkeit für{' '}
//                       {selectedDate.toLocaleDateString('de-DE', {
//                         weekday: 'long',
//                         day: 'numeric',
//                         month: 'long',
//                       })}
//                     </h4>
//                     <div className="grid grid-cols-1 gap-2 mb-6">
//                       {timeSlots.map((time) => (
//                         <button
//                           key={time}
//                           onClick={() => handleTimeSelect(time)}
//                           className={`p-2 lg:p-4 text-left border border-gray-200 rounded hover:bg-gray-50 ${
//                             selectedTime === time ? 'bg-blue-50 border-blue-300' : ''
//                           }`}
//                         >
//                           {time}
//                         </button>
//                       ))}
//                     </div>
//                     <p className="text-sm text-gray-600 mb-6">Alle Sessions anzeigen</p>
//                   </div>
//                 )}
//                 <Button
//                   variant="primary"
//                   className="w-full bg-blue-600 text-white py-4 rounded-2xl text-2xl font-semibold hover:bg-blue-700"
//                   disabled={!selectedDate || !selectedTime}
//                 >
//                   Weiter
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
