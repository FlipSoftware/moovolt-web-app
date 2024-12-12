import * as React from "react";
import {
  AudioWaveform,
  History,
  Bot,
  Command,
  Frame,
  Map,
  PieChart,
  Settings2,
  Home,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavMap } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuButton,
  SidebarRail,
} from "@/components/ui/sidebar";

const MoovoltIcon = () => (
  <SidebarMenuButton size="lg">
    <img src="/moovolt.svg" className="mx-auto p-16" />
  </SidebarMenuButton>
);

const data = {
  user: {
    name: "moovolt",
    email: "exemplo@email.com",
    avatar: "/moovolt.svg",
  },
  teams: [
    {
      name: "MooVolt",
      logo: MoovoltIcon,
      plan: "Empresa",
    },
    {
      name: "MooVolt",
      logo: AudioWaveform,
      plan: "Free",
    },
    {
      name: "MooVolt",
      logo: Command,
      plan: "Premium",
    },
  ],
  navMain: [
    {
      title: "Painel Central",
      url: "/dashboard",
      icon: Home,
      isActive: true,
    },
  ],
  links: [
    {
      name: "Eletropostos",
      url: "map",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <MoovoltIcon />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavMap links={data.links} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
