import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white">
      {/* 1. HEADER SECTION WITH VIDEO BACKGROUND */}
      <div className="relative bg-marine-900 py-24 text-center overflow-hidden">

        {/* VIDEO BACKGROUND */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/ocean.mp4" type="video/mp4" />
          </video>
          {/* Dark Overlay for readability */}
          <div className="absolute inset-0 bg-marine-900/60 mix-blend-multiply"></div>
        </div>

        {/* Header Text */}
        <div className="relative max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-white uppercase tracking-widest drop-shadow-lg">Contact Us</h1>
          <p className="text-gray-100 mt-4 max-w-2xl mx-auto font-medium drop-shadow-md">
            Get in touch with our expert surveyors today.
          </p>
        </div>
      </div>

      {/* 2. MAIN CONTENT SECTION (This was missing!) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* LEFT COLUMN: Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-marine-900 mb-8 uppercase tracking-wide">Get In Touch</h2>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-teal-50 p-3 rounded-full mr-4 text-brand-teal">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-marine-900">Phone</h3>
                  <p className="text-gray-600">(+356) 77990449</p>
                  <p className="text-sm text-gray-400">WhatsApp </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-teal-50 p-3 rounded-full mr-4 text-brand-teal">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-marine-900">Email</h3>
                  <p className="text-gray-600">info@ihmmarineservices.com</p>
                  <p className="text-gray-600">rory@ihmmarineservices.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-teal-50 p-3 rounded-full mr-4 text-brand-teal">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-marine-900">Headquarters</h3>
                  <p className="text-gray-600">Oasis House Triq il Port Hieles</  p>
                  <p className="text-gray-600">Birzebbuga</p>
                  <p className="text-gray-600">BBG1801</p>
                  <p className="text-gray-600">Malta</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Contact Form */}
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-marine-900 mb-6">Send us a Message</h2>

            {/* Success/Error Messages */}
            {submitStatus === 'success' && (
              <div className="mb-6 bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-md">
                ✓ Message sent successfully! We'll get back to you soon.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="mb-6 bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-md">
                ✗ Failed to send message. Please try again or email us directly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-teal focus:border-brand-teal"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-teal focus:border-brand-teal"
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-teal focus:border-brand-teal"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-marine-900 text-white font-bold py-3 rounded-md hover:bg-brand-teal transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;