import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for w2ctech - Governing your use of our website and services.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://w2ctech.com/terms-of-service" },
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
        <Link href="/" className="text-sm text-blue-600 hover:text-blue-800">
          &larr; Back to Home
        </Link>
        <h1 className="mt-4 text-4xl font-bold text-gray-900">Terms of Service</h1>
        <p className="mt-2 text-sm text-gray-500">Last updated: {new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</p>

        <div className="mt-10 space-y-10 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900">1. Acceptance of Terms</h2>
            <p className="mt-3">
              By accessing or using <strong>w2ctech.com</strong> (&quot;the Website&quot;) and the services
              provided by w2ctech (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), you agree to be bound by
              these Terms of Service. If you do not agree to all the terms, you may not access
              the Website or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">2. Company Information</h2>
            <p className="mt-3">
              w2ctech is a company registered under the Ministry of Corporate Affairs (MCA),
              Government of India. All services are provided in compliance with applicable Indian
              laws, including the Information Technology Act, 2000 and the Indian Contract Act, 1872.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">3. Services</h2>
            <p className="mt-3">We provide the following services:</p>
            <ul className="mt-2 list-disc pl-6 space-y-1">
              <li>Web Design and Development</li>
              <li>Digital Marketing Services</li>
              <li>Website Maintenance and Support</li>
              <li>Custom Software Solutions</li>
            </ul>
            <p className="mt-3">
              All services are subject to separate agreements, proposals, or statements of work
              (SOW) that will outline the specific scope, deliverables, timelines, and payment terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">4. Intellectual Property Rights</h2>
            <p className="mt-3">
              All content on this Website, including but not limited to text, graphics, logos,
              icons, images, audio clips, digital downloads, data compilations, and software,
              is the property of w2ctech or its content suppliers and is protected by Indian
              and international copyright laws.
            </p>
            <p className="mt-3">
              Upon full payment for services, the client shall own the final deliverables as
              specified in the project agreement. w2ctech retains the right to display the
              work in its portfolio unless otherwise agreed in writing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">5. User Obligations</h2>
            <p className="mt-3">As a user of our Website and services, you agree:</p>
            <ul className="mt-2 list-disc pl-6 space-y-1">
              <li>To provide accurate, current, and complete information</li>
              <li>Not to use the Website for any unlawful purpose</li>
              <li>Not to attempt to gain unauthorized access to our systems</li>
              <li>Not to transmit any malware, viruses, or harmful code</li>
              <li>To maintain the confidentiality of any account credentials</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">6. Payment Terms</h2>
            <p className="mt-3">
              Payment terms for services will be specified in the project agreement or invoice.
              Unless otherwise stated, invoices are payable within the timeframe specified.
              Late payments may incur additional charges as permitted by law.
            </p>
            <p className="mt-3">
              All prices are quoted in the currency specified in the proposal and are subject
              to applicable taxes (GST) as per Indian tax regulations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">7. Limitation of Liability</h2>
            <p className="mt-3">
              To the maximum extent permitted by applicable law, w2ctech shall not be liable for
              any indirect, incidental, special, consequential, or punitive damages, or any loss
              of profits or revenues, whether incurred directly or indirectly, or any loss of data,
              use, goodwill, or other intangible losses resulting from:
            </p>
            <ul className="mt-2 list-disc pl-6 space-y-1">
              <li>Your use or inability to use our services</li>
              <li>Any unauthorized access to or use of our servers</li>
              <li>Any third-party content or conduct on the Website</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">8. Termination</h2>
            <p className="mt-3">
              We reserve the right to terminate or suspend access to our Website and services
              immediately, without prior notice or liability, for any reason whatsoever, including
              breach of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">9. Governing Law and Jurisdiction</h2>
            <p className="mt-3">
              These Terms shall be governed by and construed in accordance with the laws of India.
              Any disputes arising out of or in connection with these Terms shall be subject to
              the exclusive jurisdiction of the courts located in [Your City, State], India.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">10. Changes to Terms</h2>
            <p className="mt-3">
              We reserve the right to modify or replace these Terms at any time. Material changes
              will be notified via the Website. Your continued use of the Website after any changes
              constitutes acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">11. Contact</h2>
            <p className="mt-3">
              For questions about these Terms, please contact:{" "}
              <a href="mailto:info@w2ctech.com" className="text-blue-600 hover:underline">info@w2ctech.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
