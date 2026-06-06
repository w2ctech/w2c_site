const clients = [
  { name: "Client 1" },
  { name: "Client 2" },
  { name: "Client 3" },
  { name: "Client 4" },
  { name: "Client 5" },
  { name: "Client 6" },
];

export default function Clients() {
  return (
    <section className="bg-gray-50 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">
            Clients We&apos;ve Worked With
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-blue-600 sm:w-20" />
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:mt-12 sm:gap-6 md:grid-cols-3 lg:grid-cols-6">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex h-20 items-center justify-center rounded-xl bg-white px-4 shadow-sm transition-all hover:shadow-md sm:h-24 sm:px-6"
            >
              <span className="text-xs font-semibold text-gray-400 sm:text-sm">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
