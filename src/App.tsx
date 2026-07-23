import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import WhyUs from '@/components/WhyUs';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ClientsMarquee from '@/components/ClientsMarquee';

export default function App() {
  return (
    <div className="min-h-screen bg-spotify-black text-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <ClientsMarquee />
        <Services />
        <About />
        <WhyUs />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
