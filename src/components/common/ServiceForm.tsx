'use client';

import { useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { createPortal } from 'react-dom';

interface Props {
  onClose: () => void;
}

export default function ServiceForm({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    document.body.classList.add('overflow-hidden');
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    // Собрать выбранные checkbox'ы и передать в скрытое поле
    const selected = Array.from(
      form.current.querySelectorAll('input[name="reinigungsart"]:checked')
    ).map((el) => (el as HTMLInputElement).value);

    const hiddenInput = form.current.querySelector('#reinigungsart_text') as HTMLInputElement;

    if (hiddenInput) {
      hiddenInput.value = selected.join(', ');
    }

    emailjs
      .sendForm('service_eo6rvwr', 'template_2rz9sij', form.current, 'VhhPtQDOb0JrKUeSO')
      .then(() => {
        alert('Erfolgreich gesendet!');
        form.current?.reset();
        onClose(); // Закрыть форму после отправки
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        alert('Fehler beim Senden.');
      });
  };

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-lg max-w-xl w-full p-6 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-2xl">
          ×
        </button>

        <h2 className="text-center text-xl font-semibold mb-6">Ihr Service wartet</h2>

        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm block mb-1">Vorname</label>
              <input
                type="text"
                name="vorname"
                className="w-full border-b-2 border-[#4db4c8] outline-none"
              />
            </div>
            <div>
              <label className="text-sm block mb-1">Nachname</label>
              <input
                type="text"
                name="nachname"
                className="w-full border-b-2 border-[#4db4c8] outline-none"
              />
            </div>
          </div>

          <div>
            <label className="text-sm block mb-1">Firmenname</label>
            <input
              type="text"
              name="firmenname"
              className="w-full border-b-2 border-[#4db4c8] outline-none"
            />
          </div>

          <div>
            <label className="text-sm block mb-1">Email *</label>
            <input
              type="email"
              name="email"
              required
              className="w-full border-b-2 border-[#4db4c8] outline-none"
            />
          </div>

          <div>
            <label className="text-sm block mb-1">Phone</label>
            <input
              type="tel"
              name="phone"
              className="w-full border-b-2 border-[#4db4c8] outline-none"
            />
          </div>

          <div>
            <label className="text-sm block mb-2">Reinigungsart</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[#2c2c2c]">
              <label>
                <input type="checkbox" name="reinigungsart" value="Büroreinigung" /> Büroreinigung
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
                <input type="checkbox" name="reinigungsart" value="Grundreinigung" /> Grundreinigung
              </label>
              <label>
                <input type="checkbox" name="reinigungsart" value="Polstermöbel" /> Polstermöbel-
                und Teppichreinigung
              </label>
              <label>
                <input type="checkbox" name="reinigungsart" value="Industrie" /> Reinigung für
                Gewerbe und Industrie
              </label>
              <label>
                <input type="checkbox" name="reinigungsart" value="Andere" /> Andere
              </label>
            </div>
          </div>

          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-[#2d97a7] text-white text-lg font-semibold py-2 px-8 rounded-md hover:bg-[#247c8a]"
            >
              Abschicken
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
}
