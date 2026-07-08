import { useEffect } from 'react';

export function useTallyEmbed() {
  useEffect(() => {
    const existingScript = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://tally.so/widgets/embed.js';
      script.onload = () => {
        window.Tally?.loadEmbeds();
      };
      document.body.appendChild(script);
    } else {
      window.Tally?.loadEmbeds();
    }
  }, []);
}
