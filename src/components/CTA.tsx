import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-12 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
          Have a Project in mind?
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-base text-blue-200 sm:mt-4 sm:text-lg">
          We can help you bring your ideas to life. Let&apos;s talk about what
          we can build and raise together.
        </p>
        <Link
          href="#contact"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition-all hover:bg-blue-50 hover:shadow-lg active:scale-95 sm:mt-8 sm:px-8 sm:py-4 sm:text-base min-h-[44px]"
        >
          Connect with us!
        </Link>
      </div>
    </section>
  );
}
