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
    value: 6,
    max: 6,
  },
  {
    title: 'СИЛА АДГЕЗІЇ',
    subtitle: 'метал, поліуретан, ПП, ПВХ, полікарбонат, фарба, лак, скло, деревина, картон тощо',
    value: 6,
    max: 6,
  },
  {
    title: 'ТЕРМОСТІЙКІСТЬ',
    subtitle: 'до 1 години',
    value: 6,
    max: 6,
  },
  {
    title: 'БЕЗПЕЧНЕ ВИДАЛЕННЯ',
    subtitle: 'без слідів і пошкоджень',
    value: 6,
    max: 6,
  },
];

export default function Oro() {
  const [tab, setTab] = useState('Призначення');

  return (
    <div className="w-full">
      {/* Top section with images */}
      <div className="flex flex-col sm:flex-row gap-6 items-center">
        <div className="flex justify-center">
          <Image
            src="/images/product4.webp"
            alt="Senso Oro Tape"
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
      <div className="flex flex-col sm:flex-row justify-start items-left sm:items-center gap-5 my-16 flex-nowrap sm:flex-wrap">
        <p className="whitespace-nowrap font-inter font-regular">ПРИДБАТИ В РОЗДРІБ</p>

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
          Призначення
        </button>
        <button
          onClick={() => setTab('Характеристики')}
          className={`font-montserrat font-regular text-xs sm:text-lg px-2 sm:px-4 py-2 rounded-full border ${
            tab === 'Характеристики' ? 'bg-black text-white' : 'bg-white'
          }`}
        >
          Характеристики
        </button>
        <button
          onClick={() => setTab('Параметри')}
          className={`font-montserrat font-regular text-xs sm:text-lg px-2 sm:px-4 py-2 rounded-full border ${
            tab === 'Параметри' ? 'bg-black text-white' : 'bg-white'
          }`}
        >
          Параметри
        </button>
      </div>

      {/* Content */}
      <div className="mt-6 text-gray-700 leading-relaxed font-medium font-montserrat text-sm sm:text-xl">
        {tab === 'Призначення' && (
          <>
            <p>
              SENSO ORO – це професійна автомалярна стрічка італійського виробництва, яка призначена
              для проведення лакофарбових робіт. Виготовляється з щільного напівкрепованого паперу
              на який з одного боку нанесений клейовий шар на основі натурального каучуку. Жовтий
              малярний скотч зручний у використанні, легко видаляється з поверхні без залишків клею,
              не пошкоджує структуру поверхні. Відрізняється високою щільністю паперу, що забезпечує
              відмінну механічну стійкість. Завдяки високій еластичності чудово прилягає на вигнуті
              та нерівні поверхні (арки, фари тощо). Має хороший рівень зчеплення стрічки до
              стрічки. Середній рівень адгезії забезпечує високу клейкість навіть до шорстких,
              фактурних і нерівних поверхонь. Відмінно фіксується на склі, металах, фарбах, лаках,
              поліпропілені, ПВХ, ABS, полікарбонаті, гумі, деревині. Утворює ідеально чіткі лінії
              та контури фарби з тонким профілем переходу. Автоскотч ORO має високий рівень
              стійкості до вологи, фарб на водній основі, розчинників. Витримує процес мокрого
              шліфування. Призначений для професійного фарбування. Використовується для захисту
              поверхонь при проведенні кузовних лакофарбових робіт. Застосовується у автомобільній,
              сільськогосподарській, металургійній та деревообробній промисловості. Малярська
              стрічка має високу стійкість до дії уф-випромінювання, може використовуватися на
              вулиці (до 5 діб).
            </p>
            <ul className="list-disc list-inside mt-4 space-y-1">
              <li>Професійне фарбування у автомобільній промисловості.</li>
              <li>Високотемпературна сушка до +130°C.</li>
              <li>Маскування поверхонь і елементів при проведенні кузовних лакофарбових робіт.</li>
              <li>Захист деталей при поліруванні та шліфуванні (в т.ч. мокрому).</li>
              <li>Проклеювання і фіксація у деревообробній і меблевій промисловості.</li>
              <li>Виконання складних завдань у деревообробній і металургійній промисловості.</li>
              <li>
                Тимчасова фіксація деталей і елементів при проведенні робіт із монтажу, ремонту і
                склеювання.
              </li>
              <li>Захист суміжних областей та деталей при фарбуванні.</li>
            </ul>
          </>
        )}

        {tab === 'Характеристики' && (
          <div className="overflow-x-auto mt-4">
            <ul className="list-disc list-inside space-y-1 mb-6">
              <li>Матеріал основи: крепований папір.</li>
              <li>Клей: натуральний каучук.</li>
              <li>Товщина: 125мкм.</li>
              <li>Щільність паперу: 95г/м².</li>
              <li>Еластичність: 8%.</li>
              <li>Адгезія: 2,7Н/см.</li>
            </ul>{' '}
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
                  <td className="border px-3 py-2">SO24</td>
                  <td className="border px-3 py-2">Стрічка автомобільна SENSO Oro +130ºC</td>
                  <td className="border px-3 py-2">Жовтий</td>
                  <td className="border px-3 py-2">24mm*40yd</td>
                  <td className="border px-3 py-2">24</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">SO36</td>
                  <td className="border px-3 py-2">Стрічка автомобільна SENSO Oro +130ºC</td>
                  <td className="border px-3 py-2">Жовтий</td>
                  <td className="border px-3 py-2">36mm*40yd</td>
                  <td className="border px-3 py-2">12</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">SO48</td>
                  <td className="border px-3 py-2">Стрічка автомобільна SENSO Oro +130ºC</td>
                  <td className="border px-3 py-2">Жовтий</td>
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
          Автомалярська стрічка SENSO ORO сертифікована FSC® и PEFC:
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
