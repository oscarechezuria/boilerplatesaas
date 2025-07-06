"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronDown } from "lucide-react"
import Button from "./Button"

interface CustomDropdownProps {
  itemsValue: string[]
  defaultAlias?: string
  className?: string
}

export function CustomDropdown({ itemsValue, defaultAlias}: CustomDropdownProps) {
  const [selectedAlias, setSelectedAlias] = useState<string>(defaultAlias || itemsValue[0] || "Seleccionar alias")
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Cerrar dropdown cuando se hace click fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Cerrar dropdown con tecla Escape
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false)
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => {
      document.removeEventListener("keydown", handleEscape)
    }
  }, [])

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleSelect = (alias: string) => {
    setSelectedAlias(alias)
    setIsOpen(false)
  }

  return (
    itemsValue.length !== 0
      ? 
      (
        <div className={`relative inline-block text-left w-42 lg:w-56`} ref={dropdownRef}>
          {/* Trigger Button */}
          <Button
            onClick={handleToggle}
            className={`justify-between w-full bg-secondary hover:shadow-lg hover:opacity-95 transition-colors duration-300 ${isOpen && "scale-[0.98] shadow-inner"}`}
            expanded={isOpen}
            haspopup={true}
            icon={
              <ChevronDown className={`h-4 w-4 text-primary transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
            }
          >
            <span className="truncate">{selectedAlias}</span>
          </Button>

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute right-0 z-10 mt-4 w-full origin-top-right rounded-xl bg-secondary shadow-lg focus:outline-none">
              <div className="p-2 cursor-pointer" role="menu" aria-orientation="vertical">
                {itemsValue.map((alias, index) => (
                  <Button
                    key={index}
                    onClick={() => handleSelect(alias)}
                    className="justify-between w-full text-primary hover:bg-gray-100 hover:text-gray-900"
                  >
                    <span className="truncate">{alias}</span>
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      )
      : 
      (
        <div
          className={`inline-flex w-56 justify-between items-center
          px-4 py-2 text-body text-primary
          bg-secondary border rounded-xl`}>
          Aqui va el alias
        </div>
      )
  )
}

