import { useState, useEffect } from 'react';
import { Cookie } from 'lucide-react';

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('bbb-cookie-consent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('bbb-cookie-consent', 'accepted');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-[400px] z-50">
      <div className="bg-surface border-2 border-ink-black wiggly-border hard-shadow p-6">
        <div className="flex items-start gap-3 mb-4">
          <Cookie className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-display font-bold text-ink-black text-[16px] mb-1">Cookie Policy</h4>
            <p className="text-on-surface-variant text-[13px] leading-relaxed">
              We use essential cookies to make our site work. No tracking or analytics — just a smooth experience for you.
            </p>
          </div>
        </div>
        <button
          onClick={handleAccept}
          className="w-full bg-primary text-on-primary font-label font-bold text-[14px] px-6 py-3 wiggly-border hard-shadow-sm hover-wiggle transition-all"
        >
          Got it!
        </button>
      </div>
    </div>
  );
}
