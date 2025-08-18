'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Bianco() {
  const [tab, setTab] = useState('Призначення');

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      {/* Top section with images */}
      <div className="flex flex-col sm:flex-row gap-6 items-center">
        <div className="flex justify-center">
          <Image
            src="/images/product1.webp"
            alt="Senso Bianco Tape"
            width={1320}
            height={1680}
            className="rounded-2xl shadow-md h-[400px] w-auto"
          />
        </div>
        <div className="relative flex justify-center items-center h-[400px]">
          <Image
            src="/images/video.png"
            alt="Tape in use"
            width={4096}
            height={2560}
            className="rounded-2xl shadow-md filter grayscale h-full w-[898px]"
          />
          <button className="absolute bg-white/80 rounded-full p-4 shadow-md text-xl">▶</button>
        </div>
      </div>

      {/* Buy buttons */}
      <div className="flex justify-start gap-4 mt-6 flex-wrap items-center">
        <p>ПРИДБАТИ В РОЗДРІБ</p>
        <button className="border border-red-500 text-red-500 px-4 py-2 rounded-lg hover:bg-red-500 hover:text-white transition">
          Епіцентр
        </button>
        <button className="border border-red-500 text-red-500 px-4 py-2 rounded-lg hover:bg-red-500 hover:text-white transition">
          Розетка
        </button>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={() => setTab('Призначення')}
          className={`px-4 py-2 rounded-full border ${
            tab === 'Призначення' ? 'bg-black text-white' : 'bg-white'
          }`}
        >
          Призначення
        </button>
        <button
          onClick={() => setTab('Характеристики')}
          className={`px-4 py-2 rounded-full border ${
            tab === 'Характеристики' ? 'bg-black text-white' : 'bg-white'
          }`}
        >
          Характеристики
        </button>
      </div>

      {/* Content */}
      <div className="mt-6 text-gray-700 leading-relaxed">
        {tab === 'Призначення' && (
          <p>
            SENSO BIANCO – це малярна стрічка італійського виробництва, яка призначена для
            проведення базових робіт. Виготовляється з крепованого паперу на який з одного боку
            нанесений клейовий шар на основі натурального каучуку. Бежевий малярний скотч зручний у
            використанні, легко видаляється з поверхні без залишків клею, не пошкоджує структуру
            поверхні. Відмінно фіксується на склі, плівках, металах, фарбах, лаках, пластиках.
            Ідеально підходить для тимчасової фіксації деталей і елементів при склеюванні.
            Використовується для захисту поверхонь при проведенні кузовних лакофарбових робіт.
            Захищає поверхні при поліруванні деталей. Застосовується для фіксації захисних плівок і
            паперу.
          </p>
        )}

        {tab === 'Характеристики' && (
          <div className="overflow-x-auto mt-4">
            <table className="min-w-full border border-gray-300 text-sm md:text-base">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-3 py-2">Артикул</th>
                  <th className="border px-3 py-2">Найменування</th>
                  <th className="border px-3 py-2">Колір</th>
                  <th className="border px-3 py-2">Розмір</th>
                  <th className="border px-3 py-2">Кількість в ящику</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-3 py-2">SB18</td>
                  <td className="border px-3 py-2">Стрічка автомобільна SENSO BIANCO +80ºC</td>
                  <td className="border px-3 py-2">Бежевий</td>
                  <td className="border px-3 py-2">18mm*40yd</td>
                  <td className="border px-3 py-2">24</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">SB24</td>
                  <td className="border px-3 py-2">Стрічка автомобільна SENSO BIANCO +80ºC</td>
                  <td className="border px-3 py-2">Бежевий</td>
                  <td className="border px-3 py-2">24mm*40yd</td>
                  <td className="border px-3 py-2">24</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">SB36</td>
                  <td className="border px-3 py-2">Стрічка автомобільна SENSO BIANCO +80ºC</td>
                  <td className="border px-3 py-2">Бежевий</td>
                  <td className="border px-3 py-2">36mm*40yd</td>
                  <td className="border px-3 py-2">12</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">SB48</td>
                  <td className="border px-3 py-2">Стрічка автомобільна SENSO BIANCO +80ºC</td>
                  <td className="border px-3 py-2">Бежевий</td>
                  <td className="border px-3 py-2">48mm*40yd</td>
                  <td className="border px-3 py-2">12</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div className="pt-10 text-left font-semibold">
        <p className="text-base md:text-xl mb-6 text-gray-700">
          Автомалярська стрічка SENSO BIANCO сертифікована FSC® и PEFC:
        </p>

        {/* Логотипы */}
        <div className="flex flex-row items-start gap-8">
          <Image
            src="/images/fsc-logo.png"
            alt="FSC сертифікація"
            width={560}
            height={811}
            style={{ height: 'auto', width: '100%', maxWidth: '150px' }}
          />
          <Image
            src="/images/pefc-logo.png"
            alt="PEFC сертифікація"
            width={581}
            height={1079}
            style={{ height: 'auto', width: '100%', maxWidth: '150px' }}
          />
        </div>
      </div>
    </div>
  );
}
