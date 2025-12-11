import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle, faHome } from '@fortawesome/free-solid-svg-icons';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <FontAwesomeIcon 
          icon={faExclamationTriangle} 
          className="text-8xl text-yellow-500 mb-8 animate-pulse"
        />
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-700 mb-6">Page Not Found</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
          The page you're looking for seems to have taken a different route.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
        >
          <FontAwesomeIcon icon={faHome} className="mr-3" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
