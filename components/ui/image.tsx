import { useState } from 'react'
import NextImage from 'next/image'
import { cn } from '@/lib/utils'

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
}

export function OptimizedImage({ 
  src, 
  alt, 
  width, 
  height, 
  className,
  priority = false
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className={cn(
      "overflow-hidden relative",
      className
    )}>
      <NextImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={cn(
          "duration-700 ease-in-out",
          isLoading ? "scale-110 blur-lg" : "scale-100 blur-0"
        )}
        onLoadingComplete={() => setIsLoading(false)}
        priority={priority}
        loading={priority ? "eager" : "lazy"}
      />
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
    </div>
  )
} 