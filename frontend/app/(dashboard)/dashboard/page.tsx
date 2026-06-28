"use client";

import DashboardStats from "@/components/dashboard/DashboardStats";
import ProfileCompletion from "@/components/dashboard/ProfileCompletion";
import RecommendationCard from "@/components/dashboard/RecommendationCard";
import RecentApplications from "@/components/dashboard/RecentApplications";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#050816]">
      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-white">Welcome Back 👋</h1>

          <p className="mt-3 text-slate-400">
            Discover opportunities tailored for your skills.
          </p>
        </div>

        {/* Stats */}
        <DashboardStats />

        {/* Profile Completion */}
        <div className="mt-8">
          <ProfileCompletion />
        </div>

        {/* Recommendations */}
        <div className="mt-12">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-white">
                AI Recommendations
              </h2>

              <p className="mt-2 text-slate-400">
                Personalized internships based on your profile.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <RecommendationCard
              company="Google"
              title="Frontend Developer Intern"
              location="Remote"
              duration="3 Months"
              stipend="₹15,000/month"
            />

            <RecommendationCard
              company="Amazon"
              title="Backend Developer Intern"
              location="Hybrid"
              duration="6 Months"
              stipend="₹25,000/month"
            />

            <RecommendationCard
              company="Microsoft"
              title="Full Stack Developer Intern"
              location="Bangalore"
              duration="6 Months"
              stipend="₹30,000/month"
            />
          </div>
        </div>

        {/* Recent Applications */}
        <div className="mt-12">
          <RecentApplications />
        </div>
      </div>
    </div>
  );
}
