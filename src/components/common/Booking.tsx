'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import Calendar from '@/components/ui/Calendar';
import { useBookingSelection } from '@/hooks/useBookingSelection';
import emailjs from '@emailjs/browser';

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

  const sendBookingEmail = () => {
    const form = document.getElementById('booking-form') as HTMLFormElement;
    if (!form) return;

    const formData = new FormData(form);

    const selectedCheckboxes = Array.from(
      form.querySelectorAll('input[name="reinigungsart"]:checked')
    ).map((el) => (el as HTMLInputElement).value);
    formData.set('reinigungsart_text', selectedCheckboxes.join(', '));

    const templateParams = {
      service: formData.get('reinigungsart_text'),
      date: selectedDate?.toLocaleDateString('de-DE', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }),
      time: selectedTime,
      customer_name: formData.get('vorname'),
      email: formData.get('email'),
      phone: formData.get('phone'),
    };

    emailjs
      .send('service_eo6rvwr', 'template_xxw0p1w', templateParams, 'VhhPtQDOb0JrKUeSO')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Buchung wurde erfolgreich gesendet!');
        form.reset();
      })
      .catch((err) => {
        console.error('FAILED...', err);
        alert('Fehler beim Senden der Buchung.');
      });
  };

  return (
    <section className="container px-1 lg:px-10 inset-0 bg-white flex items-center justify-center z-50 py-10 mb-[200px] lg:mb-[170px]">
      <div className="bg-[#B1DCEB] rounded-[36px] px-4 lg:px-20 py-5 lg:py-9 max-w-full w-full overflow-y-auto">
        <div className="bg-white bg-opacity-20 rounded-[60px] p-1 lg:p-11 backdrop-blur-sm border border-white">
          <div className="bg-white rounded-[38px] p-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Service buchen</h2>
            <p className="text-gray-600 mb-8">
              Hier befinden sich die verfügbaren Termine. Jetzt ein passendes Datum und Uhrzeit
              finden und buchen.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8">
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
                  <form className="space-y-3 lg:space-y-4 text-gray-700" id="booking-form">
                    <div>
                      <label className="block text-sm mb-1">Vorname *</label>
                      <input
                        type="text"
                        name="vorname"
                        required
                        className="w-full border-b-2 border-[#4db4c8] outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm mb-1">Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full border-b-2 border-[#4db4c8] outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm mb-1">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        className="w-full border-b-2 border-[#4db4c8] outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm mb-2">Reinigungsart</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                        <label>
                          <input type="checkbox" name="reinigungsart" value="Büroreinigung" />{' '}
                          Büroreinigung
                        </label>
                        <label>
                          <input type="checkbox" name="reinigungsart" value="Fensterreinigung" />{' '}
                          Fensterreinigung
                        </label>
                        <label>
                          <input type="checkbox" name="reinigungsart" value="Ferienwohnung" />{' '}
                          Ferienwohnungsreinigung
                        </label>
                        <label>
                          <input type="checkbox" name="reinigungsart" value="Grundreinigung" />{' '}
                          Grundreinigung
                        </label>
                        <label>
                          <input type="checkbox" name="reinigungsart" value="Polstermöbel" />{' '}
                          Polstermöbel- und Teppichreinigung
                        </label>
                        <label>
                          <input type="checkbox" name="reinigungsart" value="Industrie" /> Reinigung
                          für Gewerbe und Industrie
                        </label>
                        <label>
                          <input type="checkbox" name="reinigungsart" value="Andere" /> Andere
                        </label>
                      </div>
                      <input type="hidden" name="reinigungsart_text" id="reinigungsart_text" />
                    </div>
                  </form>

                  {/* <p>Beim Kunden</p>
                  <p>Ilja Gixt</p>
                  <p>1 Std.</p>
                  <p>1 Stunde</p>
                  <p>Auf Anfrage</p> */}
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
                <div className="flex flex-col lg:flex-row gap-12">
                  <Calendar
                    onDateSelect={handleDateSelect}
                    selectedDate={selectedDate}
                    className="mb-6 lg:mb-0 lg:flex-shrink-0 lg:w-[300px]"
                  />
                  {selectedDate && (
                    <div className="w-full lg:w-1/2">
                      <h4 className="text-base lg:text-lg font-semibold text-gray-900 mb-4">
                        Verfügbarkeit für{' '}
                        {selectedDate.toLocaleDateString('de-DE', {
                          weekday: 'long',
                          day: 'numeric',
                          month: 'long',
                        })}
                      </h4>
                      <div className="grid grid-cols-2 gap-2 mb-6">
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
                </div>
                <Button
                  variant="primary"
                  className="w-full bg-blue-600 text-white py-4 rounded-2xl text-2xl font-semibold hover:bg-black"
                  disabled={!selectedDate || !selectedTime}
                  onClick={sendBookingEmail}
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
