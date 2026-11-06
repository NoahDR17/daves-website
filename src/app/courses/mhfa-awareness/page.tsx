import CoursePageTemplate, { CourseData } from "@/components/CoursePageTemplate";

const course: CourseData = {
  slug: "mhfa-awareness",
  eyebrow: "FAA Level 1 Award · Half Day",
  title: "Awareness of First Aid for Mental Health",
  description:
    "An introductory qualification that provides a practical overview of mental health and mental wellbeing. Designed for all staff, it helps people recognise possible mental health concerns and develop confidence in initiating supportive conversations.",
  length: "4 hours",
  groupSize: null,
  format: "In person",
  certified: "Attendance certificate",
  learnItems: [
    {
      title: "Understand mental health and wellbeing",
      desc: "Learn what mental health is, how it exists on a spectrum, and why awareness in the workplace matters for everyone.",
    },
    {
      title: "Recognise signs of mental ill health",
      desc: "Develop awareness of the possible signs that someone may be experiencing a mental health difficulty, without making assumptions.",
    },
    {
      title: "Start a supportive conversation",
      desc: "Build confidence to check in with a colleague sensitively and appropriately, using the First Aid for Mental Health action plan as a guide.",
    },
    {
      title: "Signpost to professional help",
      desc: "Understand the range of support available and how to encourage someone to access it.",
    },
  ],
  structure: [
    {
      label: "First half",
      title: "Mental health fundamentals",
      desc: "What First Aid for Mental Health is, understanding mental health and wellbeing, recognising signs of mental ill health, and common conditions.",
    },
    {
      label: "Second half",
      title: "Starting conversations and signposting",
      desc: "The First Aid for Mental Health action plan, having supportive conversations, and signposting individuals to appropriate professional help.",
    },
  ],
  whoItIsFor:
    "This course is ideal for all employees and community members who want a greater understanding of mental health. No prior knowledge is required. It works particularly well as a whole-organisation awareness session or as a starting point before designating qualified first aiders.",
  included: [
    "Learner workbook",
    "FAA Level 1 attendance certificate",
    "Pre-course briefing",
    "Post-course summary for your records",
  ],
  faqs: [
    {
      q: "Is there a maximum group size?",
      a: "Standard group sessions cover up to 16 delegates. For larger groups, contact us and David will advise on the best format.",
    },
    {
      q: "Is this the same as the full one-day or two-day course?",
      a: "No. This is an awareness-level introduction rather than a certification course. For qualified Mental Health First Aiders, see the Level 2 First Aid for Mental Health course.",
    },
    {
      q: "What does it cost?",
      a: "Pricing is tailored to your organisation, based on group size, location and whether you are booking a group session or an individual place. Get in touch for a transparent, no-obligation quote.",
    },
    {
      q: "Where does the course take place?",
      a: "At your workplace or a venue of your choice. David will confirm what is needed ahead of the session.",
    },
  ],
  ctaTitle: "Ready to raise mental health awareness across your organisation?",
  related: [
    { href: "/courses/mhfa", label: "Next step", title: "First Aid for Mental Health (Level 2)" },
    { href: "/courses/mhfa-supervising", label: "Senior qualification", title: "Supervising First Aid for Mental Health" },
    { href: "/courses/youth-mental-health", label: "Working with young people?", title: "Youth Mental Health First Aid" },
  ],
};

export default function MHFAAwarenessPage() {
  return <CoursePageTemplate course={course} />;
}
