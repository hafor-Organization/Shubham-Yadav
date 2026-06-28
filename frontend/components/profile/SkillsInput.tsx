"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function SkillsInput() {
  const [skill, setSkill] = useState("");

  const [skills, setSkills] = useState(["React", "Next.js", "Node.js"]);

  const addSkill = () => {
    if (skill.trim() && !skills.includes(skill.trim())) {
      setSkills([...skills, skill.trim()]);
      setSkill("");
    }
  };

  const removeSkill = (value: string) => {
    setSkills(skills.filter((item) => item !== value));
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
      <h2 className="text-2xl font-bold text-white">Skills </h2>
      <p className="mt-2 text-sm text-slate-400">
        Add your technical skills to improve AI recommendations.
      </p>
      {/* Input */}
      <div className="mt-6 flex gap-3">
        <input
          type="text"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
          placeholder="Add a skill..."
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
          onClick={addSkill}
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
      {/* Skill Tags */}
      <div className="mt-6 flex flex-wrap gap-3">
        {skills.map((item) => (
          <div
            key={item}
            className="
        flex
        items-center
        gap-2
        rounded-full
        bg-blue-600/20
        px-4
        py-2
        text-sm
        text-blue-400
        "
          >
            {item}

            <button onClick={() => removeSkill(item)}>
              <X size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
