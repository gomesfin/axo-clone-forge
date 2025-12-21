import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { ServicesOffered } from "@/components/ServicesOffered";
import { Partners } from "@/components/Partners";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <ServicesOffered />
        <Partners />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
