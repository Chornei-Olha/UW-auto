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
      <section className="relative overflow-hidden">
        {/* Large Background Text */}
        <h2 className="text-[250px] font-bold text-[#4d8fa770] uppercase tracking-wider leading-[305px] select-none text-center">
          UBER UNS
        </h2>
        {/* Content Container */}
        <div className="relative z-10 mx-auto px-3 py-16 text-center">
          <div className="absolute space-y-8 -top-[130px] left-1/2 transform -translate-x-1/2">
            <h2 className="text-4xl lg:text-7xl font-semibold text-[#13263e] leading-tight">
              Willkommen bei ReinEx
            </h2>
            <h2 className="text-4xl lg:text-7xl font-semibold text-[#13263e] leading-tight">
              Ihr Partner für Reinheit!
            </h2>
          </div>
        </div>
      </section>
      <section className="container px-5 lg:px-10 py-5">
        <div className="mx-auto">
          <div className="relative">
            <div className="absolute inset-0 z-10"></div>
            <Image
              src="/images/img_rectangle_1628.png"
              alt="Professional cleaning team"
              width={1373}
              height={628}
              className="rounded-[20px] w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>
      {/* Description Section */}
      <section className="container px-5 lg:px-10 py-5">
        <div className="mx-auto text-center">
          <p className="text-lg lg:text-3xl text-black max-w-6xl text-left lg:text-center">
            ReinEx steht für professionelle Reinigungsdienstleistungen, die Sauberkeit und Qualität
            auf höchstem Niveau garantieren. Wir sind Ihr verlässlicher Partner, wenn es um
            Büroreinigung, Fensterreinigung, Polstermöbelpflege und Industriereinigung geht.
          </p>
        </div>
      </section>

      {/* Team Image Section */}
      <section className="container px-5 lg:px-10 py-5">
        <div className="mx-auto">
          <div className="relative">
            <div className="absolute inset-0 z-10"></div>
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
      <section className="container px-5 lg:px-10 py-7">
        <div className="mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-medium text-black mb-8">Unsere Mission</h2>
          <p className="text-lg lg:text-3xl font-medium text-black leading-7 max-w-5xl mx-auto">
            Unsere Mission ist es, Lebens- und Arbeitsräume sauberer, gesünder und angenehmer zu
            gestalten. Dabei setzen wir auf modernste Technologien und umweltfreundliche
            Reinigungsmittel.
          </p>
        </div>
      </section>
      {/* Company Details Section */}
      <section className="bg-[#F7FBFC]">
        <div className="container px-5 lg:px-10 py-5 pb-40">
          <div className="space-y-6 max-w-5xl ml-0">
            <p className="text-xl text-black leading-6">
              ReinEx steht für Reinheit, Qualität und Zuverlässigkeit. Mit einem klaren Fokus auf
              die Bedürfnisse unserer Kunden schaffen wir saubere, gesunde und einladende Räume.
              Unsere Dienstleistungen kombinieren modernste Technologien, umweltfreundliche
              Reinigungsmittel und die Expertise eines hochqualifizierten Teams, um stets beste
              Ergebnisse zu liefern.
            </p>
            <p className="text-base text-black leading-6 font-montserrat">
              Ob Büro, Zuhause oder Industrie – ReinEx ist Ihr verlässlicher Partner, wenn es um
              professionelle Reinigung geht. Wir passen unsere Lösungen individuell an Ihre
              Anforderungen an und sorgen dafür, dass Sauberkeit neu definiert wird.
            </p>
            <p className="text-base text-black leading-5 font-montserrat font-medium">
              Mit ReinEx wird Reinheit zu einer neuen Erfahrung!
            </p>
          </div>
          <div className="bg-[#4d8fa784] grid grid-cols-2 lg:grid-cols-4 px-8 py-20 gap-5 mt-20">
            {/* Office Cleaning */}
            <div className="flex flex-col text-center">
              <div>
                <Image
                  src="/images/img_margin4.png"
                  alt="Office cleaning service"
                  width={286}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="bg-[#f7fbfc] p-4">
                <h3 className="text-sm lg:text-xl font-montserrat text-black">Büroreinigung</h3>
              </div>
            </div>
            {/* Window Cleaning */}
            <div className="flex flex-col text-center">
              <div>
                <Image
                  src="/images/img_margin2.png"
                  alt="Window cleaning service"
                  width={286}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="bg-[#f7fbfc] p-4">
                <h3 className="text-sm lg:text-xl font-montserrat text-black">Fensterreinigung</h3>
              </div>
            </div>
            {/* Moving Cleaning */}
            <div className="flex flex-col text-center">
              <div>
                <Image
                  src="/images/img_margin3.png"
                  alt="Moving cleaning service"
                  width={286}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="bg-[#f7fbfc] p-4">
                <h3 className="text-sm lg:text-xl font-montserrat text-black">Umzugsreinigung</h3>
              </div>
            </div>
            {/* Vacation Rental Cleaning */}
            <div className="flex flex-col text-center">
              <div>
                <Image
                  src="/images/img_margin4.png"
                  alt="Vacation rental cleaning service"
                  width={286}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="bg-white p-4">
                <h3 className="text-sm lg:text-xl font-montserrat text-black">
                  Ferienwohnungsreinigung
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
