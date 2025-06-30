"use client";
import { usePathname } from "next/navigation"
import LeftContent from "./topBarContent/LeftContent";
import RightContent from "./topBarContent/RightContent";

type TopbarProps = {
  onMenuClick: () => void;
};

export default function Topbar({ onMenuClick }: TopbarProps) {


  const itemsValue: string[] = ["alias1", "alias2", "alias3"]; // ["alias1", "alias2", "alias3"]
    const pathname = usePathname()

  return (
    <header className="flex justify-between items-center gap-2 py-6 px-4 lg:pt-16 lg:pb-3 lg:px-6">

      {/*Aqui se renderiza el contenido de la izquierda del topbar*/}
      <LeftContent onMenuClick={onMenuClick} itemsValue={itemsValue} />
      
      {/*Aqui se renderiza el contenido de la derecha del topbar*/}
      <RightContent pathname={pathname}/>
      
    </header>
  );
}