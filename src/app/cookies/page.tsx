import Link from "next/link";

export default function Cookies() {
  return (
    <>
      <section className="bg-white py-16 px-4 border-b border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-brand-ink mb-3">Cookies Policy</h1>
          <p className="text-gray-600 text-sm">Last updated: September 2026</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-10 text-gray-600 leading-relaxed">

          <div>
            <h2 className="text-xl font-bold text-brand-ink mb-3">What are cookies?</h2>
            <p>
              Cookies are small text files placed on your device by a website. They are widely used to make websites work
              correctly and to provide information to site owners. UK law — specifically the Privacy and Electronic
              Communications Regulations (PECR) — governs how cookies may be used.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-ink mb-3">How we use cookies</h2>
            <p>
              This website is designed to be minimal in its use of cookies. We do not use advertising cookies, tracking
              cookies, or third-party analytics cookies that follow you across the web. We do not use any cookies that
              require your consent under PECR.
            </p>
            <p className="mt-3">
              The only cookies that may be set are strictly necessary cookies — those required for the website to function
              correctly. These are exempt from consent requirements under PECR.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-ink mb-3">Strictly necessary cookies</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-brand-mist">
                  <tr>
                    <th className="text-left font-semibold text-gray-700 p-4 border-b border-gray-200">Cookie</th>
                    <th className="text-left font-semibold text-gray-700 p-4 border-b border-gray-200">Purpose</th>
                    <th className="text-left font-semibold text-gray-700 p-4 border-b border-gray-200">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="p-4 text-gray-700 font-mono text-xs">__next_hmr</td>
                    <td className="p-4 text-gray-600">Used by the website framework (Next.js) for page routing. Contains no personal data.</td>
                    <td className="p-4 text-gray-600">Session</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-gray-700 font-mono text-xs">Formspree</td>
                    <td className="p-4 text-gray-600">Our contact form is processed by Formspree, which may set a session cookie to prevent spam submissions. No personal data is stored in this cookie.</td>
                    <td className="p-4 text-gray-600">Session</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 mt-3">
              Session cookies are deleted automatically when you close your browser.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-ink mb-3">Third-party services</h2>
            <p>
              Our contact form uses Formspree (formspree.io) to process enquiries. Formspree operates under its own privacy
              and cookie policy, which you can review at{" "}
              <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-brand-teal hover:underline">
                formspree.io/legal/privacy-policy
              </a>.
            </p>
            <p className="mt-3">
              We do not use Google Analytics, Facebook Pixel, or any other third-party tracking or advertising services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-ink mb-3">Managing cookies</h2>
            <p>
              You can control and delete cookies through your browser settings. Deleting strictly necessary cookies may
              affect the functioning of the contact form. For guidance on managing cookies in your browser, visit{" "}
              <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-brand-teal hover:underline">
                allaboutcookies.org
              </a>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-ink mb-3">Changes to this policy</h2>
            <p>
              If we introduce new cookies or change how we use existing ones, we will update this page and revise the date
              at the top. We will notify you of any material changes that require your consent.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-ink mb-3">Further information</h2>
            <p>
              For more information about cookies and your rights under PECR, visit the ICO website at{" "}
              <a href="https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guide-to-pecr/cookies-and-similar-technologies/" target="_blank" rel="noopener noreferrer" className="text-brand-teal hover:underline">
                ico.org.uk
              </a>.
              If you have a question about our use of cookies, <Link href="/contact" className="text-brand-teal hover:underline">get in touch</Link>.
            </p>
          </div>

        </div>
      </section>

      <section className="bg-brand-mist py-12 px-4 border-t border-gray-100 text-center">
        <p className="text-gray-600 text-sm">
          See also our <Link href="/privacy" className="text-brand-teal hover:underline">Privacy Policy</Link> for information on how we handle your personal data.
        </p>
      </section>
    </>
  );
}
