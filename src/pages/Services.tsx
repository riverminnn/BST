import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faAnchor,
  faWarehouse,
  faTruck,
  faMapMarkerAlt,
  faCheckCircle,
  faShippingFast,
  faBoxes,
  faRoute
} from '@fortawesome/free-solid-svg-icons';

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-linear-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4 text-center">Our Services</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Comprehensive trucking solutions tailored to meet your freight needs across the Southeast
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Port Container Services */}
            <div className="bg-linear-to-br from-blue-50 to-white p-10 rounded-lg shadow-xl border border-blue-100">
              <div className="flex items-center mb-6">
                <FontAwesomeIcon icon={faAnchor} className="text-6xl text-blue-900 mr-4" />
                <h2 className="text-3xl font-bold text-gray-900">Port Container Services</h2>
              </div>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We specialize in pulling loaded containers from ports and delivering them safely to customers, both locally and regionally. With deep experience at ports, we're ready to handle your import or export containers with care and precision.
              </p>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Primary Operations at Port of Savannah</h3>
                <div className="bg-white p-6 rounded-lg border-l-4 border-blue-900">
                  <p className="text-gray-700 mb-4">
                    Our main hub is the Port of Savannah, one of the busiest container ports on the East Coast. Our drivers are intimately familiar with port procedures and logistics.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Service Areas</h3>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-blue-900 text-xl mt-1 mr-3 shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Atlanta Metro Area</p>
                      <p className="text-gray-600">Complete coverage throughout Greater Atlanta</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-blue-900 text-xl mt-1 mr-3 shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Neighboring States</p>
                      <p className="text-gray-600">Alabama, South Carolina, and Florida</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-blue-900 text-xl mt-1 mr-3 shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Extended Routes</p>
                      <p className="text-gray-600">Tennessee, Louisiana, and Texas</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Flexible Pickup & Delivery */}
            <div className="bg-linear-to-br from-gray-50 to-white p-10 rounded-lg shadow-xl border border-gray-200">
              <div className="flex items-center mb-6">
                <FontAwesomeIcon icon={faWarehouse} className="text-6xl text-blue-900 mr-4" />
                <h2 className="text-3xl font-bold text-gray-900">Flexible Pickup & Delivery</h2>
              </div>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                In addition to port-to-customer hauls, we also pick up loads from anywhere in Georgia and deliver them directly to our customers. This flexibility allows us to meet a wide range of transportation needs.
              </p>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Service Capabilities</h3>
                <div className="space-y-4">
                  <div className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                    <FontAwesomeIcon icon={faShippingFast} className="text-blue-900 text-xl mt-1 mr-3 shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Port to Customer</p>
                      <p className="text-gray-600">Direct delivery from port facilities to your destination</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                    <FontAwesomeIcon icon={faWarehouse} className="text-blue-900 text-xl mt-1 mr-3 shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Warehouse to Warehouse</p>
                      <p className="text-gray-600">Efficient facility-to-facility transportation</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                    <FontAwesomeIcon icon={faRoute} className="text-blue-900 text-xl mt-1 mr-3 shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Custom Routes</p>
                      <p className="text-gray-600">Pick up from anywhere in Georgia</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-900">
                <p className="text-gray-700 italic">
                  "Whether your freight starts at the port, your warehouse, or anywhere in between, we've got you covered."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Container Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Container Types We Handle</h2>
            <p className="text-xl text-gray-600">16 years of experience across all major container types</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <FontAwesomeIcon icon={faBoxes} className="text-5xl text-blue-900 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Containers</h3>
              <p className="text-gray-700 mb-4">
                Standard shipping containers of all sizes - 20ft, 40ft, and high-cube containers.
              </p>
              <ul className="text-left text-gray-700 space-y-2">
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-blue-900 mr-2" />
                  20' Standard
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-blue-900 mr-2" />
                  40' Standard
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-blue-900 mr-2" />
                  40' High Cube
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <FontAwesomeIcon icon={faTruck} className="text-5xl text-blue-900 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Dry Vans</h3>
              <p className="text-gray-700 mb-4">
                Standard dry van trailers for general freight and non-perishable goods.
              </p>
              <ul className="text-left text-gray-700 space-y-2">
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-blue-900 mr-2" />
                  53' Dry Vans
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-blue-900 mr-2" />
                  Climate Controlled
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-blue-900 mr-2" />
                  General Freight
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <FontAwesomeIcon icon={faShippingFast} className="text-5xl text-blue-900 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Tanks</h3>
              <p className="text-gray-700 mb-4">
                Tank containers and specialized tanker trailers for liquid cargo.
              </p>
              <ul className="text-left text-gray-700 space-y-2">
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-blue-900 mr-2" />
                  Tank Containers
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-blue-900 mr-2" />
                  ISO Tanks
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-blue-900 mr-2" />
                  Liquid Cargo
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Coverage Map */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Service Coverage</h2>
            <p className="text-xl text-gray-600">Comprehensive coverage across the Southeast region</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-blue-900">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-4xl text-blue-900 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Primary Service Area</h3>
              <ul className="space-y-3 text-gray-700 text-lg">
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-blue-900 mr-3" />
                  Georgia (Statewide)
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-blue-900 mr-3" />
                  Alabama
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-blue-900 mr-3" />
                  South Carolina
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-blue-900 mr-3" />
                  Florida
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-gray-400">
              <FontAwesomeIcon icon={faRoute} className="text-4xl text-blue-900 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Extended Routes</h3>
              <ul className="space-y-3 text-gray-700 text-lg">
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-blue-900 mr-3" />
                  Tennessee
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-blue-900 mr-3" />
                  Louisiana
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-blue-900 mr-3" />
                  Texas
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-linear-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Need a Reliable Trucking Partner?</h2>
          <p className="text-xl mb-8">
            Let us handle your freight with the care and professionalism it deserves.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/#contact" 
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
            >
              Request a Quote
            </a>
            <a 
              href="/about" 
              className="inline-block bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
