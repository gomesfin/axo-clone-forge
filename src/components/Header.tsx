import { Button } from "@/components/ui/button";
import insightsLogo from "@/assets/insights-logo.png";

export const Header = () => {
  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4">
      <div className="container mx-auto bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border border-border/50 rounded-2xl shadow-hover">
        <div className="px-5 py-1 flex items-center justify-between">
          <div className="flex items-center -ml-8">
            <img 
              src={insightsLogo} 
              alt="Insights - Evidence. Strategy. Impact." 
              className="h-16 w-auto cursor-pointer hover:opacity-80 transition-opacity"
            />
          </div>
          <nav className="hidden md:flex items-center gap-6 -mr-8">
            <a href="#services" className="text-base hover:opacity-70 transition-all duration-300 cursor-pointer" style={{ color: '#003f6a' }}>
              Services
            </a>
            <a href="#blog" className="text-base hover:opacity-70 transition-all duration-300 cursor-pointer" style={{ color: '#003f6a' }}>
              Blog
            </a>
            <a href="#resources" className="text-base hover:opacity-70 transition-all duration-300 cursor-pointer" style={{ color: '#003f6a' }}>
              Resources
            </a>
            <a href="#partners" className="text-base hover:opacity-70 transition-all duration-300 cursor-pointer" style={{ color: '#003f6a' }}>
              Partners
            </a>
            <a href="#about" className="text-base hover:opacity-70 transition-all duration-300 cursor-pointer" style={{ color: '#003f6a' }}>
              About
            </a>
            <Button
              variant="hero" 
              size="lg" 
              asChild 
              className="cursor-pointer" 
              style={{ backgroundImage: 'none', backgroundColor: '#E6E6FA', color: '#003f6a' }}
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};
