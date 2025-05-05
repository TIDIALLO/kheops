'use client'

export default function Loading() {
  return (
    <div className="w-full h-96 flex items-center justify-center">
      <div className="relative w-20 h-20">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-[#8B0000]/20 rounded-full"></div>
        <div className="absolute top-0 left-0 w-full h-full border-4 border-[#8B0000] rounded-full border-t-transparent animate-spin"></div>
      </div>
    </div>
  )
} 