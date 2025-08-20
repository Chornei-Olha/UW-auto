import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="footer" className="py-10 md:py-16 ">
      <p className="mb-10 text-gray-600 font-montserrat font-light">
        SENSO: сертифікована якість, <br />
        створена для професіоналів.{' '}
      </p>
      {/* Центральная часть футера */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Левая колонка */}
        <div className="gap-6 text-sm text-center md:text-left md:items-start flex flex-col items-center">
          <p className="font-semibold font-inter mb-1">Меню</p>
          <ul className="space-y-1 font-inter font-regular">
            <li>
              <Link href="/" className="hover:text-red-500 transition-colors">
                Головна
              </Link>
            </li>
            <li>
              <Link href="#slider1" className="hover:text-red-500 transition-colors">
                Продукція
              </Link>
            </li>
            <li>
              <Link href="/partnersPage" className="hover:text-red-500 transition-colors">
                Промисловим клієнтам
              </Link>
            </li>
            <li>
              <Link href="/dealersPage" className="hover:text-red-500 transition-colors">
                Дистриб’юторам та дилерам
              </Link>
            </li>
            <li>
              <Link href="/buyersPage" className="hover:text-red-500 transition-colors">
                Роздрібним покупцям
              </Link>
            </li>
            <li>
              <Link href="#footer" className="hover:text-red-500 transition-colors">
                Контакти
              </Link>
            </li>
          </ul>
        </div>

        {/* Центр */}
        <div className="flex flex-col items-center">
          <Image src="/images/logo.webp" alt="Senso logo" width={267} height={112} priority />
        </div>

        {/* Правая колонка */}
        <div className="text-sm">
          <p className="mb-2 font-semibold font-inter">Адреса:</p>
          <p className="mb-3 font-inter font-regular">
            Україна, м. Київ, вул. Лугова
            <br />
            ПН-ПТ: з 10:00 - 18:00
            <br />
            СБ-НД: з 10:00 - 14:00
          </p>
          <p className="my-3 font-semibold font-inter">Тел:</p>
          <a
            href="tel:+380445852108"
            className="text-blue-600 hover:underline font-inter font-regular"
          >
            +38 (044) 585 21 08
          </a>
          <br />
          <a
            href="tel:+380993413857"
            className="text-blue-600 hover:underline font-inter font-regular"
          >
            +38 (099) 341 38 57
          </a>

          <p className="my-3 font-semibold font-inter">E-mail:</p>
          <a
            href="mailto:info@senso-tape.com"
            className="text-blue-600 hover:underline font-inter font-regular"
          >
            info@senso-tape.com
          </a>
        </div>
      </div>
      <p className="text-xs mt-6 font-inter font-light">©2025</p>
      <p className="text-xs font-inter font-light">
        Created by{' '}
        <a
          href="https://impuls-studio.com.ua/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 hover:underline font-inter font-light"
        >
          Impuls Studio
        </a>
      </p>
    </footer>
  );
}
