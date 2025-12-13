import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUser,
  faIdCard,
  faCheckCircle,
  faArrowLeft,
  faArrowRight,
  faCheck,
  faXmark
} from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';

interface ApplicationData {
  // Step 1: Personal Information
  firstName: string;
  middleName: string;
  lastName: string;
  suffix: string;
  ssn: string;
  dateOfBirth: string;
  streetAddress1: string;
  streetAddress2: string;
  city: string;
  state: string;
  zipCode: string;
  residenceYears: string;
  primaryPhone: string;
  cellPhone: string;
  email: string;
  confirmEmail: string;
  preferredContact: string;
  bestTimeToContact: string;
  drivingExperience: string;
  phoneConsent: boolean;
  emailConsent: boolean;
  
  // Step 2: EEO Information
  gender: string;
  raceEthnicity: string;
  veteranStatus: string;
}

// Validation helper - returns status and icon info
const getValidationStatus = (value: string, isRequired: boolean, type?: string, compareValue?: string): { status: string; isValid: boolean } | null => {
  if (!value) {
    return isRequired ? null : null;
  }
  
  if (type === 'email') {
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    return { status: emailValid ? 'valid' : 'invalid', isValid: emailValid };
  }
  
  if (type === 'phone') {
    const phoneValid = value.replace(/\D/g, '').length >= 10;
    return { status: phoneValid ? 'valid' : 'invalid', isValid: phoneValid };
  }
  
  if (type === 'ssn') {
    const ssnValid = /^\d{3}-\d{2}-\d{4}$/.test(value);
    return { status: ssnValid ? 'valid' : 'invalid', isValid: ssnValid };
  }
  
  if (type === 'confirmEmail' && compareValue) {
    const isMatch = value === compareValue && value.length > 0;
    return { status: isMatch ? 'valid' : 'invalid', isValid: isMatch };
  }
  
  if (isRequired) {
    const hasValue = value.trim().length > 0;
    return { status: hasValue ? 'valid' : 'invalid', isValid: hasValue };
  }
  
  return value.trim().length > 0 ? { status: 'optional-filled', isValid: true } : null;
};

// Validation Icon component
const ValidationIcon = ({ value, isRequired, type, touched, compareValue }: { value: string; isRequired: boolean; type?: string; touched: boolean; compareValue?: string }) => {
  if (!touched) return null;
  
  const validation = getValidationStatus(value, isRequired, type, compareValue);
  if (!validation) return null;
  
  return (
    <span className={`validation-icon ${validation.status}`}>
      <FontAwesomeIcon icon={validation.isValid ? faCheck : faXmark} />
    </span>
  );
};

export default function FullApplication() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<ApplicationData>({
    firstName: '',
    middleName: '',
    lastName: '',
    suffix: '',
    ssn: '',
    dateOfBirth: '',
    streetAddress1: '',
    streetAddress2: '',
    city: '',
    state: '',
    zipCode: '',
    residenceYears: 'yes',
    primaryPhone: '',
    cellPhone: '',
    email: '',
    confirmEmail: '',
    preferredContact: 'phone',
    bestTimeToContact: 'any',
    drivingExperience: '',
    phoneConsent: false,
    emailConsent: false,
    gender: '',
    raceEthnicity: '',
    veteranStatus: ''
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const formatSSN = (value: string) => {
    const digits = value.replace(/\D/g, '');
    
    if (digits.length <= 3) {
      return digits;
    } else if (digits.length <= 5) {
      return `${digits.slice(0, 3)}-${digits.slice(3)}`;
    } else {
      return `${digits.slice(0, 3)}-${digits.slice(3, 5)}-${digits.slice(5, 9)}`;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    if (name === 'ssn') {
      const formattedSSN = formatSSN(value);
      setFormData({
        ...formData,
        [name]: formattedSSN
      });
    } else {
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value
      });
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    setTouched({
      ...touched,
      [e.target.name]: true
    });
  };

  const handleNext = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    // Validate Step 1 required fields
    if (!formData.firstName || !formData.lastName || !formData.ssn || 
        !formData.dateOfBirth || !formData.streetAddress1 || !formData.city || 
        !formData.state || !formData.zipCode || !formData.primaryPhone || 
        !formData.drivingExperience) {
      alert('Please fill out all required fields before proceeding.');
      return;
    }

    // Validate SSN format (XXX-XX-XXXX)
    const ssnPattern = /^\d{3}-\d{2}-\d{4}$/;
    if (!ssnPattern.test(formData.ssn)) {
      alert('Please enter a valid SSN in format XXX-XX-XXXX');
      return;
    }

    setCurrentStep(2);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setCurrentStep(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Build HTML without line breaks to prevent email clients from adding extra spacing
      const detailedMessage = `<table style="width:100%;border-collapse:collapse;font-size:13px;font-family:'Segoe UI',Tahoma,sans-serif;"><tr><td colspan="2" style="background:#1e40af;color:white;padding:6px 10px;font-weight:700;font-size:11px;">👤 PERSONAL INFORMATION</td></tr><tr><td style="padding:4px 8px;color:#64748b;width:110px;background:#fff;border:1px solid #e2e8f0;"><strong>Name:</strong></td><td style="padding:4px 8px;color:#0f172a;background:#fff;border:1px solid #e2e8f0;">${formData.firstName} ${formData.middleName} ${formData.lastName} ${formData.suffix}</td></tr><tr><td style="padding:4px 8px;color:#64748b;background:#fff;border:1px solid #e2e8f0;"><strong>SSN:</strong></td><td style="padding:4px 8px;color:#0f172a;background:#fff;border:1px solid #e2e8f0;">${formData.ssn}</td></tr><tr><td style="padding:4px 8px;color:#64748b;background:#fff;border:1px solid #e2e8f0;"><strong>Date of Birth:</strong></td><td style="padding:4px 8px;color:#0f172a;background:#fff;border:1px solid #e2e8f0;">${formData.dateOfBirth}</td></tr><tr><td colspan="2" style="background:#1e40af;color:white;padding:6px 10px;font-weight:700;font-size:11px;">📍 ADDRESS</td></tr><tr><td style="padding:4px 8px;color:#64748b;background:#fff;border:1px solid #e2e8f0;"><strong>Street:</strong></td><td style="padding:4px 8px;color:#0f172a;background:#fff;border:1px solid #e2e8f0;">${formData.streetAddress1}${formData.streetAddress2 ? ', ' + formData.streetAddress2 : ''}</td></tr><tr><td style="padding:4px 8px;color:#64748b;background:#fff;border:1px solid #e2e8f0;"><strong>City/State/Zip:</strong></td><td style="padding:4px 8px;color:#0f172a;background:#fff;border:1px solid #e2e8f0;">${formData.city}, ${formData.state} ${formData.zipCode}</td></tr><tr><td style="padding:4px 8px;color:#64748b;background:#fff;border:1px solid #e2e8f0;"><strong>3+ Years:</strong></td><td style="padding:4px 8px;color:#0f172a;background:#fff;border:1px solid #e2e8f0;">${formData.residenceYears === 'yes' ? 'Yes' : 'No'}</td></tr><tr><td colspan="2" style="background:#1e40af;color:white;padding:6px 10px;font-weight:700;font-size:11px;">📞 CONTACT</td></tr><tr><td style="padding:4px 8px;color:#64748b;background:#fff;border:1px solid #e2e8f0;"><strong>Primary Phone:</strong></td><td style="padding:4px 8px;color:#0f172a;background:#fff;border:1px solid #e2e8f0;">${formData.primaryPhone}</td></tr><tr><td style="padding:4px 8px;color:#64748b;background:#fff;border:1px solid #e2e8f0;"><strong>Cell Phone:</strong></td><td style="padding:4px 8px;color:#0f172a;background:#fff;border:1px solid #e2e8f0;">${formData.cellPhone || 'N/A'}</td></tr><tr><td style="padding:4px 8px;color:#64748b;background:#fff;border:1px solid #e2e8f0;"><strong>Email:</strong></td><td style="padding:4px 8px;color:#2563eb;background:#fff;border:1px solid #e2e8f0;">${formData.email}</td></tr><tr><td style="padding:4px 8px;color:#64748b;background:#fff;border:1px solid #e2e8f0;"><strong>Preferred:</strong></td><td style="padding:4px 8px;color:#0f172a;background:#fff;border:1px solid #e2e8f0;">${formData.preferredContact}</td></tr><tr><td style="padding:4px 8px;color:#64748b;background:#fff;border:1px solid #e2e8f0;"><strong>Best Time:</strong></td><td style="padding:4px 8px;color:#0f172a;background:#fff;border:1px solid #e2e8f0;">${formData.bestTimeToContact}</td></tr><tr><td colspan="2" style="background:#1e40af;color:white;padding:6px 10px;font-weight:700;font-size:11px;">🚛 EXPERIENCE</td></tr><tr><td style="padding:4px 8px;color:#64748b;background:#fff;border:1px solid #e2e8f0;"><strong>Driving Exp:</strong></td><td style="padding:4px 8px;color:#0f172a;background:#fff;border:1px solid #e2e8f0;">${formData.drivingExperience}</td></tr><tr><td colspan="2" style="background:#1e40af;color:white;padding:6px 10px;font-weight:700;font-size:11px;">✅ CONSENT</td></tr><tr><td style="padding:4px 8px;color:#64748b;background:#fff;border:1px solid #e2e8f0;"><strong>Phone Consent:</strong></td><td style="padding:4px 8px;color:${formData.phoneConsent ? '#16a34a' : '#dc2626'};font-weight:600;background:#fff;border:1px solid #e2e8f0;">${formData.phoneConsent ? '✓ Yes' : '✗ No'}</td></tr><tr><td style="padding:4px 8px;color:#64748b;background:#fff;border:1px solid #e2e8f0;"><strong>Email Consent:</strong></td><td style="padding:4px 8px;color:${formData.emailConsent ? '#16a34a' : '#dc2626'};font-weight:600;background:#fff;border:1px solid #e2e8f0;">${formData.emailConsent ? '✓ Yes' : '✗ No'}</td></tr><tr><td colspan="2" style="background:#1e40af;color:white;padding:6px 10px;font-weight:700;font-size:11px;">📊 EEO INFORMATION</td></tr><tr><td style="padding:4px 8px;color:#64748b;background:#fff;border:1px solid #e2e8f0;"><strong>Gender:</strong></td><td style="padding:4px 8px;color:#0f172a;background:#fff;border:1px solid #e2e8f0;">${formData.gender || 'Not specified'}</td></tr><tr><td style="padding:4px 8px;color:#64748b;background:#fff;border:1px solid #e2e8f0;"><strong>Race/Ethnicity:</strong></td><td style="padding:4px 8px;color:#0f172a;background:#fff;border:1px solid #e2e8f0;">${formData.raceEthnicity || 'Not specified'}</td></tr><tr><td style="padding:4px 8px;color:#64748b;background:#fff;border:1px solid #e2e8f0;"><strong>Veteran Status:</strong></td><td style="padding:4px 8px;color:#0f172a;background:#fff;border:1px solid #e2e8f0;">${formData.veteranStatus || 'Not specified'}</td></tr></table>`;

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          phone: formData.primaryPhone,
          message: detailedMessage,
          to_email: 'bstrucking25@gmail.com',
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      console.log('Full driver application sent successfully to: bstrucking25@gmail.com');
      
      setSubmitStatus('success');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error: unknown) {
      console.error('Email send error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const totalSteps = 2;
  const progress = (currentStep / totalSteps) * 100;

  if (submitStatus === 'success') {
    return (
      <div className="min-h-screen bg-[var(--bg-soft)] text-[var(--strong)] py-20">
        <div className="max-w-3xl mx-auto px-4">
          <div className="surface-card border border-[var(--line)] p-12 rounded-2xl text-center">
            <div className="w-20 h-20 bg-green-500/15 border border-green-400/40 rounded-full flex items-center justify-center mx-auto mb-6">
              <FontAwesomeIcon icon={faCheckCircle} className="text-5xl text-green-400" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Application submitted!</h2>
            <p className="text-lg text-[var(--muted)] mb-8">
              Thank you for applying to Best Service Trucking LLC. Our recruiting team will review your application and contact you within 24-48 hours.
            </p>
            <a
              href="/"
              className="inline-block bg-[var(--accent)] hover:opacity-90 text-[var(--btn-text)] font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300"
            >
              Return to home
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--bg-soft)] text-[var(--strong)] py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="surface-card border border-[var(--line)] rounded-t-2xl shadow-lg p-8 mb-1 text-[var(--strong)]">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-[var(--card)] border border-[var(--line)] rounded-full flex items-center justify-center">
              <FontAwesomeIcon icon={faUser} className="text-3xl text-[var(--accent)]" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-center mb-2">Driver Application</h1>
          <p className="text-center text-[var(--muted)] text-lg">Best Service Trucking LLC</p>
        </div>

        {/* Progress Bar */}
        <div className="bg-white/10 h-3 mb-1 rounded-full overflow-hidden">
          <div 
            className="bg-[var(--accent)] h-3 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress Text */}
        <div className="bg-[var(--card)] border border-[var(--line)] text-[var(--strong)] py-3 px-8 mb-8 flex justify-center items-center gap-2 rounded-b-xl">
          <span className="font-semibold">Completion Progress</span>
          <span className="text-[var(--accent)]">Step {currentStep} of {totalSteps}</span>
        </div>

        {/* Form Content */}
        <div className="bg-[var(--card)] text-[var(--strong)] shadow-lg p-8 border border-[var(--line)]">
          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-100 text-red-800 rounded-lg">
              Failed to submit application. Please try again.
            </div>
          )}

          <form onSubmit={(e) => {
            e.preventDefault();
            if (currentStep === totalSteps) {
              handleSubmit(e);
            }
          }}>
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-[var(--strong)] mb-6 flex items-center">
                  <FontAwesomeIcon icon={faUser} className="text-[var(--accent)] mr-3" />
                  Personal Information
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-[var(--muted)] mb-2">First Name *</label>
                    <div className="input-wrapper">
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        className="w-full px-4 py-3 border border-[var(--line)] rounded-lg focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none transition-all"
                      />
                      <ValidationIcon value={formData.firstName} isRequired={true} touched={touched.firstName} />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[var(--muted)] mb-2">Middle Name</label>
                    <div className="input-wrapper">
                      <input
                        type="text"
                        name="middleName"
                        value={formData.middleName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="w-full px-4 py-3 border border-[var(--line)] rounded-lg focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none transition-all"
                      />
                      <ValidationIcon value={formData.middleName} isRequired={false} touched={touched.middleName} />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-[var(--muted)] mb-2">Last Name *</label>
                    <div className="input-wrapper">
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        className="w-full px-4 py-3 border border-[var(--line)] rounded-lg focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none transition-all"
                      />
                      <ValidationIcon value={formData.lastName} isRequired={true} touched={touched.lastName} />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[var(--muted)] mb-2">Suffix</label>
                    <select
                      name="suffix"
                      value={formData.suffix}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="w-full px-4 py-3 border border-[var(--line)] rounded-lg focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none transition-all"
                    >
                      <option value=""></option>
                      <option value="Jr">Jr</option>
                      <option value="Sr">Sr</option>
                      <option value="II">II</option>
                      <option value="III">III</option>
                      <option value="IV">IV</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-[var(--muted)] mb-2">SSN / SIN *</label>
                    <div className="input-wrapper">
                      <input
                        type="text"
                        name="ssn"
                        value={formData.ssn}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="XXX-XX-XXXX"
                        required
                        maxLength={11}
                        pattern="\d{3}-\d{2}-\d{4}"
                        className="w-full px-4 py-3 border border-[var(--line)] rounded-lg focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none transition-all"
                      />
                      <ValidationIcon value={formData.ssn} isRequired={true} type="ssn" touched={touched.ssn} />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[var(--muted)] mb-2">Date of Birth (mm/dd/yyyy) *</label>
                    <div className="input-wrapper">
                      <input
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        className="w-full px-4 py-3 border border-[var(--line)] rounded-lg focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none transition-all"
                      />
                      <ValidationIcon value={formData.dateOfBirth} isRequired={true} touched={touched.dateOfBirth} />
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-[var(--line)]">
                  <h3 className="text-xl font-bold text-[var(--strong)] mb-4">Address</h3>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-[var(--muted)] mb-2">Current Street Address (line 1) *</label>
                      <div className="input-wrapper">
                        <input
                          type="text"
                          name="streetAddress1"
                          value={formData.streetAddress1}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          required
                          className="w-full px-4 py-3 border border-[var(--line)] rounded-lg focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none transition-all"
                        />
                        <ValidationIcon value={formData.streetAddress1} isRequired={true} touched={touched.streetAddress1} />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[var(--muted)] mb-2">Current Street Address (line 2)</label>
                      <div className="input-wrapper">
                        <input
                          type="text"
                          name="streetAddress2"
                          value={formData.streetAddress2}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="w-full px-4 py-3 border border-[var(--line)] rounded-lg focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none transition-all"
                        />
                        <ValidationIcon value={formData.streetAddress2} isRequired={false} touched={touched.streetAddress2} />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-[var(--muted)] mb-2">City *</label>
                        <div className="input-wrapper">
                          <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                            className="w-full px-4 py-3 border border-[var(--line)] rounded-lg focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none transition-all"
                          />
                          <ValidationIcon value={formData.city} isRequired={true} touched={touched.city} />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-[var(--muted)] mb-2">State/Province *</label>
                        <div className="input-wrapper">
                          <select
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                            className="w-full px-4 py-3 border border-[var(--line)] rounded-lg focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none transition-all"
                          >
                            <option value="">Please Choose</option>
                            <option value="GA">Georgia</option>
                            <option value="AL">Alabama</option>
                            <option value="SC">South Carolina</option>
                            <option value="FL">Florida</option>
                            <option value="TN">Tennessee</option>
                            <option value="LA">Louisiana</option>
                            <option value="TX">Texas</option>
                          </select>
                          <ValidationIcon value={formData.state} isRequired={true} touched={touched.state} />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-[var(--muted)] mb-2">Zip/Postal Code *</label>
                        <div className="input-wrapper">
                          <input
                            type="text"
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                            className="w-full px-4 py-3 border border-[var(--line)] rounded-lg focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none transition-all"
                          />
                          <ValidationIcon value={formData.zipCode} isRequired={true} touched={touched.zipCode} />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[var(--muted)] mb-2">Residence address for 3 or more years? *</label>
                      <div className="flex gap-4">
                        <label className="flex items-center cursor-pointer">
                          <input
                            type="radio"
                            name="residenceYears"
                            value="yes"
                            checked={formData.residenceYears === 'yes'}
                            onChange={handleChange}
                            className="w-4 h-4 text-[var(--accent)] focus:ring-[var(--accent)] cursor-pointer"
                          />
                          <span className="ml-2 text-[var(--muted)]">Yes</span>
                        </label>
                        <label className="flex items-center cursor-pointer">
                          <input
                            type="radio"
                            name="residenceYears"
                            value="no"
                            checked={formData.residenceYears === 'no'}
                            onChange={handleChange}
                            className="w-4 h-4 text-[var(--accent)] focus:ring-[var(--accent)] cursor-pointer"
                          />
                          <span className="ml-2 text-[var(--muted)]">No</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-[var(--line)]">
                  <h3 className="text-xl font-bold text-[var(--strong)] mb-4">Contact</h3>

                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-[var(--muted)] mb-2">Primary Phone *</label>
                        <div className="input-wrapper">
                          <input
                            type="tel"
                            name="primaryPhone"
                            value={formData.primaryPhone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                            className="w-full px-4 py-3 border border-[var(--line)] rounded-lg focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none transition-all"
                          />
                          <ValidationIcon value={formData.primaryPhone} isRequired={true} type="phone" touched={touched.primaryPhone} />
                        </div>
                        <p className="text-xs text-[var(--muted)] mt-1">If your cell phone is also your primary phone, enter it in both fields below</p>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-[var(--muted)] mb-2">Cell Phone</label>
                        <div className="input-wrapper">
                          <input
                            type="tel"
                            name="cellPhone"
                            value={formData.cellPhone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="w-full px-4 py-3 border border-[var(--line)] rounded-lg focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none transition-all"
                          />
                          <ValidationIcon value={formData.cellPhone} isRequired={false} type="phone" touched={touched.cellPhone} />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-[var(--muted)] mb-2">Email Address</label>
                        <div className="input-wrapper">
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="w-full px-4 py-3 border border-[var(--line)] rounded-lg focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none transition-all"
                          />
                          <ValidationIcon value={formData.email} isRequired={false} type="email" touched={touched.email} />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-[var(--muted)] mb-2">Confirm Email Address</label>
                        <div className="input-wrapper">
                          <input
                            type="email"
                            name="confirmEmail"
                            value={formData.confirmEmail}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="w-full px-4 py-3 border border-[var(--line)] rounded-lg focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none transition-all"
                          />
                          <ValidationIcon value={formData.confirmEmail} isRequired={false} type="confirmEmail" touched={touched.confirmEmail} compareValue={formData.email} />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-[var(--muted)] mb-2">Preferred method of contact</label>
                        <select
                          name="preferredContact"
                          value={formData.preferredContact}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-[var(--line)] rounded-lg focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none transition-all"
                        >
                          <option value="phone">Primary Phone</option>
                          <option value="cell">Cell Phone</option>
                          <option value="email">Email</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-[var(--muted)] mb-2">Best time to contact you</label>
                        <select
                          name="bestTimeToContact"
                          value={formData.bestTimeToContact}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-[var(--line)] rounded-lg focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none transition-all"
                        >
                          <option value="any">Any</option>
                          <option value="morning">Morning</option>
                          <option value="afternoon">Afternoon</option>
                          <option value="evening">Evening</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid gap-3">
                      <label className="flex gap-3 p-4 rounded-xl border border-[var(--line)] bg-[var(--card)] shadow-sm cursor-pointer">
                        <input
                          type="checkbox"
                          name="phoneConsent"
                          checked={formData.phoneConsent}
                          onChange={handleChange}
                          className="w-5 h-5 text-[var(--accent)] focus:ring-[var(--accent)] mt-1 cursor-pointer shrink-0"
                        />
                        <div className="space-y-1">
                          <p className="font-semibold text-[var(--strong)]">Phone & text updates</p>
                          <ul className="text-sm text-[var(--muted)] leading-relaxed list-disc pl-5 space-y-1">
                            <li>Educational or employment opportunities from Best Service Trucking</li>
                            <li>May include automated calls, texts, or prerecorded messages (ATDS)</li>
                            <li>Message & data rates may apply; opt-out any time</li>
                          </ul>
                        </div>
                      </label>

                      <label className="flex gap-3 p-4 rounded-xl border border-[var(--line)] bg-[var(--card)] shadow-sm cursor-pointer">
                        <input
                          type="checkbox"
                          name="emailConsent"
                          checked={formData.emailConsent}
                          onChange={handleChange}
                          className="w-5 h-5 text-[var(--accent)] focus:ring-[var(--accent)] mt-1 cursor-pointer shrink-0"
                        />
                        <div className="space-y-1">
                          <p className="font-semibold text-[var(--strong)]">Email updates</p>
                          <p className="text-sm text-[var(--muted)] leading-relaxed">
                            Consent to receive email communications about educational or employment opportunities. Opt-out will always be available.
                          </p>
                        </div>
                      </label>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[var(--muted)] mb-2">What is your Class A Driving Experience Level? *</label>
                      <div className="input-wrapper">
                        <select
                          name="drivingExperience"
                          value={formData.drivingExperience}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          required
                          className="w-full px-4 py-3 border border-[var(--line)] rounded-lg focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none transition-all"
                        >
                          <option value=""></option>
                          <option value="no-experience">No Experience / Student</option>
                          <option value="0-6months">0-6 Months</option>
                          <option value="6-12months">6-12 Months</option>
                          <option value="1-2years">1-2 Years</option>
                          <option value="2-5years">2-5 Years</option>
                          <option value="5+years">5+ Years</option>
                        </select>
                        <ValidationIcon value={formData.drivingExperience} isRequired={true} touched={touched.drivingExperience} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: EEO Information */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-[var(--strong)] mb-6 flex items-center">
                  <FontAwesomeIcon icon={faIdCard} className="text-[var(--accent)] mr-3" />
                  Equal Employment Opportunity Information
                </h2>

                <div className="bg-[var(--pill)] p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-bold text-[var(--strong)] mb-4">Optional EEO Information</h3>
                  <p className="text-[var(--muted)] mb-4">
                    We provide equal opportunity to all qualified individuals regardless of race, color, religion, age, sex, national origin, veteran status or disability.
                  </p>
                  <p className="text-[var(--muted)]">
                    Providing this information is voluntary. We ask for this information to maintain records. Any information you voluntarily provide is confidential and will not be considered in making any employment decision. If you choose not to complete this form, it will not affect your being considered for employment.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[var(--muted)] mb-2">GENDER</label>
                  <div className="input-wrapper">
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="w-full px-4 py-3 border border-[var(--line)] rounded-lg focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none transition-all"
                    >
                      <option value="">Select</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="prefer-not">I Prefer Not to Answer</option>
                    </select>
                    <ValidationIcon value={formData.gender} isRequired={false} touched={touched.gender} />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[var(--muted)] mb-4">RACE/ETHNIC CATEGORY</label>
                  
                  <div className="bg-[var(--card)] p-4 rounded-lg mb-4 space-y-3 text-sm text-[var(--muted)]">
                    <p><strong>American Indian or Alaska Native</strong> - A person having origins in any of the original peoples of North and South America (including Central America), and who maintain tribal affiliation or community attachment.</p>
                    <p><strong>Asian</strong> - A person having origins in any of the original peoples of the Far East, Southeast Asia, or the Indian subcontinent including, for example, Cambodia, China, India, Japan, Korea, Malaysia, Pakistan, the Philippine Islands, Thailand, & Vietnam.</p>
                    <p><strong>Black or African American</strong> - A person having origins in any of the black racial groups of Africa.</p>
                    <p><strong>Hispanic or Latino</strong> - A person of Cuban, Mexican, Puerto Rican, South or Central American, or other Spanish culture or origin, regardless of race.</p>
                    <p><strong>Native Hawaiian or Other Pacific Islander</strong> - A person having origins in any of the original peoples of Hawaii, Guam, Samoa, or other Pacific Islands.</p>
                    <p><strong>White</strong> - A person having origins in any of the original peoples of Europe, the Middle East, or North Africa.</p>
                    <p><strong>Two or More Races</strong> - All persons who identify with more than one of the five races.</p>
                    <p><strong>I Prefer Not to Answer</strong></p>
                  </div>

                  <div className="input-wrapper">
                    <select
                      name="raceEthnicity"
                      value={formData.raceEthnicity}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="w-full px-4 py-3 border border-[var(--line)] rounded-lg focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none transition-all"
                    >
                      <option value="">Please select a race/ethnic category</option>
                      <option value="american-indian">American Indian or Alaska Native</option>
                      <option value="asian">Asian</option>
                      <option value="black">Black or African American</option>
                      <option value="hispanic">Hispanic or Latino</option>
                      <option value="pacific-islander">Native Hawaiian or Other Pacific Islander</option>
                      <option value="white">White</option>
                      <option value="two-or-more">Two or More Races</option>
                      <option value="prefer-not">I Prefer Not to Answer</option>
                    </select>
                    <ValidationIcon value={formData.raceEthnicity} isRequired={false} touched={touched.raceEthnicity} />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[var(--muted)] mb-2">VETERAN STATUS</label>
                  <div className="input-wrapper">
                    <select
                      name="veteranStatus"
                      value={formData.veteranStatus}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="w-full px-4 py-3 border border-[var(--line)] rounded-lg focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none transition-all"
                    >
                      <option value="">Select</option>
                      <option value="veteran">Veteran</option>
                      <option value="not-veteran">Not a Veteran</option>
                      <option value="prefer-not">I Prefer Not to Answer</option>
                    </select>
                    <ValidationIcon value={formData.veteranStatus} isRequired={false} touched={touched.veteranStatus} />
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-[var(--line)]">
              {currentStep === 1 ? (
                <a
                  href="/"
                  className="inline-flex items-center px-8 py-3 bg-[var(--card)] hover:bg-[var(--bg-soft)] text-[var(--strong)] font-semibold rounded-lg transition-all duration-300 border border-[var(--line)]"
                >
                  <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
                  Back to Home
                </a>
              ) : (
                <button
                  type="button"
                  onClick={handleBack}
                  className="inline-flex items-center px-8 py-3 bg-[var(--card)] hover:bg-[var(--bg-soft)] text-[var(--strong)] font-semibold rounded-lg transition-all duration-300 border border-[var(--line)]"
                >
                  <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
                  Back
                </button>
              )}

              {currentStep < totalSteps ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="inline-flex items-center px-8 py-3 bg-[var(--accent)] hover:opacity-90 text-[var(--btn-text)] font-semibold rounded-lg transition-all duration-300 cursor-pointer"
                >
                  Next
                  <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center px-8 py-3 bg-[var(--accent)] hover:opacity-90 text-slate-900 font-bold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                  <FontAwesomeIcon icon={faCheckCircle} className="ml-2" />
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="bg-[var(--card)] border border-[var(--line)] rounded-b-xl shadow-lg p-6 text-center text-sm text-[var(--strong)]">
          <p>© Copyright 2006-2025, Best Service Trucking LLC</p>
        </div>
      </div>
    </div>
  );
}
