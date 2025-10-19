'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Users } from 'lucide-react';

const team = [
  {
    name: 'JACKSON COLE',
    profession: 'ПРОФЕСІЯ',
    image: '/images/team-1.webp',
  },
  {
    name: 'EVELYN PARKER',
    profession: 'ПРОФЕСІЯ',
    image: '/images/team-2.webp',
  },
  {
    name: 'LUCAS THOMPSON',
    profession: 'ПРОФЕСІЯ',
    image: '/images/team-3.webp',
  },
  {
    name: 'SOPHIA TAYLOR',
    profession: 'ПРОФЕСІЯ',
    image: '/images/team-4.webp',
  },
];

export default function TeamSection() {
  const t = useTranslations('Team');

  return (
    <section className="container mx-auto px-4 md:px-8 py-10 md:py-16 bg-black text-white relative overflow-hidden">
      {/* 🔸 Заголовок секции */}
      {/* <div className="max-w-7xl mx-auto mb-12 flex items-center gap-3">
        <Users size={36} className="text-white" />
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold uppercase"
        >
          {t('title')}
        </motion.h2>
      </div> */}

      {/* 🔸 Слайдер */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        className="max-w-7xl mx-auto"
      >
        {team.map((person, idx) => (
          <SwiperSlide key={idx}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative bg-black/70 overflow-hidden group"
            >
              {/* 📸 Фото */}
              <div className="relative w-full h-[400px] p-4">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* 🌈 Градиентный оверлей */}
                <div className="absolute inset-0">
                  <Image
                    src="/images/team-gradient.png"
                    alt="Gradient overlay"
                    fill
                    className="object-cover pointer-events-none"
                  />
                </div>

                {/* 📥 Тёмный слой для контраста */}
                <div className="absolute inset-0 bg-black/10" />
              </div>

              {/* 📄 Текстовый блок */}
              <div className="absolute bottom-0 left-0 w-full p-4 bg-black/60 backdrop-blur-sm flex flex-col">
                <h3 className="text-lg md:text-xl font-chakraPetch font-semibold uppercase">
                  {person.name}
                </h3>
                <p className="text-base md:text-sm font-chakraPetch font-normal uppercase">
                  {person.profession}
                </p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
