import { useMemo, useState } from 'react';
import { Calendar, Clock, ArrowRight, Search } from 'lucide-react';

const assetBase = 'https://raw.githubusercontent.com/bitbybitcoding/web/main/.github/assets';

const blogPosts = [
  {
    id: 'why-we-founded-bit-by-bit',
    title: 'Why We Founded Bit by Bit Coding',
    excerpt: 'On equity in coding education, opening doors, and how we got there.',
    author: 'Hongpeng Wei',
    date: 'January 2026',
    readTime: '8 min read',
    category: 'Opinion',
    tags: ['#student-stories', '#equity', '#events'],
    image: `${assetBase}/bootcamp_photo.jpeg`,
  },
  {
    id: 'march-2026-bootcamp-recap',
    title: 'March 2026 Bootcamp Recap',
    excerpt: 'Our first bootcamp brought together aspiring coders from all over Singapore.',
    author: 'Brian Lim',
    date: 'March 2026',
    readTime: '5 min read',
    category: 'Events',
    tags: ['#bootcamp', '#events'],
    image: `${assetBase}/wework_class_term1.jpeg`,
  },
  {
    id: 'teaching-python-to-beginners',
    title: 'Teaching Python to Complete Beginners',
    excerpt: 'What we learned from our first cohort of students who had never coded before.',
    author: 'Pratik Ghosh',
    date: 'April 2026',
    readTime: '6 min read',
    category: 'Curriculum',
    tags: ['#curriculum', '#python', '#teaching'],
    image: `${assetBase}/kevin_teaching.jpeg`,
  },
];

const allCategories = ['All', 'Opinion', 'Events', 'Curriculum'];

export function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    return blogPosts.filter((post) => {
      const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
      const matchesSearch =
        query.length === 0 ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.join(' ').toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="flex flex-col items-center text-center gap-4 md:gap-6 py-12 md:py-16 px-4 sm:px-6 max-w-container mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 wiggly-border-thin font-label font-bold text-[12px] text-primary uppercase tracking-wider">
          <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
          Stories & Insights
        </div>
        <h1 className="font-display text-[28px] sm:text-[36px] md:text-[48px] text-ink-black leading-tight">
          Our <span className="text-primary">Blog</span>
        </h1>
        <p className="text-on-surface-variant text-[16px] md:text-[18px] max-w-2xl leading-relaxed px-2 sm:px-0">
          Thoughts on coding education, equity, and building a community that learns together.
        </p>
      </section>

      {/* Filter Bar */}
      <section className="px-4 sm:px-6 pb-6 md:pb-8 max-w-container mx-auto w-full">
        <div className="bg-surface p-4 md:p-5 wiggly-border hard-shadow">
          <div className="relative mb-4">
            <Search className="w-4 h-4 text-on-surface-variant absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search blog posts..."
              aria-label="Search blog posts"
              className="w-full wiggly-border-thin bg-surface-container-low pl-10 pr-3 py-2.5 text-[14px] text-ink-black focus:outline-none focus:border-2 focus:border-primary font-label"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-[12px] font-label font-bold transition-colors wiggly-border-thin ${
                  activeCategory === cat
                    ? 'bg-primary text-on-primary'
                    : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="px-4 sm:px-6 pb-16 md:pb-20 max-w-container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {filteredPosts.map((post, i) => (
            <article
              key={post.id}
              className={`bg-surface wiggly-border hard-shadow hover-wiggle flex flex-col transform ${
                i % 3 === 0 ? 'rotate-1' : i % 3 === 2 ? '-rotate-1' : ''
              }`}
            >
              <div className="relative h-44 sm:h-48 overflow-hidden bg-primary-fixed-dim">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-on-primary text-[11px] font-label font-bold wiggly-border-thin">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-5 md:p-6 flex flex-col flex-grow">
                <h3 className="font-display text-[16px] md:text-[18px] font-bold text-ink-black mb-2 hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-on-surface-variant text-[12px] md:text-[13px] mb-4 flex-grow line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-[11px] md:text-[12px] text-on-surface-variant pt-4 border-t-2 border-dashed border-ink-black/10">
                  <div className="flex items-center gap-2 md:gap-3 font-label">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-primary" />
                </div>
              </div>
            </article>
          ))}
        </div>
        {filteredPosts.length === 0 && (
          <p className="text-center text-on-surface-variant mt-8">No posts match your current filters.</p>
        )}
      </section>
    </div>
  );
}
