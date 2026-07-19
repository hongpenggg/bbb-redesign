import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Users,
  GraduationCap,
  Heart,
  Star,
  Quote,
  Sparkles,
  BookOpen,
  Cpu,
  Hash,
} from 'lucide-react';

const stats = [
  { number: '80%', label: 'First-time coders', icon: Users },
  { number: '100%', label: 'Increased confidence', icon: Heart },
  { number: '87%', label: 'Want to continue', icon: Star },
  { number: '93%', label: 'More likely to pursue coding', icon: GraduationCap },
];

const testimonials = [
  {
    quote: 'I feel more confident and less intimidated by coding.',
    author: 'Student, March 2026 Cohort',
  },
  {
    quote: 'I went from no knowledge to actually being able to code something simple.',
    author: 'Student, April 2026 Cohort',
  },
  {
    quote: 'The tutors were very friendly and helpful! They were very welcoming and clear in explaining.',
    author: 'Student, March 2026 Cohort',
  },
  {
    quote: 'It really helped build my foundation in Python and the basic concepts. The practice questions provided the means for me to apply these concepts into actual questions.',
    author: 'Student, April 2026 Cohort',
  },
  {
    quote: 'It is a great way to start learning code with zero background. The tutors are really dedicated and patient in helping us. They always ensure that everyone in the class understands what they are explaining.',
    author: 'Student, April 2026 Cohort',
  },
  {
    quote: 'Compared to self-learning, learning under the guidance of an experienced mentor with a structured roadmap helps me to stay on the right track.',
    author: 'Student, April 2026 Cohort',
  },
];

const pathways = [
  {
    title: 'Python Core',
    description: 'From first line of code to building real apps. A structured, multi-phase pathway.',
    icon: BookOpen,
    status: 'Accepting',
    statusColor: 'bg-bit-green text-ink-black',
    color: 'bg-primary',
  },
  {
    title: 'AI & Machine Learning',
    description: 'Explore machine learning concepts, train models, and build intelligent applications.',
    icon: Cpu,
    status: 'Coming Soon',
    statusColor: 'bg-surface-container-high text-on-surface-variant',
    color: 'bg-secondary',
  },
  {
    title: 'C++ & Algorithms',
    description: 'Master data structures, algorithms, and computational thinking.',
    icon: Hash,
    status: 'Coming Soon',
    statusColor: 'bg-surface-container-high text-on-surface-variant',
    color: 'bg-tertiary',
  },
];

const partnerLogos = [
  'BAGUS Together', '*SCAPE', 'SGPO', 'Educado SDC', 'VJC',
  'Stick\'Em', 'CSM Academy', 'Soristic', 'WeWork', 'Dibs',
  'Club Rainbow', 'NVPC', 'Temasek Foundation', 'Tote Board',
];

const assetBase = '/assets';

export function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center px-4 sm:px-6 py-12 md:py-16 lg:py-24 max-w-container mx-auto">
        {/* Floating blob decoration */}
        <div className="absolute top-32 right-10 w-48 h-48 md:w-64 md:h-64 bg-bit-green/20 organic-blob-1 animate-float pointer-events-none hidden lg:block" />

        <div className="lg:col-span-5 lg:col-start-2 flex flex-col gap-5 md:gap-6 z-10">
          <h1 className="font-display text-[28px] sm:text-[36px] md:text-[44px] lg:text-[48px] leading-tight text-ink-black">
            Opening the doors of coding education for{' '}
            <span className="drawn-underline text-primary">every youth</span>.
          </h1>
          <p className="text-on-surface-variant text-[16px] md:text-[18px] leading-relaxed">
            Free, structured, multi-year coding pathways for youths aged 13–22. We believe learning to code is a right, not a privilege.
          </p>
          <div className="mt-1 md:mt-2 flex flex-wrap gap-3 md:gap-4">
            <span className="bg-bit-green text-ink-black font-label font-bold px-3 md:px-4 py-1.5 md:py-2 organic-blob-1 border-2 border-ink-black transform -rotate-2 text-[12px] md:text-[14px]">
              Free Forever
            </span>
            <span className="bg-primary-fixed text-primary font-label font-bold px-3 md:px-4 py-1.5 md:py-2 organic-blob-2 border-2 border-ink-black transform rotate-2 text-[12px] md:text-[14px]">
              100% Volunteer Run
            </span>
            <span className="bg-surface-container text-on-surface font-label font-bold px-3 md:px-4 py-1.5 md:py-2 organic-blob-1 border-2 border-ink-black transform -rotate-1 text-[12px] md:text-[14px]">
              Based in SG 🇸🇬
            </span>
          </div>
          <div className="flex flex-wrap gap-3 md:gap-4 mt-2 md:mt-4">
            <Link
              to="/apply"
              className="bg-primary text-on-primary font-label font-bold text-[13px] md:text-[14px] px-6 md:px-8 py-3 md:py-4 wiggly-border hard-shadow hover-wiggle flex items-center gap-2"
            >
              Apply Now
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/pathways"
              className="bg-surface border-2 border-ink-black text-ink-black font-label font-bold text-[13px] md:text-[14px] px-6 md:px-8 py-3 md:py-4 wiggly-border hard-shadow hover-wiggle flex items-center gap-2"
            >
              Explore Pathways
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 text-primary animate-float">
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
              alt="Bit by Bit Coding session"
              className="w-full h-auto object-cover wiggly-border-thin"
              src={`${assetBase}/bootcamp_photo.webp`}
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-surface-container border-y-2 border-ink-black py-12 md:py-16">
        <div className="max-w-container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-display text-[24px] md:text-headline-lg text-ink-black">
              April-June 2026 Cohort Impact
            </h2>
            <p className="text-on-surface-variant text-[13px] md:text-[14px] mt-2">n=15 students surveyed</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`bg-surface p-4 md:p-6 wiggly-border hard-shadow text-center hover-wiggle transform ${
                  i % 2 === 0 ? '-rotate-1' : 'rotate-1'
                }`}
              >
                <stat.icon className="w-7 h-7 md:w-8 md:h-8 text-primary mx-auto mb-2 md:mb-3" />
                <div className="font-display text-[28px] sm:text-[32px] md:text-[36px] font-bold text-ink-black mb-1">{stat.number}</div>
                <div className="text-on-surface-variant text-[12px] md:text-[13px] font-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-14 md:py-20 relative">
        <div className="max-w-container mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="flex flex-col gap-4 md:gap-6">
            <h2 className="font-display text-[24px] md:text-headline-lg text-ink-black">
              Our Mission
            </h2>
            <div className="w-16 h-2 bg-bit-green rounded-full organic-blob-1" />
            <p className="text-on-surface-variant text-[16px] md:text-[18px] leading-relaxed">
              We founded this space because the traditional tech landscape often felt cold, rigid, and exclusive.
              We wanted to create a learning environment that felt more like a community art studio than a sterile lecture hall.
            </p>
            <p className="text-on-surface-variant text-[16px] md:text-[18px] leading-relaxed">
              Every complex algorithm, every grand architecture, starts as a simple thought. By breaking things down
              into &apos;bits&apos; — manageable, relatable, and tangible concepts — we empower learners to build their own solutions.
            </p>
            <p className="font-display text-[18px] md:text-headline-md text-primary italic border-l-4 border-bit-green pl-4 mt-2 md:mt-4">
              &ldquo;We teach you the grammar, so you can write the poetry.&rdquo;
            </p>
          </div>
          <div className="relative">
            <div className="bg-surface p-3 md:p-4 wiggly-border hard-shadow transform -rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                alt="Students learning to code"
                className="w-full h-auto object-cover wiggly-border-thin"
                src={`${assetBase}/wework_class_brianteaching_term1.webp`}
              />
            </div>
            <div className="absolute -top-4 -right-4 w-16 h-16 md:w-20 md:h-20 bg-bit-green organic-blob-2 -z-10" />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-14 md:py-20 bg-surface-container-low border-y-2 border-ink-black/10">
        <div className="max-w-container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-display text-[24px] md:text-headline-lg text-ink-black relative inline-block">
              What Students Say
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-bit-green wiggly-border-thin" />
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`bg-surface p-6 md:p-8 wiggly-border hard-shadow hover-wiggle transform ${
                  i % 2 === 0 ? 'rotate-1' : '-rotate-1'
                }`}
              >
                <Quote className="w-7 h-7 md:w-8 md:h-8 text-primary/30 mb-4" />
                <p className="text-on-surface text-[14px] md:text-[16px] leading-relaxed italic mb-4">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="text-on-surface-variant text-[12px] md:text-[13px] font-label font-bold">— {t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pathways Preview */}
      <section className="py-14 md:py-20">
        <div className="max-w-container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-display text-[24px] md:text-headline-lg text-ink-black">
              Learning Pathways
            </h2>
            <p className="text-on-surface-variant text-[14px] md:text-[16px] mt-3 max-w-2xl mx-auto">
              Structured pathways from Python basics to advanced AI/ML. A clear roadmap for every young coder.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {pathways.map((p, i) => (
              <div
                key={i}
                className={`bg-surface p-6 md:p-8 wiggly-border hard-shadow hover-wiggle transform ${
                  i === 0 ? '-rotate-1' : i === 2 ? 'rotate-1' : ''
                }`}
              >
                <div className={`w-10 h-10 md:w-12 md:h-12 ${p.color} wiggly-border-thin flex items-center justify-center mb-4`}>
                  <p.icon className="w-5 h-5 md:w-6 md:h-6 text-on-primary" />
                </div>
                <h3 className="font-display text-headline-md text-ink-black mb-2">{p.title}</h3>
                <span className={`inline-block text-[11px] md:text-[12px] font-label font-bold px-3 py-1 wiggly-border-thin mb-4 ${p.statusColor}`}>
                  {p.status}
                </span>
                <p className="text-on-surface-variant text-[13px] md:text-[14px] leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 md:mt-10">
            <Link
              to="/pathways"
              className="inline-flex items-center gap-2 text-primary font-label font-bold hover:underline text-[13px] md:text-[14px]"
            >
              View all pathways <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Wall */}
      <section className="py-12 md:py-16 bg-surface-container-low border-y-2 border-ink-black/10">
        <div className="max-w-container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="font-display text-[24px] md:text-headline-lg text-ink-black">Our Partners</h2>
            <p className="text-on-surface-variant text-[13px] md:text-[14px] mt-2">
              Organizations that share our mission of accessible coding education.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {partnerLogos.map((name, i) => (
              <div
                key={i}
                className="bg-surface px-4 md:px-6 py-2.5 md:py-3 wiggly-border-thin hard-shadow-sm text-ink-black font-label font-bold text-[12px] md:text-[13px] hover-wiggle"
              >
                {name}
              </div>
            ))}
          </div>
          <div className="text-center mt-6 md:mt-8">
            <Link
              to="/partners"
              className="inline-flex items-center gap-2 text-primary font-label font-bold hover:underline text-[13px] md:text-[14px]"
            >
              View all partners <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 md:py-20">
        <div className="max-w-container mx-auto px-4 sm:px-6">
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
                No prior experience required — just a willingness to learn.
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
