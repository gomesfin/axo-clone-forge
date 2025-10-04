import { Card } from "@/components/ui/card";
import { TrendingUp, Search } from "lucide-react";
import BrainIcon from "@/assets/brain-icon.svg";
import TacticIcon from "@/assets/tactic-icon.svg";
import CoronavirusIcon from "@/assets/coronavirus-icon.svg";

const services = [
  {
    title: "HEOR & Real-World Evidence",
    icon: "tactic",
    description: "Description",
  },
  {
    title: "Epidemiology Explained",
    icon: "coronavirus",
    description: "Description",
  },
  {
    title: "Study Design & Methods",
    icon: TrendingUp,
    description: "Description",
  },
  {
    title: "Visual Strategy & Slide Design",
    icon: Search,
    description: "Description",
  },
  {
    title: "Advanced methods",
    icon: "brain",
    description: "Description",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-20" style={{ backgroundColor: '#E6E6FA' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-aboreto" style={{ color: '#003f6a' }}>
            BLOG
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group p-4 bg-gradient-card border-2 border-border hover:border-primary/50 hover:shadow-glow transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    {Icon === "brain" ? (
                      <img src={BrainIcon} alt="brain" className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" style={{ filter: 'invert(29%) sepia(96%) saturate(1234%) hue-rotate(180deg) brightness(94%) contrast(101%)' }} />
                    ) : Icon === "tactic" ? (
                      <img src={TacticIcon} alt="tactic" className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" style={{ filter: 'invert(29%) sepia(96%) saturate(1234%) hue-rotate(180deg) brightness(94%) contrast(101%)' }} />
                    ) : Icon === "coronavirus" ? (
                      <img src={CoronavirusIcon} alt="coronavirus" className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
                    ) : (
                      <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                    )}
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300" style={{ color: '#003f6a' }}>
                    {service.title}
                  </h3>
                  <p className="text-base transition-colors duration-300" style={{ color: '#003f6a' }}>
                    {service.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
