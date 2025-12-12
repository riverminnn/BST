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
    <div className="min-h-screen text-(--strong)">
      <section className="section-pad bg-(--bg-soft) border-b border-(--line) text-center space-y-4">
        <div className="page-shell space-y-4">
          <span className="pill">Our services</span>
          <h1 className="section-title">Port precision with flexible delivery lanes.</h1>
          <p className="section-subtitle">Two focused offerings keep freight flowing: disciplined port pulls and adaptable pickups across Georgia.</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="page-shell grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="surface-card p-7 border border-(--line) space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-(--pill) text-(--accent-strong) flex items-center justify-center text-xl">
                <FontAwesomeIcon icon={faAnchor} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-(--strong)">Port container services</h2>
                <p className="text-sm text-(--muted)">Savannah expertise, steady moves to Atlanta and the Southeast.</p>
              </div>
            </div>
            <p className="text-(--muted) leading-relaxed text-sm">
              We pull loaded containers from the Port of Savannah and deliver locally or regionally with port-trained drivers and live ETAs.
            </p>
            <div className="grid grid-cols-1 gap-3">
              {[{
                title: 'Atlanta metro',
                desc: 'Complete coverage and predictable windows.',
              }, {
                title: 'Neighboring states',
                desc: 'Alabama, South Carolina, Florida—with the same cadence.',
              }, {
                title: 'Extended runs',
                desc: 'Tennessee, Louisiana, Texas when your network needs reach.',
              }].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-(--accent) mt-0.5" />
                  <div>
                    <p className="font-semibold text-(--strong)">{item.title}</p>
                    <p className="text-sm text-(--muted)">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="surface-card p-7 border border-(--line) space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-(--pill) text-(--accent-strong) flex items-center justify-center text-xl">
                <FontAwesomeIcon icon={faWarehouse} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-(--strong)">Flexible pickup & delivery</h2>
                <p className="text-sm text-(--muted)">Warehouse-to-warehouse and custom Georgia routes.</p>
              </div>
            </div>
            <p className="text-(--muted) leading-relaxed text-sm">
              Whether your freight starts at the port, a warehouse, or a plant, we build a clean plan and run it with the same calm rigor.
            </p>
            <div className="grid grid-cols-1 gap-3">
              {[{
                icon: faShippingFast,
                title: 'Port to customer',
                desc: 'Direct, time-aware delivery from the dock.',
              }, {
                icon: faWarehouse,
                title: 'Facility to facility',
                desc: 'Reliable drayage and transfers across Georgia.',
              }, {
                icon: faRoute,
                title: 'Custom routes',
                desc: 'Pickups anywhere in GA with clear milestones.',
              }].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-(--card) border border-(--line) flex items-center justify-center">
                    <FontAwesomeIcon icon={item.icon} className="text-(--accent)" />
                  </div>
                  <div>
                    <p className="font-semibold text-(--strong)">{item.title}</p>
                    <p className="text-sm text-(--muted)">{item.desc}</p>
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
            <span className="pill">Equipment</span>
            <h2 className="section-title">Container and trailer types we manage.</h2>
            <p className="section-subtitle">Sixteen years across the core formats that keep trade moving.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[{
              icon: faBoxes,
              title: 'Containers',
              items: ["20' standard", "40' standard", "40' high cube"],
            }, {
              icon: faTruck,
              title: 'Dry vans',
              items: ["53' dry vans", 'Climate-aware handling', 'General freight'],
            }, {
              icon: faShippingFast,
              title: 'Tanks',
              items: ['Tank containers', 'ISO tanks', 'Liquid cargo focus'],
            }].map((card) => (
              <div key={card.title} className="surface-card p-6 border border-(--line) text-center space-y-3">
                <div className="w-12 h-12 mx-auto rounded-xl bg-(--pill) text-(--accent-strong) flex items-center justify-center text-xl">
                  <FontAwesomeIcon icon={card.icon} />
                </div>
                <h3 className="text-xl font-semibold text-(--strong)">{card.title}</h3>
                <ul className="space-y-2 text-sm text-(--muted) text-left">
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
        <div className="page-shell grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="surface-card p-7 border border-(--line)">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-11 h-11 rounded-lg bg-(--pill) text-(--accent-strong) flex items-center justify-center text-xl">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-(--strong)">Primary coverage</h3>
                <p className="text-sm text-(--muted)">Savannah and the Southeast core.</p>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-(--muted)">
              {['Georgia (statewide)', 'Alabama', 'South Carolina', 'Florida'].map((area) => (
                <li key={area} className="flex items-start gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-(--accent) mt-0.5" />
                  {area}
                </li>
              ))}
            </ul>
          </div>

          <div className="surface-card p-7 border border-(--line)">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-11 h-11 rounded-lg bg-(--pill) text-(--accent-strong) flex items-center justify-center text-xl">
                <FontAwesomeIcon icon={faRoute} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-(--strong)">Extended routes</h3>
                <p className="text-sm text-(--muted)">When your network stretches farther.</p>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-(--muted)">
              {['Tennessee', 'Louisiana', 'Texas'].map((area) => (
                <li key={area} className="flex items-start gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-(--accent) mt-0.5" />
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-pad bg-(--bg-soft) border-t border-(--line)">
        <div className="page-shell text-center space-y-4">
          <h2 className="section-title">Need a steady trucking partner?</h2>
          <p className="section-subtitle">Tell us the lane, we&apos;ll keep it calm and on time.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 bg-(--accent) text-(--btn-text) font-bold px-6 py-3 rounded-full shadow-md"
            >
              Request a quote
            </a>
            <a
              href="/about"
              className="inline-flex items-center gap-2 border border-(--line) bg-(--card) px-6 py-3 rounded-full text-(--strong)"
            >
              Learn about us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
