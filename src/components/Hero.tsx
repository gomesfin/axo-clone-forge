import { Button } from "@/components/ui/button";
import { InteractiveBackground } from "@/components/InteractiveBackground";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

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
          <Card className="group p-4 pt-2 bg-card/95 border-2 border-border hover:border-primary/50 hover:shadow-glow transition-all duration-300 hover:-translate-y-2 cursor-pointer h-24 flex flex-col items-center justify-start">
            <div className="flex items-center gap-4 w-full justify-center">
              <Separator className="w-16" style={{ backgroundColor: '#003f6a' }} />
              <h3 className="text-2xl font-bold italic font-antic-didone whitespace-nowrap" style={{ color: '#003f6a' }}>Featured Post</h3>
              <Separator className="w-16" style={{ backgroundColor: '#003f6a' }} />
            </div>
            <p className="text-lg font-afacad-flux font-thin mt-2" style={{ color: '#003f6a' }}>Latest blog or case study</p>
          </Card>
        </div>

        <div className="mt-24">
          <h3 className="text-2xl md:text-3xl font-light text-center mb-4 font-raleway" style={{ color: '#003f6a' }}>
            Quick Links
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
            <Card className="group py-6 bg-card/65 border-2 border-border hover:border-primary/50 hover:shadow-glow transition-all duration-300 hover:-translate-y-2 cursor-pointer flex items-center justify-center rounded-none" style={{ paddingLeft: '4px', paddingRight: '4px' }}>
              <h4 className="text-3xl font-medium text-center font-cinzel" style={{ color: '#003f6a' }}>Consulting Services</h4>
            </Card>
            <Card className="group py-6 bg-card/65 border-2 border-border hover:border-primary/50 hover:shadow-glow transition-all duration-300 hover:-translate-y-2 cursor-pointer flex items-center justify-center rounded-none" style={{ paddingLeft: '4px', paddingRight: '4px' }}>
              <h4 className="text-3xl font-medium text-center font-cinzel" style={{ color: '#003f6a' }}>Teaching Resources</h4>
            </Card>
            <Card className="group py-6 bg-card/65 border-2 border-border hover:border-primary/50 hover:shadow-glow transition-all duration-300 hover:-translate-y-2 cursor-pointer flex items-center justify-center rounded-none" style={{ paddingLeft: '4px', paddingRight: '4px' }}>
              <h4 className="text-3xl font-medium text-center font-cinzel" style={{ color: '#003f6a' }}>Partners</h4>
            </Card>
            <Card className="group py-6 bg-card/65 border-2 border-border hover:border-primary/50 hover:shadow-glow transition-all duration-300 hover:-translate-y-2 cursor-pointer flex items-center justify-center rounded-none" style={{ paddingLeft: '4px', paddingRight: '4px' }}>
              <h4 className="text-3xl font-medium text-center font-cinzel" style={{ color: '#003f6a' }}>Contact</h4>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
