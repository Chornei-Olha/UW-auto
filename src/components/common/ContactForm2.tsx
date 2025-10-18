'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import emailjs from '@emailjs/browser';

export default function ContactForm2() {
  const t = useTranslations('ContactForm2');

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  });

  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setSuccess(false);

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          name: formData.name,
          phone: formData.phone,
        },
        'YOUR_PUBLIC_KEY'
      );
      setSuccess(true);
      setFormData({ name: '', phone: '' });
    } catch (err) {
      console.error('EmailJS Error:', err);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="container mx-auto px-4 md:px-8 py-10 md:py-16 my-4 md:my-8 relative h-[736px] flex items-center justify-center overflow-hidden text-white rounded-xl">
      {/* 🔸 Основное фоновое изображение */}
      <Image
        src="/images/CTA-Banner.webp"
        alt="Car driving"
        fill
        className="object-cover brightness-[0.65]"
        priority
      />

      {/* 🔸 Поверх него накладывается изображение-тінь (shadow layer) */}
      <Image
        src="/images/form-gradient.png" // 👈 сюда положи файл тіні
        alt="Dark overlay shadow"
        fill
        className="object-cover opacity-90 z-[1] pointer-events-none select-none"
        priority
      />

      {/* 🔸 Контент */}
      <div className="relative z-[3] max-w-6xl w-full px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Текст */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-angry font-normal uppercase mb-6 drop-shadow-lg">
            {t('title1')} <br /> {t('title2')}
          </h2>
          <p className="text-sm md:text-base font-mulish font-light leading-relaxed max-w-md mx-auto md:mx-0 drop-shadow-md">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Форма */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="md:w-1/2 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex flex-col gap-4 w-full max-w-md mx-auto"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={t('name')}
            required
            className="w-full rounded-xl bg-transparent border border-white/30 px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-white transition"
          />

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+38 (___) ___-__-__"
            required
            className="w-full rounded-xl bg-transparent border border-white/30 px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-white transition"
          />

          <button
            type="submit"
            disabled={isSending}
            className="bg-white text-black font-mulish font-normal rounded-xl py-3 mt-2 hover:bg-gray-200 transition"
          >
            {isSending ? t('sending') : t('send')}
          </button>

          {success && <p className="text-green-400 text-sm mt-2">{t('success')}</p>}
        </motion.form>
      </div>
    </section>
  );
}
