'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Building2, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="w-full bg-black text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8 lg:grid-cols-3 lg:grid-rows-2">
        {/* 1 row, col 1 — Contacts */}
        <div className="space-y-4">
          <p className="uppercase text-sm text-gray-400">{t('contactTitle')}</p>
          <p className="text-base text-gray-100 max-w-md">{t('contactText')}</p>

          <div className="mt-4 space-y-3 max-w-md">
            <div className="flex items-center gap-4 border border-white/10 p-4">
              <div className="p-2 bg-neutral-900 rounded-sm">
                <Building2 className="w-5 h-5" />
              </div>
              <span className="text-sm">{t('address')}</span>
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
          <ul className="mt-4 space-y-3">
            <li>
              <Link href="/" className="text-lg hover:text-gray-300 transition">
                {t('navHome')}
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-lg hover:text-gray-300 transition">
                {t('navAbout')}
              </Link>
            </li>
            <li>
              <Link href="/wholesale" className="text-lg hover:text-gray-300 transition">
                {t('navWholesale')}
              </Link>
            </li>
            <li>
              <Link href="/rent" className="text-lg hover:text-gray-300 transition">
                {t('navRent')}
              </Link>
            </li>
            <li>
              <Link href="/contacts" className="text-lg hover:text-gray-300 transition">
                {t('navContacts')}
              </Link>
            </li>
          </ul>
        </div>

        {/* 1 row, col 3 — Office (map) */}
        <div>
          <p className="uppercase text-sm text-gray-400">{t('officeTitle')}</p>
          <div className="relative w-full h-40 mt-4 rounded-sm overflow-hidden border border-white/5">
            <Image src="/images/map.webp" alt="Map" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-black/30" />
          </div>
        </div>

        {/* 2 row, col 1-2 (объединены) */}
        <div className="lg:col-span-2 flex flex-col lg:min-h-[220px]">
          {/* Верхняя часть — UW (2/3) */}
          <div className="flex-[2] flex items-end lg:items-center">
            <div>
              <div className="text-7xl md:text-8xl lg:text-[160px] font-chakraPetch font-bold leading-none tracking-tight">
                {t('uwTitle')}
              </div>
              <div className="mt-2 text-sm md:text-base text-gray-400 tracking-wider">
                {t('uwSubtitle')}
              </div>
            </div>
          </div>

          {/* Нижняя треть — разделена на 2 колонки */}
          <div className="flex-[1] mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2 items-start">
            {/* левый — Privacy / Terms / copyright */}
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-3">
                <Link href="/privacy" className="hover:text-white">
                  {t('privacy')}
                </Link>
                <span className="text-white/30">•</span>
                <Link href="/terms" className="hover:text-white">
                  {t('terms')}
                </Link>
              </div>

              <div className="text-xs text-gray-500">{t('copyrightLine')}</div>
            </div>

            {/* правый — company statement */}
            <div className="text-sm text-gray-400">{t('companyStatement')}</div>
          </div>
        </div>

        {/* 2 row, col 3 — Media */}
        {/* <div>
          <p className="uppercase text-sm text-gray-400">{t('mediaTitle')}</p>
          <ul className="mt-4 space-y-3">
            {[
              { label: 'LinkedIn', href: '#' },
              { label: 'Instagram', href: '#' },
              { label: 'YouTube', href: '#' },
              { label: 'Twitter', href: '#' },
              { label: 'Email', href: '#' },
            ].map((item, i) => (
              <li key={i}>
                <Link
                  href={item.href}
                  target="_blank"
                  className="flex items-center gap-2 hover:text-gray-300 transition text-lg"
                >
                  {item.label}
                  <span className="text-sm opacity-60">↗</span>
                </Link>
              </li>
            ))}
          </ul>
        </div> */}
      </div>
    </footer>
  );
}
