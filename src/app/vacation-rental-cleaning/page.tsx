'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Card from '@/components/common/Card';
import Button from '@/components/ui/Button';
import InputField from '@/components/ui/InputField';
import ServiceForm from '@/components/common/ServiceForm';

const steps = [
  {
    id: 1,
    title: 'Termin und Besichtigung vereinbaren',
    quote: `“Kontaktieren Sie Uns Und Vereinbaren\nSie Einen Termin Zur\nObjektbesichtigung”`,
    leftImage: '/images/img_battles_image_2.png',
    rightImage: '/images/img_battles_image_1.png',
    bottomLeft: 'Sauberes Büro',
    bottomRight: 'Leistungsfähiges Team',
  },
  {
    id: 2,
    title: 'Individuelles Angebot erhalten',
    quote: `“Basierend auf Ihrem Bedarf erstellen wir ein maßgeschneidertes Angebot.”`,
    leftImage: '/images/img_battles_image_2.png',
    rightImage: '/images/img_battles_image_1.png',
    bottomLeft: 'Sauberes Büro',
    bottomRight: 'Leistungsfähiges Team',
  },
  {
    id: 3,
    title: 'Professionelle Reinigung durchführen',
    quote: `“Unser Team übernimmt die Reinigung termingerecht und gründlich.”`,
    leftImage: '/images/img_battles_image_2.png',
    rightImage: '/images/img_battles_image_1.png',
    bottomLeft: 'Sauberes Büro',
    bottomRight: 'Leistungsfähiges Team',
  },
];
const VacationRentalCleaningPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const [openForm, setOpenForm] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Anfrage erfolgreich gesendet! Wir werden uns bald bei Ihnen melden.');
    setFormData({ name: '', phone: '', email: '' });
  };

  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? steps.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
  };

  const step = steps[current];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/img_5175.webp"
            alt="Vacation rental cleaning"
            fill
            className="object-cover lg:rounded-b-[36px]"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 lg:rounded-b-[36px]"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 w-full">
            {/* Left Content */}
            <div className="text-white space-y-8 lg:col-span-2">
              <h1 className="text-5xl lg:text-7xl font-semibold pt-[50px] lg:pt-0">
                Mehr Buchungen, weniger Stress!
              </h1>
              <p className="text-2xl lg:text-4xl font-medium">
                Lassen Sie uns Ihre Ferienwohnung reinigen – schnell & zuverlässig
              </p>
              <Button
                type="button"
                onClick={() => setOpenForm(true)}
                className="w-[40%] bg-[#4d8fa7] text-white py-4 rounded-3xl font-bold text-base hover:bg-[#3a7a8f] transition-colors"
              >
                Jetzt Anfrage senden
              </Button>
              {openForm && <ServiceForm onClose={() => setOpenForm(false)} />}

              {openForm && <ServiceForm onClose={() => setOpenForm(false)} />}
            </div>
            {/* Right Form */}
            {/* <div className="flex justify-end lg:col-span-1">
              <div className="w-full max-w-md space-y-6">
                <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6 mb-10">
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
                    <label className="block text-white text-base font-bold mb-2">
                      Telefonnummer*
                    </label>
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
            </div> */}
          </div>
        </div>
      </section>
      {/* Problems Section */}
      <section className="container px-5 lg:px-10 py-10">
        <div className="mx-auto">
          <h3 className="text-2xl lg:text-4xl font-bold text-black  text-center mb-16 leading-tight">
            Warum brauchen Ferienwohnungsbesitzer eine professionelle Reinigung?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-[#f1f9f4] p-6 rounded-lg h-123">
              <p className="text-sm lg:text-base text-[#1e1e1e] leading-relaxed">
                Zu wenig Zeit zwischen Gästewechseln
              </p>
            </div>
            <div className="bg-[#f1f9f4] p-6 rounded-lg h-123">
              <p className="text-sm lg:text-base text-[#1e1e1e] leading-relaxed">
                Negative Bewertungen wegen mangelnder Sauberkeit
              </p>
            </div>
            <div className="bg-[#f1f9f4] p-6 rounded-lg h-123">
              <p className="text-sm lg:text-base text-[#1e1e1e] leading-relaxed">
                Bettwäsche-Wechsel ist mühsam
              </p>
            </div>
            <div className="bg-[#f1f9f4] p-6 rounded-lg h-123">
              <p className="text-sm lg:text-base text-[#1e1e1e] leading-relaxed">
                Sie sind nicht in Dresden und brauchen eine zuverlässige Lösung
              </p>
            </div>
          </div>
          <h3 className="text-2xl lg:text-4xl font-semibold text-[#13263e] text-center mb-16 leading-tight">
            Vergessen Sie diese Probleme – wir haben die perfekte Lösung!
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#4d8fa749] p-6 rounded-lg h-123">
              <p className="text-sm lg:text-base text-[#1e1e1e] leading-relaxed">
                Express-Reinigung in 1-2 Stunden zwischen Buchungen
              </p>
            </div>
            <div className="bg-[#4d8fa749] p-6 rounded-lg h-123">
              <p className="text-sm lg:text-base text-[#1e1e1e] leading-relaxed">
                Bettwäsche-Wechsel & Wäscheservice
              </p>
            </div>
            <div className="bg-[#4d8fa749] p-6 rounded-lg h-123">
              <p className="text-sm lg:text-base text-[#1e1e1e] leading-relaxed">
                Fotodokumentation nach jeder Reinigung
              </p>
            </div>
            <div className="bg-[#4d8fa749] p-6 rounded-lg h-123">
              <p className="text-sm lg:text-base text-[#1e1e1e] leading-relaxed">
                Wohnungskontrolle nach Check-out: Schäden, Sauberkeit, Verbrauchsmaterialien
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section className="container px-5 lg:px-10 py-10">
        <div className="mx-auto">
          <h2 className="text-3xl lg:text-4xl font-semibold text-[#13263e] text-center mb-8">
            Transparente Preisgestaltung
          </h2>
          <p className="text-xl text-black text-center mb-20 max-w-4xl mx-auto">
            Dank unseres Arbeitszeit-Timers zahlen Sie nur für die effektive Arbeitszeit unserer
            Reinigungskräfte.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            {/* Basic Package */}
            <div
              className="relative w-full rounded-[30px] bg-cover bg-center min-h-[520px]"
              style={{ backgroundImage: "url('/images/img_image_454x411.png')" }}
            >
              <div className="absolute top-6 left-6 bg-white bg-opacity-40 border border-white rounded-[28px] px-4 py-2">
                <div className="bg-white rounded-[18px] px-4 py-2">
                  <span className="text-sm lg:text-base text-[#1e1e1e] font-medium">
                    Basis-Reinigung
                  </span>
                </div>
              </div>
              <div className="absolute top-20 left-6 bg-[#4d8fa7] rounded-[17px] px-4 py-2 border border-white mt-3">
                <span className="text-sm lg:text-base text-white">ab 25,90 € pro Stunde</span>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-sm lg:text-base text-white leading-relaxed">
                  Gründliches Staubwischen auf allen Oberflächen
                  <br />
                  Staubsaugen & feuchtes Wischen aller Böden
                  <br />
                  Reinigung von Bad & WC
                  <br />
                  Küchenreinigung
                  <br />
                  Müllentsorgung & Recycling
                </p>
              </div>
            </div>

            {/* Standard Package */}
            <div
              className="relative lg:-mt-[60px] lg:mb-[60px] w-full rounded-[30px] bg-cover bg-center min-h-[520px]"
              style={{ backgroundImage: "url('/images/img_image_5.png')" }}
            >
              <div className="absolute top-6 left-6 bg-white bg-opacity-40 border border-white rounded-[28px] px-4 py-2">
                <div className="bg-white rounded-[18px] px-4 py-2">
                  <span className="text-sm lg:text-base text-[#1e1e1e] font-medium">
                    Standard-Reinigung
                  </span>
                </div>
              </div>
              <div className="absolute top-20 left-6 bg-[#4d8fa7] rounded-[17px] px-4 py-2 border border-white mt-3">
                <span className="text-sm lg:text-base text-white">ab 29,90 € pro Stunde</span>
              </div>
              <div className="absolute bottom-10 left-6 right-6">
                <p className="text-sm lg:text-base text-white leading-relaxed">
                  Alles aus der Basis-Reinigung
                  <br />
                  Bettwäsche-Wechsel & Handtuchservice
                  <br />
                  Innenreinigung von Schränken & Regalen (bei Bedarf)
                  <br />
                  Kontrolle auf vergessene Gegenstände von Gästen
                </p>
              </div>
            </div>

            {/* Premium Package */}
            <div
              className="relative w-full rounded-[30px] bg-cover bg-center min-h-[520px]"
              style={{ backgroundImage: "url('/images/img_image_4.png')" }}
            >
              <div className="absolute top-6 left-6 bg-white bg-opacity-40 border border-white rounded-[28px] px-4 py-2">
                <div className="bg-white rounded-[18px] px-4 py-2">
                  <span className="text-sm lg:text-base text-[#1e1e1e] font-medium">
                    Premium-Management
                  </span>
                </div>
              </div>
              <div className="absolute top-20 left-6 bg-[#4d8fa7] rounded-[17px] px-4 py-2 border border-white mt-3">
                <span className="text-sm lg:text-base text-white">ab 34,90 € pro Stunde</span>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-sm lg:text-base text-white leading-relaxed">
                  Alle Leistungen aus der Standard-Reinigung
                  <br />
                  Schlüsselübergabe & Schlüsselmanagement
                  <br />
                  Gäste-Kommunikation (bei Bedarf auf Wunsch des Eigentümers)
                  <br />
                  Wohnungskontrolle nach jedem Aufenthalt
                  <br />
                  Bettwäsche- und Handtuchwechsel inkl. Wäscheservice
                  <br />
                  Einkaufsservice für Verbrauchsmaterialien
                  <br />
                  Notfall-Support für Gäste
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us Section */}
      <section className="container px-5 lg:px-10 py-10">
        <div className="=mx-auto">
          <h2 className="text-3xl lg:text-5xl text-center font-semibold text-[#13263e] mb-16">
            Warum uns wählen?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col">
              {' '}
              <Card
                variant="feature"
                number="01"
                title="Über 100 betreute Ferienwohnungen in Dresden"
                className="relative min-h-[260px] lg:min-h-[350px]"
              >
                <div className="flex justify-center pt-8">
                  <Image src="/images/icon1.svg" alt="Building icon" width={80} height={80} />
                </div>
              </Card>
            </div>
            <div className="flex flex-col">
              <Card
                variant="feature"
                number="02"
                title="Zufriedenheitsgarantie: kostenlose Nachreinigung falls nötig"
                className="relative min-h-[260px] lg:min-h-[350px]"
              >
                <div className="flex justify-center">
                  <Image src="/images/icon2.svg" alt="Guarantee icon" width={80} height={80} />
                </div>
              </Card>
            </div>
            <div className="flex flex-col">
              <Card
                variant="feature"
                number="03"
                title="7 Tage die Woche verfügbar, auch an Feiertagen"
                className="relative min-h-[260px] lg:min-h-[350px]"
              >
                <div className="flex justify-center  pt-10">
                  <Image src="/images/icon3.svg" alt="24/7 icon" width={80} height={80} />
                </div>
              </Card>
            </div>
            <div className="flex flex-col">
              <Card
                variant="feature"
                number="04"
                title="Geprüftes Personal & Versicherungsschutz für Ihr Eigentum"
                className="relative min-h-[260px] lg:min-h-[350px]"
              >
                <div className="flex justify-center pt-12">
                  <Image src="/images/icon4.svg" alt="Security icon" width={80} height={80} />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="container px-5 lg:px-10 py-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-semibold text-[#13263e] text-center mb-8">
            In 3 Schritten zum perfekten Reinigungsergebnis
          </h2>
          <p className="text-2xl text-black text-center mb-16">Wie funktioniert es?</p>

          {/* Шаг */}
          <div className="w-full">
            <div className="flex flex-row justify-between">
              <p className="text-base lg:text-2xl font-semibold text-[#131313] mb-[120px] lg:mb-4">
                {step.title}
              </p>
              <p className="text-base lg:text-2xl text-[#737373] text-right mb-[120px] lg:mb-4">
                {step.quote}
              </p>
            </div>

            <div className="flex flex-row items-center justify-center lg:items-start relative">
              {/* Левая часть */}
              <div className="mx-auto lg:ml-[120px] bg-[#4d8fa789] rounded-3xl py-[10px] lg:py-[80px] px-[10px] lg:px-[170px] flex items-center justify-center">
                <Image
                  src={step.leftImage}
                  alt="Left"
                  width={506}
                  height={345}
                  className="rounded-sm w-full max-w-[506px]"
                />
              </div>

              <div className="mt-[-120px] lg:mt-0 lg:absolute bg-transparent rounded-sm py-[10px] lg:py-[80px] flex flex-col gap-4 lg:right-[-200px] items-center lg:items-end">
                <Image
                  src={step.rightImage}
                  alt="Right"
                  width={506}
                  height={345}
                  className="rounded-sm w-full max-w-[506px]"
                />
                <p className="text-gray-600 italic text-right">
                  Wir Werden Dafür Sorgen, Dass
                  <br />
                  Es Immer Einwandfrei Ist
                </p>
              </div>
            </div>
          </div>

          {/* Подписи */}
          <div className="flex justify-between gap-10 mt-10 lg:mt-20">
            <p className="text-base lg:text-2xl text-[#2c2c2c] uppercase">{step.bottomLeft}</p>
            <p className="text-base lg:text-2xl text-[#2c2c2c] uppercase text-right">
              {step.bottomRight}
            </p>
          </div>

          {/* Стрелки */}
          <div className="flex justify-center space-x-4 mt-10">
            <button onClick={handlePrev}>
              <Image src="/images/img_arrowbackios.svg" alt="Previous" width={20} height={20} />
            </button>
            <button onClick={handleNext}>
              <Image src="/images/img_arrowforwardios.svg" alt="Next" width={20} height={20} />
            </button>
          </div>
        </div>
      </section>

      <section className="container px-5 lg:px-10 py-10 mb-[200px] lg:mb-[100px]">
        <div>
          <h3 className="text-3xl lg:text-5xlfont-semibold text-[#13263e] text-center mb-8">
            Lassen Sie Ihre Ferienwohnung glänzen! Erfahren Sie jetzt den Preis für die perfekte
            Reinigung.
          </h3>
        </div>
      </section>

      <Footer />
    </div>
  );
};
export default VacationRentalCleaningPage;
