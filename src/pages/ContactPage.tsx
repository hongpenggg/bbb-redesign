import { useEffect } from 'react';
import { Mail, MessageSquare, Phone } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    description: 'We typically respond within 24 hours',
    detail: 'info@bbbcoding.org',
    color: 'bg-primary',
  },
  {
    icon: MessageSquare,
    title: 'Chat with Us',
    description: "Fill out the form and we'll get back to you",
    detail: 'Quick response time',
    color: 'bg-secondary',
  },
  {
    icon: Phone,
    title: 'General Inquiries',
    description: 'Questions about programmes, volunteering, or partnerships',
    detail: "We're here to help",
    color: 'bg-tertiary',
  },
];

export function ContactPage() {
  useEffect(() => {
    const existingScript = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://tally.so/widgets/embed.js';
      script.async = true;
      script.onload = () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const w = window as any;
        if (w.Tally?.loadEmbeds) {
          w.Tally.loadEmbeds();
        }
      };
      document.body.appendChild(script);
    } else {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const w = window as any;
      if (w.Tally?.loadEmbeds) {
        w.Tally.loadEmbeds();
      }
    }
  }, []);

  return (
    <div className="flex flex-col">
      <section className="py-16 px-6">
        <div className="max-w-container mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 wiggly-border-thin font-label font-bold text-[12px] text-primary uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
              Get in Touch
            </div>
            <h1 className="font-display text-[36px] md:text-[48px] text-ink-black mb-6">
              Contact Us
            </h1>
            <p className="text-[16px] text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              Have questions about our programs? Want to volunteer? Looking to partner with us? We&apos;d love to hear from you.
            </p>
          </div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contactInfo.map((info, i) => (
              <div
                key={i}
                className={`bg-surface p-6 wiggly-border hard-shadow hover-wiggle text-center transform ${
                  i % 3 === 0 ? '-rotate-1' : i % 3 === 2 ? 'rotate-1' : ''
                }`}
              >
                <div className={`w-16 h-16 ${info.color} wiggly-border-thin flex items-center justify-center mx-auto mb-4`}>
                  <info.icon className="w-8 h-8 text-on-primary" />
                </div>
                <h3 className="font-display text-[18px] font-bold mb-2 text-ink-black">{info.title}</h3>
                <p className="text-[13px] text-on-surface-variant mb-2">{info.description}</p>
                <p className="text-[13px] font-label font-bold text-primary">{info.detail}</p>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="bg-surface wiggly-border hard-shadow-lg overflow-hidden">
            <div className="grid lg:grid-cols-12">
              {/* Form Side */}
              <div className="lg:col-span-7 p-8 md:p-12 bg-surface">
                <div className="mb-6">
                  <h2 className="text-[28px] md:text-[32px] font-display font-bold mb-3 text-ink-black">
                    Drop Us a Message
                  </h2>
                  <p className="text-on-surface-variant text-[14px]">
                    Fill out the form below and we&apos;ll get back to you as soon as possible.
                  </p>
                </div>
                <div className="flex-grow">
                  <iframe
                    data-tally-src="https://tally.so/embed/Y5Z2r5?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&formEventsForwarding=1"
                    loading="lazy"
                    width="100%"
                    height="842"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                    title="Bit by Bit Coding — Contact"
                    className="w-full"
                  />
                </div>
              </div>

              {/* Info Side */}
              <div className="lg:col-span-5 bg-gradient-to-br from-primary to-primary-container p-8 lg:p-12 flex flex-col justify-between relative overflow-hidden text-white">
                <div className="absolute inset-0 bg-primary-container/30 pointer-events-none" />
                <div className="relative z-10">
                  <h3 className="text-[24px] md:text-[28px] font-display font-bold mb-6">
                    Why Reach Out?
                  </h3>
                  <div className="space-y-6">
                    {[
                      { heading: 'For Parents & Students', body: 'Learn more about our programs, application process, and upcoming cohorts.' },
                      { heading: 'For Volunteers', body: "Interested in mentoring or contributing? We'd love to have you on board." },
                      { heading: 'For Partners', body: 'Explore collaboration opportunities and how we can work together.' },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="w-2 h-2 rounded-full bg-white mt-2 shrink-0" />
                        <div>
                          <h4 className="font-bold text-white text-[16px] mb-1">{item.heading}</h4>
                          <p className="text-[13px] text-white/80 leading-relaxed">{item.body}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative z-10 mt-8">
                  <div className="bg-white/10 border border-white/30 p-6 wiggly-border-thin">
                    <p className="text-[13px] text-white/90 leading-relaxed italic">
                      &ldquo;Bit by Bit isn&apos;t just about coding — it&apos;s about building a community of young innovators who will shape Singapore&apos;s future.&rdquo;
                    </p>
                    <p className="text-[12px] text-white/70 mt-3 font-bold">— The Bit by Bit Team</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
