'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ServiceForm from '@/components/common/ServiceForm';

const Footer: React.FC = () => {
  const [openForm, setOpenForm] = useState(false);

  return (
    <footer id="footer" className="bg-[#13263e] text-white pb-[35px] min-h-[347px] lg:mt-[85px]">
      <div className="relative">
        {' '}
        {/* Contact Section */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-1/4 container px-5 lg:px-10 bg-[#4d8fa7] py-9 rounded-[50px] lg:rounded-[500px] ">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-5">
            <div>
              <h2 className="text-center text-xl lg:text-5xl font-semibold text-white">
                Weitere Informationen oder Hilfe?
              </h2>
            </div>
            <div>
              <button
                onClick={() => setOpenForm(true)}
                className="bg-white text-[#4d8fa7] px-[70px] py-[10px] lg:px-[95px] lg:py-[20px] rounded-[500px] font-bold text-lg lg:text-xl hover:shadow-lg transition-all"
              >
                Kontakt
              </button>
              {openForm && <ServiceForm onClose={() => setOpenForm(false)} />}
            </div>
          </div>
        </div>
        {/* Main Footer Content */}
        <div className="container px-5 lg:px-10 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-[30px] lg:pt-[120px]">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Image
                src="/images/img_reinex_name.png"
                alt="ReinEx Logo"
                width={153}
                height={51}
                className="mb-6"
              />
              <p className="text-[#e8e8e8] text-base leading-5 mb-10">
                24/7 Kundensupport – Wir sind jederzeit für Sie da!
              </p>
              <div className="flex space-x-4">
                <Image
                  src="/images/img_flatcoloriconsgoogle.svg"
                  alt="Google"
                  width={27}
                  height={27}
                />
                <Image src="/images/img_vector.svg" alt="Facebook" width={24} height={24} />
                <Image src="/images/img_logostwitter.svg" alt="Twitter" width={21} height={25} />
                <Image
                  src="/images/img_vector_white_a700.svg"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                />
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="text-[#ffffff] text-sm leading-6">
                <p className="mb-2">24/7 Kundensupport – Wir sind jederzeit für Sie da!</p>
                <p className="mb-2 underline">
                  <a href="tel:+491734983416">+49 173 4983416</a>
                </p>
                <p className="mb-2 underline">
                  <a href="mailto:info@reinigungex.com">info@reinigungex.com</a>
                </p>
                <p>Dresden 01257</p>
              </div>
            </div>

            {/* Navigation */}
            <div className="lg:col-span-1">
              <h3 className="text-xl lg:text-2xl font-semibold text-[#e8e8e8] mb-6">Navigation</h3>
              <ul className="space-y-2 lg:space-y-4">
                <li className="flex items-center">
                  <Image
                    src="/images/img_vector_2.svg"
                    alt="Arrow"
                    width={6}
                    height={4}
                    className="mr-3"
                  />
                  <Link
                    href="/office-cleaning"
                    className="text-[#e8e8e8] text-xs lg:text-sm hover:text-white transition-colors"
                  >
                    Büroreinigung
                  </Link>
                </li>
                <li className="flex items-center">
                  <Image
                    src="/images/img_vector_2.svg"
                    alt="Arrow"
                    width={6}
                    height={4}
                    className="mr-3"
                  />
                  <Link
                    href="/vacation-rental-cleaning"
                    className="text-[#e8e8e8] text-xs lg:text-sm hover:text-white transition-colors"
                  >
                    Ferienwohnungsreinigung
                  </Link>
                </li>
                <li className="flex items-center">
                  <Image
                    src="/images/img_vector_2.svg"
                    alt="Arrow"
                    width={6}
                    height={4}
                    className="mr-3"
                  />
                  <Link
                    href="/window-cleaning"
                    className="text-[#e8e8e8] text-xs lg:text-sm hover:text-white transition-colors"
                  >
                    Fensterreinigung
                  </Link>
                </li>
                <li className="flex items-center">
                  <Image
                    src="/images/img_vector_2.svg"
                    alt="Arrow"
                    width={6}
                    height={4}
                    className="mr-3"
                  />
                  <Link
                    href="/about"
                    className="text-[#e8e8e8] text-xs lg:text-sm hover:text-white transition-colors"
                  >
                    Über uns
                  </Link>
                </li>
                <li className="flex items-center">
                  <Image
                    src="/images/img_vector_2.svg"
                    alt="Arrow"
                    width={6}
                    height={4}
                    className="mr-3"
                  />
                  <Link
                    href="/faq"
                    className="text-[#e8e8e8] text-xs lg:text-sm hover:text-white transition-colors"
                  >
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div className="lg:col-span-1">
              <h3 className="text-base lg:text-lg font-semibold text-white mb-6">
                Impressum / Datenschutz
              </h3>
              <ul className="space-y-2 lg:space-y-4">
                <li>
                  <Link
                    href="/impressum"
                    className="text-white text-xs lg:text-sm hover:text-[#e8e8e8] transition-colors"
                  >
                    Impressum
                  </Link>
                </li>
                <li>
                  <Link
                    href="/datenschutz"
                    className="text-white text-xs lg:text-sm hover:text-[#e8e8e8] transition-colors"
                  >
                    Datenschutz
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
