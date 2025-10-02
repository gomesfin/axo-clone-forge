import { Button } from "@/components/ui/button";
import { InteractiveBackground } from "@/components/InteractiveBackground";

export const Hero = () => {
  return (
    <section className="relative bg-gradient-hero py-20 md:py-32 overflow-hidden">
      <InteractiveBackground />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            IT Consultancy
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
            Whatever bump in your I.T. journey you come across, AXO can help you get back on track. 
            One size does not fit all, that's why we assess your needs and come up with the best action 
            plan to help your business thrive.
          </p>
          <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
            Even if you are an established company, we can help you solve any pressing I.T. issues while 
            also restructuring your I.T. system to ensure that everything runs as smoothly as possible, 
            so you can focus on what really matters to you.
          </p>
          <div className="pt-6">
            <Button variant="hero" size="lg" asChild className="text-lg px-10 py-6 cursor-pointer">
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
