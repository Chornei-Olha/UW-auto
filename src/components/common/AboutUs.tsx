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
    <section className="container mx-auto relative w-full bg-white py-16">
      {/* 🔹 Заголовок */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-3xl md:text-5xl font-bold uppercase font-inter mb-12"
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
              <div className="absolute inset-0 bg-black flex flex-col justify-center p-6 md:p-8 text-white">
                {/* полупрозрачная иконка */}
                <Image
                  src="/images/aboutUs-icon.svg"
                  alt="icon background"
                  fill
                  className="object-contain opacity-20 z-[1] scale-110"
                />

                {/* текстовый контент */}
                <div className="relative z-[2] max-w-[90%]">
                  <h3 className="text-lg md:text-xl font-semibold uppercase mb-3 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base font-light leading-relaxed text-gray-200">
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
