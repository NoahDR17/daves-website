import CoursePageTemplate, { CourseData } from "@/components/CoursePageTemplate";

const course: CourseData = {
  slug: "mhfa",
  eyebrow: "FAA Level 2 Award · One Day",
  title: "First Aid for Mental Health",
  description:
    "A nationally recognised qualification for anyone who wants to become a Mental Health First Aider within their organisation. Develop practical skills to identify mental health concerns, start conversations and provide initial support.",
  length: "1 day",
  groupSize: "Up to 16",
  format: "In person",
  certified: "3 years",
  learnItems: [
    {
      title: "Identify mental health conditions",
      desc: "Recognise indicators of common mental health conditions — depression, anxiety, psychosis, and suicidal ideation — and understand how they present in the workplace.",
    },
    {
      title: "Start supportive conversations",
      desc: "Develop the confidence to approach someone who may be struggling, listen without judgement, and provide meaningful initial support.",
    },
    {
      title: "Apply the First Aid for Mental Health action plan",
      desc: "Use a structured approach to assess situations, give reassurance, encourage appropriate help-seeking, and know when to act.",
    },
    {
      title: "Signpost to professional support",
      desc: "Understand the range of support available — workplace, NHS and community — and help people access what they need.",
    },
  ],
  structure: [
    {
      label: "Morning",
      title: "Understanding mental health",
      desc: "What First Aid for Mental Health is, identifying mental health conditions, stress and its impact, the First Aid for Mental Health action plan.",
    },
    {
      label: "Afternoon",
      title: "Providing support in practice",
      desc: "Providing advice and starting conversations, effects of drugs and alcohol, supporting positive mental health in the workplace, self-care.",
    },
  ],
  whoItIsFor:
    "This course is suitable for anyone wishing to become a Mental Health First Aider within their organisation. It is particularly relevant for managers, supervisors, HR professionals, workplace wellbeing champions, healthcare professionals, teachers and educators. No prior knowledge or experience is required.",
  included: [
    "Learner workbook and course materials",
    "FAA Level 2 certificate, valid 3 years",
    "Pre-course briefing",
    "Post-course summary for your records",
  ],
  faqs: [
    {
      q: "How many people can attend?",
      a: "Up to 16 per course. This keeps the group small enough for meaningful discussion and practical exercises.",
    },
    {
      q: "Where does the course take place?",
      a: "At your workplace or a venue of your choice. David will confirm room requirements ahead of the session.",
    },
    {
      q: "What does it cost?",
      a: "Up to 12 delegates: £1,150. 13–16 delegates: £1,295. Individual places on open courses are available at £175 per person. Contact us for a quote.",
    },
    {
      q: "What if I want to attend as an individual?",
      a: "Individual places may be available on scheduled open courses. Contact us to find out what is currently available.",
    },
  ],
  ctaTitle: "Ready to develop Mental Health First Aiders in your organisation?",
  related: [
    { href: "/courses/mhfa-supervising", label: "Step up", title: "Supervising First Aid for Mental Health" },
    { href: "/courses/refresher", label: "Already certified?", title: "Annual Refresher" },
    { href: "/courses/mhfa-awareness", label: "Whole-team awareness", title: "Mental Health First Aid Awareness" },
  ],
};

export default function MHFAPage() {
  return <CoursePageTemplate course={course} />;
}
