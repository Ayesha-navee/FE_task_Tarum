import Header from '@/components/Header';
import Hero from '@/components/Hero';
import DepartmentIntro from '@/components/DepartmentIntro';
import ProductSection from '@/components/ProductSection';
import OperationsSection from '@/components/OperationsSection';
import TeamSection from '@/components/TeamSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <DepartmentIntro />
      <ProductSection />
      <OperationsSection />
      <TeamSection />
      <Footer />
    </main>
  );
}
