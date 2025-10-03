import { Button } from "@/components/ui/button";

export const ContactCTA = () => {
  return (
    <section id="contact" className="py-20" style={{ backgroundColor: '#E6E6FA' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#003f6a' }}>
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-lg" style={{ color: '#003f6a' }}>
            Let's discuss how we can help your business thrive with our IT consultancy services.
          </p>
          <Button 
            variant="hero" 
            size="lg" 
            asChild 
            className="text-lg px-10 py-6 cursor-pointer font-montserrat"
            style={{ backgroundImage: 'none', backgroundColor: '#E6E6FA', color: '#003f6a' }}
          >
            <a href="mailto:contact@axo.mt">Get In Touch</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
