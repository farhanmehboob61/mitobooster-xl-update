"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Maximize2, X } from "lucide-react"

const image = {
  src: "/images/6pos-protocols.jpeg",
  alt: "6P/OS pressure profiles screen — Quick Charge, Comfort & Balance, Deep Wellness, Vitality Support, Gentle Support, and Exercise Recovery, each with recommended session times and descriptions",
}

export function SixPosLink() {
  const [open, setOpen] = useState(false)

  // Close the popup on Escape for keyboard accessibility.
  useEffect(() => {
    if (!open) return
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [open])

  return (
    <>
      <button
        type="button"
        onMouseEnter={() => setOpen(true)}
        onFocus={() => setOpen(true)}
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        aria-label="Preview the full 6P/OS protocols screen"
      >
        <Maximize2 className="size-4" aria-hidden="true" />
        View the 6P/OS™ protocols screen
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/70 p-4 backdrop-blur-sm sm:p-8"
          onMouseLeave={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Full-size 6P/OS protocols screen"
        >
          <div className="relative max-h-full w-full max-w-4xl overflow-hidden rounded-2xl border border-border bg-background shadow-2xl">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-3 top-3 z-10 inline-flex size-9 items-center justify-center rounded-full bg-foreground/80 text-background transition-colors hover:bg-foreground"
              aria-label="Close 6P/OS screen"
            >
              <X className="size-5" aria-hidden="true" />
            </button>
            <Image
              src={image.src || "/placeholder.svg"}
              alt={`Full-size view — ${image.alt}`}
              width={1600}
              height={1600}
              className="h-auto max-h-[85vh] w-full object-contain"
            />
          </div>
        </div>
      )}
    </>
  )
}
