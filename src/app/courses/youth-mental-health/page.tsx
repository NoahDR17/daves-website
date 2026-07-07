import CoursePageTemplate, { CourseData } from "@/components/CoursePageTemplate";

const course: CourseData = {
  slug: "youth-mental-health",
  eyebrow: "FAA Accredited · Specialist course",
  title: "Youth Mental Health First Aid",
  description:
    "Specialist training focused on the mental health of young people aged 8–18. For anyone who works with, cares for, or supports children and young people.",
  length: "1 day",
  groupSize: "Up to 16",
  format: "In person",
  certified: "Attendance certificate",
  learnItems: [
    {
      title: "Understand youth mental health",
      desc: "Learn how mental health presents differently in young people and why early intervention is especially important.",
    },
    {
      title: "Recognise warning signs",
      desc: "Spot the indicators of common conditions in young people — anxiety, depression, self-harm, eating disorders — and understand what they can look like in a school or youth setting.",
    },
    {
      title: "Have age-appropriate conversations",
      desc: "Approach sensitive conversations with young people in a way that is safe, supportive, and developmentally appropriate.",
    },
    {
      title: "Signpost to the right support",
      desc: "Know what support is available for young people — CAMHS, school-based services, crisis lines — and how to guide them toward it.",
    },
  ],
  structure: [
    {
      label: "Morning",
      title: "Youth mental health fundamentals",
      desc: "How mental health develops in young people, common conditions, risk factors, and the importance of early intervention.",
    },
    {
      label: "Afternoon",
      title: "Responding and signposting",
      desc: "Recognising crisis, having safe conversations, self-harm and suicide in young people, and navigating the support landscape.",
    },
  ],
  whoItIsFor:
    "Teachers, teaching assistants, youth workers, coaches, sports leaders, school counsellors, social workers, and anyone who works with or cares for children and young people aged 8–18. No prior mental health training is required.",
  included: [
    "Course workbook",
    "Attendance certificate",
    "Pre-course briefing",
    "Post-course summary for your records",
  ],
  faqs: [
    {
      q: "How many people can attend?",
      a: "Up to 16 per course. The small group size allows for safe, open discussion of sensitive topics.",
    },
    {
      q: "Is this suitable for school staff?",
      a: "Yes — it's designed with school and youth settings in mind. David has experience delivering this course to teaching and support staff.",
    },
    {
      q: "Where does the course take place?",
      a: "At your school, organisation, or a venue of your choice. David will confirm what's needed ahead of the session.",
    },
    {
      q: "What does it cost?",
      a: "Quoted per session. Get in touch and David will come back with an all-in quote within two working days.",
    },
  ],
  ctaTitle: "Ready to better support the young people in your care?",
  related: [
    { href: "/courses/mhfa", label: "Flagship course", title: "First Aid for Mental Health" },
    { href: "/courses/mhfa-awareness", label: "For all staff", title: "Mental Health First Aid Awareness" },
    { href: "/courses/mhfa-supervising", label: "For supervisors", title: "Supervising First Aid for Mental Health" },
  ],
};

export default function YouthMentalHealthPage() {
  return <CoursePageTemplate course={course} />;
}
