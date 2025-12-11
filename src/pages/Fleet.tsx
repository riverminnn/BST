import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTruck, 
  faShieldAlt,
  faCheckCircle,
  faTools,
  faMapMarkerAlt,
  faBoxes,
  faTachometerAlt,
  faClipboardCheck,
  faHeadset,
  faGasPump
} from '@fortawesome/free-solid-svg-icons';

export default function Fleet() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-linear-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4 text-center">Our Fleet & Team</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Modern equipment, professional drivers, and cutting-edge technology for safe, reliable transportation
          </p>
        </div>
      </section>

      {/* Fleet Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Modern, Well-Maintained Fleet</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our fleet consists of modern, well-maintained trucks and trailers that are always ready to roll. We invest heavily in our equipment to ensure reliability, safety, and efficiency on every haul.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                With nearly 16 years of experience in hauling containers, dry vans, and tanks, we understand what it takes to keep freight moving safely and on time.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="relative group text-center p-8 bg-linear-to-br from-blue-900 to-blue-700 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-br from-yellow-400 to-yellow-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="text-6xl font-black text-yellow-400 mb-3 animate-pulse">16+</div>
                    <div className="text-white font-bold text-lg tracking-wide uppercase">Years Experience</div>
                    <div className="mt-3 text-blue-100 text-sm">Since 2009</div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 text-8xl text-white opacity-5 font-black">16</div>
                </div>
                <div className="relative group text-center p-8 bg-linear-to-br from-yellow-500 to-yellow-600 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-br from-blue-900 to-blue-700 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="text-6xl font-black text-blue-900 mb-3">24/7</div>
                    <div className="text-blue-900 font-bold text-lg tracking-wide uppercase">Operations</div>
                    <div className="mt-3 text-blue-800 text-sm">Always Available</div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 text-8xl text-blue-900 opacity-5 font-black">24</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-linear-to-br from-blue-900 to-blue-700 p-8 rounded-lg text-white shadow-xl">
                <FontAwesomeIcon icon={faTruck} className="text-5xl text-yellow-400 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Fleet Capabilities</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-yellow-400 mr-3" />
                    <span>Port container services</span>
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-yellow-400 mr-3" />
                    <span>Long-haul trucking</span>
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-yellow-400 mr-3" />
                    <span>Regional distribution</span>
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-yellow-400 mr-3" />
                    <span>Specialized cargo handling</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Equipment Types</h2>
            <p className="text-xl text-gray-600">Versatile equipment to handle all your freight needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Containers */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-6">
                <FontAwesomeIcon icon={faBoxes} className="text-6xl text-blue-900 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900">Shipping Containers</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Standard shipping containers for import/export cargo from the Port of Savannah and beyond.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-blue-900 text-lg mt-1 mr-3 shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">20' Standard Container</p>
                    <p className="text-sm text-gray-600">1 TEU capacity</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-blue-900 text-lg mt-1 mr-3 shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">40' Standard Container</p>
                    <p className="text-sm text-gray-600">2 TEU capacity</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-blue-900 text-lg mt-1 mr-3 shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">40' High Cube</p>
                    <p className="text-sm text-gray-600">Extra height for oversized cargo</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Dry Vans */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-6">
                <FontAwesomeIcon icon={faTruck} className="text-6xl text-blue-900 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900">Dry Van Trailers</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Standard 53' dry van trailers for general freight and non-perishable goods.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-blue-900 text-lg mt-1 mr-3 shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">53' Dry Van</p>
                    <p className="text-sm text-gray-600">Standard enclosed trailer</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-blue-900 text-lg mt-1 mr-3 shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Weather Protected</p>
                    <p className="text-sm text-gray-600">Secure from elements</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-blue-900 text-lg mt-1 mr-3 shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">General Freight</p>
                    <p className="text-sm text-gray-600">Versatile cargo handling</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Tanks */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-6">
                <FontAwesomeIcon icon={faGasPump} className="text-6xl text-blue-900 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900">Tank Containers</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Specialized tank containers and trailers for liquid cargo transportation.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-blue-900 text-lg mt-1 mr-3 shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">ISO Tank Containers</p>
                    <p className="text-sm text-gray-600">Standard tank containers</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-blue-900 text-lg mt-1 mr-3 shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Liquid Cargo</p>
                    <p className="text-sm text-gray-600">Specialized handling</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-blue-900 text-lg mt-1 mr-3 shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Safety Certified</p>
                    <p className="text-sm text-gray-600">Fully compliant equipment</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology & Safety */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technology & Safety</h2>
            <p className="text-xl text-gray-600">Advanced systems for maximum efficiency and safety</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <FontAwesomeIcon icon={faTachometerAlt} className="text-5xl text-blue-900 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Electronic Logging Devices</h3>
              <p className="text-gray-700">
                Real-time tracking and compliance monitoring for every delivery
              </p>
            </div>

            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-5xl text-blue-900 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">GPS Tracking</h3>
              <p className="text-gray-700">
                Live location updates and route optimization for timely deliveries
              </p>
            </div>

            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <FontAwesomeIcon icon={faShieldAlt} className="text-5xl text-blue-900 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Safety Systems</h3>
              <p className="text-gray-700">
                Advanced safety features and collision avoidance technology
              </p>
            </div>

            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <FontAwesomeIcon icon={faHeadset} className="text-5xl text-blue-900 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Communication</h3>
              <p className="text-gray-700">
                Constant communication with dispatch and customers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance & Quality */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Rigorous Maintenance Standards</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We maintain our fleet to the highest standards, ensuring every truck and trailer is in peak condition before hitting the road.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <FontAwesomeIcon icon={faTools} className="text-3xl text-blue-900 mt-1 mr-4 shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Regular Inspections</h3>
                    <p className="text-gray-700">
                      Daily pre-trip inspections and comprehensive maintenance schedules to prevent breakdowns and ensure safety.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FontAwesomeIcon icon={faClipboardCheck} className="text-3xl text-blue-900 mt-1 mr-4 shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">DOT Compliance</h3>
                    <p className="text-gray-700">
                      All equipment meets or exceeds Department of Transportation safety standards and regulations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FontAwesomeIcon icon={faTools} className="text-3xl text-blue-900 mt-1 mr-4 shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Preventive Maintenance</h3>
                    <p className="text-gray-700">
                      Proactive maintenance program to identify and address issues before they become problems.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-900 text-white p-8 rounded-lg shadow-xl">
              <h2 className="text-3xl font-bold mb-6">Our Professional Drivers</h2>
              <p className="text-lg mb-6 text-blue-100">
                Each driver is extensively trained in port procedures, safety standards, and professional communication.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                  <h3 className="font-bold text-xl mb-2 text-yellow-400">Experienced Team</h3>
                  <p className="text-blue-100">
                    Our drivers bring years of experience in port operations and long-haul trucking.
                  </p>
                </div>

                <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                  <h3 className="font-bold text-xl mb-2 text-yellow-400">Safety Certified</h3>
                  <p className="text-blue-100">
                    All drivers maintain current CDL licenses and safety certifications.
                  </p>
                </div>

                <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                  <h3 className="font-bold text-xl mb-2 text-yellow-400">Professional Service</h3>
                  <p className="text-blue-100">
                    Committed to courteous, professional service on every delivery.
                  </p>
                </div>

                <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                  <h3 className="font-bold text-xl mb-2 text-yellow-400">Port Expertise</h3>
                  <p className="text-blue-100">
                    Deep knowledge of Port of Savannah procedures and East Coast logistics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-linear-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Move Your Cargo?</h2>
          <p className="text-xl mb-8">
            Experience reliable service backed by modern equipment and professional drivers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              Request a Quote
            </a>
            <a 
              href="/services" 
              className="inline-block bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 cursor-pointer"
            >
              View Our Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
