import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTruck, 
  faShieldAlt, 
  faClock, 
  faUsers,
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faCheckCircle,
  faAnchor,
  faWarehouse,
  faRoute
} from '@fortawesome/free-solid-svg-icons';
import DriverApplicationForm from '../components/DriverApplicationForm';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-linear-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-20 px-4">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Hero Text */}
            <div className="text-center lg:text-left animate-fade-in">
              <div className="mb-6">
                <FontAwesomeIcon icon={faTruck} className="text-6xl text-yellow-400 mb-4" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Best Service Trucking LLC
              </h1>
              <p className="text-2xl md:text-3xl font-semibold mb-4 text-yellow-400">
                Safety. Reliability.
              </p>
              <p className="text-xl md:text-2xl mb-8">
                Moving cargo with care and efficiency — from the Port of Savannah and anywhere in Georgia to the Southeast and beyond.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a 
                  href="#services" 
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300"
                >
                  Our Services
                </a>
              </div>
            </div>

            {/* Right side - Driver Application Form */}
            <div className="animate-fade-in">
              <DriverApplicationForm />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <FontAwesomeIcon icon={faShieldAlt} className="text-5xl text-blue-900 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-gray-800">Safety First</h3>
              <p className="text-gray-600">Every load handled by trained professionals</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <FontAwesomeIcon icon={faClock} className="text-5xl text-blue-900 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-gray-800">On-Time Delivery</h3>
              <p className="text-gray-600">Reliable service you can count on</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <FontAwesomeIcon icon={faRoute} className="text-5xl text-blue-900 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-gray-800">Regional Coverage</h3>
              <p className="text-gray-600">Serving the entire Southeast region</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <FontAwesomeIcon icon={faUsers} className="text-5xl text-blue-900 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-gray-800">Expert Team</h3>
              <p className="text-gray-600">16 years of hauling experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                At Best Service Trucking LLC, we're proud to keep freight moving across the Southeast region.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Our company was established in January 2025, built on nearly 16 years of experience in hauling containers, dry vans, and tanks.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                We've carried forward a tradition of dependable, honest service that customers and partners can count on.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our team understands the pace and pressure of port logistics, and we work hard to make every pickup and delivery smooth and on-time. We believe in building strong, lasting relationships - not just hauling loads.
              </p>
            </div>
            <div className="bg-linear-to-br from-blue-900 to-blue-700 p-8 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-6">Why Partner With Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-yellow-400 text-xl mt-1 mr-3 shrink-0" />
                  <span className="text-lg">Safety first: Every load handled by trained professionals</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-yellow-400 text-xl mt-1 mr-3 shrink-0" />
                  <span className="text-lg">Reliable service: On-time pickups and deliveries are our standard</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-yellow-400 text-xl mt-1 mr-3 shrink-0" />
                  <span className="text-lg">Clear communication: We keep our partners updated every step of the way</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-yellow-400 text-xl mt-1 mr-3 shrink-0" />
                  <span className="text-lg">Regional expertise: Deep knowledge of East Coast ports and Savannah operations</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-yellow-400 text-xl mt-1 mr-3 shrink-0" />
                  <span className="text-lg">Long-term partnerships: We treat every customer like part of our family</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive trucking solutions for all your freight needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <FontAwesomeIcon icon={faAnchor} className="text-5xl text-blue-900 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Port Container Services</h3>
              <p className="text-gray-700 mb-4">
                We specialize in pulling loaded containers from ports and delivering them safely to customers, both locally and regionally.
              </p>
              <p className="text-gray-700 mb-4 font-semibold">Our operations focus on the Port of Savannah, covering:</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-blue-900 mr-2" />
                  The Atlanta metro area
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-blue-900 mr-2" />
                  Neighboring states: Alabama, South Carolina, and Florida
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-blue-900 mr-2" />
                  Extended routes to Tennessee, Louisiana, and Texas
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <FontAwesomeIcon icon={faWarehouse} className="text-5xl text-blue-900 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Flexible Pickup & Delivery</h3>
              <p className="text-gray-700 mb-4">
                In addition to port-to-customer hauls, we also pick up loads from anywhere in Georgia and deliver them directly to our customers.
              </p>
              <p className="text-gray-700 mb-4">
                This flexibility allows us to meet a wide range of transportation needs - whether your freight starts at the port, your warehouse, or anywhere in between.
              </p>
              <p className="text-gray-700">
                With deep experience at ports, we're ready to handle your import or export containers with care and precision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section id="fleet" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Fleet & Team</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start">
                <FontAwesomeIcon icon={faTruck} className="text-3xl text-blue-900 mt-1 mr-4 shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Modern Equipment</h3>
                  <p className="text-gray-700">
                    Our trucks are modern, well-maintained, and always ready to roll. Each vehicle is regularly serviced to ensure peak performance and reliability.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <FontAwesomeIcon icon={faUsers} className="text-3xl text-blue-900 mt-1 mr-4 shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Professional Drivers</h3>
                  <p className="text-gray-700">
                    Each driver is trained in port procedures, safety standards, and professional communication. We're proud of our team's reliability — because every load deserves attention, care, and respect from port to door.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <FontAwesomeIcon icon={faClock} className="text-3xl text-blue-900 mt-1 mr-4 shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Real-Time Tracking</h3>
                  <p className="text-gray-700">
                    We use Electronic Logging Devices (ELDs) to track and manage every delivery in real time — ensuring accuracy, transparency, and compliance throughout the entire process. This system helps us keep our partners updated and makes sure every load stays on schedule.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-900 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Our Trusted Partners</h3>
              <p className="text-lg mb-6">
                We are proud to collaborate with various brokers and carriers. We do not just work with our partners — we grow together. Each partnership is built on trust, shared vision, and the belief that collaboration drives success.
              </p>
              <p className="text-lg mb-4 font-semibold">We have long-term relationships working with Korean companies:</p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white bg-opacity-10 p-4 rounded-lg text-black">
                  <p className="text-xl font-bold">Samsung</p>
                </div>
                <div className="bg-white bg-opacity-10 p-4 rounded-lg text-black">
                  <p className="text-xl font-bold">Lotte</p>
                </div>
                <div className="bg-white bg-opacity-10 p-4 rounded-lg text-black">
                  <p className="text-xl font-bold">Glovis</p>
                </div>
                <div className="bg-white bg-opacity-10 p-4 rounded-lg text-black">
                  <p className="text-xl font-bold">GFA</p>
                </div>
                <div className="bg-white bg-opacity-10 p-4 rounded-lg text-black">
                  <p className="text-xl font-bold">GET</p>
                </div>
                <div className="bg-white bg-opacity-10 p-4 rounded-lg text-black">
                  <p className="text-xl font-bold">MIS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
            <p className="text-xl">We're ready to earn your trust — one haul at a time.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <div className="text-center p-10 bg-white rounded-2xl shadow-xl">
              <FontAwesomeIcon icon={faPhone} className="text-6xl text-yellow-500 mb-6" />
              <h3 className="text-xl font-bold mb-4 text-gray-900">Phone</h3>
              <p className="text-lg text-gray-700 mb-2">(770) 668-3771</p>
              <p className="text-lg text-gray-700">(770) 626-9777</p>
            </div>

            <div className="text-center p-10 bg-white rounded-2xl shadow-xl">
              <FontAwesomeIcon icon={faEnvelope} className="text-6xl text-yellow-500 mb-6" />
              <h3 className="text-xl font-bold mb-4 text-gray-900">Email</h3>
              <p className="text-lg text-gray-700">bstrucking25@gmail.com</p>
            </div>

            <div className="text-center p-10 bg-white rounded-2xl shadow-xl">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-6xl text-yellow-500 mb-6" />
              <h3 className="text-xl font-bold mb-4 text-gray-900">Address</h3>
              <p className="text-lg text-gray-700">106 Valambrosia Rd.</p>
              <p className="text-lg text-gray-700">Dublin, GA 31021</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-2xl font-semibold italic mb-4">
              "Your goals become our mission — we only succeed when you do."
            </p>
            <p className="text-lg">
              Thank you for trusting Best Service Trucking. We're proud to move your cargo safely, reliably, and on time — every mile, every day.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
