import Link from "next/link";
import {
  ArrowRight,
  Globe,
  TrendingUp,
  Cpu,
  Briefcase,
  BarChart3,
  Building2,
} from "lucide-react";

export default function Home() {
  const services = [
    {
      title: "Commerce & Trade",
      description:
        "Production, global sourcing, and cross-border trading operations.",
      icon: <Globe className="w-6 h-6 text-[#C8A227]" />,
      href: "/services#commerce",
    },
    {
      title: "Digital Marketing",
      description:
        "Brand strategy, media buying, and performance-driven growth systems.",
      icon: <TrendingUp className="w-6 h-6 text-[#C8A227]" />,
      href: "/services#marketing",
    },
    {
      title: "Technology Services",
      description:
        "Custom platforms, SaaS tools, and business intelligence architecture.",
      icon: <Cpu className="w-6 h-6 text-[#C8A227]" />,
      href: "/services#technology",
    },
    {
      title: "Consulting & Coaching",
      description:
        "Strategic planning, operational optimization, and capacity building.",
      icon: <Briefcase className="w-6 h-6 text-[#C8A227]" />,
      href: "/services#consulting",
    },
    {
      title: "Investments",
      description:
        "Acquisition and management of subsidiary brands and joint ventures.",
      icon: <Building2 className="w-6 h-6 text-[#C8A227]" />,
      href: "/services#investments",
    },
    {
      title: "Data & Analytics",
      description: "Advanced analytics dashboards and automation architecture.",
      icon: <BarChart3 className="w-6 h-6 text-[#C8A227]" />,
      href: "/services#technology",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0A1F44]">
        <div
          className="absolute inset-0 z-0 opacity-40"
          style={{
            backgroundImage: 'url("https://picsum.photos/1920/1080?random=1")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1F44]/80 via-[#0A1F44]/60 to-[#0A1F44] z-0" />

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mt-16">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
            Global Commerce. <br className="hidden sm:block" />
            <span className="text-[#C8A227]">Digital Innovation.</span>{" "}
            <br className="hidden sm:block" />
            Strategic Growth.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-10 font-light leading-relaxed">
            Colteum Limited operates across product manufacturing, global trade,
            digital marketing, advanced technology systems, consulting, and
            strategic investments.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-[#C8A227] hover:bg-[#b08d22] transition-all rounded-sm uppercase tracking-widest"
            >
              Partner With Us
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border border-white/30 hover:bg-white/10 transition-all rounded-sm uppercase tracking-widest"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-sm font-bold text-[#C8A227] uppercase tracking-widest mb-3">
              About Colteum
            </h2>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#0A1F44] mb-6">
              A Diversified Enterprise for the Modern Economy
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              We are engaged in manufacturing, sourcing, trading, digital
              transformation, performance-based distribution systems, and
              strategic advisory across local and international markets.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center text-[#0A1F44] font-semibold hover:text-[#C8A227] transition-colors group uppercase tracking-widest text-sm"
            >
              Learn More About Us
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-[#C8A227] uppercase tracking-widest mb-3">
              Our Expertise
            </h2>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#0A1F44]">
              Comprehensive Business Solutions
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100"
              >
                <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-[#0A1F44] mb-3">
                  {service.title}
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0A1F44] relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: 'url("https://picsum.photos/1920/1080?random=2")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-6">
            Ready to Accelerate Your Growth?
          </h2>
          <p className="text-xl text-slate-300 mb-10 font-light">
            Partner with Colteum Limited to leverage our global network,
            advanced technology, and strategic expertise.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[#0A1F44] bg-white hover:bg-slate-100 transition-all rounded-sm uppercase tracking-widest"
          >
            Contact Our Team
          </Link>
        </div>
      </section>
    </>
  );
}
