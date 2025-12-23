import { Card } from "@/components/ui/card";
import aauLogo from "@/assets/aau-logo.png";
import wageningenLogo from "@/assets/wageningen-logo.png";
import osuLogo from "@/assets/osu-logo.svg";

const partners = [
  {
    name: "Addis Ababa University",
    logo: aauLogo,
  },
  {
    name: "Wageningen University",
    logo: wageningenLogo,
  },
  {
    name: "Ohio State University",
    logo: osuLogo,
  },
];

export const Partners = () => {
  return (
    <section id="partners" className="pt-36 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[2px] w-16 md:w-24 bg-gradient-to-r from-transparent to-[#003f6a]"></div>
            <h2 className="text-3xl md:text-4xl font-bold font-aboreto" style={{ color: 'black' }}>
              Partners
            </h2>
            <div className="h-[2px] w-16 md:w-24 bg-gradient-to-l from-transparent to-[#003f6a]"></div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {partners.map((partner, index) => (
            <Card
              key={index}
              className="group p-6 bg-gradient-card border-2 border-border hover:border-primary/50 hover:shadow-glow transition-all duration-300 hover:-translate-y-2 cursor-pointer flex items-center justify-center"
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-all duration-300 overflow-hidden p-2">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-lg font-bold group-hover:text-primary transition-colors duration-300 max-w-[150px]" style={{ color: 'black' }}>
                  {partner.name}
                </h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
