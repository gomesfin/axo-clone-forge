import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4">
      <div className="container mx-auto bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border border-border/50 rounded-2xl shadow-hover">
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex flex-col gap-0.5 items-center">
            <div className="text-4xl font-bold cursor-pointer hover:opacity-80 transition-opacity" style={{ color: '#5e3ca0' }}>
              Insights
            </div>
            <div className="text-base text-black font-semibold tracking-wide font-afacad-flux">
              Evidence. Strategy. Impact.
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-base font-semibold text-black hover:opacity-70 transition-all duration-300 cursor-pointer">
              Services
            </a>
            <a href="#about" className="text-base font-semibold text-black hover:opacity-70 transition-all duration-300 cursor-pointer">
              About
            </a>
            <Button 
              variant="hero" 
              size="lg" 
              asChild 
              className="cursor-pointer" 
              style={{ backgroundImage: 'none', backgroundColor: '#E6E6FA', color: '#000000' }}
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};
