import { Button } from "@/components/ui/button";
import { InteractiveBackground } from "@/components/InteractiveBackground";

export const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-32 pb-12" style={{ backgroundColor: '#E6E6FA' }}>
      <InteractiveBackground />
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mt-20">
          <p className="text-xl md:text-2xl lg:text-3xl text-foreground leading-relaxed">
            Sharing timely insights in health economics, research methods, and multicultural education—building toward a global consultancy platform.
          </p>
        </div>
      </div>
    </section>
  );
};
