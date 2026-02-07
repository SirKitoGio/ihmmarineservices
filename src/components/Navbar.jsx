import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  ChevronDown, 
  ClipboardCheck, 
  Biohazard, 
  Anchor,
  Recycle,
  Wifi,
  Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  // FULL LIST OF 6 SERVICES
  const servicesList = [
    { 
      name: "Inventory of Hazardous Materials", 
      link: "/services", 
      icon: <ClipboardCheck size={20} /> 
    },
    { 
      name: "Asbestos Consultancy", 
      link: "/services", 
      icon: <Biohazard size={20} />
    },
    { 
      name: "Classification & Statutory Surveys", 
      link: "/services", 
      icon: <Anchor size={20} />
    },
    { 
      name: "Ballast Water Treatment", 
      link: "/services", 
      icon: <Recycle size={20} />
    },
    { 
      name: "Maritime Digitalization", 
      link: "/services", 
      icon: <Wifi size={20} />
    },
    { 
      name: "Worldwide Vessel Inspections", 
      link: "/services", 
      icon: <Globe size={20} />
    }
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 font-sans">
      <div className="w-full px-6 lg:px-12">
        <div className="flex justify-between items-center h-40">
          
          {/* LOGO */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/">
              <img src="/logo.png" alt="IHM Marine Services" className="h-32 w-auto object-contain py-2" />
            </Link>
          </div>
          
          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center space-x-12">
            <Link to="/" className="text-marine-900 hover:text-brand-teal font-bold text-xl transition">Home</Link>
            
            {/* SERVICES DROPDOWN */}
            <div className="relative group h-full flex items-center">
              <button className="flex items-center text-marine-900 group-hover:text-brand-teal font-bold text-xl transition focus:outline-none">
                Services
                <ChevronDown size={22} className="ml-1 transform group-hover:-rotate-180 transition-transform duration-200" />
              </button>
              
              {/* Dropdown Panel */}
              <div className="absolute top-28 -left-4 w-96 bg-white shadow-xl rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2 border-t-4 border-brand-teal">
                {servicesList.map((service, index) => (
                  <Link 
                    key={index}
                    to={service.link} 
                    className="flex items-center px-4 py-4 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-teal transition border-b border-gray-50 last:border-0 group/item"
                  >
                    <span className="text-gray-400 group-hover/item:text-brand-teal mr-4 transition-colors">
                      {service.icon}
                    </span>
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/contact" className="text-marine-900 hover:text-brand-teal font-bold text-xl transition">Contact</Link>
            
            <a 
              href="mailto:info@ihmmarineservices.com" 
              className="bg-marine-900 hover:bg-marine-800 text-white px-8 py-3 rounded-md font-bold text-xl transition shadow-sm border border-marine-900 hover:border-brand-teal"
            >
              Get a Quote
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-marine-900 hover:text-brand-teal p-2 focus:outline-none">
              {isOpen ? <X size={40} /> : <Menu size={40} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full left-0 h-screen bg-opacity-95 overflow-y-auto pb-20">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <Link to="/" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-xl font-medium text-marine-900 hover:bg-gray-50 rounded-md border-b border-gray-100">Home</Link>
            <div>
              <button onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)} className="w-full flex justify-between items-center px-4 py-3 text-xl font-medium text-marine-900 hover:bg-gray-50 rounded-md border-b border-gray-100">
                Services
                <ChevronDown size={24} className={`transform transition-transform duration-200 ${isMobileServicesOpen ? '-rotate-180' : ''}`} />
              </button>
              {isMobileServicesOpen && (
                <div className="bg-gray-50 px-4 py-2 space-y-1">
                  {servicesList.map((service, index) => (
                    <Link key={index} to={service.link} onClick={() => setIsOpen(false)} className="flex items-center pl-4 py-3 text-lg text-gray-600 hover:text-brand-teal">
                      <span className="text-brand-teal mr-3 opacity-70">{service.icon}</span>
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-xl font-medium text-marine-900 hover:bg-gray-50 rounded-md border-b border-gray-100">Contact</Link>
            <div className="pt-4">
              <a href="mailto:info@ihmmarineservices.com" className="block w-full text-center bg-marine-900 text-white px-5 py-4 rounded-md font-bold text-xl shadow-md">Get a Quote</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;