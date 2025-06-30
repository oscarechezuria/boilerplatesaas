import Image from "next/image";
import Link from "next/link";
import { CreditCard, Settings, X, ArrowLeftToLine } from "lucide-react"; 

interface SidebarProps {
  onSelect?: () => void;
}

const sidebarItems = [
  { title: "Primer item", path: "/dashboard", icon: CreditCard },
  { title: "Segundo item", path: "/dashboard/segundoitem", icon: Settings },
  { title: "Tercer item", path: "/dashboard/terceritem", icon: Settings },
  { title: "Cerrar Sesión", path: "/dashboard/sesion", icon: ArrowLeftToLine },
];

export default function Sidebar({ onSelect }: SidebarProps) {
  return (
    <aside className={`${onSelect ? 'w-full' : 'w-80'} min-h-screen bg-white p-4 pt-12 lg:pl-12 lg:pr-4 flex flex-col gap-12`}>

        {/* Menu icon */}
        <div className="flex justify-center">
            <X size={36}  onClick={onSelect} className="lg:hidden text-white bg-black rounded-full p-1 cursor-pointer" />
        </div>
    
        {/* Sidebar Header */}
        <div className=" flex justify-center items-center gap-2">
            <Image src="/logo.png" alt="Logo" width={130} height={130} />
        </div>

        {/* Sidebar Content */}
        <div className="flex flex-col gap-2 pl-12 lg:pl-0">
            {sidebarItems.map(({ title, path, icon: Icon }) => (
              title !== "Cerrar Sesión" ? 
              (
                <Link key={path} href={path} onClick={onSelect} className="flex items-center gap-4 py-2 px-6 text-body text-black hover:text-white hover:bg-black rounded-xl transition-colors">
                <Icon size={24} />
                {title}
                </Link>
              ) : (
                <Link key={path} href={path} onClick={onSelect} className="flex items-center gap-4 py-2 px-6 text-body text-red-500 hover:text-red-500 hover:bg-red-200/80 font-bold rounded-xl transition-colors duration-200 ">
                  <Icon size={24} />
                  {title}
                </Link>
              )
            ) )}  
        </div>
    </aside>
  );
}
