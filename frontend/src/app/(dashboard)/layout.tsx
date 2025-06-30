"use client"
import Sidebar from "../../components/layout/dashboard/Sidebar"
import TopBar from "../../components/layout/dashboard/Topbar"

import "../globals.css"
import { useState } from "react"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  return (
    <html>
    <body>
      <div className="flex min-h-screen lg:px-24">
        <div className={`fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:relative lg:translate-x-0 lg:flex`}
        >
          <Sidebar onSelect={() => setSidebarOpen(!sidebarOpen)} />
        </div>
          <div className="flex flex-col flex-1">
            <TopBar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
            <main className="flex-1 p-6">
              {children}
            </main>
          </div>
      </div>
      
    </body>
  </html>
  )
}