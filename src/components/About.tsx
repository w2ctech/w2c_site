export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            About Us
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-blue-600" />
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            We are a team of 40 web experts with over 12 years of experience in
            website building and marketing to help businesses grow online.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
            <h3 className="text-xl font-semibold text-gray-900">Mission.</h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our mission is to empower our clients to use the internet to its
              full potential by providing affordable, effective, custom design
              and marketing solutions.
            </p>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
            <h3 className="text-xl font-semibold text-gray-900">Vision.</h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our vision is to become a global leader in providing the best and
              unique web design and marketing services to improve our
              client&apos;s productivity and business strength.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
