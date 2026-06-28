"use client";

import InternshipCard from "./InternshipCard";

interface Internship {
  id: number;
  company: string;
  title: string;
  domain: string;
  location: string;
  duration: string;
  stipend: string;
}

interface InternshipGridProps {
  internships: Internship[];
}

export default function InternshipGrid({ internships }: InternshipGridProps) {
  if (internships.length === 0) {
    return (
      <div
        className="
     flex
     h-72
     items-center
     justify-center
     rounded-3xl
     border
     border-slate-800
     bg-slate-950/60
     text-slate-400
     backdrop-blur-xl
     "
      >
        No internships found.{" "}
      </div>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {internships.map((internship) => (
        <InternshipCard
          key={internship.id}
          company={internship.company}
          title={internship.title}
          domain={internship.domain}
          location={internship.location}
          duration={internship.duration}
          stipend={internship.stipend}
        />
      ))}{" "}
    </div>
  );
}
