'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

interface A11yAnnouncerProps {
  message?: string
  assertive?: boolean
  clearAfter?: number
}

export function A11yAnnouncer({
  message,
  assertive = false,
  clearAfter = 3000,
}: A11yAnnouncerProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        const element = document.getElementById(assertive ? 'a11y-assertive' : 'a11y-polite')
        if (element) {
          element.textContent = ''
        }
      }, clearAfter)

      return () => clearTimeout(timer)
    }
  }, [message, assertive, clearAfter])

  if (!mounted) return null

  return createPortal(
    <>
      <div
        id="a11y-assertive"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        className="sr-only"
      >
        {assertive ? message : null}
      </div>
      <div
        id="a11y-polite"
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        {!assertive ? message : null}
      </div>
    </>,
    document.body
  )
} 