import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ClipboardCheck, 
  Biohazard, 
  Anchor, 
  Recycle, 
  Wifi, 
  Globe, 
  ChevronDown, 
  ChevronUp 
} from 'lucide-react';

// --- GROUP 1: THE BIG 3 (Link to separate pages) ---
const coreServices = [
  {
    title: "Inventory of Hazardous Materials",
    link: "/services/ihm-maintenance", 
    desc: "Full lifecycle IHM management ensuring compliance with EU SRR & HKC. From visual sampling to Part I preparation and maintenance.",
    icon: <ClipboardCheck size={40} />,
    image: "/service-ihm.jpg"
  },
  {
    title: "Asbestos Consultancy & Management",
    link: "/services/asbestos-consultancy", 
    desc: "BOHS-certified surveys, air monitoring, and removal supervision. We manage the risks of asbestos to keep your crew safe and compliant.",
    icon: <Biohazard size={40} />,
    image: "/service-asbestos.jpg"
  },
  {
    title: "Classification & Statutory Surveys",
    link: "/services/class-surveys", 
    desc: "Pre-purchase inspections, condition surveys, and statutory compliance checks to meet the rigorous standards of Class Societies.",
    icon: <Anchor size={40} />,
    image: "/service-survey.jpg"
  }
];

// --- GROUP 2: THE OTHER 3 (Expandable on this page) ---
const additionalServices = [
  {
    id: "ballast",
    title: "Ballast Water Treatment",
    shortDesc: "Compliance testing and installation supervision for BWMS.",
    fullDesc: "We assist shipowners in navigating the BWM Convention by overseeing the selection, installation, and commissioning of Ballast Water Management Systems. Our independent testing ensures your system meets the D-2 biological discharge standards required for global trade.",
    icon: <Recycle size={32} />
  },
  {
    id: "digital",
    title: "Maritime Digitalization",
    shortDesc: "Modernizing fleet operations with data-driven software.",
    fullDesc: "Future-proof your fleet with our digital transformation services. We implement electronic logbooks, remote monitoring systems, and fuel efficiency software that reduce administrative burdens on your crew and improve reporting accuracy for MRV and DCS.",
    icon: <Wifi size={32} />
  },
  {
    id: "inspections",
    title: "Worldwide Vessel Inspections",
    shortDesc: "Rapid global deployment for condition surveys.",
    fullDesc: "Our network of Master Mariners and Engineers is ready to deploy to any port worldwide. Whether for pre-purchase assessments, charter on/off-hire surveys, or damage investigations, we provide unbiased, real-time reports on the true condition of your asset.",
    icon: <Globe size={32} />
  }
];

const Services = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="bg-white">
      
      {/* 1. HEADER - RESTORED VIDEO BACKGROUND */}
      <div className="relative bg-marine-900 py-24 text-center overflow-hidden">
        
        {/* VIDEO BACKGROUND */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            {/* Make sure ocean.mp4 is still in your public folder! */}
            <source src="/ocean.mp4" type="video/mp4" />
          </video>
          
          {/* Dark Overlay (keeps text readable) */}
          <div className="absolute inset-0 bg-marine-900/60 mix-blend-multiply"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-white uppercase tracking-widest drop-shadow-lg">Our Capabilities</h1>
          <p className="text-gray-100 mt-4 max-w-2xl mx-auto font-medium drop-shadow-md">
            Specialized technical services for the global maritime industry.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* --- SECTION 1: CORE SERVICES (The Big 3) --- */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-marine-900 mb-12 border-b-2 border-brand-teal inline-block pb-2">Core Specializations</h2>
          <div className="space-y-24">
            {coreServices.map((service, index) => (
              <div key={index} className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Image Side - Clickable */}
                <div className="w-full md:w-1/2">
                  <Link to={service.link} className="block relative rounded-lg overflow-hidden shadow-2xl h-80 group">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500" />
                    <div className="absolute top-0 right-0 bg-brand-teal p-4 text-white rounded-bl-lg">
                      {service.icon}
                    </div>
                  </Link>
                </div>

                {/* Text Side */}
                <div className="w-full md:w-1/2">
                  <h3 className="text-3xl font-bold text-marine-900 mb-4">{service.title}</h3>
                  <div className="w-20 h-1.5 bg-brand-teal mb-6"></div>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    {service.desc}
                  </p>
                  
                  {/* Button goes to DEEP DIVE PAGE */}
                  <Link to={service.link} className="px-8 py-3 border-2 border-marine-900 text-marine-900 font-bold hover:bg-marine-900 hover:text-white transition rounded-md inline-block">
                    View Full Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- SECTION 2: ADDITIONAL SERVICES (The Other 3) --- */}
        <div>
          <h2 className="text-3xl font-bold text-marine-900 mb-12 border-b-2 border-brand-teal inline-block pb-2">Additional Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service) => (
              <div key={service.id} className="bg-gray-50 rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition duration-300">
                <div className="text-brand-teal mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-marine-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-6 text-sm">{service.shortDesc}</p>
                
                {/* EXPANDABLE CONTENT */}
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedId === service.id ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}>
                  <p className="text-gray-700 text-sm border-t border-gray-200 pt-4 leading-relaxed bg-white p-4 rounded-md shadow-inner">
                    {service.fullDesc}
                  </p>
                </div>

                {/* TOGGLE BUTTON */}
                <button 
                  onClick={() => toggleExpand(service.id)}
                  className="flex items-center text-brand-teal font-bold text-sm hover:text-marine-900 transition focus:outline-none"
                >
                  {expandedId === service.id ? (
                    <>Show Less <ChevronUp size={16} className="ml-1" /></>
                  ) : (
                    <>Learn More <ChevronDown size={16} className="ml-1" /></>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;