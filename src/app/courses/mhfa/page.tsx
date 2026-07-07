import CoursePageTemplate, { CourseData } from "@/components/CoursePageTemplate";

const course: CourseData = {
  slug: "mhfa",
  eyebrow: "FAA Accredited · Flagship qualification",
  title: "First Aid for Mental Health",
  description:
    "Become a certified Mental Health First Aider. Equip your designated people to spot the signs, respond with confidence, and signpost to the right support.",
  length: "2 days",
  groupSize: "Up to 16",
  format: "In person",
  certified: "3 years",
  flagship: true,
  learnItems: [
    {
      title: "Spot the early signs",
      desc: "Recognise indicators of common mental health conditions — depression, anxiety, psychosis, and suicidal ideation — before they escalate.",
    },
    {
      title: "Have the conversation",
      desc: "Start supportive conversations with someone in distress, with confidence and without making it worse.",
    },
    {
      title: "Apply the MHFA action plan",
      desc: "Use the ALGEE framework to assess risk, listen non-judgementally, give reassurance, and encourage appropriate help.",
    },
    {
      title: "Signpost effectively",
      desc: "Guide colleagues toward the right professional help, with accurate knowledge of NHS and self-help pathways.",
    },
  ],
  structure: [
    {
      label: "Day 1",
      title: "Understanding mental health",
      desc: "Foundations: what mental health is, common conditions, stigma, the MHFA action plan, and depression in depth.",
    },
    {
      label: "Day 2",
      title: "Responding in practice",
      desc: "Anxiety, psychosis, suicide and self-harm. Practical role-plays, supporting recovery, and self-care for first aiders.",
    },
  ],
  whoItIsFor:
    "Anyone your organisation is designating as a mental health first aider — peer-support staff, HR partners, line managers, wellbeing leads, or any employee taking on the first aider role. No prior training required.",
  included: [
    "Printed course manual to keep",
    "FAA certificate, valid 3 years",
    "MHFAider Support App access for 3 years",
    "Pre-course briefing",
    "Post-course summary for your records",
  ],
  faqs: [
    {
      q: "How many people can attend?",
      a: "Up to 16 per course. This keeps the group small enough for meaningful discussion and role-play practice.",
    },
    {
      q: "Where does the course take place?",
      a: "At your workplace or a venue of your choice. David will confirm room requirements ahead of the session.",
    },
    {
      q: "What does it cost?",
      a: "Courses are quoted per session, not per head. Get in touch and David will come back with an all-in quote within two working days.",
    },
    {
      q: "What if I want to attend as an individual?",
      a: "David primarily runs in-house training for organisations, but is happy to discuss options for individuals. Get in touch to find out what's possible.",
    },
  ],
  ctaTitle: "Ready to certify your Mental Health First Aiders?",
  related: [
    { href: "/courses/refresher", label: "Already certified?", title: "Annual Refresher" },
    { href: "/courses/mhfa-supervising", label: "For supervisors", title: "Supervising First Aid for Mental Health" },
    { href: "/courses/mhfa-awareness", label: "For all staff", title: "Mental Health First Aid Awareness" },
  ],
};

export default function MHFAPage() {
  return <CoursePageTemplate course={course} />;
}
