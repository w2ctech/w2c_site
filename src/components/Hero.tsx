import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 pt-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Digital Agency That Thrives on Your Success
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-blue-200">
          If you are looking for an agency to help you create a remarkable presence online,
          you&apos;ve come to the right place. We can help you take your business to the next level.
        </p>
        <div className="mt-10">
          <Link
            href="#services"
            className="inline-block rounded-full bg-white px-8 py-3 text-base font-semibold text-blue-900 transition-all hover:bg-blue-100 hover:shadow-lg"
          >
            Find out how!
          </Link>
        </div>
      </div>
    </section>
  );
}
