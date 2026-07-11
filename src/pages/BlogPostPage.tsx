import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, ExternalLink } from 'lucide-react';
import { useEffect, type ReactNode } from 'react';

const assetBase = '/assets';

interface BlogPost {
  title: string;
  subtitle: string;
  author: string;
  role: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  content: ReactNode;
}

const blogPosts: Record<string, BlogPost> = {
  'why-we-founded-bit-by-bit': {
    title: 'Why We Founded Bit by Bit Coding',
    subtitle: 'On equity in coding education, opening doors, and how we got there',
    author: 'Hongpeng Wei',
    role: 'Co-founder & President, Bit by Bit Coding',
    date: 'January 2026',
    readTime: '8 min read',
    category: 'Opinion',
    image: `${assetBase}/bootcamp_photo.webp`,
    content: (
      <>
        <p>
          In January 2026, Brian and I launched what would go on to occupy our minds and efforts for the next two months — and, we hope, for many years after. We called it Bit by Bit Coding (thanks to our tutor Apicha Maneerat, who came up with the name while in a chat with me). The name was deliberate. Not a grand proclamation. Not a promise of overnight transformation. Just a quiet acknowledgement that the most meaningful change happens incrementally, persistently, one small step at a time. And little by little, bit by bit, we will make that difference.
        </p>
        <p>
          What we built is a free, multi-year coding education programme for Singaporean youth aged 13 to 18. What we are building toward is something bigger: a Singapore where every young person who wants to learn to code can learn to code, regardless of what their parents earn, regardless of what school they attend, regardless of whether they&apos;re able to bring a shiny new MacBook to class to code, regardless of anything except their own curiosity and drive.
        </p>
        <p className="font-display text-[18px] md:text-[20px] text-primary italic border-l-4 border-bit-green pl-4 mt-2 md:mt-4">
          Learning to code is not a privilege. It is a right. And for too long, we have treated it like the former.
        </p>

        <h2>Fighting Privilege, Head-on</h2>
        <p>
          Singapore has made admirable strides in coding education. Programmes like Code for Fun and Code in the Community have brought introductory coding to thousands of students who might otherwise never have encountered it. We are grateful those programmes exist. They have lit flames that keep burning, especially for some children.
        </p>
        <p>
          But these… stop at the beginning.
        </p>
        <p>
          A student who completes an introductory coding workshop learns what a loop is, how to write a basic function, perhaps how to build a simple game with characters. In my first introductory lesson to coding, I was taught how to make a Sprite move on Scratch, and how to make it say things. I thought it was pretty fun. And for many kids, they are. The things that they&apos;re taught, these are real skills. But they are the first rung of a very tall ladder. What happens when that student — the one who stayed up until midnight debugging their project because they loved it, the one who came back the next week asking what comes next — wants to keep climbing?
        </p>
        <p>
          The honest answer, for most Singaporean teenagers from ordinary households, is: not much. Advanced coding pathways exist in Singapore. They are called enrichment centres. They cost hundreds of dollars a month. They are, in practice, accessible only to families who can afford them.
        </p>
        <p>
          We did the research. We surveyed the landscape and read empirical research, and confirmed what we had suspected: there is a genuine, unmet market for rigorous, advanced, free coding education for Singaporean youth. Nobody was serving it. Not because it wasn&apos;t needed. But because the economics of free are hard, and someone has to care enough to make it work anyway.
        </p>

        <h2>Why Us. Why Now</h2>
        <p>
          The honest answer is rather personal.
        </p>
        <p>
          That door was once closed for me. Not dramatically. There was no single moment of rejection, no villain who told me coding wasn&apos;t for people like me. It was subtler than that. It was the quiet arithmetic of enrichment class fees and household budgets. It was having to run Scratch on an old PC and always watching it hang. It was understanding, without anyone ever saying it out loud, that some things were for certain kinds of families.
        </p>
        <p>
          I was lucky. I found my own way in eventually: through free online resources, through sheer stubbornness, through teachers who went above and beyond. But I spent a long time thinking about the kids who don&apos;t find their way. Who lose interest before the door cracks open. Who conclude, perhaps at thirteen or fourteen, that coding is simply not for them, when what they really encountered was a price tag.
        </p>
        <p>
          I made a promise to myself last year. I would let every kid who wants to learn to code learn to code, regardless of money, regardless of background, regardless of anything else. Bit by Bit Coding is that promise made real.
        </p>
        <p>
          We are not here to disrupt. We are here to make sure that what already exists is available to everyone — not just the ones who can pay for it.
        </p>

        <h2>What We Built</h2>
        <p>
          Bit by Bit Coding offers free, multi-year coding pathways for youth aged 10 to 18. We begin with Python — not because it is the only language worth knowing, but because it is the most accessible entry point into serious programming. From there, students progress into Flask for web development, SQL for databases, and beyond: C, Java, robotics, Arduino.
        </p>
        <p>
          This is not a workshop. It is not a one-off event or a taster session. It is a structured, multi-term curriculum designed to take a student from beginner to genuinely capable. The kind of capable that shows up in portfolios, in university applications, in real projects that solve real problems.
        </p>
        <p>
          Our curriculum takes inspiration from Victoria Junior College&apos;s computing syllabus and goes further, informed by research in coding education pedagogy and shaped with input from former computing teachers and a leading coding education expert from Cornell University. We are serious about the quality of what we teach. Free should not mean second-rate.
        </p>
        <p>
          Our tutors are volunteers: ex-computing students, current CS students, young professionals, who remember what it felt like to want more than what was available to them. They are not here for a line on their CVs. They are here because they believe, as we do, that this matters.
        </p>
        <p>
          We are a recognised groundup under the BAGUS Together initiative, supported by NVPC, Temasek Foundation, and Tote Board. We are small. We are new. We are, in every meaningful sense, still at the beginning.
        </p>

        <h2>The Road So Far</h2>
        <p>
          Two months into building Bit by Bit Coding, the scorecard looks something like this: thirteen volunteers, a working curriculum, institutional recognition, a handful of warm introductions to schools.
        </p>
        <p>
          It is, in fact, humbling: you can build the most thoughtful programme in the world and still find yourself, weeks before launch, refreshing your inbox hoping someone, anyone, has signed up. The hardest lesson of the past two months has been that doing good work is necessary but not sufficient. You have to reach people. And reaching people, especially young people and their parents, through institutions that move slowly and inboxes that fill up fast, is its own kind of labour.
        </p>
        <p>
          We have been rejected, ignored, and left on read more times than I care to count. We have also been surprised — by former teachers who replied within hours, by tutors who stayed up late to finish a lesson plan, by the Cornell professor who made time for a conversation with students she had never met. The good and the bad arrive together. You learn to hold both.
        </p>

        <h2>A Call to Everyone Reading This</h2>
        <p>
          If you are a young person aged 13 to 18 in Singapore who loves coding or wants to learn — come. We are building this for you, and we want you in our first cohort. It is free. It is rigorous. It is designed to take you somewhere.
        </p>
        <p>
          If you are a parent with a child who fits that description — share this with them. The sign-up is simple. The commitment is three hours on Saturdays, for twelve weeks. The potential return, we believe, is significant.
        </p>
        <p>
          If you are an educator, a school administrator, or a teacher who has watched talented students hit a ceiling they couldn&apos;t afford to break through — talk to us. We are looking for partners who share our belief that every child deserves a pathway forward.
        </p>
        <p>
          If you are, regardless of your age, a computing professional, programmer with many years of experience, or a computing student who just believes that every youth in Singapore deserves a chance to learn to code and go beyond the basics — join us. Be part of a community of ex-students and programmers who want to make a real difference. Help us make coding education democratic and accessible throughout Singapore.
        </p>
        <p>
          If you are a company, a foundation, or an individual who believes that equitable access to technical education is one of the more important investments Singapore can make in its own future — we would be grateful to hear from you.
        </p>
        <p>
          And if you are simply someone who believes that the accident of your birth should not determine whether you get to learn something you love — then you already understand why we built this. Tell someone about us.
        </p>

        <h2>On Going, Anyway</h2>
        <p>
          There is a version of this story where we stop at the easy wins. Where we frame BAGUS recognition as success and call it a good semester. Where we tell ourselves the timing wasn&apos;t right, the pipeline wasn&apos;t there, the schools weren&apos;t ready.
        </p>
        <p>
          That version is available to us. We have chosen not to take it.
        </p>
        <p>
          The mission has not changed since January. There is a fourteen-year-old somewhere in this city who wants to learn to code, whose family cannot afford the enrichment class, who has not yet found Bit by Bit Coding. That student is the reason we are still here. That student is the reason we will keep going, regardless of how the inbox looks on any given morning.
        </p>
        <p>
          We will work together, tenaciously, to make coding education democratic to all Singaporean youth. Bit by bit.
        </p>
        <p className="mb-12">
          See you at our first session.
        </p>
      </>
    ),
  },
  'march-2026-bootcamp-recap': {
    title: 'March 2026 Bootcamp Recap',
    subtitle: 'Our first bootcamp brought together aspiring coders from all over Singapore',
    author: 'Brian Lim',
    role: 'VP, COO & Co-Founder, Bit by Bit Coding',
    date: 'March 2026',
    readTime: '5 min read',
    category: 'Events',
    image: `${assetBase}/wework_class_term1.webp`,
    content: (
      <>
        <p>
          On 28 March 2026, twenty young people walked into CSM Academy in Aljunied. Some had coded before. Most hadn&apos;t. All of them were there because someone — a friend, a parent, a Reddit post — told them about Bit by Bit Coding, and they decided to show up.
        </p>
        <p>
          That was our bootcamp. And this is what happened.
        </p>

        <h2>How We Got Here</h2>
        <p>
          When Hongpeng and I started BbB in January, we asked ourselves a simple question: before we build a full twelve-week term, how do we know students actually want what we&apos;re offering? The honest answer was that we didn&apos;t. We had a curriculum, a team of tutors, and plenty of conviction — but zero proof that anybody outside our group chat cared.
        </p>
        <p>
          So we built a bootcamp. One day, three hours, free. No prerequisites, no experience required. Just an introduction to Python, a few micro-challenges, and a chance for students to see whether coding was something they wanted to pursue.
        </p>
        <p>
          We posted it on Reddit and Instagram. That was it. No paid ads, no school partnerships, no mailing list. We had twenty-six registrations within ten days. On the day, twenty showed up.
        </p>

        <h2>What We Saw</h2>
        <p>
          The room was a mix. About seventy-five percent had never coded before. Half were in our target age range of thirteen to eighteen. We had students from schools across the island — some who had taken computing classes, some who had tried Scratch in primary school, some for whom the word <em>function</em> was entirely new.
        </p>
        <p>
          Hongpeng and Pratik led the teaching. The rest of us — Yixiang, Nicholas, Kevin, Ashton — circulated through the room, sitting with students who were stuck, debugging their code, answering questions that ranged from &ldquo;What does this error message mean?&rdquo; to &ldquo;Can I build an app with this?&rdquo;
        </p>
        <p>
          The pick-up was fast. Faster than we expected, honestly. Within the first hour, students were writing their first Python programs — <code className="bg-surface-container-low px-1.5 py-0.5 rounded text-primary text-[13px]">print()</code> statements, variables, simple arithmetic. By the second hour, they were into control flow: <code className="bg-surface-container-low px-1.5 py-0.5 rounded text-primary text-[13px]">if</code> statements, <code className="bg-surface-container-low px-1.5 py-0.5 rounded text-primary text-[13px]">for</code> loops. By the end, we ran a set of micro-challenges — small problems students solved in pairs — and the room got loud in the best way. Kids were leaning over each other&apos;s screens, debating approaches, celebrating when the output finally printed what they wanted.
        </p>

        <h2>What the Numbers Say</h2>
        <p>
          We surveyed students after the session. Here&apos;s what they told us:
        </p>
        <div className="bg-surface-container-low wiggly-border hard-shadow p-5 md:p-6 my-6 flex flex-col gap-3">
          <div className="flex items-center justify-between border-b-2 border-dashed border-ink-black/10 pb-3">
            <span className="font-label font-bold text-ink-black text-[14px] md:text-[15px]">Showed up</span>
            <span className="font-display text-primary text-[18px] md:text-[20px] font-bold">20 students</span>
          </div>
          <div className="flex items-center justify-between border-b-2 border-dashed border-ink-black/10 pb-3">
            <span className="font-label font-bold text-ink-black text-[14px] md:text-[15px]">First-time coders</span>
            <span className="font-display text-primary text-[18px] md:text-[20px] font-bold">75%</span>
          </div>
          <div className="flex items-center justify-between border-b-2 border-dashed border-ink-black/10 pb-3">
            <span className="font-label font-bold text-ink-black text-[14px] md:text-[15px]">Teaching rated clear or very clear</span>
            <span className="font-display text-primary text-[18px] md:text-[20px] font-bold">90%</span>
          </div>
          <div className="flex items-center justify-between border-b-2 border-dashed border-ink-black/10 pb-3">
            <span className="font-label font-bold text-ink-black text-[14px] md:text-[15px]">Found micro-challenges valuable</span>
            <span className="font-display text-primary text-[18px] md:text-[20px] font-bold">95%</span>
          </div>
          <div className="flex items-center justify-between border-b-2 border-dashed border-ink-black/10 pb-3">
            <span className="font-label font-bold text-ink-black text-[14px] md:text-[15px]">Increased confidence in coding</span>
            <span className="font-display text-primary text-[18px] md:text-[20px] font-bold">100%</span>
          </div>
          <div className="flex items-center justify-between border-b-2 border-dashed border-ink-black/10 pb-3">
            <span className="font-label font-bold text-ink-black text-[14px] md:text-[15px]">Want to continue with BbB</span>
            <span className="font-display text-primary text-[18px] md:text-[20px] font-bold">85%</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-label font-bold text-ink-black text-[14px] md:text-[15px]">More likely to pursue coding</span>
            <span className="font-display text-bit-green text-[18px] md:text-[20px] font-bold bg-ink-black/5 px-3 py-1 wiggly-border-thin">100%</span>
          </div>
        </div>
        <p>
          Those numbers are heartening. But one stuck with me more than any other: fifty-five percent of students said the lesson was fast or too fast. We took that seriously. It confirmed what we knew going in — bottlenecks are inevitable in a one-shot three-hour session, and we needed to commit to a slower, deeper pace for the full term.
        </p>

        <h2>Who Found Us</h2>
        <p>
          We asked students where they heard about us. The answer was a bit of a surprise: Reddit drove seventy-seven percent of our registrations. Instagram was nine percent. Word of mouth — friends, family, teachers — made up the rest.
        </p>
        <p>
          We also asked whether anyone in their household received community assistance schemes like CHAS or the Higher Education Bursary. Twenty-eight percent said yes. We never means-test our students, and we never ask at the door — but the fact that nearly a third of our bootcamp attendees come from families receiving financial support tells us we&apos;re reaching the people we set out to reach. Without a single paid advertisement.
        </p>

        <h2>What Comes Next</h2>
        <p>
          The bootcamp was an MVP. It was a proof-of-concept. It proved that there are twenty young people in Singapore who want to learn to code and will give up a Saturday morning for it. It proved that a team of volunteer tutors can deliver a coherent, well-received lesson. It proved that word-of-mouth alone can fill a room.
        </p>
        <p>
          But a bootcamp is a spark, not a fire. The real test starts on 11 April, when Term 1 begins: twelve Saturdays at *SCAPE Orchard, three hours a session, Python from the ground up. We&apos;ve taken the pacing feedback seriously — the term curriculum is designed for depth, not speed, with each week building on the last.
        </p>
        <p>
          To the twenty students who showed up at CSM Academy on a Saturday morning, and to the six who couldn&apos;t make it but registered anyway: thank you. You are the reason Bit by Bit Coding exists. We will be ready for you in April.
        </p>
        <p className="mb-12">
          And to everyone else reading this — we&apos;re still taking applications. It&apos;s free. It always will be.
        </p>
      </>
    ),
  },
  'teaching-python-to-beginners': {
    title: 'Teaching Python to Complete Beginners',
    subtitle: 'What we learned from our first cohort of students who had never coded before',
    author: 'Pratik Ghosh',
    role: 'Head of Curriculum, Bit by Bit Coding',
    date: 'April 2026',
    readTime: '6 min read',
    category: 'Curriculum',
    image: `${assetBase}/kevin_teaching.webp`,
    content: (
      <>
        <p>
          When we sat down to design the curriculum for Bit by Bit Coding, we started with a problem most coding courses don&apos;t have: our students might never have seen a line of code. Not Scratch, not a YouTube tutorial, not a cousin who &ldquo;does something with computers.&rdquo; Nothing. A blank slate.
        </p>
        <p>
          That sounds like a challenge. It is. But it&apos;s also an opportunity — because when someone has never been told that coding is hard, or that it&apos;s for a certain kind of person, they approach it with a kind of openness that you can&apos;t manufacture. Our job was to not waste that.
        </p>

        <h2>Starting with Why, Before How</h2>
        <p>
          The first decision we made was about pedagogy. Not which textbook to use, not which IDE to install — but how we wanted students to think about coding itself.
        </p>
        <p>
          We drew on three frameworks. The first is <strong>constructionist learning</strong>, the idea pioneered by Seymour Papert: students learn by building things that are meaningful to them, not by working through abstract exercises. The second is what Mark Guzdial calls <strong>learner-centred design</strong> — the curriculum should adapt to the learner, not the other way around. The third is a methodology from Sultan Idris Education University that combines project-based learning with performance-based competition: students build something real, and then they present it.
        </p>
        <p>
          What this looks like in practice: we don&apos;t start with <code className="bg-surface-container-low px-1.5 py-0.5 rounded text-primary text-[13px]">print(&quot;Hello World&quot;)</code> as an end in itself. We start with a question: <em>what would you want a computer to do for you?</em> The code comes later. The motivation comes first.
        </p>

        <h2>The Twelve-Week Arc</h2>
        <p>
          Our Python: Language &amp; Application programme is twelve weeks long. Three hours every Saturday. Here&apos;s what the progression looks like:
        </p>
        <div className="bg-surface-container-low wiggly-border hard-shadow p-5 md:p-6 my-6">
          <div className="flex flex-col gap-3">
            <div className="flex items-start gap-3">
              <span className="bg-primary text-on-primary font-label font-bold text-[11px] px-2.5 py-1 wiggly-border-thin shrink-0 mt-0.5">Wk 1</span>
              <span className="text-on-surface-variant text-[14px] md:text-[15px] leading-relaxed">Lists, dicts, tuples — organising data</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-primary text-on-primary font-label font-bold text-[11px] px-2.5 py-1 wiggly-border-thin shrink-0 mt-0.5">Wk 2</span>
              <span className="text-on-surface-variant text-[14px] md:text-[15px] leading-relaxed">Functions and scope — writing reusable blocks</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-primary text-on-primary font-label font-bold text-[11px] px-2.5 py-1 wiggly-border-thin shrink-0 mt-0.5">Wk 3</span>
              <span className="text-on-surface-variant text-[14px] md:text-[15px] leading-relaxed">File I/O — reading and writing real data</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-primary text-on-primary font-label font-bold text-[11px] px-2.5 py-1 wiggly-border-thin shrink-0 mt-0.5">Wk 4</span>
              <span className="text-on-surface-variant text-[14px] md:text-[15px] leading-relaxed">Recursion — thinking in self-references</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-primary text-on-primary font-label font-bold text-[11px] px-2.5 py-1 wiggly-border-thin shrink-0 mt-0.5">Wk 5–6</span>
              <span className="text-on-surface-variant text-[14px] md:text-[15px] leading-relaxed">Searching and sorting algorithms</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-primary text-on-primary font-label font-bold text-[11px] px-2.5 py-1 wiggly-border-thin shrink-0 mt-0.5">Wk 7–8</span>
              <span className="text-on-surface-variant text-[14px] md:text-[15px] leading-relaxed">OOP and data structures — linked lists, binary trees</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-bit-green text-ink-black font-label font-bold text-[11px] px-2.5 py-1 wiggly-border-thin shrink-0 mt-0.5">Wk 9–11</span>
              <span className="text-on-surface-variant text-[14px] md:text-[15px] leading-relaxed">Hackathon — three weeks to build and pitch a real project</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-primary text-on-primary font-label font-bold text-[11px] px-2.5 py-1 wiggly-border-thin shrink-0 mt-0.5">Wk 12</span>
              <span className="text-on-surface-variant text-[14px] md:text-[15px] leading-relaxed">Data representation &amp; APIs — connecting to the real world</span>
            </div>
          </div>
        </div>
        <p>
          The arc matters. We start with the mechanics — how to store things, how to reuse code, how to read a file. Then we move into the ideas: recursion, algorithms, data structures. Then we ask students to apply everything: a three-week hackathon where they build a project, with judges from Singapore&apos;s tech community, and pitch it.
        </p>
        <p>
          The hackathon is not a gimmick. It&apos;s the assessment. We don&apos;t give grades. We don&apos;t give exams. We give students a problem, a deadline, and a stage. If they can build something that works and explain why it matters, that&apos;s the proof.
        </p>

        <h2>The Scaffolding Problem</h2>
        <p>
          Here&apos;s the tension every coding educator faces: how much do you help before you&apos;re doing the work for them?
        </p>
        <p>
          Our answer: heavy scaffolding early, independent problem-solving later. In the first few weeks, tutors walk students through every line. We write code on the screen and explain what each part does. But as the weeks progress, we pull back. By Week 5, students are writing functions on their own. By Week 8, they&apos;re debugging their own data structures. By the hackathon, we&apos;re advisors, not instructors — they come to us with questions, but the project is theirs.
        </p>
        <p>
          This is not laziness. It&apos;s pedagogy. If you hold a student&apos;s hand the entire way, they never learn to walk on their own.
        </p>

        <h2>Normalising the Debug</h2>
        <p>
          The most important thing we teach isn&apos;t a Python keyword. It&apos;s that <strong>getting stuck is normal.</strong>
        </p>
        <p>
          In our bootcamp, we watched students hit their first error message — a <code className="bg-surface-container-low px-1.5 py-0.5 rounded text-primary text-[13px]">SyntaxError</code> or an <code className="bg-surface-container-low px-1.5 py-0.5 rounded text-primary text-[13px]">IndentationError</code> — and freeze. Some apologised. Some put their hands down and went quiet. One student turned to a tutor and said, &ldquo;I think I broke it.&rdquo;
        </p>
        <p>
          You didn&apos;t break it. That&apos;s just Python talking to you.
        </p>
        <p>
          We design the lesson so that errors are part of the curriculum, not interruptions to it. When a student hits a bug, we don&apos;t rush to fix it. We ask: what does the error message say? What do you think it means? What would you change? Debugging is a skill, and like any skill, it gets better with practice. If students leave BbB with one habit, it should be this: when the code doesn&apos;t work, the first thing to do is read the error. Not panic. Not ask for help. Read.
        </p>

        <h2>What the Curriculum Advisor Said</h2>
        <p>
          Before we finalised the curriculum, we sent it to a professor of coding education at Cornell University. Her feedback shaped several decisions: reduce content density in the early weeks (we had too much packed into single sessions), use multiple representation modes (not just text — diagrams, peer explanation, running code live), and build in peer tutoring time (students learn better when they explain concepts to each other).
        </p>
        <p>
          We also received input from two computing teachers at Victoria Junior College, whose H2 Computing syllabus informed the structure and rigour of our algorithm and data structure units. The result is a curriculum that is informed by both academic research and real classroom experience — designed for students who have never coded before, but held to a standard that would not be out of place in a Junior College computing class.
        </p>

        <h2>Free Should Not Mean Second-Rate</h2>
        <p>
          This is the point I want to make most clearly. Free does not mean easy. Free does not mean shallow. Free does not mean &ldquo;a taste of coding&rdquo; or &ldquo;exposure&rdquo; or whatever euphemism people use for the kind of programme that teaches loops and then says goodbye.
        </p>
        <p>
          We are building a pathway. It starts with Python and it goes — Flask, SQL, web apps, data science, AI, robotics. It is multi-year. It is structured. And it is free because the alternative — a world where only families who can afford three hundred dollars a month get to learn this — is not acceptable.
        </p>
        <p>
          Term 1 starts on 11 April at *SCAPE Orchard. If you are a student who wants to learn, or a parent who has a child who might, or a programmer who wants to teach — the door is open.
        </p>
        <p className="mb-12">
          We&apos;ll be there every Saturday. Bit by bit.
        </p>
      </>
    ),
  },
};

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPosts[slug] : null;

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