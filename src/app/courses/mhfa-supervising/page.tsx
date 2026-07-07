import CoursePageTemplate, { CourseData } from "@/components/CoursePageTemplate";

const course: CourseData = {
  slug: "mhfa-supervising",
  eyebrow: "FAA Accredited · For supervisors",
  title: "Supervising First Aid for Mental Health",
  description:
    "For those responsible for overseeing mental health first aiders. Build the knowledge and confidence to support your first aiders and embed a culture of good mental health practice.",
  length: "2 days",
  groupSize: "Up to 16",
  format: "In person",
  certified: "3 years",
  learnItems: [
    {
      title: "Understand the supervisor role",
      desc: "Clarify what it means to supervise a mental health first aider — responsibilities, boundaries, and what good support looks like.",
    },
    {
      title: "Support your first aiders",
      desc: "Recognise when your first aiders need support themselves, and how to provide it without overstepping clinical boundaries.",
    },
    {
      title: "Manage disclosures confidently",
      desc: "Know how to handle sensitive disclosures appropriately, maintain confidentiality, and escalate when necessary.",
    },
    {
      title: "Build a mentally healthy team",
      desc: "Develop proactive strategies to promote wellbeing and reduce stigma across your organisation.",
    },
  ],
  structure: [
    {
      label: "Day 1",
      title: "The supervisor role and mental health foundations",
      desc: "What supervising a first aider involves, mental health conditions in depth, and how to have supportive conversations.",
    },
    {
      label: "Day 2",
      title: "Practical supervision and culture",
      desc: "Managing risk, handling disclosures, self-care for supervisors, and embedding a mentally healthy workplace culture.",
    },
  ],
  whoItIsFor:
    "HR managers, team leaders, line managers, and wellbeing leads who will be responsible for overseeing mental health first aiders within their organisation. Completion of the First Aid for Mental Health course is recommended but not required.",
  included: [
    "Printed course manual to keep",
    "FAA certificate, valid 3 years",
    "Pre-course briefing",
    "Post-course summary for your records",
  ],
  faqs: [
    {
      q: "Do I need to have completed First Aid for Mental Health first?",
      a: "It's recommended but not required. The course builds on first aid principles, so prior knowledge helps — but David covers the foundations as part of the programme.",
    },
    {
      q: "How many people can attend?",
      a: "Up to 16 per course, to allow for meaningful group discussion and scenario work.",
    },
    {
      q: "Where does the course take place?",
      a: "At your workplace or a venue of your choice. David will confirm room requirements ahead of the session.",
    },
    {
      q: "What does it cost?",
      a: "Courses are quoted per session, not per head. Get in touch and David will come back with an all-in quote within two working days.",
    },
  ],
  ctaTitle: "Ready to train your supervisors?",
  related: [
    { href: "/courses/mhfa", label: "Flagship course", title: "First Aid for Mental Health" },
    { href: "/courses/mhfa-awareness", label: "For all staff", title: "Mental Health First Aid Awareness" },
    { href: "/courses/refresher", label: "Already certified?", title: "Annual Refresher" },
  ],
};

export default function MHFASupervisingPage() {
  return <CoursePageTemplate course={course} />;
}
