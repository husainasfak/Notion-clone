"use client"

import useScrollTop from "@/hooks/use-scroll-top"
import { cn } from "@/lib/utils"
import { ModeToggle } from "./themeMode"

const Navbar = () => {
     const scrolled = useScrollTop()
     return <div className={cn("z-50 bg-background dark:bg-[#383838] fixed top:0 flex items-center w-full p-6", scrolled && "border-b shadow-sm")}>
          <h1 className="font-semibold sm:text-2xl">N | Notion World</h1>

          <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
               <p>Login</p>
               <ModeToggle />
          </div>
     </div>
}

export default Navbar