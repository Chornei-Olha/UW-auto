'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Button from '@/components/ui/Button';
import InputField from '@/components/ui/InputField';
const WindowCleaningPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Vielen Dank für Ihre Anfrage! Wir werden uns bald bei Ihnen melden.');
    setFormData({ name: '', phone: '', email: '' });
  };
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section
        className="relative min-h-[421px] overflow-hidden bg-cover bg-bottom"
        style={{ backgroundImage: "url('/images/img_5175.png')" }}
      >
        {/* Черный оверлей */}
        <div
          className="absolute inset-0 bg-black bg-opacity-30"
          style={{
            borderBottomLeftRadius: '50px',
            borderBottomRightRadius: '50px',
          }}
        ></div>

        {/* Контент */}
        <div className="relative z-20 h-full flex">
          <div className="container px-5 lg:px-10 flex items-end h-full">
            <h1 className="text-4xl lg:text-7xl font-semibold leading-tight text-white mt-[100px]">
              Strahlend saubere Fenster für Ihr Zuhause oder Büro
            </h1>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container px-5 lg:px-10 bg-white mt-[40px] lg:mt-[78px]">
        <div className="mx-auto">
          <div className="text-center">
            <h2 className="text-4xl lg:text-6xl font-bold text-[#13263e]">Was wir tun?</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center mt-[34px]">
            {/* Left Services */}
            <div className="space-y-8 lg:col-start-1 lg:row-start-1">
              <div className="bg-transparent">
                <h3 className="text-xl lg:text-3xl font-semibold text-[#13263e] mb-4">
                  Reinigung der Fensterscheiben innen und außen
                </h3>
              </div>
              <div className="bg-transparent">
                <h3 className="text-xl lg:text-3xl font-semibold text-[#13263e] mb-4">
                  Reinigung der Fensterbänke
                </h3>
              </div>
            </div>
            {/* Center Image */}
            <div className="flex justify-center">
              <Image
                src="/images/img_20250522t131143493_1.png"
                alt="Professional window cleaning"
                width={507}
                height={599}
                className="object-cover"
              />
            </div>
            {/* Right Services */}
            <div className="space-y-8 lg:col-start-3 lg:row-start-1">
              <div className="bg-transparent">
                <h3 className="text-xl lg:text-3xl font-semibold text-[#13263e] mb-4">
                  Reinigung der Fensterrahmen innen und außen
                </h3>
              </div>
              <div className="bg-transparent">
                <h3 className="text-xl lg:text-3xl font-semibold text-[#13263e] mb-4">
                  Entfernung von hartnäckigem Schmutz
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container px-5 lg:px-10 bg-white mt-[60px]">
        <div className="mx-auto">
          <h2 className="text-4xl lg:text-5xl font-semibold text-black mb-16 text-center">
            Warum uns wählen?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
            {/* Feature 1 */}
            <div className="bg-[#E5EEF9] rounded-3xl p-3 lg:p-8 relative flex flex-col h-full">
              <div className="text-left mb-3">
                <span className="text-3xl lg:text-4xl font-medium text-[#13263e]">01</span>
              </div>
              <h3 className="text-xl lg:text-2xl font-medium text-[#13263e] mb-3 min-h-[72px] lg:min-h-[100px]">
                Gründliche Reinigung für eine saubere und komfortable Atmosphäre{' '}
              </h3>
            </div>
            {/* Feature 2 */}
            <div className="bg-[#E5EEF9] rounded-3xl p-3 lg:p-8 relative flex flex-col h-full">
              <div className="text-left mb-3">
                <span className="text-3xl lg:text-4xl font-medium text-[#13263e]">02</span>
              </div>
              <h3 className="text-xl lg:text-2xl font-medium text-[#13263e] mb-3 min-h-[72px] lg:min-h-[100px]">
                Flexible Einsatzzeiten, die sich Ihrem Arbeitsplan anpassen{' '}
              </h3>
            </div>
            {/* Feature 3 */}
            <div className="bg-[#E5EEF9] rounded-3xl p-3 lg:p-8 relative flex flex-col h-full">
              <div className="text-left mb-3">
                <span className="text-3xl lg:text-4xl font-medium text-[#13263e]">03</span>
              </div>
              <h3 className="text-xl lg:text-2xl font-medium text-[#13263e] mb-3 min-h-[72px] lg:min-h-[100px]">
                Professionelles und diskretes Reinigungsteam{' '}
              </h3>
            </div>
            {/* Feature 4 */}
            <div className="bg-[#E5EEF9] rounded-3xl p-3 lg:p-8 relative flex flex-col h-full">
              <div className="text-left mb-3">
                <span className="text-3xl lg:text-4xl font-medium text-[#13263e]">04</span>
              </div>
              <h3 className="text-xl lg:text-2xl font-medium text-[#13263e] mb-3 min-h-[72px] lg:min-h-[100px]">
                Transparente Preise und individuelle Angebote{' '}
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="container px-5 lg:px-10 py-10 mb-[200px] lg:mb-[170px]">
        <form className="mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-7">
            <div className="flex-1">
              <label htmlFor="name" className="block font-semibold text-sm mb-1">
                Name*
              </label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-700 rounded-md p-2"
                required
              />
            </div>
            <div className="flex-1">
              <label htmlFor="phone" className="block font-semibold text-sm mb-1">
                Telefonnummer*
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full border border-gray-700 rounded-md p-2"
                required
              />
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="mb-7 w-full lg:w-1/2">
              <label htmlFor="email" className="block font-semibold text-sm mb-1 text-left">
                E-Mail*
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-700 rounded-md p-2"
                required
              />
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-[#4A91AC] text-white px-[100px] py-2 rounded-full font-semibold  mb-[200px] lg:mb-20"
            >
              Jetzt Anfrage senden
            </button>
          </div>
        </form>
      </section>
      <Footer />
    </div>
  );
};
export default WindowCleaningPage;
