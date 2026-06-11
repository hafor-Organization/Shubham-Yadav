export default function QuickSearch() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Search Opportunities
        </h2>

        <div className="bg-white rounded-2xl shadow-lg p-6 grid md:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Search internships..."
            className="border rounded-lg px-4 py-3"
          />

          <input
            type="text"
            placeholder="Location"
            className="border rounded-lg px-4 py-3"
          />

          <select className="border rounded-lg px-4 py-3">
            <option>Category</option>
            <option>Web Development</option>
            <option>AI/ML</option>
            <option>Data Science</option>
          </select>

          <button className="bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Search
          </button>
        </div>
      </div>
    </section>
  );
}
