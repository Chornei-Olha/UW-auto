'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

export default function Header() {
  const t = useTranslations('Header');
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [locale, setLocale] = useState<'ua' | 'en'>('ua');

  // 🧠 Читаем язык из cookie при загрузке
  useEffect(() => {
    const cookieLocale =
      document.cookie
        .split('; ')
        .find((row) => row.startsWith('MYNEXTAPP_LOCALE='))
        ?.split('=')[1] || 'ua';
    setLocale(cookieLocale as 'ua' | 'en');
  }, []);

  // 🔄 Смена языка и сохранение в cookie
  const changeLocale = (newLocale: 'ua' | 'en') => {
    setLocale(newLocale);
    document.cookie = `MYNEXTAPP_LOCALE=${newLocale}; path=/; max-age=31536000`; // 1 год
    router.refresh(); // обновляем серверные компоненты (новые переводы)
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="container my-3 py-4 px-5 bg-black text-white flex items-center justify-between relative rounded-[12px]">
      {/* ===== ЛОГО ===== */}
      <div className="flex items-center space-x-2">
        <Link href="/" className="flex items-center space-x-2" onClick={closeMenu}>
          <Image src="/images/logo.svg" alt="UW logo" width={110} height={50} />
          <Image src="/images/decorativeLogo.svg" alt="UW decor logo" width={47} height={53} />
        </Link>
      </div>

      {/* ===== НАВИГАЦИЯ (Desktop) ===== */}
      <nav className="hidden md:flex space-x-6 text-sm uppercase tracking-wide font-chakraPetch font-semibold">
        <Link href="/" className="hover:text-gray-400 transition">
          {t('menu1')}
        </Link>
        <Link href="#about" className="hover:text-gray-400 transition">
          {t('menu2')}
        </Link>
        <Link href="#clients" className="hover:text-gray-400 transition">
          {t('menu3')}
        </Link>
        <Link href="/rent" className="hover:text-gray-400 transition">
          {t('menu4')}
        </Link>
        <Link href="#contacts" className="hover:text-gray-400 transition">
          {t('menu5')}
        </Link>
      </nav>

      {/* ===== ЯЗЫКИ + КНОПКА (Desktop) ===== */}
      <div className="hidden md:flex items-center space-x-4 font-chakraPetch font-semibold">
        {/* Переключатели языков */}
        <div className="flex space-x-2 text-xs">
          <button
            onClick={() => changeLocale('ua')}
            className={`transition ${locale === 'ua' ? 'text-gray-300' : 'hover:text-gray-400'}`}
          >
            UA
          </button>
          <span>|</span>
          <button
            onClick={() => changeLocale('en')}
            className={`transition ${locale === 'en' ? 'text-gray-300' : 'hover:text-gray-400'}`}
          >
            ENG
          </button>
        </div>

        {/* Кнопка консультации */}
        <Link
          href="/consultation"
          className="bg-white text-black rounded-[12px] px-4 my-16 py-4 text-sm hover:bg-gray-200 transition font-montserrat font-semibold"
        >
          {t('button')}
        </Link>
      </div>

      {/* ===== БУРГЕР КНОПКА ===== */}
      <button
        className="md:hidden focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* ===== МОБИЛЬНОЕ МЕНЮ ===== */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-black flex flex-col items-center py-5 space-y-4 text-sm uppercase tracking-wide md:hidden z-50 border-t border-gray-800 font-chakraPetch font-semibold">
          <Link href="/" onClick={closeMenu} className="hover:text-gray-400 transition">
            {t('menu1')}
          </Link>
          <Link href="#about" onClick={closeMenu} className="hover:text-gray-400 transition">
            {t('menu2')}
          </Link>
          <Link href="#clients" onClick={closeMenu} className="hover:text-gray-400 transition">
            {t('menu3')}
          </Link>
          <Link href="/rent" onClick={closeMenu} className="hover:text-gray-400 transition">
            {t('menu4')}
          </Link>
          <Link href="#contacts" onClick={closeMenu} className="hover:text-gray-400 transition">
            {t('menu5')}
          </Link>

          {/* Языки (мобильная версия) */}
          <div className="flex space-x-2 text-xs mt-4 font-chakraPetch font-semibold">
            <button
              onClick={() => changeLocale('ua')}
              className={`transition ${locale === 'ua' ? 'text-gray-300' : 'hover:text-gray-400'}`}
            >
              UA
            </button>
            <span>|</span>
            <button
              onClick={() => changeLocale('en')}
              className={`transition ${locale === 'en' ? 'text-gray-300' : 'hover:text-gray-400'}`}
            >
              ENG
            </button>
          </div>

          <Link
            href="/consultation"
            onClick={closeMenu}
            className="bg-white text-black rounded-full px-5 py-2 text-sm hover:bg-gray-200 transition mt-3 font-montserrat font-semibold"
          >
            {t('button')}
          </Link>
        </div>
      )}
    </header>
  );
}
