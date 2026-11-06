import Link from "next/link";

export default function Privacy() {
  return (
    <>
      <section className="bg-white py-16 px-4 border-b border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-brand-ink mb-3">Privacy Policy</h1>
          <p className="text-gray-600 text-sm">Last updated: September 2026</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-10 text-gray-600 leading-relaxed">

          <div>
            <h2 className="text-xl font-bold text-brand-ink mb-3">Who we are</h2>
            <p>
              This website is operated by Positive Cultures Training and Consultancy, a sole trader business run by David Scott.
              We are the data controller for any personal information collected through this website.
            </p>
            <p className="mt-3">
              <strong className="text-brand-ink">Contact:</strong> positiveculture@gmail.com
            </p>
            <p className="mt-1">
              <strong className="text-brand-ink">ICO Registration Number:</strong> ZC175421
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-ink mb-3">What personal data we collect</h2>
            <p>
              We only collect personal data that you provide to us directly. When you use our contact form, we collect your name,
              email address, phone number (if provided), organisation name (if provided), the course you are enquiring about (if selected),
              and your message.
            </p>
            <p className="mt-3">
              We do not collect any sensitive personal data, and we do not use cookies for tracking or advertising purposes.
              See our <Link href="/cookies" className="text-brand-teal hover:underline">Cookies Policy</Link> for more detail.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-ink mb-3">Why we collect it and our lawful basis</h2>
            <p>
              We collect your contact details to respond to your enquiry and, where you proceed to book training, to fulfil our
              contract with you. Our lawful basis under UK GDPR is:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside text-gray-600">
              <li><strong className="text-brand-ink">Legitimate interests</strong> — to respond to enquiries from potential clients</li>
              <li><strong className="text-brand-ink">Contract</strong> — to deliver training and consultancy services you have booked</li>
              <li><strong className="text-brand-ink">Legal obligation</strong> — where we are required to retain records by law</li>
            </ul>
            <p className="mt-3">
              We do not use your personal data for marketing without your explicit consent.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-ink mb-3">How we handle your data</h2>
            <p>
              Contact form submissions are processed by Formspree (formspree.io), a third-party service that transmits your
              message securely to our email inbox. Formspree acts as a data processor on our behalf and is subject to its own
              privacy policy. We do not store your data in any database beyond our email correspondence.
            </p>
            <p className="mt-3">
              We do not sell, rent or share your personal data with third parties for their own commercial purposes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-ink mb-3">How long we keep your data</h2>
            <p>
              We retain email correspondence and enquiry records for up to three years, after which they are securely deleted.
              Records relating to completed training contracts may be kept for up to six years in line with HMRC guidance on
              business records.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-ink mb-3">Your rights</h2>
            <p>Under UK GDPR, you have the right to:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside text-gray-600">
              <li>Access the personal data we hold about you</li>
              <li>Have inaccurate data corrected</li>
              <li>Request deletion of your data (where no legal obligation to retain it exists)</li>
              <li>Object to or restrict processing</li>
              <li>Data portability where technically feasible</li>
              <li>Withdraw consent where consent is the lawful basis</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, email us at{" "}
              <a href="mailto:positiveculture@gmail.com" className="text-brand-teal hover:underline">positiveculture@gmail.com</a>.
              We will acknowledge your request within five working days and respond fully within one calendar month.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-ink mb-3">Complaints</h2>
            <p>
              If you have a concern about how we handle your personal data, please contact us in the first instance and we will
              investigate and respond within 30 days. If you remain unsatisfied, you have the right to lodge a complaint with
              the Information Commissioner&apos;s Office (ICO):
            </p>
            <p className="mt-3">
              <a href="https://ico.org.uk/make-a-complaint/" target="_blank" rel="noopener noreferrer" className="text-brand-teal hover:underline">
                ico.org.uk/make-a-complaint
              </a>{" "}
              · Helpline: 0303 123 1113
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-ink mb-3">Changes to this policy</h2>
            <p>
              We may update this policy from time to time. The date at the top of this page will reflect when it was last revised.
              We encourage you to review it periodically.
            </p>
          </div>

        </div>
      </section>

      <section className="bg-brand-mist py-12 px-4 border-t border-gray-100 text-center">
        <p className="text-gray-600 text-sm">
          Questions about this policy?{" "}
          <Link href="/contact" className="text-brand-teal hover:underline">Get in touch</Link>.
        </p>
      </section>
    </>
  );
}
