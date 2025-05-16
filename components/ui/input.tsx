import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <div className="relative w-full">
      <input
        type={type}
        className={cn(
            "flex h-10 w-full rounded-md border bg-white px-3 py-2 text-base text-gray-900",
            "border-gray-300 placeholder:text-gray-500",
            "focus:outline-none focus:ring-2 focus:ring-[#8B0000] focus:border-[#8B0000]",
            "disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-red-500 focus:ring-red-500 focus:border-red-500",
          className
        )}
        ref={ref}
        {...props}
      />
        {error && (
          <p className="mt-1 text-sm text-red-600 font-medium">{error}</p>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input } 