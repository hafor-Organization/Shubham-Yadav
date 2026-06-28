"use client";

import { useMemo, useState } from "react";

import SearchBar from "@/components/internships/InternshipSearch";
import Filters from "@/components/internships/InternshipFilters";
import InternshipGrid from "@/components/internships/InternshipGrid";

export default function InternshipsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const [selectedDomain, setSelectedDomain] = useState("All");

  const [selectedLocation, setSelectedLocation] = useState("All");

  const [selectedDuration, setSelectedDuration] = useState("All");

  const internships = [
    {
      id: 1,
      company: "Google",
      title: "Frontend Developer Intern",
      domain: "Web Development",
      location: "Remote",
      duration: "3 Months",
      stipend: "₹15,000/month",
    },
    {
      id: 2,
      company: "Amazon",
      title: "Backend Developer Intern",
      domain: "Web Development",
      location: "Hybrid",
      duration: "6 Months",
      stipend: "₹25,000/month",
    },
    {
      id: 3,
      company: "Microsoft",
      title: "AI Engineer Intern",
      domain: "AI/ML",
      location: "Bangalore",
      duration: "6 Months",
      stipend: "₹30,000/month",
    },
    {
      id: 4,
      company: "Infosys",
      title: "Data Science Intern",
      domain: "Data Science",
      location: "Delhi",
      duration: "3 Months",
      stipend: "₹20,000/month",
    },
  ];

  const filteredInternships = useMemo(() => {
    return internships.filter((internship) => {
      const matchesSearch =
        internship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        internship.company.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesDomain =
        selectedDomain === "All" || internship.domain === selectedDomain;

      const matchesLocation =
        selectedLocation === "All" || internship.location === selectedLocation;

      const matchesDuration =
        selectedDuration === "All" || internship.duration === selectedDuration;

      return (
        matchesSearch && matchesDomain && matchesLocation && matchesDuration
      );
    });
  }, [searchTerm, selectedDomain, selectedLocation, selectedDuration]);

  return (
    <div className="min-h-screen bg-[#050816]">
      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-white">Browse Internships</h1>

          <p className="mt-3 text-slate-400">
            Discover opportunities tailored to your skills and interests.
          </p>
        </div>

        {/* Search */}
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        {/* Layout */}
        <div className="mt-8 grid gap-8 lg:grid-cols-[300px_1fr]">
          {/* Sidebar */}
          <Filters
            selectedDomain={selectedDomain}
            setSelectedDomain={setSelectedDomain}
            selectedLocation={selectedLocation}
            setSelectedLocation={setSelectedLocation}
            selectedDuration={selectedDuration}
            setSelectedDuration={setSelectedDuration}
          />

          {/* Cards */}
          <InternshipGrid internships={filteredInternships} />
        </div>
      </div>
    </div>
  );
}
