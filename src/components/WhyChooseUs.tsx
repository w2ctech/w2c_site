export default function WhyChooseUs() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Why Choose Us?
            </h2>
            <div className="mt-4 h-1 w-20 rounded-full bg-blue-600" />
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              We are the right term for your business. We have the expertise and
              knowledge to offer impartial advice and services at an honest
              price.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              With us you&apos;ll feel heard. We listen to our client
              requirements and then select the right solution that fits. We care
              for your business as our own. We take a sincere interest in it and
              genuinely want to help your company reach its potential.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "12+", label: "Years Experience" },
                { value: "40+", label: "Team Members" },
                { value: "500+", label: "Projects Done" },
                { value: "98%", label: "Client Satisfaction" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 p-6 text-center text-white"
                >
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <div className="mt-1 text-sm text-blue-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
