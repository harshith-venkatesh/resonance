"use client";

import {usePathname} from "next/navigation";
import { Sidebar,SidebarContent,SidebarFooter,SidebarInset, useSidebar, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarRail, SidebarTrigger} from "@/components/ui/sidebar";
import Image from "next/image";
import {Link, LucideIcon, User} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Skeleton} from "@/components/ui/skeleton";
import {OrganizationSwitcher, useClerk, UserButton} from "@clerk/nextjs";
import { Home, LayoutGrid, AudioLines, Volume2, Settings, Headphones } from "lucide-react";

interface MenuItem {
  title: string;
  icon: LucideIcon;
  url?: string;
  onClick?: () => void;
}

interface NavSectionProps {
  label ?: string;
  items: MenuItem[];
  pathname: string;
}

function NavSection({ label, items, pathname }: NavSectionProps) {
  return (
    <SidebarGroup>
      {label && <SidebarGroupLabel className="text-[13px] uppercase text-muted-foreground">{label}</SidebarGroupLabel>}
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title} >
              <SidebarMenuButton asChild={!!item.url} onClick={item.onClick} isActive={item.url ? item.url === '/' ? pathname === '/' : pathname.startsWith(item.url) : false} tooltip={item.title}>
              {item.url ? (
                <Link href={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </Link>
              ) : (
                <div className="flex items-center gap-2">
                  <item.icon  />
                 <span> {item.title}</span>
                </div>
              )}
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}

export function DashboardSidebar() {
  const pathname = usePathname();
  const clerk = useClerk();
  const { open } = useSidebar();

  const mainMenuItems: MenuItem[] = [
    { title: "Dashboard", icon: Home, url: "/" },
    { title: "Explore Voices", icon: LayoutGrid, url: "/voices" },
    { title: "Text to Speech", icon: AudioLines, url: "/text-to-speech" },
    { title: "Voice Cloning", icon: Volume2 },
    
  ];

  const othersMenuItems: MenuItem[] = [
    { title: "Settings", icon: Settings, onClick: () => clerk.openOrganizationProfile() },
    { title: "Help and Support", icon: Headphones, url: "mailto:harshith.venkatesh6@gmail.com" },
  ];

  return (
    <Sidebar collapsible="icon">
      <SidebarInset className="min-h-0 min-w-0">
        <SidebarHeader className="flex flex-col gap-4 pt-2">
          <div className="flex items-center gap-2 pl-1 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:pl-0">

            <Image src="/logo.svg" alt="Logo" width={24} height={24} className="rounded-sm" />
            <span className="font-semibold text-lg tracking-lighter text-foreground group-data-[collapsible=icon]:hidden">
              Resonance
            </span>
            <SidebarTrigger className="ml-auto lg:hidden" />
          </div>

        </SidebarHeader>
        <SidebarContent>
          <NavSection items={mainMenuItems} pathname={pathname} />
          <NavSection label="Others" items={othersMenuItems} pathname={pathname} />
        </SidebarContent>
          
        </SidebarInset>
       
    </Sidebar>
  );
}