import CoursePageTemplate, { CourseData } from "@/components/CoursePageTemplate";

const course: CourseData = {
  slug: "refresher",
  eyebrow: "FAA Accredited · Renewal",
  title: "Annual Refresher",
  description:
    "For certified Mental Health First Aiders renewing their three-year qualification. Keeps skills sharp, updates knowledge, and re-certifies your first aiders for another three years.",
  length: "Half day",
  groupSize: "Up to 16",
  format: "In person",
  certified: "Re-certification · 3 years",
  learnItems: [
    {
      title: "Refresh core skills",
      desc: "Revisit the ALGEE action plan, practice supportive conversations, and rebuild confidence in the first aider role.",
    },
    {
      title: "Update your knowledge",
      desc: "Catch up on any changes to mental health guidance, NHS pathways, and best practice since your last certification.",
    },
    {
      title: "Reflect on your experience",
      desc: "Discuss real situations you've encountered as a first aider, with guidance from David on what went well and what to do differently.",
    },
    {
      title: "Renew your certification",
      desc: "Leave re-certified and ready for another three years in the first aider role.",
    },
  ],
  structure: [
    {
      label: "Morning",
      title: "Skills refresh and knowledge update",
      desc: "Revisiting the fundamentals, updating on any guidance changes, and practising key conversations in a small group setting.",
    },
    {
      label: "Closing session",
      title: "Reflection and re-certification",
      desc: "Group reflection on first aider experiences, any final questions, and issue of renewed certificates.",
    },
  ],
  whoItIsFor:
    "Existing certified Mental Health First Aiders whose three-year qualification is due for renewal. Your certificate will state the renewal date — it's recommended to book before it lapses to avoid a full re-qualification.",
  included: [
    "Refresher workbook",
    "Renewed FAA certificate, valid 3 years",
    "Pre-course briefing",
    "Post-course summary for your records",
  ],
  faqs: [
    {
      q: "How often do I need to refresh?",
      a: "Every three years. It's recommended to refresh before your certificate lapses — if it does lapse, you may need to complete the full two-day course again.",
    },
    {
      q: "How many people can attend?",
      a: "Up to 16 per session.",
    },
    {
      q: "Can I mix first aiders from different courses on the same refresher?",
      a: "Yes — the refresher covers core MHFA first aid skills and is suitable for those who completed the full two-day course, regardless of when they trained.",
    },
    {
      q: "What does it cost?",
      a: "Quoted per session. Get in touch and David will come back with an all-in quote within two working days.",
    },
  ],
  ctaTitle: "Time to renew your team's certification?",
  related: [
    { href: "/courses/mhfa", label: "Full qualification", title: "First Aid for Mental Health" },
    { href: "/courses/mhfa-supervising", label: "For supervisors", title: "Supervising First Aid for Mental Health" },
    { href: "/courses/mhfa-awareness", label: "For all staff", title: "Mental Health First Aid Awareness" },
  ],
};

export default function RefresherPage() {
  return <CoursePageTemplate course={course} />;
}
