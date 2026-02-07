import React from 'react';
import { 
  Anchor, 
  Ship, 
  Linkedin, 
  Facebook, 
  Mail, 
  Phone 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const locations = [
  {
    title: "IHM MARINE SERVICES",
    address: ["Oasis House", "Triq il Port Hieles", "Birzebbuga", "BBG1801", "Malta"],
    emails: ["info@ihmmarineservices.com"],
    phone: null
  },
  {
    title: "IHM MARINE SERVICES LTD.",
    address: ["20-22 Wenlock Road", "London N1 7GU", "United Kingdom"],
    emails: ["rory@ihmmarineservices.com", "info@ihmmarineservices.com"],
    phone: "+356 77990449"
  },
  {
    title: "IHM MARINE SERVICES PTE. LTD.",
    address: ["160 Robinson Road", "#14-04, SBF Centre", "Singapore 068914"],
    emails: ["vic@ihmmarineservices.com", "info@ihmmarineservices.com"],
    phone: "+356 79482313"
  },
  {
    title: "IHM MARINE SERVICES",
    address: ["Aberdeen Energy & Innovation Parks", "Claymore Drive, Bridge of Don", "Aberdeen, AB23 8GX", "United Kingdom"],
    emails: ["info@ihmmarineservices.com"],
    phone: null
  }
];

const Footer = () => {
  return (
    <footer id="contact" className="bg-marine-900 text-white border-t border-brand-teal">
      <div className="max-w-7xl mx-auto pt-16 pb-8 px-6 lg:px-8">
        
        {/* --- SECTION 1: GLOBAL OFFICES (From your specific code) --- */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold tracking-tight text-white uppercase">Global Offices</h2>
          <div className="w-24 h-1 bg-brand-teal mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {locations.map((loc, index) => (
            <div key={index} className="flex flex-col items-center text-center px-2">
              <h3 className="font-bold text-brand-teal text-sm mb-4 uppercase tracking-wider h-10 flex items-end justify-center">
                {loc.title}
              </h3>
              <div className="text-gray-300 text-xs leading-relaxed mb-4 min-h-[60px]">
                {loc.address.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
              <div className="mt-auto space-y-2 w-full border-t border-marine-800 pt-4">
                {loc.emails.map((email, i) => (
                  <p key={i} className="text-xs text-gray-400">
                    <span className="text-white font-semibold">E:</span> <a href={`mailto:${email}`} className="hover:text-brand-teal transition">{email}</a>
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

        {/* --- SECTION 2: NAVIGATION LINKS (To keep the site functional) --- */}
        <div className="border-t border-marine-800 pt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Quick Links */}
          <div>
            <h3 className="text-brand-teal font-bold uppercase tracking-widest mb-4 text-sm">Quick Navigation</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-white transition">Home</Link></li>
              <li><Link to="/services" className="hover:text-white transition">Services</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-brand-teal font-bold uppercase tracking-widest mb-4 text-sm">Our Expertise</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/services" className="hover:text-white transition">Inventory of Hazardous Materials Maintenance</Link></li>
              <li><Link to="/services" className="hover:text-white transition">Asbestos Surveys and Consultancy</Link></li>
              <li><Link to="/services" className="hover:text-white transition">Classification & Statutory Surveys</Link></li>
              <li><Link to="/services" className="hover:text-white transition">Ballast Water Treatment</Link></li>
              <li><Link to="/services" className="hover:text-white transition">Maritime Digitalization</Link></li>
              <li><Link to="/services" className="hover:text-white transition">Worldwide Vessel Inspections</Link></li>
            </ul>
          </div>

          {/* Socials & Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-brand-teal font-bold uppercase tracking-widest mb-4 text-sm">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a href="https://www.linkedin.com/company/ihm-marine/" className="bg-marine-800 p-2 rounded-full hover:bg-brand-teal hover:text-white transition"><Linkedin size={18} /></a>
              <a href="#" className="bg-marine-800 p-2 rounded-full hover:bg-brand-teal hover:text-white transition"><Facebook size={18} /></a>
            </div>
            <p className="text-xs text-gray-500 max-w-xs">
              Your strategic ally in navigating the complex waters of the maritime industry.
            </p>
          </div>
        </div>

        {/* --- SECTION 3: COPYRIGHT --- */}
        <div className="mt-12 pt-8 border-t border-marine-800 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} IHM Marine Services. All rights reserved.</p>
          <div className="mt-4 flex justify-center items-center space-x-4 opacity-50">
             <Anchor size={14} /> <span>IAMSP Member</span>
             <span>•</span>
             <Ship size={14} /> <span>Lloyd's Maritime Institute</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;