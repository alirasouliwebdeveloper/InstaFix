import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile & Settings - InstaFix",
};

export default function ProfessionalProfilePage() {
  return (
    <div className="max-w-6xl">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Profile & Settings</h1>
      <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
        <p className="text-gray-500">Your profile settings will appear here.</p>
      </div>
    </div>
  );
}
