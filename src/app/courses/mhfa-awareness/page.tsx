import CoursePageTemplate, { CourseData } from "@/components/CoursePageTemplate";

const course: CourseData = {
  slug: "mhfa-awareness",
  eyebrow: "FAA Accredited · Half-day awareness",
  title: "Mental Health First Aid Awareness",
  description:
    "An introduction to mental health for whole teams. Reduces stigma, opens conversations, and gives every attendee a foundation for supporting those around them.",
  length: "4 hours",
  groupSize: null,
  format: "In person",
  certified: "Attendance certificate",
  learnItems: [
    {
      title: "Understand what mental health is",
      desc: "Learn what we mean by mental health, how it exists on a spectrum, and why the workplace matters.",
    },
    {
      title: "Recognise the signs",
      desc: "Spot when a colleague may be struggling and understand what common mental health conditions can look like day-to-day.",
    },
    {
      title: "Start a conversation",
      desc: "Feel confident enough to check in with someone, without worrying about saying the wrong thing.",
    },
    {
      title: "Know where to point people",
      desc: "Understand what support is available — internally and through the NHS — so you can signpost effectively.",
    },
  ],
  structure: [
    {
      label: "Morning",
      title: "Mental health fundamentals",
      desc: "What mental health is, the spectrum of wellbeing, common conditions, and the impact of stigma in the workplace.",
    },
    {
      label: "Afternoon",
      title: "Spotting signs and starting conversations",
      desc: "Recognising when someone is struggling, how to approach them, and what to do next.",
    },
  ],
  whoItIsFor:
    "All staff at any level. This course works well as a whole-organisation awareness session, or as a first step for teams before designating qualified first aiders. No prior knowledge required.",
  included: [
    "Course workbook",
    "Attendance certificate",
    "Pre-course briefing",
    "Post-course summary for your records",
  ],
  faqs: [
    {
      q: "Is there a maximum group size?",
      a: "There's flexibility for larger groups on this course. Get in touch with your numbers and David will advise on the best format.",
    },
    {
      q: "Where does the course take place?",
      a: "At your workplace or a venue of your choice. David will confirm what's needed for the room ahead of the session.",
    },
    {
      q: "Is this the same as the full two-day course?",
      a: "No — this is an awareness session rather than a certification course. It's ideal for whole-team education. For qualified first aiders, see the First Aid for Mental Health course.",
    },
    {
      q: "What does it cost?",
      a: "Quoted per session. Get in touch and David will come back with an all-in quote within two working days.",
    },
  ],
  ctaTitle: "Ready to raise awareness across your team?",
  related: [
    { href: "/courses/mhfa", label: "Flagship course", title: "First Aid for Mental Health" },
    { href: "/courses/mhfa-supervising", label: "For supervisors", title: "Supervising First Aid for Mental Health" },
    { href: "/courses/youth-mental-health", label: "Working with young people?", title: "Youth Mental Health First Aid" },
  ],
};

export default function MHFAAwarenessPage() {
  return <CoursePageTemplate course={course} />;
}
