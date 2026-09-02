import Link from "next/link";

export default function Terms() {
  return (
    <>
      <section className="bg-white py-16 px-4 border-b border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Terms of Use</h1>
          <p className="text-gray-500 text-sm">Last updated: September 2026</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-10 text-gray-600 leading-relaxed">

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">About this website</h2>
            <p>
              This website (positivecultures.co.uk) is operated by Positive Cultures Training and Consultancy, a sole trader
              business run by David Scott. By accessing and using this website, you agree to these terms of use.
              If you do not agree, please do not use this website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Use of this website</h2>
            <p>
              This website is provided for informational purposes and to allow you to make enquiries about our training and
              consultancy services. You agree to use it only for lawful purposes and in a way that does not infringe the
              rights of others or restrict their use of the site.
            </p>
            <p className="mt-3">
              You must not attempt to gain unauthorised access to any part of this website, its server, or any system
              connected to it.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Accuracy of information</h2>
            <p>
              We take care to ensure that the information on this website is accurate and up to date. However, we make no
              warranty — express or implied — that any content is complete, accurate or current. Pricing, course details
              and availability are subject to change. Always confirm details with us directly before making a booking.
            </p>
            <p className="mt-3">
              Nothing on this website constitutes professional medical, legal, therapeutic or clinical advice. Our training
              equips participants with first aid skills; it is not a substitute for professional mental health treatment.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Training bookings</h2>
            <p>
              Enquiries submitted through this website do not constitute a binding contract. A booking is confirmed only
              when both parties have agreed in writing to the course, date, venue and fee. Full terms and conditions of
              booking, including cancellation and payment terms, are provided at the time of booking confirmation.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Intellectual property</h2>
            <p>
              All content on this website — including text, design, graphics and the Positive Cultures logo — is owned by
              or licensed to Positive Cultures Training and Consultancy. You may not reproduce, distribute or use any
              content from this website without our prior written permission, except where permitted by law.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Links to other websites</h2>
            <p>
              This website may contain links to external websites. These links are provided for your convenience. We are
              not responsible for the content, privacy practices or accuracy of external sites, and a link does not
              constitute an endorsement.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Limitation of liability</h2>
            <p>
              To the extent permitted by law, Positive Cultures Training and Consultancy excludes all liability for any
              loss or damage arising from your use of this website or reliance on its content. This does not affect any
              liability that cannot be excluded under applicable law, including liability for death or personal injury caused
              by negligence.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Governing law</h2>
            <p>
              These terms are governed by the laws of England and Wales. Any disputes arising from your use of this
              website will be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Changes to these terms</h2>
            <p>
              We may update these terms from time to time. The date at the top of this page shows when they were last
              revised. Continued use of the website after any changes constitutes your acceptance of the updated terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Contact</h2>
            <p>
              If you have any questions about these terms, please{" "}
              <Link href="/contact" className="text-blue-700 hover:underline">get in touch</Link> or email{" "}
              <a href="mailto:positiveculture@gmail.com" className="text-blue-700 hover:underline">
                positiveculture@gmail.com
              </a>.
            </p>
          </div>

        </div>
      </section>

      <section className="bg-gray-50 py-12 px-4 border-t border-gray-100 text-center">
        <p className="text-gray-500 text-sm">
          See also our <Link href="/privacy" className="text-blue-700 hover:underline">Privacy Policy</Link> and{" "}
          <Link href="/cookies" className="text-blue-700 hover:underline">Cookies Policy</Link>.
        </p>
      </section>
    </>
  );
}
