import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Messages - InstaFix",
};

export default function CustomerMessagesPage() {
  return (
    <div className="max-w-6xl">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Messages</h1>
      <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
        <p className="text-gray-500">Your messages will appear here.</p>
      </div>
    </div>
  );
}
