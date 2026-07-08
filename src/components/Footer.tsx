import { Link } from 'react-router-dom';
import { Code2, Instagram, Github, Linkedin, Twitter } from 'lucide-react';

const footerLinks = [
  {
    title: 'Programs',
    links: [
      { label: 'Pathways', path: '/pathways' },
      { label: 'Apply', path: '/apply' },
      { label: 'Tutor', path: '/tutor' },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'Team', path: '/team' },
      { label: 'Partners', path: '/partners' },
      { label: 'Blog', path: '/blog' },
      { label: 'Gallery', path: '/gallery' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'FAQ', path: '/faq' },
      { label: 'Press', path: '/press' },
      { label: 'Contact', path: '/contact' },
      { label: 'Impact', path: '/impact' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-surface-container border-t-2 border-ink-black mt-auto">
      <div className="max-w-container mx-auto px-4 sm:px-6 py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 font-display text-headline-md font-bold text-ink-black">
              <Code2 className="w-5 h-5 text-primary" />
              Bit by Bit Coding
            </Link>
            <p className="text-on-surface-variant text-[13px] md:text-[14px] leading-relaxed">
              Opening the doors to coding education for every youth, bit by bit.
            </p>
            <div className="flex gap-3 mt-2">
              <a
                href="https://instagram.com/bbbcoding"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 md:w-10 md:h-10 wiggly-border hard-shadow-sm flex items-center justify-center text-ink-black hover:text-primary hover-wiggle transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 md:w-4 md:h-4" />
              </a>
              <a
                href="https://github.com/bitbybitcoding"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 md:w-10 md:h-10 wiggly-border hard-shadow-sm flex items-center justify-center text-ink-black hover:text-primary hover-wiggle transition-colors"
              >
                <Github className="w-3.5 h-3.5 md:w-4 md:h-4" />
              </a>
              <a
                href="https://linkedin.com/company/bitbybitcoding"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 md:w-10 md:h-10 wiggly-border hard-shadow-sm flex items-center justify-center text-ink-black hover:text-primary hover-wiggle transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 md:w-4 md:h-4" />
              </a>
              <a
                href="https://twitter.com/bbbcoding"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 md:w-10 md:h-10 wiggly-border hard-shadow-sm flex items-center justify-center text-ink-black hover:text-primary hover-wiggle transition-colors"
              >
                <Twitter className="w-3.5 h-3.5 md:w-4 md:h-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="font-display font-bold text-ink-black mb-4 text-[16px] md:text-[18px]">{col.title}</h4>
              <ul className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-on-surface-variant text-[13px] md:text-[14px] hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-10 md:mt-12 pt-5 md:pt-6 border-t-2 border-ink-black/10 flex flex-col sm:flex-row justify-between items-center gap-3 md:gap-4">
          <p className="text-on-surface-variant text-[11px] md:text-[12px] text-center sm:text-left">
            &copy; {new Date().getFullYear()} Bit by Bit Coding. Built bit by bit.
          </p>
          <p className="text-on-surface-variant text-[11px] md:text-[12px] text-center sm:text-right">
            A student-led non-profit &middot; Based in Singapore
          </p>
        </div>
      </div>
    </footer>
  );
}
