'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function AboutIntro() {
  const t = useTranslations('AboutIntro');

  return (
    <section className="container mx-auto px-4 md:px-8 py-10 md:py-16 bg-black text-white rounded-xl">
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
          <h3 className="uppercase tracking-wide text-sm md:text-lg font-chakraPetch font-normal">
            {t('aboutIntroTitle')}
          </h3>
        </div>

        {/* 🔸 Основной текст */}
        <p className="text-base md:text-xl leading-relaxed whitespace-pre-line font-mulish font-light">
          {t('aboutIntroText')}
        </p>
      </motion.div>
    </section>
  );
}
