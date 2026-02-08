import React, { useState } from 'react';
import { Ship, FileText, CheckCircle, AlertTriangle } from 'lucide-react';

const Quote = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    // Dynamic Fields
    vesselName: '',
    vesselType: '',
    imo: '',
    grossTonnage: '',
    yearBuilt: '',
    projectScope: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const services = [
    'Inventory of Hazardous Materials (IHM)',
    'Asbestos Management & Consultancy',
    'Classification & Statutory Surveys',
    'Ballast Water Treatment',
    'Maritime Digitalization',
    'Worldwide Vessel Inspections',
    'Other'
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ ...formData, message: '', service: '' });
        window.scrollTo(0, 0); // Scroll to top to see success message
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-marine-900 mb-4">Request a Proposal</h1>
          <p className="text-xl text-gray-600">Tell us about your vessel, and we'll tailor a solution for you.</p>
        </div>

        <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
          
          {/* Status Messages */}
          {status === 'success' && (
            <div className="bg-green-50 p-8 text-center border-b border-green-100">
              <div className="inline-flex p-3 rounded-full bg-green-100 text-green-600 mb-4">
                <CheckCircle size={48} />
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-2">Quote Request Received!</h3>
              <p className="text-green-700">We have received your details and will send a formal proposal to your email shortly.</p>
            </div>
          )}

          {status === 'error' && (
            <div className="bg-red-50 p-4 text-center border-b border-red-100 text-red-800 font-bold">
              <AlertTriangle className="inline-block mr-2" />
              Failed to send request. Please try again or email us directly.
            </div>
          )}

          {/* The Form */}
          <form onSubmit={handleSubmit} className="p-8 space-y-8">
            
            {/* 1. Contact Info */}
            <div>
              <h3 className="text-lg font-bold text-marine-900 mb-4 border-b pb-2 uppercase tracking-wide">
                1. Contact Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Full Name *</label>
                  <input type="text" name="name" required value={formData.name} onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-brand-teal outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email Address *</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-brand-teal outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Company Name</label>
                  <input type="text" name="company" value={formData.company} onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-brand-teal outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-brand-teal outline-none" />
                </div>
              </div>
            </div>

            {/* 2. Service Selection */}
            <div>
              <h3 className="text-lg font-bold text-marine-900 mb-4 border-b pb-2 uppercase tracking-wide">
                2. Service Required
              </h3>
              <select name="service" required value={formData.service} onChange={handleChange}
                className="w-full p-4 border-2 border-marine-100 rounded-lg text-lg font-medium text-marine-900 focus:border-marine-900 outline-none">
                <option value="">-- Select a Service --</option>
                {services.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>

            {/* 3. DYNAMIC FIELDS (The Smart Part) */}
            {formData.service && (
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 animate-fade-in">
                <h3 className="text-lg font-bold text-marine-900 mb-4 flex items-center">
                  <Ship className="mr-2 text-brand-teal" /> Vessel & Project Details
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Standard for everyone */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Vessel Name</label>
                    <input type="text" name="vesselName" value={formData.vesselName} onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded bg-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">IMO Number</label>
                    <input type="text" name="imo" value={formData.imo} onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded bg-white" />
                  </div>

                  {/* SPECIFIC: IHM */}
                  {formData.service.includes('IHM') && (
                    <>
                      <div className="md:col-span-1">
                        <label className="block text-sm font-bold text-gray-700 mb-2">Gross Tonnage (GT)</label>
                        <input type="text" name="grossTonnage" placeholder="e.g. 35000"
                          value={formData.grossTonnage} onChange={handleChange}
                          className="w-full p-3 border border-yellow-300 bg-yellow-50 rounded" />
                      </div>
                      <div className="md:col-span-1">
                        <label className="block text-sm font-bold text-gray-700 mb-2">Year Built</label>
                        <input type="text" name="yearBuilt" placeholder="e.g. 2012"
                          value={formData.yearBuilt} onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded bg-white" />
                      </div>
                    </>
                  )}
                </div>

                {/* SPECIFIC: Asbestos / Consultancy */}
                {(formData.service.includes('Asbestos') || formData.service.includes('Consultancy')) && (
                  <div className="mt-6">
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      <FileText className="inline w-4 h-4 mr-1"/> 
                      Describe the Issue or Scope
                    </label>
                    <textarea name="projectScope" rows="3" 
                      placeholder="e.g. We found suspicious material in the engine room lagging..."
                      value={formData.projectScope} onChange={handleChange}
                      className="w-full p-3 border border-yellow-300 bg-yellow-50 rounded" />
                  </div>
                )}
              </div>
            )}

            {/* 4. Message */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Additional Information</label>
              <textarea name="message" rows="4" 
                placeholder="Any other details about port location, dates, etc..."
                value={formData.message} onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-brand-teal outline-none" />
            </div>

            <button type="submit" disabled={status === 'sending'}
              className="w-full bg-marine-900 text-white font-bold py-4 rounded-lg hover:bg-brand-teal transition duration-300 text-lg shadow-lg disabled:opacity-70">
              {status === 'sending' ? 'Sending Request...' : 'Submit Quote Request'}
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Quote;