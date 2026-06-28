"use client";

import ApplicationCard from "./ApplicationCard";

export default function ApplicationTable({ applications }: any) {
  return (
    <div className="space-y-6">
      {applications.map((application: any) => (
        <ApplicationCard key={application.id} application={application} />
      ))}
    </div>
  );
}
