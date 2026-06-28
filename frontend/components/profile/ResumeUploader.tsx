"use client";

import { useState } from "react";
import { Upload, FileText, X } from "lucide-react";

export default function ResumeUploader() {
  const [resume, setResume] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResume(e.target.files[0]);
    }
  };

  const removeResume = () => {
    setResume(null);
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
      <h2 className="text-2xl font-bold text-white">Resume</h2>

      <p className="mt-2 text-sm text-slate-400">
        Upload your resume to improve AI recommendations.
      </p>

      {!resume ? (
        <label
          className="
          mt-6
          flex
          cursor-pointer
          flex-col
          items-center
          justify-center
          rounded-3xl
          border-2
          border-dashed
          border-slate-700
          p-10
          transition
          hover:border-blue-500
          "
        >
          <Upload size={40} className="text-blue-500" />

          <h3 className="mt-4 text-lg font-semibold text-white">
            Upload Resume
          </h3>

          <p className="mt-2 text-sm text-slate-400">PDF, DOC, DOCX</p>

          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>
      ) : (
        <div
          className="
          mt-6
          flex
          items-center
          justify-between
          rounded-2xl
          border
          border-slate-700
          bg-slate-900
          p-5
          "
        >
          <div className="flex items-center gap-4">
            <FileText size={24} className="text-blue-500" />

            <div>
              <h3 className="font-medium text-white">{resume.name}</h3>

              <p className="text-sm text-slate-400">
                Resume uploaded successfully
              </p>
            </div>
          </div>

          <button
            onClick={removeResume}
            className="
            rounded-full
            bg-red-500/20
            p-2
            text-red-400
            transition
            hover:bg-red-500/30
            "
          >
            <X size={18} />
          </button>
        </div>
      )}

      <p className="mt-5 text-xs text-slate-500">
        Supported formats: PDF, DOC, DOCX
      </p>
    </div>
  );
}
