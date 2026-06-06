import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Have a Project in mind?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-200">
          We can help you bring your ideas to life. Let&apos;s talk about what
          we can build and raise together.
        </p>
        <Link
          href="#contact"
          className="mt-8 inline-block rounded-full bg-white px-8 py-3 text-base font-semibold text-blue-700 transition-all hover:bg-blue-50 hover:shadow-lg"
        >
          Connect with us!
        </Link>
      </div>
    </section>
  );
}
