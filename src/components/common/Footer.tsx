import Image from 'next/image';
import React from 'react';

export default function Footer() {
  return (
    <footer className="py-10 md:py-16 ">
      <p className="mb-10 text-gray-600">
        SENSO: сертифікована якість, <br />
        створена для професіоналів.{' '}
      </p>
      {/* Центральная часть футера */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Левая колонка */}
        <div className="gap-6 text-sm">
          <div>
            <p className="font-bold mb-2">Меню</p>
            <ul className="space-y-1">
              <li>Головна</li>
              <li>Продукція</li>
              <li>Співпраця</li>
              <li>Контакти</li>
            </ul>
          </div>
        </div>

        {/* Центр */}
        <div className="flex flex-col items-center">
          <Image src="/images/logo.webp" alt="Senso logo" width={267} height={112} priority />
        </div>

        {/* Правая колонка */}
        <div className="text-sm">
          <p className="font-bold">Адреса:</p>
          <p className="mb-2">
            м.Невідоме, вул. Майбутня 145, буд 16-А
            <br />
            Київська обл, 08000
            <br />
            ПН-ПТ: з 10:00 - 18:00
            <br />
            СБ-НД: з 10:00 - 14:00
          </p>
          <p className="font-bold">Тел:</p>
          <a href="tel:+380090900909" className="text-blue-600 hover:underline">
            +380(09)090-09-09
          </a>

          <p className="font-bold">E-mail:</p>
          <a href="mailto:email@google.com" className="text-blue-600 hover:underline">
            email@google.com
          </a>
        </div>
      </div>
      <p className="text-xs mt-6">©2025</p>
      <p className="text-xs">
        Created by{' '}
        <a
          href="https://impuls-studio.com.ua/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 hover:underline"
        >
          Impuls Studio
        </a>
      </p>
    </footer>
  );
}
