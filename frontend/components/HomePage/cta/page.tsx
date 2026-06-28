import Link from "next/link";

export default function CTA() {
  return (
    <section
      className="
  bg-gradient-to-r
  from-blue-600
  to-violet-600
  py-24
  "
    >
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold text-white">
          Ready to Start Your Career?
        </h2>

        <p className="text-blue-100 mt-4 text-lg">
          Join thousands of students finding internships through AI-powered
          recommendations.
        </p>

        <Link
          href="/signup"
          className="inline-block mt-8 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}
