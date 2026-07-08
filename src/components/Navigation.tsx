import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Code2, Menu, X } from 'lucide-react';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/pathways', label: 'Pathways' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/blog', label: 'Blog' },
  { path: '/faq', label: 'FAQ' },
  { path: '/contact', label: 'Contact' },
];

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-surface border-b-2 border-ink-black transition-shadow duration-300 ${
        scrolled ? 'shadow-hard-sm' : 'shadow-none'
      }`}
    >
      <div className="flex justify-between items-center px-4 sm:px-6 py-4 max-w-container mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-display text-[18px] sm:text-headline-md font-bold text-ink-black hover-wiggle">
          <Code2 className="w-6 h-6 text-primary" />
          <span className="hidden sm:inline">Bit by Bit Coding</span>
          <span className="sm:hidden">BbB Coding</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 font-label text-[14px] font-bold">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition-colors hover:text-primary ${
                location.pathname === link.path
                  ? 'text-primary border-b-2 border-primary font-bold'
                  : 'text-ink-black'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3 md:gap-4">
          <Link
            to="/apply"
            className="bg-primary-container text-ink-black font-label font-bold text-[13px] md:text-[14px] px-4 md:px-6 py-2 wiggly-border hard-shadow hover-wiggle hidden sm:block"
          >
            Apply Now
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-ink-black hover:text-primary transition-colors p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-surface border-t-2 border-ink-black absolute left-0 right-0 shadow-hard-sm">
          <div className="flex flex-col px-4 sm:px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-label text-[15px] md:text-[16px] font-bold py-3 border-b border-ink-black/10 last:border-0 ${
                  location.pathname === link.path ? 'text-primary' : 'text-ink-black'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/apply"
              className="bg-primary text-on-primary font-label font-bold text-[14px] px-6 py-3 wiggly-border text-center mt-3"
            >
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
