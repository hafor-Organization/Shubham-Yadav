"use client";

import FeaturedCompanies from "@/components/companies/FeaturedCompanies";
import CompanyGrid from "@/components/companies/CompanyGrid";

export default function CompaniesPage() {
  const companies = [
    {
      id: 1,
      name: "Google",
      industry: "Technology",
      location: "Remote",
      openings: 12,
    },
    {
      id: 2,
      name: "Microsoft",
      industry: "Software",
      location: "Bangalore",
      openings: 8,
    },
    {
      id: 3,
      name: "Amazon",
      industry: "E-Commerce",
      location: "Hybrid",
      openings: 15,
    },
    {
      id: 4,
      name: "Infosys",
      industry: "IT Services",
      location: "Pune",
      openings: 10,
    },
    {
      id: 5,
      name: "TCS",
      industry: "Technology",
      location: "Mumbai",
      openings: 6,
    },
    {
      id: 6,
      name: "Accenture",
      industry: "Consulting",
      location: "Delhi",
      openings: 9,
    },
  ];

  return (
    <div className="space-y-10">
      {/* Header */}{" "}
      <div>
        {" "}
        <h1 className="text-4xl font-bold text-white">Companies </h1>
        <p className="mt-2 text-slate-400">
          Explore top companies hiring interns.
        </p>
      </div>
      {/* Featured Companies */}
      <FeaturedCompanies />
      {/* Company Grid */}
      <CompanyGrid companies={companies} />
    </div>
  );
}
