import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'; 

import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import ServiceDetail from './pages/ServiceDetail'; 
import Hero from './components/Hero';

function App() {
  return (
    <div className="font-sans text-gray-900 flex flex-col min-h-screen">
      <ScrollToTop /> 
      <Navbar />
      
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          
          <Route path="/services/:slug" element={<ServiceDetail />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;