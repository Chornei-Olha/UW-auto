'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState<'UA' | 'IT'>('UA');
  const [collabOpen, setCollabOpen] = useState(false); // для выпадающего меню

  const toggleLang = () => {
    setLang((prev) => (prev === 'UA' ? 'IT' : 'UA'));
  };
  const router = useRouter();
  const [locale, setLocale] = useState<string>('');
  useEffect(() => {
    const cookieLocale = document.cookie
      .split('; ')
      .find((row) => row.startsWith('MYNEXTAPP_LOCALE='))
      ?.split('=')[1];
    if (cookieLocale) {
      setLocale(cookieLocale);
    } else {
      const browserLocale = navigator.language.slice(0, 2);
      setLocale(browserLocale);
      document.cookie = `MYNEXTAPP_LOCALE=${browserLocale};router.refresh()`;
    }
  }, [router]);

  const changeLocale = (newLocale: string) => {
    setLocale(newLocale);
    document.cookie = `MYNEXTAPP_LOCALE=${newLocale};`;
    router.refresh();
  };

  return (
    <header className="border-b shadow-sm">
      <div className="flex items-center justify-between py-5">
        {/* Лого */}
        <div className="flex items-center">
          <Image src="/images/logo.webp" alt="Senso Logo" width={133} height={55} priority />
        </div>

        {/* Десктоп меню по центру */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-700 mx-auto relative">
          <Link href="/" className="px-3 py-1 rounded-full bg-red-600 text-white">
            Головна
          </Link>
          <Link href="/products" className="hover:text-red-600">
            Продукція
          </Link>

          {/* Выпадающее меню Співпраця */}
          <div className="relative">
            <button
              className="flex items-center space-x-1 hover:text-red-600"
              onMouseEnter={() => setCollabOpen(true)}
              onMouseLeave={() => setCollabOpen(false)}
            >
              <span>Співпраця</span>
              <ChevronDown size={16} />
            </button>

            {collabOpen && (
              <div
                onMouseEnter={() => setCollabOpen(true)}
                onMouseLeave={() => setCollabOpen(false)}
                className="absolute top-full left-0 mt-2 w-48 bg-white border rounded shadow-lg z-50"
              >
                <Link href="/collab/partners" className="block px-4 py-2 hover:bg-red-100">
                  Партнери
                </Link>
                <Link href="/collab/dealers" className="block px-4 py-2 hover:bg-red-100">
                  Дилери
                </Link>
                <Link href="/collab/services" className="block px-4 py-2 hover:bg-red-100">
                  Сервіси
                </Link>
              </div>
            )}
          </div>

          <Link href="/contacts" className="hover:text-red-600">
            Контакти
          </Link>
        </nav>

        {/* Кнопка переключения языка (десктоп) */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => changeLocale('ua')}
            className={`border p-2 font-bold rounded-md text-sm ${locale === 'ua' && 'bg-red-500 text-white'}`}
          >
            UA
          </button>
          <button
            onClick={() => changeLocale('en')}
            className={`border p-2 font-bold rounded-md text-sm ${locale === 'en' && 'bg-red-500 text-white'}`}
          >
            EN
          </button>
        </div>
        {/* <div
          className="hidden md:block relative w-24 h-10 bg-gray-200 rounded-full cursor-pointer select-none"
          onClick={toggleLang}
        >
          <div
            className={`absolute top-0 w-1/2 h-full rounded-full bg-red-600 transition-all duration-300 ${
              lang === 'UA' ? 'left-0' : 'left-1/2'
            }`}
          ></div>
          <span
            className={`absolute left-0 w-1/2 h-full flex items-center justify-center text-sm font-medium transition-colors duration-300 ${
              lang === 'UA' ? 'text-white' : 'text-gray-700'
            }`}
          >
            UA
          </span>
          <span
            className={`absolute right-0 w-1/2 h-full flex items-center justify-center text-sm font-medium transition-colors duration-300 ${
              lang === 'IT' ? 'text-white' : 'text-gray-700'
            }`}
          >
            IT
          </span>
        </div> */}

        {/* Мобильная кнопка (бургер) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t">
          <div className="flex flex-col space-y-2 px-4 py-3">
            <Link
              href="/"
              className="px-3 py-2 rounded bg-red-600 text-white"
              onClick={() => setIsOpen(false)}
            >
              Головна
            </Link>
            <Link href="/products" onClick={() => setIsOpen(false)}>
              Продукція
            </Link>

            {/* Мобильное выпадающее меню */}
            <div>
              <button
                className="w-full flex justify-start items-center gap-5 hover:bg-gray-100 rounded"
                onClick={() => setCollabOpen(!collabOpen)}
              >
                <span>Співпраця</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform ${collabOpen ? 'rotate-180' : 'rotate-0'}`}
                />
              </button>
              {collabOpen && (
                <div className="flex flex-col pl-4 mt-1 space-y-1">
                  <Link href="/collab/partners" onClick={() => setIsOpen(false)}>
                    Партнери
                  </Link>
                  <Link href="/collab/dealers" onClick={() => setIsOpen(false)}>
                    Дилери
                  </Link>
                  <Link href="/collab/services" onClick={() => setIsOpen(false)}>
                    Сервіси
                  </Link>
                </div>
              )}
            </div>

            <Link href="/contacts" onClick={() => setIsOpen(false)}>
              Контакти
            </Link>

            {/* Кнопка переключения языка внутри мобильного меню */}
            <div className="pt-4 flex justify-center">
              <div
                className="relative w-24 h-10 bg-gray-200 rounded-full cursor-pointer select-none"
                onClick={toggleLang}
              >
                <div
                  className={`absolute top-0 w-1/2 h-full rounded-full bg-red-600 transition-all duration-300 ${
                    lang === 'UA' ? 'left-0' : 'left-1/2'
                  }`}
                ></div>
                <span
                  className={`absolute left-0 w-1/2 h-full flex items-center justify-center text-sm font-medium transition-colors duration-300 ${
                    lang === 'UA' ? 'text-white' : 'text-gray-700'
                  }`}
                >
                  UA
                </span>
                <span
                  className={`absolute right-0 w-1/2 h-full flex items-center justify-center text-sm font-medium transition-colors duration-300 ${
                    lang === 'IT' ? 'text-white' : 'text-gray-700'
                  }`}
                >
                  IT
                </span>
              </div>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
