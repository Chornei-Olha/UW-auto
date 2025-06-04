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
    email: ''
  });
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
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
      <section className="relative min-h-screen overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/img_5175.png"
            alt="Window cleaning service"
            width={421}
            height={1440}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 rounded-b-[36px]"></div>
        </div>
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Content - Hero Text */}
            <div className="text-white space-y-8">
              <h1 className="text-5xl lg:text-7xl font-semibold leading-tight">
                Strahlend saubere Fenster für Ihr Zuhause oder Büro
              </h1>
            </div>
            {/* Right Content - Contact Form */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-8 space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <InputField
                    label="Name*"
                    value={formData.name}
                    onChange={(value) => handleInputChange('name', value)}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <InputField
                    label="Telefonnummer*"
                    value={formData.phone}
                    onChange={(value) => handleInputChange('phone', value)}
                    type="tel"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <InputField
                    label="E-Mail*"
                    value={formData.email}
                    onChange={(value) => handleInputChange('email', value)}
                    type="email"
                    required
                    className="w-full"
                  />
                </div>
                <Button
                  type="submit"
                  variant="primary"
                  className="w-full bg-gradient-to-r from-[#4d8fa7] to-[#508fa8] text-white py-4 rounded-3xl font-bold text-lg hover:shadow-lg transition-all"
                >
                  Jetzt Anfrage senden
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold text-[#13263e] mb-8">
              Was wir tun?
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Services */}
            <div className="space-y-8">
              <div className="bg-[#4d8fa756] p-6 rounded-3xl">
                <h3 className="text-2xl lg:text-3xl font-semibold text-[#13263e] mb-4">
                  Reinigung der Fensterscheiben innen und außen
                </h3>
              </div>
              <div className="bg-[#4d8fa756] p-6 rounded-3xl">
                <h3 className="text-2xl lg:text-3xl font-semibold text-[#13263e] mb-4">
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
                className="rounded-3xl object-cover"
              />
            </div>
            {/* Right Services */}
            <div className="space-y-8 lg:col-start-2 lg:row-start-1">
              <div className="bg-[#4d8fa756] p-6 rounded-3xl text-right">
                <h3 className="text-2xl lg:text-3xl font-semibold text-[#13263e] mb-4">
                  Reinigung der Fensterrahmen innen und außen
                </h3>
              </div>
              <div className="bg-[#4d8fa756] p-6 rounded-3xl text-right">
                <h3 className="text-2xl lg:text-3xl font-semibold text-[#13263e] mb-4">
                  Entfernung von hartnäckigem Schmutz
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-semibold text-[#13263e] mb-8">
              Warum uns wählen?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature Card 1 */}
            <div className="relative">
              <Image
                src="/images/img_vector_7.svg"
                alt="Feature background"
                width={249}
                height={282}
                className="w-full h-auto rounded-3xl"
              />
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="text-right">
                  <span className="text-4xl font-medium text-[#13263e]">01</span>
                </div>
                <div>
                  <p className="text-xl font-medium text-[#13263e] leading-relaxed">
                    Gründliche Reinigung für eine saubere und komfortable Atmosphäre
                  </p>
                </div>
              </div>
            </div>
            {/* Feature Card 2 */}
            <div className="relative">
              <Image
                src="/images/img_vector_8.svg"
                alt="Feature background"
                width={249}
                height={282}
                className="w-full h-auto rounded-3xl"
              />
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="text-right">
                  <span className="text-4xl font-medium text-[#13263e]">02</span>
                </div>
                <div>
                  <p className="text-xl font-medium text-[#111111] leading-relaxed">
                    Flexible Einsatzzeiten, die sich Ihrem Arbeitsplan anpassen
                  </p>
                </div>
              </div>
            </div>
            {/* Feature Card 3 */}
            <div className="relative">
              <Image
                src="/images/img_vector_7.svg"
                alt="Feature background"
                width={249}
                height={282}
                className="w-full h-auto rounded-3xl"
              />
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="text-right">
                  <span className="text-4xl font-medium text-[#13263e]">03</span>
                </div>
                <div>
                  <p className="text-xl font-medium text-[#13263e] leading-relaxed">
                    Professionelles und diskretes Reinigungsteam
                  </p>
                </div>
              </div>
            </div>
            {/* Feature Card 4 */}
            <div className="relative">
              <Image
                src="/images/img_vector_7.svg"
                alt="Feature background"
                width={242}
                height={282}
                className="w-full h-auto rounded-3xl"
              />
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="text-right">
                  <span className="text-4xl font-medium text-[#13263e]">05</span>
                </div>
                <div>
                  <p className="text-xl font-medium text-[#13263e] leading-relaxed">
                    Transparente Preise und individuelle Angebote
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default WindowCleaningPage;