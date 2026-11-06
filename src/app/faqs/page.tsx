import Link from "next/link";

const categories = [
  {
    id: "about-mhfa",
    label: "About Mental Health First Aid",
    faqs: [
      {
        q: "What is Mental Health First Aid?",
        a: "Mental Health First Aid (MHFA) is the support provided to someone who may be developing a mental health problem or experiencing a decline in their mental wellbeing. Like physical first aid, MHFA is not intended to diagnose or treat an illness. Instead, it helps individuals recognise concerns, start supportive conversations, and guide people towards appropriate professional help.",
      },
      {
        q: "Is a Mental Health First Aider the same as a counsellor or therapist?",
        a: "No. Mental Health First Aiders are not counsellors, therapists, psychologists or mental health professionals. Their role is to recognise potential signs of mental distress, listen without judgement, provide initial support, encourage individuals to access appropriate help, and signpost to professional services and organisational support. Mental Health First Aiders do not diagnose conditions or provide therapy.",
      },
      {
        q: "How long does MHFA certification last?",
        a: "All FAA Ofqual-regulated qualifications are valid for three years. Annual refresher training is strongly recommended to maintain skills, confidence and knowledge between renewal periods.",
      },
      {
        q: "What signs might indicate someone is struggling with their mental health?",
        a: "Every individual is different, but possible indicators may include changes in mood, increased irritability, withdrawal from colleagues, reduced concentration, changes in attendance, increased sickness absence, reduced confidence, or changes in performance or behaviour. MHFA training helps participants recognise potential signs while avoiding assumptions or jumping to conclusions.",
      },
      {
        q: "Will MHFA training encourage people to talk more about mental health problems?",
        a: "The aim of MHFA training is not to medicalise normal life challenges or encourage unnecessary focus on mental illness. Instead, training helps people recognise when someone may need support, have constructive conversations, provide reassurance, encourage early intervention, and promote resilience and wellbeing. Many people report feeling more confident discussing mental health after training because they better understand how to approach the topic sensitively and appropriately.",
      },
    ],
  },
  {
    id: "about-the-courses",
    label: "About the courses",
    faqs: [
      {
        q: "Which course is right for my team?",
        a: "It depends on what you need. For whole-team awareness, the Level 1 Awareness course (4 hours) is the starting point. For designated first aiders, the Level 2 First Aid for Mental Health (1 day) provides a nationally recognised qualification. For those taking a leading role in mental health support, the Level 3 Supervising award (2 days) is the most comprehensive option. If you are unsure, get in touch and David will recommend the right course based on your organisation's needs.",
      },
      {
        q: "Is the certification recognised?",
        a: "Yes. All qualifications are awarded by the First Aid Awards (FAA), an Ofqual-regulated awarding body. Certificates are nationally recognised and widely accepted by employers. They meet Health and Safety Executive guidance on workplace mental health training.",
      },
      {
        q: "Are the courses online or in person?",
        a: "All courses are delivered in person by David at your workplace or a venue of your choice. In-person delivery supports the group discussion, practical scenarios and real-time questions that make the training effective.",
      },
      {
        q: "What is covered during MHFA training?",
        a: "Depending on the qualification level, learners cover understanding mental health and wellbeing, recognising common mental health conditions, factors affecting mental wellbeing, effective communication skills, active listening, the First Aid for Mental Health action plan, signposting and support pathways, mental health and the workplace, and promoting positive workplace cultures.",
      },
      {
        q: "What is the return on investment for organisations?",
        a: "Research from Deloitte suggests poor mental health costs UK employers around £51 billion annually through absenteeism, presenteeism and staff turnover. For every £1 invested in workplace mental health interventions, organisations may achieve an average return of approximately £5.90 through improved productivity, reduced sickness absence and improved staff retention.",
      },
    ],
  },
  {
    id: "for-organisations",
    label: "For organisations",
    faqs: [
      {
        q: "Why do organisations need Mental Health First Aiders?",
        a: "Mental health difficulties are common and can affect anyone at any time. Having trained Mental Health First Aiders can help organisations create a more open and supportive culture, reduce stigma surrounding mental health, encourage people to seek help earlier, improve staff confidence in discussing wellbeing concerns, and support employee retention and engagement. Training also demonstrates an organisation's commitment to employee wellbeing.",
      },
      {
        q: "Is Mental Health First Aid a legal requirement?",
        a: "Currently, there is no UK legal requirement for organisations to appoint Mental Health First Aiders. However, employers have legal duties under health and safety legislation to protect employee health, safety and wellbeing, including taking reasonable steps to address workplace factors that may affect mental health. Government and HSE guidance increasingly encourages employers to consider mental health alongside physical health. See our HSE guidance page for more detail.",
      },
      {
        q: "What are the benefits of MHFA training for managers?",
        a: "Managers are often the first people to notice when an employee is struggling. MHFA training can help managers recognise early warning signs, build confidence in difficult conversations, support employees appropriately, reduce stigma within teams, understand routes to support, and develop compassionate leadership skills — without expecting them to become mental health experts.",
      },
      {
        q: "What's the minimum and maximum group size?",
        a: "Most courses accommodate up to 16 people per session. The Level 1 awareness session can be more flexible for larger groups — get in touch with your numbers and David will advise.",
      },
      {
        q: "What area does David cover?",
        a: "David delivers in person across Merseyside and Lancashire. For groups further afield, get in touch — travel can usually be arranged.",
      },
      {
        q: "How much does it cost?",
        a: "Pricing is transparent and tailored to your organisation, based on the course or bespoke training you need, your group size, delivery format and location. Preferential rates are available for education, charity and community organisations. Get in touch for a no-obligation quote.",
      },
      {
        q: "How is payment handled?",
        a: "Payment details are agreed as part of the booking process and confirmed in writing before the course date.",
      },
      {
        q: "What do we need to provide on the day?",
        a: "A suitable training room, presentation facilities (projector or screen), seating for delegates, and refreshments. David brings everything else — course materials, manuals and certificates. A full briefing note is sent ahead of the session.",
      },
      {
        q: "Can you run a course over multiple half-days?",
        a: "In some cases, yes. If your operational needs make a single full-day or two-day block difficult, get in touch and David will discuss what can be arranged.",
      },
      {
        q: "Do you offer bespoke mental health training?",
        a: "Yes. Alongside the accredited MHFA courses, David designs bespoke mental health training packages tailored to your staff. Topics include gambling harm, anxiety management, stress management, team building day facilitation, management training on changing workplace mental health culture, and staff supervision. Sessions can be delivered online or face to face. See our bespoke training page or get in touch to discuss your needs.",
      },
      {
        q: "Will Mental Health First Aid become mandatory?",
        a: "At present, there is no legal requirement for UK employers to provide Mental Health First Aid training or appoint Mental Health First Aiders. Employers are, however, legally required to protect the health, safety and welfare of their employees, including consideration of mental health risks in the workplace. HSE guidance now emphasises the importance of considering employees' mental health when assessing workplace first aid needs. Whether MHFA itself becomes mandatory is uncertain, but the direction of travel is clear — employers are increasingly expected to take mental health seriously, provide appropriate support, and equip managers and staff with the skills to recognise and respond to concerns. See our HSE guidance page for more detail.",
      },
    ],
  },
  {
    id: "for-individuals",
    label: "For individuals",
    faqs: [
      {
        q: "Who should attend Mental Health First Aid training?",
        a: "MHFA training is suitable for managers and supervisors, HR professionals, team leaders, health and wellbeing champions, teachers and education staff, healthcare professionals, public sector employees, community and voluntary groups, and any employee interested in supporting workplace wellbeing. No previous experience or qualifications are required.",
      },
      {
        q: "Can I attend a course as an individual?",
        a: "Individual places may be available on scheduled open courses. Contact us to find out what is currently available.",
      },
      {
        q: "Do you run public or open courses?",
        a: "Courses are primarily delivered as in-house training for organisations. Where open course places are available, they are listed on request — get in touch to check availability.",
      },
      {
        q: "I'm not in a workplace — is this relevant for me?",
        a: "Mental Health First Aid skills are valuable in many settings beyond the workplace — schools, community organisations, sports clubs, faith groups and more. If you work with or care for people in any capacity, the training is likely to be relevant. Get in touch to discuss your situation.",
      },
    ],
  },
  {
    id: "about-positive-cultures",
    label: "About Positive Cultures",
    faqs: [
      {
        q: "What are David's qualifications?",
        a: "David Scott is a Registered Mental Health Nurse (RMN) with over 25 years of NHS clinical experience across mental health liaison and crisis services, low secure mental health services, community mental health, and acute and complex care. He is an FAA accredited instructor, certified to deliver the full suite of First Aid for Mental Health qualifications. He is Enhanced DBS checked, ICO registered, and holds both public liability and professional indemnity insurance.",
      },
      {
        q: "What makes Positive Cultures different from other MHFA providers?",
        a: "Positive Cultures combines nationally recognised, Ofqual-regulated Mental Health First Aid qualifications with real-world clinical expertise. Training is delivered by David Scott, a Registered Mental Health Nurse with over 25 years of experience — not just someone who took a short course to learn to teach. That clinical depth shows up in the quality of answers, the accuracy of signposting, and the real-world scenarios David brings into the training room.",
      },
      {
        q: "Is David still a practising nurse?",
        a: "David now focuses on training and consultancy delivery rather than clinical practice, but his NMC registration remains current and his knowledge is kept up to date. The depth of understanding he brings comes from over two decades on the frontline of NHS mental health care.",
      },
      {
        q: "Does Positive Cultures offer consultancy as well as training?",
        a: "Yes. Positive Cultures provides consultancy support to organisations seeking to develop positive workplace wellbeing strategies, improve mental health awareness, support staff wellbeing initiatives, enhance psychological safety in teams, and review policies and procedures relating to employee wellbeing. Consultancy is quoted to suit your needs, so contact us to discuss what you are looking for.",
      },
      {
        q: "How can we book training?",
        a: "Positive Cultures offers on-site workplace training, education sector training, NHS and healthcare training, charity and voluntary sector training, bespoke mental health training packages delivered online or face to face, and mental health consultancy services. To discuss your requirements, get in touch for a no-obligation conversation about how we can support your organisation.",
      },
    ],
  },
];

export default function FAQs() {
  return (
    <>
      <section className="bg-white py-16 px-4 border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-ink mb-4">Frequently asked questions</h1>
          <p className="text-lg text-gray-600">
            Answers to the questions we get most often. If yours isn&apos;t here,{" "}
            <Link href="/contact" className="text-brand-teal hover:underline">drop us a line</Link>.
          </p>
        </div>
      </section>

      <section className="bg-brand-mist border-b border-gray-100 py-4 px-4 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-4">
          {categories.map((cat) => (
            <a key={cat.id} href={`#${cat.id}`} className="text-sm font-medium text-gray-600 hover:text-brand-teal transition-colors">
              {cat.label}
            </a>
          ))}
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-16 space-y-16">
        {categories.map((cat) => (
          <section key={cat.id} id={cat.id}>
            <h2 className="text-2xl font-bold text-brand-ink mb-6">{cat.label}</h2>
            <div className="divide-y divide-gray-200 border-y border-gray-200">
              {cat.faqs.map((faq) => (
                <details key={faq.q} className="group py-4">
                  <summary className="flex justify-between items-center cursor-pointer list-none gap-4">
                    <span className="font-medium text-brand-ink">{faq.q}</span>
                    <span className="text-gray-400 group-open:rotate-45 transition-transform text-xl leading-none shrink-0">+</span>
                  </summary>
                  <p className="mt-3 text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="bg-brand-teal-deep py-20 px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-3">Didn&apos;t find your answer?</h2>
        <p className="text-brand-mist mb-8">Drop us a note — most enquiries get a personal reply from David within two working days.</p>
        <Link href="/contact" className="bg-brand-sunrise text-brand-teal-deep font-semibold px-8 py-3 rounded hover:bg-brand-sunrise-light transition-colors">
          Ask a question
        </Link>
      </section>
    </>
  );
}
