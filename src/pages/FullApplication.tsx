import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUser,
  faIdCard,
  faCheckCircle,
  faArrowLeft,
  faArrowRight
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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleNext = () => {
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
      const detailedMessage = `
FULL DRIVER APPLICATION

PERSONAL INFORMATION:
Name: ${formData.firstName} ${formData.middleName} ${formData.lastName} ${formData.suffix}
SSN: ${formData.ssn}
Date of Birth: ${formData.dateOfBirth}

ADDRESS:
${formData.streetAddress1}
${formData.streetAddress2 ? formData.streetAddress2 + '\n' : ''}${formData.city}, ${formData.state} ${formData.zipCode}
Residence 3+ years: ${formData.residenceYears}

CONTACT:
Primary Phone: ${formData.primaryPhone}
Cell Phone: ${formData.cellPhone}
Email: ${formData.email}
Preferred Contact: ${formData.preferredContact}
Best Time: ${formData.bestTimeToContact}

EXPERIENCE:
Driving Experience: ${formData.drivingExperience}

CONSENT:
Phone Consent: ${formData.phoneConsent ? 'Yes' : 'No'}
Email Consent: ${formData.emailConsent ? 'Yes' : 'No'}

EEO INFORMATION:
Gender: ${formData.gender || 'Not specified'}
Race/Ethnicity: ${formData.raceEthnicity || 'Not specified'}
Veteran Status: ${formData.veteranStatus || 'Not specified'}
      `.trim();

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
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white p-12 rounded-2xl shadow-xl text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FontAwesomeIcon icon={faCheckCircle} className="text-5xl text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Submitted Successfully!</h2>
            <p className="text-xl text-gray-700 mb-8">
              Thank you for applying to Best Service Trucking LLC. Our recruiting team will review your application and contact you within 24-48 hours.
            </p>
            <a
              href="/"
              className="inline-block bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300"
            >
              Return to Home
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="bg-white rounded-t-2xl shadow-lg p-8 mb-1">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center">
              <FontAwesomeIcon icon={faUser} className="text-3xl text-yellow-400" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-2">Driver Application</h1>
          <p className="text-center text-gray-600 text-lg">Best Service Trucking LLC</p>
        </div>

        {/* Progress Bar */}
        <div className="bg-gray-200 h-3 mb-1">
          <div 
            className="bg-blue-900 h-3 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress Text */}
        <div className="bg-blue-900 text-white py-3 px-8 mb-8 flex justify-center items-center gap-2">
          <span className="font-semibold">Completion Progress</span>
          <span className="text-yellow-400">Step {currentStep} of {totalSteps}</span>
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-b-2xl shadow-lg p-8">
          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-100 text-red-800 rounded-lg">
              Failed to submit application. Please try again.
            </div>
          )}

          <form onSubmit={currentStep === totalSteps ? handleSubmit : undefined}>
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <FontAwesomeIcon icon={faUser} className="text-blue-900 mr-3" />
                  Personal Information
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Middle Name</label>
                    <input
                      type="text"
                      name="middleName"
                      value={formData.middleName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Suffix</label>
                    <select
                      name="suffix"
                      value={formData.suffix}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
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
                    <label className="block text-sm font-semibold text-gray-700 mb-2">SSN / SIN *</label>
                    <input
                      type="text"
                      name="ssn"
                      value={formData.ssn}
                      onChange={handleChange}
                      placeholder="XXX-XX-XXXX"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Date of Birth (mm/dd/yyyy) *</label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Address</h3>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Current Street Address (line 1) *</label>
                      <input
                        type="text"
                        name="streetAddress1"
                        value={formData.streetAddress1}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Current Street Address (line 2)</label>
                      <input
                        type="text"
                        name="streetAddress2"
                        value={formData.streetAddress2}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">City *</label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">State/Province *</label>
                        <select
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
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
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Zip/Postal Code *</label>
                        <input
                          type="text"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Residence address for 3 or more years? *</label>
                      <div className="flex gap-4">
                        <label className="flex items-center cursor-pointer">
                          <input
                            type="radio"
                            name="residenceYears"
                            value="yes"
                            checked={formData.residenceYears === 'yes'}
                            onChange={handleChange}
                            className="w-4 h-4 text-blue-900 focus:ring-blue-500 cursor-pointer"
                          />
                          <span className="ml-2 text-gray-700">Yes</span>
                        </label>
                        <label className="flex items-center cursor-pointer">
                          <input
                            type="radio"
                            name="residenceYears"
                            value="no"
                            checked={formData.residenceYears === 'no'}
                            onChange={handleChange}
                            className="w-4 h-4 text-blue-900 focus:ring-blue-500 cursor-pointer"
                          />
                          <span className="ml-2 text-gray-700">No</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Contact</h3>

                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Primary Phone *</label>
                        <input
                          type="tel"
                          name="primaryPhone"
                          value={formData.primaryPhone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                        />
                        <p className="text-xs text-gray-500 mt-1">If your cell phone is also your primary phone, enter it in both fields below</p>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Cell Phone</label>
                        <input
                          type="tel"
                          name="cellPhone"
                          value={formData.cellPhone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Confirm Email Address</label>
                        <input
                          type="email"
                          name="confirmEmail"
                          value={formData.confirmEmail}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred method of contact</label>
                        <select
                          name="preferredContact"
                          value={formData.preferredContact}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                        >
                          <option value="phone">Primary Phone</option>
                          <option value="cell">Cell Phone</option>
                          <option value="email">Email</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Best time to contact you</label>
                        <select
                          name="bestTimeToContact"
                          value={formData.bestTimeToContact}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                        >
                          <option value="any">Any</option>
                          <option value="morning">Morning</option>
                          <option value="afternoon">Afternoon</option>
                          <option value="evening">Evening</option>
                        </select>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg space-y-4">
                      <label className="flex items-start cursor-pointer">
                        <input
                          type="checkbox"
                          name="phoneConsent"
                          checked={formData.phoneConsent}
                          onChange={handleChange}
                          className="w-5 h-5 text-blue-900 focus:ring-blue-500 mt-1 cursor-pointer shrink-0"
                        />
                        <span className="ml-3 text-sm text-gray-700 leading-tight">
                          By clicking the box below, I consent to receive phone and text communications from Best Service Trucking to inform me of educational or employment opportunities, which may include automated calls, text messages, or voicemails delivered by artificial intelligence (AI) technologies, including but not limited to AI voice agents or chatbots. These communications may be made using an automatic telephone dialing system (ATDS) and may involve prerecorded voices. The frequency of phone calls and text messages may vary and message and data charges may apply, depending on my mobile network provider and plan. The ability to opt-out will be made available to me.
                        </span>
                      </label>

                      <label className="flex items-start cursor-pointer">
                        <input
                          type="checkbox"
                          name="emailConsent"
                          checked={formData.emailConsent}
                          onChange={handleChange}
                          className="w-5 h-5 text-blue-900 focus:ring-blue-500 mt-1 cursor-pointer shrink-0"
                        />
                        <span className="ml-3 text-sm text-gray-700 leading-tight">
                          By clicking the box below, I consent to receive email communications from Best Service Trucking to inform me of educational or employment opportunities. The ability to opt-out will be made available to me.
                        </span>
                      </label>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">What is your Class A Driving Experience Level? *</label>
                      <select
                        name="drivingExperience"
                        value={formData.drivingExperience}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      >
                        <option value=""></option>
                        <option value="no-experience">No Experience / Student</option>
                        <option value="0-6months">0-6 Months</option>
                        <option value="6-12months">6-12 Months</option>
                        <option value="1-2years">1-2 Years</option>
                        <option value="2-5years">2-5 Years</option>
                        <option value="5+years">5+ Years</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: EEO Information */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <FontAwesomeIcon icon={faIdCard} className="text-blue-900 mr-3" />
                  Equal Employment Opportunity Information
                </h2>

                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Optional EEO Information</h3>
                  <p className="text-gray-700 mb-4">
                    We provide equal opportunity to all qualified individuals regardless of race, color, religion, age, sex, national origin, veteran status or disability.
                  </p>
                  <p className="text-gray-700">
                    Providing this information is voluntary. We ask for this information to maintain records. Any information you voluntarily provide is confidential and will not be considered in making any employment decision. If you choose not to complete this form, it will not affect your being considered for employment.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">GENDER</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="prefer-not">I Prefer Not to Answer</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-4">RACE/ETHNIC CATEGORY</label>
                  
                  <div className="bg-gray-50 p-4 rounded-lg mb-4 space-y-3 text-sm text-gray-700">
                    <p><strong>American Indian or Alaska Native</strong> - A person having origins in any of the original peoples of North and South America (including Central America), and who maintain tribal affiliation or community attachment.</p>
                    <p><strong>Asian</strong> - A person having origins in any of the original peoples of the Far East, Southeast Asia, or the Indian subcontinent including, for example, Cambodia, China, India, Japan, Korea, Malaysia, Pakistan, the Philippine Islands, Thailand, & Vietnam.</p>
                    <p><strong>Black or African American</strong> - A person having origins in any of the black racial groups of Africa.</p>
                    <p><strong>Hispanic or Latino</strong> - A person of Cuban, Mexican, Puerto Rican, South or Central American, or other Spanish culture or origin, regardless of race.</p>
                    <p><strong>Native Hawaiian or Other Pacific Islander</strong> - A person having origins in any of the original peoples of Hawaii, Guam, Samoa, or other Pacific Islands.</p>
                    <p><strong>White</strong> - A person having origins in any of the original peoples of Europe, the Middle East, or North Africa.</p>
                    <p><strong>Two or More Races</strong> - All persons who identify with more than one of the five races.</p>
                    <p><strong>I Prefer Not to Answer</strong></p>
                  </div>

                  <select
                    name="raceEthnicity"
                    value={formData.raceEthnicity}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
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
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">VETERAN STATUS</label>
                  <select
                    name="veteranStatus"
                    value={formData.veteranStatus}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  >
                    <option value="">Select</option>
                    <option value="veteran">Veteran</option>
                    <option value="not-veteran">Not a Veteran</option>
                    <option value="prefer-not">I Prefer Not to Answer</option>
                  </select>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
              {currentStep === 1 ? (
                <a
                  href="/"
                  className="inline-flex items-center px-8 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-lg transition-all duration-300"
                >
                  <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
                  Back to Home
                </a>
              ) : (
                <button
                  type="button"
                  onClick={handleBack}
                  className="inline-flex items-center px-8 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-lg transition-all duration-300"
                >
                  <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
                  Back
                </button>
              )}

              {currentStep < totalSteps ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="inline-flex items-center px-8 py-3 bg-blue-900 hover:bg-blue-800 text-white font-semibold rounded-lg transition-all duration-300 cursor-pointer"
                >
                  Next
                  <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                  <FontAwesomeIcon icon={faCheckCircle} className="ml-2" />
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="bg-gray-100 rounded-b-xl shadow-lg p-6 text-center text-sm text-gray-600">
          <p>© Copyright 2006-2025, Best Service Trucking LLC</p>
        </div>
      </div>
    </div>
  );
}
