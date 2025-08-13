// components/Header.tsx
'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full border-b bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        {/* Лого */}
        <div className="flex items-center">
          <Image src="/images/logo.webp" alt="Senso Logo" width={100} height={40} priority />
        </div>

        {/* Десктоп меню */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-700">
          <Link href="/" className="px-3 py-1 rounded-full bg-red-600 text-white">
            Головна
          </Link>
          <Link href="/products" className="hover:text-red-600">
            Продукція
          </Link>
          <Link href="/partners" className="hover:text-red-600">
            Співпраця
          </Link>
          <Link href="/contacts" className="hover:text-red-600">
            Контакти
          </Link>
        </nav>

        {/* Мобильная кнопка */}
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
            <Link href="/partners" onClick={() => setIsOpen(false)}>
              Співпраця
            </Link>
            <Link href="/contacts" onClick={() => setIsOpen(false)}>
              Контакти
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
