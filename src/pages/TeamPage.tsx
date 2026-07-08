import { Link } from 'react-router-dom';
import { Code2 } from 'lucide-react';

const assetBase = 'https://raw.githubusercontent.com/bitbybitcoding/web/main/.github/assets';

const teamMembers = [
  { name: 'Hongpeng Wei', role: 'President & Co-Founder', background: 'Ex-Computing @ VJC', skills: 'Python, AI', image: '' },
  { name: 'Brian Lim', role: 'VP, COO & Co-Founder', background: 'Ex-Computing @ VJC', skills: 'Python, ML', image: `${assetBase}/brian_profile.jpeg` },
  { name: 'Pratik Ghosh', role: 'Head of Curriculum', background: 'Ex-CS @ SP', skills: 'Python, AI', image: `${assetBase}/pratik_profile.jpeg` },
  { name: 'Yixiang Fan', role: 'Head of Python', background: 'Ex-Computing @ HCI', skills: 'Python, SQL', image: `${assetBase}/yixiang_profile.jpeg` },
  { name: 'Papangkorn Wangchochedkun', role: 'Head of Curriculum and AI/ML', background: 'CS @ NUS', skills: 'Python, AI', image: `${assetBase}/pann_profile.jpeg` },
  { name: 'Raghav Sriram', role: 'Python, Robotics & Quantum Computing', background: 'Ex-Computing @ VJC', skills: 'C++, Cybersecurity', image: `${assetBase}/raghav_profile.jpeg` },
  { name: 'Apicha Maneerat', role: 'Python', background: 'Maths & CS @ NUS', skills: 'Python, Algorithms', image: `${assetBase}/suki_profile.jpeg` },
  { name: 'Neil Bhandari', role: 'Python', background: 'Ex-Computing @ VJC', skills: 'Python, ML', image: `${assetBase}/neil_profile.jpeg` },
  { name: 'Ashton Too', role: 'Python', background: 'Ex-Computing @ VJC', skills: 'Python, C#', image: `${assetBase}/ashton_profile.jpeg` },
  { name: 'Nicholas Yeo', role: 'Python', background: 'Ex-Computing @ VJC', skills: 'Python, AI', image: `${assetBase}/nicholas_profile.jpeg` },
  { name: 'Kevin Chua', role: 'Python', background: 'Ex-Computing @ VJC', skills: 'Python, SQL', image: `${assetBase}/kevin_profile.jpeg` },
  { name: 'Chee Heng Seow', role: 'Python', background: 'Ex-Computing @ HCI', skills: 'Python, AI', image: `${assetBase}/cheeheng_profile.jpeg` },
  { name: 'Joel Lim', role: 'Python', background: 'Ex-Cybersecurity @ NYP', skills: 'Python, Security', image: `${assetBase}/joel_profile.jpeg` },
  { name: 'Renae Gan', role: 'C and C#', background: 'Engineering @ NP', skills: 'C#, SQL', image: `${assetBase}/renae_profile.jpeg` },
  { name: 'Boon How Low', role: 'Python', background: 'AI For Science @ NTU', skills: 'AI, ML', image: `${assetBase}/boonhow_profile.jpeg` },
];

export function TeamPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="flex flex-col items-center text-center gap-4 md:gap-6 py-12 md:py-16 px-4 sm:px-6 max-w-container mx-auto">
        <h1 className="font-display text-[28px] sm:text-[36px] md:text-[48px] text-ink-black leading-tight">
          Meet Our <span className="drawn-underline text-primary">Team</span>
        </h1>
        <p className="text-on-surface-variant text-[16px] md:text-[18px] max-w-2xl leading-relaxed px-2 sm:px-0">
          A passionate group of student volunteers, computing graduates, and educators
          who believe in making coding education accessible to all.
        </p>
      </section>

      {/* Team Grid */}
      <section className="py-10 md:py-12 px-4 sm:px-6">
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {teamMembers.map((member, i) => (
              <div
                key={i}
                className={`bg-surface p-5 md:p-6 wiggly-border hard-shadow hover-wiggle flex flex-col items-center text-center transform ${
                  i % 3 === 0 ? 'md:-rotate-1' : i % 3 === 2 ? 'md:rotate-1' : ''
                }`}
              >
                {/* Avatar placeholder */}
                <div className="w-16 h-16 md:w-20 md:h-20 bg-primary-fixed wiggly-border-thin flex items-center justify-center mb-4 overflow-hidden shrink-0">
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  ) : (
                    <Code2 className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                  )}
                </div>
                <h3 className="font-display text-[16px] md:text-[18px] font-bold text-ink-black mb-1">{member.name}</h3>
                <p className="text-primary text-[12px] md:text-[13px] font-label font-bold mb-2">{member.role}</p>
                <p className="text-on-surface-variant text-[11px] md:text-[12px] font-label mb-1">{member.background}</p>
                <div className="flex flex-wrap gap-1 mt-2 justify-center">
                  {member.skills.split(', ').map((skill, si) => (
                    <span key={si} className="bg-surface-container-high text-on-surface-variant text-[10px] md:text-[11px] font-label font-bold px-2 py-0.5 wiggly-border-thin">
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
      <section className="py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-container mx-auto">
          <div className="bg-surface-container-low rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 lg:p-16 text-center relative overflow-hidden wiggly-border-thin shadow-hard">
            <div className="absolute -top-8 -right-8 w-24 h-24 md:w-32 md:h-32 bg-bit-green organic-blob-1 opacity-40" />
            <h2 className="font-display text-[24px] md:text-[32px] text-ink-black mb-4 relative z-10">
              Want to Join Our Team?
            </h2>
            <p className="text-on-surface-variant text-[14px] md:text-[16px] max-w-xl mx-auto mb-8 relative z-10 px-2 sm:px-0">
              We&apos;re always looking for passionate volunteers who want to make a difference in youth coding education.
            </p>
            <Link
              to="/tutor"
              className="relative z-10 inline-flex items-center gap-2 bg-primary text-on-primary font-label font-bold text-[13px] md:text-[14px] px-6 md:px-8 py-3 md:py-4 wiggly-border hard-shadow hover-wiggle"
            >
              Become a Tutor
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
