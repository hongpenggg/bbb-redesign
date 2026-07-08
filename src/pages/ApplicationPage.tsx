import { HeartHandshake, Route, Users, Info } from 'lucide-react';
import { useTallyEmbed } from '../hooks/useTallyEmbed';

const benefits = [
  {
    icon: HeartHandshake,
    title: '100% Free & Non-Profit',
    description: 'We believe quality coding education should be accessible to everyone, regardless of background.',
  },
  {
    icon: Route,
    title: 'Structured Pathways',
    description: 'From Python basics to advanced Flask web apps and SQL databases. A clear roadmap for growth.',
  },
  {
    icon: Users,
    title: 'Knowledgeable Tutors',
    description: 'Learn directly from experienced Singapore-based programmers, industry experts and passionate senior students.',
  },
];

export function ApplicationPage() {
  useTallyEmbed();

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow flex items-center justify-center p-3 sm:p-4 md:p-8 lg:p-12">
        <div className="w-full max-w-6xl min-h-[500px] md:min-h-[650px] bg-surface wiggly-border hard-shadow-lg grid grid-cols-1 lg:grid-cols-12 overflow-hidden relative">
          {/* Left Column - Tally Form */}
          <div className="lg:col-span-7 p-4 sm:p-6 md:p-10 lg:p-12 flex flex-col relative bg-surface">
            <div className="mb-4 md:mb-6">
              <h1 className="text-[24px] sm:text-[28px] md:text-[36px] lg:text-[48px] font-display font-bold mb-2 md:mb-3 text-ink-black tracking-tight leading-tight">
                Start Your Journey
              </h1>
              <p className="text-on-surface-variant text-[14px] md:text-[16px]">
                Join our community of young developers in Singapore.
              </p>
            </div>
            <div className="flex-grow bg-surface-container-low rounded wiggly-border-thin p-3 md:p-4">
              <iframe
                data-tally-src="https://tally.so/embed/rjLWOv?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&formEventsForwarding=1"
                loading="lazy"
                width="100%"
                height="1950"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="Bit by Bit Coding Term 2 — Register"
                className="w-full h-[1400px] md:h-[1950px]"
              />
            </div>
            <div className="absolute top-0 right-0 w-28 h-28 md:w-40 md:h-40 bg-primary/5 organic-blob-1 pointer-events-none" />
          </div>

          {/* Right Column - Benefits */}
          <div className="lg:col-span-5 bg-gradient-to-br from-primary to-primary-container p-6 md:p-10 lg:p-12 flex flex-col justify-between relative overflow-hidden text-white">
            <div className="absolute inset-0 bg-primary-container/30 pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-[20px] md:text-[24px] lg:text-[28px] font-display font-bold mb-6 md:mb-8">
                Why Join Bit by Bit?
              </h2>
              <div className="space-y-4 md:space-y-5">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex gap-4 md:gap-5 p-4 md:p-5 bg-white/10 wiggly-border-thin hover:bg-white/15 transition-colors">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 wiggly-border-thin flex items-center justify-center shrink-0">
                      <benefit.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-[14px] md:text-[16px] font-display">{benefit.title}</h3>
                      <p className="text-[12px] md:text-[13px] text-white/80 mt-1 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative z-10 mt-6 md:mt-8">
              <div className="bg-white/10 border border-white/30 p-4 md:p-6 wiggly-border-thin">
                <h4 className="text-white font-bold text-[11px] md:text-[12px] mb-2 uppercase tracking-wider flex items-center gap-2">
                  <Info className="w-4 h-4" />
                  Upcoming Intake
                </h4>
                <p className="text-[12px] md:text-[13px] text-white/90 leading-relaxed">
                  Our next Python cohort starts{' '}
                  <span className="text-white font-bold border-b border-white/50">July 18th</span>.
                  Slots are limited to ensure quality mentorship ratios.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
