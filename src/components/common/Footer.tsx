'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Building2, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer id="contacts" className="bg-[#121212] text-white relative">
      <Image
        src="/images/decorImage.png"
        alt="Background car"
        width={600}
        height={700}
        className="hidden sm:block object-cover brightness-[1] absolute sm:right-[50px] h-full"
        priority
      />
      <div className="container mx-auto px-3 md:px-5 py-10 md:py-16 grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-5 md:gap-16">
        {/* 1 row, col 1 — Contacts */}
        <div className="space-y-4">
          <p className="uppercase text-sm text-gray-400">{t('contactTitle')}</p>
          <p className="text-base text-gray-100 max-w-md">{t('contactText')}</p>

          <div className="mt-4 space-y-3 max-w-md">
            <div className="flex items-center gap-4 border border-white/10 p-4">
              <div className="p-2 bg-neutral-900 rounded-sm">
                <Building2 className="w-5 h-5" />
              </div>

              <a
                href="https://www.google.com/maps/place/%D0%BF%D1%80%D0%BE%D1%81%D0%BF.+%D0%9F%D0%BE%D0%B1%D0%B5%D0%B4%D1%8B,+5%D0%92,+%D0%9A%D0%B8%D0%B5%D0%B2,+02000/@50.4466199,30.4837022,17.18z/data=!4m6!3m5!1s0x40d4ce8c0e64e7f3:0x70b35789c906d19!8m2!3d50.446501!4d30.4863646!16s%2Fg%2F11l76vznk_?entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white hover:text-red-500 transition underline"
              >
                {t('address')}
              </a>
            </div>

            <div className="flex flex-col gap-4">
              {/* Телефон */}
              <a
                href="tel:+380685495498"
                className="flex items-center gap-4 border border-white/10 p-4 hover:border-white/30 transition"
              >
                <div className="p-2 bg-neutral-900 rounded-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-sm hover:underline">+38 (068) 549 54 98</span>
              </a>

              {/* Почта */}
              <a
                href="mailto:global.investment.ua@gmail.com"
                className="flex items-center gap-4 border border-white/10 p-4 hover:border-white/30 transition"
              >
                <div className="p-2 bg-neutral-900 rounded-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-sm uppercase hover:underline">
                  global.investment.ua@gmail.com
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* 1 row, col 2 — Navigation */}
        <div>
          <p className="uppercase text-sm text-gray-400">{t('navTitle')}</p>
          <ul className="mt-4 space-y-3 text-lg md:text-xl lg:text-2xl">
            <li>
              <Link href="/" className="text-lg hover:text-gray-300 transition">
                {t('navHome')}
              </Link>
            </li>
            <li>
              <Link href="#about" className="text-lg hover:text-gray-300 transition">
                {t('navAbout')}
              </Link>
            </li>
            <li>
              <Link href="#clients" className="text-lg hover:text-gray-300 transition">
                {t('navWholesale')}
              </Link>
            </li>
            <li>
              <Link href="/rent" className="text-lg hover:text-gray-300 transition">
                {t('navRent')}
              </Link>
            </li>
            <li>
              <Link href="#contacts" className="text-lg hover:text-gray-300 transition">
                {t('navContacts')}
              </Link>
            </li>
          </ul>
        </div>
        {/* П1 row, col 3 — Map */}
        <div>
          {' '}
          <div className="order-1 lg:order-2">
            <p className="uppercase text-sm font-chakraPetch font-semibold text-[20px] md:text-[34px] mt-5 md:mt-0 text-gray-400">
              {t('officeTitle')}
            </p>
            <div className="relative w-full h-[300px] mt-4 rounded-sm overflow-hidden border border-white/5">
              <Image src="/images/map.webp" alt="Map" fill className="object-cover" priority />
              <div className="absolute inset-0 bg-black/30" />
            </div>
            <div className="pt-8 space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-3">
                <Link href="/privacy" className="hover:text-white">
                  {t('privacy')}
                </Link>
                <span className="text-white/30">•</span>
                <Link href="/terms" className="hover:text-white">
                  {t('terms')}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 2 row, col 1-2 (объединены) */}
        {/* Левая большая секция UW */}
        <div className="lg:col-span-2 flex flex-col lg:min-h-[220px] order-2 lg:order-1">
          {/* Верхняя часть — UW (2/3) */}
          <div className="flex-[2] flex items-end lg:items-center">
            <div>
              <div className="text-[130px] sm:text-[180px] md:text-[230px] lg:text-[280px] font-chakraPetch font-bold leading-none tracking-tight">
                {t('uwTitle')}
              </div>
              <div className="text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] font-chakraPetch font-light text-[#A5A5A5] tracking-wider">
                {t('uwSubtitle')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
