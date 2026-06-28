"use client";

interface FiltersProps {
  selectedDomain: string;
  setSelectedDomain: (value: string) => void;

  selectedLocation: string;
  setSelectedLocation: (value: string) => void;

  selectedDuration: string;
  setSelectedDuration: (value: string) => void;
}

export default function Filters({
  selectedDomain,
  setSelectedDomain,
  selectedLocation,
  setSelectedLocation,
  selectedDuration,
  setSelectedDuration,
}: FiltersProps) {
  const domains = [
    "All",
    "Web Development",
    "AI/ML",
    "Data Science",
    "Cybersecurity",
  ];

  const locations = ["All", "Remote", "Delhi", "Bangalore", "Hyderabad"];

  const durations = ["All", "1 Month", "3 Months", "6 Months"];

  return (
    <div
      className="
   rounded-3xl
   border
   border-slate-800
   bg-slate-950/60
   p-6
   backdrop-blur-xl
   "
    >
      {" "}
      <h2 className="text-xl font-bold text-white">Filters </h2>
      {/* Domain */}
      <div className="mt-6">
        <label className="mb-2 block text-sm text-slate-400">Domain</label>

        <select
          value={selectedDomain}
          onChange={(e) => setSelectedDomain(e.target.value)}
          className="
      w-full
      rounded-2xl
      border
      border-slate-700
      bg-slate-900
      px-4
      py-3
      text-white
      outline-none
      focus:border-blue-500
      "
        >
          {domains.map((domain) => (
            <option key={domain}>{domain}</option>
          ))}
        </select>
      </div>
      {/* Location */}
      <div className="mt-5">
        <label className="mb-2 block text-sm text-slate-400">Location</label>

        <select
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
          className="
      w-full
      rounded-2xl
      border
      border-slate-700
      bg-slate-900
      px-4
      py-3
      text-white
      outline-none
      focus:border-blue-500
      "
        >
          {locations.map((location) => (
            <option key={location}>{location}</option>
          ))}
        </select>
      </div>
      {/* Duration */}
      <div className="mt-5">
        <label className="mb-2 block text-sm text-slate-400">Duration</label>

        <select
          value={selectedDuration}
          onChange={(e) => setSelectedDuration(e.target.value)}
          className="
      w-full
      rounded-2xl
      border
      border-slate-700
      bg-slate-900
      px-4
      py-3
      text-white
      outline-none
      focus:border-blue-500
      "
        >
          {durations.map((duration) => (
            <option key={duration}>{duration}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
