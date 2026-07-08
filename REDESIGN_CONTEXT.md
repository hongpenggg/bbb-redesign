# BBB Website Redesign Context

## Project Overview
Redesigning the Bit by Bit Coding website (bbbcoding.org) with a playful, hand-crafted, hand-drawn style inspired by Anthropic's design but with a playful touch. The stitch design HTML is at `/root/.hermes/cache/documents/doc_81e94892208f_message.txt`.

## Design System (from Stitch Design)
- **Fonts**: Playfair Display (headlines/display), Atkinson Hyperlegible Next (body/labels)
- **Colors**: 
  - Primary: #6f2de1 (purple)
  - Primary Container: #884efb
  - Bit Green: #C5FF52 (accent)
  - Ink Black: #1A1A1A
  - Surface: #fbf9f5 (warm off-white background)
  - Tertiary: #b5163d (coral/red)
  - Secondary: #006b5d (teal)
- **Borders**: Wiggly/sketch borders using CSS border-radius trick: `255px 15px 225px 15px/15px 225px 15px 255px`
- **Shadows**: Hard shadows (no blur): `6px 6px 0px 0px rgba(26,26,26,1)`
- **Animations**: Float animation, draw-in SVG paths, hover wiggle/rotate
- **Style**: Playful, hand-drawn, organic blobs, notebook lines, sketch borders

## Pages to Create (ALL pages from sitemap)
The stitch design provides HTML for: About, Blog, Impact, Team (as reference).
I need ALL these pages created as React components:

1. **Home** (`/`) - Hero, mission, impact stats, testimonials, pathways preview, partners wall, CTA
2. **About** (`/about`) - Philosophy, why we teach, narrative, CTA
3. **Pathways** (`/pathways`) - Learning tracks (Python, AI/ML, C++, #GirlsWhoCode), placement process
4. **Apply** (`/apply`) - Application form (embed Tally form: https://tally.so/r/rjLWOv)
5. **Team** (`/team`) - Team members grid with photos and quotes
6. **Impact** (`/impact`) - Stats, milestones, impact data, bento grid
7. **Blog** (`/blog`) - Blog posts grid with categories
8. **Gallery** (`/gallery`) - Photo grid/masonry layout
9. **FAQ** (`/faq`) - Accordion-style FAQ sections
10. **Contact** (`/contact`) - Contact form, social links
11. **Partners** (`/partners`) - Partner logos grid
12. **Tutor** (`/tutor`) - Tutor recruitment/apply page
13. **Press** (`/press`) - Media kit, brand assets
14. **Privacy/Terms/Conduct/Consent/ChildPolicy** - Legal pages

## Real Content to Use
### Home Page
- Title: "Bit by Bit Coding - Opening the doors to coding education for every youth"
- Mission: "Opening the Doors of Coding Education for Every Youth"
- Free, structured, multi-year coding pathways for youths aged 10-18
- Key principles: Free Forever, 100% Volunteer Run, Based in SG
- Current announcement: Second 12-week Python course sign-ups open
- Register: https://tally.so/r/rjLWOv

### Impact Stats (March 2026 Cohort, n=20)
- 75% First-time coders
- 100% Increased coding confidence
- 85% Want to continue with BbB
- 100% More likely to pursue coding pathways
- 90% Rated lessons clear or very clear
- 95% Found micro-challenge pedagogy valuable

### Testimonials
- "I feel more confident and less intimidated by coding."
- "I did not know that coding was easy to pick up and I can create my own games."
- "The tutors were very friendly and helpful! They were very welcoming and clear in explaining."
- "After learning the basics I am more excited to try harder challenges."

### Team Members
1. Hongpeng Wei - President & Co-Founder; Ex-Computing @ VJC; Python, AI
2. Brian Lim - VP, COO & Co-Founder; Ex-Computing @ VJC; Python, ML
3. Pratik Ghosh - Head of Curriculum; Ex-CS @ SP; Python, AI
4. Yixiang Fan - Head of Python; Ex-Computing @ HCI; Python, SQL
5. Papangkorn Wangchochedkun - Head of Curriculum and AI/ML; CS @ NUS; Python, AI
6. Raghav Sriram - Python, Robotics and Quantum Computing; Ex-Computing @ VJC; C++, Cybersecurity
7. Apicha Maneerat - Python; Maths & CS @ NUS; Python, Algorithms
8. Neil Bhandari - Python; Ex-Computing @ VJC; Python, ML
9. Ashton Too - Python; Ex-Computing @ VJC; Python, C#
10. Nicholas Yeo - Python; Ex-Computing @ VJC; Python, AI
11. Kevin Chua - Python; Ex-Computing @ VJC; Python, SQL
12. Chee Heng Seow - Python; Ex-Computing @ HCI; Python, AI
13. Joel Lim - Python; Ex-Cybersecurity @ NYP; Python, Security
14. Renae Gan - C and C#; Engineering @ NP; C#, SQL
15. Boon How Low - Python; AI For Science @ NTU; AI, ML

### Learning Tracks
1. **Python Core** (Phase 1) - ACCEPTING
   - Python Taster (4 weeks, Active Now) - Beginner basics
   - Python Beginner→Intermediate (12 weeks, Coming Soon)
   - Python Intermediate→Advanced (Coming Soon) - Flask, databases
2. **AI & Machine Learning** - SOON (Intermediate)
3. **C++ & Algorithms** - SOON (Ages 13+, Advanced)
4. **#GirlsWhoCode** - SOON (All Ages, All Levels)

### Partners
BAGUS Together, SGPO, *SCAPE, Educado SDC, Victoria Junior College, Stick 'Em, CSM Academy International, Soristic, WeWork, Dibs, Club Rainbow, SG Social Support, The Changemakers Guild, NVPC, Temasek Foundation, Tote Board, MCCY, MSF

### Gallery Images (from GitHub)
All from: https://raw.githubusercontent.com/bitbybitcoding/web/main/.github/assets/
- scape_class_term1.jpeg
- wework_class_brianteaching_term1.jpeg
- wework_class_nicholasguiding_term1.jpeg
- wework_class_term1.jpeg
- bootcamp_photo.jpeg
- kevin_teaching.jpeg
- suki_teaching_whiteboard.jpeg
- tutor_debate_session.jpeg
- (and many more)

### Social Links
- Instagram: @bbbcoding
- GitHub: bitbybitcoding

## Technical Architecture
- React + TypeScript + Vite + Tailwind CSS
- React Router v7 for routing
- Lucide React for icons (replaces Material Symbols)
- Project already scaffolded at /root/bbb-redesign/
- node_modules installed via nvm (node v22.23.1)

## Navigation Structure
Home | Pathways | Apply | Team | Gallery | Blog | FAQ | Contact
Plus: About, Impact, Partners, Tutor, Press

## Important Notes
- Domain is bbbcoding.org (NOT bbbcoding.vercel.app)
- The stitch design uses Google Material Symbols - replace with Lucide React icons
- All images use the GitHub assets path: https://raw.githubusercontent.com/bitbybitcoding/web/main/.github/assets/
- The site has a cookie consent banner
- The site has a top announcement bar for course sign-ups
