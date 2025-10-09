'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function AuctionClients() {
  const t = useTranslations('AuctionClients');

  const steps = [
    {
      id: '01',
      title: t('step1.title'),
      text: t('step1.text'),
      image: '/images/bg-small-icon-1.webp',
    },
    {
      id: '02',
      title: t('step2.title'),
      text: t('step2.text'),
      image: '/images/bg-small-icon-2.webp',
    },
    {
      id: '03',
      title: t('step3.title'),
      text: t('step3.text'),
      image: '/images/bg-small-icon-3.webp',
    },
    {
      id: '04',
      title: t('step4.title'),
      text: t('step4.text'),
      image: '/images/bg-small-icon-4.webp',
    },
    {
      id: '05',
      title: t('step5.title'),
      text: t('step5.text'),
      image: '/images/bg-small-icon-5.webp',
    },
  ];

  return (
    <section className="relative w-full bg-white py-16 md:py-24 overflow-hidden">
      {/* 🔸 Background Icon */}
      <Image
        src="/images/bg-icon.webp"
        alt="Background pattern"
        fill
        className="object-contain opacity-10 pointer-events-none select-none"
      />

      <div className="relative z-[2] max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-10">
        {/* 🔸 Left text block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col justify-start"
        >
          <p className="text-sm uppercase tracking-wider text-gray-500 mb-2 border-l-2 border-[#FF4D00] pl-2">
            {t('subtitle')}
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-[#111] leading-snug">{t('title')}</h2>
        </motion.div>

        {/* 🔸 Right cards */}
        <div className="flex flex-col gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative w-full rounded-[10px] overflow-hidden min-h-[140px] sm:min-h-[160px] md:min-h-[180px] lg:min-h-[200px]"
            >
              {/* Background image for each card */}
              <Image src={step.image} alt={`Step ${step.id}`} fill className="object-cover" />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-[#111111]/75 z-[1]" />

              {/* Text content */}
              <div className="relative z-[2] p-6 flex flex-col justify-center h-full">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex items-center justify-center w-9 h-9 rounded-full border border-white/40 text-white text-sm font-semibold">
                    {step.id}
                  </span>
                  <h3 className="text-white text-lg md:text-xl font-semibold uppercase leading-tight">
                    {step.title}
                  </h3>
                </div>
                <p className="text-white/90 text-sm md:text-base leading-relaxed">{step.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
