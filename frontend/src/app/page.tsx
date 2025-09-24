import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import FAQ from '@/components/FAQ';
import Sponsors from '@/components/Sponsors';
import Contact from '@/components/Contact';
import Gallery from '@/components/Gallery';
import { AboutHackman } from '@/components/About';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
         <section id="about-hackman">
          <AboutHackman />
        </section>
        <section id="faq">
          <FAQ />
        </section>
        <section id="gallery">
          <Gallery />
        </section>
        <section id="sponsors">
          <Sponsors />
        </section>
      </main>
    </>
  );
}
