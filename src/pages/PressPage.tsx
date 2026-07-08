import { Newspaper, Download, ExternalLink, FileText, Image, Megaphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const keyFacts = [
  { label: 'Founded', value: 'January 2026' },
  { label: 'Location', value: 'Singapore' },
  { label: 'Students Reached', value: '1,240+' },
  { label: 'Volunteer Tutors', value: '15+' },
  { label: 'Cost to Students', value: 'Free, forever' },
  { label: 'Age Range', value: '13–18 years old' },
];

const assets = [
  {
    icon: FileText,
    title: 'Brand Fact Sheet',
    description: 'Key facts, figures, and mission overview for media use.',
    format: 'PDF',
  },
  {
    icon: Image,
    title: 'Logo Pack',
    description: 'Official Bit by Bit Coding logos in various formats.',
    format: 'ZIP',
  },
  {
    icon: Megaphone,
    title: 'Press Release Template',
    description: 'Template for writing about BbB events and milestones.',
    format: 'DOCX',
  },
];

export function PressPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="flex flex-col items-center text-center gap-4 md:gap-6 py-12 md:py-16 px-4 sm:px-6 max-w-container mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 wiggly-border-thin font-label font-bold text-[12px] text-primary uppercase tracking-wider">
          <Newspaper className="w-4 h-4" />
          Media Resources
        </div>
        <h1 className="font-display text-[28px] sm:text-[36px] md:text-[48px] text-ink-black leading-tight">
          Press & <span className="drawn-underline text-primary">Media</span>
        </h1>
        <p className="text-on-surface-variant text-[16px] md:text-[18px] max-w-2xl leading-relaxed px-2 sm:px-0">
          Resources for journalists, bloggers, and media professionals covering
          Bit by Bit Coding and youth coding education in Singapore.
        </p>
      </section>

      {/* Brand Description */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-surface-container border-y-2 border-ink-black/10">
        <div className="max-w-container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-[24px] md:text-[28px] text-ink-black mb-6 text-center">
              About Bit by Bit Coding
            </h2>
            <div className="bg-surface p-6 md:p-10 wiggly-border hard-shadow">
              <p className="text-on-surface-variant text-[14px] md:text-[16px] leading-relaxed mb-4">
                <strong className="text-ink-black">Bit by Bit Coding</strong> is a
                student-led, volunteer-run non-profit organization based in Singapore
                that provides free, structured, multi-year coding education to youth
                aged 13–18.
              </p>
              <p className="text-on-surface-variant text-[14px] md:text-[16px] leading-relaxed mb-4">
                Founded in January 2026 by a group of passionate computing students,
                BbB offers comprehensive learning pathways from Python fundamentals
                through to advanced topics like AI/ML, C++, and robotics — all at no
                cost to students.
              </p>
              <p className="text-on-surface-variant text-[14px] md:text-[16px] leading-relaxed">
                Our mission is to break down barriers to coding education, making it
                accessible to every young person in Singapore regardless of background
                or household income.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Facts */}
      <section className="py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-container mx-auto">
          <h2 className="font-display text-[24px] md:text-[28px] text-ink-black mb-6 md:mb-8 text-center">
            Key Facts
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-3xl mx-auto">
            {keyFacts.map((fact, i) => (
              <div
                key={i}
                className={`bg-surface p-4 md:p-5 wiggly-border hard-shadow text-center hover-wiggle transform ${
                  i % 3 === 0 ? '-rotate-1' : i % 3 === 2 ? 'rotate-1' : ''
                }`}
              >
                <div className="font-display text-[20px] md:text-[24px] font-bold text-primary mb-1">
                  {fact.value}
                </div>
                <div className="font-label font-bold text-[11px] md:text-[12px] text-on-surface-variant uppercase tracking-wider">
                  {fact.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable Assets */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-surface-container-low border-y-2 border-ink-black/10">
        <div className="max-w-container mx-auto">
          <h2 className="font-display text-[24px] md:text-[28px] text-ink-black mb-6 md:mb-8 text-center">
            Media Kit & Assets
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 max-w-4xl mx-auto">
            {assets.map((asset, i) => (
              <div
                key={i}
                className={`bg-surface p-5 md:p-6 wiggly-border hard-shadow hover-wiggle flex flex-col items-center text-center gap-4 transform ${
                  i % 3 === 0 ? '-rotate-1' : i % 3 === 2 ? 'rotate-1' : ''
                }`}
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-primary-fixed wiggly-border-thin flex items-center justify-center">
                  <asset.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-[15px] md:text-[16px] font-bold text-ink-black mb-1">
                    {asset.title}
                  </h3>
                  <p className="text-on-surface-variant text-[12px] md:text-[13px] leading-relaxed mb-3">
                    {asset.description}
                  </p>
                  <span className="inline-block bg-surface-container-high px-3 py-1 text-[11px] font-label font-bold text-on-surface-variant wiggly-border-thin">
                    {asset.format}
                  </span>
                </div>
                <span className="mt-auto flex items-center gap-2 text-on-surface-variant font-label font-bold text-[12px] md:text-[13px] opacity-60 cursor-not-allowed">
                  <Download className="w-4 h-4" />
                  Coming Soon
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Contact */}
      <section className="py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-container mx-auto">
          <div className="max-w-2xl mx-auto">
            <div className="bg-surface p-6 md:p-10 wiggly-border hard-shadow-lg text-center">
              <h2 className="font-display text-[20px] md:text-[24px] font-bold text-ink-black mb-4">
                Press Contact
              </h2>
              <p className="text-on-surface-variant text-[13px] md:text-[14px] leading-relaxed mb-6 px-2 sm:px-0">
                For media inquiries, interview requests, or to be added to our press
                mailing list, please reach out to us.
              </p>
              <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                <a
                  href="mailto:info@bbbcoding.org"
                  className="inline-flex items-center gap-2 bg-primary text-on-primary font-label font-bold text-[13px] md:text-[14px] px-5 md:px-6 py-2.5 md:py-3 wiggly-border hard-shadow hover-wiggle"
                >
                  Email Us
                </a>
                <a
                  href="https://instagram.com/bbbcoding"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-2 border-ink-black text-ink-black font-label font-bold text-[13px] md:text-[14px] px-5 md:px-6 py-2.5 md:py-3 wiggly-border hover:bg-surface-container-high transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  @bbbcoding
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="pb-12 md:pb-16 px-4 sm:px-6 text-center">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary font-label font-bold text-[13px] md:text-[14px] hover:underline"
        >
          ← Back to Home
        </Link>
      </section>
    </div>
  );
}
