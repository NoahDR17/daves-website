import CoursePageTemplate, { CourseData } from "@/components/CoursePageTemplate";

const course: CourseData = {
  slug: "refresher",
  eyebrow: "Annual Refresher · 3 Hours",
  title: "First Aid for Mental Health Annual Refresher",
  description:
    "For individuals who have previously completed a Mental Health First Aid qualification. The refresher revisits key principles, updates knowledge on current approaches, and helps maintain confidence and competence in the first aider role.",
  length: "3 hours",
  groupSize: "Up to 16",
  format: "In person",
  certified: "Re-certification · 3 years",
  learnItems: [
    {
      title: "Refresh core knowledge and skills",
      desc: "Revisit the First Aid for Mental Health action plan, key mental health conditions, and the principles of supportive conversation.",
    },
    {
      title: "Update on current approaches",
      desc: "Catch up on any changes to mental health guidance, NHS pathways and best practice since your previous qualification.",
    },
    {
      title: "Review and reflect",
      desc: "Consider situations encountered in the first aider role and reinforce positive practices for supporting colleagues and others.",
    },
    {
      title: "Maintain your certification",
      desc: "Annual refresher training is strongly recommended to maintain competence and confidence between qualification renewal periods.",
    },
  ],
  structure: [
    {
      label: "First half",
      title: "Knowledge refresh and updates",
      desc: "Revisiting the First Aid for Mental Health action plan, common conditions, and any updates to guidance or support pathways.",
    },
    {
      label: "Second half",
      title: "Reflection and re-certification",
      desc: "Group discussion on first aider experiences, reinforcing best practice, and confirmation of renewed certification.",
    },
  ],
  whoItIsFor:
    "This course is designed for individuals who have previously completed a Mental Health First Aid qualification at Level 1, 2 or 3. Annual refresher training is strongly recommended to maintain skills and confidence. It does not replace the full qualification for those whose certificate has lapsed beyond three years.",
  included: [
    "Refresher workbook",
    "Renewed certificate",
    "Pre-course briefing",
    "Post-course summary for your records",
  ],
  faqs: [
    {
      q: "How often should I attend a refresher?",
      a: "Annual refresher training is strongly recommended. Qualifications are valid for three years, after which a full re-qualification is required. Regular refreshers help maintain confidence and keep knowledge current.",
    },
    {
      q: "What if my certificate has already lapsed?",
      a: "If your certificate has lapsed beyond three years, you may need to complete the full qualification again rather than the refresher. Contact us to discuss your situation.",
    },
    {
      q: "What does it cost?",
      a: "Up to 12 delegates: £595. 13–16 delegates: £695. Individual places on open courses are available at £75 per person. Contact us for a quote.",
    },
    {
      q: "Where does the course take place?",
      a: "At your workplace or a venue of your choice. David will confirm what is needed ahead of the session.",
    },
  ],
  ctaTitle: "Time to refresh and renew?",
  related: [
    { href: "/courses/mhfa", label: "Level 2 qualification", title: "First Aid for Mental Health" },
    { href: "/courses/mhfa-supervising", label: "Level 3 qualification", title: "Supervising First Aid for Mental Health" },
    { href: "/courses/mhfa-awareness", label: "Whole-team awareness", title: "Awareness of First Aid for Mental Health" },
  ],
};

export default function RefresherPage() {
  return <CoursePageTemplate course={course} />;
}
