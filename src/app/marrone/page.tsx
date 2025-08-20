'use client';
import Header from '@/components/common/Header';
import Marrone from '../../components/common/Marrone';
import Footer from '@/components/common/Footer';
import ContactForm from '../../components/common/ContactForm';

const Products: React.FC = () => {
  return (
    <>
      <div className="container mx-auto px-4 md:px-8">
        <Header />
        <Marrone />
      </div>
      <div className="container mx-auto px-4 md:px-8">
        <ContactForm />
        <Footer />
      </div>
    </>
  );
};
export default Products;
