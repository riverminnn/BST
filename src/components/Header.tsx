import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTruck,
  faPhone,
  faEnvelope,
  faBars,
  faTimes,
  faArrowUpRightFromSquare,
  faSun,
  faMoon,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLink = (to: string, label: string, extra?: string) => (
    <Link
      to={to}
      className={`text-sm font-semibold transition-colors px-3 py-2 rounded-full ${
        theme === 'dark'
          ? 'text-(--muted) hover:text-(--strong) hover:bg-(--nav-hover)'
          : 'text-white/90 hover:text-white hover:bg-white/10'
      } ${extra ?? ''}`}
      onClick={() => setIsMenuOpen(false)}
    >
      {label}
    </Link>
  );

  return (
    <header className={`sticky top-0 z-50 border-b backdrop-blur-xl transition-colors duration-300 ${
      theme === 'dark' 
        ? 'border-(--line) bg-(--header-bg)' 
        : 'border-blue-600/20 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700'
    }`}>
      <div className="page-shell">
        <div className={`hidden md:flex items-center justify-between py-3 text-xs ${theme === 'dark' ? 'text-(--muted)' : 'text-white/80'}`}>
          <div className="flex items-center gap-3">
            <span
              className={`inline-flex items-center gap-2 px-3 h-8 rounded-full font-semibold text-[11px] leading-[1.1] whitespace-nowrap ${
                theme === 'dark'
                  ? 'bg-(--pill) text-(--accent-strong) border border-(--line)'
                  : 'bg-white/15 text-white'
              }`}
            >
              <FontAwesomeIcon icon={faTruck} />
              On the road 24/7
            </span>
            <span className="inline-flex items-center gap-2">
              <FontAwesomeIcon icon={faPhone} className={theme === 'dark' ? 'text-(--accent)' : 'text-yellow-300'} />
              (770) 668-3771 · (770) 626-9777
            </span>
            <a
              href="mailto:bstrucking25@gmail.com"
              className={`inline-flex items-center gap-2 transition-colors ${theme === 'dark' ? 'hover:text-(--strong)' : 'hover:text-white'}`}
            >
              <FontAwesomeIcon icon={faEnvelope} className={theme === 'dark' ? 'text-(--accent)' : 'text-yellow-300'} />
              bstrucking25@gmail.com
            </a>
          </div>
          <span className={`font-semibold ${theme === 'dark' ? 'text-(--accent)' : 'text-yellow-300'}`}>Safety · Reliability</span>
        </div>

        <div className="flex items-center justify-between py-4">
          <Link
            to="/"
            className={`flex items-center gap-3 hover:opacity-90 transition-opacity ${theme === 'dark' ? 'text-(--strong)' : 'text-white'}`}
          >
            <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center shadow-lg ${
              theme === 'dark' ? 'bg-(--card) border-(--line)' : 'bg-white border-white/40'
            }`}>
              <FontAwesomeIcon icon={faTruck} className={`text-xl ${theme === 'dark' ? 'text-(--accent)' : 'text-blue-600'}`} />
            </div>
            <div className="leading-tight">
              <div className="text-lg font-bold">Best Service Trucking</div>
              <div className={`text-xs ${theme === 'dark' ? 'text-(--muted)' : 'text-white/70'}`}>Moving cargo with care</div>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-2">
            {navLink('/about', 'About')}
            {navLink('/services', 'Services')}
            {navLink('/fleet', 'Fleet')}
            {navLink('/contact', 'Contact')}
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ml-1 ${
                theme === 'dark'
                  ? 'bg-(--card) border border-(--line) hover:bg-(--nav-hover) text-(--accent)'
                  : 'bg-white/15 border border-white/20 hover:bg-white/25 text-yellow-300'
              }`}
              aria-label="Toggle theme"
            >
              <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} className="text-sm" />
            </button>

            <Link
              to="/apply"
              className={`inline-flex items-center gap-2 font-bold px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all ml-1 ${
                theme === 'dark' 
                  ? 'bg-(--accent) text-(--btn-text)' 
                  : 'bg-yellow-400 text-blue-900 hover:bg-yellow-300'
              }`}
            >
              Apply
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-sm" />
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-2">
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                theme === 'dark' ? 'bg-(--card) border border-(--line) text-(--accent)' : 'bg-white/15 border border-white/20 text-yellow-300'
              }`}
              aria-label="Toggle theme"
            >
              <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} />
            </button>
            
            <button
              onClick={() => setIsMenuOpen((open) => !open)}
              className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                theme === 'dark' ? 'bg-(--card) border border-(--line) text-(--strong)' : 'bg-white/15 border border-white/20 text-white'
              }`}
              aria-label="Toggle navigation"
            >
              <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden pb-4">
            <div className={`flex flex-col gap-2 rounded-2xl border p-3 shadow-lg backdrop-blur-xl ${
              theme === 'dark' 
                ? 'border-(--line) bg-(--card)' 
                : 'border-blue-400/30 bg-blue-600/95'
            }`}>
              {navLink('/', 'Home', 'text-base px-4 py-3')}
              {navLink('/about', 'About', 'text-base px-4 py-3')}
              {navLink('/services', 'Services', 'text-base px-4 py-3')}
              {navLink('/fleet', 'Fleet', 'text-base px-4 py-3')}
              {navLink('/contact', 'Contact', 'text-base px-4 py-3')}
              <Link
                to="/apply"
                onClick={() => setIsMenuOpen(false)}
                className={`w-full inline-flex items-center justify-center gap-2 font-bold px-4 py-3 rounded-xl shadow-md ${
                  theme === 'dark' 
                    ? 'bg-(--accent) text-(--btn-text)' 
                    : 'bg-yellow-400 text-blue-900'
                }`}
              >
                Apply Today
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-sm" />
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
