import { Card } from "@/components/ui/card";
import { Lightbulb, RefreshCw, TrendingUp, Search } from "lucide-react";

const services = [
  {
    title: "I.T. Strategy Planning",
    icon: Lightbulb,
    description: "Develop comprehensive IT strategies aligned with your business goals",
  },
  {
    title: "Restructuring",
    icon: RefreshCw,
    description: "Optimize and reorganize your IT infrastructure for maximum efficiency",
  },
  {
    title: "Best steps to take forward",
    icon: TrendingUp,
    description: "Expert guidance on technology roadmap and implementation",
  },
  {
    title: "Locating the source of the issue",
    icon: Search,
    description: "Identify and resolve technical challenges at their root",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our services for IT Consultancy solutions include:
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-6 bg-gradient-card border-border hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
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
