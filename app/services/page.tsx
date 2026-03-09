import { Metadata } from "next";
import {
  Globe,
  TrendingUp,
  Cpu,
  Briefcase,
  Building2,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services | Colteum Limited",
  description:
    "Explore the comprehensive services offered by Colteum Limited, including commerce, digital marketing, technology, consulting, and investments.",
};

export default function ServicesPage() {
  const serviceCategories = [
    {
      id: "commerce",
      title: "Commerce & Trade",
      description:
        "Global sourcing, manufacturing, and cross-border distribution.",
      icon: <Globe className="w-10 h-10 text-[#C8A227]" />,
      items: [
        {
          name: "Manufacturing & Sourcing",
          desc: "Production and global sourcing of wellness, lifestyle and consumer goods.",
          features: [
            "OEM/ODM manufacturing",
            "Quality control & compliance",
            "Supply chain optimization",
            "Raw material procurement",
          ],
        },
        {
          name: "Import & Export",
          desc: "Cross-border trading operations and international distribution.",
          features: [
            "Customs clearance & documentation",
            "Freight forwarding & logistics",
            "Tariff & duty management",
            "Global trade compliance",
          ],
        },
        {
          name: "E-Commerce & Retail",
          desc: "Direct-to-consumer platforms, wholesale supply, affiliate and distribution networks.",
          features: [
            "D2C platform development",
            "Marketplace integration",
            "Inventory management systems",
            "Global fulfillment networks",
          ],
        },
      ],
    },
    {
      id: "marketing",
      title: "Digital Marketing & Branding",
      description:
        "Strategic positioning and performance-driven growth systems.",
      icon: <TrendingUp className="w-10 h-10 text-[#C8A227]" />,
      items: [
        {
          name: "Brand Strategy",
          desc: "Positioning, brand identity design, and corporate storytelling.",
          features: [
            "Market research & positioning",
            "Visual identity & logo design",
            "Corporate messaging",
            "Rebranding campaigns",
          ],
        },
        {
          name: "Advertising & Media",
          desc: "Paid ads, media buying, PR campaigns and content production.",
          features: [
            "PPC & Search engine marketing",
            "Programmatic media buying",
            "Influencer partnerships",
            "Video & content production",
          ],
        },
        {
          name: "Social Media Management",
          desc: "Performance-driven digital engagement and growth systems.",
          features: [
            "Community building",
            "Organic growth strategies",
            "Social listening & analytics",
            "Crisis management",
          ],
        },
      ],
    },
    {
      id: "technology",
      title: "Technology Services",
      description: "Advanced software solutions and data architecture.",
      icon: <Cpu className="w-10 h-10 text-[#C8A227]" />,
      items: [
        {
          name: "Software Development",
          desc: "Custom platforms, SaaS tools, automation systems and enterprise solutions.",
          features: [
            "Custom web & mobile apps",
            "Enterprise ERP/CRM systems",
            "API development & integration",
            "Cloud architecture",
          ],
        },
        {
          name: "Blockchain & Emerging Tech",
          desc: "Strategic advisory and development in decentralized systems.",
          features: [
            "Smart contract development",
            "Web3 integration",
            "Tokenomics consulting",
            "Decentralized applications (dApps)",
          ],
        },
        {
          name: "Data & Analytics",
          desc: "Business intelligence, analytics dashboards and automation architecture.",
          features: [
            "Predictive modeling",
            "Real-time BI dashboards",
            "Data warehousing",
            "Customer journey tracking",
          ],
        },
      ],
    },
    {
      id: "consulting",
      title: "Consulting & Coaching",
      description: "Strategic planning and capacity building programs.",
      icon: <Briefcase className="w-10 h-10 text-[#C8A227]" />,
      items: [
        {
          name: "Business Consultancy",
          desc: "Strategic planning, operational optimization and growth architecture.",
          features: [
            "Market entry strategy",
            "Operational scaling",
            "Change management",
            "Financial restructuring",
          ],
        },
        {
          name: "Professional Coaching",
          desc: "Capacity building programs for individuals and corporations.",
          features: [
            "Executive leadership training",
            "Team building workshops",
            "Productivity optimization",
            "Conflict resolution",
          ],
        },
        {
          name: "Performance Sales Training",
          desc: "Affiliate and independent distributor training systems.",
          features: [
            "B2B sales methodologies",
            "High-ticket closing",
            "Affiliate network building",
            "Sales funnel optimization",
          ],
        },
      ],
    },
    {
      id: "investments",
      title: "Investments & Holdings",
      description: "Strategic acquisitions and joint ventures.",
      icon: <Building2 className="w-10 h-10 text-[#C8A227]" />,
      items: [
        {
          name: "Subsidiary Management",
          desc: "Acquisition, management, and holding of subsidiary brands.",
          features: [
            "Operational oversight",
            "Financial auditing",
            "Brand scaling",
            "Talent acquisition",
          ],
        },
        {
          name: "Joint Ventures",
          desc: "Strategic partnerships and international business ventures.",
          features: [
            "Partner vetting & due diligence",
            "Cross-border alliances",
            "Resource sharing frameworks",
            "Profit-sharing structuring",
          ],
        },
        {
          name: "Asset Allocation",
          desc: "Diversified investment portfolios across high-growth sectors.",
          features: [
            "Portfolio diversification",
            "Risk management",
            "High-yield growth funds",
            "Real estate & tech investments",
          ],
        },
      ],
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-[#0A1F44] overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: 'url("https://picsum.photos/1920/1080?random=5")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F44] to-transparent z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-[#C8A227]">Expertise</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl font-light leading-relaxed">
            Comprehensive business solutions designed to accelerate growth,
            optimize operations, and maximize market impact across multiple
            industries.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {serviceCategories.map((category, index) => (
              <div
                key={category.id}
                id={category.id}
                className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-16 items-start scroll-mt-32`}
              >
                <div className="lg:w-1/3 lg:sticky top-32 group">
                  <div className="mb-6 transform transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2">
                    {category.icon}
                  </div>
                  <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0A1F44] mb-4">
                    {category.title}
                  </h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {category.description}
                  </p>
                </div>

                <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {category.items.map((item, i) => (
                    <div
                      key={i}
                      className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all border border-slate-100 flex flex-col h-full"
                    >
                      <h3 className="text-xl font-bold text-[#0A1F44] mb-3">
                        {item.name}
                      </h3>
                      <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                        {item.desc}
                      </p>
                      <ul className="space-y-3 mt-auto pt-6 border-t border-slate-100">
                        {item.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-sm text-slate-600">
                            <CheckCircle2 className="w-4 h-4 text-[#C8A227] mr-3 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
