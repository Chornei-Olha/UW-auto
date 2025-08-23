'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

type Feature = {
  title: string;
  subtitle?: string;
  value: number; // сколько красных блоков
  max?: number; // всего блоков
};

export default function Rossa() {
  const t = useTranslations('Rossa');

  const features: Feature[] = [
    {
      title: t('par-title1'),
      subtitle: t('par-text1'),
      value: 6,
      max: 6,
    },
    {
      title: t('par-title2'),
      subtitle: t('par-text2'),
      value: 5,
      max: 6,
    },
    {
      title: t('par-title3'),
      subtitle: t('par-text3'),
      value: 5,
      max: 6,
    },
    {
      title: t('par-title4'),
      subtitle: t('par-text4'),
      value: 5,
      max: 6,
    },
    {
      title: t('par-title5'),
      subtitle: t('par-text5'),
      value: 6,
      max: 6,
    },
  ];

  const [tab, setTab] = useState('Призначення');

  return (
    <div className="w-full pt-10">
      {/* Top section with images */}
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-16 items-center">
        <div className="flex justify-center">
          <Image
            src="/images/ROSSA2.webp"
            alt="Senso Rossa Tape"
            width={1320}
            height={1680}
            className="rounded-2xl shadow-md h-[400px] w-auto"
          />
        </div>
        <div className="relative flex justify-center items-center sm:h-[400px]">
          <Image
            src="/images/ROSSA.webp"
            alt="Tape in use"
            width={4096}
            height={2560}
            className="rounded-2xl shadow-md h-auto sm:h-full w-[auto]"
          />
          {/* <button className="absolute bg-white/80 rounded-full p-4 shadow-md text-xl">▶</button> */}
        </div>
      </div>

      {/* Buy buttons */}
      <div className="flex flex-col sm:flex-row justify-start items-left sm:items-center gap-5 my-16 flex-nowrap sm:flex-wrap">
        <p className="whitespace-nowrap font-inter font-regular">{t('shop')}</p>

        <div className="flex flex-row gap-2 sm: gap-6 items-start">
          <a
            href="https://epicentrk.ua/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition transform hover:-translate-y-2 hover:scale-105 duration-300"
          >
            <Image
              src="/images/epicentr-logo.png" // 👉 картинка логотипа Эпицентра
              alt="Епіцентр"
              width={492}
              height={163}
              className="object-contain w-auto h-[40px] sm:h-[60px]"
            />
          </a>

          <a
            href="https://rozetka.com.ua/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition transform hover:-translate-y-2 hover:scale-105 duration-300"
          >
            <Image
              src="/images/rozetka-logo.png" // 👉 картинка логотипа Розетки
              alt="Розетка"
              width={1864}
              height={431}
              className="object-contain w-auto h-[40px] sm:h-[60px]"
            />
          </a>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-4 my-8">
        <button
          onClick={() => setTab('Призначення')}
          className={`font-montserrat font-regular text-xs sm:text-lg px-2 sm:px-4 py-2 rounded-full border ${
            tab === 'Призначення' ? 'bg-black text-white' : 'bg-white'
          }`}
        >
          {t('menu1')}
        </button>
        <button
          onClick={() => setTab('Характеристики')}
          className={`font-montserrat font-regular text-xs sm:text-lg px-2 sm:px-4 py-2 rounded-full border ${
            tab === 'Характеристики' ? 'bg-black text-white' : 'bg-white'
          }`}
        >
          {t('menu2')}
        </button>
        <button
          onClick={() => setTab('Параметри')}
          className={`font-montserrat font-regular text-xs sm:text-lg px-2 sm:px-4 py-2 rounded-full border ${
            tab === 'Параметри' ? 'bg-black text-white' : 'bg-white'
          }`}
        >
          {t('menu3')}
        </button>
      </div>

      {/* Content */}
      <div className="mt-6 text-gray-700 leading-relaxed font-medium font-montserrat text-sm sm:text-xl">
        {tab === 'Призначення' && (
          <>
            <p>{t('mainText')}</p>
            <ul className="list-disc list-inside mt-4 space-y-1">
              <li>{t('text-li1')}</li>
              <li>{t('text-li2')} </li>
              <li>{t('text-li3')} </li>
              <li>{t('text-li4')} </li>
              <li>{t('text-li5')}</li>
              <li>{t('text-li6')} </li>
              <li>{t('text-li7')} </li>
            </ul>
          </>
        )}

        {tab === 'Характеристики' && (
          <div className="overflow-x-auto mt-4">
            <ul className="list-disc list-inside space-y-1 mb-6">
              <li>{t('char-li1')}</li>
              <li>{t('char-li2')}</li>
              <li>{t('char-li3')}</li>
              <li>{t('char-li4')}</li>
              <li>{t('char-li5')}.</li>
              <li>{t('char-li6')}</li>
            </ul>{' '}
            <table className="min-w-full border border-gray-300 text-xs sm:text-lg">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-3 py-2">{t('table-title-col1')}</th>
                  <th className="border px-3 py-2">{t('table-title-col2')}</th>
                  <th className="border px-3 py-2">{t('table-title-col3')}</th>
                  <th className="border px-3 py-2">{t('table-title-col4')}</th>
                  <th className="border px-3 py-2">
                    {t('table-title-col5')}
                    <br className="text-xs sm:text-lg" />
                    {t('table-title-col5-1')}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-3 py-2">SR24</td>
                  <td className="border px-3 py-2">{t('nameTape')} SENSO ROSSA +120ºC</td>
                  <td className="border px-3 py-2">{t('colorTape')}</td>
                  <td className="border px-3 py-2">24mm*40yd</td>
                  <td className="border px-3 py-2">24</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">SR36</td>
                  <td className="border px-3 py-2">{t('nameTape')} SENSO ROSSA +120ºC</td>
                  <td className="border px-3 py-2">{t('colorTape')}</td>
                  <td className="border px-3 py-2">36mm*40yd</td>
                  <td className="border px-3 py-2">12</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">SR48</td>
                  <td className="border px-3 py-2">{t('nameTape')} SENSO ROSSA +120ºC</td>
                  <td className="border px-3 py-2">{t('colorTape')}</td>
                  <td className="border px-3 py-2">48mm*40yd</td>
                  <td className="border px-3 py-2">12</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        {tab === 'Параметри' && (
          <div className="w-full max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow-md">
            <div className="space-y-6">
              {features.map((f, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between"
                >
                  {/* Текст */}
                  <div className="mb-2 sm:mb-0">
                    <p className="font-bold text-gray-900">{f.title}</p>
                    {f.subtitle && <p className="text-sm text-gray-600">{f.subtitle}</p>}
                  </div>

                  {/* Шкала */}
                  <div className="flex gap-1">
                    {Array.from({ length: f.max || 8 }).map((_, i) => (
                      <div
                        key={i}
                        className={`w-5 h-4 ${i < f.value ? 'bg-red-600' : 'bg-gray-200'}`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="pt-10 text-left font-semibold">
        <p className="font-regular font-inter text-base md:text-xl mb-6 text-gray-700">
          {t('certification')}
        </p>

        {/* Логотипы */}
        <div className="flex flex-row items-start gap-8">
          <Image
            src="/images/fsc-logo.png"
            alt="FSC сертифікація"
            width={560}
            height={811}
            style={{ height: 'auto', width: '100%', maxWidth: '130px' }}
          />
          <Image
            src="/images/pefc-logo.png"
            alt="PEFC сертифікація"
            width={581}
            height={1079}
            style={{ height: 'auto', width: '100%', maxWidth: '130px' }}
          />
        </div>
      </div>
    </div>
  );
}
