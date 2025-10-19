'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function Hero() {
  const t = useTranslations('Hero');

  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center text-white overflow-hidden">
      {/* 🔸 Фоновое изображение */}
      <Image
        src="/images/backgroundHero.webp"
        alt="Background car"
        fill
        className="object-cover brightness-[0.55]"
        priority
      />
      {/* 🔸 Лёгкий градиент для контраста */}
      <div className="inset-0 bg-gradient-to-t from-black/20 via-black/20 to-transparent z-[1]" />{' '}
      {/* 🔸 Полупрозрачная надпись UW 20 7K */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-[-30px] sm:bottom-[-100px] mx-auto text-[80px] sm:text-[150px] md:text-[250px] font-chakraPetch font-bold tracking-tight pointer-events-none select-none text-white/15 drop-shadow-[0_0_10px_rgba(255,255,255,0.1)] z-[2] uppercase"
      >
        UW 20.7K
      </motion.p>
      <div className="container mx-auto px-4 md:px-8">
        {/* 🔸 Основной контент */}
        <div className="relative z-[3] max-w-4xl text-left">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-angry font-normal uppercase leading-normal mb-6"
          >
            {t('title1')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-sm md:text-base font-montserrat font-normal tracking-wide mb-20 uppercase "
          >
            <span className="text-red-600 pr-5">|</span>
            {t('subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <Link
              href="#consultation"
              className="bg-white text-black font-montserrat font-semibold rounded-[12px] px-4 py-4 text-sm uppercase hover:bg-gray-200 transition"
            >
              {t('button')}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
