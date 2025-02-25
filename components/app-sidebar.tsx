"use client"

import * as React from "react"
import {
  BarChart3,
  BookOpen,
  CalendarDays,
  CreditCard,
  Headphones,
  LayoutDashboard,
  Map,
  Megaphone,
  Settings2,
  Ticket,
  Users,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// Custom logo components
const CavsLogo = () => (
  <svg viewBox="0 0 150 150" className="h-full w-full">
    <path
      d="M75 10C39.7 10 11 38.7 11 74s28.7 64 64 64 64-28.7 64-64S110.3 10 75 10z"
      fill="#860038" // Wine color
    />
    <path
      d="M75 20c-29.8 0-54 24.2-54 54s24.2 54 54 54 54-24.2 54-54-24.2-54-54-54zm0 98c-24.3 0-44-19.7-44-44s19.7-44 44-44 44 19.7 44 44-19.7 44-44 44z"
      fill="#FDBB30" // Gold color
    />
    <path
      d="M75 40c-18.8 0-34 15.2-34 34s15.2 34 34 34 34-15.2 34-34-15.2-34-34-34zm0 58c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24z"
      fill="#041E42" // Navy color
    />
    <path
      d="M75 50c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zm0 38c-7.7 0-14-6.3-14-14s6.3-14 14-14 14 6.3 14 14-6.3 14-14 14z"
      fill="#FFFFFF" // White
    />
  </svg>
);

const MonstersLogo = () => (
  <svg viewBox="0 0 150 150" className="h-full w-full">
    <path
      d="M75 10C39.7 10 11 38.7 11 74s28.7 64 64 64 64-28.7 64-64S110.3 10 75 10z"
      fill="#041E42" // Navy blue
    />
    <path
      d="M40 50c0 0 10 40 35 40s35-40 35-40c0 0-10 10-35 10S40 50 40 50z"
      fill="#CE0E2D" // Red
    />
    <path
      d="M50 70c0 0 5 20 25 20s25-20 25-20c0 0-5 5-25 5S50 70 50 70z"
      fill="#FFFFFF" // White
    />
  </svg>
);

const RocketArenaLogo = () => (
  <svg viewBox="0 0 150 150" className="h-full w-full">
    <rect x="25" y="25" width="100" height="100" rx="10" fill="#F5F5F5" />
    <path
      d="M75 40c-5 0-15 5-15 15v30c0 0 5 10 15 10s15-10 15-10V55c0-10-10-15-15-15z"
      fill="#FF4500" // Rocket orange/red
    />
    <path
      d="M60 85v10c0 0 5 15 15 15s15-15 15-15V85c0 0-5 5-15 5s-15-5-15-5z"
      fill="#FF4500" // Rocket orange/red
    />
    <circle cx="75" cy="60" r="5" fill="#FFFFFF" />
  </svg>
);

// This is sample data.
const data = {
  user: {
    name: "Admin",
    email: "admin@cavs.com",
    avatar: "/avatars/admin.jpg",
  },
  teams: [
    {
      name: "Cleveland Cavaliers",
      logo: () => (
        <div className="relative h-9 w-9 bg-gray-100 rounded-md px-1 logo-transparent">
          <Image 
            src="/logos/cavaliers.svg" 
            alt="Cleveland Cavaliers logo"
            fill
            className="object-contain p-1"
          />
        </div>
      ),
      plan: "NBA",
    },
    {
      name: "Cleveland Monsters",
      logo: () => (
        <div className="relative h-9 w-9 bg-gray-100 rounded-md px-1 logo-transparent">
          <Image 
            src="/logos/monsters.svg" 
            alt="Cleveland Monsters logo"
            fill
            className="object-contain p-1"
          />
        </div>
      ),
      plan: "AHL",
    },
    {
      name: "Rocket Arena",
      logo: () => (
        <div className="relative h-9 w-9 bg-gray-100 rounded-md px-1 logo-transparent">
          <Image 
            src="/logos/rocket-arena.svg" 
            alt="Rocket Arena logo"
            fill
            className="object-contain p-1"
          />
        </div>
      ),
      plan: "Venue",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: LayoutDashboard,
      isActive: true,
      items: [
        {
          title: "Sales Overview",
          url: "#",
        },
        {
          title: "Analytics",
          url: "#",
        },
        {
          title: "Reports",
          url: "#",
        },
      ],
    },
    {
      title: "Ticket Management",
      url: "#",
      icon: Ticket,
      items: [
        {
          title: "Season Tickets",
          url: "#",
        },
        {
          title: "Group Sales",
          url: "#",
        },
        {
          title: "Single Game",
          url: "#",
        },
      ],
    },
    {
      title: "Customer Service",
      url: "#",
      icon: Headphones,
      items: [
        {
          title: "Customer Database",
          url: "#",
        },
        {
          title: "Support Tickets",
          url: "#",
        },
        {
          title: "Refunds",
          url: "#",
        },
        {
          title: "VIP Management",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "User Management",
          url: "#",
        },
        {
          title: "Pricing Rules",
          url: "#",
        },
        {
          title: "Payment Methods",
          url: "#",
        },
        {
          title: "System Settings",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Upcoming Events",
      url: "#",
      icon: CalendarDays,
    },
    {
      name: "Promotions",
      url: "#",
      icon: Megaphone,
    },
    {
      name: "Seating Charts",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
