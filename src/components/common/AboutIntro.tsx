'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function AboutIntro() {
  const t = useTranslations('AboutIntro');

  return (
    <section className="w-full bg-black text-white rounded-2xl py-10 md:py-14 px-6 md:px-10 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        {/* 🔸 Заголовок с линией */}
        <div className="flex items-center gap-3">
          <div className="w-[2px] h-6 bg-orange-500 rounded-full" />
          <h3 className="uppercase tracking-wide text-sm md:text-base font-light text-gray-300">
            {t('aboutIntroTitle')}
          </h3>
        </div>

        {/* 🔸 Основной текст */}
        <p className="text-base md:text-lg leading-relaxed font-light text-gray-100 whitespace-pre-line">
          {t('aboutIntroText')}
        </p>
      </motion.div>
    </section>
  );
}
