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
    <div className="min-h-screen text-(--strong)">
      <section className="section-pad bg-(--bg-soft) border-b border-(--line)">
        <div className="page-shell text-center space-y-4">
          <span className="pill">About Best Service Trucking</span>
          <h1 className="section-title">Sixteen years of calm, reliable freight moves.</h1>
          <p className="section-subtitle">
            Built in Dublin, GA and rooted in Savannah operations, we move cargo with disciplined simplicity—no drama, just dependable miles.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="page-shell grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-4">
            <h2 className="section-title">Our story</h2>
            <p className="text-(--muted) leading-relaxed text-lg">
              Best Service Trucking LLC launched in January 2025 on top of nearly 16 years of hauling containers, dry vans, and tanks. We built the company on a simple promise: every load gets the same care, every partner gets clear communication, every mile runs on time.
            </p>
            <p className="text-(--muted) leading-relaxed text-lg">
              From Savannah ports to inland hubs, we keep the pace steady. Our roots in Dublin, GA keep us grounded; our regional expertise keeps freight moving across the Southeast without friction.
            </p>
          </div>

          <div className="space-y-4">
            {[{
              title: 'Mission',
              copy: 'Deliver safe, reliable, efficient trucking that exceeds expectations through clarity and consistency.',
            }, {
              title: 'Vision',
              copy: 'Be the Southeast partner teams trust most for calm, on-time logistics.',
            }, {
              title: 'Values',
              copy: 'Safety first · Reliability always · Clear communication · Long-term partnerships · Professional excellence.',
            }].map((item) => (
              <div key={item.title} className="surface-card p-6 border border-(--line)">
                <p className="text-xs uppercase tracking-[0.2em] text-(--muted) mb-2">{item.title}</p>
                <p className="text-lg text-(--strong) leading-relaxed">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-(--bg-soft) border-y border-(--line)">
        <div className="page-shell space-y-12">
          <div className="text-center space-y-3">
            <span className="pill">What sets us apart</span>
            <h2 className="section-title">The four habits that keep us steady.</h2>
            <p className="section-subtitle">Operational discipline designed for ports, schedules, and people.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[{
              icon: faShieldAlt,
              title: 'Safety built-in',
              items: ['Regular inspections', 'Trained port drivers', 'Regulation-first mindset'],
            }, {
              icon: faClock,
              title: 'On-time reliability',
              items: ['Real-time tracking', 'ELDs on every haul', 'Proactive updates'],
            }, {
              icon: faHandshake,
              title: 'Partnership mindset',
              items: ['Dedicated contacts', 'Flexible solutions', 'Long-term commitment'],
            }].map((card) => (
              <div key={card.title} className="surface-card p-6 border border-(--line)">
                <div className="w-12 h-12 rounded-xl bg-(--pill) text-(--accent-strong) flex items-center justify-center text-xl mb-4">
                  <FontAwesomeIcon icon={card.icon} />
                </div>
                <h3 className="text-xl font-semibold text-(--strong) mb-3">{card.title}</h3>
                <ul className="space-y-2 text-(--muted) text-sm">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-(--accent) mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="page-shell space-y-10">
          <div className="text-center space-y-3">
            <span className="pill">Experience</span>
            <h2 className="section-title">Proof in the miles we run.</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="surface-card p-5 text-center">
              <div className="text-4xl font-bold text-(--accent)">16</div>
              <p className="text-sm text-(--muted)">Years of hauling</p>
            </div>
            <div className="surface-card p-5 text-center">
              <FontAwesomeIcon icon={faUsers} className="text-3xl text-(--accent) mb-2" />
              <p className="text-sm text-(--muted)">Professional team</p>
            </div>
            <div className="surface-card p-5 text-center">
              <FontAwesomeIcon icon={faRoute} className="text-3xl text-(--accent) mb-2" />
              <p className="text-sm text-(--muted)">Multi-state coverage</p>
            </div>
            <div className="surface-card p-5 text-center">
              <FontAwesomeIcon icon={faHandshake} className="text-3xl text-(--accent) mb-2" />
              <p className="text-sm text-(--muted)">Trusted partners</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-(--bg-soft) border-t border-(--line)">
        <div className="page-shell text-center space-y-4">
          <h2 className="section-title">Ready to partner with a calm, reliable fleet?</h2>
          <p className="section-subtitle">Let&apos;s plan your next move together.</p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 bg-(--accent) text-(--btn-text) font-bold px-6 py-3 rounded-full shadow-md"
          >
            Contact us today
          </a>
        </div>
      </section>
    </div>
  );
}
