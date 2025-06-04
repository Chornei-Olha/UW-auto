'use client';
import React from 'react';
import Image from 'next/image';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';


import type { Metadata } from 'next';
export default function AboutPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section with Background Text */}
      <section className="relative min-h-screen bg-white overflow-hidden">
        {/* Large Background Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h1 className="text-[250px] font-bold text-[#4d8fa770] uppercase tracking-wider leading-[305px] select-none text-center">
            UBER UNS
          </h1>
        </div>
        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Content - Hero Image */}
            <div className="order-2 lg:order-1">
              <Image
                src="/images/img_rectangle_1628.png"
                alt="Professional cleaning team"
                width={1325}
                height={678}
                className="rounded-[20px] w-full h-auto object-cover"
              />
            </div>
            {/* Right Content - Main Title */}
            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <h1 className="text-6xl lg:text-8xl font-semibold text-[#13263e] mb-6 leading-tight">
                  Willkommen bei ReinEx
                </h1>
                <h2 className="text-4xl lg:text-5xl font-semibold text-[#13263e] leading-tight">
                  Ihr Partner für Reinheit!
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Description Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-2xl lg:text-3xl text-black leading-[53px] max-w-5xl mx-auto">
            ReinEx steht für professionelle Reinigungsdienstleistungen, die Sauberkeit und 
            Qualität auf höchstem Niveau garantieren. Wir sind Ihr verlässlicher Partner, wenn 
            es um Büroreinigung, Fensterreinigung, Polstermöbelpflege und Industriereinigung geht.
          </p>
        </div>
      </section>
      {/* Team Image Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0e2e03] via-[#0e2e037f] to-[#0e2e0300] rounded-[20px] z-10"></div>
            <Image
              src="/images/img_wowimage_professionalcleaningservicepersoncleaningoffice_1_1jpg.png"
              alt="Professional cleaning service team"
              width={1373}
              height={628}
              className="rounded-[20px] w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>
      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-medium text-black mb-8">
            Unsere Mission
          </h2>
          <p className="text-2xl lg:text-3xl font-medium text-black leading-7 max-w-5xl mx-auto">
            Unsere Mission ist es, Lebens- und Arbeitsräume sauberer, gesünder und
            angenehmer zu gestalten. Dabei setzen wir auf modernste Technologien und
            umweltfreundliche Reinigungsmittel.
          </p>
        </div>
      </section>
      {/* Company Details Section */}
      <section className="py-16 px-4 bg-[#f7fbfc]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div className="space-y-6">
              <p className="text-xl text-black leading-6">
                ReinEx steht für Reinheit, Qualität und Zuverlässigkeit. Mit einem klaren Fokus auf die Bedürfnisse
                unserer Kunden schaffen wir saubere, gesunde und einladende Räume. Unsere Dienstleistungen
                kombinieren modernste Technologien, umweltfreundliche Reinigungsmittel und die Expertise
                eines hochqualifizierten Teams, um stets beste Ergebnisse zu liefern.
              </p>
              <p className="text-base text-black leading-6 font-montserrat">
                Ob Büro, Zuhause oder Industrie – ReinEx ist Ihr verlässlicher Partner, wenn es um professionelle
                Reinigung geht. Wir passen unsere Lösungen individuell an Ihre Anforderungen an und sorgen
                dafür, dass Sauberkeit neu definiert wird.
              </p>
              <p className="text-base text-black leading-5 font-montserrat font-medium">
                Mit ReinEx wird Reinheit zu einer neuen Erfahrung!
              </p>
            </div>
            {/* Right Content - Service Cards */}
            <div className="space-y-8">
              {/* Background overlay */}
              <div className="bg-[#4d8fa784] p-8 rounded-lg">
                {/* Service Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Office Cleaning */}
                  <div className="text-center">
                    <div className="mb-4">
                      <Image
                        src="/images/img_margin.png"
                        alt="Office cleaning service"
                        width={286}
                        height={336}
                        className="w-full h-auto object-cover rounded-lg"
                      />
                    </div>
                    <div className="bg-[#f7fbfc] p-4 rounded-lg">
                      <h3 className="text-xl font-montserrat text-black">
                        Büroreinigung
                      </h3>
                    </div>
                  </div>
                  {/* Window Cleaning */}
                  <div className="text-center">
                    <div className="mb-4">
                      <Image
                        src="/images/img_listitem.png"
                        alt="Window cleaning service"
                        width={300}
                        height={407}
                        className="w-full h-auto object-cover rounded-lg"
                      />
                    </div>
                    <div className="bg-[#f7fbfc] p-4 rounded-lg">
                      <h3 className="text-xl font-montserrat text-black">
                        Fensterreinigung
                      </h3>
                    </div>
                  </div>
                  {/* Moving Cleaning */}
                  <div className="text-center">
                    <div className="mb-4">
                      <Image
                        src="/images/img_margin.png"
                        alt="Moving cleaning service"
                        width={286}
                        height={336}
                        className="w-full h-auto object-cover rounded-lg"
                      />
                    </div>
                    <div className="bg-[#f7fbfc] p-4 rounded-lg">
                      <h3 className="text-xl font-montserrat text-black">
                        Umzugsreinigung
                      </h3>
                    </div>
                  </div>
                  {/* Vacation Rental Cleaning */}
                  <div className="text-center md:col-span-3">
                    <div className="mb-4 max-w-sm mx-auto">
                      <Image
                        src="/images/img_margin.png"
                        alt="Vacation rental cleaning service"
                        width={286}
                        height={336}
                        className="w-full h-auto object-cover rounded-lg"
                      />
                    </div>
                    <div className="bg-white p-4 rounded-lg max-w-sm mx-auto">
                      <h3 className="text-xl font-montserrat text-black">
                        Ferienwohnungsreinigung
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}