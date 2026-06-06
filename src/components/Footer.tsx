import Link from "next/link";

const footerLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About Us" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-xl font-bold text-white">w2ctech</h3>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Let us together build a flourishing business. When connected with
              us, you aren&apos;t growing your business alone.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2">
              {footerLinks.map((link) => (
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
              Contact
            </h4>
            <ul className="mt-4 space-y-2">
              <li className="text-sm text-gray-400">
                1234 N Spring St, Los Angeles, CA 90012
              </li>
              <li>
                <a
                  href="mailto:info@w2ctech.com"
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  info@w2ctech.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-500">
            Copyright &copy; {new Date().getFullYear()} w2ctech.com | Powered by
            w2ctech.com
          </p>
        </div>
      </div>
    </footer>
  );
}
