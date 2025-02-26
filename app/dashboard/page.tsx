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
    { opponent: "New York Knicks", date: "May 26, 2024", ticketsSold: 15900, capacity: 19500 },
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
                    <CardTitle className="text-sm font-medium">Total revenue</CardTitle>
                    <div className="h-8 w-8 rounded-full bg-[#860038]/10 flex items-center justify-center">
                      <TrendingUp className="h-4 w-4 text-[#860038]" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$5.2M</div>
                    <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Tickets sold</CardTitle>
                    <div className="h-8 w-8 rounded-full bg-[#FDBB30]/10 flex items-center justify-center">
                      <Ticket className="h-4 w-4 text-[#FDBB30]" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">42,384</div>
                    <p className="text-xs text-muted-foreground">+15.2% from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Avg. ticket price</CardTitle>
                    <div className="h-8 w-8 rounded-full bg-[#041E42]/10 flex items-center justify-center">
                      <Users className="h-4 w-4 text-[#041E42]" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$122.68</div>
                    <p className="text-xs text-muted-foreground">+4.3% from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Sellout rate</CardTitle>
                    <div className="h-8 w-8 rounded-full bg-[#860038]/10 flex items-center justify-center">
                      <TrendingUp className="h-4 w-4 text-[#860038]" />
                    </div>
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
                      <CardTitle>Revenue by ticket type</CardTitle>
                      <CardDescription>January - June 2024</CardDescription>
                    </div>
                    <Button variant="outline" size="sm">View details</Button>
                  </CardHeader>
                  <CardContent className="flex flex-col min-h-[350px]">
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
                    <div className="mt-auto mb-0">
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-50 hover:text-green-700">
                          <TrendingUp className="mr-1 h-3 w-3" />
                          Trending up by 5.2% this month
                        </Badge>
                        <Badge variant="secondary" className="font-medium">
                          Total revenue: $5.2M
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="col-span-1">
                  <CardHeader className="flex flex-row items-start justify-between">
                    <div>
                      <CardTitle>Ticket distribution</CardTitle>
                      <CardDescription>Current season</CardDescription>
                    </div>
                    <Button variant="outline" size="sm">View details</Button>
                  </CardHeader>
                  <CardContent className="flex flex-col min-h-[350px]">
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
                    <div className="mt-auto mb-0">
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-50 hover:text-green-700">
                          <TrendingUp className="mr-1 h-3 w-3" />
                          Trending up by 3.8% this month
                        </Badge>
                        <Badge variant="secondary" className="font-medium">
                          Total tickets: 42,384
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
                      <CardTitle>Attendance by event</CardTitle>
                      <CardDescription>January - June 2024</CardDescription>
                    </div>
                    <Button variant="outline" size="sm">View details</Button>
                  </CardHeader>
                  <CardContent className="flex flex-col min-h-[350px]">
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
                    <div className="mt-auto mb-0">
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-50 hover:text-green-700">
                          <TrendingUp className="mr-1 h-3 w-3" />
                          Trending up by 4.5% this month
                        </Badge>
                        <Badge variant="secondary" className="font-medium">
                          Total attendance: 91,700
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="col-span-3">
                  <CardHeader className="flex flex-row items-start justify-between">
                    <div>
                      <CardTitle>Upcoming games</CardTitle>
                      <CardDescription>Next 4 home games</CardDescription>
                    </div>
                    <Button variant="outline" size="sm">View all games</Button>
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
                      <CardTitle>Seating chart</CardTitle>
                      <CardDescription>Rocket Mortgage FieldHouse</CardDescription>
                    </div>
                    <Button variant="outline" size="sm">View details</Button>
                  </CardHeader>
                  <CardContent className="flex flex-col min-h-[250px]">
                    <div className="h-[200px] flex items-center justify-center">
                      <div className="relative w-full h-full flex items-center justify-center">
                        {/* Main Arena Container - Oval shape like the actual arena */}
                        <div className="relative w-[280px] h-[180px] border-2 border-gray-300 rounded-[100px] bg-gray-50 overflow-hidden">
                          
                          {/* Court with Cavaliers C logo */}
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100px] h-[60px] bg-[#F5EBD8] border border-gray-400 flex items-center justify-center">
                            <div className="w-12 h-12 bg-[#860038] rounded-sm flex items-center justify-center text-[#FDBB30] font-bold text-xl">C</div>
                          </div>
                          
                          {/* Numbered Sections - Using the actual layout pattern */}
                          {/* Upper Level (200s) - Navy */}
                          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[200px] h-[25px] bg-[#041E42]"></div>
                          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[200px] h-[25px] bg-[#041E42]"></div>
                          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[25px] h-[120px] bg-[#041E42]"></div>
                          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[25px] h-[120px] bg-[#041E42]"></div>
                          
                          {/* Club Level (C sections) - Gold */}
                          <div className="absolute top-[25px] left-1/2 transform -translate-x-1/2 w-[180px] h-[20px] bg-[#FDBB30]"></div>
                          <div className="absolute bottom-[25px] left-1/2 transform -translate-x-1/2 w-[180px] h-[20px] bg-[#FDBB30]"></div>
                          <div className="absolute left-[25px] top-1/2 transform -translate-y-1/2 w-[20px] h-[100px] bg-[#FDBB30]"></div>
                          <div className="absolute right-[25px] top-1/2 transform -translate-y-1/2 w-[20px] h-[100px] bg-[#FDBB30]"></div>
                          
                          {/* Lower Bowl (100s) - Wine */}
                          <div className="absolute top-[45px] left-1/2 transform -translate-x-1/2 w-[160px] h-[30px] bg-[#860038]"></div>
                          <div className="absolute bottom-[45px] left-1/2 transform -translate-x-1/2 w-[160px] h-[30px] bg-[#860038]"></div>
                          <div className="absolute left-[45px] top-1/2 transform -translate-y-1/2 w-[30px] h-[80px] bg-[#860038]"></div>
                          <div className="absolute right-[45px] top-1/2 transform -translate-y-1/2 w-[30px] h-[80px] bg-[#860038]"></div>
                          
                          {/* Section Numbers - Simplified representation */}
                          <div className="absolute top-[5px] left-1/2 transform -translate-x-1/2 text-[8px] font-bold text-white">200s</div>
                          <div className="absolute bottom-[5px] left-1/2 transform -translate-x-1/2 text-[8px] font-bold text-white">200s</div>
                          <div className="absolute left-[5px] top-1/2 transform -translate-y-1/2 text-[8px] font-bold text-white">200s</div>
                          <div className="absolute right-[5px] top-1/2 transform -translate-y-1/2 text-[8px] font-bold text-white">200s</div>
                          
                          <div className="absolute top-[30px] left-1/2 transform -translate-x-1/2 text-[8px] font-bold text-gray-800">C100s</div>
                          <div className="absolute bottom-[30px] left-1/2 transform -translate-x-1/2 text-[8px] font-bold text-gray-800">C100s</div>
                          
                          <div className="absolute top-[55px] left-1/2 transform -translate-x-1/2 text-[8px] font-bold text-white">100s</div>
                          <div className="absolute bottom-[55px] left-1/2 transform -translate-x-1/2 text-[8px] font-bold text-white">100s</div>
                          
                          {/* Special sections */}
                          <div className="absolute top-[85px] right-[75px] text-[7px] font-bold text-white">VIP</div>
                          <div className="absolute top-[85px] left-[75px] text-[7px] font-bold text-white">VIP</div>
                        </div>
                        
                        {/* Legend */}
                        <div className="absolute bottom-0 left-0 right-0 bg-white p-2 rounded-md shadow-sm">
                          <div className="grid grid-cols-3 gap-1 text-xs">
                            <div className="flex items-center">
                              <div className="w-3 h-3 bg-[#860038] mr-1 rounded-sm"></div>
                              <span>Lower Bowl (42%)</span>
                            </div>
                            <div className="flex items-center">
                              <div className="w-3 h-3 bg-[#FDBB30] mr-1 rounded-sm"></div>
                              <span>Club Level (28%)</span>
                            </div>
                            <div className="flex items-center">
                              <div className="w-3 h-3 bg-[#041E42] mr-1 rounded-sm"></div>
                              <span>Upper Level (30%)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-auto mb-0">
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="font-medium">
                          Total capacity: 19,500 seats
                        </Badge>
                        <Badge variant="secondary" className="font-medium">
                          Interactive view in full details
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="flex flex-row items-start justify-between">
                    <div>
                      <CardTitle>Top selling games</CardTitle>
                      <CardDescription>This season</CardDescription>
                    </div>
                    <Button variant="outline" size="sm">View all</Button>
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
                    <CardTitle>Quick actions</CardTitle>
                    <CardDescription>Box office tools</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6 grid gap-2">
                    <Button variant="outline" className="w-full justify-start">
                      <Ticket className="mr-2 h-4 w-4" />
                      Create new ticket package
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Users className="mr-2 h-4 w-4" />
                      Manage group sales
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Download className="mr-2 h-4 w-4" />
                      Export sales report
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <RefreshCw className="mr-2 h-4 w-4" />
                      Update pricing tiers
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Filter className="mr-2 h-4 w-4" />
                      View inventory status
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="sales" className="space-y-3">
              <Card>
                <CardHeader>
                  <CardTitle>Sales dashboard</CardTitle>
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
                  <CardTitle>Attendance dashboard</CardTitle>
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
                  <CardTitle>Inventory dashboard</CardTitle>
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
