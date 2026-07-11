import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, ExternalLink } from 'lucide-react';
import { useEffect } from 'react';
import { getPostBySlug } from '../data/blogPosts';

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] py-20 px-4">
        <h1 className="font-display text-[28px] sm:text-[36px] md:text-[48px] text-ink-black mb-4">
          Post Not Found
        </h1>
        <Link
          to="/blog"
          className="text-primary hover:text-tertiary underline font-label font-bold"
        >
          Return to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <main className="py-12 md:py-16 px-4 sm:px-6 max-w-3xl mx-auto w-full">
        {/* Back Button */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-primary hover:text-tertiary transition-colors mb-8 font-label font-bold text-[14px]"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 wiggly-border-thin font-label font-bold text-[12px] text-primary uppercase tracking-wider mb-6 bg-surface">
            <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
            {post.category}
          </div>
          <h1 className="font-display text-[26px] sm:text-[32px] md:text-[40px] lg:text-[44px] text-ink-black mb-4 leading-tight">
            {post.title}
          </h1>
          <p className="text-on-surface-variant text-[16px] md:text-[18px] mb-6 leading-relaxed">
            {post.subtitle}
          </p>
          {/* Meta */}
          <div className="flex items-center gap-4 text-[13px] md:text-[14px] text-on-surface-variant font-label mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="wiggly-border hard-shadow mb-10 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Article Content */}
        <article className="prose-styles">
          <div className="bg-surface wiggly-border hard-shadow p-6 md:p-10 lg:p-12 border-2 border-ink-black/10">
            {post.content}

            {/* Byline */}
            <div className="border-t-2 border-dashed border-ink-black/10 pt-6 mt-8">
              <p className="text-ink-black font-label font-bold text-[15px] md:text-[16px] mb-1">
                — {post.author}
              </p>
              <p className="text-on-surface-variant text-[13px] md:text-[14px] mb-6">
                {post.role}
              </p>

              <div className="flex flex-wrap gap-4 text-[13px] md:text-[14px]">
                <a
                  href="https://www.instagram.com/bbbcoding"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary hover:text-tertiary transition-colors font-label font-bold"
                >
                  @bbbcoding
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href="https://www.bbbcoding.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary hover:text-tertiary transition-colors font-label font-bold"
                >
                  www.bbbcoding.org
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </article>

        {/* Back to Blog CTA */}
        <div className="mt-10 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 bg-surface text-ink-black font-label font-bold text-[14px] px-6 py-3 wiggly-border hard-shadow hover-wiggle transition-transform"
          >
            <ArrowLeft className="w-4 h-4 text-primary" />
            All Blog Posts
          </Link>
        </div>
      </main>
    </div>
  );
}