'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

interface InfoItem {
  title: string;
  text: string;
}

const CompanyOverview: FC = () => {
  const t = useTranslations('CompanyOverview');

  const items: InfoItem[] = [
    { title: t('experience.title'), text: t('experience.text') },
    { title: t('partners.title'), text: t('partners.text') },
    { title: t('services.title'), text: t('services.text') },
    { title: t('transparency.title'), text: t('transparency.text') },
    { title: t('wholesale.title'), text: t('wholesale.text') },
    { title: t('support.title'), text: t('support.text') },
  ];

  return (
    <section className="relative w-full bg-white">
      <div className="container mx-auto px-3 md:px-5 py-2 md:py-4">
        {/* 🔹 Заголовок */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-left text-3xl md:text-4xl font-angry font-normal uppercase  mb-12"
        >
          {t('title')}
        </motion.h2>

        {/* 🔹 Карточки */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-black text-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-lg md:text-xl font-chakraPetch font-semibold mb-3 relative pl-4 before:content-['|'] before:absolute before:left-0 before:top-0 before:text-[#B4B4B4]">
                {item.title}
              </h3>
              <p className="text-white text-sm md:text-base font-chakraPetch font-light leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
