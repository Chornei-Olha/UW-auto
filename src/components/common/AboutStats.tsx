'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function AboutStats() {
  const t = useTranslations('AboutStats');

  const stats = [
    {
      title: t('item1.title'),
      text: t('item1.text'),
    },
    {
      title: t('item2.title'),
      text: t('item2.text'),
    },
    {
      title: t('item3.title'),
      text: t('item3.text'),
    },
  ];

  return (
    <section className="py-20 bg-white text-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            {/* Красная линия + заголовок */}
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-1 h-4 bg-red-500"></div>
              <p className="text-xs uppercase tracking-wide text-gray-800 font-semibold">
                {item.title}
              </p>
            </div>

            {/* Текст */}
            <p className="text-gray-600 text-sm md:text-base font-light leading-relaxed max-w-sm">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
