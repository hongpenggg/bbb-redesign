import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 sm:px-6 py-16 md:py-20 text-center">
      {/* Decorative SVG */}
      <div className="relative mb-6 md:mb-8">
        <svg
          width="160"
          height="160"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-float md:w-[200px] md:h-[200px]"
        >
          {/* Hand-drawn circle */}
          <path
            d="M100 20 C144 20 180 56 180 100 C180 144 144 180 100 180 C56 180 20 144 20 100 C20 56 56 20 100 20 Z"
            stroke="#1A1A1A"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-draw"
          />
          {/* 404 text */}
          <text
            x="100"
            y="105"
            textAnchor="middle"
            dominantBaseline="middle"
            className="font-display"
            fill="#6f2de1"
            fontSize="48"
            fontWeight="bold"
          >
            404
          </text>
          {/* Small decorative stars */}
          <path
            d="M45 40L48 35L51 40L48 45Z"
            fill="#C5FF52"
          />
          <path
            d="M155 150L157 147L159 150L157 153Z"
            fill="#C5FF52"
          />
          {/* Wiggly underline */}
          <path
            d="M60 145 C75 140 85 150 100 145 C115 140 125 150 140 145"
            stroke="#C5FF52"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <h1 className="font-display text-[36px] sm:text-[48px] md:text-[64px] text-ink-black mb-4">
        Oops!
      </h1>
      <p className="text-on-surface-variant text-[16px] md:text-[18px] max-w-md leading-relaxed mb-2 px-2 sm:px-0">
        This page seems to have wandered off. Maybe it&apos;s still being built, bit by bit.
      </p>
      <p className="text-on-surface-variant text-[13px] md:text-[14px] mb-6 md:mb-8">
        Don&apos;t worry &mdash; let&apos;s get you back on track.
      </p>

      <Link
        to="/"
        className="inline-flex items-center gap-2 bg-primary text-on-primary font-label font-bold text-[13px] md:text-[14px] px-6 md:px-8 py-3 md:py-4 wiggly-border hard-shadow hover-wiggle"
      >
        <Home className="w-5 h-5" />
        Back to Home
      </Link>

      {/* Decorative bottom elements */}
      <div className="mt-12 md:mt-16 flex items-center gap-4 text-on-surface-variant text-[12px] md:text-[13px]">
        <div className="w-10 md:w-12 h-0.5 bg-ink-black/20" />
        <span className="font-label font-bold">bbbcoding.org</span>
        <div className="w-10 md:w-12 h-0.5 bg-ink-black/20" />
      </div>
    </div>
  );
}
