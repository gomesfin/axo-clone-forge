import { Button } from "@/components/ui/button";
import Logo from "@/assets/Logo-new.png";

export const Header = () => {
  return (
    <header className="fixed top-2 md:top-4 left-0 right-0 z-50 px-2 md:px-4">
      <div className="container mx-auto bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border border-border/50 rounded-xl md:rounded-2xl shadow-hover">
        <div className="px-2 md:px-5 py-1 flex items-center justify-between">
          <img 
            src={Logo} 
            alt="Insights - Evidence. Strategy. Impact." 
            className="h-12 md:h-14 lg:h-16 cursor-pointer hover:opacity-80 transition-opacity -ml-2 md:-ml-8"
          />
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 xl:gap-10 -mr-2 md:-mr-8">
            <a href="#services" className="text-base lg:text-xl xl:text-2xl hover:opacity-70 transition-all duration-300 cursor-pointer whitespace-nowrap" style={{ color: 'black' }}>
              Services
            </a>
            <a href="#blog" className="text-base lg:text-xl xl:text-2xl hover:opacity-70 transition-all duration-300 cursor-pointer whitespace-nowrap" style={{ color: 'black' }}>
              Blog
            </a>
            <a href="#resources" className="text-base lg:text-xl xl:text-2xl hover:opacity-70 transition-all duration-300 cursor-pointer whitespace-nowrap" style={{ color: 'black' }}>
              Resources
            </a>
            <a href="#partners" className="text-base lg:text-xl xl:text-2xl hover:opacity-70 transition-all duration-300 cursor-pointer whitespace-nowrap" style={{ color: 'black' }}>
              Partners
            </a>
            <a href="#about" className="text-base lg:text-xl xl:text-2xl hover:opacity-70 transition-all duration-300 cursor-pointer whitespace-nowrap" style={{ color: 'black' }}>
              About
            </a>
            <Button
              variant="hero" 
              size="lg" 
              asChild 
              className="cursor-pointer font-abeezee text-base lg:text-lg px-3 lg:px-6 py-2 lg:py-3" 
              style={{ backgroundImage: 'none', backgroundColor: '#E6E6FA', color: 'black' }}
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};
