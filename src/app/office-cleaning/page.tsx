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
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}

      {/* Why Choose Us Section */}
      <section className="container px-5 lg:px-10 mt-20">
        <div className="=mx-auto">
          <h2 className="text-4xl lg:text-5xl text-center font-semibold text-[#13263e] mb-16">
            Warum uns wählen?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col">
              {' '}
              <Card
                variant="feature"
                number="01"
                title="Über 100 betreute Ferienwohnungen in Dresden"
                className="relative min-h-[300px] lg:min-h-[400px]"
              >
                <div className="flex justify-center">
                  <Image
                    src="/images/img_clip_path_group_blue_gray_500.svg"
                    alt="Building icon"
                    width={110}
                    height={110}
                  />
                </div>
              </Card>
            </div>
            <div className="flex flex-col">
              <Card
                variant="feature"
                number="02"
                title="Zufriedenheitsgarantie: kostenlose Nachreinigung falls nötig"
                className="relative min-h-[300px] lg:min-h-[400px]"
              >
                <div className="flex justify-center">
                  <Image
                    src="/images/img_clip_path_group_black_900_90x73.svg"
                    alt="Guarantee icon"
                    width={110}
                    height={110}
                  />
                </div>
              </Card>
            </div>
            <div className="flex flex-col">
              <Card
                variant="feature"
                number="03"
                title="7 Tage die Woche verfügbar, auch an Feiertagen"
                className="relative min-h-[300px] lg:min-h-[400px]"
              >
                <div className="flex justify-center">
                  <Image
                    src="/images/img_clip_path_group_black_900_110x110.svg"
                    alt="24/7 icon"
                    width={110}
                    height={110}
                  />
                </div>
              </Card>
            </div>
            <div className="flex flex-col">
              <Card
                variant="feature"
                number="04"
                title="Geprüftes Personal & Versicherungsschutz für Ihr Eigentum"
                className="relative min-h-[300px] lg:min-h-[400px]"
              >
                <div className="flex justify-center">
                  <Image
                    src="/images/img_vector_blue_gray_500_37x38.svg"
                    alt="Security icon"
                    width={110}
                    height={110}
                  />
                </div>
              </Card>
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
              <p className="text-xl lg:text-2xl font-medium text-white mb-3 min-h-[72px] lg:min-h-[100px]">
                Staubsaugen{' '}
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-[#4D8FA7] rounded-lg p-3 lg:p-8 relative flex flex-col h-full">
              <div className="text-left mb-3"></div>
              <p className="text-xl lg:text-2xl font-medium text-white mb-3 min-h-[72px] lg:min-h-[100px]">
                Möbelreinigung{' '}
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-[#4D8FA7] rounded-lg p-3 lg:p-8 relative flex flex-col h-full">
              <p className="text-xl lg:text-2xl font-medium text-white mb-3 min-h-[72px] lg:min-h-[100px]">
                Sanitäranlagen reinigen {' '}
              </p>
            </div>
            {/* Feature 4 */}
            <div className="bg-[#4D8FA7] rounded-lg p-3 lg:p-8 relative flex flex-col h-full">
              <p className="text-xl lg:text-2xl font-medium text-white mb-3 min-h-[72px] lg:min-h-[100px]">
                Glastüren und Spiegelreinigung{' '}
              </p>
            </div>
            {/* Feature 5 */}
            <div className="bg-[#4D8FA7] rounded-lg p-3 lg:p-8 relative flex flex-col h-full">
              <p className="text-xl lg:text-2xl font-medium text-white mb-3 min-h-[72px] lg:min-h-[100px]">
                Küchenreinigung{' '}
              </p>
            </div>
            {/* Feature 6 */}
            <div className="bg-[#4D8FA7] rounded-lg p-3 lg:p-8 relative flex flex-col h-full">
              <p className="text-xl lg:text-2xl font-medium text-white mb-3 min-h-[72px] lg:min-h-[100px]">
                Müllentsorgung{' '}
              </p>
            </div>
            {/* Feature 7 */}
            <div className="bg-[#4D8FA7] rounded-lg p-3 lg:p-8 relative flex flex-col h-full">
              <p className="text-xl lg:text-2xl font-medium text-white mb-3 min-h-[72px] lg:min-h-[100px]">
                Bodenreinigung{' '}
              </p>
            </div>
            {/* Feature 8 */}
            <div className="bg-[#4D8FA7] rounded-lg p-3 lg:p-8 relative flex flex-col h-full">
              <p className="text-xl lg:text-2xl font-medium text-white mb-3 min-h-[72px] lg:min-h-[100px]">
                Individuelle Reinigungswünsche{' '}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="container px-5 lg:px-10 mt-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-semibold text-[#13263e] text-center mb-8">
            In 3 Schritten zum perfekten Reinigungsergebnis
          </h2>
          <p className="text-2xl text-black text-center mb-16">Wie funktioniert es?</p>
          <div className="flex flex-row justify-between">
            {' '}
            <p className="text-lg lg:text-2xl font-semibold text-[#131313] mb-4">
              Termin und Besichtigung vereinbaren
            </p>
            {/* <Image src="/images/img_battles_quote_2.png" alt="Quote" width={23} height={38} /> */}
            <p className="text-lg lg:text-2xl text-[#737373] text-right mb-4">
              {'\u201C'}Kontaktieren Sie Uns Und Vereinbaren
              <br />
              Sie Einen Termin Zur
              <br />
              Objektbesichtigung
              {'\u201E'}
            </p>
          </div>{' '}
          <div className="flex flex-col lg:flex-row items-center justify-center lg:items-start relative">
            {/* Левая часть */}
            <div className="mx-auto lg:ml-[120px] bg-[#4d8fa789] rounded-3xl py-[20px] lg:py-[80px] px-[20px] lg:px-[170px] flex items-center justify-center">
              <Image
                src="/images/img_battles_image_2.png"
                alt="Appointment booking"
                width={506}
                height={345}
                className="rounded-2xl w-full max-w-[506px]"
              />
            </div>

            {/* Правая часть */}
            <div className="mt-4 lg:mt-0 lg:absolute bg-transparent rounded-3xl py-[20px] lg:py-[80px] flex flex-col gap-4 lg:right-[-200px] items-center lg:items-end">
              <Image
                src="/images/img_battles_image_1.png"
                alt="Professional cleaning"
                width={506}
                height={345}
                className="rounded-2xl w-full max-w-[506px]"
              />

              <p className="text-gray-600 italic text-center lg:text-right">
                Wir Werden Dafür Sorgen, Dass
                <br />
                Es Immer Einwandfrei Ist
              </p>
            </div>
          </div>
          <div className="flex justify-between gap-4 mt-5 lg:mt-20">
            <p className="text-lg lg:text-2xl text-[#2c2c2c] uppercase">Sauberes Büro</p>
            <p className="text-lg lg:text-2xl text-[#2c2c2c] uppercase">leistungsfähi Ges Team</p>
          </div>
          <div className="flex justify-center space-x-4 mb-8">
            <Image src="/images/img_arrowbackios.svg" alt="Previous" width={20} height={20} />
            <Image src="/images/img_arrowforwardios.svg" alt="Next" width={20} height={20} />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
export default VacationRentalCleaningPage;
