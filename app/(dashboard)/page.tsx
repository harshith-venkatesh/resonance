import {OrganizationSwitcher, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black flex-col">
      <h1 className="text-3xl font-bold">Dashboard</h1>
     <h2 className="text-xl mt-2">Welcome to Resonance</h2>
      <OrganizationSwitcher />
      <UserButton />
    </div>
  );
}