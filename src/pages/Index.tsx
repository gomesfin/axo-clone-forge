import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="relative">
        <Hero />
        <div className="absolute top-0 left-0 right-0 z-50">
          <Header />
        </div>
      </div>
      <main className="flex-1">
        <Services />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
