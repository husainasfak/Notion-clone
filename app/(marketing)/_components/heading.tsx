"use client"

import { Button } from "@/components/ui/button"
import { MousePointerClick } from 'lucide-react';
const Heading = () => {
     return (
          <div className="max-w-3xl space-y-4">
               <h1 className="text-3xl sm:text-5xl md:text-6xl">Your Ideas, Documents, & Plans. Unified. Welcome to <span className="underline font-semibold">Notion World</span></h1>
               <h3>Notion World is the connected workspace where <br /> better, faster work happens</h3>
               <Button>
                    Enter Notion World <MousePointerClick className="ml-3" />
               </Button>
          </div>
     )
}
export default Heading