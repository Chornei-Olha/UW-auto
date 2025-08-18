'use client';
import Header from '@/components/common/Header';
import Buyers from '@/components/common/Buyers';
import Footer from '@/components/common/Footer';
import ContactForm from '../../components/common/ContactForm';

const BuyersPage: React.FC = () => {
  return (
    <>
      <div className="container mx-auto px-4 md:px-8">
        <Header />
      </div>
      <Buyers />
      <div className="container mx-auto px-4 md:px-8">
        <ContactForm />
        <Footer />
      </div>
    </>
  );
};
export default BuyersPage;
