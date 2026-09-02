import CoursePageTemplate, { CourseData } from "@/components/CoursePageTemplate";

const course: CourseData = {
  slug: "mhfa-supervising",
  eyebrow: "FAA Level 3 Award · Two Days",
  title: "Supervising First Aid for Mental Health",
  description:
    "The most comprehensive mental health first aid qualification available. Designed for individuals who wish to take a leading role in supporting mental health within their organisation, with an in-depth understanding of conditions and how to promote positive mental health cultures.",
  length: "2 days",
  groupSize: "Up to 16",
  format: "In person",
  certified: "3 years",
  learnItems: [
    {
      title: "Understand mental health and mental illness",
      desc: "Develop a comprehensive understanding of a range of mental health conditions, stress and its impact, and the factors that affect mental wellbeing.",
    },
    {
      title: "Conduct supportive conversations confidently",
      desc: "Lead supportive conversations with colleagues experiencing mental health difficulties, applying the First Aid for Mental Health action plan.",
    },
    {
      title: "Supervise and support first aiders",
      desc: "Take a leading role in supporting Mental Health First Aiders within your organisation, recognising when they themselves need support.",
    },
    {
      title: "Promote positive mental health cultures",
      desc: "Develop strategies for building mentally healthy workplaces, reducing stigma and encouraging early intervention across your organisation.",
    },
  ],
  structure: [
    {
      label: "Day 1",
      title: "Mental health foundations and conditions",
      desc: "Understanding mental health and illness, recognising a range of common conditions, stress and its effects, the First Aid for Mental Health action plan, and depression in depth.",
    },
    {
      label: "Day 2",
      title: "Practical skills and workplace culture",
      desc: "Anxiety, psychosis, suicide and self-harm, the effects of alcohol and substance misuse, promoting positive mental health, signposting, and the supervising role.",
    },
  ],
  whoItIsFor:
    "This qualification is designed for individuals taking a leading role in mental health support within their organisation — including HR professionals, senior managers, occupational health staff, wellbeing leads and those responsible for overseeing Mental Health First Aiders. It is also suitable for anyone seeking the most comprehensive level of mental health first aid training.",
  included: [
    "Learner workbook and course materials",
    "FAA Level 3 certificate, valid 3 years",
    "Pre-course briefing",
    "Post-course summary for your records",
  ],
  faqs: [
    {
      q: "Is this different from the Level 2 First Aid for Mental Health?",
      a: "Yes. The Level 3 Supervising award is a more comprehensive two-day qualification covering a wider range of conditions and including the skills to supervise other Mental Health First Aiders. It is the highest level of mental health first aid qualification available.",
    },
    {
      q: "How many people can attend?",
      a: "Up to 16 per course, to allow for meaningful group discussion and scenario-based learning.",
    },
    {
      q: "What does it cost?",
      a: "Up to 12 delegates: £1,950. 13–16 delegates: £2,250. Individual places on open courses are available at £325 per person. Contact us for a tailored quote.",
    },
    {
      q: "Where does the course take place?",
      a: "At your workplace or a venue of your choice. David will confirm what is needed ahead of the session.",
    },
  ],
  ctaTitle: "Ready to develop senior mental health champions in your organisation?",
  related: [
    { href: "/courses/mhfa", label: "Level 2 qualification", title: "First Aid for Mental Health" },
    { href: "/courses/refresher", label: "Already certified?", title: "Annual Refresher" },
    { href: "/courses/mhfa-awareness", label: "Whole-team awareness", title: "Mental Health First Aid Awareness" },
  ],
};

export default function MHFASupervisingPage() {
  return <CoursePageTemplate course={course} />;
}
