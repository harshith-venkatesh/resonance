import {cookies} from "next/headers";
import {SidebarInset, SidebarProvider} from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  

  return (
    <SidebarProvider defaultOpen={true} className="flex min-h-screen h-screen">
      <div className="flex flex-1 min-h-screen">
        <SidebarInset className="min-h-0 min-w-0">
          <nav>Nav Page</nav>
        </SidebarInset>
        <main className="flex-1 flex flex-col min-h-screen min-w-0">{children}</main>
      </div>
    </SidebarProvider>
  );
}