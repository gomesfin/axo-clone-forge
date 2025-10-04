import { Card } from "@/components/ui/card";
import BrainIcon from "@/assets/brain-icon.svg";
import StarIcon from "@/assets/star-icon.svg";
import TacticIcon from "@/assets/tactic-icon.svg";
import StudyDesignIcon from "@/assets/study-design-icon.svg";

const services = [
  {
    title: "HEOR Strategy & Modeling",
    icon: BrainIcon,
    description: "Strategic health economics and outcomes research planning with advanced modeling techniques",
  },
  {
    title: "Claims Data Synthesis",
    icon: TacticIcon,
    description: "Comprehensive analysis and synthesis of healthcare claims data for actionable insights",
  },
  {
    title: "Payer Evidence Plans",
    icon: StarIcon,
    description: "Development of evidence generation strategies tailored for payer stakeholders",
  },
  {
    title: "Custom Engagements",
    icon: StudyDesignIcon,
    description: "Specialized services including publication support and slide design",
  },
];

export const ServicesOffered = () => {
  return (
    <section className="py-20" style={{ backgroundColor: '#ffffff' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[2px] w-16 md:w-24 bg-gradient-to-r from-transparent to-[#003f6a]"></div>
            <h2 className="text-3xl md:text-4xl font-bold font-aboreto" style={{ color: '#003f6a' }}>
              Services We Offer
            </h2>
            <div className="h-[2px] w-16 md:w-24 bg-gradient-to-l from-transparent to-[#003f6a]"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group p-6 bg-white border-2 border-border hover:border-primary/50 hover:shadow-glow transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <img 
                    src={service.icon} 
                    alt={service.title} 
                    className="w-10 h-10 group-hover:scale-110 transition-transform duration-300" 
                  />
                </div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300" style={{ color: '#003f6a' }}>
                  {service.title}
                </h3>
                <p className="text-sm transition-colors duration-300" style={{ color: '#003f6a' }}>
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
