'use client';

import Image from 'next/image';
import { useState } from 'react';

type Feature = {
  title: string;
  subtitle?: string;
  value: number; // сколько красных блоков
  max?: number; // всего блоков
};

const features: Feature[] = [
  {
    title: 'МЕХАНІЧНА СТІЙКІСТЬ',
    subtitle: 'утримуюча сила при шліфуванні і поліруванні',
    value: 6,
    max: 6,
  },
  {
    title: 'ЕЛАСТИЧНІСТЬ',
    subtitle: 'гнучкість на криволінійних поверхнях',
    value: 5,
    max: 6,
  },
  {
    title: 'СИЛА АДГЕЗІЇ',
    subtitle: 'метал, поліуретан, ПП, ПВХ, полікарбонат, фарба, лак, скло, деревина, картон тощо',
    value: 5,
    max: 6,
  },
  {
    title: 'ТЕРМОСТІЙКІСТЬ',
    subtitle: 'до 1 години',
    value: 5,
    max: 6,
  },
  {
    title: 'БЕЗПЕЧНЕ ВИДАЛЕННЯ',
    subtitle: 'без слідів і пошкоджень',
    value: 6,
    max: 6,
  },
];

export default function Marrone() {
  const [tab, setTab] = useState('Призначення');

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      {/* Top section with images */}
      <div className="flex flex-col sm:flex-row gap-6 items-center">
        <div className="flex justify-center">
          <Image
            src="/images/product3.webp"
            alt="Senso Marrone Tape"
            width={1320}
            height={1680}
            className="rounded-2xl shadow-md h-[400px] w-auto"
          />
        </div>
        <div className="relative flex justify-center items-center sm:h-[400px]">
          <Image
            src="/images/video.png"
            alt="Tape in use"
            width={4096}
            height={2560}
            className="rounded-2xl shadow-md filter grayscale h-auto sm:h-full w-full sm:w-[898px]"
          />
          <button className="absolute bg-white/80 rounded-full p-4 shadow-md text-xl">▶</button>
        </div>
      </div>

      {/* Buy buttons */}
      <div className="flex justify-start gap-4 my-8 flex-nowrap sm:flex-wrap items-center">
        <p>ПРИДБАТИ В РОЗДРІБ</p>
        <a
          href="https://epicentrk.ua/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-1 rounded-2xl border border-[#C52233] text-[#C52233] text-lg font-medium shadow-md hover:bg-[#C52233] hover:text-white transition"
        >
          Епіцентр
        </a>
        <a
          href="https://rozetka.com.ua/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-1 rounded-2xl border border-[#C52233] text-[#C52233] text-lg font-medium shadow-md hover:bg-[#C52233] hover:text-white transition"
        >
          Розетка
        </a>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-4 my-8">
        <button
          onClick={() => setTab('Призначення')}
          className={`text-sm sm:text-lg px-2 sm:px-4 py-2 rounded-full border ${
            tab === 'Призначення' ? 'bg-black text-white' : 'bg-white'
          }`}
        >
          Призначення
        </button>
        <button
          onClick={() => setTab('Характеристики')}
          className={`text-sm sm:text-lg px-2 sm:px-4 py-2 rounded-full border ${
            tab === 'Характеристики' ? 'bg-black text-white' : 'bg-white'
          }`}
        >
          Характеристики
        </button>
        <button
          onClick={() => setTab('Параметри')}
          className={`text-sm sm:text-lg px-2 sm:px-4 py-2 rounded-full border ${
            tab === 'Параметри' ? 'bg-black text-white' : 'bg-white'
          }`}
        >
          Параметри
        </button>
      </div>

      {/* Content */}
      <div className="mt-6 text-gray-700 leading-relaxed">
        {tab === 'Призначення' && (
          <p>
            SENSO BIANCO – це вискотемпературна автомалярна стрічка італійського виробництва, яка
            призначена для проведення лакофарбових робіт. Виготовляється з крепованого паперу на
            який з одного боку нанесений клейовий шар на основі натурального каучуку. Коричневий
            малярний скотч зручний у використанні, легко видаляється з поверхні без залишків клею,
            не пошкоджує структуру поверхні. Відмінно фіксується на склі, металах, фарбах, лаках,
            поліпропілені, ПВХ, ABS, полікарбонаті, гумі, деревині. Забезпечує рівний контур
            фарбування. Використовується для захисту поверхонь при проведенні кузовних лакофарбових
            робіт. Захищає поверхні при поліруванні та шліфуванні. Застосовується у деревообробній і
            меблевій промисловості. Малярська стрічка має помірну стійкість до дії
            уф-випромінювання, може використовуватися на вулиці (2 доби за сприятливих погодних
            умов).
          </p>
        )}

        {tab === 'Характеристики' && (
          <div className="overflow-x-auto mt-4">
            <table className="min-w-full border border-gray-300 text-xs sm:text-lg">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-3 py-2">Артикул</th>
                  <th className="border px-3 py-2">Назва</th>
                  <th className="border px-3 py-2">Колір</th>
                  <th className="border px-3 py-2">Розмір</th>
                  <th className="border px-3 py-2">
                    В ящику,
                    <br className="text-xs sm:text-lg" />
                    шт.
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-3 py-2">SM18</td>
                  <td className="border px-3 py-2">Стрічка автомобільна SENSO MARRONE +110ºC</td>
                  <td className="border px-3 py-2">Коричневий</td>
                  <td className="border px-3 py-2">18mm*40yd</td>
                  <td className="border px-3 py-2">24</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">SM24</td>
                  <td className="border px-3 py-2">Стрічка автомобільна SENSO MARRONE +110ºC</td>
                  <td className="border px-3 py-2">Коричневий</td>
                  <td className="border px-3 py-2">24mm*40yd</td>
                  <td className="border px-3 py-2">24</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">SM36</td>
                  <td className="border px-3 py-2">Стрічка автомобільна SENSO MARRONE +110ºC</td>
                  <td className="border px-3 py-2">Коричневий</td>
                  <td className="border px-3 py-2">36mm*40yd</td>
                  <td className="border px-3 py-2">12</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">SM48</td>
                  <td className="border px-3 py-2">Стрічка автомобільна SENSO MARRONE +110ºC</td>
                  <td className="border px-3 py-2">Коричневий</td>
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
        <p className="text-base md:text-xl mb-6 text-gray-700">
          Автомалярська стрічка SENSO MARRONE сертифікована FSC® и PEFC:
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
