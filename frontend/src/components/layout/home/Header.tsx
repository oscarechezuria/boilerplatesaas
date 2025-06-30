"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Link from 'next/link'
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [mounted, setMounted] = useState<boolean>(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  const navigation: { name: string; href: string }[] = [
    { name: "Features", href: "#features" },
  ]

  return (
    <header className="bg-black shadow-md sticky top-0 z-50 w-full rounded-2xl mt-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link className="flex items-center" href={"/"} >
            <span className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              N
            </span>
            <span className="ml-2 text-xl font-bold text-white">NombreApp</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg::flex lg:block space-x-8">
            {mounted && pathname === "/" && navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <nav className="hidden lg:flex items-center space-x-4">
            <Link
              href="/auth"
              className="flex justify-center w-36 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-400 hover:text-black border-1 border-white "             
              >
                Iniciar Sesión
              </Link>
            <Link
            href="/auth"
              className="flex justify-center w-36 bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Empezar
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button className="lg:hidden cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
          </button>
        </section>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white">
            <nav className="flex flex-col space-y-4">
              {mounted && pathname === "/" && navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white border-b border-white pb-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Link
                  href="/auth"
                  className="flex justify-center w-full border-1 border-white text-white font-medium hover:shadow-md px-4 py-2 rounded-lg"  
                  onClick={() => setIsMenuOpen(!isMenuOpen)}           
                  >
                    Iniciar Sesión
                </Link>
                <Link
                  href="/auth"
                  className="flex justify-center w-full bg-white text-black border-white font-medium px-4 py-2 rounded-lg cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Empezar
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
