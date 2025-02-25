"use client"

import * as React from "react"
import { ChevronsUpDown, Plus } from "lucide-react"
import Image from "next/image"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

interface Team {
  name: string
  logo: string
  plan: string
}

interface TeamSwitcherProps {
  teams: Team[]
}

export function TeamSwitcher({ teams }: TeamSwitcherProps) {
  const { isMobile } = useSidebar()
  const [selectedTeam, setSelectedTeam] = React.useState<Team>(teams[0])

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                <div className="bg-gray-100 flex aspect-square size-8 items-center justify-center rounded-lg">
                  <div className="relative flex items-center justify-center h-6 w-6">
                    <Image 
                      src={selectedTeam.logo} 
                      alt={`${selectedTeam.name} logo`}
                      width={24}
                      height={24}
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{selectedTeam.name}</span>
                <span className="truncate text-xs">{selectedTeam.plan}</span>
              </div>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            align="start"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}
          >
            <DropdownMenuLabel className="text-muted-foreground text-xs">
              Teams
            </DropdownMenuLabel>
            {teams.map((team) => (
              <DropdownMenuItem
                key={team.name}
                onClick={() => setSelectedTeam(team)}
                className="gap-2 p-2"
              >
                <div className="flex size-6 items-center justify-center rounded-xs border">
                  <div className="bg-gray-100 flex size-6 items-center justify-center rounded-xs">
                    <div className="relative flex items-center justify-center h-5 w-5">
                      <Image 
                        src={team.logo} 
                        alt={`${team.name} logo`}
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
                {team.name}
                <DropdownMenuShortcut>⌘{teams.indexOf(team) + 1}</DropdownMenuShortcut>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem className="gap-2 p-2">
              <div className="bg-background flex size-6 items-center justify-center rounded-md border">
                <Plus className="size-4" />
              </div>
              <div className="text-muted-foreground font-medium">Add team</div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
