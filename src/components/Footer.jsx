import React from 'react';
import { Anchor, Ship } from 'lucide-react';

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

const Footer = () => (
  <footer id="contact" className="bg-marine-900 text-white border-t border-marine-800">
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      
      {/* Header for the section */}
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-white uppercase">Global Offices</h2>
        <div className="w-24 h-1 bg-brand-teal mx-auto mt-4"></div>
      </div>

      {/* Grid with Vertical Dividers  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-marine-800">
        
        {locations.map((loc, index) => (
          <div key={index} className="flex flex-col items-center px-4 text-center">
            
            {/* Title */}
            <h3 className="font-bold text-brand-teal text-sm mb-4 uppercase tracking-wider h-10 flex items-end justify-center">
              {loc.title}
            </h3>
            
            {/* Address */}
            <div className="text-gray-300 text-xs leading-relaxed mb-6 min-h-[80px]">
              {loc.address.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>

            {/* Contact Details */}
            <div className="mt-auto space-y-2 w-full border-t border-marine-800 pt-4">
              {loc.emails.map((email, i) => (
                <p key={i} className="text-xs text-gray-400 truncate">
                  <span className="text-white font-semibold">E:</span> <a href={`mailto:${email}`} className="hover:text-brand-teal">{email}</a>
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

      <div className="mt-16 pt-8 border-t border-marine-800 text-center text-xs text-gray-500">
        <p>&copy; 2026 IHM Marine Services. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-4 opacity-50">
           {/* Footer accreditation icons */}
           <Anchor size={16} /> <span>IAMSP Member</span>
           <span>•</span>
           <Ship size={16} /> <span>Lloyd's Maritime Institute</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;