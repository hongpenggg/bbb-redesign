import { Link } from 'react-router-dom';
import { Handshake } from 'lucide-react';
import { mainPartner, keyPartners, supportingPartners, governmentPartners } from '../data/partners';
import type { Partner } from '../data/partners';

function PartnerCard({ partner, featured = false }: { partner: Partner; featured?: boolean }) {
  return (
    <a
      href={partner.website}
      target="_blank"
      rel="noopener noreferrer"
      className={`block bg-surface p-5 md:p-6 wiggly-border hard-shadow hover-wiggle transition-all group ${
        featured ? 'md:col-span-2 lg:col-span-3' : ''
      }`}
    >
      <div className="flex flex-col items-center text-center gap-4">
        <div
          className={`wiggly-border-thin p-2 md:p-3 bg-white overflow-hidden ${
            featured ? 'w-24 h-24 md:w-32 md:h-32' : 'w-16 h-16 md:w-20 md:h-20'
          }`}
        >
          <img
            src={partner.logo}
            alt={partner.name}
            className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
            loading="lazy"
          />
        </div>
        <div>
          <h3
            className={`font-display font-bold text-ink-black mb-1 ${
              featured ? 'text-[20px] md:text-[24px]' : 'text-[14px] md:text-[16px]'
            }`}
          >
            {partner.name}
          </h3>
          <p
            className={`text-on-surface-variant leading-relaxed ${
              featured ? 'text-[13px] md:text-[14px]' : 'text-[11px] md:text-[12px]'
            }`}
          >
            {partner.description}
          </p>
        </div>
      </div>
    </a>
  );
}

export function PartnersPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="flex flex-col items-center text-center gap-4 md:gap-6 py-12 md:py-16 px-4 sm:px-6 max-w-container mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 wiggly-border-thin font-label font-bold text-[12px] text-primary uppercase tracking-wider">
          <Handshake className="w-4 h-4" />
          Our Network
        </div>
        <h1 className="font-display text-[28px] sm:text-[36px] md:text-[48px] text-ink-black leading-tight">
          Our <span className="drawn-underline text-primary">Partners</span>
        </h1>
        <p className="text-on-surface-variant text-[16px] md:text-[18px] max-w-2xl leading-relaxed px-2 sm:px-0">
          We&apos;re proud to collaborate with organizations that share our mission of making
          coding education accessible to every young person in Singapore.
        </p>
      </section>

      {/* Featured Partner */}
      <section className="px-4 sm:px-6 pb-12 md:pb-16 max-w-container mx-auto">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="font-display text-[22px] md:text-[28px] text-ink-black">
            Key Partner
          </h2>
        </div>
        <PartnerCard partner={mainPartner} featured />
      </section>

      {/* Key Partners */}
      <section className="px-4 sm:px-6 pb-12 md:pb-16 max-w-container mx-auto">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="font-display text-[20px] md:text-[24px] text-ink-black">
            Key Partners
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {keyPartners.map((partner, i) => (
            <div
              key={partner.name}
              className={`transform ${i % 3 === 0 ? '-rotate-1' : i % 3 === 2 ? 'rotate-1' : ''}`}
            >
              <PartnerCard partner={partner} />
            </div>
          ))}
        </div>
      </section>

      {/* Supporting Partners */}
      <section className="px-4 sm:px-6 pb-12 md:pb-16 max-w-container mx-auto">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="font-display text-[20px] md:text-[24px] text-ink-black">
            Supporting Partners
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {supportingPartners.map((partner, i) => (
            <div
              key={partner.name}
              className={`transform ${i % 3 === 0 ? 'rotate-1' : i % 3 === 2 ? '-rotate-1' : ''}`}
            >
              <PartnerCard partner={partner} />
            </div>
          ))}
        </div>
      </section>

      {/* Government Partners */}
      <section className="px-4 sm:px-6 pb-12 md:pb-16 max-w-container mx-auto">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="font-display text-[20px] md:text-[24px] text-ink-black">
            Government Partners
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 max-w-3xl mx-auto">
          {governmentPartners.map((partner, i) => (
            <div
              key={partner.name}
              className={`transform ${i % 2 === 0 ? '-rotate-1' : 'rotate-1'}`}
            >
              <PartnerCard partner={partner} />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-container mx-auto">
          <div className="bg-primary-fixed-dim rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 lg:p-16 text-center relative overflow-hidden wiggly-border-thin hard-shadow-lg">
            <div className="absolute -top-6 -left-6 md:-top-8 md:-left-8 w-24 h-24 md:w-32 md:h-32 bg-bit-green organic-blob-1 opacity-40" />
            <div className="absolute -bottom-8 -right-8 md:-bottom-12 md:-right-12 w-32 h-32 md:w-40 md:h-40 bg-primary-container organic-blob-2 opacity-30" />
            <div className="relative z-10 flex flex-col items-center gap-4 md:gap-6 max-w-2xl mx-auto">
              <h2 className="font-display text-[24px] sm:text-[28px] md:text-[32px] text-ink-black">
                Want to Partner With Us?
              </h2>
              <p className="text-on-surface-variant text-[14px] md:text-[16px] leading-relaxed px-2 sm:px-0">
                We&apos;re always looking for organizations that share our vision of accessible
                coding education. Let&apos;s build something meaningful together.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-ink-black text-surface font-label font-bold text-[13px] md:text-[14px] px-6 md:px-8 py-3 md:py-4 wiggly-border hard-shadow-primary hover-wiggle"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
