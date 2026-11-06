import Link from "next/link";

const groupCourses = [
  {
    level: "Level 1",
    title: "Awareness of First Aid for Mental Health",
    duration: "Half Day (4 Hours)",
    desc: "An introductory qualification designed to increase awareness of mental health, reduce stigma and develop confidence in having supportive conversations.",
    href: "/courses/mhfa-awareness",
  },
  {
    level: "Level 2",
    title: "First Aid for Mental Health",
    duration: "One Day",
    desc: "Designed for individuals who wish to become Mental Health First Aiders within their workplace and support a positive wellbeing culture.",
    href: "/courses/mhfa",
  },
  {
    level: "Level 2 · Specialist",
    title: "First Aid for Youth Mental Health",
    duration: "One Day",
    desc: "Specialist training for those working with children and young people, including education, youth work and healthcare settings.",
    href: "/courses/youth-mental-health",
  },
  {
    level: "Level 3",
    title: "Supervising First Aid for Mental Health",
    duration: "Two Day Course",
    desc: "Our most comprehensive qualification, designed for those taking a leading role in promoting and supporting mental health in the workplace.",
    href: "/courses/mhfa-supervising",
  },
  {
    level: "Renewal",
    title: "First Aid for Mental Health Annual Refresher",
    duration: "3-Hour Refresher",
    desc: "Ideal for qualified Mental Health First Aiders looking to update their knowledge and maintain confidence in their role.",
    href: "/courses/refresher",
  },
];

const openCourses = [
  "Awareness of First Aid for Mental Health (Level 1)",
  "First Aid for Mental Health (Level 2)",
  "First Aid for Youth Mental Health (Level 2)",
  "Supervising First Aid for Mental Health (Level 3)",
  "Annual Refresher",
];

const quoteFactors = [
    "Accredited courses, bespoke training, or a combination of both",
  "Number of delegates",
  "Online or face-to-face delivery, at your premises or an arranged venue",
  "Location and travel",
  "Your sector: preferential rates for education, charities and community groups",
  "Repeat, multiple or partnership bookings",
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

function EnquireButton({ label = "Enquire for a quote" }: { label?: string }) {
  return (
    <Link
      href="/contact"
      className="inline-block bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded hover:bg-blue-800 transition-colors whitespace-nowrap"
    >
      {label}
    </Link>
  );
}

export default function Pricing() {
  return (
    <>
      {/* HERO */}
      <section className="bg-white py-16 px-4 border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Pricing</h1>
          <p className="text-lg text-gray-600 max-w-2xl mb-8">
            Pricing is transparent and tailored to your needs. Every organisation is different, so rather than a fixed price list, we provide a clear, itemised quotation based on the accredited courses or bespoke training you need, your group size and location, with no hidden costs.
          </p>
          <EnquireButton label="Request a tailored quote" />
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

      {/* HOW QUOTES WORK */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How your quote is worked out</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Tell us a little about your organisation and what you are looking for, and David will come back to you with a clear quotation. Group training is priced per session, not per head, making it a cost-effective way to train your whole team.
            </p>
            <EnquireButton />
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="font-bold text-gray-900 mb-4">Your quote takes into account</h3>
            <ul className="space-y-3">
              {quoteFactors.map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                  <span className="text-blue-700 font-bold mt-0.5 shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* GROUP COURSES */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Group training</h2>
          <p className="text-gray-600 mb-10">Delivered at your premises for groups of up to 16 delegates. Enquire about any course for a tailored quote.</p>
          <div className="space-y-6">
            {groupCourses.map((course) => (
              <div key={course.title} className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
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
                  <div className="shrink-0">
                    <EnquireButton label="Enquire about pricing" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BESPOKE TRAINING */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="border border-blue-200 bg-blue-50 rounded-lg p-8 grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <span className="text-xs font-semibold text-blue-700 uppercase tracking-wide">Online or face to face</span>
              <h2 className="text-3xl font-bold text-gray-900 mt-1 mb-3">Bespoke mental health training</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Alongside our accredited courses, David designs bespoke mental health training packages around the needs of your staff, including gambling harm, anxiety and stress management, team building day facilitation, management training on workplace mental health culture, and staff supervision. Every package is quoted individually.
              </p>
              <Link href="/bespoke-training" className="text-blue-700 font-medium text-sm hover:underline">
                Find out more about bespoke training →
              </Link>
            </div>
            <div className="md:text-right">
              <EnquireButton label="Discuss a bespoke package" />
            </div>
          </div>
        </div>
      </section>

      {/* OPEN COURSES */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Individual bookings</h2>
          <p className="text-gray-600 mb-8">Where available, individual places may be booked on scheduled open courses.</p>
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <ul className="divide-y divide-gray-100">
              {openCourses.map((title) => (
                <li key={title} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-4 text-sm">
                  <span className="text-gray-700">{title}</span>
                  <Link href="/contact" className="text-blue-700 font-medium hover:underline">
                    Enquire about a place →
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-sm text-gray-500 mt-3">Contact us to check availability and pricing for upcoming open courses.</p>
        </div>
      </section>

      {/* CONSULTANCY */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Leadership and consultancy</h2>
          <p className="text-gray-600 mb-8">Positive Cultures also provides consultancy support to organisations developing their workplace wellbeing strategy.</p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6 flex flex-col">
              <h3 className="font-bold text-gray-900 mb-1">Compassionate Leadership Workshop</h3>
              <p className="text-xs text-gray-400 mb-3">Half Day (3 Hours) · Up to 16 delegates</p>
              <p className="text-gray-600 text-sm mb-6 flex-1">Supporting managers and leaders to build psychologically safe teams, develop compassionate leadership skills, and respond confidently to wellbeing concerns.</p>
              <div><EnquireButton label="Enquire about pricing" /></div>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 flex flex-col">
              <h3 className="font-bold text-gray-900 mb-1">Mental Health and Wellbeing Consultancy</h3>
              <p className="text-xs text-gray-400 mb-3">Half day or full day · Bespoke support for your organisation</p>
              <p className="text-gray-600 text-sm mb-6 flex-1">Workplace wellbeing strategies, mental health policy review, staff wellbeing initiatives, culture development, and manager training. Areas of focus agreed to suit your needs.</p>
              <div><EnquireButton label="Discuss your needs" /></div>
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
              Face-to-face training is usually delivered at your premises, with access to a suitable training room and presentation facilities. If you need a venue arranged, this can be organised and will be included clearly in your quote. Bespoke training can also be delivered online.
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
