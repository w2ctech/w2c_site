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
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Clients We&apos;ve Worked With
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-blue-600" />
        </div>
        <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex h-24 items-center justify-center rounded-xl bg-white px-6 shadow-sm transition-all hover:shadow-md"
            >
              <span className="text-sm font-semibold text-gray-400">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
