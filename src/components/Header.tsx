import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4">
      <div className="container mx-auto bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border border-border/50 rounded-2xl shadow-hover">
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold text-primary cursor-pointer hover:opacity-80 transition-opacity">
              AXO
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-base font-semibold text-foreground/70 hover:text-primary transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full cursor-pointer">
              Services
            </a>
            <a href="#about" className="text-base font-semibold text-foreground/70 hover:text-primary transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full cursor-pointer">
              About
            </a>
            <Button variant="hero" size="lg" asChild className="cursor-pointer">
              <a href="#contact">Get In Touch</a>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};
