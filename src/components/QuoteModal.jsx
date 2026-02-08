import React, { useState } from 'react';
import { X, Ship, Mail, User, Building2, Phone, MapPin, Clock } from 'lucide-react';

const QuoteModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        vesselName: '',
        vesselType: '',
        imo: '',
        service: '',
        portLocation: '',
        urgency: 'standard',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

    const services = [
        'Inventory of Hazardous Materials (IHM)',
        'Asbestos Management & Consultancy',
        'Classification & Statutory Surveys',
        'Ballast Water Treatment',
        'Maritime Digitalization',
        'Worldwide Vessel Inspections',
        'Other'
    ];

    const vesselTypes = [
        'Bulk Carrier',
        'Container Ship',
        'Tanker (Oil/Chemical/Gas)',
        'Passenger Ship',
        'Ro-Ro/Car Carrier',
        'General Cargo',
        'Offshore Vessel',
        'Other'
    ];

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
            const response = await fetch('/api/quote', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus('success');
                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    company: '',
                    phone: '',
                    vesselName: '',
                    vesselType: '',
                    imo: '',
                    service: '',
                    portLocation: '',
                    urgency: 'standard',
                    message: ''
                });
                // Close modal after 2 seconds
                setTimeout(() => {
                    onClose();
                    setSubmitStatus(null);
                }, 2000);
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Error submitting quote request:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal */}
            <div className="flex min-h-full items-center justify-center p-4">
                <div className="relative bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">

                    {/* Header */}
                    <div className="sticky top-0 bg-marine-900 text-white px-6 py-4 rounded-t-xl flex justify-between items-center z-10">
                        <div>
                            <h2 className="text-2xl font-bold">Request a Quote</h2>
                            <p className="text-gray-300 text-sm mt-1">Get a customized price estimate for your vessel</p>
                        </div>
                        <button
                            onClick={onClose}
                            className="text-white hover:text-brand-teal transition p-2"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="p-6 space-y-6">

                        {/* Contact Information */}
                        <div>
                            <h3 className="text-lg font-bold text-marine-900 mb-4 flex items-center">
                                <User className="mr-2 text-brand-teal" size={20} />
                                Contact Information
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Full Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-teal focus:border-brand-teal"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Email <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-teal focus:border-brand-teal"
                                        placeholder="john@company.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Company
                                    </label>
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-teal focus:border-brand-teal"
                                        placeholder="Shipping Company Ltd."
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Phone
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-teal focus:border-brand-teal"
                                        placeholder="+356 1234 5678"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Vessel Information */}
                        <div>
                            <h3 className="text-lg font-bold text-marine-900 mb-4 flex items-center">
                                <Ship className="mr-2 text-brand-teal" size={20} />
                                Vessel Information
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Vessel Name
                                    </label>
                                    <input
                                        type="text"
                                        name="vesselName"
                                        value={formData.vesselName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-teal focus:border-brand-teal"
                                        placeholder="MV Example"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Vessel Type
                                    </label>
                                    <select
                                        name="vesselType"
                                        value={formData.vesselType}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-teal focus:border-brand-teal"
                                    >
                                        <option value="">Select type...</option>
                                        {vesselTypes.map((type) => (
                                            <option key={type} value={type}>{type}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        IMO Number
                                    </label>
                                    <input
                                        type="text"
                                        name="imo"
                                        value={formData.imo}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-teal focus:border-brand-teal"
                                        placeholder="IMO 1234567"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Service Details */}
                        <div>
                            <h3 className="text-lg font-bold text-marine-900 mb-4 flex items-center">
                                <Building2 className="mr-2 text-brand-teal" size={20} />
                                Service Details
                            </h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Service Required <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-teal focus:border-brand-teal"
                                    >
                                        <option value="">Select a service...</option>
                                        {services.map((service) => (
                                            <option key={service} value={service}>{service}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Port/Location
                                    </label>
                                    <input
                                        type="text"
                                        name="portLocation"
                                        value={formData.portLocation}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-teal focus:border-brand-teal"
                                        placeholder="e.g., Singapore, Rotterdam, Malta"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Urgency
                                    </label>
                                    <div className="flex gap-4">
                                        <label className="flex items-center">
                                            <input
                                                type="radio"
                                                name="urgency"
                                                value="standard"
                                                checked={formData.urgency === 'standard'}
                                                onChange={handleChange}
                                                className="mr-2"
                                            />
                                            <span className="text-sm">Standard</span>
                                        </label>
                                        <label className="flex items-center">
                                            <input
                                                type="radio"
                                                name="urgency"
                                                value="urgent"
                                                checked={formData.urgency === 'urgent'}
                                                onChange={handleChange}
                                                className="mr-2"
                                            />
                                            <span className="text-sm text-red-600 font-semibold">⚡ Urgent</span>
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Additional Details
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="4"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-teal focus:border-brand-teal"
                                        placeholder="Please provide any additional information that will help us prepare an accurate quote..."
                                    ></textarea>
                                </div>
                            </div>
                        </div>

                        {/* Status Messages */}
                        {submitStatus === 'success' && (
                            <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-md">
                                ✓ Quote request sent successfully! We'll get back to you within 24 hours.
                            </div>
                        )}
                        {submitStatus === 'error' && (
                            <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-md">
                                ✗ Failed to send request. Please try again or email us directly at info@ihmmarineservices.com
                            </div>
                        )}

                        {/* Submit Button */}
                        <div className="flex gap-4 pt-4 border-t">
                            <button
                                type="button"
                                onClick={onClose}
                                className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 font-bold rounded-md hover:bg-gray-50 transition"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="flex-1 px-6 py-3 bg-marine-900 text-white font-bold rounded-md hover:bg-brand-teal transition disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Sending...' : 'Submit Quote Request'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default QuoteModal;
