import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ClipboardCheck, 
  Biohazard, 
  Recycle, 
  Ship, 
  CheckCircle,
  Anchor,
  Globe,
  Wifi,
  Users
} from 'lucide-react';

const services = [
  {
    title: "Inventory of Hazardous Materials",
    link: "/services/ihm-maintenance",
    desc: "IHM Inspections and Managed Life Cycle Maintenance ensuring full compliance with EU SRR & HKC.",
    icon: <ClipboardCheck size={28} />,
    image: "/service-ihm.jpg"
  },
  {
    title: "Asbestos Management",
    link: "/services/asbestos-consultancy",
    desc: "Expert consultancy, surveys, and removal supervision by certified Hazmat experts.",
    icon: <Biohazard size={28} />,
    image: "/service-asbestos.jpg"
  },
  {
    title: "Class & Statutory Surveys",
    link: "/services/class-surveys",
    desc: "Comprehensive vessel inspections and surveys to meet rigorous industry standards.",
    icon: <Anchor size={28} />,
    image: "/service-survey.jpg"
  },
  {
    title: "Ballast Water Treatment",
    link: "/services", 
    desc: "Innovative solutions for environmental compliance and marine ecosystem protection.",
    icon: <Recycle size={28} />,
    image: "/service-ballast.jpg"
  },
  {
    title: "Maritime Digitalization",
    link: "/services", 
    desc: "Cutting-edge digital solutions to optimize vessel operations and efficiency.",
    icon: <Wifi size={28} />,
    image: "/service-digital.jpg"
  },
  {
    title: "Worldwide Vessel Inspections",
    link: "/services", 
    desc: "Global reach with a team of Master Mariners and Engineers ready to deploy anywhere.",
    icon: <Globe size={28} />,
    image: "/service-inspection.jpg"
  }
];

// --- THIS WAS LIKELY MISSING ---
const Home = () => {
  return (
    <>
      {/* 1. HERO SECTION */}
      <div className="relative py-24 sm:py-32 bg-gray-900 overflow-hidden min-h-[600px] flex items-center">
        <div className="absolute inset-0 w-full h-full">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="/ocean.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-marine-900/40 mix-blend-multiply"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6 drop-shadow-2xl">
            Navigating Compliance. <span className="text-brand-teal block sm:inline">Securing Safety.</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-100 max-w-3xl mx-auto font-medium drop-shadow-xl">
            We are more than a service provider — we are your strategic ally. Empowering maritime enterprises to lead with confidence.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services" className="px-8 py-3 border-2 border-brand-teal text-base font-bold rounded-md text-brand-teal bg-marine-900/80 hover:bg-brand-teal hover:text-white transition shadow-xl backdrop-blur-sm">
              View Our Services
            </Link>
            <Link to="/contact" className="px-8 py-3 border-2 border-white text-base font-bold rounded-md text-white bg-marine-900/80 hover:bg-white hover:text-marine-900 transition shadow-xl backdrop-blur-sm">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* 2. WHO WE ARE */}
      <div className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
            <div className="mb-12 lg:mb-0">
              <h2 className="text-brand-teal font-bold uppercase tracking-wide text-sm mb-2">About IHM Marine Services</h2>
              <h3 className="text-3xl font-extrabold text-marine-900 sm:text-4xl mb-6">
                Shaping the Future of Maritime Excellence
              </h3>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>In an industry as dynamic as maritime, adaptation is key. We embrace the ever-changing nature of the sector, blending <b>traditional expertise</b> with <b>cutting-edge solutions</b>.</p>
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-brand-teal mt-6">
                  <h4 className="font-bold text-marine-900 flex items-center mb-2"><Users className="h-5 w-5 text-brand-teal mr-2" /> Our Team</h4>
                  <p className="text-sm">Backed by seasoned professionals including <b>Master Mariners, Engineers, Architects, Surveyors, Hazmat Experts, and Asbestos Consultants.</b></p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm">
               <h3 className="text-2xl font-bold text-marine-900 mb-4">What is IHM?</h3>
               <p className="text-gray-600 mb-6">At the core of our services is the <b>Inventory of Hazardous Materials (IHM)</b>. It is not just a document; it is a mandatory "health passport" for your vessel.</p>
               <div className="space-y-4">
                 <div className="flex items-start"><CheckCircle className="flex-shrink-0 h-6 w-6 text-brand-teal mr-3" /><div><span className="font-bold text-marine-900 block">Regulatory Compliance</span><span className="text-sm text-gray-500">Essential for entering EU ports and avoiding detention.</span></div></div>
                 <div className="flex items-start"><CheckCircle className="flex-shrink-0 h-6 w-6 text-brand-teal mr-3" /><div><span className="font-bold text-marine-900 block">Lifecycle Maintenance</span><span className="text-sm text-gray-500">We manage the IHM throughout the ship's entire life.</span></div></div>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. SERVICES */}
      <div id="services" className="bg-gray-50 py-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-marine-900 sm:text-4xl">Comprehensive Suite of Solutions</h2>
            <p className="mt-4 text-gray-600">From vessel maintenance to digital optimization, we provide timely and cost-effective answers to your challenges.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute top-4 left-4 bg-white/90 p-3 rounded-full shadow-sm"><div className="text-brand-teal">{service.icon}</div></div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-marine-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6 text-sm">{service.desc}</p>
                  <Link to={service.link} className="text-brand-teal font-semibold hover:text-marine-900 flex items-center text-sm">
                    Learn more <span aria-hidden="true" className="ml-2">&rarr;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. CERTIFICATIONS */}
      <div id="certifications" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-marine-900 uppercase tracking-widest mb-16">Approved By Leading Class Societies</h2>
            <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 opacity-90">
                 <img src="/abs.jpg" className="h-24 md:h-26 mix-blend-multiply" alt="ABS" />
                 <img src="/bv.jpg" className="h-24 md:h-26 mix-blend-multiply" alt="Bureau Veritas" />
                 <img src="/dnv.jpg" className="h-20 md:h-22 mix-blend-multiply" alt="DNV" />
                 <img src="/kr.jpg" className="h-20 md:h-22 mix-blend-multiply" alt="Korean Register" />
                 <img src="/lr.jpg" className="h-24 md:h-26 mix-blend-multiply" alt="Lloyds Register" />
                 <img src="/rina.jpg" className="h-24 md:h-26 mix-blend-multiply" alt="RINA" />
                 <img src="/classnk.jpg" className="h-20 md:h-22 mix-blend-multiply" alt="ClassNK" />
            </div>
          </div>
          <div className="w-full h-px bg-gray-100"></div>
          <div className="text-center">
             <h2 className="text-2xl font-bold text-marine-900 uppercase tracking-widest mb-16">Certified Marine Consultants & Surveyors</h2>
             <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 mt-8">
               <img src="/iamsp.png" className="h-24 md:h-32 w-auto object-contain" alt="IAMSP" />
               <img src="/mil.jpeg" className="h-24 md:h-32 w-auto object-contain" alt="Lloyds Maritime Institute" />
               <img src="/spni.png" className="h-20 md:h-28 w-auto object-contain" alt="SPNI" />
               <img src="/icc.jpeg" className="h-20 md:h-28 w-auto object-contain" alt="ICC" />
               <img src="/mgl.png" className="h-24 md:h-32 w-auto object-contain" alt="Maritime Group" />
             </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;