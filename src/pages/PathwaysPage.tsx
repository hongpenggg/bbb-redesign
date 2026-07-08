import { Link } from 'react-router-dom';
import { Route, CheckCircle2, GraduationCap, Bot, ArrowRight } from 'lucide-react';

const pythonSubBranches = [
  {
    title: 'Python Taster',
    description: 'New to Python? Start here! Our beginner-friendly 4-week Python basics taster module is a fun way for prospective students to learn Python fundamentals and build simple projects.',
    duration: '4 weeks',
    status: 'active',
    skills: ['Variables', 'Operators', 'Input & Output', 'Loops', 'Control Flow', 'Simple Data Structures'],
  },
  {
    title: 'Python: Beginner → Intermediate',
    description: "Students who clear the 4-week taster are invited to master the core concepts of Python in the next 12 weeks. Build your first command-line applications, learn modularity, and understand algorithmic thinking.",
    duration: '12 weeks',
    status: 'coming-soon',
    skills: ['Functions', 'File I/O', 'CSV Module', 'Binary & Hexadecimal', 'Algorithms'],
  },
  {
    title: 'Python: Intermediate → Advanced',
    description: "Take your Python skills to the web. Learn how to build back-end services with Flask and connect them to HTML/CSS front-ends. Learn to design and manage relational databases.",
    duration: 'Coming Soon',
    status: 'coming-soon',
    skills: ['Flask', 'HTML', 'CSS', 'SQLAlchemy', 'SQL', 'Database Design', 'ORM'],
  },
];

const otherPathways = [
  {
    title: 'AI & Machine Learning',
    description: 'Explore machine learning concepts, train models, and build intelligent applications using Python.',
    status: 'Coming Soon',
    level: 'Intermediate',
    color: 'bg-secondary',
    icon: Bot,
  },
  {
    title: 'C++ & Algorithms',
    description: 'Master data structures, algorithms, and computational thinking with C++.',
    status: 'Coming Soon',
    level: 'Advanced (Ages 13+)',
    color: 'bg-tertiary',
    icon: Route,
  },
  {
    title: '#GirlsWhoCode',
    description: 'An inclusive track designed to empower young women in tech through coding.',
    status: 'Coming Soon',
    level: 'All Levels',
    color: 'bg-primary',
    icon: CheckCircle2,
  },
];

const placementSteps = [
  { number: 1, title: 'Apply', description: 'Fill out the quick application form to join the programme.' },
  { number: 2, title: 'Interview', description: 'Complete a quick, informal interview. No coding experience required.' },
  { number: 3, title: 'Place', description: 'Get matched to the perfect module based on your current skill level.' },
];

export function PathwaysPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="flex flex-col items-center text-center gap-6 py-16 px-6 max-w-container mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 wiggly-border-thin font-label font-bold text-[12px] text-primary tracking-wide uppercase">
          <span className="w-2 h-2 rounded-full bg-bit-green animate-pulse" />
          2026 Intake Open
        </div>
        <h1 className="font-display text-[36px] md:text-[48px] text-ink-black leading-tight max-w-4xl">
          Structured Pathways for{' '}
          <span className="text-primary">Future Coders</span>
        </h1>
        <p className="text-on-surface-variant text-[18px] max-w-2xl leading-relaxed">
          From your first line of Python to building complex applications. Our curriculum
          evolves with you, ensuring you master the fundamentals before tackling the future.
        </p>
      </section>

      {/* Main Content */}
      <section className="py-8 px-6">
        <div className="max-w-container mx-auto grid lg:grid-cols-[2fr_1fr] gap-8 items-start">
          {/* Left Column - Python Pathway */}
          <div className="flex flex-col gap-8">
            <div className="flex items-center justify-between border-b-2 border-ink-black/10 pb-4">
              <h2 className="text-[24px] md:text-[32px] font-display font-bold flex items-center gap-3 text-ink-black">
                <Route className="text-primary w-8 h-8" />
                The Python Core
              </h2>
              <span className="text-[12px] font-label font-bold text-on-surface-variant uppercase tracking-widest">
                Phase 1
              </span>
            </div>

            <div className="flex flex-col gap-8">
              {pythonSubBranches.map((branch, index) => (
                <div key={index} className="relative pl-8 md:pl-12 group">
                  {/* Timeline Line */}
                  {index < pythonSubBranches.length - 1 && (
                    <div
                      className={`absolute left-[11px] top-8 bottom-[-32px] w-[2px] ${
                        branch.status === 'active'
                          ? 'bg-gradient-to-b from-primary to-surface-dim'
                          : 'bg-surface-dim'
                      }`}
                    />
                  )}

                  {/* Timeline Dot */}
                  <div
                    className={`absolute left-0 top-1 w-6 h-6 rounded-full border-4 border-white z-10 ${
                      branch.status === 'active'
                        ? 'bg-primary shadow-lg ring-2 ring-primary/20'
                        : 'bg-surface-dim'
                    }`}
                  />

                  {/* Card */}
                  <div
                    className={`p-6 wiggly-border transition-all duration-300 ${
                      branch.status === 'active'
                        ? 'bg-surface hard-shadow hover-wiggle cursor-pointer'
                        : 'bg-surface-container hard-shadow-sm'
                    }`}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-3">
                      <h3 className={`text-[20px] md:text-[24px] font-display font-bold ${
                        branch.status === 'active' ? 'text-ink-black' : 'text-on-surface-variant'
                      }`}>
                        {branch.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="text-[12px] text-on-surface-variant font-label">{branch.duration}</span>
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 wiggly-border-thin text-[12px] font-label font-bold ${
                          branch.status === 'active'
                            ? 'bg-bit-green/10 text-ink-black border-bit-green'
                            : 'bg-surface-container-high text-on-surface-variant'
                        }`}>
                          {branch.status === 'active' && (
                            <span className="w-1.5 h-1.5 rounded-full bg-bit-green" />
                          )}
                          {branch.status === 'active' ? 'Active Now' : 'Coming Soon'}
                        </span>
                      </div>
                    </div>
                    <p className={`text-[14px] leading-relaxed mb-5 ${
                      branch.status === 'active' ? 'text-on-surface-variant' : 'text-on-surface-variant/70'
                    }`}>
                      {branch.description}
                    </p>
                    {branch.status === 'active' && (
                      <div className="flex flex-wrap gap-2">
                        {branch.skills.map((skill, si) => (
                          <span
                            key={si}
                            className="px-3 py-1 bg-surface-container-high text-on-surface text-[12px] font-label font-bold wiggly-border-thin"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Next Horizon */}
            <div className="mt-4 pt-8 border-t-2 border-dashed border-ink-black/10 flex items-center gap-4">
              <div className="w-10 h-10 bg-secondary wiggly-border-thin flex items-center justify-center">
                <Bot className="w-5 h-5 text-on-primary" />
              </div>
              <div>
                <h4 className="text-[12px] font-label font-bold uppercase tracking-wider text-secondary">Next Horizon</h4>
                <p className="text-[16px] font-display font-bold text-ink-black">Artificial Intelligence & Machine Learning</p>
              </div>
            </div>

            {/* Other Pathways */}
            <div className="mt-8">
              <h3 className="font-display text-headline-md text-ink-black mb-6">Other Pathways</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {otherPathways.map((p, i) => (
                  <div key={i} className={`bg-surface p-6 wiggly-border hard-shadow hover-wiggle transform ${i === 0 ? '-rotate-1' : i === 2 ? 'rotate-1' : ''}`}>
                    <div className={`w-10 h-10 ${p.color} wiggly-border-thin flex items-center justify-center mb-3`}>
                      <p.icon className="w-5 h-5 text-on-primary" />
                    </div>
                    <h4 className="font-display font-bold text-ink-black mb-1">{p.title}</h4>
                    <span className="inline-block text-[11px] font-label font-bold px-2 py-0.5 bg-surface-container-high wiggly-border-thin mb-2">
                      {p.level}
                    </span>
                    <p className="text-on-surface-variant text-[13px] leading-relaxed">{p.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Placement Process */}
          <div className="flex flex-col gap-6 sticky top-24">
            <div className="bg-surface p-8 wiggly-border hard-shadow">
              <h3 className="text-[20px] font-display font-bold mb-8 flex items-center gap-2 text-ink-black">
                <GraduationCap className="text-primary w-5 h-5" />
                Placement Process
              </h3>
              <div className="flex flex-col gap-0 relative">
                <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-surface-dim" />
                {placementSteps.map((step, i) => (
                  <div key={i} className="relative flex gap-5 pb-8 group">
                    <div className="relative z-10 w-8 h-8 rounded-full bg-surface border-2 border-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <span className="text-[13px] font-bold text-primary">{step.number}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-ink-black text-[16px] mb-1">{step.title}</h4>
                      <p className="text-[13px] text-on-surface-variant leading-snug">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/apply">
                <button className="w-full mt-6 bg-primary text-on-primary font-label font-bold py-3.5 px-4 wiggly-border hard-shadow-sm hover-wiggle flex items-center justify-center gap-2 text-[14px]">
                  Start Application
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>

            <div className="bg-surface p-6 wiggly-border hard-shadow-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-bit-green/20 wiggly-border-thin text-ink-black">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-[24px] font-display font-bold text-ink-black">Free</h4>
                  <p className="text-[13px] text-on-surface-variant mt-1 leading-snug">
                    Our curriculum is completely free for all youths aged 13–18 who are passionate about learning to code.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
