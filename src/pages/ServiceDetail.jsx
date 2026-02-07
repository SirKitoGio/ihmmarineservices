import React, { useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';

// --- SCROLL TO TOP HELPER ---
// Forces the page to start at the top when you switch services
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// --- DATA FOR ALL 6 PAGES ---
const serviceData = {
  // 1. IHM
  "ihm-maintenance": {
    title: "Inventory of Hazardous Materials (IHM)",
    image: "/service-ihm.jpg",
    subtitle: "Full Lifecycle Management & Compliance",
    content: (
      <>
        <p className="mb-4">
          The <b>Inventory of Hazardous Materials (IHM)</b> is a vital requirement for all ships calling at EU ports. It is not just a document; it is a dynamic record that must be maintained throughout the vessel's operational life.
        </p>
        <p className="mb-4">
          At IHM Marine Services, we provide end-to-end IHM management. From the initial visual sampling check to the final certification, our Hazmat experts ensure your fleet remains compliant with the <b>EU Ship Recycling Regulation (EU SRR)</b> and the <b>Hong Kong Convention (HKC)</b>.
        </p>
        <h3 className="text-xl font-bold text-marine-900 mt-8 mb-4">Our IHM Process</h3>
        <ul className="space-y-3">
          <li className="flex items-start"><CheckCircle className="text-brand-teal mr-2 flex-shrink-0" /> <span><b>Visual Sampling Check (VSC):</b> Onboard inspection to identify potential hazards.</span></li>
          <li className="flex items-start"><CheckCircle className="text-brand-teal mr-2 flex-shrink-0" /> <span><b>Laboratory Analysis:</b> Testing samples in accredited labs for Asbestos, PCBs, and more.</span></li>
          <li className="flex items-start"><CheckCircle className="text-brand-teal mr-2 flex-shrink-0" /> <span><b>IHM Part I Preparation:</b> Compiling the official report for Class approval.</span></li>
          <li className="flex items-start"><CheckCircle className="text-brand-teal mr-2 flex-shrink-0" /> <span><b>Maintenance:</b> Ongoing updates whenever new equipment is installed.</span></li>
        </ul>
      </>
    )
  },

  // 2. ASBESTOS
  "asbestos-consultancy": {
    title: "Asbestos Management & Consultancy",
    image: "/service-asbestos.jpg",
    subtitle: "Protecting Crew Health & Ensuring Safety",
    content: (
      <>
        <p className="mb-4">
          Asbestos remains one of the most significant health risks in the maritime industry. Despite bans, it is still found on many vessels. Our BOHS-certified surveyors provide expert management to detect, monitor, and safely remove asbestos containing materials (ACMs).
        </p>
        <p className="mb-4">
          We offer comprehensive solutions tailored to your vessel's needs, ensuring the safety of your crew and compliance with SOLAS regulations.
        </p>
        <h3 className="text-xl font-bold text-marine-900 mt-8 mb-4">Our Expertise Includes:</h3>
        <ul className="space-y-3">
          <li className="flex items-start"><CheckCircle className="text-brand-teal mr-2 flex-shrink-0" /> <span><b>Management Surveys:</b> Locating and assessing ACMs during normal operations.</span></li>
          <li className="flex items-start"><CheckCircle className="text-brand-teal mr-2 flex-shrink-0" /> <span><b>Refurbishment/Demolition Surveys:</b> Required before any structural work or dry docking.</span></li>
          <li className="flex items-start"><CheckCircle className="text-brand-teal mr-2 flex-shrink-0" /> <span><b>Air Monitoring:</b> Ensuring air quality is safe during removal projects.</span></li>
          <li className="flex items-start"><CheckCircle className="text-brand-teal mr-2 flex-shrink-0" /> <span><b>Removal Supervision:</b> Overseeing contractors to ensure safe disposal.</span></li>
        </ul>
      </>
    )
  },

  // 3. CLASS SURVEYS
  "class-surveys": {
    title: "Class & Statutory Surveys",
    image: "/service-survey.jpg",
    subtitle: "Rigorous Inspections for Global Compliance",
    content: (
      <>
        <p className="mb-4">
          Maintaining class status is essential for trading. We conduct detailed vessel inspections and statutory surveys to meet the rigorous standards of leading Classification Societies and Flag States.
        </p>
        <p className="mb-4">
          Our team prepares your vessel for Annual, Intermediate, and Special Surveys, identifying potential issues before they become costly deficiencies or detentions.
        </p>
        <h3 className="text-xl font-bold text-marine-900 mt-8 mb-4">Survey Types</h3>
        <ul className="space-y-3">
          <li className="flex items-start"><CheckCircle className="text-brand-teal mr-2 flex-shrink-0" /> <span><b>Pre-Class Inspections:</b> Preparing for class entry or renewal.</span></li>
          <li className="flex items-start"><CheckCircle className="text-brand-teal mr-2 flex-shrink-0" /> <span><b>Statutory Compliance:</b> SOLAS, MARPOL, and Load Line surveys.</span></li>
          <li className="flex items-start"><CheckCircle className="text-brand-teal mr-2 flex-shrink-0" /> <span><b>Condition Surveys:</b> Detailed assessment of hull and machinery.</span></li>
        </ul>
      </>
    )
  },

  // 4. BALLAST WATER
  "ballast-water": {
    title: "Ballast Water Treatment",
    image: "/service-ballast.jpg",
    subtitle: "Eco-Friendly Solutions for Marine Protection",
    content: (
      <>
        <p className="mb-4">
          Invasive aquatic species transported in ballast water pose a major threat to marine ecosystems. Compliance with the BWM Convention is now mandatory for most vessels.
        </p>
        <p className="mb-4">
          We assist shipowners in selecting, installing, and testing Ballast Water Management Systems (BWMS). Our independent testing ensures your system meets the D-2 biological standard required for discharge.
        </p>
        <h3 className="text-xl font-bold text-marine-900 mt-8 mb-4">Our Services</h3>
        <ul className="space-y-3">
          <li className="flex items-start"><CheckCircle className="text-brand-teal mr-2 flex-shrink-0" /> <span><b>VGP Sampling:</b> Testing for Vessel General Permit compliance (US waters).</span></li>
          <li className="flex items-start"><CheckCircle className="text-brand-teal mr-2 flex-shrink-0" /> <span><b>Commissioning Testing:</b> Verifying new installations work correctly.</span></li>
          <li className="flex items-start"><CheckCircle className="text-brand-teal mr-2 flex-shrink-0" /> <span><b>System Selection:</b> Consulting on the best technology (UV vs. Electro-chlorination) for your specific vessel type.</span></li>
        </ul>
      </>
    )
  },

  // 5. DIGITALIZATION
  "digitalization": {
    title: "Maritime Digitalization",
    image: "/service-digital.jpg",
    subtitle: "Optimizing Fleets with Data",
    content: (
      <>
        <p className="mb-4">
          The maritime industry is undergoing a digital transformation. We help you future-proof your fleet by leveraging modern software and data analytics to improve operational efficiency.
        </p>
        <p className="mb-4">
          From electronic logbooks to remote monitoring systems, we guide you through the adoption of technologies that reduce paperwork, improve accuracy, and lower fuel consumption.
        </p>
        <h3 className="text-xl font-bold text-marine-900 mt-8 mb-4">Key Benefits</h3>
        <ul className="space-y-3">
          <li className="flex items-start"><CheckCircle className="text-brand-teal mr-2 flex-shrink-0" /> <span><b>Real-time Monitoring:</b> Track vessel performance from shore.</span></li>
          <li className="flex items-start"><CheckCircle className="text-brand-teal mr-2 flex-shrink-0" /> <span><b>Regulatory Reporting:</b> Automated MRV and DCS reporting.</span></li>
          <li className="flex items-start"><CheckCircle className="text-brand-teal mr-2 flex-shrink-0" /> <span><b>Paperless Operations:</b> Reducing administrative burden on crew.</span></li>
        </ul>
      </>
    )
  },

  // 6. INSPECTIONS
  "inspections": {
    title: "Worldwide Vessel Inspections",
    image: "/service-inspection.jpg",
    subtitle: "Global Reach, Local Expertise",
    content: (
      <>
        <p className="mb-4">
          Time is money in shipping. Our global network of Master Mariners and Chief Engineers allows us to deploy inspectors to any port in the world rapidly, saving you travel costs and time.
        </p>
        <p className="mb-4">
          Whether you are buying a second-hand vessel or chartering one out, our independent reports give you an unbiased, accurate picture of the asset's true condition.
        </p>
        <h3 className="text-xl font-bold text-marine-900 mt-8 mb-4">Inspection Types</h3>
        <ul className="space-y-3">
          <li className="flex items-start"><CheckCircle className="text-brand-teal mr-2 flex-shrink-0" /> <span><b>Pre-Purchase Inspections:</b> Comprehensive assessment before buying.</span></li>
          <li className="flex items-start"><CheckCircle className="text-brand-teal mr-2 flex-shrink-0" /> <span><b>On-Hire / Off-Hire Surveys:</b> Documenting condition at start/end of charter.</span></li>
          <li className="flex items-start"><CheckCircle className="text-brand-teal mr-2 flex-shrink-0" /> <span><b>Damage Surveys:</b> Investigating hull and machinery damage for insurance.</span></li>
        </ul>
      </>
    )
  }
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = serviceData[slug];

  if (!service) {
    return (
      <div className="text-center py-32 bg-gray-50">
        <h2 className="text-2xl font-bold text-marine-900 mb-4">Service Not Found</h2>
        <p className="text-gray-600 mb-8">The service you are looking for does not exist.</p>
        <Link to="/services" className="text-brand-teal font-bold hover:underline">Go back to Services</Link>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <ScrollToTop />
      
      {/* HEADER IMAGE */}
      <div className="relative h-[400px] w-full bg-marine-900">
        <img src={service.image} alt={service.title} className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-marine-900/50 mix-blend-multiply"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-widest drop-shadow-lg mb-4">{service.title}</h1>
          <p className="text-lg md:text-xl text-brand-teal font-medium tracking-wide">{service.subtitle}</p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Link to="/services" className="inline-flex items-center text-gray-500 hover:text-brand-teal mb-8 transition group">
          <ArrowLeft size={20} className="mr-2 transform group-hover:-translate-x-1 transition" /> Back to All Services
        </Link>
        
        <div className="prose prose-lg text-gray-700 max-w-none">
          {service.content}
        </div>

        {/* CTA BOX */}
        <div className="mt-16 bg-marine-900 rounded-lg p-10 text-center shadow-xl">
          <h3 className="text-2xl font-bold text-white mb-4">Need assistance with {service.title}?</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">Our team is ready to deploy worldwide. Contact us today for a consultation or a quote.</p>
          <Link to="/contact" className="inline-block bg-brand-teal text-white font-bold py-4 px-10 rounded hover:bg-white hover:text-marine-900 transition shadow-lg">
            Contact Us Today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;