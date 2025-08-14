'use client';

import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import Button from '@/components/ui/button';

import 'swiper/css';

const boardMembers = [
  {
    id: 1,
    photo: '/images/banner01.jpg',
    name: 'COMPETENZA',
    // position: 'Lorem ipsum dolor',
    // badge: 'Lorem ipsum dolor',
    description: `I nastri da mascheratura SENSO sono certificati FSC® e PEFC, a garanzia del rispetto dei più alti standard di qualità.`,
  },
  {
    id: 2,
    photo: '/images/banner02.jpg',
    name: 'EFFICIENZA',
    // position: 'Lorem ipsum dolor',
    // badge: 'Lorem ipsum dolor',
    description: `La gamma SENSO è progettata appositamente per soddisfare tutte le esigenze del settore automobilistico.`,
  },
  {
    id: 3,
    photo: '/images/banner03.jpg',
    name: 'PROFESSIONALITÀ',
    // position: 'Lorem ipsum dolor',
    // badge: 'Lorem ipsum dolor',
    description: `Ogni prodotto SENSO viene sottoposto a test specifici, in base ai quali viene determinata la sua destinazione d'uso.`,
  },
  {
    id: 4,
    photo: '/images/banner04.jpeg',
    name: 'ORIENTAMENTO AL CLIENTE',
    // position: 'Lorem ipsum dolor',
    // badge: 'Lorem ipsum dolor',
    description: `Il team SENSO è aperto alla collaborazione ed è sempre pronto a offrire soluzioni pronte per la tua attività.`,
  },
  {
    id: 5,
    photo: '/images/banner05.jpeg',
    name: 'FLESSIBILITÀ',
    // position: 'Lorem ipsum dolor',
    // badge: 'Lorem ipsum dolor',
    description: `La linea SENSO è pensata per adattarsi con facilità a diverse superfici e contesti di utilizzo, garantendo sempre risultati precisi e professionali.`,
  },
];

export default function BoardSlider() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [selectedMember, setSelectedMember] = useState<null | (typeof boardMembers)[0]>(null);

  return (
    <div id="slider1" className="w-full text-center relative">
      <div className="relative max-w-7xl mx-auto">
        {/* Стрелки (десктоп) */}
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="hidden sm:flex absolute -left-16 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full shadow p-2 hover:bg-gray-100 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="hidden sm:flex absolute -right-16 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full shadow p-2 hover:bg-gray-100 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Стрелки (мобилка) */}
        <div className="flex justify-center gap-4 sm:hidden mb-4">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="bg-white rounded-full shadow p-2 hover:bg-gray-100 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="bg-white rounded-full shadow p-2 hover:bg-gray-100 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Autoplay]}
          autoplay={{ delay: 5000 }}
          spaceBetween={24}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 3 },
          }}
        >
          {boardMembers.map((member) => (
            <SwiperSlide key={member.id}>
              <div className="h-full flex flex-col justify-between p-2 border rounded-xl shadow-md bg-white">
                <div className="relative mb-2">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={700}
                    height={300}
                    className="w-full object-contain rounded-lg"
                    priority
                  />
                  {/* <div className="absolute bottom-2 right-2 bg-[#0103B8] text-white text-sm font-semibold px-3 py-1 rounded-full shadow-sm">
                    {member.badge}
                  </div> */}
                </div>
                <h3 className="font-bold font-dm text-[20px]">{member.name}</h3>
                {/* <p className="font-bold font-inter text-[16px] text-[#09234B] mt-[15px]">
                  {member.position}
                </p> */}
                <p className="font-regular font-inter text-[16px] mt-[15px] flex-grow line-clamp-3">
                  {member.description}
                </p>
                {/* <div className="mt-[20px] flex justify-center">
                  <Button
                    className="max-w-[180px] px-[40px] py-[10px] font-bold font-inter text-[16px] bg-black text-white rounded-3xl"
                    onClick={() => {
                      console.log('Click!', member);
                      setSelectedMember(member);
                    }}
                  >
                    more...
                  </Button>
                </div> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Модалка */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
          <div className="bg-white max-w-lg w-full rounded-xl shadow-lg p-6 relative">
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl"
            >
              ✕
            </button>
            <h3 className="text-xl font-bold mb-2">{selectedMember.name}</h3>
            <p className="text-md font-semibold text-[#09234B] mb-2">{selectedMember.position}</p>
            <p className="text-sm text-gray-700 whitespace-pre-line text-left">
              {selectedMember.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
