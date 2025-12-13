import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPhone, 
  faEnvelope, 
  faMapMarkerAlt,
  faPaperPlane,
  faTruck,
  faBox,
  faCheck,
  faXmark
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

// Validation helper - returns status and icon info
const getValidationStatus = (value: string, isRequired: boolean, type?: string): { status: string; isValid: boolean } | null => {
  if (!value) {
    return isRequired ? null : null; // No indicator when empty
  }
  
  // Check specific validations
  if (type === 'email') {
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    return { status: emailValid ? 'valid' : 'invalid', isValid: emailValid };
  }
  
  if (type === 'phone') {
    const phoneValid = value.replace(/\D/g, '').length >= 10;
    return { status: phoneValid ? 'valid' : 'invalid', isValid: phoneValid };
  }
  
  // For required fields with value
  if (isRequired) {
    const hasValue = value.trim().length > 0;
    return { status: hasValue ? 'valid' : 'invalid', isValid: hasValue };
  }
  
  // For optional fields with value
  return value.trim().length > 0 ? { status: 'optional-filled', isValid: true } : null;
};

// Validation Icon component
const ValidationIcon = ({ value, isRequired, type, touched }: { value: string; isRequired: boolean; type?: string; touched: boolean }) => {
  if (!touched) return null;
  
  const validation = getValidationStatus(value, isRequired, type);
  if (!validation) return null;
  
  return (
    <span className={`validation-icon ${validation.status}`}>
      <FontAwesomeIcon icon={validation.isValid ? faCheck : faXmark} />
    </span>
  );
};

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

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setTouched({
      ...touched,
      [e.target.name]: true
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Build HTML without line breaks to prevent email clients from adding extra spacing
      const detailedMessage = `<table style="width:100%;border-collapse:collapse;font-size:13px;font-family:'Segoe UI',Tahoma,sans-serif;"><tr><td colspan="2" style="background:#1e40af;color:white;padding:6px 10px;font-weight:700;font-size:11px;">👤 CONTACT DETAILS</td></tr><tr><td style="padding:4px 8px;color:#64748b;width:110px;background:#fff;border:1px solid #e2e8f0;"><strong>Name:</strong></td><td style="padding:4px 8px;color:#0f172a;background:#fff;border:1px solid #e2e8f0;">${formData.firstName} ${formData.lastName}</td></tr><tr><td style="padding:4px 8px;color:#64748b;background:#fff;border:1px solid #e2e8f0;"><strong>Email:</strong></td><td style="padding:4px 8px;color:#2563eb;background:#fff;border:1px solid #e2e8f0;">${formData.email}</td></tr><tr><td style="padding:4px 8px;color:#64748b;background:#fff;border:1px solid #e2e8f0;"><strong>Phone:</strong></td><td style="padding:4px 8px;color:#0f172a;background:#fff;border:1px solid #e2e8f0;">${formData.phone}</td></tr><tr><td style="padding:4px 8px;color:#64748b;background:#fff;border:1px solid #e2e8f0;"><strong>Company:</strong></td><td style="padding:4px 8px;color:#0f172a;background:#fff;border:1px solid #e2e8f0;">${formData.company || 'N/A'}</td></tr><tr><td colspan="2" style="background:#1e40af;color:white;padding:6px 10px;font-weight:700;font-size:11px;">📦 SHIPPING DETAILS</td></tr><tr><td style="padding:4px 8px;color:#64748b;background:#fff;border:1px solid #e2e8f0;"><strong>Service Type:</strong></td><td style="padding:4px 8px;color:#0f172a;background:#fff;border:1px solid #e2e8f0;">${formData.serviceType}</td></tr><tr><td style="padding:4px 8px;color:#64748b;background:#fff;border:1px solid #e2e8f0;"><strong>Cargo Type:</strong></td><td style="padding:4px 8px;color:#0f172a;background:#fff;border:1px solid #e2e8f0;">${formData.cargoType}</td></tr><tr><td style="padding:4px 8px;color:#64748b;background:#fff;border:1px solid #e2e8f0;"><strong>Pickup:</strong></td><td style="padding:4px 8px;color:#0f172a;background:#fff;border:1px solid #e2e8f0;">${formData.pickupLocation}</td></tr><tr><td style="padding:4px 8px;color:#64748b;background:#fff;border:1px solid #e2e8f0;"><strong>Delivery:</strong></td><td style="padding:4px 8px;color:#0f172a;background:#fff;border:1px solid #e2e8f0;">${formData.deliveryLocation}</td></tr><tr><td style="padding:4px 8px;color:#64748b;background:#fff;border:1px solid #e2e8f0;"><strong>Ship Date:</strong></td><td style="padding:4px 8px;color:#0f172a;background:#fff;border:1px solid #e2e8f0;">${formData.shipmentDate || 'Not specified'}</td></tr><tr><td colspan="2" style="background:#1e40af;color:white;padding:6px 10px;font-weight:700;font-size:11px;">📝 ADDITIONAL INFO</td></tr><tr><td colspan="2" style="padding:8px;color:#0f172a;background:#fff;border:1px solid #e2e8f0;">${formData.additionalDetails || 'None'}</td></tr><tr><td colspan="2" style="background:#1e40af;color:white;padding:6px 10px;font-weight:700;font-size:11px;">⚙️ PREFERENCES</td></tr><tr><td style="padding:4px 8px;color:#64748b;background:#fff;border:1px solid #e2e8f0;"><strong>Contact Method:</strong></td><td style="padding:4px 8px;color:#0f172a;background:#fff;border:1px solid #e2e8f0;">${formData.preferredContact}</td></tr></table>`;

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
                    <p>106 Old Valambrosia Rd.</p>
                    <p>Dublin, GA 301021</p>
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
                <div className="mb-6 p-5 rounded-xl border border-green-500/40 bg-green-500/15">
                  <h3 className="font-semibold mb-1 text-green-700">Message sent successfully</h3>
                  <p className="text-green-600">Thank you for contacting Best Service Trucking. We&apos;ll reply within 24 hours.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-5 rounded-xl border border-red-500/40 bg-red-500/15">
                  <h3 className="font-semibold mb-1 text-red-700">Error sending message</h3>
                  <p className="text-red-600">Please try again or call us directly.</p>
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
                        <div className="input-wrapper">
                          <input
                            type="text"
                            name={field.name}
                            value={(formData as any)[field.name]}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                            className="w-full px-4 py-3 rounded-lg bg-(--card) border border-(--line) text-(--strong) placeholder:text-(--muted) focus:ring-2 focus:ring-(--accent) focus:border-transparent outline-none transition-all"
                          />
                          <ValidationIcon value={(formData as any)[field.name]} isRequired={true} touched={touched[field.name]} />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-(--muted) mb-2">Email Address *</label>
                      <div className="input-wrapper">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-(--card) border border-(--line) text-(--strong) placeholder:text-(--muted) focus:ring-2 focus:ring-(--accent) focus:border-transparent outline-none transition-all"
                        />
                        <ValidationIcon value={formData.email} isRequired={true} type="email" touched={touched.email} />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-(--muted) mb-2">Phone Number *</label>
                      <div className="input-wrapper">
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-(--card) border border-(--line) text-(--strong) placeholder:text-(--muted) focus:ring-2 focus:ring-(--accent) focus:border-transparent outline-none transition-all"
                        />
                        <ValidationIcon value={formData.phone} isRequired={true} type="phone" touched={touched.phone} />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-(--muted) mb-2">Company Name (optional)</label>
                    <div className="input-wrapper">
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="w-full px-4 py-3 rounded-lg bg-(--card) border border-(--line) text-(--strong) placeholder:text-(--muted) focus:ring-2 focus:ring-(--accent) focus:border-transparent outline-none transition-all"
                      />
                      <ValidationIcon value={formData.company} isRequired={false} touched={touched.company} />
                    </div>
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
                      <div className="input-wrapper">
                        <select
                          name="serviceType"
                          value={formData.serviceType}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-(--card) border border-(--line) text-(--strong) focus:ring-2 focus:ring-(--accent) focus:border-transparent outline-none transition-all"
                        >
                        <option value="">Select Service</option>
                        <option value="port-container">Port Container Service</option>
                        <option value="pickup-delivery">Pickup & Delivery</option>
                        <option value="warehouse">Warehouse to Warehouse</option>
                        <option value="custom">Custom Route</option>
                      </select>
                      <ValidationIcon value={formData.serviceType} isRequired={true} touched={touched.serviceType} />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-(--muted) mb-2">Cargo Type *</label>
                      <div className="input-wrapper">
                        <select
                          name="cargoType"
                          value={formData.cargoType}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-(--card) border border-(--line) text-(--strong) focus:ring-2 focus:ring-(--accent) focus:border-transparent outline-none transition-all"
                        >
                          <option value="">Select Cargo Type</option>
                          <option value="container-20">20' Container</option>
                          <option value="container-40">40' Container</option>
                          <option value="container-40hc">40' High Cube</option>
                          <option value="dry-van">Dry Van</option>
                          <option value="tank">Tank</option>
                          <option value="other">Other</option>
                        </select>
                        <ValidationIcon value={formData.cargoType} isRequired={true} touched={touched.cargoType} />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-(--muted) mb-2">Pickup Location *</label>
                      <div className="input-wrapper">
                        <input
                          type="text"
                          name="pickupLocation"
                          value={formData.pickupLocation}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="City, State or Port Name"
                          required
                          className="w-full px-4 py-3 rounded-lg bg-(--card) border border-(--line) text-(--strong) placeholder:text-(--muted) focus:ring-2 focus:ring-(--accent) focus:border-transparent outline-none transition-all"
                        />
                        <ValidationIcon value={formData.pickupLocation} isRequired={true} touched={touched.pickupLocation} />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-(--muted) mb-2">Delivery Location *</label>
                      <div className="input-wrapper">
                        <input
                          type="text"
                          name="deliveryLocation"
                          value={formData.deliveryLocation}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="City, State"
                          required
                          className="w-full px-4 py-3 rounded-lg bg-(--card) border border-(--line) text-(--strong) placeholder:text-(--muted) focus:ring-2 focus:ring-(--accent) focus:border-transparent outline-none transition-all"
                        />
                        <ValidationIcon value={formData.deliveryLocation} isRequired={true} touched={touched.deliveryLocation} />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-(--muted) mb-2">Preferred Shipment Date</label>
                    <div className="input-wrapper">
                      <input
                        type="date"
                        name="shipmentDate"
                        value={formData.shipmentDate}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="w-full px-4 py-3 rounded-lg bg-(--card) border border-(--line) text-(--strong) focus:ring-2 focus:ring-(--accent) focus:border-transparent outline-none transition-all"
                      />
                      <ValidationIcon value={formData.shipmentDate} isRequired={false} touched={touched.shipmentDate} />
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-(--line) space-y-4">
                  <h3 className="text-lg font-semibold text-(--strong) flex items-center gap-2">
                    <FontAwesomeIcon icon={faBox} className="text-(--accent)" />
                    Additional details
                  </h3>
                  <div>
                    <label className="block text-sm font-semibold text-(--muted) mb-2">Additional Details</label>
                    <div className="input-wrapper">
                      <textarea
                        name="additionalDetails"
                        value={formData.additionalDetails}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        rows={5}
                        placeholder="Special requirements, timing notes, or questions..."
                        className="w-full px-4 py-3 rounded-lg bg-(--card) border border-(--line) text-(--strong) placeholder:text-(--muted) focus:ring-2 focus:ring-(--accent) focus:border-transparent outline-none resize-none transition-all"
                      />
                      <ValidationIcon value={formData.additionalDetails} isRequired={false} touched={touched.additionalDetails} />
                    </div>
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
