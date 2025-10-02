import { Button } from "@/components/ui/button";
import { InteractiveBackground } from "@/components/InteractiveBackground";
import { Card } from "@/components/ui/card";

export const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center" style={{ backgroundColor: '#E6E6FA' }}>
      <InteractiveBackground />
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-3xl md:text-4xl lg:text-5xl leading-relaxed font-antic-didone" style={{ color: '#003f6a' }}>
            Sharing timely insights in health economics, research methods, and multicultural education—building toward a global consultancy platform.
          </p>
        </div>
        
        <div className="mt-24">
          <Card className="group p-4 bg-gradient-card border-2 border-border hover:border-primary/50 hover:shadow-glow transition-all duration-300 hover:-translate-y-2 cursor-pointer h-32" />
        </div>
      </div>
    </section>
  );
};
