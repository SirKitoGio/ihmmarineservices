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
        window.scrollTo(0, 0); 
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
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-marine-900 mb-4">Request a Proposal</h1>
          <p className="text-xl text-gray-600">Tell us about your vessel needs.</p>
        </div>

        <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
          
          {status === 'success' && (
            <div className="bg-green-50 p-8 text-center border-b border-green-100">
              <div className="inline-flex p-3 rounded-full bg-green-100 text-green-600 mb-4">
                <CheckCircle size={48} />
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-2">Request Received!</h3>
              <p className="text-green-700">We will send a formal proposal shortly.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="p-8 space-y-8">
            <div>
              <h3 className="text-lg font-bold text-marine-900 mb-4 border-b pb-2 uppercase">1. Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div><label className="block font-bold mb-2">Full Name *</label><input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full p-3 border rounded"/></div>
                <div><label className="block font-bold mb-2">Email *</label><input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full p-3 border rounded"/></div>
                <div><label className="block font-bold mb-2">Company</label><input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full p-3 border rounded"/></div>
                <div><label className="block font-bold mb-2">Phone</label><input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-3 border rounded"/></div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-marine-900 mb-4 border-b pb-2 uppercase">2. Service Required</h3>
              <select name="service" required value={formData.service} onChange={handleChange} className="w-full p-4 border-2 rounded-lg text-lg font-medium">
                <option value="">-- Select a Service --</option>
                {services.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>

            {formData.service && (
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h3 className="text-lg font-bold text-marine-900 mb-4 flex items-center"><Ship className="mr-2"/> Vessel Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div><label className="block font-bold mb-2">Vessel Name</label><input type="text" name="vesselName" value={formData.vesselName} onChange={handleChange} className="w-full p-3 border rounded bg-white"/></div>
                  <div><label className="block font-bold mb-2">IMO Number</label><input type="text" name="imo" value={formData.imo} onChange={handleChange} className="w-full p-3 border rounded bg-white"/></div>
                  
                  {formData.service.includes('IHM') && (
                    <>
                      <div><label className="block font-bold mb-2">Gross Tonnage (GT)</label><input type="text" name="grossTonnage" value={formData.grossTonnage} onChange={handleChange} className="w-full p-3 border border-yellow-300 bg-yellow-50 rounded"/></div>
                      <div><label className="block font-bold mb-2">Year Built</label><input type="text" name="yearBuilt" value={formData.yearBuilt} onChange={handleChange} className="w-full p-3 border rounded bg-white"/></div>
                    </>
                  )}
                </div>
                {(formData.service.includes('Asbestos') || formData.service.includes('Consultancy')) && (
                  <div className="mt-6"><label className="block font-bold mb-2"><FileText className="inline w-4 h-4 mr-1"/> Scope of Work</label><textarea name="projectScope" rows="3" value={formData.projectScope} onChange={handleChange} className="w-full p-3 border border-yellow-300 bg-yellow-50 rounded"/></div>
                )}
              </div>
            )}

            <div><label className="block font-bold mb-2">Additional Info</label><textarea name="message" rows="4" value={formData.message} onChange={handleChange} className="w-full p-3 border rounded"/></div>

            <button type="submit" disabled={status === 'sending'} className="w-full bg-marine-900 text-white font-bold py-4 rounded-lg hover:bg-brand-teal transition shadow-lg text-lg">
              {status === 'sending' ? 'Sending...' : 'Submit Quote Request'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Quote;