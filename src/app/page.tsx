'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Header from '@/components/common/Header';
import Booking from '@/components/common/Booking';
import Footer from '@/components/common/Footer';
import Button from '@/components/ui/Button';
import RatingBar from '@/components/ui/RatingBar';
import Calendar from '@/components/ui/Calendar';
const HomePage: React.FC = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const handleBookingClick = () => {
    setIsBookingModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsBookingModalOpen(false);
  };
  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
  };
  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };
  const handleBookingSubmit = () => {
    if (selectedDate && selectedTime) {
      alert(`Buchung bestätigt für ${selectedDate.toLocaleDateString()} um ${selectedTime}`);
      setIsBookingModalOpen(false);
    } else {
      alert('Bitte wählen Sie Datum und Uhrzeit aus.');
    }
  };
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section className="container px-5 lg:px-10 relative min-h-screen bg-white overflow-hidden py-10">
        <div className="border border-[#4d8fa7] rounded-[19px] px-6 py-2 inline-block mb-4">
          <span className="text-sm lg:text-lg font-semibold text-[#4d8fa7]">
            Reinheit trifft Verantwortung.
          </span>
        </div>
        <h1 className="text-4xl lg:text-6xl font-semibold text-[#508fa8] leading-tight mb-4">
          ReinEx – Ihre vertrauenswürdige Reinigungsfirma mit System, Plan und Verantwortung
        </h1>

        <div className="flex flex-col md:flex-row gap-8 md:h-[582px]">
          {/* Левая часть */}
          <div>
            <div className="flex flex-col md:flex-row gap-8">
              {/* Левая картинка */}
              <div className="flex justify-center md:h-full">
                <Image
                  src="/images/hero-left.png"
                  alt="Google"
                  width={244}
                  height={523}
                  className="h-[400px] md:h-full w-auto object-contain"
                />
              </div>

              {/* Центральный контент */}
              <div className="flex flex-col gap-10">
                <div className="mx-auto md:mx-0 space-y-8 px-4 md:px-0">
                  <p className="text-base text-[#8a8a8a] leading-relaxed text-left lg:text-center md:text-left">
                    Büroreinigung und Gewerbereinigung in Dresden – zuverlässig, strukturiert und
                    diskret.
                  </p>
                  <Button
                    onClick={handleBookingClick}
                    className="bg-gradient-to-r from-[#508fa8] to-[#4d8fa7] text-white px-8 py-3 rounded-full font-semibold text-lg hover:shadow-lg transition-all"
                  >
                    Jetzt kostenloses Angebot anfordern
                  </Button>
                </div>

                <div className="align-left px-4 md:px-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    <div className="bg-gradient-to-r from-[#508fa8] to-[#4d8fa7] rounded-lg p-4 text-white relative">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-4xl font-semibold mb-2">+12,000</h3>
                          <p className="text-lg font-semibold mb-2">Lore ipsum</p>
                          <p className="text-sm text-[#e8e8e8]">Вписати цифри</p>
                        </div>
                        <Image
                          src="/images/img_icon_white_a700_46x46.svg"
                          alt="Icon"
                          width={46}
                          height={46}
                        />
                      </div>
                    </div>
                    <div className="bg-[#508fa8] rounded-lg p-4 text-white relative">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-4xl font-semibold mb-2">9,500+</h3>
                          <p className="text-lg font-semibold mb-2">Lore ipsum</p>
                          <p className="text-sm text-[#e8e8e8]">Вписати цифри</p>
                        </div>
                        <Image
                          src="/images/img_icon_white_a700.svg"
                          alt="Icon"
                          width={46}
                          height={46}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Нижний текст */}
            <div className="mx-auto md:mx-0 text-left px-4 md:px-0">
              <h2 className="text-2xl font-semibold text-[#508fa8] mt-10 md:mt-[74px] mb-6">
                Willkommen bei ReinEx Ihr Partner für Reinheit!
              </h2>
              <p className="text-base text-[#8a8a8a] leading-relaxed mb-8">
                Unsere Mission ist es, Lebens- und Arbeitsräume sauberer, gesünder und angenehmer zu
                gestalten. Dabei setzen wir auf modernste Technologien und umweltfreundliche
                Reinigungsmittel.
              </p>
              {/* Social Media Icons */}
              <div className="flex justify-center md:justify-start space-x-4">
                <Image
                  src="/images/img_flatcoloriconsgoogle_blue_gray_500.svg"
                  alt="Google"
                  width={29}
                  height={29}
                />
                <Image
                  src="/images/img_vector_blue_gray_500.svg"
                  alt="Facebook"
                  width={25}
                  height={25}
                />
                <Image
                  src="/images/img_logostwitter_blue_gray_500.svg"
                  alt="Twitter"
                  width={22}
                  height={26}
                />
                <Image
                  src="/images/img_vector_blue_gray_500_25x25.svg"
                  alt="LinkedIn"
                  width={25}
                  height={25}
                />
              </div>
            </div>
          </div>

          {/* Правая картинка */}
          <div className="hidden md:block h-full">
            <Image
              src="/images/hero-right.png"
              alt="Google"
              width={414}
              height={582}
              className="w-auto object-contain"
            />
          </div>

          {/* Правая картинка на мобильной версии */}
          <div className="flex justify-center md:hidden mt-8">
            <Image
              src="/images/hero-right.png"
              alt="Google"
              width={414}
              height={582}
              className="w-full h-[auto] object-contain"
            />
          </div>
        </div>
      </section>

      {/* Professional Service Section */}
      <section className="container px-5 lg:px-10 py-10">
        <div className="mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content - Images */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/images/img_image_1_434x267.png"
                  alt="Cleaning Service 1"
                  width={434}
                  height={267}
                />
                <div className="space-y-4">
                  <Image
                    src="/images/img_image_2_260x267.png"
                    alt="Cleaning Service 2"
                    width={260}
                    height={267}
                  />
                  <div className="relative">
                    <Image
                      src="/images/img_image_150x267.png"
                      alt="Cleaning Service 3"
                      width={260}
                      height={267}
                    />
                  </div>
                </div>
              </div>{' '}
            </div>
            {/* Right Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center px-6 py-2 bg-white border-2 border-[#4D8FA7] rounded-full">
                <span className="text-sm lg:text-lg font-semibold text-[#4D8FA7]">
                  Connecting Homes with Trusted Hands
                </span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-semibold text-[#508FA8] leading-tight">
                Professionalität in jedem Detail
              </h2>
              <p className="text-base text-[#8A8A8A]">
                Unsere Mitarbeiter sind sorgfältig ausgewählt und speziell geschult. Dank unserer
                Erfahrung in der Reinigungsbranche garantieren wir Qualität und Zuverlässigkeit bei
                jeder Reinigung.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-base lg:text-lg font-semibold text-gray-900">
                    ✔️ Individuelle Reinigungslösungen für jedes Zuhause
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-base lg:text-lg font-semibold text-gray-900">
                    ✔️ Pünktlich, diskret & zuverlässig
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-base lg:text-lg font-semibold text-gray-900">
                    ✔️ 100% Zufriedenheitsgarantie bei jeder Buchung
                  </span>
                </div>
              </div>
              <Button
                variant="primary"
                className="bg-gradient-to-r from-[#508FA8] to-[#4D8FA7] text-white px-8 py-4 rounded-3xl text-2xl font-semibold hover:from-blue-600 hover:to-blue-700"
              >
                Jetzt buchen
              </Button>
            </div>

            {/* Decorative Elements */}
            <div className="flex flex-row space-x-6">
              {' '}
              <div className="absolute w-3 h-11 bg-gradient-to-r from-[#4D8FA7] to-white rounded-lg"></div>
              <div>
                {' '}
                <p className="text-xl lg:text-2xl font-semibold text-[#1F1F1F]">
                  Mit ReinEx wird Reinheit zu einer neuen Erfahrung!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="container px-5 lg:px-10 py-10">
        <div className="mx-auto">
          <div className="border border-[#4d8fa7] rounded-[19px] px-6 py-2 inline-block mb-8">
            <span className="text-sm lg:text-lg font-semibold text-[#4d8fa7]">
              Qualität, die man sieht. Verantwortung, die man spürt.
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-semibold text-[#508fa8] mb-8 leading-tight">
            Ihr Raum ist unser Anliegen. Reinigen Sie ihn, als ob Sie ihn selbst reinigen würden.
          </h2>

          <div className="flex flex-col lg:flex-row gap-10 items-stretch">
            {/* Services Grid */}
            <div className="flex flex-col md:max-w-[70%] gap-6">
              <p className="text-base text-[#8a8a8a] leading-relaxed">
                Wir bieten eine breite Palette professioneller Reinigungsdienste für Haushalte,
                Büros und Unternehmen. Von der täglichen Reinigung bis zur Tiefendesinfektion -
                wählen Sie die Dienstleistung, die Ihren Bedürfnissen entspricht. Qualität,
                Pünktlichkeit und Liebe zum Detail sind unser Standard.
              </p>
              {/* Office Cleaning */}
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="relative rounded-3xl overflow-hidden h-[199px]">
                  <Image
                    src="/images/cleaning1.png"
                    alt="Office cleaning background"
                    width={199}
                    height={190}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Image src="/images/img_icon.svg" alt="Icon" width={62} height={54} />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#508fa899] to-[#4d8fa799] rounded-b-3xl p-4">
                    <h3 className="text-sm lg:text-lg font-semibold text-white">Büroreinigung</h3>
                  </div>
                </div>
                {/* Vacation Rental Cleaning */}
                <div className="relative rounded-3xl overflow-hidden h-[199px]">
                  <Image
                    src="/images/cleaning2.png"
                    alt="Vacation rental cleaning background"
                    width={199}
                    height={190}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Image src="/images/img_icon.svg" alt="Icon" width={62} height={54} />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#508fa899] to-[#4d8fa799] rounded-b-3xl p-4">
                    <h3 className="text-sm lg:text-lg font-semibold text-white leading-tight">
                      Ferienwohnungs reinigung
                    </h3>
                  </div>
                </div>
                {/* Moving Cleaning */}
                <div className="relative rounded-3xl overflow-hidden h-[199px]">
                  <Image
                    src="/images/cleaning3.png"
                    alt="Moving cleaning"
                    width={199}
                    height={190}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Image src="/images/img_icon.svg" alt="Icon" width={62} height={54} />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#508fa899] to-[#4d8fa799] rounded-b-3xl p-4">
                    <h3 className="text-sm lg:text-lg font-semibold text-white">Umzugsreinigung</h3>
                  </div>
                </div>
                {/* Window Cleaning */}
                <div className="relative rounded-3xl overflow-hidden h-[199px]">
                  <Image
                    src="/images/cleaning4.png"
                    alt="Window cleaning"
                    width={199}
                    height={190}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Image src="/images/img_icon.svg" alt="Icon" width={62} height={54} />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#508fa899] to-[#4d8fa799] rounded-b-3xl p-4">
                    <h3 className="text-sm lg:text-lg font-semibold text-white">
                      Fensterreinigung
                    </h3>
                  </div>
                </div>
              </div>{' '}
              <p className="text-base text-[#8a8a8a] leading-relaxed">
                Jeder Raum erzählt eine Geschichte – wir sorgen dafür, dass sie sauber beginnt. Mit
                modernster Ausrüstung und einem geschulten Team garantieren wir Ergebnisse, die man
                nicht nur sieht, sondern auch spürt.
              </p>
            </div>
            <div className="flex flex-col justify-end h-full mt-auto">
              {' '}
              <div className="relative">
                <Image
                  src="/images/half-sircle.png"
                  alt="Professional Cleaning Team"
                  width={360}
                  height={436}
                  className="w-full max-w-[360px] mx-auto relative z-0"
                />
                <Image
                  src="/images/img_20250522t095519024_1.png"
                  alt="Professional Cleaning Team"
                  width={436}
                  height={436}
                  className="w-full max-w-[436px] mx-auto absolute inset-0 mt-auto z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="container px-5 lg:px-10 py-10">
        <div className="mx-auto">
          <h2 className="text-3xl lg:text-5xl font-semibold text-[#508fa8] mb-16 text-center">
            Warum uns wählen?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
            {/* Feature 1 */}
            <div className="bg-[#4d8fa756] rounded-3xl p-3 lg:p-8 relative flex flex-col h-full">
              <div className="text-left mb-3">
                <span className="text-3xl lg:text-4xl font-medium text-[#13263e]">01</span>
              </div>
              <h3 className="text-xl lg:text-2xl font-medium text-[#13263e] mb-3 min-h-[72px] lg:min-h-[100px]">
                Professionalität in jedem Detail
              </h3>
              <p className="text-sm lg:text-base text-[#13263e] leading-relaxed">
                Unsere Mitarbeiter sind sorgfältig ausgewählt und speziell geschult. Dank unserer
                Erfahrung in der Reinigungsbranche garantieren wir Qualität und Zuverlässigkeit bei
                jeder Reinigung.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-[#4d8fa756] rounded-3xl p-3 lg:p-8 relative flex flex-col h-full">
              <div className="text-left mb-3">
                <span className="text-3xl lg:text-4xl font-medium text-[#13263e]">02</span>
              </div>
              <h3 className="text-xl lg:text-2xl font-medium text-[#13263e] mb-3 min-h-[72px] lg:min-h-[100px]">
                Flexibilität und individuelle Lösungen
              </h3>
              <p className="text-sm lg:text-base text-[#13263e] leading-relaxed">
                Unsere Reinigungsdienste passen sich Ihren Bedürfnissen an. Sie können den Zeitpunkt
                und Umfang der Reinigung frei wählen und so einen Service erhalten, der perfekt zu
                Ihnen passt.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-[#4d8fa756] rounded-3xl p-3 lg:p-8 relative flex flex-col h-full">
              <div className="text-left mb-3">
                <span className="text-3xl lg:text-4xl font-medium text-[#13263e]">03</span>
              </div>
              <h3 className="text-xl lg:text-2xl font-medium text-[#13263e] mb-3 min-h-[72px] lg:min-h-[100px]">
                Umweltfreundliche Produkte
              </h3>
              <p className="text-sm lg:text-base text-[#13263e] leading-relaxed">
                Wir verwenden ausschließlich umweltfreundliche Reinigungsmittel, die weder
                gesundheitsschädlich noch umweltschädlich sind.
              </p>
            </div>
            {/* Feature 4 */}
            <div className="bg-[#4d8fa756] rounded-3xl p-3 lg:p-8 relative flex flex-col h-full">
              <div className="text-left mb-3">
                <span className="text-3xl lg:text-4xl font-medium text-[#13263e]">04</span>
              </div>
              <h3 className="text-xl lg:text-2xl font-medium text-[#13263e] mb-3 min-h-[72px] lg:min-h-[100px]">
                Schnelligkeit und faire Preise
              </h3>
              <p className="text-sm lg:text-base text-[#13263e] leading-relaxed">
                Dank unseres effizienten Teams bieten wir schnelle und hochwertige Reinigungsdienste
                zu wettbewerbsfähigen Preisen an. Wir schätzen Ihre Zeit und Ihren Komfort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Free Trial Section */}
      <section className="overflow-hidden py-10">
        <div
          className="
      container px-5 lg:px-10
      relative
      bg-[#00000033]
      rounded-[36px]
      overflow-hidden
      bg-[url('/images/section-bg.png')]
      bg-cover
      bg-center
    "
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>

          {/* Контент */}
          <div
            className="relative z-10 mx-auto px-4 my-[120px] text-center
                    max-sm:my-10 max-sm:px-4
                    "
          >
            <h2
              className="text-5xl font-semibold text-white mb-8 leading-tight
                     max-sm:text-3xl max-sm:mb-6
                     "
            >
              Kostenlose Probereinigung
            </h2>
            <p
              className="text-2xl font-medium text-white mb-12
                    max-sm:text-base max-sm:mb-8
                    "
            >
              Spüren Sie die Reinheit - testen Sie es kostenlos und unverbindlich!
            </p>
            <Button
              className="bg-gradient-to-r from-[#508fa8] to-[#4d8fa7] text-white px-12 py-4 rounded-full font-semibold text-xl hover:shadow-lg transition-all inline-flex items-center
                   max-sm:px-6 max-sm:py-3 max-sm:text-base
                  "
            >
              Kostenlos testen
              <Image
                src="/images/img_mop.svg"
                alt="Mop icon"
                width={28}
                height={31}
                className="ml-4"
              />
            </Button>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="container px-5 lg:px-10 py-10">
        <div
          className="grid grid-cols-1 lg:grid-cols-[1fr_364px] gap-8
                  max-sm:grid-cols-1 max-sm:gap-6
                  "
        >
          <div>
            <div
              className="border border-[#4d8fa7] rounded-[19px] px-6 py-2 inline-block mb-8
                      max-sm:px-4 max-sm:py-1 max-sm:mb-6
                      "
            >
              <span className="text-sm lg:text-lg font-semibold text-[#4d8fa7]">
                From Quick Fixes to Full-Service Home Care
              </span>
            </div>
            <h2
              className="text-3xl lg:text-5xl font-semibold text-[#1f1f1f] mb-8 leading-tight
                     max-sm:text-2xl max-sm:mb-6
                     "
            >
              Bewertungen unserer Kunden
            </h2>
            <p className="text-base text-[#8a8a8a] leading-relaxed mb-12 ">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
              dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
              quis, sem. Nulla consequat massa quis enim.
            </p>
            <div
              className="grid grid-cols-1 lg:grid-cols-[250px_1fr_1fr] gap-3 items-stretch mt-[100px]
                      max-sm:grid-cols-1 max-sm:mt-10 max-sm:gap-4
                      "
            >
              {/* Customer Image */}
              <div
                className="lg:col-span-1 h-full flex justify-center items-center
                        max-sm:mb-6
                        "
              >
                <Image
                  src="/images/yellow.png"
                  alt="Happy customer"
                  width={250}
                  height={350}
                  className="rounded-lg w-[250px] h-full object-cover max-sm:w-full max-sm:h-auto"
                />
              </div>
              {/* Reviews Grid */}
              <div
                className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-3
                        max-sm:grid-cols-1 max-sm:gap-6
                        "
              >
                {/* Review 1 */}
                <div className="bg-white border border-[#e8e8e8] rounded-3xl p-6 flex-col justify-between h-full">
                  <p className="text-base text-[#8a8a8a] mb-6 leading-relaxed max-sm:text-sm">
                    Professionelle und zuverlässige Reinigung. Unkomplizierte Kommunikation und....
                  </p>
                  <div className="flex items-center space-x-4">
                    <Image
                      src="/images/review1.svg"
                      alt="Michael Smith"
                      width={44}
                      height={44}
                      className="rounded-full"
                    />
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-[#1f1f1f] max-sm:text-base">
                        Michael Smith
                      </h4>
                      <p className="text-sm font-medium text-[#4d8fa7] max-sm:text-xs">
                        Apartment Owner
                      </p>
                    </div>
                    <RatingBar rating={1} />
                  </div>
                </div>
                {/* Review 2 */}
                <div className="bg-white border border-[#e8e8e8] rounded-3xl p-6 flex flex-col justify-between h-full">
                  <p className="text-base text-[#8a8a8a] mb-6 leading-relaxed max-sm:text-sm">
                    Ich war zufrieden mit der Reinigung. Die Fenster waren top.
                  </p>
                  <div className="flex items-center space-x-4">
                    <Image
                      src="/images/review2.svg"
                      alt="Nur Azzahra"
                      width={44}
                      height={44}
                      className="rounded-full"
                    />
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-[#1f1f1f] max-sm:text-base">
                        Nur Azzahra
                      </h4>
                      <p className="text-sm font-medium text-[#4d8fa7] max-sm:text-xs">Busy Mom</p>
                    </div>
                    <RatingBar rating={0} />
                  </div>
                </div>
                {/* Review 3 */}
                <div className="bg-white border border-[#e8e8e8] rounded-3xl p-6 flex-col justify-between h-full">
                  <p className="text-base text-[#8a8a8a] mb-6 leading-relaxed max-sm:text-sm">
                    Ich habe gestern meine erste Reinigung bekommen und bin positiv sehr
                    überrascht....
                  </p>
                  <div className="flex items-center space-x-4">
                    <Image
                      src="/images/review3.svg"
                      alt="Sarah Lia"
                      width={44}
                      height={44}
                      className="rounded-full"
                    />
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-[#1f1f1f] max-sm:text-base">
                        Sarah Lia
                      </h4>
                      <p className="text-sm font-medium text-[#4d8fa7] max-sm:text-xs">Busy Mom</p>
                    </div>
                    <RatingBar rating={0} />
                  </div>
                </div>
                {/* Review 4 */}
                <div className="bg-white border border-[#e8e8e8] rounded-3xl p-6 flex flex-col justify-between h-full">
                  <p className="text-base text-[#8a8a8a] mb-6 leading-relaxed max-sm:text-sm">
                    Vielen Dank für die Zusammenarbeit, sehr professionelles Team und ....
                  </p>
                  <div className="flex items-center space-x-4">
                    <Image
                      src="/images/review4.svg"
                      alt="Daniel Jr"
                      width={44}
                      height={44}
                      className="rounded-full"
                    />
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-[#1f1f1f] max-sm:text-base">
                        Daniel Jr
                      </h4>
                      <p className="text-sm font-medium text-[#4d8fa7] max-sm:text-xs">
                        Freelancer
                      </p>
                    </div>
                    <RatingBar rating={1} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Decorative Elements */}
          <div className="flex flex-col justify-end relative h-full overflow-hidden max-sm:hidden">
            <div className="relative w-full">
              {/* Background Image */}
              <Image
                src="/images/bgr.png"
                alt="Cleaning professional"
                width={364}
                height={500}
                className="w-full max-w-[364px] mx-auto relative z-0"
              />

              {/* Foreground Image */}
              <Image
                src="/images/img_20250522t095758599_1.png"
                alt="Cleaning professional"
                width={207}
                height={277}
                className="w-full max-w-[207px] mx-auto absolute inset-0 mt-auto z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      {isBookingModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-[#b1dbeb] rounded-[36px] p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="bg-white bg-opacity-20 rounded-[36px] p-8 backdrop-blur-sm">
              <div className="bg-white rounded-[36px] p-8">
                <div className="flex justify-between items-start mb-8">
                  <h2 className="text-3xl font-bold text-[#212121]">Service buchen</h2>
                  <button
                    onClick={handleCloseModal}
                    className="text-2xl text-gray-500 hover:text-gray-700"
                  >
                    ×
                  </button>
                </div>
                <p className="text-sm text-[#21212199] mb-8">
                  Hier befinden sich die verfügbaren Termine. Jetzt ein passendes Datum und Uhrzeit
                  finden und buchen.
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Service Details */}
                  <div>
                    <h3 className="text-2xl font-medium text-black mb-6">Servicedetails</h3>
                    <div className="space-y-2 text-sm text-[#212121]">
                      <p>Büroreinigung</p>
                      <p>22. Mai 2025 um 10:30</p>
                      <p>Beim Kunden</p>
                      <p>Ilja Gixt</p>
                      <p>1 Std.</p>
                      <p>1 Stunde</p>
                      <p>Auf Anfrage</p>
                    </div>
                    <Image
                      src="/images/img_frame_2.png"
                      alt="Service illustration"
                      width={119}
                      height={32}
                      className="mt-8"
                    />
                  </div>
                  {/* Calendar and Time Selection */}
                  <div>
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-black mb-4">
                        Datum und Uhrzeit wählen
                      </h4>
                      <p className="text-sm text-[#508fa8] mb-4">
                        Zeitzone: Mitteleuropäische Sommerzeit (MESZ)
                      </p>
                      <div className="flex items-center justify-between mb-4">
                        <h5 className="text-base text-[#212121]">Mai 2025</h5>
                        <div className="flex space-x-2">
                          <button className="p-1">
                            <Image
                              src="/images/img_arrowbackios_blue_gray_500_01.svg"
                              alt="Previous"
                              width={24}
                              height={24}
                            />
                          </button>
                          <button className="p-1">
                            <Image
                              src="/images/img_arrowforwardios_blue_gray_500_01.svg"
                              alt="Next"
                              width={24}
                              height={24}
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                    <Calendar onDateSelect={handleDateSelect} />
                    {/* Time Slots */}
                    <div className="mt-6">
                      <h5 className="text-lg font-semibold text-[#212121] mb-4">
                        Verfügbarkeit für Donnerstag, 22. Mai
                        <Image
                          src="/images/img_arrowforwardios_blue_gray_500_01_15x15.svg"
                          alt="Arrow"
                          width={15}
                          height={15}
                          className="inline ml-2"
                        />
                      </h5>
                      <div className="grid grid-cols-1 gap-2 border border-[#e6e6e6]">
                        {['09:00', '09:30', '10:00', '10:30', '11:00', '11:30'].map((time) => (
                          <button
                            key={time}
                            onClick={() => handleTimeSelect(time)}
                            className={`p-4 text-left border-b border-[#e6e6e6] hover:bg-gray-50 ${
                              selectedTime === time ? 'bg-[#4d8fa7] text-white' : 'text-[#212121]'
                            }`}
                          >
                            <span className="font-semibold">{time}</span>
                          </button>
                        ))}
                      </div>
                      <p className="text-sm text-[#212121] mt-4">Alle Sessions anzeigen</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end mt-8">
                  <Button
                    onClick={handleBookingSubmit}
                    className="bg-[#4d8fa7] text-white px-8 py-4 rounded-2xl font-semibold text-xl hover:shadow-lg transition-all"
                  >
                    Veiter
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Booking />
      <Footer />
    </div>
  );
};
export default HomePage;
