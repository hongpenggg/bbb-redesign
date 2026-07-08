const eventImages = [
  'scape_class_term1.jpeg',
  'wework_class_brianteaching_term1.jpeg',
  'wework_class_nicholasguiding_term1.jpeg',
  'wework_class_term1.jpeg',
  'scape_class_pannteaching_term1.jpeg',
  'wework_class_frombackleft_term1.jpeg',
  'scape_class_pannbrianselfie_term1.jpeg',
  'wework_class_frombackmiddle_term1.jpeg',
  'wework_class_nicholastutoringcloseup_term1.jpeg',
  'wework_class_frombackright_term1.jpeg',
  'scape_class_frombackmiddle_term1.jpeg',
  'wework_class_frombackright2_term1.jpeg',
  'scape_class_pannteachingzoomed_term1.jpeg',
  'wework_class_pratikteachingzoomed_term1.jpeg',
  'csm_class_frombackleft_term1.jpeg',
  'bootcamp_photo.jpeg',
  'kevin_teaching.jpeg',
  'suki_teaching_whiteboard.jpeg',
  'tutor_debate_session.jpeg',
  'zoomed_in_kevin_teaching.jpeg',
  'wework_class_wholepanel_term1.jpeg',
  'wework_class_mrchriszoomed_term1.jpeg',
  'wework_class_panelfrombackright_term1.jpeg',
  'wework_class_hackathonfrombackleft_term1.jpeg',
  'wework_class_mrridzwandiscussionzoomed_term1.jpeg',
  'wework_class_hackathongroupzoomed_term1.jpeg',
  'wework_class_mrridzwanzoomed_term1.jpeg',
  'wework_class_panelfrombackleft_term1.jpeg',
  'wework_class_panelhongpengzoomed_term1.jpeg',
];

const assetBase = 'https://raw.githubusercontent.com/bitbybitcoding/web/main/.github/assets';

export function GalleryPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="flex flex-col items-center text-center gap-6 py-16 px-6 max-w-container mx-auto">
        <h1 className="font-display text-[36px] md:text-[48px] text-ink-black leading-tight">
          Event <span className="drawn-underline text-primary">Gallery</span>
        </h1>
        <p className="text-on-surface-variant text-[18px] max-w-2xl leading-relaxed">
          Snapshots from past BbB workshops, bootcamps, and mentoring sessions.
        </p>
      </section>

      {/* Masonry Grid */}
      <section className="px-6 pb-20 max-w-container mx-auto">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {eventImages.map((image, i) => (
            <div
              key={image}
              className="break-inside-avoid wiggly-border hard-shadow hover-wiggle overflow-hidden"
            >
              <img
                src={`${assetBase}/${image}`}
                alt={image.replace(/_/g, ' ').replace('.jpeg', '').replace('term1', 'Term 1').replace(/\b\w/g, (c) => c.toUpperCase())}
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
