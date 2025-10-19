'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function AboutUs() {
  const t = useTranslations('AboutUs');

  // 🔸 8 карточек (точно как в дизайне)
  const items = [
    { type: 'image', image: '/images/aboutUs-1.webp' },
    { type: 'text', title: t('honestyTitle'), text: t('honestyText') },
    { type: 'image', image: '/images/aboutUs-2.webp' },
    { type: 'text', title: t('legalityTitle'), text: t('legalityText') },
    { type: 'text', title: t('experienceTitle'), text: t('experienceText') },
    { type: 'image', image: '/images/aboutUs-3.webp' },
    { type: 'text', title: t('fixedPriceTitle'), text: t('fixedPriceText') },
    { type: 'image', image: '/images/aboutUs-4.webp' },
  ];

  return (
    <section
      id="about"
      className="container mx-auto px-4 md:px-8 pt-10 md:pt-16 pb-4 md:pb-8 relative"
    >
      {/* 🔹 Заголовок */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-left text-3xl md:text-4xl font-angry font-normal uppercase  mb-12"
      >
        {t('title')} <span className="text-black">UNIVERSAL WAREHOUSE</span>
      </motion.h2>

      {/* 🔹 Сетка 4×2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-2 w-full">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="relative w-full aspect-[1/1] overflow-hidden !rounded-none"
          >
            {item.type === 'image' ? (
              <Image
                src={item.image}
                alt="about image"
                fill
                className="object-cover"
                priority={idx < 2}
              />
            ) : (
              <div className="absolute inset-0 bg-black flex flex-col justify-top p-3 md:p-5 text-white">
                {/* полупрозрачная иконка */}
                <Image
                  src="/images/aboutUs-icon.svg"
                  alt="icon background"
                  fill
                  className="object-contain opacity-20 z-[1] scale-110"
                />

                {/* текстовый контент */}
                <div className="relative p-5 max-w-full flex flex-col items-start justify-center sm:justify-start">
                  <h3 className="text-lg md:text-xl font-normal font-angry uppercase mb-4 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base font-light font-mulish leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
