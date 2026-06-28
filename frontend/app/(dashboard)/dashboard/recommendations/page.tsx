"use client";

import RecommendationGrid from "@/components/recommendations/RecommendationGrid";

export default function RecommendationsPage() {
  const recommendations = [
    {
      id: 1,
      title: "Frontend Developer Intern",
      company: "Google",
      score: 95,
      skills: ["React", "Next.js", "Tailwind"],
    },
    {
      id: 2,
      title: "Full Stack Intern",
      company: "Microsoft",
      score: 92,
      skills: ["Node.js", "MongoDB", "Express"],
    },
    {
      id: 3,
      title: "AI Engineer Intern",
      company: "Amazon",
      score: 87,
      skills: ["Python", "TensorFlow", "Machine Learning"],
    },
  ];

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-4xl font-bold text-white">AI Recommendations</h1>

        <p className="mt-2 text-slate-400">
          Personalized internships based on your skills and interests.
        </p>
      </div>

      <RecommendationGrid recommendations={recommendations} />
    </div>
  );
}
