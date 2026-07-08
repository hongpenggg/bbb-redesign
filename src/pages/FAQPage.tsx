import { useEffect, useState } from 'react';
import { HelpCircle, ChevronDown, Users, BookOpen, Shield, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const sections = [
  {
    id: 'about',
    icon: Heart,
    color: 'bg-primary',
    label: 'About Bit by Bit',
    questions: [
      {
        q: 'What is Bit by Bit Coding?',
        a: "Bit by Bit Coding is a free, multi-year coding education programme for Singaporean youth aged 13–18. We provide rigorous, structured coding pathways that go beyond what's typically offered — from Python fundamentals into real industry tools like Flask and SQL, and eventually into C, Java, and robotics.",
      },
      {
        q: 'Why is it free?',
        a: 'Because we believe learning to code is a right, not a privilege. Advanced coding education in Singapore is largely locked behind enrichment fees. We exist to change that — for every young person who wants to learn, regardless of household income or background. You will not be asked to pay a fee. Ever.',
      },
      {
        q: 'Who runs Bit by Bit Coding?',
        a: "We're a student-led team of volunteers — ex- and current computing students, teachers and industry professionals who remember what it felt like to want to learn but not have access.",
      },
    ],
  },
  {
    id: 'bootcamp',
    icon: BookOpen,
    color: 'bg-tertiary',
    label: "March Bootcamp '26",
    questions: [
      {
        q: 'What is the Bootcamp?',
        a: "The Bootcamp is Bit by Bit's in-person, hands-on lesson lasting from three to six hours. It lets prospective students learn more about Bit by Bit and our mission, experience our teaching style and pedagogy, and learn introductory Python.",
      },
      {
        q: "When is Bootcamp '26?",
        a: "This year's Bootcamp was held on 28 March 2026, from 10 am to 1 pm, at CSM Academy International — just a 5-minute walk from Aljunied MRT. Future bootcamps will be announced nearing the date.",
      },
    ],
  },
  {
    id: 'eligibility',
    icon: Users,
    color: 'bg-secondary',
    label: 'Eligibility & Registration',
    questions: [
      {
        q: 'Who can join?',
        a: 'Any youth aged 13–18 residing in Singapore who is passionate about coding, self-directed, and wants to go further than what school covers. No prior experience is required for our introductory Python term — just curiosity and commitment.',
      },
      {
        q: 'Is it really completely free?',
        a: 'Yes. There are no registration fees, no materials fees, and no hidden costs. Ever.',
      },
      {
        q: 'My child is in primary school. Can they join?',
        a: "Not yet — our current programmes are designed for secondary and JC students (ages 13–18). We're working on expanding to younger students in a future term.",
      },
      {
        q: 'How do I sign up?',
        a: "Through our registration form, linked on this website. A parent or guardian must complete the form on behalf of students under 18.",
      },
    ],
  },
  {
    id: 'programme',
    icon: BookOpen,
    color: 'bg-primary-container',
    label: 'The Programme',
    questions: [
      {
        q: 'What will students learn?',
        a: 'Our core covers Python — from fundamentals to building real programmes. Students who complete the taster module progress to subsequent modules covering Python fundamentals, Flask (web development), SQL (databases), and beyond into AI/ML, C, Java, and robotics.',
      },
      {
        q: 'How long is each term?',
        a: 'Each term is around 10-12 weeks, with sessions held on Saturdays.',
      },
      {
        q: 'What device does my child need to bring?',
        a: 'Any personal computing device with a keyboard — a laptop, Chromebook, or iPad with an external keyboard. The venue provides free WiFi.',
      },
      {
        q: 'Will there be homework?',
        a: 'There will be short practice exercises between sessions, designed to take 20–30 minutes. Homework is optional, but we strongly encourage students to complete them.',
      },
    ],
  },
  {
    id: 'safety',
    icon: Shield,
    color: 'bg-surface-dim',
    label: 'Safety & Conduct',
    questions: [
      {
        q: 'Is my child safe?',
        a: "Yes. All BbB tutors and volunteers are required to read and comply with our Child Protection Policy and Code of Conduct before their first session.",
      },
      {
        q: 'What is your photography policy?',
        a: "We may take photographs during sessions for BbB's social media and marketing materials. Photo consent is collected as part of registration.",
      },
    ],
  },
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b-2 border-dashed border-ink-black/10 last:border-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 py-4 text-left group"
      >
        <span className="text-[14px] md:text-[16px] font-label font-bold text-ink-black group-hover:text-primary transition-colors leading-snug">
          {q}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-primary shrink-0 transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      {open && (
        <p className="pb-5 text-[14px] text-on-surface-variant leading-relaxed">
          {a}
        </p>
      )}
    </div>
  );
}

export function FAQPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="flex flex-col">
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 wiggly-border-thin font-label font-bold text-[12px] text-primary uppercase tracking-wider mb-6">
              <HelpCircle className="w-4 h-4" />
              Got Questions?
            </div>
            <h1 className="font-display text-[36px] md:text-[48px] text-ink-black mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-[16px] text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about Bit by Bit Coding, our programmes, and how to get involved.
            </p>
          </div>

          {/* Quick-jump pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {sections.map((s) => {
              const Icon = s.icon;
              return (
                <button
                  key={s.id}
                  onClick={() => scrollToSection(s.id)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-[12px] font-label font-bold bg-surface wiggly-border-thin text-on-surface-variant hover:text-primary hover:border-primary transition-all cursor-pointer"
                >
                  <Icon className="w-3.5 h-3.5" />
                  {s.label}
                </button>
              );
            })}
          </div>

          {/* Sections */}
          <div className="flex flex-col gap-6">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <div
                  key={section.id}
                  id={section.id}
                  className="bg-surface p-8 md:p-10 wiggly-border hard-shadow scroll-mt-28"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-9 h-9 ${section.color} wiggly-border-thin flex items-center justify-center shrink-0`}>
                      <Icon className="w-4 h-4 text-on-primary" />
                    </div>
                    <h2 className="text-[20px] md:text-[24px] font-display font-bold text-ink-black">
                      {section.label}
                    </h2>
                  </div>
                  <div>
                    {section.questions.map((item, i) => (
                      <AccordionItem key={i} q={item.q} a={item.a} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-10 bg-surface-container-low p-8 md:p-10 wiggly-border-thin text-center">
            <h3 className="font-display text-[20px] font-bold text-ink-black mb-2">Still have questions?</h3>
            <p className="text-on-surface-variant text-[14px] mb-6 leading-relaxed">
              Can&apos;t find what you&apos;re looking for? Drop us a message and we&apos;ll get back to you.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-on-primary text-[14px] font-label font-bold wiggly-border hard-shadow-sm hover-wiggle"
              >
                Contact Us
              </Link>
              <a
                href="https://instagram.com/bbbcoding"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-ink-black text-ink-black text-[14px] font-label font-bold wiggly-border hover:bg-surface-container-high transition-colors"
              >
                @bbbcoding
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
