import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import About from '@/components/About';
import Services from '@/components/Services';
import Team from '@/components/Team';
import LifeAtSpaceO from '@/components/LifeAtSpaceO';
import Offices from '@/components/Offices';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { getSiteContent } from '@/lib/api';

export default async function Home() {
  const content = await getSiteContent();

  return (
    <>
      <Navbar />
      <main>
        <Hero overview={content.overview} />
        <Stats stats={content.overview.stats} />
        <About overview={content.overview} />
        <Services services={content.services} />
        <Team team={content.team} />
        <LifeAtSpaceO events={content.lifeEvents} />
        <Offices offices={content.offices} />
        <Contact />
      </main>
      <Footer usedFallback={content.usedFallback} />
    </>
  );
}
