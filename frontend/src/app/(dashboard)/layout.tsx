"use client"

import "../globals.css"
import { useState } from "react"
import TopBarContent from "../../components/layout/dashboard/TopBarContent"
import SidebarContent from "../../components/layout/dashboard/SidebarContent"
import Main from "../../components/layout/dashboard/Main"



export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  return (
    <html>
      <body className="flex min-h-screen lg:px-24">
            <SidebarContent sidebarOpen={sidebarOpen} onSelect={() => setSidebarOpen(!sidebarOpen)} />
            <div className="flex flex-col flex-1">
              <TopBarContent onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
              <Main>{children}</Main>
            </div>
      </body>
  </html>
  )
} 