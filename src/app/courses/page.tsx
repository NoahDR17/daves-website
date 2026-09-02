import Link from "next/link";

const courses = [
  {
    href: "/courses/mhfa-supervising",
    badge: "Level 3 · Most comprehensive",
    title: "Supervising First Aid for Mental Health",
    duration: "2 Days",
    format: "In person",
    maxGroup: "Up to 16",
    desc: "The most comprehensive qualification available. For those taking a leading role in mental health support within their organisation.",
  },
  {
    href: "/courses/mhfa",
    badge: "Level 2",
    title: "First Aid for Mental Health",
    duration: "1 Day",
    format: "In person",
    maxGroup: "Up to 16",
    desc: "A nationally recognised qualification for anyone becoming a Mental Health First Aider within their workplace.",
  },
  {
    href: "/courses/youth-mental-health",
    badge: "Level 2 · Specialist",
    title: "First Aid for Youth Mental Health",
    duration: "1 Day",
    format: "In person",
    maxGroup: "Up to 16",
    desc: "Specialist training focused on the mental health of children and young people aged 8–18.",
  },
  {
    href: "/courses/mhfa-awareness",
    badge: "Level 1",
    title: "Awareness of First Aid for Mental Health",
    duration: "4 Hours",
    format: "In person",
    maxGroup: null,
    desc: "An introductory half-day awareness session, suitable for all staff. No prior knowledge required.",
  },
  {
    href: "/courses/refresher",
    badge: "Renewal",
    title: "First Aid for Mental Health Annual Refresher",
    duration: "3 Hours",
    format: "In person",
    maxGroup: "Up to 16",
    desc: "For certified first aiders maintaining their skills and renewing their qualification.",
  },
];

const finder = [
  { scenario: '"My whole team needs awareness."', label: "Awareness of First Aid for Mental Health (Level 1)", href: "/courses/mhfa-awareness" },
  { scenario: '"I want to certify first aiders."', label: "First Aid for Mental Health (Level 2)", href: "/courses/mhfa" },
  { scenario: '"I need our senior leads qualified."', label: "Supervising First Aid for Mental Health (Level 3)", href: "/courses/mhfa-supervising" },
  { scenario: '"My first aiders are due to renew."', label: "Annual Refresher", href: "/courses/refresher" },
];

const comparison = [
  { title: "Supervising First Aid for Mental Health", duration: "2 days", who: "Senior leads & supervisors", certified: "Yes · 3yr", href: "/courses/mhfa-supervising" },
  { title: "First Aid for Mental Health", duration: "1 day", who: "Designated first aiders", certified: "Yes · 3yr", href: "/courses/mhfa" },
  { title: "First Aid for Youth Mental Health", duration: "1 day", who: "Those working with young people", certified: "Yes · 3yr", href: "/courses/youth-mental-health" },
  { title: "Awareness of First Aid for Mental Health", duration: "4 hrs", who: "All staff", certified: "Yes · 3yr", href: "/courses/mhfa-awareness" },
  { title: "Annual Refresher", duration: "3 hrs", who: "Existing certified first aiders", certified: "Re-cert · 3yr", href: "/courses/refresher" },
];

export default function Courses() {
  return (
    <>
      {/* HERO */}
      <section className="bg-white py-16 px-4 border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm text-gray-400 mb-3">
            <Link href="/" className="hover:text-gray-600">Home</Link> → Courses
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Courses</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Five FAA Ofqual-regulated mental health first aid qualifications, from a four-hour awareness session through to the comprehensive two-day Level 3 award. All delivered in person by David, at your workplace or a venue of your choice.
          </p>
        </div>
      </section>

      {/* COURSE FINDER */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Which course is right for you?</h2>
          <p className="text-gray-500 mb-8 text-sm">Pick the scenario that fits your situation.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {finder.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group bg-white border border-gray-200 rounded-lg p-5 hover:border-blue-700 hover:shadow-sm transition-all"
              >
                <p className="text-gray-700 italic mb-2">{item.scenario}</p>
                <p className="text-blue-700 font-medium text-sm group-hover:underline">
                  → {item.label}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* COURSE CARDS */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">All courses</h2>
          <div className="space-y-4">
            {courses.map((course) => (
              <Link
                key={course.href}
                href={course.href}
                className="group flex flex-col sm:flex-row sm:items-center gap-4 border border-gray-200 rounded-lg p-6 hover:border-blue-700 hover:shadow-sm transition-all"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    {course.badge && (
                      <span className="text-xs font-semibold bg-blue-700 text-white px-2 py-0.5 rounded">
                        {course.badge}
                      </span>
                    )}
                    <h3 className="font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                      {course.title}
                    </h3>
                  </div>
                  <p className="text-gray-500 text-sm">{course.desc}</p>
                </div>
                <div className="flex sm:flex-col gap-4 sm:gap-1 sm:text-right shrink-0">
                  <span className="text-xs font-semibold text-blue-700 uppercase tracking-wide">{course.duration}</span>
                  <span className="text-xs text-gray-400">{course.format}{course.maxGroup ? ` · ${course.maxGroup}` : ""}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">At a glance</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left font-semibold text-gray-700 pb-3 pr-6">Course</th>
                  <th className="text-left font-semibold text-gray-700 pb-3 pr-6">Length</th>
                  <th className="text-left font-semibold text-gray-700 pb-3 pr-6">Who it&apos;s for</th>
                  <th className="text-left font-semibold text-gray-700 pb-3">Certified</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {comparison.map((row) => (
                  <tr key={row.href} className="group">
                    <td className="py-3 pr-6">
                      <Link href={row.href} className="text-blue-700 hover:underline font-medium">
                        {row.title}
                      </Link>
                    </td>
                    <td className="py-3 pr-6 text-gray-600">{row.duration}</td>
                    <td className="py-3 pr-6 text-gray-600">{row.who}</td>
                    <td className="py-3 text-gray-600">{row.certified}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            All qualifications are FAA Ofqual-regulated. <Link href="/pricing" className="text-blue-700 hover:underline">View pricing →</Link>
          </p>
        </div>
      </section>

      {/* YOUR TRAINER */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-8 items-center border border-gray-100 rounded-lg p-8 shadow-sm">
          <div className="bg-gray-200 rounded-lg w-24 h-24 shrink-0 flex items-center justify-center text-gray-400 text-xs">
            [David]
          </div>
          <div className="flex-1">
            <h2 className="font-bold text-gray-900 mb-1">All courses are taught by David Scott</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              A Registered Mental Health Nurse with over 25 years of NHS clinical experience. Not just a trainer — someone who has spent decades on the frontline of mental health care, bringing real clinical depth into every training room.
            </p>
          </div>
          <Link href="/about" className="shrink-0 text-blue-700 font-medium text-sm hover:underline whitespace-nowrap">
            Meet David →
          </Link>
        </div>
      </section>

      {/* STILL UNSURE */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-gray-900">Still not sure which course you need?</p>
            <p className="text-gray-500 text-sm">Tell us a bit about your organisation and we&apos;ll recommend the right one. No obligation.</p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 border border-gray-300 text-gray-700 font-medium px-5 py-2.5 rounded hover:bg-gray-100 transition-colors text-sm"
          >
            Get advice
          </Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gray-900 py-20 px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-3">Ready to book training for your team?</h2>
        <p className="text-gray-400 mb-8">Enquire now and David will be in touch within two working days.</p>
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
