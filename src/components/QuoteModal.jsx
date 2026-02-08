import React, { useState, useEffect } from 'react';
import { X, Ship, User, Building2 } from 'lucide-react';

const QuoteModal = ({ isOpen, onClose }) => {
    // 1. Setup Form State
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        // Common Marine Fields
        vesselName: '',
        vesselType: '',
        imo: '',
        // Dynamic Fields (fill these based on selection)
        grossTonnage: '',
        yearBuilt: '',
        projectScope: '', // For Asbestos/Consultancy
        message: ''
    });

    const [status, setStatus] = useState(''); // 'sending', 'success', 'error'

    // 2. Services List
    const services = [
        'Inventory of Hazardous Materials (IHM)',
        'Asbestos Management & Consultancy',
        'Classification & Statutory Surveys',
        'Ballast Water Treatment',
        'Maritime Digitalization',
        'Worldwide Vessel Inspections',
        'Other'
    ];

    // 3. Handle Changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // 4. Submit to Backend
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
                setTimeout(() => {
                    onClose();
                    setStatus('');
                    setFormData({ ...formData, service: '', message: '' }); // Reset partial
                }, 2000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            {/* Backdrop */}
            <div className="fixed inset-0 bg-black bg-opacity-60 transition-opacity" onClick={onClose}></div>

            {/* Modal Container */}
            <div className="flex min-h-full items-center justify-center p-4">
                <div className="relative bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                    
                    {/* Header */}
                    <div className="sticky top-0 bg-marine-900 text-white px-6 py-4 flex justify-between items-center z-10 rounded-t-xl">
                        <div>
                            <h2 className="text-xl font-bold">Request a Quote</h2>
                            <p className="text-gray-300 text-xs mt-1">Tell us about your vessel needs</p>
                        </div>
                        <button onClick={onClose} className="hover:text-brand-teal"><X size={24} /></button>
                    </div>

                    {/* Form Body */}
                    <form onSubmit={handleSubmit} className="p-6 space-y-6">

                        {/* SECTION A: Contact Info */}
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h3 className="text-sm font-bold text-marine-900 mb-3 uppercase tracking-wider border-b pb-2 flex items-center gap-2">
                                <User size={16} /> Contact Details
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input type="text" name="name" placeholder="Full Name *" required 
                                    value={formData.name} onChange={handleChange}
                                    className="p-2 border rounded focus:ring-2 focus:ring-brand-teal outline-none" />
                                <input type="email" name="email" placeholder="Email Address *" required 
                                    value={formData.email} onChange={handleChange}
                                    className="p-2 border rounded focus:ring-2 focus:ring-brand-teal outline-none" />
                                <input type="text" name="company" placeholder="Company Name" 
                                    value={formData.company} onChange={handleChange}
                                    className="p-2 border rounded focus:ring-2 focus:ring-brand-teal outline-none" />
                                <input type="tel" name="phone" placeholder="Phone Number" 
                                    value={formData.phone} onChange={handleChange}
                                    className="p-2 border rounded focus:ring-2 focus:ring-brand-teal outline-none" />
                            </div>
                        </div>

                        {/* SECTION B: Service Selection */}
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Service Required *</label>
                            <select name="service" required value={formData.service} onChange={handleChange}
                                className="w-full p-3 border-2 border-marine-100 rounded-lg focus:border-marine-900 outline-none font-medium">
                                <option value="">Select a Service...</option>
                                {services.map(s => <option key={s} value={s}>{s}</option>)}
                            </select>
                        </div>

                        {/* SECTION C: DYNAMIC FIELDS (The "Smart" Part) */}
                        {formData.service && (
                            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 animation-fade-in">
                                <h3 className="text-sm font-bold text-marine-900 mb-3 uppercase tracking-wider border-b border-blue-200 pb-2 flex items-center gap-2">
                                    <Ship size={16} /> Specific Details
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {/* Standard Vessel Info (Always show for marine services) */}
                                    <input type="text" name="vesselName" placeholder="Vessel Name" 
                                        value={formData.vesselName} onChange={handleChange}
                                        className="p-2 border rounded outline-none" />
                                    <input type="text" name="imo" placeholder="IMO Number" 
                                        value={formData.imo} onChange={handleChange}
                                        className="p-2 border rounded outline-none" />
                                    
                                    {/* CONDITIONAL: If IHM is selected, ask for Tonnage */}
                                    {formData.service.includes('IHM') && (
                                        <>
                                            <input type="text" name="grossTonnage" placeholder="Gross Tonnage (GT)" 
                                                value={formData.grossTonnage} onChange={handleChange}
                                                className="p-2 border rounded outline-none bg-yellow-50" />
                                            <input type="text" name="yearBuilt" placeholder="Year Built" 
                                                value={formData.yearBuilt} onChange={handleChange}
                                                className="p-2 border rounded outline-none" />
                                        </>
                                    )}
                                </div>

                                {/* CONDITIONAL: If Asbestos/Consultancy, ask for Scope */}
                                {(formData.service.includes('Asbestos') || formData.service.includes('Inspections')) && (
                                    <div className="mt-4">
                                        <label className="block text-xs font-bold text-gray-600 mb-1">Problem Description / Scope</label>
                                        <textarea name="projectScope" rows="2" 
                                            placeholder="e.g., We found suspicious material in the engine room..."
                                            value={formData.projectScope} onChange={handleChange}
                                            className="w-full p-2 border rounded outline-none bg-white" />
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Additional Message */}
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Additional Message</label>
                            <textarea name="message" rows="3" placeholder="Any other details..."
                                value={formData.message} onChange={handleChange}
                                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-brand-teal outline-none" />
                        </div>

                        {/* Submit Buttons */}
                        <div className="flex gap-3 pt-2">
                            <button type="button" onClick={onClose} className="px-6 py-3 text-gray-600 font-bold hover:bg-gray-100 rounded-lg transition">
                                Cancel
                            </button>
                            <button type="submit" disabled={status === 'sending'}
                                className="flex-1 px-6 py-3 bg-marine-900 text-white font-bold rounded-lg hover:bg-brand-teal transition shadow-lg disabled:opacity-70">
                                {status === 'sending' ? 'Sending...' : 'Get Quote'}
                            </button>
                        </div>

                        {/* Status Messages */}
                        {status === 'success' && (
                            <div className="p-3 bg-green-100 text-green-800 rounded text-center text-sm font-bold">
                                Request sent! We will contact you shortly.
                            </div>
                        )}
                        {status === 'error' && (
                            <div className="p-3 bg-red-100 text-red-800 rounded text-center text-sm">
                                Something went wrong. Please try again.
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default QuoteModal;