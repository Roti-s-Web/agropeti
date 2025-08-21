export default function Stats() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            AgroPeti în cifre
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Rezultatele noastre vorbesc despre calitatea serviciilor și
            încrederea pe care o oferim clienților.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">15+</div>
            <p className="text-gray-600">Ani de experiență</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">5000+</div>
            <p className="text-gray-600">Clienți mulțumiți</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm text-center">
            <div className="text-4xl font-bold text-yellow-600 mb-2">1000+</div>
            <p className="text-gray-600">Produse disponibile</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm text-center">
            <div className="text-4xl font-bold text-red-600 mb-2">42</div>
            <p className="text-gray-600">Județe acoperite</p>
          </div>
        </div>
      </div>
    </section>
  );
}
