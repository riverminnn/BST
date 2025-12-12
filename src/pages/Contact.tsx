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
    <div className="min-h-screen text-(--strong)">
      <section className="section-pad bg-(--bg-soft) border-b border-(--line) text-center space-y-4">
        <div className="page-shell space-y-4">
          <span className="pill">Contact</span>
          <h1 className="section-title">Ready to ship? Let&apos;s plan it calmly.</h1>
          <p className="section-subtitle">Tell us the lane and details—we&apos;ll respond quickly with a clean, reliable plan.</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="page-shell grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1">
            <div className="surface-card p-7 border border-(--line) sticky top-6 space-y-6">
              <h2 className="text-2xl font-bold text-(--strong)">Get in touch</h2>
              <div className="space-y-5 text-sm text-(--muted)">
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faPhone} className="text-(--accent) mt-1" />
                  <div>
                    <p className="font-semibold text-(--strong)">Phone</p>
                    <p>(770) 668-3771</p>
                    <p>(770) 626-9777</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faEnvelope} className="text-(--accent) mt-1" />
                  <div>
                    <p className="font-semibold text-(--strong)">Email</p>
                    <a href="mailto:bstrucking25@gmail.com" className="hover:text-(--accent) transition-colors">bstrucking25@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-(--accent) mt-1" />
                  <div>
                    <p className="font-semibold text-(--strong)">Address</p>
                    <p>106 Valambrosia Rd.</p>
                    <p>Dublin, GA 31021</p>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-(--line) text-sm text-(--muted)">
                <p className="font-semibold text-(--strong) mb-1">Hours</p>
                <p>Always on, 24/7</p>
                <p className="text-(--accent) mt-1">Dispatch ready around the clock.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="surface-card p-8 md:p-10 border border-(--line)">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-(--muted)">Quote request</p>
                  <h2 className="text-3xl font-bold text-(--strong)">Tell us about the move</h2>
                </div>
              </div>

              {submitStatus === 'success' && (
                <div className="mb-6 p-5 rounded-xl border border-green-500/40 bg-green-500/10 text-green-100">
                  <h3 className="font-semibold mb-1">Message sent successfully</h3>
                  <p>Thank you for contacting Best Service Trucking. We&apos;ll reply within 24 hours.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-5 rounded-xl border border-red-500/40 bg-red-500/10 text-red-100">
                  <h3 className="font-semibold mb-1">Error sending message</h3>
                  <p>Please try again or call us directly.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-(--strong) flex items-center gap-2">
                    <FontAwesomeIcon icon={faEnvelope} className="text-(--accent)" />
                    Personal information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[{ name: 'firstName', label: 'First Name *' }, { name: 'lastName', label: 'Last Name *' }].map((field) => (
                      <div key={field.name}>
                        <label className="block text-sm font-semibold text-(--muted) mb-2">{field.label}</label>
                        <input
                          type="text"
                          name={field.name}
                          value={(formData as any)[field.name]}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-(--card) border border-(--line) text-(--strong) placeholder:text-(--muted) focus:ring-2 focus:ring-(--accent) focus:border-transparent outline-none"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[{ name: 'email', label: 'Email Address *', type: 'email' }, { name: 'phone', label: 'Phone Number *', type: 'tel' }].map((field) => (
                      <div key={field.name}>
                        <label className="block text-sm font-semibold text-(--muted) mb-2">{field.label}</label>
                        <input
                          type={field.type}
                          name={field.name}
                          value={(formData as any)[field.name]}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-(--card) border border-(--line) text-(--strong) placeholder:text-(--muted) focus:ring-2 focus:ring-(--accent) focus:border-transparent outline-none"
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-(--muted) mb-2">Company Name (optional)</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-(--card) border border-(--line) text-(--strong) placeholder:text-(--muted) focus:ring-2 focus:ring-(--accent) focus:border-transparent outline-none"
                    />
                  </div>
                </div>

                <div className="pt-6 border-t border-(--line) space-y-4">
                  <h3 className="text-lg font-semibold text-(--strong) flex items-center gap-2">
                    <FontAwesomeIcon icon={faTruck} className="text-(--accent)" />
                    Shipping details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-(--muted) mb-2">Service Type *</label>
                      <select
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-(--card) border border-(--line) text-(--strong) focus:ring-2 focus:ring-(--accent) focus:border-transparent outline-none"
                      >
                        <option value="">Select Service</option>
                        <option value="port-container">Port Container Service</option>
                        <option value="pickup-delivery">Pickup & Delivery</option>
                        <option value="warehouse">Warehouse to Warehouse</option>
                        <option value="custom">Custom Route</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-(--muted) mb-2">Cargo Type *</label>
                      <select
                        name="cargoType"
                        value={formData.cargoType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-(--card) border border-(--line) text-(--strong) focus:ring-2 focus:ring-(--accent) focus:border-transparent outline-none"
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-(--muted) mb-2">Pickup Location *</label>
                      <input
                        type="text"
                        name="pickupLocation"
                        value={formData.pickupLocation}
                        onChange={handleChange}
                        placeholder="City, State or Port Name"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-(--card) border border-(--line) text-(--strong) placeholder:text-(--muted) focus:ring-2 focus:ring-(--accent) focus:border-transparent outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-(--muted) mb-2">Delivery Location *</label>
                      <input
                        type="text"
                        name="deliveryLocation"
                        value={formData.deliveryLocation}
                        onChange={handleChange}
                        placeholder="City, State"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-(--card) border border-(--line) text-(--strong) placeholder:text-(--muted) focus:ring-2 focus:ring-(--accent) focus:border-transparent outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-(--muted) mb-2">Preferred Shipment Date</label>
                    <input
                      type="date"
                      name="shipmentDate"
                      value={formData.shipmentDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-(--card) border border-(--line) text-(--strong) focus:ring-2 focus:ring-(--accent) focus:border-transparent outline-none"
                    />
                  </div>
                </div>

                <div className="pt-6 border-t border-(--line) space-y-4">
                  <h3 className="text-lg font-semibold text-(--strong) flex items-center gap-2">
                    <FontAwesomeIcon icon={faBox} className="text-(--accent)" />
                    Additional details
                  </h3>
                  <div>
                    <label className="block text-sm font-semibold text-(--muted) mb-2">Additional Details</label>
                    <textarea
                      name="additionalDetails"
                      value={formData.additionalDetails}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Special requirements, timing notes, or questions..."
                      className="w-full px-4 py-3 rounded-lg bg-(--card) border border-(--line) text-(--strong) placeholder:text-(--muted) focus:ring-2 focus:ring-(--accent) focus:border-transparent outline-none resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-(--muted) mb-2">Preferred Contact Method</label>
                    <div className="flex gap-6 text-sm text-(--muted)">
                      {['email', 'phone'].map((method) => (
                        <label key={method} className="flex items-center cursor-pointer gap-2">
                          <input
                            type="radio"
                            name="preferredContact"
                            value={method}
                            checked={formData.preferredContact === method}
                            onChange={handleChange}
                            className="w-4 h-4 text-(--accent) focus:ring-(--accent) cursor-pointer"
                          />
                          <span className="capitalize">{method}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 bg-(--accent) text-(--btn-text) font-bold py-4 px-6 rounded-lg text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending request...' : (
                    <>
                      <FontAwesomeIcon icon={faPaperPlane} />
                      Submit request
                    </>
                  )}
                </button>

                <p className="text-xs text-slate-400 text-center">
                  By submitting, you agree we may contact you regarding this quote request.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
