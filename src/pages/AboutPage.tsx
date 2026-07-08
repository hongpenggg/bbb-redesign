import { Link } from 'react-router-dom';
import { Puzzle, Brush, Users, ArrowRight, Sparkles } from 'lucide-react';

const assetBase = 'https://raw.githubusercontent.com/bitbybitcoding/web/main/.github/assets';

export function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center px-4 sm:px-6 py-12 md:py-16 lg:py-24 max-w-container mx-auto">
        <div className="lg:col-span-5 lg:col-start-2 flex flex-col gap-5 md:gap-6 z-10">
          <h1 className="font-display text-[28px] sm:text-[36px] md:text-[44px] lg:text-[48px] leading-tight text-ink-black">
            We believe in <span className="drawn-underline text-primary">curiosity</span> without intimidation.
          </h1>
          <p className="text-on-surface-variant text-[16px] md:text-[18px] leading-relaxed">
            Coding doesn&apos;t have to be a walled garden. Our story began with a simple sketch: what if we built understanding
            block by block, organically, just like human ideas form?
          </p>
          <div className="mt-2 md:mt-4 flex gap-3 md:gap-4 flex-wrap">
            <span className="bg-bit-green text-ink-black font-label font-bold px-3 md:px-4 py-1.5 md:py-2 organic-blob-1 border-2 border-ink-black transform -rotate-2 text-[12px] md:text-[14px]">
              Curious
            </span>
            <span className="bg-primary-fixed text-primary font-label font-bold px-3 md:px-4 py-1.5 md:py-2 organic-blob-2 border-2 border-ink-black transform rotate-2 text-[12px] md:text-[14px]">
              Approachable
            </span>
          </div>
        </div>
        <div className="lg:col-span-5 relative group">
          <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 text-primary animate-float opacity-80">
            <svg fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="32" className="md:w-10 md:h-10">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </div>
          <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 text-tertiary-container z-20">
            <svg fill="none" height="40" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="40" className="md:w-12 md:h-12">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </div>
          <div className="relative bg-surface p-2 md:p-3 wiggly-border hard-shadow transform rotate-1 transition-transform duration-500 hover:rotate-0">
            <img
              alt="Suki teaching at whiteboard"
              className="w-full h-auto object-cover wiggly-border-thin"
              src={`${assetBase}/suki_teaching_whiteboard.jpeg`}
            />
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-14 md:py-20 relative bg-surface-container-low border-y-2 border-ink-black/10">
        <div className="max-w-container mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
          <div className="md:col-span-4">
            <h2 className="font-display text-[24px] md:text-headline-lg text-ink-black mb-4">The Bit by Bit Philosophy</h2>
            <div className="w-16 h-2 bg-primary rounded-full organic-blob-1 mb-6" />
          </div>
          <div className="md:col-span-7 text-on-surface-variant text-[16px] md:text-[18px] leading-relaxed flex flex-col gap-4 md:gap-6">
            <p>
              We founded this space because the traditional tech landscape often felt cold, rigid, and exclusive.
              We wanted to create a learning environment that felt more like a community art studio than a sterile lecture hall.
            </p>
            <p>
              Every complex algorithm, every grand architecture, starts as a simple thought. By breaking things down into
              &apos;bits&apos; — manageable, relatable, and tangible concepts — we empower learners to build their own creative solutions.
            </p>
            <p className="font-display text-[18px] md:text-headline-md text-primary italic border-l-4 border-bit-green pl-4 mt-2 md:mt-4">
              &ldquo;We teach you the grammar, so you can write the poetry.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Why We Teach Bento Grid */}
      <section className="py-14 md:py-20">
        <div className="max-w-container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-display text-[24px] md:text-headline-lg text-ink-black relative inline-block">
              Why We Teach
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-bit-green wiggly-border-thin" />
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            <div className="bg-surface p-6 md:p-8 wiggly-border hard-shadow hover-wiggle transform -rotate-1 flex flex-col gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary border-2 border-ink-black">
                <Puzzle className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <h3 className="font-display text-headline-md text-ink-black">Foundation First</h3>
              <p className="text-on-surface-variant text-[13px] md:text-[14px] leading-relaxed">
                We prioritize deep understanding over rote memorization. Master the building blocks, and the rest follows naturally.
              </p>
            </div>
            <div className="bg-surface-container-low p-6 md:p-8 wiggly-border hard-shadow-primary hover-wiggle transform md:translate-y-4 flex flex-col gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary border-2 border-ink-black">
                <Brush className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <h3 className="font-display text-headline-md text-ink-black">Creative Expression</h3>
              <p className="text-on-surface-variant text-[13px] md:text-[14px] leading-relaxed">
                Code is just another medium for creativity. We encourage experimentation, mistakes, and &apos;happy accidents&apos; in logic.
              </p>
            </div>
            <div className="bg-surface p-6 md:p-8 wiggly-border hard-shadow hover-wiggle transform rotate-1 flex flex-col gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-error-container flex items-center justify-center text-error border-2 border-ink-black">
                <Users className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <h3 className="font-display text-headline-md text-ink-black">Human Connection</h3>
              <p className="text-on-surface-variant text-[13px] md:text-[14px] leading-relaxed">
                Learning is social. Our community is built on mutual support, shared curiosity, and celebrating small wins together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 md:py-20 px-4 sm:px-6">
        <div className="max-w-container mx-auto">
          <div className="bg-primary-fixed-dim rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 lg:p-20 text-center relative overflow-hidden wiggly-border-thin shadow-hard-lg">
            <div className="absolute -top-8 -left-8 md:-top-12 md:-left-12 w-24 h-24 md:w-32 md:h-32 bg-bit-green organic-blob-1 opacity-50" />
            <div className="absolute -bottom-10 -right-10 md:-bottom-16 md:-right-16 w-36 h-36 md:w-48 md:h-48 bg-primary-container organic-blob-2 opacity-30" />
            <div className="relative z-10 flex flex-col items-center gap-4 md:gap-6 max-w-2xl mx-auto">
              <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-primary animate-float" />
              <h2 className="font-display text-[28px] sm:text-[36px] md:text-[44px] lg:text-[48px] text-ink-black">
                Ready to build your first bit?
              </h2>
              <p className="text-on-surface-variant text-[16px] md:text-[18px] leading-relaxed">
                Join our welcoming community of curious minds and start your journey today.
              </p>
              <Link
                to="/apply"
                className="bg-ink-black text-surface-bright font-label font-bold text-[13px] md:text-[14px] px-6 md:px-8 py-3 md:py-4 wiggly-border hard-shadow-primary hover-wiggle flex items-center gap-2"
              >
                Join the Community
                <ArrowRight className="w-4 h-4 text-bit-green" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
