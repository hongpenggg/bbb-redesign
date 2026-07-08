import { Code2 } from 'lucide-react';

const teamMembers = [
  { name: 'Hongpeng Wei', role: 'President & Co-Founder', background: 'Ex-Computing @ VJC', skills: 'Python, AI', image: '' },
  { name: 'Brian Lim', role: 'VP, COO & Co-Founder', background: 'Ex-Computing @ VJC', skills: 'Python, ML', image: '' },
  { name: 'Pratik Ghosh', role: 'Head of Curriculum', background: 'Ex-CS @ SP', skills: 'Python, AI', image: '' },
  { name: 'Yixiang Fan', role: 'Head of Python', background: 'Ex-Computing @ HCI', skills: 'Python, SQL', image: '' },
  { name: 'Papangkorn Wangchochedkun', role: 'Head of Curriculum and AI/ML', background: 'CS @ NUS', skills: 'Python, AI', image: '' },
  { name: 'Raghav Sriram', role: 'Python, Robotics & Quantum Computing', background: 'Ex-Computing @ VJC', skills: 'C++, Cybersecurity', image: '' },
  { name: 'Apicha Maneerat', role: 'Python', background: 'Maths & CS @ NUS', skills: 'Python, Algorithms', image: '' },
  { name: 'Neil Bhandari', role: 'Python', background: 'Ex-Computing @ VJC', skills: 'Python, ML', image: '' },
  { name: 'Ashton Too', role: 'Python', background: 'Ex-Computing @ VJC', skills: 'Python, C#', image: '' },
  { name: 'Nicholas Yeo', role: 'Python', background: 'Ex-Computing @ VJC', skills: 'Python, AI', image: '' },
  { name: 'Kevin Chua', role: 'Python', background: 'Ex-Computing @ VJC', skills: 'Python, SQL', image: '' },
  { name: 'Chee Heng Seow', role: 'Python', background: 'Ex-Computing @ HCI', skills: 'Python, AI', image: '' },
  { name: 'Joel Lim', role: 'Python', background: 'Ex-Cybersecurity @ NYP', skills: 'Python, Security', image: '' },
  { name: 'Renae Gan', role: 'C and C#', background: 'Engineering @ NP', skills: 'C#, SQL', image: '' },
  { name: 'Boon How Low', role: 'Python', background: 'AI For Science @ NTU', skills: 'AI, ML', image: '' },
];

export function TeamPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="flex flex-col items-center text-center gap-6 py-16 px-6 max-w-container mx-auto">
        <h1 className="font-display text-[36px] md:text-[48px] text-ink-black leading-tight">
          Meet Our <span className="drawn-underline text-primary">Team</span>
        </h1>
        <p className="text-on-surface-variant text-[18px] max-w-2xl leading-relaxed">
          A passionate group of student volunteers, computing graduates, and educators
          who believe in making coding education accessible to all.
        </p>
      </section>

      {/* Team Grid */}
      <section className="py-12 px-6">
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, i) => (
              <div
                key={i}
                className={`bg-surface p-6 wiggly-border hard-shadow hover-wiggle flex flex-col items-center text-center transform ${
                  i % 3 === 0 ? '-rotate-1' : i % 3 === 2 ? 'rotate-1' : ''
                }`}
              >
                {/* Avatar placeholder */}
                <div className="w-20 h-20 bg-primary-fixed wiggly-border-thin flex items-center justify-center mb-4 overflow-hidden">
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  ) : (
                    <Code2 className="w-8 h-8 text-primary" />
                  )}
                </div>
                <h3 className="font-display text-[18px] font-bold text-ink-black mb-1">{member.name}</h3>
                <p className="text-primary text-[13px] font-label font-bold mb-2">{member.role}</p>
                <p className="text-on-surface-variant text-[12px] font-label mb-1">{member.background}</p>
                <div className="flex flex-wrap gap-1 mt-2 justify-center">
                  {member.skills.split(', ').map((skill, si) => (
                    <span key={si} className="bg-surface-container-high text-on-surface-variant text-[11px] font-label font-bold px-2 py-0.5 wiggly-border-thin">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Team CTA */}
      <section className="py-20">
        <div className="max-w-container mx-auto px-6">
          <div className="bg-surface-container-low rounded-[3rem] p-12 md:p-16 text-center relative overflow-hidden wiggly-border-thin shadow-hard">
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-bit-green organic-blob-1 opacity-40" />
            <h2 className="font-display text-[32px] text-ink-black mb-4 relative z-10">
              Want to Join Our Team?
            </h2>
            <p className="text-on-surface-variant text-[16px] max-w-xl mx-auto mb-8 relative z-10">
              We&apos;re always looking for passionate volunteers who want to make a difference in youth coding education.
            </p>
            <a
              href="/tutor"
              className="relative z-10 inline-flex items-center gap-2 bg-primary text-on-primary font-label font-bold text-[14px] px-8 py-4 wiggly-border hard-shadow hover-wiggle"
            >
              Become a Tutor
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
