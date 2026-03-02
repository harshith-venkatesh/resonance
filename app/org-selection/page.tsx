'use client';

import { useOrganization, useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function OrgSelectionPage() {
  const router = useRouter();
  const { user } = useUser();
  const { organization, setActive } = useOrganization();

  useEffect(() => {
    // If user already has an organization selected, redirect to home
    if (organization) {
      router.push("/");
    }
  }, [organization, router]);

  const handleCreateOrg = async () => {
    // You can implement org creation logic here
    console.log("Create organization");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="rounded-lg border bg-white p-8 shadow-lg dark:border-zinc-800 dark:bg-zinc-950 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4">Select or Create Organization</h1>
        <p className="text-zinc-600 dark:text-zinc-400 mb-6">
          Welcome, {user?.firstName}! You need to select or create an organization to continue.
        </p>
        
        <button
          onClick={handleCreateOrg}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        >
          Create New Organization
        </button>
      </div>
    </div>
  );
}
