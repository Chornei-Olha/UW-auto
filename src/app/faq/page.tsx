'use client';
import React from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Accordion from '@/components/ui/Accordion';

import Image from 'next/image';
import type { Metadata } from 'next';

const FAQPage: React.FC = () => {
  const faqData = [
    {
      id: 1,
      question: '1. Welche Dienstleistungen bieten Sie an?',
      answer:
        'Wir bieten folgende Reinigungsservices an:\n\n• Wohnungsreinigung\n• Grundreinigung\n• Fensterreinigung\n• Umzugsreinigung\n• Büroreinigung\n• Polster- und Teppichreinigung\n• Industriereinigung',
      isExpanded: false,
    },
    {
      id: 2,
      question: '2. Muss ich eigene Reinigungsmittel bereitstellen?',
      answer:
        'Nein, wir bringen alle notwendigen Reinigungsmittel und Geräte mit. Unsere professionellen Reinigungsprodukte sind umweltfreundlich und effektiv.',
      isExpanded: false,
    },
    {
      id: 3,
      question: '3. Wie kann ich eine Reinigung buchen?',
      answer:
        'Sie können uns telefonisch unter +491734983416 kontaktieren, eine E-Mail an info@reinigungex.com senden oder unser Online-Buchungsformular verwenden.',
      isExpanded: false,
    },
    {
      id: 4,
      question: '4. Was kosten Ihre Dienstleistungen?',
      answer:
        'Die Preise variieren je nach Art und Umfang der Reinigung. Kontaktieren Sie uns für ein individuelles Angebot basierend auf Ihren spezifischen Anforderungen.',
      isExpanded: false,
    },
    {
      id: 5,
      question: '5. Arbeiten Sie auch an Wochenenden und Feiertagen?',
      answer:
        'Ja, wir bieten flexible Terminvereinbarungen an, einschließlich Wochenenden und Feiertagen, um Ihren Bedürfnissen gerecht zu werden.',
      isExpanded: false,
    },
    {
      id: 6,
      question: '6. Kann ich eine Buchung stornieren oder verschieben?',
      answer:
        'Ja, Buchungen können bis zu 24 Stunden vor dem vereinbarten Termin kostenfrei storniert oder verschoben werden.',
      isExpanded: false,
    },
    {
      id: 7,
      question: '7. Kann ich eine regelmäßige Reinigung buchen?',
      answer:
        'Selbstverständlich! Wir bieten regelmäßige Reinigungsservices an - wöchentlich, zweiwöchentlich oder monatlich, ganz nach Ihren Wünschen.',
      isExpanded: false,
    },
    {
      id: 8,
      question: '8. Wie kann ich die Dienstleistungen bezahlen?',
      answer:
        'Wir akzeptieren verschiedene Zahlungsmethoden: Barzahlung, Banküberweisung, EC-Karte und gängige Kreditkarten.',
      isExpanded: false,
    },
    {
      id: 9,
      question: '9. Gibt es eine Garantie für Ihre Dienstleistungen?',
      answer:
        'Ja, wir bieten eine Zufriedenheitsgarantie. Falls Sie mit unserer Arbeit nicht zufrieden sind, kommen wir kostenfrei zurück.',
      isExpanded: false,
    },
    {
      id: 10,
      question: '10. Beinhaltet die Reinigung auch Desinfektion?',
      answer:
        'Auf Wunsch führen wir auch Desinfektionsarbeiten durch, besonders wichtig in Zeiten erhöhter Hygieneanforderungen.',
      isExpanded: false,
    },
    {
      id: 11,
      question: '11. Kann ich eine Polsterreinigung separat buchen?',
      answer:
        'Ja, Polster- und Teppichreinigung können als separate Dienstleistung gebucht werden oder als Teil einer umfassenden Reinigung.',
      isExpanded: false,
    },
    {
      id: 12,
      question: '12. Arbeiten Sie nur in Dresden oder auch in anderen Städten?',
      answer:
        'Unser Haupteinsatzgebiet ist Dresden und Umgebung. Für andere Städte kontaktieren Sie uns bitte für eine individuelle Anfrage.',
      isExpanded: false,
    },
    {
      id: 13,
      question: '13. Haben Sie weitere Fragen?',
      answer:
        'Kontaktieren Sie uns gerne telefonisch unter +491734983416 oder per E-Mail an info@reinigungex.com. Unser Team steht Ihnen 24/7 zur Verfügung.',
      isExpanded: false,
    },
  ];
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-10 mb-[200px] lg:mb-[170px]">
        {/* FAQ Header */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-black mb-6">
            F.A.Q. – Häufig gestellte Fragen zu unse
          </h1>
          {/* First FAQ with expanded content */}
          <div className="mb-8">
            <div className="bg-white border-b border-t border-gray-200 pb-6">
              {/* Social sharing icons */}
              <div className="flex items-center space-x-4 mt-6">
                <a
                  href="https://www.facebook.com/sharer/sharer.php?u=YOUR_URL"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/img_component_1_black_900.svg"
                    alt="Facebook"
                    width={24}
                    height={24}
                    className="cursor-pointer hover:opacity-70"
                  />
                </a>

                <a
                  href="https://twitter.com/intent/tweet?url=YOUR_URL"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/img_component_1_black_900_24x24.svg"
                    alt="Twitter"
                    width={24}
                    height={24}
                    className="cursor-pointer hover:opacity-70"
                  />
                </a>

                <a
                  href="https://www.linkedin.com/shareArticle?mini=true&url=YOUR_URL"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/img_component_1_24x24.svg"
                    alt="LinkedIn"
                    width={24}
                    height={24}
                    className="cursor-pointer hover:opacity-70"
                  />
                </a>

                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    navigator.clipboard.writeText(window.location.href);
                    alert('Ссылка скопирована!');
                  }}
                >
                  <Image
                    src="/images/img_component_1_1.svg"
                    alt="Copy Link"
                    width={24}
                    height={24}
                    className="cursor-pointer hover:opacity-70"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqData.slice(0).map((faq) => (
            <Accordion
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
              defaultExpanded={faq.isExpanded}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default FAQPage;
