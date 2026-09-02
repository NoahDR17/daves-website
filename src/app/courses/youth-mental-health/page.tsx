import CoursePageTemplate, { CourseData } from "@/components/CoursePageTemplate";

const course: CourseData = {
  slug: "youth-mental-health",
  eyebrow: "FAA Level 2 Award · One Day",
  title: "First Aid for Youth Mental Health",
  description:
    "A specialist qualification focusing on the mental health and wellbeing of children and young people. Participants gain the knowledge and confidence to recognise possible mental health challenges in young people and respond appropriately.",
  length: "1 day",
  groupSize: "Up to 16",
  format: "In person",
  certified: "Attendance certificate",
  learnItems: [
    {
      title: "Understand youth mental health",
      desc: "Learn how mental health develops in children and young people, and why early recognition and intervention is especially important.",
    },
    {
      title: "Recognise signs of emotional distress",
      desc: "Identify common mental health conditions affecting young people — anxiety, depression, self-harm, eating disorders — and understand how they can present.",
    },
    {
      title: "Communicate effectively with young people",
      desc: "Develop age-appropriate communication skills to approach sensitive conversations in a safe and supportive way.",
    },
    {
      title: "Access specialist support",
      desc: "Understand the support pathways available for children and young people — including CAMHS, school-based services and crisis support — and how to guide them towards help.",
    },
  ],
  structure: [
    {
      label: "Morning",
      title: "Youth mental health fundamentals",
      desc: "Understanding youth mental health, recognising common conditions, factors affecting young people's wellbeing, and effective communication skills.",
    },
    {
      label: "Afternoon",
      title: "Responding and signposting",
      desc: "The First Aid for Mental Health action plan applied to young people, self-harm and suicide, supporting positive mental wellbeing, and accessing specialist support services.",
    },
  ],
  whoItIsFor:
    "This course is suitable for teachers, teaching assistants, school support staff, youth workers, coaches and sports leaders, social workers, parents and carers, and healthcare professionals working with children and young people aged 8–18. No prior mental health training is required.",
  included: [
    "Learner workbook and course materials",
    "FAA Level 2 attendance certificate",
    "Pre-course briefing",
    "Post-course summary for your records",
  ],
  faqs: [
    {
      q: "How many people can attend?",
      a: "Up to 16 per course. The small group format supports open and safe discussion of sensitive topics.",
    },
    {
      q: "Is this suitable for school staff?",
      a: "Yes — the course is designed with school and youth settings in mind, and David has experience delivering to teaching and support staff.",
    },
    {
      q: "What does it cost?",
      a: "Up to 12 delegates: £1,150. 13–16 delegates: £1,295. Individual places on open courses are available at £175 per person. Contact us for a quote.",
    },
    {
      q: "Where does the course take place?",
      a: "At your school, organisation, or a venue of your choice. David will confirm requirements ahead of the session.",
    },
  ],
  ctaTitle: "Ready to better support the young people in your care?",
  related: [
    { href: "/courses/mhfa", label: "Adult first aid qualification", title: "First Aid for Mental Health (Level 2)" },
    { href: "/courses/mhfa-awareness", label: "Whole-team awareness", title: "Awareness of First Aid for Mental Health" },
    { href: "/courses/mhfa-supervising", label: "Senior qualification", title: "Supervising First Aid for Mental Health" },
  ],
};

export default function YouthMentalHealthPage() {
  return <CoursePageTemplate course={course} />;
}
