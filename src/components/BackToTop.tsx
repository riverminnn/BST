import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../context/ThemeContext';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when user scrolls down 400px
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-4 pointer-events-none'
      } ${
        theme === 'dark'
          ? 'bg-(--accent) text-(--btn-text) hover:bg-(--accent-strong) shadow-[0_4px_20px_rgba(247,201,72,0.3)]'
          : 'bg-blue-600 text-white hover:bg-blue-700 shadow-[0_4px_20px_rgba(37,99,235,0.4)]'
      }`}
    >
      <FontAwesomeIcon icon={faArrowUp} className="text-lg" />
    </button>
  );
}
