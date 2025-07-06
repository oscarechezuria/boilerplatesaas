import React from 'react'
import { Menu } from "lucide-react"; 
import { CustomDropdown } from '@/src/components/ui/DropDown';




interface LeftContentProps {
  onMenuClick: () => void;
  itemsValue: string[];
}

export default function LeftContent({ onMenuClick, itemsValue }: LeftContentProps) {
  return (
    <div className="flex items-center gap-4">
        <div className="lg:hidden flex justify-center"> {/* Botón hamburguesa solo visible en mobile */}
            <Menu size={36}  onClick={onMenuClick} className="text-secondary h-10 w-10 rounded-full p-1 cursor-pointer" />
        </div>
        <CustomDropdown itemsValue={itemsValue}/>
    </div>
  )
}
