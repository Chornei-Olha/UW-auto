'use client';

import Header from '@/components/common/Header';
import Hero from '../components/common/Hero';
import AboutStats from '../components/common/AboutStats';
import AboutUs from '../components/common/AboutUs';
import AboutIntro from '../components/common/AboutIntro';
import ContactForm from '../components/common/ContactForm';
import AuctionClients from '../components/common/AuctionClients';
import CompanyOverview from '../components/common/CompanyOverview';
import TeamSection from '../components/common/TeamSection';
import ContactForm2 from '../components/common/ContactForm2';
import Footer from '@/components/common/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-8 bg-white">
      <Header />
      <Hero />
      <AboutStats />
      <AboutUs />
      <AboutIntro />
      <ContactForm />
      <AuctionClients />
      <CompanyOverview />
      <TeamSection />
      <ContactForm2 />
      <Footer />
    </div>
  );
};
export default HomePage;
