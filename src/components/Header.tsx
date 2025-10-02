import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4">
      <div className="container mx-auto bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border border-border/50 rounded-2xl shadow-hover">
        <div className="px-6 py-2 flex items-center justify-between">
          <div className="flex flex-col gap-0 items-center">
            <div className="text-3xl font-bold cursor-pointer hover:opacity-80 transition-opacity" style={{ color: '#003f6a' }}>
              Insights
            </div>
            <div className="text-lg font-semibold tracking-wide font-afacad-flux" style={{ color: '#003f6a' }}>
              Evidence. Strategy. Impact.
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-base font-semibold hover:opacity-70 transition-all duration-300 cursor-pointer" style={{ color: '#003f6a' }}>
              Services
            </a>
            <a href="#about" className="text-base font-semibold hover:opacity-70 transition-all duration-300 cursor-pointer" style={{ color: '#003f6a' }}>
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
