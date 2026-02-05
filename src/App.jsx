import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  Menu, 
  X, 
  Ship, 
  ClipboardCheck, 
  Biohazard, 
  Recycle, 
  ChevronRight 
} from 'lucide-react';

// --- DATA: Single Source of Truth ---

const services = [
  {
    title: "IHM Maintenance",
    desc: "Full lifecycle management of Inventory of Hazardous Materials ensuring EU SRR & HKC compliance.",
    icon: <ClipboardCheck size={32} />
  },
  {
    title: "Asbestos Consultancy",
    desc: "Certified removal, containment, and management plans by BOHS qualified surveyors.",
    icon: <Biohazard size={32} />
  },
  {
    title: "Green Recycling",
    desc: "Supervision of ship recycling to ensure environmental standards and safety protocols are met.",
    icon: <Recycle size={32} />
  },
  {
    title: "Vessel Inspections",
    desc: "Worldwide visual sampling checks and detailed surveys for classification requirements.",
    icon: <Ship size={32} />
  }
];

const locations = [
  {
    title: "IHM MARINE SERVICES",
    address: [
      "Oasis House", 
      "Triq il Port Hieles", 
      "Birzebbuga", 
      "BBG1801", 
      "Malta"
    ],
    emails: ["info@ihmmarineservices.com"],
    phone: null
  },
  {
    title: "IHM MARINE SERVICES LTD.",
    address: [
      "20-22 Wenlock Road", 
      "London N1 7GU", 
      "United Kingdom"
    ],
    emails: ["rory@ihmmarineservices.com", "info@ihmmarineservices.com"],
    phone: "+356 77990449"
  },
  {
    title: "IHM MARINE SERVICES PTE. LTD.",
    address: [
      "160 Robinson Road", 
      "#14-04, SBF Centre", 
      "Singapore 068914"
    ],
    emails: ["vic@ihmmarineservices.com", "info@ihmmarineservices.com"],
    phone: "+356 79482313"
  },
  {
    title: "IHM MARINE SERVICES",
    address: [
      "Aberdeen Energy & Innovation Parks", 
      "Enterprise Centre, Aberdeen Energy Park", 
      "Claymore Drive, Bridge of Don", 
      "Aberdeen, AB23 8GX", 
      "United Kingdom"
    ],
    emails: ["info@ihmmarineservices.com"],
    phone: null
  }
];

const certifications = ["DNV", "RINA", "IACS", "BOHS", "ISO 9001:2015"];

// --- COMPONENTS ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          
          {/* LOGO SECTION */}
          <div className="flex items-center flex-shrink-0">
            {/* This expects 'logo.png' to be in your /public folder */}
            <img 
              src="/ihm-logo2.png" 
              alt="IHM Marine Services" 
              className="h-20 w-auto object-contain py-2" 
            />
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-blue-900 font-medium">Services</a>
            <a href="#about" className="text-gray-600 hover:text-blue-900 font-medium">About</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-900 font-medium">Contact</a>
            <a 
              href="mailto:info@ihmmarineservices.com" 
              className="bg-blue-900 hover:bg-blue-800 text-white px-5 py-2 rounded-md font-semibold transition shadow-sm"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-blue-900 p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full left-0">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <a href="#services" className="block px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md">Services</a>
            <a href="#about" className="block px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md">About</a>
            <a href="#contact" className="block px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <div className="relative bg-slate-900 py-24 sm:py-32">
    {/* Background Image Overlay */}
    <div className="absolute inset-0 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        alt="Container Ship at Sea"
        className="w-full h-full object-cover opacity-20"
      />
    </div>
    
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
        Navigating Compliance. <span className="text-yellow-500">Securing Safety.</span>
      </h1>
      <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
        Your strategic ally for IHM Maintenance, Asbestos Consultancy, and Green Ship Recycling. 
        Certified by IACS members, serving clients globally.
      </p>
      <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center gap-4">
        <a href="#contact" className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-slate-900 bg-yellow-500 hover:bg-yellow-400 md:text-lg md:px-10 transition">
          Speak to a Surveyor
        </a>
        <a href="#services" className="flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-slate-900 md:text-lg md:px-10 transition">
          View Services
        </a>
      </div>
    </div>
  </div>
);

const TrustBar = () => (
  <div className="bg-gray-50 border-b border-gray-200">
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wider mb-6">
        Accredited & Certified By
      </p>
      <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
        {certifications.map((cert) => (
          <span key={cert} className="text-2xl font-bold text-slate-700">{cert}</span>
        ))}
      </div>
    </div>
  </div>
);

const Services = () => (
  <div id="services" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-base text-blue-900 font-semibold tracking-wide uppercase">Expertise</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Comprehensive Maritime Solutions
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
          From the bridge to the engine room, we ensure your vessel meets every regulatory standard.
        </p>
      </div>

      <div className="mt-20">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div key={service.title} className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500 rounded-lg shadow-sm hover:shadow-lg transition border border-gray-100">
              <div className="text-blue-900 mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg font-medium text-gray-900">
                <a href="#" className="focus:outline-none">
                  <span className="absolute inset-0" aria-hidden="true" />
                  {service.title}
                </a>
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                {service.desc}
              </p>
              <div className="mt-4 flex items-center text-sm font-medium text-blue-700">
                Learn more <ChevronRight size={16} className="ml-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Footer = () => (
  <footer id="contact" className="bg-blue-950 text-white border-t border-blue-900">
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      
      {/* Header for the section */}
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-white uppercase">Global Offices</h2>
        <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4"></div>
      </div>

      {/* Grid with Vertical Dividers (md:divide-x) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-blue-800">
        
        {locations.map((loc, index) => (
          <div key={index} className="flex flex-col items-center px-4 text-center">
            
            {/* Title */}
            <h3 className="font-bold text-yellow-500 text-sm mb-4 uppercase tracking-wider h-10 flex items-end justify-center">
              {loc.title}
            </h3>
            
            {/* Address */}
            <div className="text-gray-300 text-xs leading-relaxed mb-6 min-h-[80px]">
              {loc.address.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>

            {/* Contact Details (Pinned to bottom of card) */}
            <div className="mt-auto space-y-2 w-full border-t border-blue-900/50 pt-4">
              {loc.emails.map((email, i) => (
                <p key={i} className="text-xs text-gray-400 truncate">
                  <span className="text-white font-semibold">E:</span> {email}
                </p>
              ))}
              {loc.phone && (
                 <p className="text-xs text-gray-400">
                   <span className="text-white font-semibold">M:</span> {loc.phone}
                 </p>
              )}
            </div>

          </div>
        ))}

      </div>

      <div className="mt-16 pt-8 border-t border-blue-900 text-center text-xs text-gray-500">
        <p>&copy; 2026 IHM Marine Services. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

// --- MAIN APP COMPONENT ---

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <Footer />
    </div>
  );
}

export default App;