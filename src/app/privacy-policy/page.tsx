import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy of w2ctech - How we collect, use, and protect your personal data.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://w2ctech.com/privacy-policy" },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
        <Link href="/" className="text-sm text-blue-600 hover:text-blue-800">
          &larr; Back to Home
        </Link>
        <h1 className="mt-4 text-4xl font-bold text-gray-900">Privacy Policy</h1>
        <p className="mt-2 text-sm text-gray-500">Last updated: {new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</p>

        <div className="mt-10 space-y-10 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900">1. Introduction</h2>
            <p className="mt-3">
              w2ctech (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information
              when you visit our website <strong>w2ctech.com</strong> or use our services.
            </p>
            <p className="mt-3">
              By using our website, you consent to the data practices described in this policy.
              If you do not agree, please discontinue use of our site and services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">2. Information We Collect</h2>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Personal Information</h3>
            <ul className="mt-2 list-disc pl-6 space-y-1">
              <li>Name and contact details (email, phone number) when you fill out forms</li>
              <li>Business information you provide when requesting a quote</li>
              <li>Payment information for availing paid services</li>
            </ul>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Automatically Collected Data</h3>
            <ul className="mt-2 list-disc pl-6 space-y-1">
              <li>IP address, browser type, operating system</li>
              <li>Pages visited, time spent, referring URLs</li>
              <li>Device information and usage patterns</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">3. How We Use Your Information</h2>
            <ul className="mt-3 list-disc pl-6 space-y-1">
              <li>To provide, operate, and maintain our services</li>
              <li>To respond to your inquiries and provide customer support</li>
              <li>To send you quotes, proposals, and service-related communications</li>
              <li>To improve our website, services, and user experience</li>
              <li>To comply with legal obligations under Indian law (IT Act 2000, etc.)</li>
              <li>To send promotional communications (with your consent)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">4. Data Sharing and Disclosure</h2>
            <p className="mt-3">
              We do <strong>not</strong> sell, trade, or rent your personal information to third parties.
              We may share data only in the following circumstances:
            </p>
            <ul className="mt-2 list-disc pl-6 space-y-1">
              <li>With trusted service providers who assist us in operating our website and business</li>
              <li>When required by law, court order, or governmental regulation</li>
              <li>To protect our rights, property, or safety, and that of our users</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">5. Data Security</h2>
            <p className="mt-3">
              We implement appropriate technical and organizational security measures to protect
              your personal data against unauthorized access, alteration, disclosure, or destruction.
              However, no method of transmission over the Internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">6. Cookies</h2>
            <p className="mt-3">
              Our website may use cookies and similar tracking technologies to enhance your browsing
              experience. You can choose to disable cookies through your browser settings, though
              this may affect certain features of the site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">7. Third-Party Links</h2>
            <p className="mt-3">
              Our website may contain links to third-party websites. We are not responsible for
              the privacy practices or content of those sites. We encourage you to review their
              privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">8. Your Rights (India)</h2>
            <p className="mt-3">
              Under Indian data protection laws, you have the right to:
            </p>
            <ul className="mt-2 list-disc pl-6 space-y-1">
              <li>Access and review the personal data we hold about you</li>
              <li>Request correction of inaccurate or incomplete data</li>
              <li>Withdraw consent for data processing</li>
              <li>Request deletion of your personal data, subject to legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">9. Children&apos;s Privacy</h2>
            <p className="mt-3">
              Our services are not directed to individuals under the age of 18. We do not
              knowingly collect personal information from children.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">10. Changes to This Policy</h2>
            <p className="mt-3">
              We reserve the right to update this Privacy Policy at any time. Changes will be
              posted on this page with an updated &quot;Last updated&quot; date. Your continued use
              of our services after changes constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">11. Grievance Officer</h2>
            <p className="mt-3">
              For any privacy-related concerns or complaints, you may contact our Grievance Officer:
            </p>
            <div className="mt-2 rounded-lg bg-gray-50 p-4">
              <p>Grievance Officer, w2ctech</p>
              <p>Email: <a href="mailto:info@w2ctech.com" className="text-blue-600 hover:underline">info@w2ctech.com</a></p>
              <p>Phone: +91-XXXXXXXXXX</p>
              <p>Address: 1234 N Spring St, Los Angeles, CA 90012</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">12. Contact Us</h2>
            <p className="mt-3">
              If you have questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:info@w2ctech.com" className="text-blue-600 hover:underline">info@w2ctech.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
