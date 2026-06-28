"use client";

import CompanyCard from "./CompanyCard";

export default function CompanyGrid({ companies }: any) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {companies.map((company: any) => (
        <CompanyCard key={company.id} company={company} />
      ))}
    </div>
  );
}
