'use client';
import Header from '@/components/common/Header';
import Hero from '../components/common/Hero';
import ProductSlider from '../components/common/ProductSlider';
import SensoMaskingTape from '../components/common/SensoMaskingTape';
import BoardSlider from '../components/common/BoardSlider';
import Footer from '@/components/common/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ProductSlider />
      <SensoMaskingTape />
      <BoardSlider />
      <Footer />
    </div>
  );
};
export default HomePage;
