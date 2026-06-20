import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import About from '@/components/About';
import Services from '@/components/Services';
import Team from '@/components/Team';
import Testimonials from '@/components/Testimonials';
import LifeAtSpaceO from '@/components/LifeAtSpaceO';
import Memories from '@/components/Memories';
import Offices from '@/components/Offices';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import { getSiteContent } from '@/lib/api';

export default async function Home() {
  const content = await getSiteContent();

  return (
    <>
      <Navbar />
      <main>
        <Hero overview={content.overview} />
        <Stats stats={content.overview.stats} />
        <Reveal>
          <About overview={content.overview} />
        </Reveal>
        <Reveal>
          <Services services={content.services} />
        </Reveal>
        <Reveal>
          <Team team={content.team} />
        </Reveal>
        <Reveal>
          <Testimonials testimonials={content.testimonials} />
        </Reveal>
        <Reveal>
          <LifeAtSpaceO events={content.lifeEvents} />
        </Reveal>
        <Reveal>
          <Memories memories={content.memories} />
        </Reveal>
        <Reveal>
          <Offices offices={content.offices} />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
      </main>
      <Footer usedFallback={content.usedFallback} />
    </>
  );
}
