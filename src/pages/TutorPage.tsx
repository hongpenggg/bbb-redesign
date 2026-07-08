import { Link } from 'react-router-dom';
import { Users, Heart, Star, Code2, Clock, Award } from 'lucide-react';

const benefits = [
  {
    icon: Heart,
    title: 'Make a Real Impact',
    description:
      'Help underprivileged youth gain coding skills that open doors to future opportunities. Every lesson you teach changes a life.',
    color: 'bg-tertiary',
  },
  {
    icon: Users,
    title: 'Join a Community',
    description:
      'Be part of a tight-knit team of passionate tutors, educators, and computing professionals who share your drive.',
    color: 'bg-secondary',
  },
  {
    icon: Code2,
    title: 'Sharpen Your Skills',
    description:
      'Teaching is the best way to learn. Reinforce your own knowledge while developing leadership and communication skills.',
    color: 'bg-primary',
  },
  {
    icon: Award,
    title: 'Build Your Portfolio',
    description:
      'Gain meaningful volunteer experience and references. Great for university applications and future careers.',
    color: 'bg-primary-container',
  },
  {
    icon: Clock,
    title: 'Flexible Commitment',
    description:
      'Sessions are held on Saturdays. We work around your schedule and exam periods.',
    color: 'bg-bit-green text-ink-black',
  },
  {
    icon: Star,
    title: 'Recognition',
    description:
      'Receive certificates of appreciation and public recognition for your contributions to the community.',
    color: 'bg-surface-container-high',
  },
];

const testimonials = [
  {
    quote: "Tutoring at BbB has been one of the most rewarding experiences. Seeing students go from 'I can't code' to building their own projects is incredible.",
    name: 'Brian Lim',
    role: 'VP & Co-Founder',
  },
  {
    quote: "The energy in our sessions is amazing. Students are genuinely excited to learn, and that makes every Saturday worth it.",
    name: 'Pratik Ghosh',
    role: 'Head of Curriculum',
  },
  {
    quote: "I started as a tutor and now I lead our Python curriculum. BbB gave me leadership experience I couldn't have gotten anywhere else.",
    name: 'Yixiang Fan',
    role: 'Head of Python',
  },
];

export function TutorPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="flex flex-col items-center text-center gap-6 py-16 px-6 max-w-container mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 wiggly-border-thin font-label font-bold text-[12px] text-primary uppercase tracking-wider">
          <Users className="w-4 h-4" />
          Join Our Team
        </div>
        <h1 className="font-display text-[36px] md:text-[48px] text-ink-black leading-tight">
          Tutor With <span className="drawn-underline text-primary">Us</span>
        </h1>
        <p className="text-on-surface-variant text-[18px] max-w-2xl leading-relaxed">
          Share your passion for coding with the next generation. No teaching experience required —
          just enthusiasm and a willingness to make a difference.
        </p>
        <a
          href="https://tally.so/r/rjLWOv"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary text-on-primary font-label font-bold text-[14px] px-8 py-4 wiggly-border hard-shadow hover-wiggle mt-4"
        >
          Apply to Tutor
        </a>
      </section>

      {/* Why Tutor */}
      <section className="py-16 px-6 bg-surface-container border-y-2 border-ink-black/10">
        <div className="max-w-container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-[28px] md:text-[32px] text-ink-black">
              Why Tutor With Us?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className={`bg-surface p-8 wiggly-border hard-shadow hover-wiggle flex flex-col gap-4 transform ${
                  i % 3 === 0 ? '-rotate-1' : i % 3 === 2 ? 'rotate-1' : ''
                }`}
              >
                <div
                  className={`w-12 h-12 ${benefit.color} wiggly-border-thin flex items-center justify-center`}
                >
                  <benefit.icon className="w-6 h-6 text-on-primary" />
                </div>
                <h3 className="font-display text-[18px] font-bold text-ink-black">
                  {benefit.title}
                </h3>
                <p className="text-on-surface-variant text-[14px] leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 px-6">
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-display text-[28px] text-ink-black mb-6">
                What We&apos;re Looking For
              </h2>
              <ul className="space-y-4">
                {[
                  'Passion for coding and teaching',
                  'Patience and empathy for beginners',
                  'Reliability — commit to at least one term',
                  'No formal teaching experience needed',
                  'Currently studying or working in a tech-related field',
                  'Based in Singapore (sessions are in-person)',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-bit-green wiggly-border-thin flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-ink-black font-bold text-[12px]">✓</span>
                    </div>
                    <span className="text-on-surface-variant text-[15px] leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-surface p-8 wiggly-border hard-shadow-primary">
              <h3 className="font-display text-[22px] font-bold text-ink-black mb-4">
                Time Commitment
              </h3>
              <div className="space-y-4 text-on-surface-variant text-[14px] leading-relaxed">
                <p>
                  <strong className="text-ink-black">Sessions:</strong> Saturdays, approximately 2-3 hours per session
                </p>
                <p>
                  <strong className="text-ink-black">Term length:</strong> 10-12 weeks per term
                </p>
                <p>
                  <strong className="text-ink-black">Prep time:</strong> 1-2 hours per week for lesson preparation
                </p>
                <p>
                  <strong className="text-ink-black">Team meetings:</strong> Monthly team sync (virtual or in-person)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-surface-container-low border-y-2 border-ink-black/10">
        <div className="max-w-container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-[28px] text-ink-black">
              From Our Tutors
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`bg-surface p-8 wiggly-border hard-shadow hover-wiggle transform ${
                  i % 3 === 0 ? '-rotate-1' : i % 3 === 2 ? 'rotate-1' : ''
                }`}
              >
                <p className="text-on-surface-variant text-[14px] leading-relaxed italic mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="border-t-2 border-dashed border-ink-black/10 pt-4">
                  <p className="font-display text-[14px] font-bold text-ink-black">{t.name}</p>
                  <p className="text-primary text-[12px] font-label font-bold">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-container mx-auto">
          <div className="bg-primary-fixed-dim rounded-[3rem] p-12 md:p-16 text-center relative overflow-hidden wiggly-border-thin hard-shadow-lg">
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-bit-green organic-blob-1 opacity-40" />
            <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-primary-container organic-blob-2 opacity-30" />
            <div className="relative z-10 flex flex-col items-center gap-6 max-w-2xl mx-auto">
              <h2 className="font-display text-[32px] text-ink-black">
                Ready to Make a Difference?
              </h2>
              <p className="text-on-surface-variant text-[16px] leading-relaxed">
                Join our team of passionate tutors and help shape the future of coding
                education in Singapore.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://tally.so/r/rjLWOv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-on-primary font-label font-bold text-[14px] px-8 py-4 wiggly-border hard-shadow hover-wiggle"
                >
                  Apply Now
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 border-2 border-ink-black text-ink-black font-label font-bold text-[14px] px-8 py-4 wiggly-border hover:bg-surface-container-high transition-colors"
                >
                  Questions? Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
