import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTruck, 
  faPhone, 
  faEnvelope,
  faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-(--bg-soft) border-t border-(--line) text-(--strong) py-12">
      <div className="page-shell">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <FontAwesomeIcon icon={faTruck} className="text-2xl text-(--accent)" />
              <h3 className="text-xl font-bold">Best Service Trucking LLC</h3>
            </div>
            <p className="text-(--muted) mb-4">
              Moving cargo with care and efficiency across the Southeast region since 2025.
            </p>
            <p className="text-(--muted)">
              Built on 16 years of experience in hauling containers, dry vans, and tanks.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <div className="space-y-3 text-(--muted)">
              <div className="flex items-start">
                <FontAwesomeIcon icon={faPhone} className="text-(--accent) mt-1 mr-3" />
                <div>
                  <p>(770) 668-3771</p>
                  <p>(770) 626-9777</p>
                </div>
              </div>
              <div className="flex items-start">
                <FontAwesomeIcon icon={faEnvelope} className="text-(--accent) mt-1 mr-3" />
                <a href="mailto:bstrucking25@gmail.com" className="hover:text-(--accent) transition-colors">
                  bstrucking25@gmail.com
                </a>
              </div>
              <div className="flex items-start">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-(--accent) mt-1 mr-3" />
                <div>
                  <p>106 Old Valambrosia Rd.</p>
                  <p>Dublin, GA 301021</p>
                </div>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-xl font-bold mb-4">Service Areas</h3>
            <ul className="space-y-2 text-(--muted)">
              <li>• Port of Savannah</li>
              <li>• Atlanta Metro Area</li>
              <li>• Georgia</li>
              <li>• Alabama</li>
              <li>• South Carolina</li>
              <li>• Florida</li>
              <li>• Tennessee</li>
              <li>• Louisiana</li>
              <li>• Texas</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-(--line) pt-8 text-center text-(--muted)">
          <p className="mb-2">
            &copy; {new Date().getFullYear()} Best Service Trucking LLC. All rights reserved.
          </p>
          <p className="text-sm italic text-(--accent)">
            "We're ready to earn your trust — one haul at a time."
          </p>
        </div>
      </div>
    </footer>
  );
}
