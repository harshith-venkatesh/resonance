import {cookies} from "next/headers";
import {SidebarInset, SidebarProvider} from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/features/dashboard/components/dashboard-sidebar";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
    const cookieStore = await cookies();
    const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";
  return (
    <SidebarProvider defaultOpen={defaultOpen} className="flex min-h-screen h-screen">
      <DashboardSidebar />
      <div className="flex flex-1 min-h-screen">
        <main className="flex-1 flex flex-col min-h-screen min-w-0">{children}</main>
      </div>
    </SidebarProvider>
  );
}