'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/ui/Button';

const Header: React.FC = () => {
  return (
    <header className="container px-5 lg:px-10 bg-white shadow-sm mt-[35px] py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/images/img_reinex_name.png"
              alt="ReinEx Logo"
              width={153}
              height={51}
              className="h-12 w-auto"
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className="text-lg font-semibold text-[#508FA8] hover:text-[#4d8fa7] transition-colors"
          >
            Home
          </Link>
          <div className="relative group">
            <button className="text-lg text-[#508FA8] hover:text-[#4d8fa7] transition-colors flex items-center">
              Dienstleistungen
              <Image
                src="/images/img_polygon_10.svg"
                alt="Dropdown"
                width={10}
                height={10}
                className="ml-2"
              />
            </button>
          </div>
          <Link
            href="/about"
            className="text-lg text-[#508FA8] hover:text-[#4d8fa7] transition-colors"
          >
            Über uns
          </Link>
          <Link
            href="/faq"
            className="text-lg text-[#508FA8] hover:text-[#4d8fa7] transition-colors"
          >
            FAQs
          </Link>
          <Link
            href="/contact"
            className="text-lg text-[#508FA8] hover:text-[#4d8fa7] transition-colors"
          >
            Kontakt
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="flex items-center">
          <Button
            variant="primary"
            className="bg-gradient-to-r from-[#4d8fa7] to-[#508fa8] text-white px-6 py-3 rounded-[500px] font-semibold text-lg hover:shadow-lg transition-all"
          >
            Jetzt buchen
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
