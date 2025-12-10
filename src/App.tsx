import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css'
import { faPhone, faEnvelope, faMapMarkerAlt, faTruck, faShieldAlt, faClock, faTrustedKey, faPeople } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Header/Hero Section */}
      <header className='bg-linear-to-r from-blue-900 to-blue-700 text-white'>
        <nav className='container mx-auto px-4 py-4 flex justify-between items-center'>
          <div className='text-3xl font-bold'>BST</div>
          <div className='flex gap-8'>
            <a href='#services' className='hover:text-blue-200 transition'>Services</a>
            <a href='#about' className='hover:text-blue-200 transition'>About</a>
            <a href='#contact' className='hover:text-blue-200 transition'>Contact</a>
          </div>
        </nav>

        <div className='container mx-auto px-4 py-20 text-center'>
          <h1 className='text-5xl font-bold mb-4'>Best Service Trucking LLC</h1>
          <p className='text-2xl text-blue-100 mb-2'>Safety. Reliability.</p>
          <p className='text-lg text-blue-200'>Moving cargo with care and efficiency across the Southeast</p>
        </div>
      </header>

      {/* Who We Are Section */}
      <section id='about' className='bg-white py-16'>
        <div className='container mx-auto px-4'>
          <h2 className='text-4xl font-bold mb-8 text-gray-900'>Who We Are</h2>
          <div className='grid md:grid-cols-2 gap-8'>
            <div>
              <p className='text-lg text-gray-700 mb-4'>
                At Best Service Trucking LLC, we're proud to keep freight moving across the Southeast region.
              </p>
              <p className='text-lg text-gray-700 mb-4'>
                Our company was established in January 2025, built on nearly 16 years of experience in hauling containers, dry vans, and tanks.
              </p>
              <p className='text-lg text-gray-700'>
                We've carried forward a tradition of dependable, honest service that customers and partners can count on.
              </p>
            </div>
            <div>
              <p className='text-lg text-gray-700 mb-4'>
                Our team understands the pace and pressure of port logistics, and we work hard to make every pickup and delivery smooth and on-time.
              </p>
              <p className='text-lg text-gray-700'>
                We believe in building strong, lasting relationships - not just hauling loads.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section id='services' className='bg-gray-100 py-16'>
        <div className='container mx-auto px-4'>
          <h2 className='text-4xl font-bold mb-12 text-gray-900'>What We Do</h2>
          <div className='grid md:grid-cols-2 gap-12'>
            <div className='bg-white p-8 rounded-lg shadow'>
              <h3 className='text-2xl font-bold mb-4 text-blue-900'>Port Services</h3>
              <p className='text-gray-700 mb-4'>
                We specialize in pulling loaded containers from ports and delivering them safely to customers, both locally and regionally.
              </p>
              <p className='text-gray-700 font-semibold mb-4'>Our operations focus on the Port of Savannah, covering:</p>
              <ul className='text-gray-700 space-y-2 ml-4'>
                <li>✓ The Atlanta metro area</li>
                <li>✓ Neighboring states: Alabama, South Carolina, and Florida</li>
                <li>✓ Extended routes to Tennessee, Louisiana, and Texas</li>
              </ul>
            </div>

            <div className='bg-white p-8 rounded-lg shadow'>
              <h3 className='text-2xl font-bold mb-4 text-blue-900'>Regional Hauling</h3>
              <p className='text-gray-700 mb-4'>
                In addition to port-to-customer hauls, we also pick up loads from anywhere in Georgia and deliver them directly to our customers.
              </p>
              <p className='text-gray-700'>
                This flexibility allows us to meet a wide range of transportation needs - whether your freight starts at the port, your warehouse, or anywhere in between.
              </p>
              <p className='text-gray-700 mt-4'>
                With deep experience at ports, we're ready to handle your import or export containers with care and precision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Fleet & Team Section */}
      <section className='bg-white py-16'>
        <div className='container mx-auto px-4'>
          <h2 className='text-4xl font-bold mb-12 text-gray-900'>Our Fleet & Team</h2>
          <div className='grid md:grid-cols-2 gap-8'>
            <div className='flex gap-4'>
              <FontAwesomeIcon icon={faTruck} className='text-3xl text-blue-900 shrink-0 mt-1' />
              <div>
                <h3 className='text-xl font-bold mb-2 text-gray-900'>Modern Fleet</h3>
                <p className='text-gray-700'>Our trucks are modern, well-maintained, and always ready to roll. Each driver is trained in port procedures, safety standards, and professional communication.</p>
              </div>
            </div>

            <div className='flex gap-4'>
              <FontAwesomeIcon icon={faTrustedKey} className='text-3xl text-blue-900 shrink-0 mt-1' />
              <div>
                <h3 className='text-xl font-bold mb-2 text-gray-900'>Real-Time Tracking</h3>
                <p className='text-gray-700'>We use Electronic Logging Devices (ELDs) to track and manage every delivery in real time — ensuring accuracy, transparency, and compliance throughout the entire process.</p>
              </div>
            </div>

            <div className='flex gap-4'>
              <FontAwesomeIcon icon={faPeople} className='text-3xl text-blue-900 shrink-0 mt-1' />
              <div>
                <h3 className='text-xl font-bold mb-2 text-gray-900'>Reliable Team</h3>
                <p className='text-gray-700'>We're proud of our team's reliability — because every load deserves attention, care, and respect from port to door.</p>
              </div>
            </div>

            <div className='flex gap-4'>
              <FontAwesomeIcon icon={faClock} className='text-3xl text-blue-900 shrink-0 mt-1' />
              <div>
                <h3 className='text-xl font-bold mb-2 text-gray-900'>Real-Time Updates</h3>
                <p className='text-gray-700'>This system helps us keep our partners updated and makes sure every load stays on schedule.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner With Us Section */}
      <section className='bg-linear-to-r from-blue-900 to-blue-700 text-white py-16'>
        <div className='container mx-auto px-4'>
          <h2 className='text-4xl font-bold mb-12'>Why Partner With Us</h2>
          <div className='grid md:grid-cols-3 gap-8'>
            <div className='flex gap-4'>
              <FontAwesomeIcon icon={faShieldAlt} className='text-3xl shrink-0' />
              <div>
                <h3 className='text-xl font-bold mb-2'>Safety First</h3>
                <p className='text-blue-100'>Every load handled by trained professionals.</p>
              </div>
            </div>

            <div className='flex gap-4'>
              <FontAwesomeIcon icon={faTruck} className='text-3xl shrink-0' />
              <div>
                <h3 className='text-xl font-bold mb-2'>Reliable Service</h3>
                <p className='text-blue-100'>On-time pickups and deliveries are our standard.</p>
              </div>
            </div>

            <div className='flex gap-4'>
              <FontAwesomeIcon icon={faEnvelope} className='text-3xl shrink-0' />
              <div>
                <h3 className='text-xl font-bold mb-2'>Clear Communication</h3>
                <p className='text-blue-100'>We keep our partners updated every step of the way.</p>
              </div>
            </div>

            <div className='flex gap-4'>
              <FontAwesomeIcon icon={faMapMarkerAlt} className='text-3xl shrink-0' />
              <div>
                <h3 className='text-xl font-bold mb-2'>Regional Expertise</h3>
                <p className='text-blue-100'>Deep knowledge of East Coast ports and Savannah operations.</p>
              </div>
            </div>

            <div className='flex gap-4'>
              <FontAwesomeIcon icon={faPeople} className='text-3xl shrink-0' />
              <div>
                <h3 className='text-xl font-bold mb-2'>Long-term Partnerships</h3>
                <p className='text-blue-100'>We treat every customer like part of our family.</p>
              </div>
            </div>

            <div className='flex gap-4'>
              <FontAwesomeIcon icon={faClock} className='text-3xl shrink-0' />
              <div>
                <h3 className='text-xl font-bold mb-2'>Shared Success</h3>
                <p className='text-blue-100'>Your goals become our mission.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Partners Section */}
      <section className='bg-white py-16'>
        <div className='container mx-auto px-4'>
          <h2 className='text-4xl font-bold mb-8 text-gray-900'>Our Partners</h2>
          <p className='text-lg text-gray-700 mb-8'>
            We are proud to collaborate with various brokers and carriers. We do not just work with our partners – we grow together. Each partnership is built on trust, shared vision, and the belief that collaboration drives success.
          </p>
          <div>
            <h3 className='text-2xl font-bold mb-4 text-gray-900'>Long-term Relationships with Korean Companies</h3>
            <div className='grid md:grid-cols-4 gap-6'>
              <div className='bg-gray-100 p-6 rounded-lg text-center font-bold text-gray-900'>Samsung</div>
              <div className='bg-gray-100 p-6 rounded-lg text-center font-bold text-gray-900'>Lotte</div>
              <div className='bg-gray-100 p-6 rounded-lg text-center font-bold text-gray-900'>Glovis</div>
              <div className='bg-gray-100 p-6 rounded-lg text-center font-bold text-gray-900'>GFA</div>
            </div>
            <div className='grid md:grid-cols-2 gap-6 mt-4'>
              <div className='bg-gray-100 p-6 rounded-lg text-center font-bold text-gray-900'>GET</div>
              <div className='bg-gray-100 p-6 rounded-lg text-center font-bold text-gray-900'>MIS</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id='contact' className='bg-gray-100 py-16'>
        <div className='container mx-auto px-4'>
          <h2 className='text-4xl font-bold mb-12 text-gray-900 text-center'>Contact Us</h2>
          <div className='max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg'>
            <div className='space-y-6'>
              <div className='flex items-start gap-4'>
                <FontAwesomeIcon icon={faMapMarkerAlt} className='text-2xl text-blue-900 mt-1 shrink-0' />
                <div>
                  <h3 className='font-bold text-lg mb-2'>Address</h3>
                  <p className='text-gray-700'>106 Old Valambrosia Rd., Dublin, GA 31021</p>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <FontAwesomeIcon icon={faPhone} className='text-2xl text-blue-900 mt-1 shrink-0' />
                <div>
                  <h3 className='font-bold text-lg mb-2'>Phone</h3>
                  <p className='text-gray-700'>770-668-3771 / 770-626-9777</p>
                  <p className='text-sm text-gray-600'>Direct: (770) 626-9777</p>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <FontAwesomeIcon icon={faEnvelope} className='text-2xl text-blue-900 mt-1 shrink-0' />
                <div>
                  <h3 className='font-bold text-lg mb-2'>Email</h3>
                  <p className='text-gray-700'>bstrucking25@gmail.com</p>
                </div>
              </div>
            </div>

            <div className='mt-8 p-6 bg-blue-50 rounded border-l-4 border-blue-900'>
              <p className='text-center text-gray-900 italic text-lg'>
                "We're ready to earn your trust — one haul at a time."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-gray-900 text-gray-300 py-8'>
        <div className='container mx-auto px-4 text-center'>
          <p className='mb-2'>Best Service Trucking LLC</p>
          <p className='text-sm'>We're proud to move your cargo safely, reliably, and on time — every mile, every day.</p>
          <p className='text-xs text-gray-500 mt-4'>© 2025 Best Service Trucking LLC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App 