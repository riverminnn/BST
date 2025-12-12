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
    <div className="min-h-screen text-(--strong)">
      <section className="section-pad bg-(--bg-soft) border-b border-(--line) text-center space-y-3">
        <div className="page-shell space-y-4">
          <span className="pill">Fleet & team</span>
          <h1 className="section-title">Modern equipment, disciplined people.</h1>
          <p className="section-subtitle">A calm fleet with preventive care, live tracking, and drivers trained for the port tempo.</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="page-shell grid lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-5">
            <h2 className="section-title">Fleet snapshot</h2>
            <p className="text-(--muted) leading-relaxed text-lg">
              Clean, well-maintained trucks and trailers that stay ready. Preventive maintenance, safety checks, and port-ready prep keep us steady on every lane.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[{ label: 'Years experience', value: '16+' }, { label: 'Operations window', value: '24/7' }].map((stat) => (
                <div key={stat.label} className="surface-card p-5 text-center">
                  <div className="text-3xl font-bold text-(--accent)">{stat.value}</div>
                  <p className="text-sm text-(--muted)">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="surface-card p-6 border border-(--line)">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-(--pill) text-(--accent-strong) flex items-center justify-center text-xl">
                  <FontAwesomeIcon icon={faTruck} />
                </div>
                <h3 className="text-xl font-semibold text-(--strong)">Capabilities</h3>
              </div>
              <ul className="space-y-2 text-sm text-(--muted)">
                {['Port container services', 'Regional distribution', 'Long-haul support', 'Specialized cargo handling'].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-(--accent) mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="surface-card p-7 border border-(--line) space-y-4">
            <h3 className="text-2xl font-bold text-(--strong)">Equipment readiness</h3>
            <div className="space-y-4">
              {[{
                icon: faBoxes,
                title: 'Containers',
                desc: "20', 40', and 40' high cube with precise handling.",
              }, {
                icon: faTruck,
                title: 'Dry vans',
                desc: "53' dry vans for general freight with weather protection.",
              }, {
                icon: faGasPump,
                title: 'Tanks',
                desc: 'ISO tanks and liquid cargo expertise.',
              }].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="w-11 h-11 rounded-lg bg-(--card) border border-(--line) flex items-center justify-center">
                    <FontAwesomeIcon icon={item.icon} className="text-(--accent)" />
                  </div>
                  <div>
                    <p className="font-semibold text-(--strong)">{item.title}</p>
                    <p className="text-sm text-(--muted) leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-(--bg-soft) border-y border-(--line)">
        <div className="page-shell space-y-10">
          <div className="text-center space-y-3">
            <span className="pill">Tech & safety</span>
            <h2 className="section-title">Systems that keep every load visible.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[{
              icon: faTachometerAlt,
              title: 'ELDs everywhere',
              desc: 'Real-time tracking and compliance baked in.',
            }, {
              icon: faMapMarkerAlt,
              title: 'GPS routing',
              desc: 'Live location and route optimization.',
            }, {
              icon: faShieldAlt,
              title: 'Safety systems',
              desc: 'Collision avoidance and checks before every move.',
            }, {
              icon: faHeadset,
              title: '24/7 comms',
              desc: 'Dispatch and customers stay in the same loop.',
            }].map((card) => (
              <div key={card.title} className="surface-card p-5 text-center border border-(--line)">
                <div className="w-11 h-11 mx-auto rounded-lg bg-(--pill) text-(--accent-strong) flex items-center justify-center text-xl mb-3">
                  <FontAwesomeIcon icon={card.icon} />
                </div>
                <h3 className="text-lg font-semibold text-(--strong) mb-2">{card.title}</h3>
                <p className="text-sm text-(--muted) leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="page-shell grid lg:grid-cols-2 gap-8">
          <div className="surface-card p-7 border border-(--line) space-y-4">
            <h3 className="text-2xl font-bold text-(--strong)">Maintenance discipline</h3>
            <p className="text-(--muted) leading-relaxed text-sm">
              Every truck and trailer gets preventive care and inspections before the wheels turn.
            </p>
            <div className="space-y-3">
              {[{
                icon: faTools,
                title: 'Regular inspections',
                desc: 'Daily pre-trip checks and scheduled maintenance.',
              }, {
                icon: faClipboardCheck,
                title: 'DOT compliance',
                desc: 'Equipment meets or exceeds all standards.',
              }, {
                icon: faTools,
                title: 'Preventive mindset',
                desc: 'We solve issues before they become delays.',
              }].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-(--card) border border-(--line) flex items-center justify-center">
                    <FontAwesomeIcon icon={item.icon} className="text-(--accent)" />
                  </div>
                  <div>
                    <p className="font-semibold text-(--strong)">{item.title}</p>
                    <p className="text-sm text-(--muted) leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="surface-card p-7 border border-(--line) space-y-4">
            <h3 className="text-2xl font-bold text-(--strong)">Drivers you can trust</h3>
            <p className="text-(--muted) leading-relaxed text-sm">
              Professional, port-savvy drivers who communicate clearly and treat every load with respect.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {['Experienced team', 'Safety certified', 'Professional service', 'Port expertise'].map((item) => (
                <div key={item} className="p-4 rounded-xl bg-(--card) border border-(--line) text-sm text-(--strong) font-semibold text-center">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-(--bg-soft) border-t border-(--line)">
        <div className="page-shell text-center space-y-4">
          <h2 className="section-title">Ready to move with a calm fleet?</h2>
          <p className="section-subtitle">Tell us the lane and timeline—we&apos;ll keep it predictable.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-(--accent) text-(--btn-text) font-bold px-6 py-3 rounded-full shadow-md"
            >
              Request a quote
            </a>
            <a
              href="/services"
              className="inline-flex items-center gap-2 border border-(--line) bg-(--card) px-6 py-3 rounded-full text-(--strong)"
            >
              View services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
