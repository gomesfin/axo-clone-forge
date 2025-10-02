import { Button } from "@/components/ui/button";
import { InteractiveBackground } from "@/components/InteractiveBackground";
import { Card } from "@/components/ui/card";

export const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center" style={{ backgroundColor: '#E6E6FA' }}>
      <InteractiveBackground />
      <div className="container mx-auto px-4 md:px-8 relative z-10 pt-12">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-3xl md:text-4xl lg:text-5xl leading-relaxed font-antic-didone" style={{ color: '#003f6a' }}>
            Sharing timely insights in health economics, research methods, and multicultural education—building toward a global consultancy platform.
          </p>
        </div>
        
        <div className="mt-24">
          <Card className="group p-4 pt-2 bg-gradient-card border-2 border-border hover:border-primary/50 hover:shadow-glow transition-all duration-300 hover:-translate-y-2 cursor-pointer h-32 flex flex-col items-center justify-start">
            <h3 className="text-2xl font-bold italic font-antic-didone" style={{ color: '#003f6a' }}>Featured Post</h3>
            <p className="text-lg font-afacad-flux font-thin mt-2" style={{ color: '#003f6a' }}>Latest blog or case study</p>
          </Card>
        </div>
      </div>
    </section>
  );
};
