import Link from "next/link";

export default function Accessibility() {
  return (
    <>
      <section className="bg-white py-16 px-4 border-b border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-brand-ink mb-3">Accessibility Statement</h1>
          <p className="text-gray-600 text-sm">Last updated: September 2026</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-10 text-gray-600 leading-relaxed">

          <div>
            <h2 className="text-xl font-bold text-brand-ink mb-3">Our commitment</h2>
            <p>
              Positive Cultures Training and Consultancy is committed to making this website accessible to as many people
              as possible, including those with disabilities. We aim to meet the Web Content Accessibility Guidelines
              (WCAG) 2.2 at Level AA, which is the standard recommended by the UK Equality Act 2010 and widely accepted
              as best practice for accessible web design.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-ink mb-3">What we have done</h2>
            <p>This website has been built with accessibility in mind. Steps we have taken include:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Using semantic HTML elements to support screen readers</li>
              <li>Providing text alternatives for non-text content (alt text on images)</li>
              <li>Ensuring sufficient colour contrast between text and backgrounds</li>
              <li>Making all interactive elements keyboard-navigable</li>
              <li>Using clear, plain English throughout</li>
              <li>Structuring pages with clear headings to support navigation</li>
              <li>Ensuring the site is responsive and usable on mobile devices</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-ink mb-3">Known limitations</h2>
            <p>
              While we strive for full accessibility, there may be some areas that do not yet fully meet WCAG 2.2 AA
              standards. We are aware of the following and are working to address them:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Some image content may have incomplete or missing alternative text — we are reviewing this</li>
              <li>PDF documents, if provided in future, will be made accessible or an alternative format offered on request</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-ink mb-3">Reporting accessibility problems</h2>
            <p>
              We welcome feedback. If you experience any difficulty accessing content on this website, or would like to
              request information in an alternative format, please contact us:
            </p>
            <p className="mt-3">
              <strong className="text-brand-ink">Email:</strong>{" "}
              <a href="mailto:positiveculture@gmail.com" className="text-brand-teal hover:underline">
                positiveculture@gmail.com
              </a>
            </p>
            <p className="mt-1 text-sm text-gray-600">
              We will acknowledge your message within five working days and aim to resolve issues or provide an
              alternative as quickly as possible.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-ink mb-3">Enforcement</h2>
            <p>
              The Equality Act 2010 requires businesses to make reasonable adjustments so that disabled people are not
              put at a substantial disadvantage when accessing services. If you are not satisfied with our response to
              an accessibility concern, you may contact the Equality Advisory and Support Service (EASS):
            </p>
            <p className="mt-3">
              <a href="https://www.equalityadvisoryservice.com/" target="_blank" rel="noopener noreferrer" className="text-brand-teal hover:underline">
                equalityadvisoryservice.com
              </a>{" "}
              · Helpline: 0808 800 0082
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-ink mb-3">Technical information</h2>
            <p>
              This website is built using Next.js and is served over HTTPS. It does not rely on JavaScript for access to
              core content. We test across modern browsers including Chrome, Firefox, Safari and Edge on both desktop and
              mobile devices.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-ink mb-3">Review schedule</h2>
            <p>
              This statement is reviewed and updated at least annually, or whenever significant changes are made to the
              website.
            </p>
          </div>

        </div>
      </section>

      <section className="bg-brand-mist py-12 px-4 border-t border-gray-100 text-center">
        <p className="text-gray-600 text-sm">
          Questions or concerns?{" "}
          <Link href="/contact" className="text-brand-teal hover:underline">Get in touch</Link>.
        </p>
      </section>
    </>
  );
}
