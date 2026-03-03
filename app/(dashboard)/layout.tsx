import {cookies} from "next/headers";
import {SidebarInset, SidebarProvider} from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  

  return (
    <SidebarProvider>
      <div className="flex h-screen"></div>
        <SidebarInset orgId={"orgId"} />
        <nav>Nav Page</nav>
        <main className="flex-1">{children}</main> 
    </SidebarProvider>
    );
}