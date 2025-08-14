'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const products = [
  { title: 'SENSO BLANCO – AUTO + 80°C', image: '/images/product1.webp', link: '/products/blanco' },
  { title: 'SENSO ROSSA – AUTO + 120°C', image: '/images/product2.webp', link: '/products/rossa' },
  {
    title: 'SENSO MARRONE – AUTO + 110°C',
    image: '/images/product3.webp',
    link: '/products/marrone',
  },
  { title: 'SENSO ORO – AUTO + 130°C', image: '/images/product4.webp', link: '/products/oro' },
];

export default function ProductSlider() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section>
      <div className="py-2 md:py-4">
        <Swiper
          modules={[Navigation, Pagination]}
          onInit={(swiper) => {
            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          pagination={{ clickable: true }}
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col">
                {/* Карточка с текстом поверх картинки */}
                <div className="bg-white rounded-xl shadow-md relative overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={200}
                    height={200}
                    className="object-contain w-full h-auto"
                  />
                  <h3 className="absolute top-2 left-2 text-xl font-bold leading-snug">
                    {product.title.includes('–') ? (
                      <>
                        {product.title.split('–')[0]} –
                        <br />
                        {product.title.split('–')[1]}
                      </>
                    ) : (
                      product.title
                    )}
                  </h3>
                </div>

                {/* Кнопка под карточкой */}
                <Link
                  href={product.link}
                  className="mt-2 text-sm text-gray-500 hover:text-gray-700 text-left"
                >
                  Детальніше
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Кнопки навигации снизу */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            ref={prevRef}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-red-600 text-white"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            ref={nextRef}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-red-600 text-white"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
