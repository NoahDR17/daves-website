import Link from "next/link";

export const metadata = {
  title: "Bespoke Mental Health Training | Positive Cultures",
  description:
    "Bespoke mental health training packages tailored to the needs of your staff, delivered online or face to face.",
};

// Add or remove bespoke training topics here
const offerings = [
  "Gambling harm",
  "Team building day facilitation",
  "Anxiety management",
  "Stress management",
  "Management training on implementing changes to workplace mental health culture",
  "Staff supervision to help your team reach their full potential",
];

const delivery = [
  { title: "Online", desc: "Ideal for remote, hybrid or multi-site teams who can't easily come together in one place." },
  { title: "Face to face", desc: "Delivered in person at your workplace or venue for a more interactive, hands-on session." },
];

const steps = [
  { step: "01", title: "Get in touch", desc: "Tell us about your organisation and your staff." },
  { step: "02", title: "Discuss your needs", desc: "David talks through your team needs and the options available." },
  { step: "03", title: "Tailored package", desc: "A training package designed around your workforce." },
  { step: "04", title: "Delivery", desc: "Sessions delivered online or face to face." },
];

export default function BespokeTraining() {
  return (
    <>
      {/* HERO */}
      <section className="bg-white py-20 px-4 border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <p className="text-blue-700 text-sm font-semibold uppercase tracking-wide mb-3">
            Tailored to your organisation
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6 max-w-3xl">
            Bespoke Mental Health Training
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mb-8">
            In addition to FAA Ofqual regulated Mental Health First Aid training, David can also offer bespoke mental health training packages tailored to the needs of your staff.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="bg-blue-700 text-white font-medium px-6 py-3 rounded hover:bg-blue-800 transition-colors">
              Discuss your needs
            </Link>
            <Link href="/courses" className="border border-gray-300 text-gray-700 font-medium px-6 py-3 rounded hover:bg-gray-50 transition-colors">
              View accredited courses
            </Link>
          </div>
        </div>
      </section>

      {/* TOPICS */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Bespoke training includes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every package is shaped around your team. Topics can be delivered on their own or combined.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((item, i) => (
              <div
                key={item}
                className="border border-gray-200 rounded-lg p-6 flex items-start gap-4 hover:border-blue-700 hover:shadow-md transition-all"
              >
                <span className="shrink-0 w-10 h-10 rounded-full bg-blue-50 text-blue-700 font-bold text-sm flex items-center justify-center">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-bold text-gray-900 leading-snug pt-2">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERY */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Delivered the way that suits you</h2>
            <p className="text-gray-600 leading-relaxed">
              These sessions can be delivered online or face to face depending on your workforce structure.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {delivery.map((d) => (
              <div key={d.title} className="bg-blue-700 text-white rounded-lg p-8">
                <p className="text-2xl font-bold mb-2">{d.title}</p>
                <p className="text-blue-100 text-sm">{d.desc}</p>
              </div>
            ))}
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

      {/* CTA */}
      <section className="bg-gray-900 py-20 px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-3">Looking for something tailored to your team?</h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Get in touch to discuss your needs and consider solutions to your mental health training needs.
        </p>
        <Link href="/contact" className="bg-white text-gray-900 font-semibold px-8 py-3 rounded hover:bg-gray-100 transition-colors">
          Get in touch
        </Link>
      </section>
    </>
  );
}
