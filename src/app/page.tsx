'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Header from '@/components/common/Header';
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
      <section className="relative min-h-screen bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Content */}
            <div className="order-1 lg:order-1 space-y-8">
              <div className="border border-[#4d8fa7] rounded-[19px] px-6 py-2 inline-block">
                <span className="text-lg font-semibold text-[#4d8fa7]">
                  Reinheit trifft Verantwortung.
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-semibold text-[#508fa8] leading-tight">
                ReinEx – Ihre vertrauenswürdige Reinigungsfirma mit System, Plan und Verantwortung
              </h1>
              <p className="text-base text-[#8a8a8a] leading-relaxed">
                Büroreinigung und Gewerbereinigung in Dresden – zuverlässig, strukturiert und diskret.
              </p>
              <Button 
                onClick={handleBookingClick}
                className="bg-gradient-to-r from-[#508fa8] to-[#4d8fa7] text-white px-12 py-4 rounded-full font-semibold text-xl hover:shadow-lg transition-all"
              >
                Jetzt kostenloses Angebot anfordern
              </Button>
            </div>
            {/* Right Content - Image */}
            <div className="order-2 lg:order-2 relative">
              <Image
                src="/images/img_image_323x244.png"
                alt="Professional cleaning service"
                width={323}
                height={244}
                className="rounded-[30px] w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-[#508fa8] to-[#4d8fa7] rounded-lg p-8 text-white relative">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-4xl font-semibold mb-2">+12,000</h3>
                  <p className="text-lg font-semibold mb-2">Lore ipsum</p>
                  <p className="text-sm text-[#e8e8e8]">Вписати цифрти)</p>
                </div>
                <Image 
                  src="/images/img_icon_white_a700_46x46.svg" 
                  alt="Icon" 
                  width={46} 
                  height={46}
                />
              </div>
            </div>
            <div className="bg-[#508fa8] rounded-lg p-8 text-white relative">
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
      </section>
      {/* Welcome Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-[#508fa8] mb-6">
            Willkommen bei ReinEx Ihr Partner für Reinheit!
          </h2>
          <p className="text-base text-[#8a8a8a] leading-relaxed mb-8">
            Unsere Mission ist es, Lebens- und Arbeitsräume sauberer, gesünder und angenehmer zu gestalten. 
            Dabei setzen wir auf modernste Technologien und umweltfreundliche Reinigungsmittel.
          </p>
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <Image src="/images/img_flatcoloriconsgoogle_blue_gray_500.svg" alt="Google" width={29} height={29} />
            <Image src="/images/img_vector_blue_gray_500.svg" alt="Facebook" width={25} height={25} />
            <Image src="/images/img_logostwitter_blue_gray_500.svg" alt="Twitter" width={22} height={26} />
            <Image src="/images/img_vector_blue_gray_500_25x25.svg" alt="LinkedIn" width={25} height={25} />
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="border border-[#4d8fa7] rounded-[19px] px-6 py-2 inline-block mb-8">
            <span className="text-lg font-semibold text-[#4d8fa7]">
              Connecting Homes with Trusted Hands
            </span>
          </div>
          <h2 className="text-5xl font-semibold text-[#508fa8] mb-8 leading-tight">
            Professionalität in jedem Detail
          </h2>
          <p className="text-base text-[#8a8a8a] leading-relaxed mb-12">
            Unsere Mitarbeiter sind sorgfältig ausgewählt und speziell geschult. Dank unserer Erfahrung 
            in der Reinigungsbranche garantieren wir Qualität und Zuverlässigkeit bei jeder Reinigung.
          </p>
          {/* Service Features */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <Image src="/images/img_vector_gray_900_02.svg" alt="Check" width={10} height={15} />
                <p className="text-lg font-semibold text-[#1f1f1f]">
                  Individuelle Reinigungslösungen für jedes Zuhause
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <Image src="/images/img_vector_gray_900_02.svg" alt="Check" width={10} height={15} />
                <p className="text-lg font-semibold text-[#1f1f1f]">
                  Pünktlich, diskret & zuverlässig
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <Image src="/images/img_vector_gray_900_02.svg" alt="Check" width={10} height={15} />
                <p className="text-lg font-semibold text-[#1f1f1f]">
                  100% Zufriedenheitsgarantie bei jeder Buchung
                </p>
              </div>
              <Button 
                onClick={handleBookingClick}
                className="bg-gradient-to-r from-[#508fa8] to-[#4d8fa7] text-white px-8 py-4 rounded-full font-semibold text-xl hover:shadow-lg transition-all"
              >
                Jetzt buchen
              </Button>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <Image 
                src="/images/img_image_1_434x267.png" 
                alt="Cleaning service 1" 
                width={434} 
                height={267}
                className="rounded-lg w-full h-auto object-cover"
              />
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <Image 
                    src="/images/img_image_2_260x267.png" 
                    alt="Cleaning service 2" 
                    width={260} 
                    height={267}
                    className="rounded-lg w-full h-auto object-cover"
                  />
                </div>
                <div className="relative">
                  <Image 
                    src="/images/img_image_150x267.png" 
                    alt="Cleaning service 3" 
                    width={150} 
                    height={267}
                    className="rounded-lg w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image 
                      src="/images/img_biplayfill.svg" 
                      alt="Play button" 
                      width={49} 
                      height={49}
                      className="cursor-pointer hover:scale-110 transition-transform"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Experience Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center mb-8">
            <div className="bg-gradient-to-r from-[#4d8fa7] to-white rounded-lg w-12 h-3 mr-4"></div>
            <h2 className="text-2xl font-semibold text-[#1f1f1f]">
              Mit ReinEx wird Reinheit zu einer neuen Erfahrung!
            </h2>
          </div>
          <Button 
            onClick={handleBookingClick}
            className="bg-gradient-to-r from-[#508fa8] to-[#4d8fa7] text-white px-8 py-4 rounded-full font-semibold text-xl hover:shadow-lg transition-all"
          >
            Jetzt buchen
          </Button>
        </div>
      </section>
      {/* Services Grid Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="border border-[#4d8fa7] rounded-[19px] px-6 py-2 inline-block mb-8">
            <span className="text-lg font-semibold text-[#4d8fa7]">
              Qualität, die man sieht. Verantwortung, die man spürt.
            </span>
          </div>
          <h2 className="text-5xl font-semibold text-[#508fa8] mb-8 leading-tight">
            Ihr Raum ist unser Anliegen. Reinigen Sie ihn, als ob Sie ihn selbst reinigen würden.
          </h2>
          <p className="text-base text-[#8a8a8a] leading-relaxed mb-12">
            Wir bieten eine breite Palette professioneller Reinigungsdienste für Haushalte, Büros und Unternehmen. 
            Von der täglichen Reinigung bis zur Tiefendesinfektion - wählen Sie die Dienstleistung, die Ihren Bedürfnissen entspricht. 
            Qualität, Pünktlichkeit und Liebe zum Detail sind unser Standard.
          </p>
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Office Cleaning */}
            <div className="relative rounded-3xl overflow-hidden h-[199px]">
              <Image 
                src="/images/img_gradient_190x199.png" 
                alt="Office cleaning background" 
                width={190} 
                height={199}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4">
                <Image src="/images/img_icon.svg" alt="Icon" width={62} height={54} />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#508fa899] to-[#4d8fa799] rounded-b-3xl p-4">
                <h3 className="text-lg font-semibold text-white">Büroreinigung</h3>
              </div>
            </div>
            {/* Vacation Rental Cleaning */}
            <div className="relative rounded-3xl overflow-hidden h-[199px]">
              <Image 
                src="/images/img_gradient.png" 
                alt="Vacation rental cleaning background" 
                width={190} 
                height={199}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4">
                <Image src="/images/img_icon.svg" alt="Icon" width={62} height={54} />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#508fa899] to-[#4d8fa799] rounded-b-3xl p-4">
                <h3 className="text-lg font-semibold text-white leading-tight">
                  Ferienwohnungs reinigung
                </h3>
              </div>
            </div>
            {/* Moving Cleaning */}
            <div className="relative rounded-3xl overflow-hidden h-[199px]">
              <Image 
                src="/images/img_image_190x199.png" 
                alt="Moving cleaning" 
                width={190} 
                height={199}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4">
                <Image src="/images/img_icon.svg" alt="Icon" width={62} height={54} />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#508fa899] to-[#4d8fa799] rounded-b-3xl p-4">
                <h3 className="text-lg font-semibold text-white">Umzugsreinigung</h3>
              </div>
            </div>
            {/* Window Cleaning */}
            <div className="relative rounded-3xl overflow-hidden h-[199px]">
              <Image 
                src="/images/img_image.png" 
                alt="Window cleaning" 
                width={190} 
                height={199}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4">
                <Image src="/images/img_icon.svg" alt="Icon" width={62} height={54} />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#508fa899] to-[#4d8fa799] rounded-b-3xl p-4">
                <h3 className="text-lg font-semibold text-white">Fensterreinigung</h3>
              </div>
            </div>
          </div>
          <p className="text-base text-[#8a8a8a] leading-relaxed">
            Jeder Raum erzählt eine Geschichte – wir sorgen dafür, dass sie sauber beginnt. 
            Mit modernster Ausrüstung und einem geschulten Team garantieren wir Ergebnisse, die man nicht nur sieht, sondern auch spürt.
          </p>
        </div>
      </section>
      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-semibold text-[#508fa8] mb-16 text-center">
            Warum uns wählen?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-[#4d8fa756] rounded-3xl p-8 relative">
              <div className="text-right mb-4">
                <span className="text-4xl font-medium text-[#13263e]">01</span>
              </div>
              <Image 
                src="/images/img_vector_2_gray_300_01.svg" 
                alt="Professional icon" 
                width={382} 
                height={292}
                className="w-full h-auto mb-6 rounded-3xl"
              />
              <h3 className="text-2xl font-medium text-[#13263e] mb-4">
                Professionalität in jedem Detail
              </h3>
              <p className="text-base text-[#13263e] leading-relaxed">
                Unsere Mitarbeiter sind sorgfältig ausgewählt und speziell geschult. Dank unserer Erfahrung 
                in der Reinigungsbranche garantieren wir Qualität und Zuverlässigkeit bei jeder Reinigung.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-[#4d8fa756] rounded-3xl p-8 relative">
              <div className="text-right mb-4">
                <span className="text-4xl font-medium text-[#13263e]">02</span>
              </div>
              <Image 
                src="/images/img_vector_4.svg" 
                alt="Flexibility icon" 
                width={382} 
                height={292}
                className="w-full h-auto mb-6 rounded-3xl"
              />
              <h3 className="text-2xl font-medium text-[#111111] mb-4">
                Flexibilität und individuelle Lösungen
              </h3>
              <p className="text-base text-[#13263e] leading-relaxed">
                Unsere Reinigungsdienste passen sich Ihren Bedürfnissen an. Sie können den Zeitpunkt und Umfang 
                der Reinigung frei wählen und so einen Service erhalten, der perfekt zu Ihnen passt.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-[#4d8fa756] rounded-3xl p-8 relative">
              <div className="text-right mb-4">
                <span className="text-4xl font-medium text-[#13263e]">03</span>
              </div>
              <Image 
                src="/images/img_vector_3.svg" 
                alt="Eco-friendly icon" 
                width={382} 
                height={292}
                className="w-full h-auto mb-6 rounded-3xl"
              />
              <h3 className="text-2xl font-medium text-[#13263e] mb-4">
                Umweltfreundliche Produkte
              </h3>
              <p className="text-base text-[#13263e] leading-relaxed">
                Wir verwenden ausschließlich umweltfreundliche Reinigungsmittel, die weder gesundheitsschädlich 
                noch umweltschädlich sind.
              </p>
            </div>
            {/* Feature 4 */}
            <div className="bg-[#4d8fa756] rounded-3xl p-8 relative">
              <div className="text-right mb-4">
                <span className="text-4xl font-medium text-[#13263e]">04</span>
              </div>
              <Image 
                src="/images/img_vector_2_gray_300_01.svg" 
                alt="Speed icon" 
                width={382} 
                height={292}
                className="w-full h-auto mb-6 rounded-3xl"
              />
              <h3 className="text-2xl font-medium text-[#13263e] mb-4">
                Schnelligkeit und faire Preise
              </h3>
              <p className="text-base text-[#13263e] leading-relaxed">
                Dank unseres effizienten Teams bieten wir schnelle und hochwertige Reinigungsdienste zu 
                wettbewerbsfähigen Preisen an. Wir schätzen Ihre Zeit und Ihren Komfort.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Free Trial Section */}
      <section className="py-16 bg-[#00000033] rounded-[36px] mx-4 my-16 relative overflow-hidden">
        <Image 
          src="/images/img_rectangle_1619.png" 
          alt="Background" 
          width={428} 
          height={1300}
          className="absolute inset-0 w-full h-full object-cover rounded-[36px]"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-semibold text-white mb-8 leading-tight">
            Kostenlose Probereinigung
          </h2>
          <p className="text-2xl font-medium text-white mb-12">
            Spüren Sie die Reinheit - testen Sie es kostenlos und unverbindlich!
          </p>
          <Button className="bg-gradient-to-r from-[#508fa8] to-[#4d8fa7] text-white px-12 py-4 rounded-full font-semibold text-xl hover:shadow-lg transition-all inline-flex items-center">
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
      </section>
      {/* Customer Reviews Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="border border-[#4d8fa7] rounded-[19px] px-6 py-2 inline-block mb-8">
            <span className="text-lg font-semibold text-[#4d8fa7]">
              From Quick Fixes to Full-Service Home Care
            </span>
          </div>
          <h2 className="text-5xl font-semibold text-[#1f1f1f] mb-8 leading-tight">
            Bewertungen unserer Kunden
          </h2>
          <p className="text-base text-[#8a8a8a] leading-relaxed mb-12">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Customer Image */}
            <div className="lg:col-span-1">
              <Image 
                src="/images/img_image_338x250.png" 
                alt="Happy customer" 
                width={338} 
                height={250}
                className="rounded-lg w-full h-auto object-cover"
              />
            </div>
            {/* Reviews Grid */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Review 1 */}
              <div className="bg-white border border-[#e8e8e8] rounded-3xl p-6">
                <p className="text-base text-[#8a8a8a] mb-6 leading-relaxed">
                  Professionelle und zuverlässige Reinigung. Unkomplizierte Kommunikation und....
                </p>
                <div className="flex items-center space-x-4">
                  <Image 
                    src="/images/img_image_3.png" 
                    alt="Michael Smith" 
                    width={44} 
                    height={44}
                    className="rounded-full"
                  />
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-[#1f1f1f]">Michael Smith</h4>
                    <p className="text-sm font-medium text-[#4d8fa7]">Apartment Owner</p>
                  </div>
                  <RatingBar rating={5} />
                </div>
              </div>
              {/* Review 2 */}
              <div className="bg-white border border-[#e8e8e8] rounded-3xl p-6">
                <p className="text-base text-[#8a8a8a] mb-6 leading-relaxed">
                  Ich war zufrieden mit der Reinigung. Die Fenster waren top.
                </p>
                <div className="flex items-center space-x-4">
                  <Image 
                    src="/images/img_image_2.png" 
                    alt="Nur Azzahra" 
                    width={44} 
                    height={44}
                    className="rounded-full"
                  />
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-[#1f1f1f]">Nur Azzahra</h4>
                    <p className="text-sm font-medium text-[#4d8fa7]">Busy Mom</p>
                  </div>
                  <RatingBar rating={4} />
                </div>
              </div>
              {/* Review 3 */}
              <div className="bg-white border border-[#e8e8e8] rounded-3xl p-6">
                <p className="text-base text-[#8a8a8a] mb-6 leading-relaxed">
                  Ich habe gestern meine erste Reinigung bekommen und bin positiv sehr überrascht....
                </p>
                <div className="flex items-center space-x-4">
                  <Image 
                    src="/images/img_image_1.png" 
                    alt="Sarah Lia" 
                    width={44} 
                    height={44}
                    className="rounded-full"
                  />
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-[#1f1f1f]">Sarah Lia</h4>
                    <p className="text-sm font-medium text-[#4d8fa7]">Busy Mom</p>
                  </div>
                  <RatingBar rating={4} />
                </div>
              </div>
              {/* Review 4 */}
              <div className="bg-white border border-[#e8e8e8] rounded-3xl p-6">
                <p className="text-base text-[#8a8a8a] mb-6 leading-relaxed">
                  Vielen Dank für die Zusammenarbeit, sehr professionelles Team und ....
                </p>
                <div className="flex items-center space-x-4">
                  <Image 
                    src="/images/img_image_44x44.png" 
                    alt="Daniel Jr" 
                    width={44} 
                    height={44}
                    className="rounded-full"
                  />
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-[#1f1f1f]">Daniel Jr</h4>
                    <p className="text-sm font-medium text-[#4d8fa7]">Freelancer</p>
                  </div>
                  <RatingBar rating={5} />
                </div>
              </div>
            </div>
          </div>
          {/* Decorative Elements */}
          <div className="relative mt-16">
            <div className="absolute right-0 top-0">
              <div className="bg-gradient-to-br from-[#4d8fa7] to-white rounded-full w-80 h-96 opacity-20"></div>
            </div>
            <div className="relative">
              <Image 
                src="/images/img_20250522t095758599_1.png" 
                alt="Cleaning professional" 
                width={277} 
                height={207}
                className="ml-auto"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Booking Modal */}
      {isBookingModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-[#b1dbeb] rounded-[36px] p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="bg-white bg-opacity-20 rounded-[60px] p-8 backdrop-blur-sm">
              <div className="bg-white rounded-[38px] p-8">
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
                  Hier befinden sich die verfügbaren Termine. Jetzt ein passendes Datum und Uhrzeit finden und buchen.
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
                      <h4 className="text-sm font-semibold text-black mb-4">Datum und Uhrzeit wählen</h4>
                      <p className="text-sm text-[#508fa8] mb-4">
                        Zeitzone: Mitteleuropäische Sommerzeit (MESZ)
                      </p>
                      <div className="flex items-center justify-between mb-4">
                        <h5 className="text-base text-[#212121]">Mai 2025</h5>
                        <div className="flex space-x-2">
                          <button className="p-1">
                            <Image src="/images/img_arrowbackios_blue_gray_500_01.svg" alt="Previous" width={24} height={24} />
                          </button>
                          <button className="p-1">
                            <Image src="/images/img_arrowforwardios_blue_gray_500_01.svg" alt="Next" width={24} height={24} />
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
      <Footer />
    </div>
  );
};
export default HomePage;