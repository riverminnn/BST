import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPhone, 
  faEnvelope, 
  faMapMarkerAlt,
  faPaperPlane,
  faTruck,
  faBox
} from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';

interface DetailedFormData {
  // Personal Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  
  // Shipping Details
  serviceType: string;
  cargoType: string;
  pickupLocation: string;
  deliveryLocation: string;
  shipmentDate: string;
  
  // Additional Information
  additionalDetails: string;
  preferredContact: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<DetailedFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    serviceType: '',
    cargoType: '',
    pickupLocation: '',
    deliveryLocation: '',
    shipmentDate: '',
    additionalDetails: '',
    preferredContact: 'email'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Prepare detailed message
      const detailedMessage = `
CONTACT DETAILS:
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company || 'N/A'}

SHIPPING DETAILS:
Service Type: ${formData.serviceType}
Cargo Type: ${formData.cargoType}
Pickup Location: ${formData.pickupLocation}
Delivery Location: ${formData.deliveryLocation}
Shipment Date: ${formData.shipmentDate || 'Not specified'}

ADDITIONAL INFORMATION:
${formData.additionalDetails}

Preferred Contact Method: ${formData.preferredContact}
      `.trim();

      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          phone: formData.phone,
          message: detailedMessage,
          to_email: 'bstrucking25@gmail.com',
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );
      
      console.log('Detailed email sent successfully to: bstrucking25@gmail.com');
      
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        serviceType: '',
        cargoType: '',
        pickupLocation: '',
        deliveryLocation: '',
        shipmentDate: '',
        additionalDetails: '',
        preferredContact: 'email'
      });
      
      // Scroll to success message
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error: unknown) {
      console.error('Email send error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-linear-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4 text-center">Contact Us</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Ready to ship? Get in touch with us for a detailed quote and personalized service
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-blue-900 text-white p-8 rounded-2xl shadow-xl sticky top-8">
                <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <FontAwesomeIcon icon={faPhone} className="text-2xl text-yellow-400 mt-1 mr-4 shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Phone</h3>
                      <p className="text-blue-100">(770) 668-3771</p>
                      <p className="text-blue-100">(770) 626-9777</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <FontAwesomeIcon icon={faEnvelope} className="text-2xl text-yellow-400 mt-1 mr-4 shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Email</h3>
                      <a href="mailto:bstrucking25@gmail.com" className="text-blue-100 hover:text-yellow-400 transition-colors">
                        bstrucking25@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-2xl text-yellow-400 mt-1 mr-4 shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Address</h3>
                      <p className="text-blue-100">106 Valambrosia Rd.</p>
                      <p className="text-blue-100">Dublin, GA 31021</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-blue-700">
                  <h3 className="font-bold text-lg mb-4">Business Hours</h3>
                  <p className="text-blue-100">Monday - Friday: 24/7</p>
                  <p className="text-blue-100">Saturday - Sunday: 24/7</p>
                  <p className="text-sm text-yellow-400 mt-2">We operate around the clock</p>
                </div>
              </div>
            </div>

            {/* Detailed Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Request a Detailed Quote</h2>
                
                {submitStatus === 'success' && (
                  <div className="mb-6 p-6 bg-green-100 text-green-800 rounded-lg border-l-4 border-green-500">
                    <h3 className="font-bold text-lg mb-2">Message Sent Successfully!</h3>
                    <p>Thank you for contacting Best Service Trucking. We'll get back to you within 24 hours.</p>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="mb-6 p-6 bg-red-100 text-red-800 rounded-lg border-l-4 border-red-500">
                    <h3 className="font-bold text-lg mb-2">Error Sending Message</h3>
                    <p>Please try again or contact us directly by phone.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <FontAwesomeIcon icon={faEnvelope} className="text-blue-900 mr-2" />
                      Personal Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="mt-4">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Company Name (Optional)
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Shipping Details */}
                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <FontAwesomeIcon icon={faTruck} className="text-blue-900 mr-2" />
                      Shipping Details
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Service Type *
                        </label>
                        <select
                          name="serviceType"
                          value={formData.serviceType}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        >
                          <option value="">Select Service</option>
                          <option value="port-container">Port Container Service</option>
                          <option value="pickup-delivery">Pickup & Delivery</option>
                          <option value="warehouse">Warehouse to Warehouse</option>
                          <option value="custom">Custom Route</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Cargo Type *
                        </label>
                        <select
                          name="cargoType"
                          value={formData.cargoType}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        >
                          <option value="">Select Cargo Type</option>
                          <option value="container-20">20' Container</option>
                          <option value="container-40">40' Container</option>
                          <option value="container-40hc">40' High Cube</option>
                          <option value="dry-van">Dry Van</option>
                          <option value="tank">Tank</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Pickup Location *
                        </label>
                        <input
                          type="text"
                          name="pickupLocation"
                          value={formData.pickupLocation}
                          onChange={handleChange}
                          placeholder="City, State or Port Name"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Delivery Location *
                        </label>
                        <input
                          type="text"
                          name="deliveryLocation"
                          value={formData.deliveryLocation}
                          onChange={handleChange}
                          placeholder="City, State"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="mt-4">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Preferred Shipment Date
                      </label>
                      <input
                        type="date"
                        name="shipmentDate"
                        value={formData.shipmentDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <FontAwesomeIcon icon={faBox} className="text-blue-900 mr-2" />
                      Additional Information
                    </h3>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Additional Details
                      </label>
                      <textarea
                        name="additionalDetails"
                        value={formData.additionalDetails}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Please provide any additional information about your shipment, special requirements, or questions..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                      />
                    </div>

                    <div className="mt-4">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Preferred Contact Method
                      </label>
                      <div className="flex gap-6">
                        <label className="flex items-center cursor-pointer">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="email"
                            checked={formData.preferredContact === 'email'}
                            onChange={handleChange}
                            className="w-4 h-4 text-blue-900 focus:ring-blue-500 cursor-pointer"
                          />
                          <span className="ml-2 text-gray-700">Email</span>
                        </label>
                        <label className="flex items-center cursor-pointer">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="phone"
                            checked={formData.preferredContact === 'phone'}
                            onChange={handleChange}
                            className="w-4 h-4 text-blue-900 focus:ring-blue-500 cursor-pointer"
                          />
                          <span className="ml-2 text-gray-700">Phone</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-4 px-6 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center mt-8 cursor-pointer"
                  >
                    {isSubmitting ? (
                      'Sending Request...'
                    ) : (
                      <>
                        <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                        Submit Request
                      </>
                    )}
                  </button>

                  <p className="text-sm text-gray-600 text-center mt-4">
                    By submitting this form, you agree to be contacted by Best Service Trucking LLC regarding your quote request.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
