
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import OfferingsSection from '@/components/OfferingsSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <HeroSection />
      <OfferingsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
