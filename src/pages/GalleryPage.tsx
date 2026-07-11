const eventImages = [
  'scape_class_term1.webp',
  'wework_class_brianteaching_term1.webp',
  'wework_class_nicholasguiding_term1.webp',
  'wework_class_term1.webp',
  'scape_class_pannteaching_term1.webp',
  'wework_class_frombackleft_term1.webp',
  'scape_class_pannbrianselfie_term1.webp',
  'wework_class_frombackmiddle_term1.webp',
  'wework_class_nicholastutoringcloseup_term1.webp',
  'wework_class_frombackright_term1.webp',
  'scape_class_frombackmiddle_term1.webp',
  'wework_class_frombackright2_term1.webp',
  'scape_class_pannteachingzoomed_term1.webp',
  'wework_class_pratikteachingzoomed_term1.webp',
  'csm_class_frombackleft_term1.webp',
  'bootcamp_photo.webp',
  'kevin_teaching.webp',
  'suki_teaching_whiteboard.webp',
  'tutor_debate_session.webp',
  'zoomed_in_kevin_teaching.webp',
  'wework_class_wholepanel_term1.webp',
  'wework_class_mrchriszoomed_term1.webp',
  'wework_class_panelfrombackright_term1.webp',
  'wework_class_hackathonfrombackleft_term1.webp',
  'wework_class_mrridzwandiscussionzoomed_term1.webp',
  'wework_class_hackathongroupzoomed_term1.webp',
  'wework_class_mrridzwanzoomed_term1.webp',
  'wework_class_panelfrombackleft_term1.webp',
  'wework_class_panelhongpengzoomed_term1.webp',
];

const assetBase = '/assets';

function formatAlt(image: string) {
  return image
    .replace(/_/g, ' ')
    .replace('.webp', '')
    .replace('term1', 'Term 1')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export function GalleryPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="flex flex-col items-center text-center gap-4 md:gap-6 py-12 md:py-16 px-4 sm:px-6 max-w-container mx-auto">
        <h1 className="font-display text-[28px] sm:text-[36px] md:text-[48px] text-ink-black leading-tight">
          Event <span className="drawn-underline text-primary">Gallery</span>
        </h1>
        <p className="text-on-surface-variant text-[16px] md:text-[18px] max-w-2xl leading-relaxed px-2 sm:px-0">
          Snapshots from past BbB workshops, bootcamps, and mentoring sessions.
        </p>
      </section>

      {/* Masonry Grid */}
      <section className="px-4 sm:px-6 pb-16 md:pb-20 max-w-container mx-auto">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 md:gap-4 space-y-3 md:space-y-4">
          {eventImages.map((image) => (
            <div
              key={image}
              className="break-inside-avoid wiggly-border hard-shadow hover-wiggle overflow-hidden"
            >
              <img
                src={`${assetBase}/${image}`}
                alt={formatAlt(image)}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}