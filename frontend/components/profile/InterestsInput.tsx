"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function InterestsInput() {
  const [interest, setInterest] = useState("");

  const [interests, setInterests] = useState([
    "Web Development",
    "AI/ML",
    "Cloud Computing",
  ]);

  const addInterest = () => {
    if (interest.trim() && !interests.includes(interest.trim())) {
      setInterests([...interests, interest.trim()]);

      setInterest("");
    }
  };

  const removeInterest = (value: string) => {
    setInterests(interests.filter((item) => item !== value));
  };

  return (
    <div
      className="
   rounded-3xl
   border
   border-slate-800
   bg-slate-950/60
   p-8
   backdrop-blur-xl
   "
    >
      {" "}
      <h2 className="text-2xl font-bold text-white">Interests </h2>
      <p className="mt-2 text-sm text-slate-400">
        Tell us what domains excite you.
      </p>
      {/* Input */}
      <div className="mt-6 flex gap-3">
        <input
          type="text"
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
          placeholder="Add an interest..."
          className="
      flex-1
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
        />

        <button
          onClick={addInterest}
          className="
      rounded-2xl
      bg-gradient-to-r
      from-blue-600
      to-violet-600
      px-6
      py-3
      text-white
      "
        >
          Add
        </button>
      </div>
      {/* Interest Tags */}
      <div className="mt-6 flex flex-wrap gap-3">
        {interests.map((item) => (
          <div
            key={item}
            className="
        flex
        items-center
        gap-2
        rounded-full
        bg-violet-600/20
        px-4
        py-2
        text-sm
        text-violet-400
        "
          >
            {item}

            <button onClick={() => removeInterest(item)}>
              <X size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
