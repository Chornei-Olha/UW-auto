'use client';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Hero from '../components/common/Hero';
import ProductSlider from '../components/common/ProductSlider';
import SensoMaskingTape from '../components/common/SensoMaskingTape';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ProductSlider />
      <SensoMaskingTape />
      <Footer />
    </div>
  );
};
export default HomePage;
