"use client";

import ProfileHeader from "@/components/profile/ProfileHeader";
import SkillsInput from "@/components/profile/SkillsInput";
import InterestsInput from "@/components/profile/InterestsInput";
import ResumeUploader from "@/components/profile/ResumeUploader";
import SocialLinks from "@/components/profile/SocialLinks";

export default function ProfilePage() {
  return (
    <div className="space-y-8">
      <ProfileHeader />

      <div className="grid gap-8 lg:grid-cols-2">
        <SkillsInput />

        <InterestsInput />
      </div>

      <ResumeUploader />

      <SocialLinks />

      <button
        className="
        w-full
        rounded-2xl
        bg-gradient-to-r
        from-blue-600
        to-violet-600
        py-4
        text-lg
        font-semibold
        text-white
        "
      >
        Save Profile
      </button>
    </div>
  );
}
