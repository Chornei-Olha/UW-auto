'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function Hero() {
  const t = useTranslations('Hero');

  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center text-white overflow-hidden">
      {/* 🔸 Фоновое изображение */}
      <Image
        src="/images/backgroundHero.webp"
        alt="Background car"
        fill
        className="object-cover brightness-[0.55]"
        priority
      />

      {/* 🔸 Лёгкий градиент для контраста */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-[1]" />

      {/* 🔸 Полупрозрачная надпись UW 20 7K */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 left-4 md:left-10 text-[22vw] md:text-[12vw] font-extrabold tracking-tight pointer-events-none select-none text-white/15 drop-shadow-[0_0_10px_rgba(255,255,255,0.1)] z-[2] uppercase"
      >
        UW 20 7K
      </motion.p>

      {/* 🔸 Основной контент */}
      <div className="relative z-[3] max-w-5xl px-6 text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-angry font-normal uppercase leading-tight mb-4"
        >
          {t('title1')}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-sm md:text-base font-montserrat font-light tracking-wide mb-6 text-gray-200 uppercase"
        >
          {t('subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <Link
            href="/consultation"
            className="bg-white text-black font-montserrat font-semibold rounded-full px-6 py-3 text-sm uppercase hover:bg-gray-200 transition"
          >
            {t('button')}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
