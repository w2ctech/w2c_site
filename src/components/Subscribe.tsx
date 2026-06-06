export default function Subscribe() {
  return (
    <section className="bg-blue-950 py-16">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Subscribe
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-blue-200">
          Stay updated with our latest news and offers.
        </p>
        <form className="mx-auto mt-8 flex max-w-md gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded-full border-0 px-5 py-3 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
