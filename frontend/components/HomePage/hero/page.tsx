import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
              Find Internships That Match Your Skills
            </h1>

            <p className="mt-6 text-lg text-slate-600">
              Discover opportunities tailored to your interests and career goals
              with AI-powered recommendations.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                href="/internships"
                className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700"
              >
                Explore Internships
              </Link>

              <Link
                href="/signup"
                className="border border-slate-300 px-6 py-3 rounded-xl hover:bg-white"
              >
                Get Started
              </Link>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-3xl shadow-xl p-6">
              <h3 className="font-semibold text-lg">Recommended For You</h3>

              <div className="space-y-4 mt-6">
                <div className="p-4 rounded-xl bg-slate-50">
                  Frontend Developer Intern • 95% Match
                </div>

                <div className="p-4 rounded-xl bg-slate-50">
                  React Developer Intern • 90% Match
                </div>

                <div className="p-4 rounded-xl bg-slate-50">
                  UI Developer Intern • 87% Match
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
