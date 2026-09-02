import Link from "next/link";

const groupCourses = [
  {
    level: "Level 1",
    title: "Awareness of First Aid for Mental Health",
    duration: "Half Day (4 Hours)",
    desc: "An introductory qualification designed to increase awareness of mental health, reduce stigma and develop confidence in having supportive conversations.",
    href: "/courses/mhfa-awareness",
    tiers: [
      { label: "Up to 12 delegates", price: "£695" },
      { label: "13–16 delegates", price: "£795" },
    ],
  },
  {
    level: "Level 2",
    title: "First Aid for Mental Health",
    duration: "One Day",
    desc: "Designed for individuals who wish to become Mental Health First Aiders within their workplace and support a positive wellbeing culture.",
    href: "/courses/mhfa",
    tiers: [
      { label: "Up to 12 delegates", price: "£1,150" },
      { label: "13–16 delegates", price: "£1,295" },
    ],
  },
  {
    level: "Level 2 · Specialist",
    title: "First Aid for Youth Mental Health",
    duration: "One Day",
    desc: "Specialist training for those working with children and young people, including education, youth work and healthcare settings.",
    href: "/courses/youth-mental-health",
    tiers: [
      { label: "Up to 12 delegates", price: "£1,150" },
      { label: "13–16 delegates", price: "£1,295" },
    ],
  },
  {
    level: "Level 3",
    title: "Supervising First Aid for Mental Health",
    duration: "Two Day Course",
    desc: "Our most comprehensive qualification, designed for those taking a leading role in promoting and supporting mental health in the workplace.",
    href: "/courses/mhfa-supervising",
    tiers: [
      { label: "Up to 12 delegates", price: "£1,950" },
      { label: "13–16 delegates", price: "£2,250" },
    ],
  },
  {
    level: "Renewal",
    title: "First Aid for Mental Health Annual Refresher",
    duration: "3-Hour Refresher",
    desc: "Ideal for qualified Mental Health First Aiders looking to update their knowledge and maintain confidence in their role.",
    href: "/courses/refresher",
    tiers: [
      { label: "Up to 12 delegates", price: "£595" },
      { label: "13–16 delegates", price: "£695" },
    ],
  },
];

const openCourses = [
  { title: "Awareness of First Aid for Mental Health (Level 1)", price: "£95 per person" },
  { title: "First Aid for Mental Health (Level 2)", price: "£175 per person" },
  { title: "First Aid for Youth Mental Health (Level 2)", price: "£175 per person" },
  { title: "Supervising First Aid for Mental Health (Level 3)", price: "£325 per person" },
  { title: "Annual Refresher", price: "£75 per person" },
];

const included = [
  "Expert tuition delivered by David Scott, Registered Mental Health Nurse with 25+ years of clinical experience",
  "FAA Ofqual-regulated course delivery",
  "Learner workbooks and course materials",
  "Assessment and certification",
  "Delegate certificates",
  "Administration and registration costs",
  "Course support and guidance",
];

export default function Pricing() {
  return (
    <>
      {/* HERO */}
      <section className="bg-white py-16 px-4 border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Pricing</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Transparent, all-inclusive pricing for group and individual bookings. All courses are delivered on-site at your organisation, making group training a cost-effective solution for teams of any size.
          </p>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="bg-blue-700 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-white font-bold text-lg mb-4">All course fees include</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {included.map((item) => (
              <div key={item} className="flex items-start gap-2 text-blue-100 text-sm">
                <span className="text-white font-bold mt-0.5 shrink-0">✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GROUP COURSES */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Group training</h2>
          <p className="text-gray-600 mb-10">Delivered at your premises. Prices are per session, not per head — fill the room up to the maximum group size at no extra cost.</p>
          <div className="space-y-6">
            {groupCourses.map((course) => (
              <div key={course.title} className="border border-gray-200 rounded-lg p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-semibold bg-blue-700 text-white px-2 py-0.5 rounded">{course.level}</span>
                      <span className="text-xs text-gray-400">{course.duration}</span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      <Link href={course.href} className="hover:text-blue-700 transition-colors">{course.title}</Link>
                    </h3>
                    <p className="text-gray-500 text-sm">{course.desc}</p>
                  </div>
                  <div className="sm:text-right shrink-0 space-y-1">
                    {course.tiers.map((tier) => (
                      <div key={tier.label}>
                        <p className="text-xs text-gray-400">{tier.label}</p>
                        <p className="font-bold text-gray-900 text-lg">{tier.price}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPEN COURSES */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Individual bookings</h2>
          <p className="text-gray-600 mb-8">Where available, individual places may be booked on scheduled open courses.</p>
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left font-semibold text-gray-700 p-4">Course</th>
                  <th className="text-right font-semibold text-gray-700 p-4">Price per person</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {openCourses.map((row) => (
                  <tr key={row.title}>
                    <td className="p-4 text-gray-700">{row.title}</td>
                    <td className="p-4 text-right font-semibold text-gray-900">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-3">Contact us to check availability of upcoming open courses.</p>
        </div>
      </section>

      {/* CONSULTANCY */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Leadership and consultancy</h2>
          <p className="text-gray-600 mb-8">Positive Cultures also provides consultancy support to organisations developing their workplace wellbeing strategy.</p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-1">Compassionate Leadership Workshop</h3>
              <p className="text-xs text-gray-400 mb-3">Half Day (3 Hours) · Up to 16 delegates</p>
              <p className="text-gray-600 text-sm mb-4">Supporting managers and leaders to build psychologically safe teams, develop compassionate leadership skills, and respond confidently to wellbeing concerns.</p>
              <p className="font-bold text-gray-900 text-xl">£595</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-1">Mental Health and Wellbeing Consultancy</h3>
              <p className="text-xs text-gray-400 mb-3">Bespoke support for your organisation</p>
              <p className="text-gray-600 text-sm mb-4">Workplace wellbeing strategies, mental health policy review, staff wellbeing initiatives, culture development, and manager training. Areas of focus agreed to suit your needs.</p>
              <div className="space-y-1">
                <p className="text-sm text-gray-600">Half day: <span className="font-bold text-gray-900">£450</span></p>
                <p className="text-sm text-gray-600">Full day: <span className="font-bold text-gray-900">£850</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DISCOUNTS */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Discounts available</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Positive Cultures recognises the valuable contribution made by schools, colleges, charities and community organisations. Preferential rates are available for the education sector, social enterprises, charitable organisations, not-for-profit organisations, and community and voluntary groups.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Discounts are also available for multiple course bookings, large group bookings, partnership arrangements and repeat customers. Contact us to discuss a bespoke quotation.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h3 className="font-bold text-gray-900 mb-4">Travel and venue</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              The prices above are based on training being delivered at your premises, with access to a suitable training room and presentation facilities. If a venue needs to be arranged, this can be organised for an additional charge depending on location and requirements.
            </p>
            <Link href="/contact" className="text-blue-700 font-medium text-sm hover:underline">
              Contact us to discuss →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 py-20 px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-3">Request a quote</h2>
        <p className="text-gray-400 mb-8">Every organisation is different. We are happy to discuss your training requirements and provide a tailored quotation to meet your needs.</p>
        <Link
          href="/contact"
          className="bg-white text-gray-900 font-semibold px-8 py-3 rounded hover:bg-gray-100 transition-colors"
        >
          Get in touch
        </Link>
      </section>
    </>
  );
}
