import React, {useState, useEffect} from 'react'
import Button from '../../../ui/Button'
import ModalOne from '../../../ui/modals/ModalOne'
import { CirclePlus } from 'lucide-react'

export default function RightContent({pathname}: {pathname: string}) {

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [mounted, setMounted] = useState<boolean>(false)
    const openModal: () => void = () => setIsOpen(true)

    useEffect(() => {
      setMounted(true)
    }, [])

  return (
    <div>
        {/* Trigger Button */}
        <div>
          <div className="hidden lg:block">
            <Button
                onClick={openModal}
                className={`justify-between w-full hover:bg-secondary hover:shadow-lg hover:opacity-95 focus:outline-none transition-colors duration-200 ${isOpen && "scale-[0.98] bg-secondary shadow-inner"}`}
                expanded={isOpen}
                haspopup={true}
                icon={<CirclePlus className={`h-6 w-6 text-primary transition-transform duration-200`}
                />}
              >
                <span className="truncate hidden lg:block">Triguer Modal</span>
            </Button>
          </div>
          <CirclePlus onClick={openModal} className={`lg:hidden h-10 w-10 text-secondary transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}/>
        </div>

        {
          mounted && pathname === "/dashboard" &&
          <ModalOne isOpen={isOpen} setIsOpen={setIsOpen} backdrop={false}/>
        }
    </div>
  )
}
