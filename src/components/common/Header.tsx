'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const t = useTranslations('Header');
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [menuOpen, setMenuOpen] = useState(false);

  const changeLocale = (newLocale: string) => {
    router.push(`/${newLocale}${pathname.replace(/^\/(ua|en)/, '')}`);
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="bg-black text-white py-3 px-6 my-5 mx-5 flex items-center justify-between font-inter relative rounded-[12px]">
      {/* ЛОГО */}
      <div className="flex items-center space-x-2">
        <Link href="/" className="flex items-center space-x-2" onClick={closeMenu}>
          <Image src="/images/logo.svg" alt="UW logo" width={110} height={50} />
          <Image src="/images/decorativeLogo.svg" alt="UW logo" width={47} height={53} />
        </Link>
      </div>

      {/* НАВИГАЦИЯ (desktop) */}
      <nav className="hidden md:flex space-x-6 text-sm uppercase tracking-wide">
        <Link href="/" className="hover:text-gray-400 transition">
          {t('menu1')}
        </Link>
        <Link href="/about" className="hover:text-gray-400 transition">
          {t('menu2')}
        </Link>
        <Link href="/clients" className="hover:text-gray-400 transition">
          {t('menu3')}
        </Link>
        <Link href="/warehouse" className="hover:text-gray-400 transition">
          {t('menu4')}
        </Link>
        <Link href="/contacts" className="hover:text-gray-400 transition">
          {t('menu5')}
        </Link>
      </nav>

      {/* ЯЗЫКИ + КНОПКА (desktop) */}
      <div className="hidden md:flex items-center space-x-4">
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
        <Link
          href="/consultation"
          className="bg-white text-black rounded-[12px] px-4 py-4 text-sm font-semibold hover:bg-gray-200 transition"
        >
          {t('button')}
        </Link>
      </div>

      {/* БУРГЕР КНОПКА */}
      <button
        className="md:hidden focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* МОБИЛЬНОЕ МЕНЮ */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-black flex flex-col items-center py-5 space-y-4 text-sm uppercase tracking-wide md:hidden z-50 border-t border-gray-800">
          <Link href="/" onClick={closeMenu} className="hover:text-gray-400 transition">
            {t('menu1')}
          </Link>
          <Link href="/about" onClick={closeMenu} className="hover:text-gray-400 transition">
            {t('menu2')}
          </Link>
          <Link href="/clients" onClick={closeMenu} className="hover:text-gray-400 transition">
            {t('menu3')}
          </Link>
          <Link href="/warehouse" onClick={closeMenu} className="hover:text-gray-400 transition">
            {t('menu4')}
          </Link>
          <Link href="/contacts" onClick={closeMenu} className="hover:text-gray-400 transition">
            {t('menu5')}
          </Link>

          <div className="flex space-x-2 text-xs mt-4">
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
            className="bg-white text-black rounded-full px-5 py-2 text-sm font-semibold hover:bg-gray-200 transition mt-3"
          >
            {t('button')}
          </Link>
        </div>
      )}
    </header>
  );
}
