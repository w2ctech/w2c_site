import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Disclaimer for w2ctech - Limitations of liability and use of information on our website.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://w2ctech.com/disclaimer" },
};

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
        <Link href="/" className="text-sm text-blue-600 hover:text-blue-800">
          &larr; Back to Home
        </Link>
        <h1 className="mt-4 text-4xl font-bold text-gray-900">Disclaimer</h1>
        <p className="mt-2 text-sm text-gray-500">Last updated: {new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</p>

        <div className="mt-10 space-y-10 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900">1. General Information</h2>
            <p className="mt-3">
              The information provided on <strong>w2ctech.com</strong> (&quot;the Website&quot;) is for
              general informational purposes only. While we strive to keep the information
              accurate and up-to-date, we make no representations or warranties of any kind,
              express or implied, about the completeness, accuracy, reliability, suitability,
              or availability of the Website or the information, products, services, or related
              graphics contained on the Website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">2. No Professional Advice</h2>
            <p className="mt-3">
              The content on this Website does not constitute professional advice. Any reliance
              you place on such information is strictly at your own risk. We recommend consulting
              with qualified professionals before making any business or technical decisions based
              on the information provided.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">3. Service Results</h2>
            <p className="mt-3">
              While we are committed to delivering high-quality web design, development, and
              digital marketing services, we do not guarantee specific results, rankings, traffic
              volumes, or revenue outcomes. Results may vary based on numerous factors including
              market conditions, competition, and client cooperation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">4. Third-Party Links</h2>
            <p className="mt-3">
              Our Website may contain links to external websites that are not provided or maintained
              by w2ctech. We do not guarantee the accuracy, relevance, timeliness, or completeness
              of any information on these external websites. The inclusion of any links does not
              necessarily imply a recommendation or endorse the views expressed within them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">5. Technology and Security</h2>
            <p className="mt-3">
              We take reasonable measures to protect our Website and services; however, we cannot
              guarantee that the Website will be free from viruses, malware, or other harmful
              components. Users are responsible for implementing their own security measures.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">6. Limitation of Liability</h2>
            <p className="mt-3">
              Under no circumstances shall w2ctech, its directors, employees, partners, agents,
              or affiliates be liable for any direct, indirect, incidental, special, consequential,
              or punitive damages, including without limitation loss of profits, data, use,
              goodwill, or other intangible losses, resulting from your access to or use of or
              inability to access or use the Website or our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">7. Intellectual Property</h2>
            <p className="mt-3">
              All trademarks, logos, and brand names displayed on this Website are the property
              of their respective owners. Any unauthorized use of these materials may violate
              copyright, trademark, and other applicable laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">8. Jurisdiction</h2>
            <p className="mt-3">
              This disclaimer shall be governed by and interpreted in accordance with the laws of
              India. Any disputes relating to this disclaimer shall be subject to the exclusive
              jurisdiction of the courts in [Your City, State], India.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">9. Updates to Disclaimer</h2>
            <p className="mt-3">
              We reserve the right to amend this disclaimer at any time without prior notice.
              Changes will be effective immediately upon posting to the Website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">10. Contact</h2>
            <p className="mt-3">
              For questions regarding this disclaimer, contact:{" "}
              <a href="mailto:info@w2ctech.com" className="text-blue-600 hover:underline">info@w2ctech.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
