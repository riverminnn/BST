import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTruck,
  faShieldAlt,
  faClock,
  faUsers,
  faEnvelope,
  faCheckCircle,
  faAnchor,
  faWarehouse,
  faRoute,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Home() {
  useScrollReveal();
  return (
    <div className="min-h-screen text-(--strong)">
      <section className="relative overflow-hidden section-pad">
        <div className="absolute inset-0 pointer-events-none opacity-70">
          <div className="absolute -top-32 -right-10 w-80 h-80 rounded-full bg-[rgba(247,201,72,0.12)] blur-3xl" />
          <div className="absolute -bottom-24 -left-10 w-96 h-96 rounded-full bg-[rgba(59,130,246,0.15)] blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.05),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.06),transparent_30%)]" />
        </div>

        <div className="page-shell grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6 animate-fade-in">
            <span className="pill">Savannah · Southeast</span>
            <h1 className="section-title">
              Logistics built for <span className="gradient-text">clean, reliable</span> moves.
            </h1>
            <p className="text-lg text-(--muted) leading-relaxed max-w-xl">
              Port-to-door hauling with a disciplined, minimal workflow. We keep every touchpoint calm, clear, and on time—from Savannah to the entire Southeast.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/apply"
                className="btn-cta-pulse btn-shine btn-shine-auto inline-flex items-center gap-2 bg-(--accent) text-(--btn-text) font-bold px-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                <FontAwesomeIcon icon={faTruck} />
                Apply to drive
              </Link>
              <Link
                to="/services"
                className="btn-shine border-glow-hover inline-flex items-center gap-2 border border-(--line) bg-(--card) px-5 py-3 rounded-full text-(--strong) hover:border-(--accent)/40 transition-colors"
              >
                View services
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[{ label: 'Years hauling', value: '16+' }, { label: 'States covered', value: '7' }, { label: 'Ops window', value: '24/7' }].map((item, index) => (
                <div key={item.label} className={`surface-card card-hover-lift p-4 scroll-reveal scroll-reveal-delay-${index + 1}`}>
                  <div className="text-2xl font-bold text-(--accent)">{item.value}</div>
                  <p className="text-sm text-(--muted)">{item.label}</p>
                </div>
              ))}            </div>
          </div>

          <div className="space-y-4 animate-fade-in">
            <div className="surface-card p-6 border border-(--line)">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-(--muted)">Ops snapshot</p>
                  <h3 className="text-2xl font-bold text-(--strong)">Every lane stays calm</h3>
                </div>
                <FontAwesomeIcon icon={faRoute} className="text-xl text-(--accent)" />
              </div>
              <ul className="space-y-3 text-sm text-(--muted)">
                <li className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-(--accent) mt-0.5" />
                  Safety-first drivers trained for ports and live updates.
                </li>
                <li className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-(--accent) mt-0.5" />
                  Minimal handoffs: clear milestones from pickup to delivery.
                </li>
                <li className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-(--accent) mt-0.5" />
                  Real-time tracking with proactive check-ins—no surprises.
                </li>
              </ul>
            </div>

            <div className="surface-card p-5 flex flex-col gap-3 border border-(--line)">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-(--pill) text-(--accent-strong) flex items-center justify-center text-xl font-bold">24/7</div>
                <div>
                  <p className="text-sm text-(--muted)">Call dispatch</p>
                  <p className="font-semibold">(770) 668-3771</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-(--card) border border-(--line) flex items-center justify-center">
                  <FontAwesomeIcon icon={faEnvelope} className="text-(--accent)" />
                </div>
                <div>
                  <p className="text-sm text-(--muted)">Email</p>
                  <a href="mailto:bstrucking25@gmail.com" className="font-semibold text-(--strong) hover:text-(--accent) transition-colors">
                    bstrucking25@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-(--bg-soft) border-y border-(--line)">
        <div className="page-shell space-y-12">
          <div className="text-center space-y-4 scroll-reveal">
            <span className="pill">Operations</span>
            <h2 className="section-title">The <span className="gradient-text">calm, minimal</span> workflow behind every haul.</h2>
            <p className="section-subtitle">
              Four anchors keep our moves steady—safety, punctuality, regional mastery, and the people who own the details.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[{
              icon: faShieldAlt,
              title: 'Safety-first',
              body: 'Tight protocols, disciplined inspections, and trained port specialists.',
            }, {
              icon: faClock,
              title: 'On time, every time',
              body: 'Schedules built with buffers and live ETAs to keep your teams ready.',
            }, {
              icon: faRoute,
              title: 'Regional fluency',
              body: 'Savannah expertise with routes across GA, AL, SC, FL, TN, LA, TX.',
            }, {
              icon: faUsers,
              title: 'Human clarity',
              body: 'Single-threaded communication and proactive updates—no chasing.',
            }].map((card, index) => (
              <div key={card.title} className={`surface-card card-hover-lift p-6 flex flex-col gap-4 scroll-reveal scroll-reveal-delay-${index + 1}`}>
                <div className="w-12 h-12 rounded-xl bg-(--pill) text-(--accent-strong) flex items-center justify-center text-xl">
                  <FontAwesomeIcon icon={card.icon} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-(--strong)">{card.title}</h3>
                  <p className="text-sm text-(--muted) leading-relaxed">{card.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="section-pad">
        <div className="page-shell space-y-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 scroll-reveal">
            <div>
              <span className="pill">What we do</span>
              <h2 className="section-title">Port precision, <span className="gradient-text">flexible delivery</span>.</h2>
              <p className="section-subtitle text-left md:max-w-xl">
                Two focused service lanes keep freight moving without clutter—container pulls from Savannah and adaptable pickup/delivery everywhere in Georgia.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-(--accent) hover:text-(--strong)"
            >
              Book a move
              <FontAwesomeIcon icon={faPaperPlane} className="text-xs" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="surface-card card-hover-lift p-7 border border-(--line) scroll-reveal-left">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-lg bg-(--pill) text-(--accent-strong) flex items-center justify-center text-xl">
                  <FontAwesomeIcon icon={faAnchor} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-(--strong)">Port container pulls</h3>
                  <p className="text-sm text-(--muted)">Savannah as home base; ATL metro and the Southeast in rhythm.</p>
                </div>
              </div>
              <ul className="space-y-3 text-(--muted)">
                <li className="flex items-start gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-(--accent) mt-0.5" />
                  Local and regional deliveries with port-hardened drivers.
                </li>
                <li className="flex items-start gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-(--accent) mt-0.5" />
                  Atlanta metro, AL, SC, FL plus extended runs to TN, LA, TX.
                </li>
                <li className="flex items-start gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-(--accent) mt-0.5" />
                  Real-time visibility and compliance baked into every pull.
                </li>
              </ul>
            </div>

            <div className="surface-card card-hover-lift p-7 border border-(--line) scroll-reveal-right">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-lg bg-(--pill) text-(--accent-strong) flex items-center justify-center text-xl">
                  <FontAwesomeIcon icon={faWarehouse} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-(--strong)">Flexible pickup & delivery</h3>
                  <p className="text-sm text-(--muted)">Warehouse to warehouse or custom routes across Georgia.</p>
                </div>
              </div>
              <ul className="space-y-3 text-(--muted)">
                <li className="flex items-start gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-(--accent) mt-0.5" />
                  Port-to-customer and facility-to-facility moves.
                </li>
                <li className="flex items-start gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-(--accent) mt-0.5" />
                  Custom Georgia pickups with the same on-time discipline.
                </li>
                <li className="flex items-start gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-(--accent) mt-0.5" />
                  Containers, dry vans, and tanks handled with care.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="fleet" className="section-pad bg-(--bg-soft) border-t border-(--line)">
        <div className="page-shell grid lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-6 scroll-reveal-left">
            <span className="pill">Fleet & team</span>
            <h2 className="section-title">Modern equipment, <span className="gradient-text">people who care</span>.</h2>
            <p className="section-subtitle text-left">
              Clean, well-maintained trucks paired with drivers trained for ports, safety, and respectful communication.
            </p>

            <div className="space-y-4">
              {[{
                icon: faTruck,
                title: 'Modern equipment',
                body: 'Meticulous preventive maintenance keeps every rig ready.',
              }, {
                icon: faUsers,
                title: 'Professional drivers',
                body: 'Port procedures, safety standards, and courteous updates.',
              }, {
                icon: faClock,
                title: 'Live tracking',
                body: 'ELDs and proactive check-ins keep everyone aligned.',
              }].map((item) => (
                <div key={item.title} className="surface-card card-hover-lift p-5 flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-xl bg-(--pill) text-(--accent-strong) flex items-center justify-center text-xl">
                    <FontAwesomeIcon icon={item.icon} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-(--strong)">{item.title}</h3>
                    <p className="text-sm text-(--muted) leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="surface-card card-hover-lift p-7 border border-(--line) space-y-6 scroll-reveal-right">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-(--muted)">Partners we grow with</p>
              <h3 className="text-2xl font-bold text-(--strong) mt-2">Trusted by leading teams.</h3>
              <p className="text-sm text-(--muted) mt-3">Long-term relationships with brokers and carriers, including Korean leaders.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {['Samsung', 'Lotte', 'Glovis', 'GFA', 'GET', 'MIS'].map((name, index) => (
                <div key={name} className={`rounded-xl border border-(--line) bg-(--card) text-center py-3 text-sm font-semibold text-(--strong) card-hover-lift scroll-reveal-scale scroll-reveal-delay-${index + 1}`}>
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section-pad">
        <div className="page-shell">
          <div className="surface-card p-10 text-center border border-(--line) flex flex-col gap-6 scroll-reveal-scale">
            <div className="flex flex-col gap-2">
              <span className="pill mx-auto">Let&apos;s move</span>
              <h2 className="section-title">Ready for a <span className="gradient-text">calm, on-time</span> haul?</h2>
              <p className="section-subtitle">We earn trust one load at a time. Call, email, or start with a quick form.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left md:text-center">
              <div className="p-4 rounded-xl bg-(--card) border border-(--line)">
                <p className="text-sm text-(--muted)">Phone</p>
                <p className="text-lg font-semibold">(770) 668-3771</p>
                <p className="text-lg font-semibold">(770) 626-9777</p>
              </div>
              <div className="p-4 rounded-xl bg-(--card) border border-(--line)">
                <p className="text-sm text-(--muted)">Email</p>
                <p className="text-lg font-semibold">bstrucking25@gmail.com</p>
              </div>
              <div className="p-4 rounded-xl bg-(--card) border border-(--line)">
                <p className="text-sm text-(--muted)">Address</p>
                <p className="text-lg font-semibold">106 Valambrosia Rd.</p>
                <p className="text-lg font-semibold">Dublin, GA 31021</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="btn-shine inline-flex items-center gap-2 bg-(--accent) text-(--btn-text) font-bold px-5 py-3 rounded-full shadow-md"
              >
                Contact us
                <FontAwesomeIcon icon={faEnvelope} className="text-sm" />
              </Link>
              <Link
                to="/apply"
                className="btn-shine border-glow-hover inline-flex items-center gap-2 border border-(--line) bg-(--card) px-5 py-3 rounded-full text-(--strong)"
              >
                Apply now
                <FontAwesomeIcon icon={faTruck} className="text-sm" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
