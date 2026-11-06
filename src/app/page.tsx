import Image from "next/image";
import Link from "next/link";

const courses = [
  { href: "/courses/mhfa-awareness", duration: "4 Hours", title: "Awareness of First Aid for Mental Health", desc: "An introductory qualification for all staff. Raises awareness and reduces stigma." },
  { href: "/courses/mhfa", duration: "1 Day", title: "First Aid for Mental Health", desc: "A nationally recognised qualification for designated Mental Health First Aiders." },
  { href: "/courses/mhfa-supervising", duration: "2 Days", title: "Supervising First Aid for Mental Health", desc: "The most comprehensive qualification. For those taking a leading role in mental health support." },
  { href: "/courses/youth-mental-health", duration: "1 Day", title: "First Aid for Youth Mental Health", desc: "Specialist training focused on children and young people aged 8–18." },
  { href: "/courses/refresher", duration: "3 Hours", title: "Annual Refresher", desc: "Keep skills and knowledge current for existing qualified first aiders." },
];

const steps = [
  { step: "01", title: "Enquire", desc: "Tell us about your organisation and what you need." },
  { step: "02", title: "Scoping call", desc: "David recommends the right course for your team." },
  { step: "03", title: "Agree details", desc: "Course, dates, venue and a written all-in quote." },
  { step: "04", title: "Train", desc: "David delivers in person at your workplace or venue." },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-brand-teal text-sm font-semibold uppercase tracking-wide mb-3">
              FAA Ofqual-Regulated Training
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-ink leading-tight mb-4">
              Mental Health First Aid training, delivered by an NHS mental health nurse.
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Accredited courses taught with the depth that only 25 years of clinical experience can bring.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="bg-brand-sunrise text-brand-teal-deep font-medium px-6 py-3 rounded hover:bg-brand-sunrise-light transition-colors">
                Enquire about training
              </Link>
              <Link href="/courses" className="border border-gray-300 text-gray-700 font-medium px-6 py-3 rounded hover:bg-brand-mist transition-colors">
                View courses
              </Link>
            </div>
          </div>
          {/* TODO: swap for a photo of David when available */}
          <div className="bg-brand-mist rounded-lg aspect-[4/3] flex items-center justify-center p-8">
            <Image
              src="/logo-transparent.png"
              alt="Positive Cultures Training and Consultancy"
              width={550}
              height={470}
              loading="eager"
              className="w-full max-w-sm h-auto"
            />
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-brand-mist border-y border-gray-200 py-5 px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-8 text-sm font-medium text-gray-600">
          <span>✓ FAA Ofqual-Regulated Instructor</span>
          <span>✓ Registered Mental Health Nurse (RMN)</span>
          <span>✓ 25+ Years NHS Experience</span>
          <span>✓ Enhanced DBS Checked</span>
          <span>✓ ICO Registered</span>
          <span>✓ Fully Insured</span>
        </div>
      </section>

      {/* ABOUT POSITIVE CULTURES */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brand-ink mb-4">About Positive Cultures</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Positive Cultures is a specialist mental health training and consultancy company founded by David Scott, a highly experienced Mental Health Nurse with over 25 years of clinical practice across mental health liaison and crisis services, low secure services, community mental health, and acute and complex care.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Drawing on extensive frontline experience, Positive Cultures delivers practical, engaging and evidence-based mental health training that helps organisations create safer, healthier and more supportive workplaces. As a trained instructor through NUCO Training, David delivers FAA Ofqual-regulated qualifications, providing nationally recognised training that develops confidence, knowledge and practical skills.
              </p>
              <p className="text-gray-600 leading-relaxed italic">
                &ldquo;Creating workplaces where people feel heard, supported and able to thrive.&rdquo;
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="bg-brand-teal-deep text-white rounded-lg p-10 text-center">
                <p className="text-6xl font-bold mb-2">1 in 4</p>
                <p className="text-brand-mist">UK employees experience a mental health issue each year</p>
              </div>
              <div className="bg-brand-teal-deep text-white rounded-lg p-10 text-center">
                <p className="text-6xl font-bold mb-2">22.9</p>
                <p className="text-xl font-semibold mb-2">Workdays lost</p>
                <p className="text-brand-mist">On average per case of work-related stress, anxiety and depression, this has increased year on year since 1990. </p>
                <p className="text-sm text-brand-mist mt-3">Source: HSE, 2026</p>
              </div>
              </div>
          </div>

          {/* RETURN ON INVESTMENT */}
          <div className="mt-12 bg-brand-mist border border-brand-sage rounded-lg p-8 md:p-10 grid md:grid-cols-3 gap-8 items-center">
            <div className="text-center md:text-left md:border-r md:border-brand-sage md:pr-8">
              <p className="text-5xl font-bold text-brand-teal mb-1">£5.30</p>
              <p className="text-gray-700 font-medium">average return for every £1 invested</p>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-brand-ink mb-3">Return on Investment</h3>
              <p className="text-gray-600 leading-relaxed">
                Investing in Mental Health First Aid training protects our people&apos;s well-being before distress escalates into burnout, turning an invisible annual drain of up to £2,300 per employee into a high-performing workplace culture. By building a psychologically safe environment, we reduce the disruptive friction of staff turnover and secure an average £5.30 return for every £1 we invest in our team&apos;s mental health resilience.
              </p>
              <p className="text-sm text-gray-600 mt-3">Source: Deloitte, 2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY TRAIN WITH DAVID */}
      <section className="bg-brand-mist py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-ink mb-4">Why train with Positive Cultures?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Most mental health first aid trainers took a short course to learn to teach. David brings over 25 years of clinical NHS practice into every room.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Clinical depth", desc: "Answers grounded in real assessment and 25 years of frontline NHS mental health experience — not just a manual." },
              { title: "Real NHS experience", desc: "Dave draws on his extensive clinical experience to bring the training to life whilst maintaining confidentiality and discussing individual experiences in a sensitive and compassionate way." },
              { title: "Accurate signposting", desc: "David knows exactly how NHS mental health pathways work — so your team gets signposting that is actually useful." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-brand-ink mb-2">{item.title}</h3>
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
            <h2 className="text-3xl font-bold text-brand-ink mb-4">Courses</h2>
            <p className="text-gray-600">FAA Ofqual-regulated qualifications for organisations of all sizes, delivered in person by David.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <Link
                key={course.href}
                href={course.href}
                className="group border border-gray-200 rounded-lg p-6 hover:border-brand-teal hover:shadow-md transition-all"
              >
                <span className="text-xs font-semibold text-brand-teal uppercase tracking-wide">{course.duration}</span>
                <h3 className="font-bold text-brand-ink mt-1 mb-2 group-hover:text-brand-teal transition-colors">{course.title}</h3>
                <p className="text-gray-600 text-sm">{course.desc}</p>
              </Link>
            ))}
            <Link
              href="/bespoke-training"
              className="group border border-brand-sage bg-brand-mist rounded-lg p-6 hover:border-brand-teal hover:shadow-md transition-all"
            >
              <span className="text-xs font-semibold text-brand-teal uppercase tracking-wide">Online or face to face</span>
              <h3 className="font-bold text-brand-ink mt-1 mb-2 group-hover:text-brand-teal transition-colors">Bespoke Mental Health Training</h3>
              <p className="text-gray-600 text-sm">Tailored packages including gambling harm awareness and team building day facilitation.</p>
            </Link>
          </div>
          <div className="text-center mt-8">
            <Link href="/courses" className="text-brand-teal font-medium hover:underline">
              View all courses →
            </Link>
          </div>
        </div>
      </section>

      {/* MEET DAVID */}
      <section className="bg-brand-mist py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-200 rounded-lg aspect-square max-w-sm mx-auto flex items-center justify-center text-gray-400 text-sm w-full">
            [Portrait of David]
          </div>
          <div>
            <h2 className="text-3xl font-bold text-brand-ink mb-4">Meet David Scott</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              David Scott is a Registered Mental Health Nurse (RMN) with over 25 years of NHS clinical experience. He has worked across mental health liaison and crisis services, low secure services, community mental health teams, and acute and complex care across Merseyside and Lancashire.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Now an FAA accredited instructor, David brings that clinical depth into every training room — giving your team answers that go beyond what any manual can offer.
            </p>
            <Link href="/about" className="text-brand-teal font-medium hover:underline">
              Read David&apos;s full story →
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-brand-ink text-center mb-12">How it works</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-brand-teal-deep text-white font-bold text-lg flex items-center justify-center mx-auto mb-4">
                  {s.step}
                </div>
                <h3 className="font-bold text-brand-ink mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROFESSIONAL STANDARDS */}
      <section className="bg-brand-mist py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-brand-ink mb-4">Professional standards and assurance</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            When you work with Positive Cultures, you can be confident that training is delivered by an experienced healthcare professional committed to safeguarding, confidentiality, professionalism and best practice.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-gray-600">
            <span className="bg-white border border-gray-200 rounded px-4 py-2">✓ Enhanced DBS Checked</span>
            <span className="bg-white border border-gray-200 rounded px-4 py-2">✓ ICO Registered</span>
            <span className="bg-white border border-gray-200 rounded px-4 py-2">✓ Public Liability Insured</span>
            <span className="bg-white border border-gray-200 rounded px-4 py-2">✓ Professional Indemnity Insured</span>
            <span className="bg-white border border-gray-200 rounded px-4 py-2">✓ NMC Registered Nurse</span>
          </div>
        </div>
      </section>

      {/* INDIVIDUAL CALLOUT */}
      <section className="py-10 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-brand-ink">Booking for yourself, not a team?</p>
            <p className="text-gray-600 text-sm">Positive Cultures primarily delivers in-house training but individual places may be available. Get in touch.</p>
          </div>
          <Link href="/contact" className="shrink-0 border border-gray-300 text-gray-700 font-medium px-5 py-2.5 rounded hover:bg-gray-100 transition-colors text-sm">
            Get in touch
          </Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-brand-teal-deep py-20 px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-3">Ready to bring mental health first aid training to your team?</h2>
        <p className="text-brand-mist mb-8">No pressure, no obligation. Get in touch and David will respond within two working days.</p>
        <Link href="/contact" className="bg-brand-sunrise text-brand-teal-deep font-semibold px-8 py-3 rounded hover:bg-brand-sunrise-light transition-colors">
          Enquire about training
        </Link>
      </section>
    </>
  );
}
