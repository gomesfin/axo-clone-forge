import { Card } from "@/components/ui/card";

const services = [
  {
    title: "HEOR Strategy & Modeling",
    description: "Strategic health economics and outcomes research planning with advanced modeling techniques",
  },
  {
    title: "Claims Data Synthesis",
    description: "Comprehensive analysis and synthesis of healthcare claims data for actionable insights",
  },
  {
    title: "Payer Evidence Plans",
    description: "Development of evidence generation strategies tailored for payer stakeholders",
  },
  {
    title: "Custom Engagements",
    description: "Specialized services including publication support and slide design",
  },
];

export const ServicesOffered = () => {
  return (
    <section id="resources" className="pt-36 pb-20" style={{ backgroundColor: '#e6e6e6' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[2px] w-16 md:w-24 bg-gradient-to-r from-transparent to-[#003f6a]"></div>
            <h2 className="text-3xl md:text-4xl font-bold font-aboreto" style={{ color: 'black' }}>
              Services We Offer
            </h2>
            <div className="h-[2px] w-16 md:w-24 bg-gradient-to-l from-transparent to-[#003f6a]"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group p-4 bg-gradient-card border-2 border-border hover:border-primary/50 hover:shadow-glow transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300" style={{ color: 'black' }}>
                  {service.title}
                </h3>
                <p className="text-base transition-colors duration-300" style={{ color: 'black' }}>
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
