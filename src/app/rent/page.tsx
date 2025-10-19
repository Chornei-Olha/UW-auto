'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import ContactForm from '../../components/common/ContactForm2';

export default function WarehouseRent() {
  const t = useTranslations('WarehouseRent');

  return (
    <>
      <Header />
      <section className="container mx-auto px-4 md:px-8 py-10 md:py-16 text-black">
        <div className="max-w-7xl mx-auto px-6">
          {/* Верхний заголовок */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-left mb-8"
          >
            <p className="text-sm uppercase tracking-wider text-black mb-2 border-l-2 border-[#FF4D00] pl-2">
              {t('subtitle')}
            </p>
            <h2 className="text-left text-3xl md:text-4xl font-angry font-normal uppercase mb-12">
              {t('title')}
            </h2>
          </motion.div>

          {/* Сетка */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row justify-between">
              {' '}
              {/* Левая большая картинка */}
              <div className="relative w-full h-[300px] md:h-[500px] overflow-hidden">
                <Image
                  src="/images/rent1.webp"
                  alt="Warehouse building"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Правая часть с преимуществами */}{' '}
              <div className="bg-neutral-900 text-white p-8 flex flex-col justify-center">
                <div className="flex flex-row gap-6 mb-6">
                  {' '}
                  <div className="w-1 h-4 bg-gray-300"></div>
                  <p className="uppercase text-sm mb-2 font-chakraPetch font-light ">
                    {t('advantagesSubtitle')}
                  </p>
                </div>
                <h3 className="text-2xl md:text-3xl font-chakraPetch font-semibold mb-4 leading-tight">
                  {t('advantagesTitle')}
                </h3>

                <ul className="space-y-3 text-sm md:text-base font-mulish font-light">
                  {t.raw('advantagesList').map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="mt-1 w-1.5 h-1.5 bg-white rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-4 items-stretch">
              {/* Нижняя левая карточка */}
              <div className="w-full md:w-1/3 bg-neutral-900 text-white p-8 flex flex-col justify-between h-[220px] md:h-[320px]">
                <div>
                  <div className="flex flex-row gap-6 mb-4">
                    <div className="w-1 h-4 bg-gray-300"></div>
                    <p className="uppercase text-sm mb-2 font-chakraPetch font-light">
                      {t('locationSubtitle')}
                    </p>
                  </div>
                  <h4 className="text-lg md:text-xl font-chakraPetch font-semibold mb-2 leading-snug uppercase">
                    {t('locationTitle')}
                  </h4>
                  <p className="text-sm md:text-base font-mulish font-light">{t('locationText')}</p>
                </div>
              </div>

              {/* Нижняя средняя карточка */}
              <div className="w-full md:w-1/3 bg-white text-black p-8 border border-gray-200 flex flex-col justify-between h-[220px] md:h-[320px]">
                <div>
                  <div className="flex flex-row gap-6 mb-4">
                    <div className="w-1 h-4 bg-gray-300"></div>
                    <p className="uppercase text-sm mb-2 font-chakraPetch font-light ">
                      {t('rampsSubtitle')}
                    </p>
                  </div>
                  <h4 className="text-lg md:text-xl font-chakraPetch font-semibold mb-2 leading-snug uppercase">
                    {t('rampsTitle')}
                  </h4>
                  <p className="text-sm md:text-base font-mulish font-light">{t('rampsText')}</p>
                </div>
              </div>

              {/* Нижняя правая карточка (теперь одинаковой высоты) */}
              <div className="relative w-full md:w-1/3 h-[220px] md:h-[320px] overflow-hidden">
                <Image
                  src="/images/rent2.webp"
                  alt="Warehouse interior"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactForm />
      <Footer />
    </>
  );
}
