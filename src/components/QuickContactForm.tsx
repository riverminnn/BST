import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';

interface QuickContactFormProps {
  onSubmit?: (data: FormData) => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function QuickContactForm({ onSubmit }: QuickContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
          to_email: 'bstrucking25@gmail.com',
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );
      
      console.log('Email sent successfully to: bstrucking25@gmail.com');
      
      if (onSubmit) {
        onSubmit(formData);
      }
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      // Reset status after 3 seconds
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
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Get A Quote</h3>
      
      {submitStatus === 'success' && (
        <div className="mb-4 p-4 bg-green-100 text-green-800 rounded-lg">
          Message sent successfully! We'll contact you soon.
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="mb-4 p-4 bg-red-100 text-red-800 rounded-lg">
          Failed to send message. Please try again.
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name *"
            required
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900 placeholder:text-gray-500"
          />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email *"
            required
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900 placeholder:text-gray-500"
          />
          
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number *"
            required
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900 placeholder:text-gray-500"
          />
        </div>
        
        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your shipping needs..."
            rows={4}
            required
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none text-gray-900 placeholder:text-gray-500"
          />
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-4 px-6 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center shadow-lg cursor-pointer"
        >
          {isSubmitting ? (
            <span className="text-blue-900">Sending...</span>
          ) : (
            <>
              <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
              Send Message
            </>
          )}
        </button>
      </form>
      
      <p className="text-sm text-gray-700 text-center mt-4 space-y-1">
        <span className="block">Or call us directly:</span>
        <span className="block font-semibold text-blue-800">James M Im · Direct</span>
        <span className="block">
          <a href="tel:7706683771" className="text-blue-700 font-semibold hover:underline">(770) 668-3771</a> ·{' '}
          <a href="tel:7706269777" className="text-blue-700 font-semibold hover:underline">(770) 626-9777</a>
        </span>
      </p>
    </div>
  );
}
