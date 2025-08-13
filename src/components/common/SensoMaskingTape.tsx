import Image from 'next/image';
import React from 'react';

export default function SensoMaskingTape() {
  return (
    <div className="bg-white w-full">
      {/* Верхний блок */}
      <div className="flex flex-col md:flex-row items-center">
        {/* Фото слева */}
        <div className="md:w-1/2 w-full">
          <Image
            src="/images/left-bg.png"
            alt="Маляр красит авто"
            width={800}
            height={600}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        {/* Текст справа */}
        <div className="md:w-1/2 w-full p-6 md:p-10">
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
      <div className="px-6 md:px-20 py-10 text-left">
        <h2 className="text-xl md:text-2xl font-bold mb-6 leading-snug">
          Відкрийте для себе повний асортимент маскувальних стрічок SENSO та підніміть свої проєкти
          на новий рівень за допомогою рішень, розроблених для досконалості.
        </h2>
        <p className="mb-6 text-gray-700">Малярні стрічки SENSO сертифіковані FSC® и PEFC:</p>

        {/* Логотипы */}
        <div className="flex flex-col sm:flex-row justify-left items-left gap-8">
          <Image src="/images/fsc-logo.png" alt="FSC сертифікація" width={90} height={90} />
          <Image src="/images/pefc-logo.png" alt="PEFC сертифікація" width={90} height={90} />
        </div>
      </div>
    </div>
  );
}
