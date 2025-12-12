import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';

interface QuickApplicationForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  zipCode: string;
  state: string;
  experience: string;
}

export default function DriverApplicationForm() {
  const [formData, setFormData] = useState<QuickApplicationForm>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    zipCode: '',
    state: '',
    experience: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [consent, setConsent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const message = `
QUICK DRIVER APPLICATION

Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Zip Code: ${formData.zipCode}
State: ${formData.state}
Driving Experience: ${formData.experience}

Phone Consent: ${consent ? 'Yes' : 'No'}
      `.trim();

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          phone: formData.phone,
          message: message,
          to_email: 'bstrucking25@gmail.com',
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );
      
      console.log('Driver application sent successfully to: bstrucking25@gmail.com');
      
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        zipCode: '',
        state: '',
        experience: ''
      });
      setConsent(false);
      
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (error: unknown) {
      console.error('Email send error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white bg-opacity-95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl">
      <div className="text-center mb-6">
        <h3 className="text-3xl font-bold text-gray-900 mb-2">Apply To Drive</h3>
        <p className="text-gray-600">Join our professional team of drivers</p>
      </div>
      
      {submitStatus === 'success' && (
        <div className="mb-4 p-4 bg-green-100 text-green-800 rounded-lg flex items-center">
          <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
          Application submitted! We'll contact you soon.
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="mb-4 p-4 bg-red-100 text-red-800 rounded-lg">
          Failed to submit. Please try again.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            required
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900 placeholder:text-gray-500"
          />
          
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            required
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900 placeholder:text-gray-500"
          />
        </div>

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900 placeholder:text-gray-500"
        />

        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          required
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900 placeholder:text-gray-500"
        />

        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            placeholder="Zip Code"
            required
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900 placeholder:text-gray-500"
          />
          
          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900"
          >
            <option value="">Select State</option>
            <option value="GA">Georgia</option>
            <option value="AL">Alabama</option>
            <option value="SC">South Carolina</option>
            <option value="FL">Florida</option>
            <option value="TN">Tennessee</option>
            <option value="LA">Louisiana</option>
            <option value="TX">Texas</option>
          </select>
        </div>

        <select
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900"
        >
          <option value="">Select Driving Experience</option>
          <option value="0-1">0-1 years</option>
          <option value="1-3">1-3 years</option>
          <option value="3-5">3-5 years</option>
          <option value="5+">5+ years</option>
        </select>

        <div className="bg-blue-50 p-4 rounded-lg">
          <label className="flex items-start cursor-pointer">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              required
              className="w-5 h-5 text-blue-900 focus:ring-blue-500 mt-1 cursor-pointer shrink-0"
            />
            <span className="ml-3 text-sm text-gray-700 leading-tight">
              By clicking the toggle, I consent to receive phone, text, and/or email communications from Best Service Trucking about educational or employment opportunities. Phone calls and texts may be made using an automatic telephone dialing system (ATDS) and may involve recordings, texts, or voicemails delivered by artificial intelligence (AI) technologies.
            </span>
          </label>
        </div>

        <button
          type="submit"
          disabled={isSubmitting || !consent}
          className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-6 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none cursor-pointer"
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>

        <Link
          to="/apply"
          className="block w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-4 px-6 rounded-lg text-lg text-center transition-all duration-300 transform hover:scale-105 cursor-pointer"
        >
          <FontAwesomeIcon icon={faTruck} className="mr-2" />
          Full Application
        </Link>
      </form>
    </div>
  );
}
