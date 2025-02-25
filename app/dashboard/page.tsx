/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Bar, 
  BarChart, 
  Cell, 
  Line, 
  LineChart, 
  Pie, 
  PieChart,
  ResponsiveContainer,
  Tooltip
} from "recharts"
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent
} from "@/components/ui/chart"
import { CartesianGrid, XAxis, YAxis } from "recharts"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, Filter, RefreshCw, Ticket, TrendingUp, Users } from "lucide-react"

export default function Page() {
  // Chart config with Cavaliers colors
  const chartConfig = {
    "Cavaliers": {
      label: "Cavaliers",
      color: "#860038" // Wine
    },
    "Monsters": {
      label: "Monsters",
      color: "#041E42" // Navy
    },
    "Other": {
      label: "Other",
      color: "#FDBB30" // Gold
    },
    "Season Tickets": {
      label: "Season Tickets",
      color: "#860038" // Wine
    },
    "Group Sales": {
      label: "Group Sales",
      color: "#FDBB30" // Gold
    },
    "Single Game": {
      label: "Single Game",
      color: "#041E42" // Navy
    },
    "Lower Bowl": {
      label: "Lower Bowl",
      color: "#860038" // Wine
    },
    "Club Level": {
      label: "Club Level",
      color: "#FDBB30" // Gold
    },
    "Upper Bowl": {
      label: "Upper Bowl",
      color: "#041E42" // Navy
    }
  }

  // Sample data for charts
  const barChartData = [
    {
      name: "Jan",
      Cavaliers: 12000,
      Monsters: 8500,
      Other: 3200,
    },
    {
      name: "Feb",
      Cavaliers: 14500,
      Monsters: 7800,
      Other: 4100,
    },
    {
      name: "Mar",
      Cavaliers: 15800,
      Monsters: 9200,
      Other: 5300,
    },
    {
      name: "Apr",
      Cavaliers: 18200,
      Monsters: 10500,
      Other: 6100,
    },
    {
      name: "May",
      Cavaliers: 16500,
      Monsters: 8900,
      Other: 4800,
    },
    {
      name: "Jun",
      Cavaliers: 14200,
      Monsters: 7500,
      Other: 3900,
    },
  ]

  const lineChartData = [
    {
      name: "Jan",
      "Season Tickets": 850000,
      "Group Sales": 450000,
      "Single Game": 320000,
    },
    {
      name: "Feb",
      "Season Tickets": 880000,
      "Group Sales": 520000,
      "Single Game": 390000,
    },
    {
      name: "Mar",
      "Season Tickets": 900000,
      "Group Sales": 580000,
      "Single Game": 430000,
    },
    {
      name: "Apr",
      "Season Tickets": 950000,
      "Group Sales": 620000,
      "Single Game": 510000,
    },
    {
      name: "May",
      "Season Tickets": 920000,
      "Group Sales": 550000,
      "Single Game": 480000,
    },
    {
      name: "Jun",
      "Season Tickets": 890000,
      "Group Sales": 490000,
      "Single Game": 420000,
    },
  ]

  const pieChartData = [
    { name: "Lower Bowl", value: 42 },
    { name: "Club Level", value: 28 },
    { name: "Upper Bowl", value: 30 },
  ]

  const donutChartData = [
    { name: "Season Tickets", value: 65 },
    { name: "Group Sales", value: 15 },
    { name: "Single Game", value: 20 },
  ]

  // Upcoming games data
  const upcomingGames = [
    { opponent: "Boston Celtics", date: "May 15, 2024", ticketsSold: 18250, capacity: 19500 },
    { opponent: "Miami Heat", date: "May 18, 2024", ticketsSold: 17800, capacity: 19500 },
    { opponent: "Chicago Bulls", date: "May 22, 2024", ticketsSold: 16500, capacity: 19500 },
  ]

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="font-roobert">
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Cleveland Cavaliers
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Box Office</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="ml-auto flex items-center gap-2 px-4">
            <Button variant="ghost" size="icon">
              <RefreshCw className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Download className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Filter className="h-5 w-5" />
            </Button>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-3 p-4 pt-0 pb-1">
          
          <Tabs defaultValue="overview" className="space-y-3">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="sales">Sales</TabsTrigger>
              <TabsTrigger value="attendance">Attendance</TabsTrigger>
              <TabsTrigger value="inventory">Inventory</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-3">
              <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                    <TrendingUp className="h-4 w-4" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$5.2M</div>
                    <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Tickets Sold</CardTitle>
                    <Ticket className="h-4 w-4" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">42,384</div>
                    <p className="text-xs text-muted-foreground">+15.2% from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Avg. Ticket Price</CardTitle>
                    <Users className="h-4 w-4" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$122.68</div>
                    <p className="text-xs text-muted-foreground">+4.3% from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Sellout Rate</CardTitle>
                    <TrendingUp className="h-4 w-4" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">92%</div>
                    <p className="text-xs text-muted-foreground">+2.5% from last month</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="grid gap-3 md:grid-cols-2">
                <Card className="col-span-1">
                  <CardHeader className="flex flex-row items-start justify-between">
                    <div>
                      <CardTitle>Revenue by Ticket Type</CardTitle>
                      <CardDescription>January - June 2024</CardDescription>
                    </div>
                    <Button variant="outline" size="sm">View Details</Button>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={lineChartData}>
                          <CartesianGrid 
                            strokeDasharray="10 10" 
                            horizontal={true} 
                            vertical={false} 
                            stroke="#e5e5e5" 
                          />
                          <XAxis 
                            dataKey="name" 
                            tickLine={false} 
                            axisLine={false}
                            tick={{ fill: '#888888', fontSize: 12 }}
                            dy={10}
                          />
                          <YAxis 
                            tickLine={false}
                            axisLine={false}
                            tickFormatter={(value) => `$${(value/1000).toFixed(0)}k`}
                            tick={{ fill: '#888888', fontSize: 12 }}
                            dx={-10}
                          />
                          <Tooltip
                            content={({ active, payload }) => {
                              if (active && payload && payload.length) {
                                return (
                                  <div className="rounded-lg border bg-background p-2 shadow-sm">
                                    <div className="grid grid-cols-2 gap-2">
                                      {payload.map((entry) => (
                                        <div key={entry.dataKey} className="flex flex-col">
                                          <span className="text-[0.70rem] uppercase text-muted-foreground">
                                            {entry.dataKey}
                                          </span>
                                          <span className="font-bold text-xs" style={{ color: entry.color }}>
                                            ${Number(entry.value).toLocaleString()}
                                          </span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )
                              }
                              return null
                            }}
                            cursor={{ stroke: '#f0f0f0', strokeDasharray: '5 5' }}
                          />
                          <Line 
                            type="monotone" 
                            dataKey="Season Tickets" 
                            stroke="#860038" 
                            strokeWidth={2}
                            dot={false}
                            activeDot={{ r: 6, strokeWidth: 0 }}
                          />
                          <Line 
                            type="monotone" 
                            dataKey="Group Sales" 
                            stroke="#FDBB30" 
                            strokeWidth={2}
                            dot={false}
                            activeDot={{ r: 6, strokeWidth: 0 }}
                          />
                          <Line 
                            type="monotone" 
                            dataKey="Single Game" 
                            stroke="#041E42" 
                            strokeWidth={2}
                            dot={false}
                            activeDot={{ r: 6, strokeWidth: 0 }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="mt-4 space-y-1">
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-50 hover:text-green-700">
                          <TrendingUp className="mr-1 h-3 w-3" />
                          Trending up by 5.2% this month
                        </Badge>
                        <Badge variant="secondary" className="font-medium">
                          Total Revenue: $5.2M
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="col-span-1">
                  <CardHeader className="flex flex-row items-start justify-between">
                    <div>
                      <CardTitle>Ticket Distribution</CardTitle>
                      <CardDescription>Current Season</CardDescription>
                    </div>
                    <Button variant="outline" size="sm">View Details</Button>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={donutChartData}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={2}
                            stroke="#ffffff"
                            strokeWidth={2}
                          >
                            {donutChartData.map((entry, index) => (
                              <Cell 
                                key={`cell-${index}`} 
                                fill={index === 0 ? "#860038" : index === 1 ? "#FDBB30" : "#041E42"} 
                              />
                            ))}
                          </Pie>
                          <Tooltip
                            content={({ active, payload }) => {
                              if (active && payload && payload.length) {
                                return (
                                  <div className="rounded-lg border bg-background p-2 shadow-sm">
                                    <div className="flex flex-col">
                                      <span className="text-[0.70rem] uppercase text-muted-foreground">
                                        {payload[0].name}
                                      </span>
                                      <span className="font-bold text-xs" style={{ color: payload[0].color }}>
                                        {payload[0].value}%
                                      </span>
                                    </div>
                                  </div>
                                )
                              }
                              return null
                            }}
                          />
                          <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle">
                            <tspan x="50%" dy="-5" className="text-xs font-medium">Total</tspan>
                            <tspan x="50%" dy="20" className="text-xl font-bold">42,384</tspan>
                          </text>
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="mt-4 space-y-1">
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-50 hover:text-green-700">
                          <TrendingUp className="mr-1 h-3 w-3" />
                          Trending up by 3.8% this month
                        </Badge>
                        <Badge variant="secondary" className="font-medium">
                          Total Tickets: 42,384
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="grid gap-3 md:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader className="flex flex-row items-start justify-between">
                    <div>
                      <CardTitle>Attendance by Event</CardTitle>
                      <CardDescription>January - June 2024</CardDescription>
                    </div>
                    <Button variant="outline" size="sm">View Details</Button>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={barChartData}>
                          <CartesianGrid 
                            strokeDasharray="10 10" 
                            horizontal={true} 
                            vertical={false} 
                            stroke="#e5e5e5" 
                          />
                          <XAxis 
                            dataKey="name" 
                            tickLine={false} 
                            axisLine={false}
                            tick={{ fill: '#888888', fontSize: 12 }}
                            dy={10}
                          />
                          <YAxis 
                            tickLine={false}
                            axisLine={false}
                            tickFormatter={(value) => value.toLocaleString()}
                            tick={{ fill: '#888888', fontSize: 12 }}
                            dx={-10}
                          />
                          <Tooltip
                            content={({ active, payload }) => {
                              if (active && payload && payload.length) {
                                return (
                                  <div className="rounded-lg border bg-background p-2 shadow-sm">
                                    <div className="grid grid-cols-1 gap-2">
                                      {payload.map((entry) => (
                                        <div key={entry.dataKey} className="flex flex-col">
                                          <span className="text-[0.70rem] uppercase text-muted-foreground">
                                            {entry.dataKey}
                                          </span>
                                          <span className="font-bold text-xs" style={{ color: entry.color }}>
                                            {Number(entry.value).toLocaleString()}
                                          </span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )
                              }
                              return null
                            }}
                            cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }}
                          />
                          <Bar 
                            dataKey="Cavaliers" 
                            fill="#860038" 
                            radius={[4, 4, 0, 0]}
                            barSize={20}
                            maxBarSize={20}
                          />
                          <Bar 
                            dataKey="Monsters" 
                            fill="#041E42" 
                            radius={[4, 4, 0, 0]}
                            barSize={20}
                            maxBarSize={20}
                          />
                          <Bar 
                            dataKey="Other" 
                            fill="#FDBB30" 
                            radius={[4, 4, 0, 0]}
                            barSize={20}
                            maxBarSize={20}
                          />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="mt-4 space-y-1">
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-50 hover:text-green-700">
                          <TrendingUp className="mr-1 h-3 w-3" />
                          Trending up by 4.5% this month
                        </Badge>
                        <Badge variant="secondary" className="font-medium">
                          Total Attendance: 91,700
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="col-span-3">
                  <CardHeader className="flex flex-row items-start justify-between">
                    <div>
                      <CardTitle>Upcoming Games</CardTitle>
                      <CardDescription>Next 3 Home Games</CardDescription>
                    </div>
                    <Button variant="outline" size="sm">View All Games</Button>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="divide-y">
                      {upcomingGames.map((game, index) => (
                        <div key={index} className="p-6 flex justify-between items-center">
                          <div>
                            <h4 className="font-medium">vs. {game.opponent}</h4>
                            <p className="text-sm text-muted-foreground">{game.date}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium">
                              {Math.round((game.ticketsSold / game.capacity) * 100)}% Sold
                            </div>
                            <div className="w-32 h-2 bg-gray-200 rounded-full mt-1">
                              <div 
                                className="h-full rounded-full" 
                                style={{ 
                                  width: `${(game.ticketsSold / game.capacity) * 100}%`,
                                  backgroundColor: "#860038" 
                                }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="grid gap-3 md:grid-cols-3">
                <Card>
                  <CardHeader className="flex flex-row items-start justify-between">
                    <div>
                      <CardTitle>Seating Distribution</CardTitle>
                      <CardDescription>By Arena Section</CardDescription>
                    </div>
                    <Button variant="outline" size="sm">View Details</Button>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[200px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={pieChartData}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            paddingAngle={2}
                            stroke="#ffffff"
                            strokeWidth={2}
                          >
                            {pieChartData.map((entry, index) => (
                              <Cell 
                                key={`cell-${index}`} 
                                fill={index === 0 ? "#860038" : index === 1 ? "#FDBB30" : "#041E42"} 
                              />
                            ))}
                          </Pie>
                          <Tooltip
                            content={({ active, payload }) => {
                              if (active && payload && payload.length) {
                                return (
                                  <div className="rounded-lg border bg-background p-2 shadow-sm">
                                    <div className="flex flex-col">
                                      <span className="text-[0.70rem] uppercase text-muted-foreground">
                                        {payload[0].name}
                                      </span>
                                      <span className="font-bold text-xs" style={{ color: payload[0].color }}>
                                        {payload[0].value}%
                                      </span>
                                    </div>
                                  </div>
                                )
                              }
                              return null
                            }}
                          />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="mt-4 space-y-1">
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="font-medium">
                          Showing distribution across all sections
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="flex flex-row items-start justify-between">
                    <div>
                      <CardTitle>Top Selling Games</CardTitle>
                      <CardDescription>This Season</CardDescription>
                    </div>
                    <Button variant="outline" size="sm">View All</Button>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="divide-y">
                      <div className="p-6 flex justify-between items-center">
                        <span>vs. Lakers</span>
                        <Badge>Sold Out</Badge>
                      </div>
                      <div className="p-6 flex justify-between items-center">
                        <span>vs. Warriors</span>
                        <Badge>Sold Out</Badge>
                      </div>
                      <div className="p-6 flex justify-between items-center">
                        <span>vs. Bucks</span>
                        <Badge variant="secondary">98%</Badge>
                      </div>
                      <div className="p-6 flex justify-between items-center">
                        <span>vs. Celtics</span>
                        <Badge variant="secondary">95%</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                    <CardDescription>Box Office Tools</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6 grid gap-2">
                    <Button className="w-full justify-start">
                      <Ticket className="mr-2 h-4 w-4" />
                      Create New Ticket Package
                    </Button>
                    <Button className="w-full justify-start" variant="secondary">
                      <Users className="mr-2 h-4 w-4" />
                      Manage Group Sales
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <Download className="mr-2 h-4 w-4" />
                      Export Sales Report
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="sales" className="space-y-3">
              <Card>
                <CardHeader>
                  <CardTitle>Sales Dashboard</CardTitle>
                  <CardDescription>Detailed sales analytics coming soon</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>This tab will contain detailed sales analytics.</p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="attendance" className="space-y-3">
              <Card>
                <CardHeader>
                  <CardTitle>Attendance Dashboard</CardTitle>
                  <CardDescription>Detailed attendance analytics coming soon</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>This tab will contain detailed attendance analytics.</p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="inventory" className="space-y-3">
              <Card>
                <CardHeader>
                  <CardTitle>Inventory Dashboard</CardTitle>
                  <CardDescription>Detailed inventory analytics coming soon</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>This tab will contain detailed inventory analytics.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
