'use client';
import Header from '@/components/common/Header';
import Dealers from '@/components/common/Dealers';
import Footer from '@/components/common/Footer';
import ContactForm from '../../components/common/ContactForm';

const PartnersPage: React.FC = () => {
  return (
    <>
      <div className="container mx-auto px-4 md:px-8">
        <Header />
      </div>
      <Dealers />
      <div className="container mx-auto px-4 md:px-8">
        <ContactForm />
        <Footer />
      </div>
    </>
  );
};
export default PartnersPage;
