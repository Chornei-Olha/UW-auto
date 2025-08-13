// components/Footer.tsx
import Image from 'next/image';
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white text-black py-10">
      {/* Email */}
      <div className="text-center mb-10">
        <a href="mailto:email@google.com" className="text-3xl md:text-5xl font-light underline">
          email@google.com
        </a>
      </div>

      {/* Центральная часть футера */}
      <div className="container mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Левая колонка */}
        <div className="text-sm">
          <p className="mb-4 text-gray-600">
            Home is more than furniture; <br />
            it’s a sanctuary for the soul.
          </p>
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
          <p>+380(09)090-09-09</p>
        </div>

        {/* Центр */}
        <div className="flex flex-col items-center">
          <Image src="/images/logo.webp" alt="Senso logo" width={150} height={60} priority />
          <p className="text-xs mt-6">©2025</p>
        </div>

        {/* Правая колонка */}
        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <p className="font-bold mb-2">All Products</p>
            <ul className="space-y-1">
              <li>Seating</li>
              <li>Seating</li>
              <li>Seating</li>
              <li>Seating</li>
            </ul>
          </div>
          <div>
            <p className="font-bold mb-2">About Us</p>
            <ul className="space-y-1">
              <li>Seating</li>
              <li>Seating</li>
              <li>Seating</li>
              <li>Seating</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
