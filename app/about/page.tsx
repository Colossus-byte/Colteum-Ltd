import { Metadata } from "next";
import { Target, Shield, Zap, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Colteum Limited",
  description:
    "Learn about Colteum Limited, a diversified enterprise engaged in manufacturing, sourcing, trading, digital transformation, and strategic advisory.",
};

export default function AboutPage() {
  const values = [
    {
      title: "Global Reach",
      description:
        "Operating across international markets with a robust network of partners and distributors.",
      icon: <Target className="w-8 h-8 text-[#C8A227]" />,
    },
    {
      title: "Innovation First",
      description:
        "Leveraging advanced technology and digital systems to drive efficiency and growth.",
      icon: <Zap className="w-8 h-8 text-[#C8A227]" />,
    },
    {
      title: "Strategic Integrity",
      description:
        "Building long-term value through transparent, ethical, and sustainable business practices.",
      icon: <Shield className="w-8 h-8 text-[#C8A227]" />,
    },
    {
      title: "Empowerment",
      description:
        "Fostering capacity building and professional coaching for individuals and corporations.",
      icon: <Users className="w-8 h-8 text-[#C8A227]" />,
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-[#0A1F44] overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: 'url("https://picsum.photos/1920/1080?random=3")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F44] to-transparent z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-[#C8A227]">Colteum</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl font-light leading-relaxed">
            A diversified enterprise engaged in manufacturing, sourcing,
            trading, digital transformation, performance-based distribution
            systems, and strategic advisory across local and international
            markets.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold text-[#C8A227] uppercase tracking-widest mb-3">
                Our Mission
              </h2>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#0A1F44] mb-6">
                Driving Global Commerce & Digital Innovation
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                At Colteum Limited, we believe in the power of strategic
                integration. By combining traditional commerce with cutting-edge
                digital technology, we create scalable solutions that drive
                sustainable growth for our partners and clients.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our expertise spans across multiple sectors, allowing us to
                identify unique opportunities and implement cross-functional
                strategies that deliver measurable results in an increasingly
                complex global market.
              </p>
            </div>
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    'url("https://picsum.photos/800/1000?random=4")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-[#C8A227] uppercase tracking-widest mb-3">
              Core Values
            </h2>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#0A1F44]">
              The Principles That Guide Us
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all border border-slate-100"
              >
                <div className="mb-6">{value.icon}</div>
                <h4 className="text-xl font-bold text-[#0A1F44] mb-3">
                  {value.title}
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
