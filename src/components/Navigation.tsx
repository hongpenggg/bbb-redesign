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
      <div className="flex justify-between items-center px-6 py-4 max-w-container mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-display text-headline-md font-bold text-ink-black hover-wiggle">
          <Code2 className="w-6 h-6 text-primary" />
          Bit by Bit Coding
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
        <div className="flex items-center gap-4">
          <Link
            to="/apply"
            className="bg-primary-container text-ink-black font-label font-bold text-[14px] px-6 py-2 wiggly-border hard-shadow hover-wiggle hidden sm:block"
          >
            Apply Now
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-ink-black hover:text-primary transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-surface border-t-2 border-ink-black">
          <div className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-label text-[14px] font-bold py-2 border-b border-ink-black/10 ${
                  location.pathname === link.path ? 'text-primary' : 'text-ink-black'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/apply"
              className="bg-primary text-on-primary font-label font-bold text-[14px] px-6 py-3 wiggly-border text-center mt-2"
            >
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
