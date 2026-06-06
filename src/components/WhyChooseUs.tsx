export default function WhyChooseUs() {
  return (
    <section className="py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">
              Why Choose Us?
            </h2>
            <div className="mt-4 h-1 w-16 rounded-full bg-blue-600 sm:w-20" />
            <p className="mt-4 text-base leading-relaxed text-gray-600 sm:mt-6 sm:text-lg">
              We are the right term for your business. We have the expertise and
              knowledge to offer impartial advice and services at an honest price.
            </p>
            <p className="mt-3 text-base leading-relaxed text-gray-600 sm:mt-4 sm:text-lg">
              With us you&apos;ll feel heard. We listen to our client requirements
              and then select the right solution that fits. We care for your business
              as our own. We take a sincere interest in it and genuinely want to help
              your company reach its potential.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="grid w-full max-w-sm grid-cols-2 gap-3 sm:gap-4">
              {[
                { value: "12+", label: "Years Experience" },
                { value: "40+", label: "Team Members" },
                { value: "500+", label: "Projects Done" },
                { value: "98%", label: "Client Satisfaction" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 p-4 text-center text-white sm:p-6"
                >
                  <div className="text-2xl font-bold sm:text-3xl">{stat.value}</div>
                  <div className="mt-1 text-xs text-blue-200 sm:text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
