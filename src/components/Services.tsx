import { Card } from "@/components/ui/card";
import BrainIcon from "@/assets/brain-icon.svg";
import HeorIcon from "@/assets/heor-icon.svg";
import EpidemiologyIcon from "@/assets/epidemiology-icon.svg";
import StudyDesignIcon from "@/assets/study-design-icon.svg";
import VisualStrategyIcon from "@/assets/visual-strategy-icon.svg";

const services = [
  {
    title: "HEOR & Real-World Evidence",
    icon: "heor",
    description: "Description",
  },
  {
    title: "Epidemiology Explained",
    icon: "epidemiology",
    description: "Description",
  },
  {
    title: "Study Design & Methods",
    icon: "studydesign",
    description: "Description",
  },
  {
    title: "Visual Strategy & Slide Design",
    icon: "visualstrategy",
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
    <section id="services" className="pt-36 pb-20" style={{ backgroundColor: '#E6E6FA' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[2px] w-16 md:w-24 bg-gradient-to-r from-transparent to-[#003f6a]"></div>
            <h2 className="text-3xl md:text-4xl font-bold font-aboreto" style={{ color: '#003f6a' }}>
              BLOG
            </h2>
            <div className="h-[2px] w-16 md:w-24 bg-gradient-to-l from-transparent to-[#003f6a]"></div>
          </div>
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
                      <img src={BrainIcon} alt="brain" className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                    ) : Icon === "heor" ? (
                      <img src={HeorIcon} alt="heor" className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
                    ) : Icon === "epidemiology" ? (
                      <img src={EpidemiologyIcon} alt="epidemiology" className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
                    ) : Icon === "studydesign" ? (
                      <img src={StudyDesignIcon} alt="study design" className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
                    ) : (
                      <img src={VisualStrategyIcon} alt="visual strategy" className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
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
