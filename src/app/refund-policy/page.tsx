import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "Refund and Cancellation Policy for w2ctech - Terms for refunds on our web design, development, and marketing services.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://w2ctech.com/refund-policy" },
};

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
        <Link href="/" className="text-sm text-blue-600 hover:text-blue-800">
          &larr; Back to Home
        </Link>
        <h1 className="mt-4 text-4xl font-bold text-gray-900">Refund & Cancellation Policy</h1>
        <p className="mt-2 text-sm text-gray-500">Last updated: {new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</p>

        <div className="mt-10 space-y-10 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900">1. Scope</h2>
            <p className="mt-3">
              This Refund and Cancellation Policy applies to all services provided by
              <strong> w2ctech</strong>, a company registered under the Ministry of Corporate Affairs
              (MCA), Government of India. By engaging our services, you agree to the terms outlined
              below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">2. Project Cancellation</h2>
            <p className="mt-3">
              Clients may request cancellation of a project by providing written notice via email
              to <a href="mailto:info@w2ctech.com" className="text-blue-600 hover:underline">info@w2ctech.com</a>. The refund amount depends on the stage of the project at
              the time of cancellation:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>
                <strong>Before work commences:</strong> Full refund of any advance payment,
                minus any non-recoverable third-party costs incurred.
              </li>
              <li>
                <strong>During design/concept phase:</strong> 50% refund of the project fee,
                minus the cost of work completed and third-party expenses.
              </li>
              <li>
                <strong>During development phase:</strong> Refund calculated on a pro-rata
                basis for uncompleted work only.
              </li>
              <li>
                <strong>After final delivery:</strong> No refund shall be applicable.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">3. Refund Eligibility</h2>
            <p className="mt-3">Refunds are eligible under the following conditions:</p>
            <ul className="mt-2 list-disc pl-6 space-y-1">
              <li>We fail to deliver the agreed-upon services within the specified timeline</li>
              <li>The delivered work materially deviates from the agreed-upon specifications</li>
              <li>Duplicate payment was made for the same service</li>
            </ul>
            <p className="mt-3">
              Refunds are <strong>not</strong> eligible in cases of:
            </p>
            <ul className="mt-2 list-disc pl-6 space-y-1">
              <li>Change of mind after project commencement</li>
              <li>Client failure to provide required information, content, or feedback</li>
              <li>Client dissatisfaction with subjective elements (design preferences) after approval</li>
              <li>Services delivered as per agreement and accepted by the client</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">4. Digital Marketing Services</h2>
            <p className="mt-3">
              For ongoing digital marketing services (SEO, PPC, social media management), clients
              may cancel with 30 days&apos; written notice. Refunds for prepaid monthly retainers
              will be calculated on a pro-rata basis for the unserved period.
            </p>
            <p className="mt-3">
              No refunds are provided for completed and delivered campaign work, ad spend already
              utilized on third-party platforms (Google Ads, Facebook Ads, etc.), or completed
              reporting periods.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">5. Refund Processing</h2>
            <ul className="mt-3 list-disc pl-6 space-y-1">
              <li>All refund requests must be submitted in writing to{" "}
                <a href="mailto:info@w2ctech.com" className="text-blue-600 hover:underline">info@w2ctech.com</a>.
              </li>
              <li>Refund requests are reviewed within 7 business days.</li>
              <li>Approved refunds will be processed within 15 business days.</li>
              <li>Refunds will be issued to the original payment method.</li>
              <li>Transaction charges, if any, will be deducted from the refund amount.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">6. Chargebacks</h2>
            <p className="mt-3">
              If a client initiates a chargeback or payment dispute with their bank or payment
              provider without first contacting us to resolve the issue, we reserve the right
              to immediately suspend all services and seek recovery of all costs associated with
              the chargeback, including legal fees.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">7. Non-Refundable Items</h2>
            <p className="mt-3">The following are non-refundable:</p>
            <ul className="mt-2 list-disc pl-6 space-y-1">
              <li>Domain name registration and renewal fees</li>
              <li>Web hosting and server fees</li>
              <li>Third-party software licenses, themes, or plugins purchased on behalf of the client</li>
              <li>SSL certificate costs</li>
              <li>Stock photography or media licensing fees</li>
              <li>Any government fees, taxes, or statutory charges (GST)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">8. Dispute Resolution</h2>
            <p className="mt-3">
              In the event of any dispute regarding refunds or cancellations, both parties agree
              to first attempt resolution through mutual discussion. If unresolved, the dispute
              shall be subject to the exclusive jurisdiction of courts in [Your City, State], India,
              in accordance with Indian law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">9. Contact</h2>
            <p className="mt-3">
              For refund requests or questions about this policy:{" "}
              <a href="mailto:info@w2ctech.com" className="text-blue-600 hover:underline">info@w2ctech.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
