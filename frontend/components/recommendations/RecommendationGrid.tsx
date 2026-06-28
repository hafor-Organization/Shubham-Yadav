"use client";

import AIRecommendationCard from "./AIRecommendationCard";

export default function RecommendationGrid({ recommendations }: any) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {recommendations.map((internship: any) => (
        <AIRecommendationCard key={internship.id} internship={internship} />
      ))}
    </div>
  );
}
