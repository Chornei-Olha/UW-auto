'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false); // Закрыть меню при выборе пункта
  };

  return (
    <header className="container px-5 lg:px-10 bg-white shadow-sm mt-[35px] py-4 relative z-50">
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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className={`text-lg transition-colors ${
              pathname === '/'
                ? 'text-[#244754] font-semibold'
                : 'text-[#508FA8] hover:text-[#244754]'
            }`}
          >
            Home
          </Link>
          <div className="relative">
            {/* Кнопка-заголовок */}
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="text-lg text-[#508FA8] hover:text-[#244754] transition-colors flex items-center"
            >
              Dienstleistungen
              <Image
                src="/images/img_polygon_10.svg"
                alt="Dropdown"
                width={10}
                height={10}
                className={`ml-2 transition-transform ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {/* Выпадающее меню */}
            {isOpen && (
              <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md z-10 min-w-[220px]">
                <Link
                  href="/office-cleaning"
                  onClick={handleLinkClick}
                  className="block px-4 py-2 text-sm text-[#244754] hover:bg-gray-200"
                >
                  Büroreinigung
                </Link>
                <Link
                  href="/vacation-rental-cleaning"
                  onClick={handleLinkClick}
                  className="block px-4 py-2 text-sm text-[#244754] hover:bg-gray-200"
                >
                  Ferienwohnungsreinigung
                </Link>
                <Link
                  href="/window-cleaning"
                  onClick={handleLinkClick}
                  className="block px-4 py-2 text-sm text-[#244754] hover:bg-gray-200"
                >
                  Fensterreinigung
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/about"
            className={`text-lg transition-colors ${
              pathname === '/about'
                ? 'text-[#244754] font-semibold'
                : 'text-[#508FA8] hover:text-[#244754]'
            }`}
          >
            Über uns
          </Link>
          <Link
            href="/faq"
            className={`text-lg transition-colors ${
              pathname === '/faq'
                ? 'text-[#244754] font-semibold'
                : 'text-[#508FA8] hover:text-[#244754]'
            }`}
          >
            FAQs
          </Link>
          <Link
            href="#footer"
            className={`text-lg transition-colors ${
              pathname === '#footer'
                ? 'text-[#244754] font-semibold'
                : 'text-[#508FA8] hover:text-[#244754]'
            }`}
          >
            Kontakt
          </Link>
        </nav>

        {/* CTA Button (always visible) */}
        <div className="hidden md:flex items-center">
          <Button
            variant="primary"
            className="bg-gradient-to-r from-[#4d8fa7] to-[#508fa8] text-white px-6 py-3 rounded-[500px] font-semibold text-lg hover:shadow-lg transition-all"
          >
            Jetzt buchen
          </Button>
        </div>

        {/* Mobile Burger Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Image
              src="/images/icon-burger.gif"
              alt="Menu"
              width={28}
              height={28}
              className="text-[#508FA8]"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md rounded-b-xl mt-2 py-4 px-6">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-semibold text-[#508FA8] hover:text-[#4d8fa7] transition-colors"
            >
              Home
            </Link>
            {/* Dienstleistungen Dropdown (Mobile) */}
            <div>
              <button
                onClick={() => setIsMobileDropdownOpen((prev) => !prev)}
                className="flex justify-between items-center w-full text-lg text-[#508FA8] hover:text-[#4d8fa7] transition-colors"
              >
                Dienstleistungen
                <span
                  className={`transform transition-transform ${isMobileDropdownOpen ? 'rotate-180' : ''}`}
                >
                  ▼
                </span>
              </button>

              {isMobileDropdownOpen && (
                <div className="mt-2 ml-4 space-y-2">
                  <Link
                    href="/office-cleaning"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsMobileDropdownOpen(false);
                    }}
                    className="block text-sm text-[#244754] hover:text-[#4d8fa7]"
                  >
                    Büroreinigung
                  </Link>
                  <Link
                    href="/vacation-rental-cleaning"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsMobileDropdownOpen(false);
                    }}
                    className="block text-sm text-[#244754] hover:text-[#4d8fa7]"
                  >
                    Ferienwohnungsreinigung
                  </Link>
                  <Link
                    href="/window-cleaning"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsMobileDropdownOpen(false);
                    }}
                    className="block text-sm text-[#244754] hover:text-[#4d8fa7]"
                  >
                    Fensterreinigung
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/about"
              onClick={() => setIsMenuOpen(false)}
              className="text-lg text-[#508FA8] hover:text-[#4d8fa7] transition-colors"
            >
              Über uns
            </Link>
            <Link
              href="/faq"
              onClick={() => setIsMenuOpen(false)}
              className="text-lg text-[#508FA8] hover:text-[#4d8fa7] transition-colors"
            >
              FAQs
            </Link>
            <Link
              href="#footer"
              onClick={() => setIsMenuOpen(false)}
              className="text-lg text-[#508FA8] hover:text-[#4d8fa7] transition-colors"
            >
              Kontakt
            </Link>
            <Button
              variant="primary"
              className="bg-gradient-to-r from-[#4d8fa7] to-[#508fa8] text-white px-6 py-3 rounded-[500px] font-semibold text-lg hover:shadow-lg transition-all w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Jetzt buchen
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
