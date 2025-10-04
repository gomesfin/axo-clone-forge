import { Button } from "@/components/ui/button";
import { InteractiveBackground } from "@/components/InteractiveBackground";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import starIcon from "@/assets/star-icon.svg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center" style={{ backgroundColor: '#E6E6FA' }}>
      <InteractiveBackground />
      <div className="container mx-auto px-4 md:px-8 relative z-10 pt-32">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-3xl md:text-4xl lg:text-5xl leading-relaxed font-antic-didone" style={{ color: '#003f6a' }}>
            Sharing timely insights in health economics, research methods, and multicultural education—building toward a global consultancy platform.
          </p>
        </div>
        
        <div className="mt-24">
          <Card className="group p-4 pt-2 bg-gradient-card border-2 border-border hover:border-primary/50 hover:shadow-glow transition-all duration-300 hover:-translate-y-2 cursor-pointer h-24 flex flex-col items-center justify-start">
            <div className="flex items-center gap-4 w-full justify-center">
              <Separator className="w-16" style={{ backgroundColor: '#003f6a' }} />
              <h3 className="text-2xl font-bold italic font-antic-didone whitespace-nowrap" style={{ color: '#003f6a' }}>Featured Post</h3>
              <Separator className="w-16" style={{ backgroundColor: '#003f6a' }} />
            </div>
            <p className="text-lg font-afacad-flux font-thin mt-2" style={{ color: '#003f6a' }}>Latest blog or case study</p>
          </Card>
        </div>

        <div className="mt-44">
          <div className="flex items-center justify-center gap-4 mb-4">
            <img src={starIcon} alt="" className="w-8 h-8" style={{ filter: 'brightness(0) saturate(100%) invert(100%)' }} />
            <h3 className="font-bold text-center font-aboreto" style={{ color: '#003f6a', fontSize: '22.68px' }}>
              Quick Links
            </h3>
            <img src={starIcon} alt="" className="w-8 h-8" style={{ filter: 'brightness(0) saturate(100%) invert(100%)' }} />
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 w-[50%]">
              {/* All cards have consistent px-4 padding */}
              <Card className="group py-8 px-4 bg-gradient-card border-2 border-border hover:border-primary/50 hover:shadow-glow transition-all duration-300 hover:-translate-y-2 cursor-pointer flex items-center justify-center rounded-none">
                <h4 className="text-xl font-medium text-center font-cinzel uppercase" style={{ color: '#003f6a' }}>
                  <span className="text-2xl">C</span>ONSULTING <span className="text-2xl">S</span>ERVICES
                </h4>
              </Card>
              <Card className="group py-8 px-4 bg-gradient-card border-2 border-border hover:border-primary/50 hover:shadow-glow transition-all duration-300 hover:-translate-y-2 cursor-pointer flex items-center justify-center rounded-none">
                <h4 className="text-xl font-medium text-center font-cinzel uppercase" style={{ color: '#003f6a' }}>
                  <span className="text-2xl">T</span>EACHING <span className="text-2xl">R</span>ESOURCES
                </h4>
              </Card>
              <Card className="group py-8 px-4 bg-gradient-card border-2 border-border hover:border-primary/50 hover:shadow-glow transition-all duration-300 hover:-translate-y-2 cursor-pointer flex items-center justify-center rounded-none">
                <h4 className="text-xl font-medium text-center font-cinzel uppercase" style={{ color: '#003f6a' }}>
                  <span className="text-2xl">P</span>ARTNERS
                </h4>
              </Card>
              <Card className="group py-8 px-4 bg-gradient-card border-2 border-border hover:border-primary/50 hover:shadow-glow transition-all duration-300 hover:-translate-y-2 cursor-pointer flex items-center justify-center rounded-none">
                <h4 className="text-xl font-medium text-center font-cinzel uppercase" style={{ color: '#003f6a' }}>
                  <span className="text-2xl">C</span>ONTACT
                </h4>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
