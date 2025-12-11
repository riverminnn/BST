import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faShieldAlt, 
  faClock, 
  faRoute,
  faCheckCircle,
  faUsers,
  faHandshake
} from '@fortawesome/free-solid-svg-icons';

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-linear-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4 text-center">About Us</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Nearly 16 years of experience delivering excellence in trucking services across the Southeast
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Best Service Trucking LLC was established in January 2025, but our roots in the trucking industry run deep. With nearly 16 years of experience in hauling containers, dry vans, and tanks, we've built a reputation on dependability and honest service.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Our company was founded on the principle that every load deserves the same level of attention, care, and professionalism. We understand that your cargo represents more than just freight—it's your business, your commitment to your customers, and your reputation.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                From our base in Dublin, Georgia, we serve the entire Southeast region, with a particular focus on the Port of Savannah. Our team knows the pace and pressure of port logistics, and we're committed to making every pickup and delivery smooth and on-time.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-900">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h3>
                <p className="text-gray-700 text-lg">
                  To provide safe, reliable, and efficient trucking services that exceed our customers' expectations, building lasting partnerships through consistent performance and clear communication.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-900">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h3>
                <p className="text-gray-700 text-lg">
                  To be the most trusted trucking partner in the Southeast, known for our unwavering commitment to safety, reliability, and customer service.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-900">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Values</h3>
                <p className="text-gray-700 text-lg">
                  Safety First • Reliability Always • Clear Communication • Long-term Partnerships • Professional Excellence
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Sets Us Apart</h2>
            <p className="text-xl text-gray-600">Our commitment to excellence in every aspect of our service</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <FontAwesomeIcon icon={faShieldAlt} className="text-5xl text-blue-900 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Safety First</h3>
              <p className="text-gray-700 mb-4">
                Safety is not just a priority—it's our foundation. Every driver is extensively trained in safety protocols, and every vehicle is meticulously maintained to meet the highest standards.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-blue-900 mr-2" />
                  Regular vehicle inspections
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-blue-900 mr-2" />
                  Trained professional drivers
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-blue-900 mr-2" />
                  Compliance with all regulations
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <FontAwesomeIcon icon={faClock} className="text-5xl text-blue-900 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">On-Time Reliability</h3>
              <p className="text-gray-700 mb-4">
                We understand that timing is critical in logistics. Our commitment to punctuality is backed by real-time tracking and proactive communication throughout the entire delivery process.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-blue-900 mr-2" />
                  Electronic Logging Devices (ELDs)
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-blue-900 mr-2" />
                  Real-time tracking updates
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-blue-900 mr-2" />
                  Proactive communication
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <FontAwesomeIcon icon={faHandshake} className="text-5xl text-blue-900 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Partnership Approach</h3>
              <p className="text-gray-700 mb-4">
                We don't just haul loads—we build relationships. Your success is our success, and we're invested in helping your business grow through reliable, consistent service.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-blue-900 mr-2" />
                  Dedicated account management
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-blue-900 mr-2" />
                  Flexible solutions
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-blue-900 mr-2" />
                  Long-term commitment
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Expertise */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience & Expertise</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-blue-900 mb-2">16</div>
              <div className="text-xl font-semibold text-gray-700">Years of Experience</div>
            </div>

            <div className="text-center p-6">
              <FontAwesomeIcon icon={faUsers} className="text-5xl text-blue-900 mb-4" />
              <div className="text-xl font-semibold text-gray-700">Professional Team</div>
            </div>

            <div className="text-center p-6">
              <FontAwesomeIcon icon={faRoute} className="text-5xl text-blue-900 mb-4" />
              <div className="text-xl font-semibold text-gray-700">Multi-State Coverage</div>
            </div>

            <div className="text-center p-6">
              <FontAwesomeIcon icon={faHandshake} className="text-5xl text-blue-900 mb-4" />
              <div className="text-xl font-semibold text-gray-700">Trusted Partners</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-linear-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Partner With Us?</h2>
          <p className="text-xl mb-8">
            Experience the difference that nearly 16 years of expertise and dedication can make for your business.
          </p>
          <a 
            href="/#contact" 
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
}
