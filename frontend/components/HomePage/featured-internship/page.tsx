const internships = [
  {
    title: "Frontend Developer",
    company: "Google",
    location: "Remote",
    stipend: "₹15,000/month",
  },
  {
    title: "Backend Developer",
    company: "Microsoft",
    location: "Bangalore",
    stipend: "₹20,000/month",
  },
  {
    title: "AI Intern",
    company: "OpenAI",
    location: "Remote",
    stipend: "₹25,000/month",
  },
];

export default function FeaturedInternships() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Internships
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {internships.map((job, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold">{job.title}</h3>

              <p className="mt-2 text-slate-600">{job.company}</p>

              <p className="text-sm text-slate-500 mt-2">{job.location}</p>

              <p className="mt-4 font-medium">{job.stipend}</p>

              <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-xl">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
