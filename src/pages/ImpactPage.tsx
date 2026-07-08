import { Users, Heart, Star, GraduationCap, Target, Award, TrendingUp, BookOpen } from 'lucide-react';

const impactStats = [
  { number: '75%', label: 'First-time coders', description: 'Of our March 2026 cohort had never coded before', icon: Users, color: 'bg-primary' },
  { number: '100%', label: 'Increased confidence', description: 'Every student reported more confidence in coding', icon: Heart, color: 'bg-tertiary' },
  { number: '85%', label: 'Want to continue', description: 'Of students want to continue with BbB', icon: Star, color: 'bg-bit-green text-ink-black' },
  { number: '100%', label: 'More likely to pursue coding', description: 'Students more likely to pursue coding pathways', icon: Target, color: 'bg-secondary' },
  { number: '90%', label: 'Rated lessons clear', description: 'Found lessons clear or very clear', icon: BookOpen, color: 'bg-primary-container' },
  { number: '95%', label: 'Found pedagogy valuable', description: 'Found micro-challenge pedagogy valuable', icon: Award, color: 'bg-primary-fixed text-primary' },
];

const milestones = [
  { date: 'January 2026', event: 'Bit by Bit Coding founded', description: 'A group of passionate computing students came together with a mission.' },
  { date: 'March 2026', event: 'First Bootcamp', description: 'Held our inaugural bootcamp at CSM Academy International, introducing coding to prospective students.' },
  { date: 'March 2026', event: 'First Python Cohort', description: 'Launched our first structured Python pathway with 20 students.' },
  { date: 'July 2026', event: 'Second Python Course', description: 'Expanding to our second 12-week Python course with growing demand.' },
];

const bentoItems = [
  { title: 'Free Forever', description: 'No fees, ever. We believe coding education is a right.', icon: Heart, size: 'large', color: 'bg-surface' },
  { title: 'Volunteer Run', description: '100% run by passionate volunteers who care about education.', icon: Users, size: 'small', color: 'bg-surface-container-low' },
  { title: 'Singapore Based', description: 'Proudly serving Singaporean youth aged 10–18.', icon: Target, size: 'small', color: 'bg-surface' },
  { title: 'Structured Pathways', description: 'Multi-year curriculum from Python fundamentals to advanced AI/ML, C++, and robotics.', icon: TrendingUp, size: 'large', color: 'bg-surface-container-low' },
  { title: 'Industry Mentors', description: 'Learn from experienced programmers, educators, and senior students.', icon: GraduationCap, size: 'medium', color: 'bg-surface' },
  { title: 'Real Projects', description: 'Build real applications, not just toy programs.', icon: BookOpen, size: 'medium', color: 'bg-surface-container-low' },
];

export function ImpactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="flex flex-col items-center text-center gap-6 py-16 px-6 max-w-container mx-auto">
        <h1 className="font-display text-[36px] md:text-[48px] text-ink-black leading-tight">
          Our <span className="drawn-underline text-primary">Impact</span>
        </h1>
        <p className="text-on-surface-variant text-[18px] max-w-2xl leading-relaxed">
          Measurable outcomes from our March 2026 cohort. Every number represents a student
          whose life we&apos;re working to change through coding education.
        </p>
      </section>

      {/* Stats Grid */}
      <section className="py-16 px-6 bg-surface-container border-y-2 border-ink-black/10">
        <div className="max-w-container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {impactStats.map((stat, i) => (
            <div
              key={i}
              className={`bg-surface p-8 wiggly-border hard-shadow hover-wiggle transform ${
                i % 3 === 0 ? '-rotate-1' : i % 3 === 1 ? 'rotate-1' : '-rotate-1'
              }`}
            >
              <div className={`w-12 h-12 ${stat.color} wiggly-border-thin flex items-center justify-center mb-4`}>
                <stat.icon className="w-6 h-6 text-on-primary" />
              </div>
              <div className="font-display text-[36px] font-bold text-ink-black mb-1">{stat.number}</div>
              <div className="font-display text-[18px] font-bold text-ink-black mb-2">{stat.label}</div>
              <p className="text-on-surface-variant text-[13px] leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 px-6">
        <div className="max-w-container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-headline-lg text-ink-black">
              Our Journey
            </h2>
          </div>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-surface-dim hidden md:block" />
            {milestones.map((m, i) => (
              <div key={i} className="relative flex gap-6 mb-8 md:pl-16">
                <div className="hidden md:flex absolute left-0 top-1 w-12 h-12 bg-primary wiggly-border-thin items-center justify-center z-10">
                  <span className="text-on-primary font-label font-bold text-[12px]">{i + 1}</span>
                </div>
                <div className="bg-surface p-6 wiggly-border hard-shadow hover-wiggle flex-1">
                  <span className="text-primary text-[12px] font-label font-bold uppercase tracking-wider">{m.date}</span>
                  <h3 className="font-display text-[18px] font-bold text-ink-black mt-1 mb-2">{m.event}</h3>
                  <p className="text-on-surface-variant text-[14px] leading-relaxed">{m.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Grid */}
      <section className="py-20 px-6 bg-surface-container-low border-y-2 border-ink-black/10">
        <div className="max-w-container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-headline-lg text-ink-black">
              What Makes Us Different
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bentoItems.map((item, i) => (
              <div
                key={i}
                className={`${item.color} p-8 wiggly-border hard-shadow hover-wiggle transform ${
                  i % 3 === 0 ? '-rotate-1' : i % 3 === 2 ? 'rotate-1' : ''
                } ${item.size === 'large' ? 'md:col-span-2' : ''}`}
              >
                <item.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-display text-[20px] font-bold text-ink-black mb-2">{item.title}</h3>
                <p className="text-on-surface-variant text-[14px] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
