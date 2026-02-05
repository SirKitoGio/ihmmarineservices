import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home.jsx'; 

// NOTE: You can create more pages later, e.g., import HazardousMaterials from './pages/HazardousMaterials';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        
        {/* Routes change the middle content based on the URL */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Future pages will go here, for example: */}
            {/* <Route path="/hazardous-materials" element={<HazardousMaterials />} /> */}
          </Routes>
        </div>

        {/* Footer stays on bottom of every page */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;