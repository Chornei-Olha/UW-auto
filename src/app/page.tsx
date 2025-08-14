'use client';
import Header from '@/components/common/Header';
import Hero from '../components/common/Hero';
import ProductSlider from '../components/common/ProductSlider';
import SensoMaskingTape from '../components/common/SensoMaskingTape';
import BoardSlider from '../components/common/BoardSlider';
import Footer from '@/components/common/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-8 bg-white">
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
