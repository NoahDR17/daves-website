"use client";

import { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xnjkpwpk";

const courses = [
  "Not sure yet",
  "Mental Health First Aid Awareness (4 hrs)",
  "First Aid for Mental Health (1 day)",
  "Supervising First Aid for Mental Health (2 days)",
  "Youth Mental Health First Aid (1 day)",
  "Annual Refresher (half day)",
];

export default function ContactPage() {
  const [enquiryType, setEnquiryType] = useState<"organisation" | "individual">("organisation");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("enquiry_type", enquiryType);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      {/* HERO */}
      <section className="bg-white py-16 px-4 border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Get in touch</h1>
          <p className="text-gray-500 text-lg">
            Use the form below, give David a ring, or drop him an email. Most enquiries get a response within two working days.
          </p>
        </div>
      </section>

      {/* FORM + SIDEBAR */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">

          {/* Form */}
          <div className="lg:col-span-2">
            {status === "success" ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                <div className="text-4xl mb-4">✓</div>
                <h2 className="text-xl font-bold text-green-800 mb-2">Enquiry sent</h2>
                <p className="text-green-700">Thanks for getting in touch. David will get back to you within two working days.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Enquiry type toggle */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">I am enquiring as...</label>
                  <div className="flex rounded-lg border border-gray-200 overflow-hidden w-fit">
                    <button
                      type="button"
                      onClick={() => setEnquiryType("organisation")}
                      className={`px-5 py-2.5 text-sm font-medium transition-colors ${
                        enquiryType === "organisation"
                          ? "bg-blue-700 text-white"
                          : "bg-white text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      An organisation
                    </button>
                    <button
                      type="button"
                      onClick={() => setEnquiryType("individual")}
                      className={`px-5 py-2.5 text-sm font-medium transition-colors border-l border-gray-200 ${
                        enquiryType === "individual"
                          ? "bg-blue-700 text-white"
                          : "bg-white text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      An individual
                    </button>
                  </div>
                </div>

                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">Your name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent"
                  />
                </div>

                {/* Organisation */}
                {enquiryType === "organisation" && (
                  <div>
                    <label htmlFor="organisation" className="block text-sm font-semibold text-gray-700 mb-1">Organisation</label>
                    <input
                      id="organisation"
                      name="organisation"
                      type="text"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent"
                    />
                  </div>
                )}

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">Email address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">
                    Phone <span className="text-gray-400 font-normal">(optional)</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent"
                  />
                </div>

                {/* Course */}
                <div>
                  <label htmlFor="course" className="block text-sm font-semibold text-gray-700 mb-1">
                    Which course? <span className="text-gray-400 font-normal">(optional)</span>
                  </label>
                  <select
                    id="course"
                    name="course"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent bg-white"
                  >
                    {courses.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">Tell us about what you need</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-600 text-sm">Something went wrong. Please try again or email David directly.</p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="bg-blue-700 text-white font-medium px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? "Sending..." : "Send enquiry"}
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6 space-y-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">Phone</p>
                <a href="tel:07766226010" className="text-gray-900 font-medium hover:text-blue-700 transition-colors">
                  07766 226010
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">Email</p>
                <a href="mailto:psychscott@hotmail.co.uk" className="text-gray-900 font-medium hover:text-blue-700 transition-colors break-all">
                  psychscott@hotmail.co.uk
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">Area covered</p>
                <p className="text-gray-700 text-sm">David delivers in person across Merseyside and Lancashire. For groups further afield, get in touch — travel can usually be arranged.</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">Response time</p>
                <p className="text-gray-700 text-sm">Most enquiries get a personal reply from David within two working days.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT HAPPENS NEXT */}
      <section className="bg-gray-50 py-16 px-4 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">What happens after you enquire</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { tag: "Within 2 days", title: "A personal reply", desc: "From David, not an assistant." },
              { tag: "If helpful", title: "A short scoping call", desc: "15–20 minutes, no pressure." },
              { tag: "Then", title: "A written quote", desc: "Clear, all-in, no surprises." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-lg p-6 border border-gray-100">
                <p className="text-xs font-semibold text-blue-700 uppercase tracking-wide mb-2">{item.tag}</p>
                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
