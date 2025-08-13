'use client';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 md:py-16">
        {/* Верхняя часть: текст + маленькое изображение */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          {/* Текст */}
          <div className="md:max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
              Малярні стрічки SENSO
            </h1>
            <p className="mt-4 text-gray-600 leading-relaxed">
              це професійний вибір у сфері малярних рішень. Ми пропонуємо широкий асортимент
              маскувальних скотчів, що відповідають вимогам широкого спектру завдань та проектів.
              Малярські стрічки SENSO відрізняються винятковими властивостями, розробленими для
              задоволення точних вимог різних галузей промисловості.
            </p>
          </div>

          {/* Маленькое фото */}
          <div className="flex-shrink-0">
            <Image
              src="/images/logo-bg.webp"
              alt="Senso Small Banner"
              width={300}
              height={150}
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Большое фото */}
        <div className="mt-8">
          <Image
            src="/images/bg.webp"
            alt="Senso Tape Rolls"
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
