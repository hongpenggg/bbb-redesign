import { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Sparkles } from 'lucide-react';

export function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-primary text-on-primary relative z-50">
      <div className="max-w-container mx-auto px-6 py-3 flex items-center justify-center gap-3 text-[14px] font-label font-bold">
        <Sparkles className="w-4 h-4 text-bit-green flex-shrink-0" />
        <span className="text-center">
          🎉 Second 12-week Python course sign-ups are open!{' '}
          <Link to="/apply" className="underline text-bit-green hover:text-bit-green/80 ml-1">
            Register now →
          </Link>
        </span>
        <button
          onClick={() => setVisible(false)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-on-primary/70 hover:text-on-primary transition-colors"
          aria-label="Close announcement"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
