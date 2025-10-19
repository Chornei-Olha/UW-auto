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
  ];

  return (
    <section
      id="clients"
      className="container mx-auto px-4 md:px-8 py-10 md:py-16 relative w-full bg-white overflow-hidden"
    >
      {/* 🔸 Background Icon */}
      <Image
        src="/images/decorativeLogo.svg"
        alt="Background pattern"
        fill
        className="object-contain opacity-10 pointer-events-none select-none"
      />

      <div className="relative z-[2] px-6 md:px-10 grid md:grid-cols-2 gap-10">
        {/* 🔸 Left text block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col justify-start"
        >
          <p className="text-sm uppercase tracking-wider text-black mb-2 border-l-2 border-[#FF4D00] pl-2">
            {t('subtitle')}
          </p>
          <h2 className="text-left text-3xl md:text-4xl font-angry font-normal uppercase  mb-12">
            {t('title')}
          </h2>
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
                  <span className="flex items-center justify-center min-w-9 min-h-9 p-2 bg-white rounded-full border border-white/40 text-black text-lg font-light font-chakraPetch">
                    {step.id}
                  </span>
                  <h3 className="text-white text-lg md:text-xl font-semibold font-chakraPetch uppercase leading-tight">
                    {step.title}
                  </h3>
                </div>
                <p className="text-[#A5A5A5] text-sm md:text-base font-light font-mulish leading-relaxed">
                  {step.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
