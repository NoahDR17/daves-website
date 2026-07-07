import Link from "next/link";

const benefits = [
  {
    title: "Clinically led",
    desc: "A registered NHS mental health nurse, not just an accredited trainer. Your team gets answers grounded in real practice.",
  },
  {
    title: "One point of contact",
    desc: "You speak to David directly from enquiry to delivery. No account managers, no handoffs.",
  },
  {
    title: "Flexible delivery",
    desc: "In your workplace, a venue you choose, dates that work for your team. Built around your operational needs.",
  },
];

const steps = [
  { step: "01", title: "You enquire", desc: "Share what your team needs and roughly when. Form, email, or phone." },
  { step: "02", title: "A short scoping call", desc: "David gets a feel for your team, current challenges, and recommends the right course." },
  { step: "03", title: "We agree the details", desc: "Course, dates, venue, group size, invoicing. Written quote with everything included." },
  { step: "04", title: "David delivers the training", desc: "In person at your venue. Manuals provided. Certificates issued shortly after." },
  { step: "05", title: "Ongoing support", desc: "MHFAider Support App access for 3 years. A reminder when refreshers are due." },
];

const daveProvides = [
  "Trainer",
  "MHFA England manuals",
  "Certificates",
  "MHFAider Support App access",
  "Pre-course briefing",
  "Post-course summary",
];

const youProvide = [
  "Training room (or we'll suggest a venue)",
  "Projector or screen",
  "Refreshments",
  "Confirmed list of attendees",
];

const faqs = [
  { q: "What's the minimum and maximum group size?" },
  { q: "What area does David cover?" },
  { q: "Can you run multiple sessions for a larger team?" },
  { q: "How is payment handled?" },
  { q: "Do you provide an attendee evaluation?" },
];

export default function ForOrganisations() {
  return (
    <>
      {/* HERO */}
      <section className="bg-blue-700 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-blue-200 text-sm font-semibold uppercase tracking-wide mb-4">
            In-house mental health training
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6 max-w-3xl">
            Mental health training for your team, in your workplace.
          </h1>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl">
            MHFA England accredited courses, delivered on site by a registered NHS mental health nurse. One trainer, one point of contact, real clinical depth.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-white text-blue-700 font-semibold px-6 py-3 rounded hover:bg-blue-50 transition-colors"
            >
              Request a quote
            </Link>
            <Link
              href="/contact"
              className="border border-blue-400 text-white font-medium px-6 py-3 rounded hover:bg-blue-600 transition-colors"
            >
              Book a call
            </Link>
          </div>
        </div>
      </section>

      {/* WHY ORGANISATIONS CHOOSE DAVE */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why organisations choose David</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((item) => (
              <div key={item.title} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How it works</h2>
            <p className="text-gray-600">A clear, low-friction process from first enquiry to certified team.</p>
          </div>
          <div className="max-w-2xl mx-auto space-y-8">
            {steps.map((s) => (
              <div key={s.step} className="flex gap-6 items-start">
                <div className="w-10 h-10 rounded-full bg-blue-700 text-white font-bold text-sm flex items-center justify-center shrink-0">
                  {s.step}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What&apos;s included</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4">David provides</h3>
              <ul className="space-y-2">
                {daveProvides.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                    <span className="text-blue-700 font-bold mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-lg p-8 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4">You provide</h3>
              <ul className="space-y-2">
                {youProvide.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                    <span className="text-gray-400 mt-0.5">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* HOW QUOTES WORK */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How quotes work</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Every quote is per-course, not per-head. Once you&apos;ve booked a course, you can fill the room (up to the max group size) at no extra cost. Most courses are quoted within two working days of enquiry.
            </p>
            <p className="text-gray-600 leading-relaxed">
              A typical quote covers: trainer time, materials, certification, travel within the region, and post-course support. No surprises.
            </p>
          </div>
          <div className="bg-blue-700 text-white rounded-lg p-10">
            <p className="text-4xl font-bold mb-2">Per course,</p>
            <p className="text-4xl font-bold text-blue-200 mb-4">not per head.</p>
            <p className="text-blue-100 leading-relaxed text-sm">
              Fill the room up to the maximum group size. The more people you train, the better the value.
            </p>
          </div>
        </div>
      </section>

      {/* YOUR TRAINER */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-200 rounded-lg aspect-square max-w-sm mx-auto flex items-center justify-center text-gray-400 text-sm w-full">
            [Photo of David]
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">You&apos;ll work directly with David</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Registered NHS mental health nurse with decades of clinical practice. No account managers, no handoffs — David handles the conversation and delivers the training.
            </p>
            <Link href="/about" className="text-blue-700 font-medium hover:underline">
              Meet David →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Common questions from buyers</h2>
          <div className="divide-y divide-gray-200 border-y border-gray-200">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-4">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <span className="font-medium text-gray-900">{faq.q}</span>
                  <span className="text-gray-400 group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  [Answer to be added — get in touch via the contact page in the meantime.]
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gray-900 py-20 px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-3">Bring MHFA training to your team</h2>
        <p className="text-gray-400 mb-8">Have a clear brief? Request a quote. Still figuring it out? Book a call.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="bg-white text-gray-900 font-semibold px-8 py-3 rounded hover:bg-gray-100 transition-colors"
          >
            Request a quote
          </Link>
          <Link
            href="/contact"
            className="border border-gray-600 text-white font-semibold px-8 py-3 rounded hover:bg-gray-800 transition-colors"
          >
            Book a call
          </Link>
        </div>
      </section>
    </>
  );
}
