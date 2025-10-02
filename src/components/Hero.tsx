import { Button } from "@/components/ui/button";
import { InteractiveBackground } from "@/components/InteractiveBackground";

export const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-32 pb-12" style={{ backgroundColor: '#E6E6FA' }}>
      <InteractiveBackground />
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            IT Consultancy
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
            Whatever bump in your I.T. journey you come across, AXO can help you get back on track. 
            One size does not fit all, that's why we assess your needs and come up with the best action 
            plan to help your business thrive.
          </p>
        </div>
      </div>
    </section>
  );
};
