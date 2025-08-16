import Image from 'next/image';
import React from 'react';

export default function SensoMaskingTape() {
  return (
    <section className="py-10 md:py-16">
      {/* Верхний блок */}
      <div className="flex flex-col md:flex-row items-center">
        {/* Фото слева */}
        <div className="md:w-1/2 w-full -ml-[calc((100vw-100%)/2)]">
          <Image
            src="/images/left-bg.png"
            alt="Маляр красит авто"
            width={1459}
            height={1884}
            className="w-auto h-[300px] sm:h-[428px] object-cover"
            priority
          />
        </div>

        {/* Текст справа */}
        <div className="w-full pt-5 text-lg sm:text-xl md:text-2xl">
          <p className="text-gray-800 font-medium leading-relaxed mb-4">
            Виробництво стрічок здійснюється в Італії згідно з міжнародними стандартами, що гарантує
            стабільно високий рівень якості та продуктивності.
          </p>
          <p className="text-gray-500 leading-relaxed">
            Компанія УКРПАК ХОЛДІНГ ІНДАСТРІ є ексклюзивним представником та імпортером ТМ SENSO на
            території України та Східної Європи. Ми пропонуємо вигідні умови співпраці для
            дистриб’юторів, дилерів, промислових і виробничих підприємств, автомобільних сервісів та
            автомалярів.
          </p>
        </div>
      </div>

      {/* Нижний блок */}
      <div className="pt-10 text-left font-semibold">
        <h2 className="text-2xl md:text-4xl mb-6 leading-snug">
          Відкрийте для себе повний асортимент маскувальних стрічок SENSO та підніміть свої проєкти
          на новий рівень за допомогою рішень, розроблених для досконалості.
        </h2>
        <p className="text-base md:text-xl mb-6 text-gray-700">
          Малярні стрічки SENSO сертифіковані FSC® и PEFC:
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
    </section>
  );
}
