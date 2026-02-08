import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react'; // Make sure you have these icons imported

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* LEFT SIDE: Contact Info (Restored Rory's Details) */}
        <div>
          <h1 className="text-3xl font-bold text-marine-900 mb-8 uppercase tracking-wide">Get In Touch</h1>
          
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-brand-teal bg-opacity-10 p-3 rounded-full text-brand-teal">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-bold text-marine-900">Phone</h3>
                <p className="text-gray-600">(+356) 77990449</p>
                <p className="text-gray-400 text-sm">WhatsApp Available</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-brand-teal bg-opacity-10 p-3 rounded-full text-brand-teal">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-bold text-marine-900">Email</h3>
                <p className="text-gray-600">info@ihmmarineservices.com</p>
                <p className="text-gray-600">rory@ihmmarineservices.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-brand-teal bg-opacity-10 p-3 rounded-full text-brand-teal">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-marine-900">Headquarters</h3>
                <p className="text-gray-600">
                  Oasis House Triq il Port Hieles<br/>
                  Birzebbuga, BBG1801<br/>
                  Malta
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Contact Form (Kept the working logic) */}
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
          <h2 className="text-2xl font-bold text-marine-900 mb-6">Send us a Message</h2>
          
          {status === 'success' && (
            <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded mb-6 text-sm">
              ✓ Message sent successfully! We'll get back to you soon.
            </div>
          )}
          
          {status === 'error' && (
            <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded mb-6 text-sm">
              ✕ Failed to send message. Please try again or email us directly.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-bold mb-2 text-sm uppercase">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 font-bold mb-2 text-sm uppercase">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 font-bold mb-2 text-sm uppercase">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-marine-900 text-white font-bold py-4 rounded hover:bg-brand-teal transition duration-300 disabled:opacity-70"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;