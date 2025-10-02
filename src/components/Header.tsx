import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold text-foreground">
            AXO
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#services" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Services
          </a>
          <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
          <Button variant="hero" asChild>
            <a href="#contact">Get In Touch</a>
          </Button>
        </nav>
      </div>
    </header>
  );
};
