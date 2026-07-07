import Link from "next/link";

export interface CourseLearnItem {
  title: string;
  desc: string;
}

export interface CourseStructureItem {
  label: string;
  title: string;
  desc: string;
}

export interface CourseFAQ {
  q: string;
  a: string;
}

export interface RelatedCourse {
  href: string;
  label: string;
  title: string;
}

export interface CourseData {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  length: string;
  groupSize: string | null;
  format: string;
  certified: string;
  flagship?: boolean;
  learnItems: CourseLearnItem[];
  structure: CourseStructureItem[];
  whoItIsFor: string;
  included: string[];
  faqs: CourseFAQ[];
  ctaTitle: string;
  related: RelatedCourse[];
}

export default function CoursePageTemplate({ course }: { course: CourseData }) {
  return (
    <>
      {/* HERO */}
      <section className="bg-white py-16 px-4 border-b border-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-sm text-gray-400 mb-3">
              <Link href="/" className="hover:text-gray-600">Home</Link>
              {" → "}
              <Link href="/courses" className="hover:text-gray-600">Courses</Link>
              {" → "}
              {course.title}
            </p>
            <p className="text-blue-700 text-sm font-semibold uppercase tracking-wide mb-3">
              {course.eyebrow}
            </p>
            <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
              {course.title}
            </h1>
            <p className="text-lg text-gray-600 mb-8">{course.description}</p>
            <div className="grid grid-cols-2 gap-4 mb-8 text-sm">
              <div className="bg-gray-50 rounded p-3">
                <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Length</p>
                <p className="font-semibold text-gray-900">{course.length}</p>
              </div>
              {course.groupSize && (
                <div className="bg-gray-50 rounded p-3">
                  <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Group size</p>
                  <p className="font-semibold text-gray-900">{course.groupSize}</p>
                </div>
              )}
              <div className="bg-gray-50 rounded p-3">
                <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Format</p>
                <p className="font-semibold text-gray-900">{course.format}</p>
              </div>
              <div className="bg-gray-50 rounded p-3">
                <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Certified</p>
                <p className="font-semibold text-gray-900">{course.certified}</p>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-block bg-blue-700 text-white font-medium px-6 py-3 rounded hover:bg-blue-800 transition-colors"
            >
              Enquire about this course
            </Link>
          </div>
          <div className="bg-gray-100 rounded-lg aspect-[4/3] flex items-center justify-center text-gray-400 text-sm">
            [Course image]
          </div>
        </div>
      </section>

      {/* WHAT YOU'LL LEARN */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What you&apos;ll learn</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {course.learnItems.map((item) => (
              <div key={item.title} className="border border-gray-100 rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COURSE STRUCTURE */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Course structure</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {course.structure.map((block) => (
              <div key={block.label} className="bg-white rounded-lg p-6 border border-gray-100">
                <p className="text-blue-700 text-xs font-semibold uppercase tracking-wide mb-1">{block.label}</p>
                <h3 className="font-bold text-gray-900 mb-2">{block.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{block.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Who this course is for</h2>
            <p className="text-gray-600 leading-relaxed">{course.whoItIsFor}</p>
          </div>
          <div className="bg-blue-700 text-white rounded-lg p-8">
            <h3 className="font-bold text-lg mb-4">What&apos;s included</h3>
            <ul className="space-y-2">
              {course.included.map((item) => (
                <li key={item} className="flex items-start gap-2 text-blue-100 text-sm">
                  <span className="font-bold text-white mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* YOUR TRAINER */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-8 items-center border border-gray-100 bg-white rounded-lg p-8 shadow-sm">
          <div className="bg-gray-200 rounded-lg w-24 h-24 shrink-0 flex items-center justify-center text-gray-400 text-xs">
            [David]
          </div>
          <div className="flex-1">
            <h2 className="font-bold text-gray-900 mb-1">Taught by David — an NHS mental health nurse</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Decades on the front line of NHS mental health care. The depth of answers, real-world scenarios, and clinical accuracy that only experience can bring.
            </p>
          </div>
          <Link href="/about" className="shrink-0 text-blue-700 font-medium text-sm hover:underline whitespace-nowrap">
            Meet David →
          </Link>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Common questions</h2>
          <div className="divide-y divide-gray-200 border-y border-gray-200">
            {course.faqs.map((faq) => (
              <details key={faq.q} className="group py-4">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <span className="font-medium text-gray-900">{faq.q}</span>
                  <span className="text-gray-400 group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gray-900 py-20 px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-3">{course.ctaTitle}</h2>
        <p className="text-gray-400 mb-8">Tell us your group size and preferred dates — we&apos;ll come back with a quote.</p>
        <Link
          href="/contact"
          className="bg-white text-gray-900 font-semibold px-8 py-3 rounded hover:bg-gray-100 transition-colors"
        >
          Enquire about this course
        </Link>
      </section>

      {/* RELATED COURSES */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Looking for something different?</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {course.related.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="group border border-gray-200 rounded-lg p-5 hover:border-blue-700 hover:shadow-sm transition-all"
              >
                <p className="text-xs font-semibold text-blue-700 uppercase tracking-wide mb-1">{r.label}</p>
                <p className="font-medium text-gray-900 text-sm group-hover:text-blue-700 transition-colors">{r.title}</p>
                <p className="text-blue-700 text-xs mt-2">View course →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
