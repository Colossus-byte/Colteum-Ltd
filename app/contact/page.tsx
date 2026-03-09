import { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Colteum Limited",
  description:
    "Get in touch with Colteum Limited to discuss partnerships, consulting, and strategic opportunities.",
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-[#0A1F44] overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: 'url("https://picsum.photos/1920/1080?random=6")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F44] to-transparent z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Partner With <span className="text-[#C8A227]">Us</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl font-light leading-relaxed">
            Reach out to our team to explore collaboration opportunities,
            request consulting services, or learn more about our global
            operations.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-sm font-bold text-[#C8A227] uppercase tracking-widest mb-3">
                Get In Touch
              </h2>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#0A1F44] mb-8">
                Let&apos;s Build the Future of Commerce Together
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-12">
                Whether you are looking to expand your digital presence,
                optimize your supply chain, or explore strategic investments,
                Colteum Limited is your trusted partner for growth.
              </p>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center border border-slate-100 shadow-sm">
                    <MapPin className="w-6 h-6 text-[#C8A227]" />
                  </div>
                  <div className="ml-6">
                    <h4 className="text-lg font-bold text-[#0A1F44] mb-1">
                      Global Headquarters
                    </h4>
                    <p className="text-slate-600">
                      Emperor Plaza, 506
                      <br />
                      Koinange Street, Nairobi KE
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center border border-slate-100 shadow-sm">
                    <Mail className="w-6 h-6 text-[#C8A227]" />
                  </div>
                  <div className="ml-6">
                    <h4 className="text-lg font-bold text-[#0A1F44] mb-1">
                      Email Us
                    </h4>
                    <p className="text-slate-600">
                      colteumcompany@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center border border-slate-100 shadow-sm">
                    <Phone className="w-6 h-6 text-[#C8A227]" />
                  </div>
                  <div className="ml-6">
                    <h4 className="text-lg font-bold text-[#0A1F44] mb-1">
                      Call Us
                    </h4>
                    <p className="text-slate-600">
                      +254746089499
                      <br />
                      Mon-Fri, 9am-6pm EAT
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 sm:p-10 rounded-xl shadow-lg border border-slate-100">
              <h3 className="font-serif text-2xl font-bold text-[#0A1F44] mb-6">
                Send a Message
              </h3>
              <form action="https://formsubmit.co/colteumcompany@gmail.com" method="POST" className="space-y-6">
                <input type="hidden" name="_subject" value="New submission from Colteum website!" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 rounded-md border border-slate-200 focus:ring-2 focus:ring-[#C8A227] focus:border-transparent outline-none transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 rounded-md border border-slate-200 focus:ring-2 focus:ring-[#C8A227] focus:border-transparent outline-none transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-md border border-slate-200 focus:ring-2 focus:ring-[#C8A227] focus:border-transparent outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 rounded-md border border-slate-200 focus:ring-2 focus:ring-[#C8A227] focus:border-transparent outline-none transition-all bg-white"
                  >
                    <option value="">Select a topic</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="services">Services & Consulting</option>
                    <option value="investment">Investment Opportunities</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-md border border-slate-200 focus:ring-2 focus:ring-[#C8A227] focus:border-transparent outline-none transition-all resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0A1F44] hover:bg-[#153266] text-white font-semibold py-4 rounded-md transition-colors uppercase tracking-widest text-sm"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
