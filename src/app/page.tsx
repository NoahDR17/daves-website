import Link from "next/link";

const courses = [
  { href: "/courses/mhfa-awareness", duration: "4 Hours", title: "Mental Health First Aid Awareness", desc: "An introduction to mental health for all staff." },
  { href: "/courses/mhfa", duration: "1 Day", title: "First Aid for Mental Health", desc: "Confident first aid response for mental health situations." },
  { href: "/courses/mhfa-supervising", duration: "2 Days", title: "Supervising First Aid for Mental Health", desc: "For those supervising mental health first aiders." },
  { href: "/courses/youth-mental-health", duration: "1 Day", title: "Youth Mental Health First Aid", desc: "Specialist training focused on young people aged 8–18." },
  { href: "/courses/refresher", duration: "Half Day", title: "Annual Refresher", desc: "Keep skills and knowledge current for existing first aiders." },
];

const steps = [
  { step: "01", title: "Enquire", desc: "Tell us about your team and what you need." },
  { step: "02", title: "Scoping call", desc: "Dave recommends the right course for your organisation." },
  { step: "03", title: "Agree details", desc: "Course, dates, venue and a written all-in quote." },
  { step: "04", title: "Train", desc: "Dave delivers in person at your workplace or venue." },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-blue-700 text-sm font-semibold uppercase tracking-wide mb-3">
              FAA Accredited Training
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Mental Health First Aid training, delivered by an NHS mental health nurse.
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Accredited courses taught with the depth that only decades of clinical experience can bring.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-blue-700 text-white font-medium px-6 py-3 rounded hover:bg-blue-800 transition-colors"
              >
                Enquire about training
              </Link>
              <Link
                href="/courses"
                className="border border-gray-300 text-gray-700 font-medium px-6 py-3 rounded hover:bg-gray-50 transition-colors"
              >
                View courses
              </Link>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg aspect-[4/3] flex items-center justify-center text-gray-400 text-sm">
            [Photo of Dave]
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-gray-50 border-y border-gray-200 py-5 px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-8 text-sm font-medium text-gray-600">
          <span>✓ FAA Accredited Instructor</span>
          <span>✓ Registered Mental Health Nurse (RMN)</span>
          <span>✓ 20+ Years NHS Experience</span>
          <span>✓ DBS Checked</span>
        </div>
      </section>

      {/* WHAT IS MHFA */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What is Mental Health First Aid?</h2>
            <p className="text-gray-600 leading-relaxed">
              Mental Health First Aid (MHFA) is the mental health equivalent of physical first aid. It equips your people to recognise the early signs of mental health problems, start a supportive conversation, and guide colleagues toward the right help — before a crisis develops. With 1 in 4 people in the UK experiencing a mental health issue each year, trained first aiders in the workplace are no longer a nice-to-have. They are essential.
            </p>
          </div>
          <div className="bg-blue-700 text-white rounded-lg p-10 text-center">
            <p className="text-6xl font-bold mb-2">1 in 4</p>
            <p className="text-blue-100">UK employees experience a mental health issue each year</p>
          </div>
        </div>
      </section>

      {/* THE DAVE DIFFERENCE */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why train with Dave?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Most mental health first aid trainers took a short course to learn to teach. Dave brings over 20 years of clinical NHS practice into every room.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Clinical depth", desc: "Answers grounded in real assessment and frontline NHS mental health experience — not just a manual." },
              { title: "Real NHS experience", desc: "Stories and scenarios from two decades across crisis teams, liaison, acute wards, and community care." },
              { title: "Accurate signposting", desc: "Dave knows exactly how NHS mental health pathways work — so your team gets signposting that is actually useful." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COURSES OVERVIEW */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Courses</h2>
            <p className="text-gray-600">FAA accredited courses for organisations of all sizes, delivered in person by Dave.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <Link
                key={course.href}
                href={course.href}
                className="group border border-gray-200 rounded-lg p-6 hover:border-blue-700 hover:shadow-md transition-all"
              >
                <span className="text-xs font-semibold text-blue-700 uppercase tracking-wide">{course.duration}</span>
                <h3 className="font-bold text-gray-900 mt-1 mb-2 group-hover:text-blue-700 transition-colors">{course.title}</h3>
                <p className="text-gray-500 text-sm">{course.desc}</p>
              </Link>
            ))}
            <Link
              href="/courses"
              className="border border-dashed border-gray-300 rounded-lg p-6 flex items-center justify-center text-gray-500 hover:border-blue-700 hover:text-blue-700 transition-all text-sm font-medium"
            >
              View all courses →
            </Link>
          </div>
        </div>
      </section>

      {/* MEET DAVE */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-200 rounded-lg aspect-square max-w-sm mx-auto flex items-center justify-center text-gray-400 text-sm w-full">
            [Portrait of Dave]
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Dave</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Dave Scott is a Registered Mental Health Nurse (RMN) with over 20 years of NHS clinical experience. He qualified in 2002 at Edge Hill University and has worked across acute wards, low secure units, crisis teams, psychiatric liaison, and community settings across Merseyside and Lancashire.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Now an FAA accredited instructor, Dave brings that clinical depth into every training room — giving your team answers that go beyond what any manual can offer.
            </p>
            <Link href="/about" className="text-blue-700 font-medium hover:underline">
              Read Dave&apos;s full story →
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">How it works</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-blue-700 text-white font-bold text-lg flex items-center justify-center mx-auto mb-4">
                  {s.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDIVIDUAL CALLOUT */}
      <section className="bg-gray-50 py-10 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-gray-900">Booking for yourself, not a team?</p>
            <p className="text-gray-500 text-sm">Dave primarily delivers in-house training but is happy to discuss individual places. Get in touch.</p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 border border-gray-300 text-gray-700 font-medium px-5 py-2.5 rounded hover:bg-gray-100 transition-colors text-sm"
          >
            Get in touch
          </Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gray-900 py-20 px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-3">Ready to bring mental health first aid training to your team?</h2>
        <p className="text-gray-400 mb-8">No pressure, no obligation. Drop us a note and Dave will get back to you within two working days.</p>
        <Link
          href="/contact"
          className="bg-white text-gray-900 font-semibold px-8 py-3 rounded hover:bg-gray-100 transition-colors"
        >
          Enquire about training
        </Link>
      </section>
    </>
  );
}
