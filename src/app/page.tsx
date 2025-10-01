import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import FeaturedWork from '@/components/sections/FeaturedWork';
import FeaturedFilms from '@/components/sections/FeaturedFilms';
import AboutPreview from '@/components/sections/AboutPreview';
import ContactCTA from '@/components/sections/ContactCTA';

export default function Home() {
  return (
    <main className="min-h-screen bg-cosmic-gradient relative">
      {/* Cosmic Background Effects */}
      <div className="fixed inset-0 bg-star-field opacity-5 pointer-events-none"></div>
      <div className="fixed inset-0 bg-nebula opacity-3 pointer-events-none"></div>
      <div className="fixed inset-0 bg-galaxy opacity-2 pointer-events-none"></div>
      
      <Header />
      <HeroSection />
      <FeaturedWork />
  <FeaturedFilms />
      <AboutPreview />
      <ContactCTA />
      <Footer />
    </main>
  );
}