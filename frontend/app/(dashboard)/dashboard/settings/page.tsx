"use client";

import AccountSettings from "@/components/settings/AccountSettings";
import ChangePassword from "@/components/settings/ChangePassword";
import NotificationSettings from "@/components/settings/NotificationSettings";
import AppearanceSettings from "@/components/settings/AppearanceSettings";
import DangerZone from "@/components/settings/DangerZone";

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-white">Settings</h1>

        <p className="mt-2 text-slate-400">
          Manage your account and preferences.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <AccountSettings />

        <ChangePassword />

        <NotificationSettings />

        <AppearanceSettings />
      </div>

      <DangerZone />
    </div>
  );
}
