import { cn } from "@/lib/utils"

interface SkeletonProps {
  className?: string
  variant?: 'rectangular' | 'circular' | 'text'
  animation?: 'pulse' | 'wave'
}

export function Skeleton({ 
  className,
  variant = 'rectangular',
  animation = 'pulse'
}: SkeletonProps) {
  return (
    <div
      className={cn(
        "bg-gray-200",
        animation === 'pulse' && "animate-pulse",
        animation === 'wave' && "animate-shimmer",
        variant === 'circular' && "rounded-full",
        variant === 'text' && "rounded h-4 w-3/4",
        variant === 'rectangular' && "rounded",
        className
      )}
    />
  )
}

// Composants préfabriqués pour des cas d'usage communs
export function CardSkeleton() {
  return (
    <div className="space-y-3">
      <Skeleton className="h-40 w-full" />
      <Skeleton variant="text" className="h-4 w-3/4" />
      <Skeleton variant="text" className="h-4 w-1/2" />
    </div>
  )
}

export function ProfileSkeleton() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton variant="circular" className="h-12 w-12" />
      <div className="space-y-2">
        <Skeleton variant="text" className="h-4 w-[150px]" />
        <Skeleton variant="text" className="h-4 w-[100px]" />
      </div>
    </div>
  )
} 