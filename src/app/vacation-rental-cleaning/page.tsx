'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Card from '@/components/common/Card';
import Button from '@/components/ui/Button';
import InputField from '@/components/ui/InputField';
const VacationRentalCleaningPage: React.FC = () => {
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
    alert('Anfrage erfolgreich gesendet! Wir werden uns bald bei Ihnen melden.');
    setFormData({ name: '', phone: '', email: '' });
  };
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/img_5175.png"
            alt="Vacation rental cleaning"
            fill
            className="object-cover rounded-b-[36px]"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 rounded-b-[36px]"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
            {/* Left Content */}
            <div className="text-white space-y-8">
              <h1 className="text-6xl lg:text-7xl font-semibold leading-tight">
                Mehr Buchungen, weniger Stress!
              </h1>
              <p className="text-3xl lg:text-4xl font-medium leading-relaxed">
                Lassen Sie uns Ihre Ferienwohnung reinigen – schnell & zuverlässig
              </p>
            </div>
            {/* Right Form */}
            <div className="flex justify-end">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-lg w-full max-w-md space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-white text-base font-bold mb-2">Name*</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-4 py-3 border border-white rounded-lg bg-transparent text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white text-base font-bold mb-2">Telefonnummer*</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full px-4 py-3 border border-white rounded-lg bg-transparent text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white text-base font-bold mb-2">E-Mail*</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-4 py-3 border border-white rounded-lg bg-transparent text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-[#4d8fa7] text-white py-4 rounded-3xl font-bold text-base hover:bg-[#3a7a8f] transition-colors"
                  >
                    Jetzt Anfrage senden
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Problems Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-16 leading-tight">
            Warum brauchen Ferienwohnungsbesitzer eine professionelle Reinigung?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-[#f1f9f4] p-6 rounded-lg h-32">
              <p className="text-lg text-[#1e1e1e] leading-relaxed">
                Zu wenig Zeit zwischen Gästewechseln
              </p>
            </div>
            <div className="bg-[#f1f9f4] p-6 rounded-lg h-32">
              <p className="text-lg text-[#1e1e1e] leading-relaxed">
                Negative Bewertungen wegen mangelnder Sauberkeit
              </p>
            </div>
            <div className="bg-[#f1f9f4] p-6 rounded-lg h-32">
              <p className="text-lg text-[#1e1e1e] leading-relaxed">
                Bettwäsche-Wechsel ist mühsam
              </p>
            </div>
            <div className="bg-[#f1f9f4] p-6 rounded-lg h-32">
              <p className="text-lg text-[#1e1e1e] leading-relaxed">
                Sie sind nicht in Dresden und brauchen eine zuverlässige Lösung
              </p>
            </div>
          </div>
          <h3 className="text-4xl lg:text-5xl font-semibold text-[#13263e] text-center mb-16 leading-tight">
            Vergessen Sie diese Probleme – wir haben die perfekte Lösung!
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#4d8fa749] p-6 rounded-lg h-32">
              <p className="text-lg text-[#1e1e1e] leading-relaxed">
                Express-Reinigung in 1-2 Stunden zwischen Buchungen
              </p>
            </div>
            <div className="bg-[#4d8fa749] p-6 rounded-lg h-32">
              <p className="text-lg text-[#1e1e1e] leading-relaxed">
                Bettwäsche-Wechsel & Wäscheservice
              </p>
            </div>
            <div className="bg-[#4d8fa749] p-6 rounded-lg h-32">
              <p className="text-lg text-[#1e1e1e] leading-relaxed">
                Fotodokumentation nach jeder Reinigung
              </p>
            </div>
            <div className="bg-[#4d8fa749] p-6 rounded-lg h-32">
              <p className="text-lg text-[#1e1e1e] leading-relaxed">
                Wohnungskontrolle nach Check-out: Schäden, Sauberkeit, Verbrauchsmaterialien
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-semibold text-[#13263e] text-center mb-8">
            Transparente Preisgestaltung
          </h2>
          <p className="text-xl text-black text-center mb-16 max-w-4xl mx-auto">
            Dank unseres Arbeitszeit-Timers zahlen Sie nur für die effektive Arbeitszeit unserer Reinigungskräfte.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Package */}
            <div className="relative">
              <Image
                src="/images/img_image_454x411.png"
                alt="Basic cleaning package"
                width={454}
                height={411}
                className="w-full rounded-[30px] object-cover"
              />
              <div className="absolute top-6 left-6 bg-white bg-opacity-40 border border-white rounded-[28px] px-4 py-2">
                <div className="bg-white rounded-[18px] px-4 py-2">
                  <span className="text-base text-[#1e1e1e] font-medium">Basis-Reinigung</span>
                </div>
              </div>
              <div className="absolute top-20 left-6 bg-[#4d8fa7] rounded-[17px] px-4 py-2 border border-white">
                <span className="text-base text-white">ab 25,90 € pro Stunde</span>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-lg text-white leading-relaxed">
                  Gründliches Staubwischen auf allen Oberflächen<br/>
                  Staubsaugen & feuchtes Wischen aller Böden<br/>
                  Reinigung von Bad & WC<br/>
                  Küchenreinigung<br/>
                  Müllentsorgung & Recycling
                </p>
              </div>
            </div>
            {/* Standard Package */}
            <div className="relative">
              <Image
                src="/images/img_image_5.png"
                alt="Standard cleaning package"
                width={454}
                height={411}
                className="w-full rounded-[30px] object-cover"
              />
              <div className="absolute top-6 left-6 bg-white bg-opacity-40 border border-white rounded-[28px] px-4 py-2">
                <div className="bg-white rounded-[18px] px-4 py-2">
                  <span className="text-base text-[#1e1e1e] font-medium">Standard-Reinigung</span>
                </div>
              </div>
              <div className="absolute top-20 left-6 bg-[#4d8fa7] rounded-[17px] px-4 py-2 border border-white">
                <span className="text-base text-white">ab 29,90 € pro Stunde</span>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-lg text-white leading-relaxed">
                  Alles aus der Basis-Reinigung<br/>
                  Bettwäsche-Wechsel & Handtuchservice<br/>
                  Innenreinigung von Schränken & Regalen (bei Bedarf)<br/>
                  Kontrolle auf vergessene Gegenstände von Gästen
                </p>
              </div>
            </div>
            {/* Premium Package */}
            <div className="relative">
              <Image
                src="/images/img_image_4.png"
                alt="Premium cleaning package"
                width={454}
                height={411}
                className="w-full rounded-[30px] object-cover"
              />
              <div className="absolute top-6 left-6 bg-white bg-opacity-40 border border-white rounded-[28px] px-4 py-2">
                <div className="bg-white rounded-[18px] px-4 py-2">
                  <span className="text-base text-[#1e1e1e] font-medium">Premium-Management</span>
                </div>
              </div>
              <div className="absolute top-20 left-6 bg-[#4d8fa7] rounded-[17px] px-4 py-2 border border-white">
                <span className="text-base text-white">ab 34,90 € pro Stunde</span>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-base text-white leading-relaxed">
                  Alle Leistungen aus der Standard-Reinigung<br/>
                  Schlüsselübergabe & Schlüsselmanagement<br/>
                  Gäste-Kommunikation (bei Bedarf auf Wunsch des Eigentümers)<br/>
                  Wohnungskontrolle nach jedem Aufenthalt<br/>
                  Bettwäsche- und Handtuchwechsel inkl. Wäscheservice<br/>
                  Einkaufsservice für Verbrauchsmaterialien<br/>
                  Notfall-Support für Gäste
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-semibold text-[#13263e] mb-16">
            Warum uns wählen?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card
              variant="feature"
              number="01"
              title="Über 100 betreute Ferienwohnungen in Dresden"
              className="relative"
            >
              <div className="absolute bottom-6 left-6">
                <Image
                  src="/images/img_clip_path_group_blue_gray_500.svg"
                  alt="Building icon"
                  width={125}
                  height={120}
                />
              </div>
            </Card>
            <Card
              variant="feature"
              number="02"
              title="Zufriedenheitsgarantie: kostenlose Nachreinigung falls nötig"
              className="relative"
            >
              <div className="absolute bottom-6 left-6">
                <Image
                  src="/images/img_clip_path_group_black_900_90x73.svg"
                  alt="Guarantee icon"
                  width={90}
                  height={73}
                />
              </div>
            </Card>
            <Card
              variant="feature"
              number="03"
              title="7 Tage die Woche verfügbar, auch an Feiertagen"
              className="relative"
            >
              <div className="absolute bottom-6 left-6">
                <Image
                  src="/images/img_clip_path_group_black_900_110x110.svg"
                  alt="24/7 icon"
                  width={110}
                  height={110}
                />
              </div>
            </Card>
            <Card
              variant="feature"
              number="04"
              title="Geprüftes Personal & Versicherungsschutz für Ihr Eigentum"
              className="relative"
            >
              <div className="absolute bottom-6 left-6 flex space-x-2">
                <Image
                  src="/images/img_vector_blue_gray_500_37x38.svg"
                  alt="Security icon"
                  width={37}
                  height={38}
                />
                <Image
                  src="/images/img_clip_path_group_black_900_39x65.svg"
                  alt="Insurance icon"
                  width={39}
                  height={65}
                />
              </div>
            </Card>
          </div>
        </div>
      </section>
      {/* Process Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-semibold text-[#13263e] text-center mb-8">
            In 3 Schritten zum perfekten Reinigungsergebnis
          </h2>
          <p className="text-2xl text-black text-center mb-16">
            Wie funktioniert es?
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Step 1 */}
            <div className="text-center">
              <div className="bg-[#4d8fa789] rounded-3xl p-12 mb-8">
                <Image
                  src="/images/img_battles_image_2.png"
                  alt="Appointment booking"
                  width={506}
                  height={345}
                  className="rounded-2xl mx-auto"
                />
              </div>
              <h3 className="text-2xl font-semibold text-[#131313] mb-4">
                Termin und Besichtigung vereinbaren
              </h3>
              <p className="text-lg text-[#737373] mb-4">
                Kontaktieren Sie uns und vereinbaren Sie einen Termin zur Objektbesichtigung.
              </p>
              <div className="flex justify-center space-x-4">
                <Image src="/images/img_battles_quote_2.png" alt="Quote" width={23} height={38} />
                <Image src="/images/img_battles_quote_1.png" alt="Quote" width={23} height={38} />
              </div>
            </div>
            {/* Step 2 */}
            <div className="text-center">
              <Image
                src="/images/img_battles_image_1.png"
                alt="Professional cleaning"
                width={506}
                height={345}
                className="rounded-2xl mx-auto mb-8"
              />
              <p className="text-lg text-[#2c2c2c] mb-4">
                Wir werden dafür sorgen, dass es immer einwandfrei ist
              </p>
              <div className="flex justify-center space-x-4 mb-8">
                <Image src="/images/img_arrowbackios.svg" alt="Previous" width={24} height={24} />
                <Image src="/images/img_arrowforwardios.svg" alt="Next" width={24} height={24} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <p className="text-2xl text-[#2c2c2c] uppercase">Sauberes Büro</p>
                <p className="text-2xl text-[#2c2c2c] uppercase">leistungsfähiges Team</p>
              </div>
            </div>
            {/* Step 3 - Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-4xl font-semibold text-[#13263e] text-center mb-8">
                Lassen Sie Ihre Ferienwohnung glänzen! Erfahren Sie jetzt den Preis für die perfekte Reinigung.
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField
                    label="Name*"
                    value={formData.name}
                    onChange={(value) => handleInputChange('name', value)}
                    required
                  />
                  <InputField
                    label="Telefonnummer*"
                    value={formData.phone}
                    onChange={(value) => handleInputChange('phone', value)}
                    type="tel"
                    required
                  />
                </div>
                <InputField
                  label="E-Mail*"
                  value={formData.email}
                  onChange={(value) => handleInputChange('email', value)}
                  type="email"
                  required
                />
                <Button
                  type="submit"
                  className="w-full bg-[#4d8fa7] text-white py-4 rounded-3xl font-bold text-base hover:bg-[#3a7a8f] transition-colors"
                >
                  Jetzt Anfrage senden
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default VacationRentalCleaningPage;