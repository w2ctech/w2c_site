import Link from "next/link";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "About Us" },
  { href: "/#contact", label: "Contact" },
];

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/refund-policy", label: "Refund Policy" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">w2ctech</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              A digital agency empowering businesses through innovative web
              design, development, and digital marketing solutions.
            </p>
            <div className="space-y-1 text-xs text-gray-500">
              <p>CIN: U72900UP2022PTC168187</p>
              <p>GSTIN: 09AADCW3276E1Z7</p>
              <p>MSME Registered | MCA Compliant</p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Legal
            </h4>
            <ul className="mt-4 space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Registered Office
            </h4>
            <address className="mt-4 space-y-2 text-sm text-gray-400 not-italic">
              <p>w2ctech</p>
              <p>1234 N Spring St,</p>
              <p>Los Angeles, CA 90012</p>
              <p className="mt-3">
                <a
                  href="mailto:info@w2ctech.com"
                  className="transition-colors hover:text-white"
                >
                  info@w2ctech.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+910000000000"
                  className="transition-colors hover:text-white"
                >
                  +91-XXXXXXXXXX
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <div className="space-y-1">
              <p className="text-xs text-gray-500">
                Registered under the Ministry of Corporate Affairs (MCA),
                Government of India. All statutory and legal rights reserved.
              </p>
              <p className="text-xs text-gray-500">
                Copyright &copy; {currentYear} w2ctech.com. All Rights Reserved.
              </p>
            </div>
            <div className="text-xs text-gray-600">
              <p>Made with &hearts; in India</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
