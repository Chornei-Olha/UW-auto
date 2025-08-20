'use client';
import Header from '@/components/common/Header';
import Blanco from '../../components/common/Blanco';
import Footer from '@/components/common/Footer';
import ContactForm from '../../components/common/ContactForm';

const Products: React.FC = () => {
  return (
    <>
      <div className="container mx-auto px-4 md:px-8">
        <Header />
        <Blanco />
      </div>
      <div className="container mx-auto px-4 md:px-8">
        <ContactForm />
        <Footer />
      </div>
    </>
  );
};
export default Products;
