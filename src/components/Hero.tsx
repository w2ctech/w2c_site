import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center justify-center bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          Digital Agency That Thrives on Your Success
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-blue-200 sm:mt-6 sm:text-lg md:text-xl">
          If you are looking for an agency to help you create a remarkable presence online,
          you&apos;ve come to the right place. We can help you take your business to the next level.
        </p>
        <div className="mt-8 sm:mt-10">
          <Link
            href="#services"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-900 transition-all hover:bg-blue-100 hover:shadow-lg active:scale-95 sm:px-8 sm:py-4 sm:text-base min-h-[44px]"
          >
            Find out how!
          </Link>
        </div>
      </div>
    </section>
  );
}
