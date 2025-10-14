export const Footer = () => {
  return (
    <footer className="border-t py-8" style={{ backgroundColor: '#E6E6FA', borderColor: 'rgba(0,0,0,0.1)' }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm" style={{ color: 'black' }}>
            © {new Date().getFullYear()} Insights LLC. All rights reserved.
          </div>
          <nav className="flex gap-6">
            <a href="#services" className="text-sm font-medium hover:text-primary transition-all duration-300 cursor-pointer hover:scale-110" style={{ color: 'black' }}>
              Services
            </a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-all duration-300 cursor-pointer hover:scale-110" style={{ color: 'black' }}>
              About
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-all duration-300 cursor-pointer hover:scale-110" style={{ color: 'black' }}>
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};
