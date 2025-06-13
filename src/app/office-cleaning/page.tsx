'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Card from '@/components/common/Card';
import Button from '@/components/ui/Button';
import InputField from '@/components/ui/InputField';

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
    <div className="min-h-screen">
      <Header />
      {/* Hero Section */}
      <section className="relative px-5 lg:px-10 py-10 overflow-hidden flex flex-col items-center justify-center">
        {/* Фоновый заголовок REINEX */}
        <h1 className="absolute top-0 left-0 w-screen text-[80px] md:text-[200px] lg:text-[360px] font-bold text-[#B7D3DC] opacity-[0.34] uppercase tracking-wider leading-[1] select-none text-center z-0 pointer-events-none">
          REINEX
        </h1>

        {/* Контент */}
        <div className="relative z-10 text-bottom">
          <h2 className="text-2xl lg:text-7xl font-semibold text-[#13263e] leading-tight  pt-0 md:pt-[3rem] lg:pt-[10rem]">
            Büroreinigung
          </h2>
        </div>

        <div className="container px-5 lg:px-10 mt-[20px] lg:mt-[200px] relative w-full overflow-hidden flex flex-col lg:flex-row gap-12">
          {/* Градиентный слой */}
          <div className="relative w-full max-w-sm">
            <div className="absolute inset-0 bg-gradient-to-b from-white/0 to-white z-10" />
            <img
              src="/images/hero-right.png"
              alt="Büroreinigung"
              className="w-full h-auto rounded-[30px]"
            />
          </div>

          {/* Правая колонка с текстом и кнопкой */}
          <div className="text-left space-y-4">
            <h2 className="text-2xl lg:text-5xl font-bold text-[#1B1E29]">
              Saubere Büros für erfolgreiche Unternehmen
            </h2>
            <p className="text-lg md:text-3xl text-gray-700 leading-relaxed">
              Mit unserer professionellen Büroreinigung sorgen wir für eine hygienische, angenehme
              und produktive Arbeitsumgebung. Überzeugen Sie sich selbst von unserem zuverlässigen
              und flexiblen Service!
            </p>
            <button className="mt-4 inline-block bg-[#4891A1] text-white text-lg lg:text-2xl font-semibold py-5 px-10 rounded-full hover:bg-[#387a87] transition">
              Jetzt buchen
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="container px-5 lg:px-10 bg-white mt-[50px]">
        <div className="mx-auto">
          <h2 className="text-3xl lg:text-5xl font-semibold text-[#508fa8] mb-16 text-center">
            Warum uns wählen?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
            {/* Feature 1 */}
            <div className="bg-[#4d8fa756] rounded-3xl p-3 lg:p-8 relative flex flex-col h-full">
              <div className="text-left mb-3">
                <span className="text-3xl lg:text-4xl font-medium text-[#13263e]">01</span>
              </div>
              <h3 className="text-xl lg:text-2xl font-medium text-[#13263e] mb-3 min-h-[72px] lg:min-h-[100px]">
                Professionalität in jedem Detail
              </h3>
              <p className="text-sm lg:text-base text-[#13263e] leading-relaxed">
                Unsere Mitarbeiter sind sorgfältig ausgewählt und speziell geschult. Dank unserer
                Erfahrung in der Reinigungsbranche garantieren wir Qualität und Zuverlässigkeit bei
                jeder Reinigung.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-[#4d8fa756] rounded-3xl p-3 lg:p-8 relative flex flex-col h-full">
              <div className="text-left mb-3">
                <span className="text-3xl lg:text-4xl font-medium text-[#13263e]">02</span>
              </div>
              <h3 className="text-xl lg:text-2xl font-medium text-[#13263e] mb-3 min-h-[72px] lg:min-h-[100px]">
                Flexibilität und individuelle Lösungen
              </h3>
              <p className="text-sm lg:text-base text-[#13263e] leading-relaxed">
                Unsere Reinigungsdienste passen sich Ihren Bedürfnissen an. Sie können den Zeitpunkt
                und Umfang der Reinigung frei wählen und so einen Service erhalten, der perfekt zu
                Ihnen passt.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-[#4d8fa756] rounded-3xl p-3 lg:p-8 relative flex flex-col h-full">
              <div className="text-left mb-3">
                <span className="text-3xl lg:text-4xl font-medium text-[#13263e]">03</span>
              </div>
              <h3 className="text-xl lg:text-2xl font-medium text-[#13263e] mb-3 min-h-[72px] lg:min-h-[100px]">
                Umweltfreundliche Produkte
              </h3>
              <p className="text-sm lg:text-base text-[#13263e] leading-relaxed">
                Wir verwenden ausschließlich umweltfreundliche Reinigungsmittel, die weder
                gesundheitsschädlich noch umweltschädlich sind.
              </p>
            </div>
            {/* Feature 4 */}
            <div className="bg-[#4d8fa756] rounded-3xl p-3 lg:p-8 relative flex flex-col h-full">
              <div className="text-left mb-3">
                <span className="text-3xl lg:text-4xl font-medium text-[#13263e]">04</span>
              </div>
              <h3 className="text-xl lg:text-2xl font-medium text-[#13263e] mb-3 min-h-[72px] lg:min-h-[100px]">
                Schnelligkeit und faire Preise
              </h3>
              <p className="text-sm lg:text-base text-[#13263e] leading-relaxed">
                Dank unseres effizienten Teams bieten wir schnelle und hochwertige Reinigungsdienste
                zu wettbewerbsfähigen Preisen an. Wir schätzen Ihre Zeit und Ihren Komfort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="container px-5 lg:px-10 bg-white mt-[60px]">
        <div className="mx-auto">
          <h2 className="text-3xl lg:text-5xl font-semibold text-[#13263E] mb-16 text-center">
            Was wir tun?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 text-center">
            {/* Feature 1 */}
            <div className="bg-[#4D8FA7] rounded-lg p-3 lg:p-8 relative flex flex-col h-full">
              <p className="text-xl lg:text-2xl font-medium text-white min-h-[50px] lg:min-h-[100px]">
                Staubsaugen{' '}
              </p>
              <Image
                src="/images/icon5.svg"
                alt="icon"
                width={506}
                height={345}
                className="w-full max-h-[73px]"
              />{' '}
            </div>
            {/* Feature 2 */}
            <div className="bg-[#4D8FA7] rounded-lg p-3 lg:p-8 relative flex flex-col h-full">
              <p className="text-xl lg:text-2xl font-medium text-white min-h-[50px] lg:min-h-[100px]">
                Möbelreinigung{' '}
              </p>
              <Image
                src="/images/icon6.svg"
                alt="icon"
                width={506}
                height={345}
                className="w-full max-h-[73px]"
              />{' '}
            </div>
            {/* Feature 3 */}
            <div className="bg-[#4D8FA7] rounded-lg p-3 lg:p-8 relative flex flex-col h-full">
              <p className="text-xl lg:text-2xl font-medium text-white min-h-[50px] lg:min-h-[100px]">
                Sanitäranlagen reinigen {' '}
              </p>
              <Image
                src="/images/icon7-1.svg"
                alt="icon"
                width={506}
                height={345}
                className="w-full max-h-[73px]"
              />{' '}
            </div>
            {/* Feature 4 */}
            <div className="bg-[#4D8FA7] rounded-lg p-3 lg:p-8 relative flex flex-col h-full">
              <p className="text-xl lg:text-2xl font-medium text-white min-h-[50px] lg:min-h-[100px]">
                Glastüren und Spiegelreinigung{' '}
              </p>
              <Image
                src="/images/icon8.svg"
                alt="icon"
                width={506}
                height={345}
                className="w-full max-h-[73px]"
              />{' '}
            </div>
            {/* Feature 5 */}
            <div className="bg-[#4D8FA7] rounded-lg p-3 lg:p-8 relative flex flex-col h-full">
              <p className="text-xl lg:text-2xl font-medium text-white min-h-[50px] lg:min-h-[100px]">
                Küchenreinigung{' '}
              </p>
              <Image
                src="/images/icon9.svg"
                alt="icon"
                width={506}
                height={345}
                className="w-full max-h-[73px]"
              />{' '}
            </div>
            {/* Feature 6 */}
            <div className="bg-[#4D8FA7] rounded-lg p-3 lg:p-8 relative flex flex-col h-full">
              <p className="text-xl lg:text-2xl font-medium text-white min-h-[50px] lg:min-h-[100px]">
                Müllentsorgung{' '}
              </p>
              <Image
                src="/images/icon10.svg"
                alt="icon"
                width={506}
                height={345}
                className="w-full max-h-[73px]"
              />{' '}
            </div>
            {/* Feature 7 */}
            <div className="bg-[#4D8FA7] rounded-lg p-3 lg:p-8 relative flex flex-col h-full">
              <p className="text-xl lg:text-2xl font-medium text-white min-h-[50px] lg:min-h-[100px]">
                Bodenreinigung{' '}
              </p>
              <Image
                src="/images/icon11.svg"
                alt="icon"
                width={506}
                height={345}
                className="w-full max-h-[73px]"
              />{' '}
            </div>
            {/* Feature 8 */}
            <div className="bg-[#4D8FA7] rounded-lg p-3 lg:p-8 relative flex flex-col h-full">
              <p className="text-xl lg:text-2xl font-medium text-white min-h-[50px] lg:min-h-[100px]">
                Individuelle Reinigungswünsche{' '}
              </p>
              <Image
                src="/images/icon12.svg"
                alt="icon"
                width={506}
                height={345}
                className="w-full max-h-[73px]"
              />{' '}
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

      <section className="container px-5 lg:px-10 py-10 mb-[200px] lg:mb-[170px] flex justify-center">
        <div className="bg-[#B7D3DC] rounded-3xl text-center px-6 py-[85px] w-full">
          <h2 className="text-2xl md:text-5xl font-semibold text-gray-900">
            Kostenlose Probereinigung
          </h2>
          <p className="mt-2 text-base md:text-2xl text-gray-800">
            Spüren Sie die Reinheit – testen Sie es kostenlos und unverbindlich!
          </p>

          <button
            onClick={() => {
              /* откроется модалка */
            }}
            className="mt-10 inline-flex items-center gap-2 bg-[#4891A1] text-white text-lg md:text-2xl font-semibold py-3 px-7 rounded-full hover:bg-[#387a87] transition"
          >
            Kostenlos testen
            <img src="/images/mop.svg" alt="Icon" className="h-5 w-5" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};
export default VacationRentalCleaningPage;
