import { Card } from "@/components/ui/card";

const aboutItems = [
  {
    title: "Who are we?",
    description: "A team of dedicated professionals committed to delivering evidence-based insights and strategic solutions for the healthcare industry.",
  },
  {
    title: "Our Mission",
    description: "To bridge the gap between complex health data and actionable strategies that drive meaningful outcomes for patients and stakeholders.",
  },
];

export const About = () => {
  return (
    <section id="about" className="pt-36 pb-20" style={{ backgroundColor: '#e8d9d9' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[2px] w-16 md:w-24 bg-gradient-to-r from-transparent to-[#003f6a]"></div>
            <h2 className="text-3xl md:text-4xl font-bold font-aboreto" style={{ color: 'black' }}>
              About
            </h2>
            <div className="h-[2px] w-16 md:w-24 bg-gradient-to-l from-transparent to-[#003f6a]"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {aboutItems.map((item, index) => (
            <Card
              key={index}
              className="group p-6 bg-gradient-card border-2 border-border hover:border-primary/50 hover:shadow-glow transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300" style={{ color: 'black' }}>
                  {item.title}
                </h3>
                <p className="text-base transition-colors duration-300" style={{ color: 'black' }}>
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
