'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import emailjs from '@emailjs/browser';
import { CheckCircle } from 'lucide-react';

export default function ContactForm2() {
  const t = useTranslations('ContactForm2');

  // 🌍 Список стран
  const countries = [
    { code: '+380', name: 'Україна', flag: '/images/flag_ua.png' },
    // { code: '+48', name: 'Polska', flag: '/images/flag_pl.png' },
    // { code: '+49', name: 'Deutschland', flag: '/images/flag_de.png' },
  ];

  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  });
  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState(false);

  // 📤 Отправка формы
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setSuccess(false);

    try {
      await emailjs.send(
        'service_1q1cf0j',
        'template_n4h055v',
        {
          name: formData.name,
          phone: `${selectedCountry.code} ${formData.phone}`,
        },
        'TDwuaevxJHj0syPLP'
      );

      setSuccess(true);
      setFormData({ name: '', phone: '' });
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      console.error('EmailJS Error:', err);
    } finally {
      setIsSending(false);
    }
  };

  // 🔢 Форматирование номера
  const formatPhoneNumber = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 9);
    let formatted = '';

    if (digits.length > 0) formatted = '(' + digits.slice(0, 2);
    if (digits.length >= 2) formatted += ') ' + digits.slice(2, 5);
    if (digits.length >= 5) formatted += '-' + digits.slice(5, 7);
    if (digits.length >= 7) formatted += '-' + digits.slice(7, 9);

    return formatted;
  };

  // 📞 Обработчик ввода
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'name') {
      if (value.length > 50) return;
      setFormData({ ...formData, name: value });
    }

    if (name === 'phone') {
      setFormData({ ...formData, phone: formatPhoneNumber(value) });
    }
  };

  return (
    <section
      id="consultation2"
      className="container my-2 md:my-4 relative h-[736px] flex items-center justify-center text-white"
    >
      {/* Обертка для фона */}
      <div className="relative w-full h-full rounded-xl overflow-hidden mx-3 md:mx-5 my-2 md:my-4">
        {/* Фон */}
        <Image
          src="/images/CTA-Banner.webp"
          alt="Car background"
          fill
          className="object-cover brightness-[0.65]"
          priority
        />

        {/* Градиент */}
        <Image
          src="/images/form-gradient.png"
          alt="Overlay gradient"
          fill
          className="object-cover opacity-90 z-[1] pointer-events-none select-none"
          priority
        />

        {/* Контент */}
        <div className="relative z-[3] max-w-6xl w-full mx-auto flex-col md:flex-row gap-10 p-6 h-full flex items-center justify-center">
          {/* Текст */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 text-center md:text-left"
          >
            <h2 className="text-3xl md:text-4xl font-angry uppercase mb-6 drop-shadow-lg">
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
            className="md:w-1/2 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 flex flex-col gap-4 w-full max-w-md mx-auto relative"
          >
            {/* Имя */}
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t('name')}
              required
              className="w-full rounded-xl bg-transparent border border-white/30 px-3 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-white transition"
            />

            {/* Телефон */}
            <div className="flex items-center gap-2 w-full">
              {/* Селектор страны */}
              <div className="flex items-center gap-1 bg-white/10 border border-white/20 rounded-xl px-3 py-3 shrink-0">
                <Image
                  src={selectedCountry.flag}
                  alt={selectedCountry.name}
                  width={20}
                  height={14}
                  className="w-[20px] h-[14px]"
                />
                <select
                  value={selectedCountry.code}
                  onChange={(e) => {
                    const country = countries.find((c) => c.code === e.target.value);
                    if (country) setSelectedCountry(country);
                  }}
                  className="bg-transparent text-sm text-white focus:outline-none"
                >
                  {countries.map((c) => (
                    <option key={c.code} value={c.code} className="text-black">
                      {c.code}
                    </option>
                  ))}
                </select>
              </div>

              {/* Поле номера */}
              <input
                type="tel"
                name="phone"
                placeholder="(99) 999-99-99"
                value={formData.phone}
                onChange={handleChange}
                inputMode="numeric"
                maxLength={15}
                required
                className="flex-1 min-w-0 rounded-xl bg-transparent border border-white/30 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white transition font-mono tracking-wide"
              />
            </div>

            {/* Кнопка */}
            <button
              type="submit"
              disabled={isSending}
              className="bg-white text-black font-mulish font-normal rounded-xl py-3 mt-2 hover:bg-gray-200 transition disabled:opacity-60"
            >
              {isSending ? t('sending') : t('send')}
            </button>
          </motion.form>
        </div>

        {/* 🌟 Модалка благодарности */}
        <AnimatePresence>
          {success && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="bg-gradient-to-br from-green-600/80 to-green-400/90 text-white rounded-3xl shadow-2xl p-8 flex flex-col items-center justify-center text-center max-w-sm w-[90%]"
              >
                <CheckCircle size={60} className="text-white mb-4 drop-shadow-lg" />
                <h3 className="text-2xl font-angry mb-2">{t('thankYouTitle') || 'Дякуємо!'}</h3>
                <p className="font-mulish text-sm mb-6">
                  {t('thankYouMessage') ||
                    'Ваш запит успішно надіслано. Ми зв’яжемося з вами найближчим часом.'}
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="bg-white text-green-600 font-semibold rounded-xl px-6 py-2 hover:bg-gray-100 transition"
                >
                  OK
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
