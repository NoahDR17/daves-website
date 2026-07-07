import Link from "next/link";

const categories = [
  {
    id: "about-the-courses",
    label: "About the courses",
    faqs: [
      {
        q: "Which course is right for my team?",
        a: "It depends on what you need. For whole-team awareness, the Mental Health First Aid Awareness session (4 hours) is the starting point. For designated first aiders, the First Aid for Mental Health course (2 days) gives a full certified qualification. For those who'll be supervising first aiders, Supervising First Aid for Mental Health covers that role specifically. If you're unsure, get in touch and David will recommend the right course based on your team size and goals.",
      },
      {
        q: "How long does each course take?",
        a: "Courses range from a half-day Annual Refresher through to a two-day First Aid for Mental Health qualification. The awareness session and refresher are typically delivered in a single day or morning. Full details are on each course page.",
      },
      {
        q: "Is the certification recognised?",
        a: "Yes. All qualifications are accredited by the First Aid Awards (FAA), a nationally recognised awarding body regulated by Ofqual. Certificates are widely accepted by employers and meet HSE guidance on workplace mental health training.",
      },
      {
        q: "How long does certification last?",
        a: "FAA certificates are valid for three years. After that, attendees can renew through the Annual Refresher course rather than repeating the full qualification.",
      },
      {
        q: "Are the courses online or in person?",
        a: "All courses are delivered in person by David at your workplace or a venue of your choice. In-person delivery is part of what makes the training effective — the group discussion, role-play, and real-time questions are difficult to replicate online.",
      },
    ],
  },
  {
    id: "for-organisations",
    label: "For organisations",
    faqs: [
      {
        q: "What's the minimum and maximum group size?",
        a: "Most courses accommodate up to 16 people per session. The awareness session can be more flexible for larger groups — get in touch with your numbers and David will advise. There's no formal minimum, but courses are designed for groups rather than individuals.",
      },
      {
        q: "What area does David cover?",
        a: "David delivers in person across Merseyside and Lancashire. For groups further afield, get in touch — travel can usually be arranged.",
      },
      {
        q: "How much does it cost?",
        a: "All courses are quoted per session, not per head. That means once you've booked, you can fill the room up to the maximum group size at no extra cost. Get in touch and David will come back with a clear, all-in quote within two working days.",
      },
      {
        q: "How is payment handled?",
        a: "Payment details are agreed as part of the booking process and confirmed in writing before the course date. Get in touch to discuss.",
      },
      {
        q: "What do we need to provide on the day?",
        a: "A suitable training room, a projector or screen, and refreshments for attendees. David brings everything else — course materials, manuals, and certificates. A full briefing note is sent ahead of the session.",
      },
      {
        q: "Can you run a course over multiple half-days?",
        a: "In some cases, yes. If your operational needs make a single full-day or two-day block difficult, get in touch and David will discuss what's possible.",
      },
    ],
  },
  {
    id: "for-individuals",
    label: "For individuals",
    faqs: [
      {
        q: "Can I attend a course as an individual?",
        a: "David primarily delivers in-house training for organisations, but is happy to discuss options for individuals. Get in touch and he'll let you know what's available.",
      },
      {
        q: "Do you run public or open courses?",
        a: "Not as a standard offering — courses are typically booked by organisations for their teams. If you're an individual looking to attend, get in touch and David will see what can be arranged.",
      },
      {
        q: "I'm not in a workplace — is this relevant for me?",
        a: "Mental Health First Aid skills are valuable in many settings — schools, community organisations, sports clubs, and more. If you work with people in any capacity, the training is likely to be relevant. Get in touch to discuss your situation.",
      },
    ],
  },
  {
    id: "about-david",
    label: "About David",
    faqs: [
      {
        q: "What are David's qualifications?",
        a: "David is a Registered Mental Health Nurse (RMN), NMC registered, with over 20 years of NHS clinical experience. He is also an FAA accredited instructor, certified to deliver the full suite of First Aid for Mental Health courses. He is DBS checked and holds public liability insurance.",
      },
      {
        q: "How is David different from other MHFA trainers?",
        a: "Most mental health first aid trainers took a short course to learn to teach. David spent over 20 years as a mental health nurse in the NHS — working across acute wards, crisis teams, psychiatric liaison, and community settings. That clinical depth shows up in the quality of answers, the accuracy of signposting, and the real-world scenarios he brings into the room.",
      },
      {
        q: "Is David still a practising nurse?",
        a: "David now focuses on training delivery rather than clinical practice, but his NMC registration remains current and his knowledge is kept up to date. The depth of understanding he brings comes from two decades on the frontline of NHS mental health care.",
      },
    ],
  },
];

export default function FAQs() {
  return (
    <>
      {/* HERO */}
      <section className="bg-white py-16 px-4 border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Frequently asked questions</h1>
          <p className="text-lg text-gray-600">
            Answers to the questions David gets most often. If yours isn&apos;t here,{" "}
            <Link href="/contact" className="text-blue-700 hover:underline">drop us a line</Link>.
          </p>
        </div>
      </section>

      {/* JUMP LINKS */}
      <section className="bg-gray-50 border-b border-gray-100 py-4 px-4 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-4">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="text-sm font-medium text-gray-600 hover:text-blue-700 transition-colors"
            >
              {cat.label}
            </a>
          ))}
        </div>
      </section>

      {/* FAQ SECTIONS */}
      <div className="max-w-3xl mx-auto px-4 py-16 space-y-16">
        {categories.map((cat) => (
          <section key={cat.id} id={cat.id}>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{cat.label}</h2>
            <div className="divide-y divide-gray-200 border-y border-gray-200">
              {cat.faqs.map((faq) => (
                <details key={faq.q} className="group py-4">
                  <summary className="flex justify-between items-center cursor-pointer list-none gap-4">
                    <span className="font-medium text-gray-900">{faq.q}</span>
                    <span className="text-gray-400 group-open:rotate-45 transition-transform text-xl leading-none shrink-0">+</span>
                  </summary>
                  <p className="mt-3 text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* STILL NEED HELP */}
      <section className="bg-gray-900 py-20 px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-3">Didn&apos;t find your answer?</h2>
        <p className="text-gray-400 mb-8">Drop David a note — most enquiries get a reply within two working days.</p>
        <Link
          href="/contact"
          className="bg-white text-gray-900 font-semibold px-8 py-3 rounded hover:bg-gray-100 transition-colors"
        >
          Ask a question
        </Link>
      </section>
    </>
  );
}
