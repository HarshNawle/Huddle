"use client"

import { cn } from "@/lib/utils"
import { InteractiveGridPattern } from "./ui/interactive-grid-pattern"

const  InteractiveGridPatternDemo = () => {
  return (
    <div className="bg-background relative flex h-[740px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border">
      <InteractiveGridPattern
        className={cn(
          "mask-[radial-gradient(400px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
        )}
      />
    </div>
  )
}

export default InteractiveGridPatternDemo
