import React, { useState } from 'react';
import {
  Menu,
  X,
  ChevronDown,
  ClipboardCheck,
  Biohazard,
  Anchor,
  Grid
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  // --- HELPER: FORCE SCROLL TO TOP ---
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  const servicesList = [
    {
      name: "All Services",
      link: "/services",
      icon: <Grid size={24} />,
      desc: "View our full range of capabilities"
    },
    {
      name: "Inventory of Hazardous Materials",
      link: "/services/ihm-maintenance",
      icon: <ClipboardCheck size={24} />,
      desc: "EU SRR & HKC Compliance"
    },
    {
      name: "Asbestos Consultancy",
      link: "/services/asbestos-consultancy",
      icon: <Biohazard size={24} />,
      desc: "Surveys & Removal Supervision"
    },
    {
      name: "Class & Statutory Surveys",
      link: "/services/class-surveys",
      icon: <Anchor size={24} />,
      desc: "Inspections & Certifications"
    }
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">

        <div className="flex justify-between items-center h-20 md:h-30 transition-all duration-300 ease-in-out">

          {/* LOGO SECTION */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/" onClick={scrollToTop}>
              <img
                src="/logo.png"
                alt="IHM Marine Services"
                className="h-12 md:h-28 w-auto object-contain py-1 transition-all duration-300 ease-in-out"
              />
            </Link>
          </div>

          {/* DESKTOP MENU (Hidden on Mobile) */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-10">

            <Link
              to="/"
              onClick={scrollToTop}
              className="text-marine-900 hover:text-brand-teal font-extrabold text-lg transition"
            >
              Home
            </Link>

            {/* SERVICES DROPDOWN */}
            <div className="relative group h-full flex items-center">
              <button className="flex items-center text-marine-900 group-hover:text-brand-teal font-extrabold text-lg transition focus:outline-none py-6">
                Services
                <ChevronDown size={20} className="ml-1 transform group-hover:-rotate-180 transition-transform duration-200" />
              </button>

              {/* Dropdown Menu */}
              <div className="absolute top-full -left-12 w-[400px] bg-white shadow-xl rounded-b-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border-t-4 border-brand-teal">
                <div className="flex flex-col">
                  {servicesList.map((service, index) => (
                    <Link
                      key={index}
                      to={service.link}
                      onClick={scrollToTop}
                      className="flex items-start px-6 py-4 hover:bg-gray-50 transition border-b border-gray-100 last:border-0"
                    >
                      <div className="text-gray-400 mr-4 mt-1">
                        {service.icon}
                      </div>
                      <div>
                        <span className="block text-base font-bold text-marine-900">
                          {service.name}
                        </span>
                        <span className="text-xs text-gray-500">{service.desc}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/contact"
              onClick={scrollToTop}
              className="text-marine-900 hover:text-brand-teal font-extrabold text-lg transition"
            >
              Contact
            </Link>

            {/* BUTTON: NOW LINKS TO PAGE */}
            <Link 
              to="/quote" 
              onClick={scrollToTop}
              className="bg-marine-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-brand-teal transition shadow-md"
            >
              Get a Quote
            </Link>

          </div>

          {/* MOBILE MENU BUTTON (Visible only on Mobile) */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-marine-900 hover:text-brand-teal p-2 focus:outline-none">
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-2xl absolute w-full left-0 h-[calc(100vh-5rem)] overflow-y-auto pb-20 z-40">
          <div className="px-6 pt-6 pb-8 space-y-4">

            <Link
              to="/"
              onClick={scrollToTop}
              className="block px-4 py-4 text-xl font-bold text-marine-900 hover:bg-gray-50 rounded-lg border border-gray-100 shadow-sm"
            >
              Home
            </Link>

            <div className="border border-gray-100 rounded-lg shadow-sm overflow-hidden">
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="w-full flex justify-between items-center px-4 py-4 text-xl font-bold text-marine-900 hover:bg-gray-50 bg-white"
              >
                Services
                <ChevronDown size={24} className={`transform transition-transform duration-200 ${isMobileServicesOpen ? '-rotate-180' : ''}`} />
              </button>

              {isMobileServicesOpen && (
                <div className="bg-gray-50 border-t border-gray-100">
                  {servicesList.map((service, index) => (
                    <Link
                      key={index}
                      to={service.link}
                      onClick={scrollToTop}
                      className="flex items-center px-6 py-4 text-lg text-gray-700 hover:text-brand-teal hover:bg-teal-50 border-b border-gray-100 last:border-0"
                    >
                      <span className="text-brand-teal mr-4 opacity-80 scale-90">{service.icon}</span>
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/contact"
              onClick={scrollToTop}
              className="block px-4 py-4 text-xl font-bold text-marine-900 hover:bg-gray-50 rounded-lg border border-gray-100 shadow-sm"
            >
              Contact
            </Link>

            <div className="pt-6">
              {/* MOBILE BUTTON: NOW LINKS TO PAGE */}
              <Link
                to="/quote"
                onClick={scrollToTop}
                className="block w-full text-center bg-marine-900 text-white px-6 py-5 rounded-lg font-bold text-xl shadow-lg hover:bg-brand-teal transition"
              >
                Get a Quote
              </Link>
            </div>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;