import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'; // 1. Import Scroll Helper

import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import ServiceDetail from './pages/ServiceDetail'; // 2. Import the Detail Page

function App() {
  return (
    <div className="font-sans text-gray-900 flex flex-col min-h-screen">
      <ScrollToTop /> {/* 3. Place it here so it runs on every page change */}
      <Navbar />
      
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* 4. THE MAGIC ROUTE: This handles ANY service page */}
          <Route path="/services/:slug" element={<ServiceDetail />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;