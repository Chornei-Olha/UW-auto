'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function WarehouseRent() {
  const t = useTranslations('WarehouseRent');

  return (
    <section className="w-full py-16 md:py-24 bg-white text-black font-montserrat">
      <div className="max-w-7xl mx-auto px-6">
        {/* Верхний заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <p className="text-sm md:text-base uppercase tracking-wide text-gray-500">
            {t('subtitle')}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 uppercase">{t('title')}</h2>
        </motion.div>

        {/* Сетка */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Левая большая картинка */}
          <div className="relative w-full h-[300px] md:h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/images/warehouse-main.webp"
              alt="Warehouse building"
              fill
              className="object-cover"
            />
          </div>

          {/* Правая часть с преимуществами */}
          <div className="bg-neutral-900 text-white rounded-lg p-8 flex flex-col justify-center">
            <p className="uppercase text-sm text-gray-400 mb-2">{t('advantagesSubtitle')}</p>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
              {t('advantagesTitle')}
            </h3>

            <ul className="space-y-3 text-sm md:text-base">
              {t.raw('advantagesList').map((item: string, index: number) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="mt-1 w-1.5 h-1.5 bg-white rounded-full flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Нижняя левая карточка */}
          <div className="bg-neutral-900 text-white rounded-lg p-8">
            <p className="uppercase text-sm text-gray-400 mb-2">{t('locationSubtitle')}</p>
            <h4 className="text-lg md:text-xl font-bold mb-3 leading-snug">{t('locationTitle')}</h4>
            <p className="text-sm md:text-base">{t('locationText')}</p>
          </div>

          {/* Нижняя правая карточка */}
          <div className="bg-white text-black rounded-lg p-8 border border-gray-200">
            <p className="uppercase text-sm text-gray-600 mb-2">{t('rampsSubtitle')}</p>
            <h4 className="text-lg md:text-xl font-bold mb-3 leading-snug">{t('rampsTitle')}</h4>
            <p className="text-sm md:text-base text-gray-700">{t('rampsText')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
