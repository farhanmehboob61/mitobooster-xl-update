"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ZoomIn, X } from "lucide-react"

const slides = [
  {
    src: "/images/external-control-panel.jpeg",
    alt: "External hyperbaric control panel touchscreen with handset — showing session time, temperature, oxygen, humidity and pressure readouts, ATA pressure selection, and 6P/OS protocol controls",
    label: "External Control Panel",
  },
  {
    src: "/images/6pos-protocols.jpeg",
    alt: "6P/OS pressure profiles infographic — Quick Charge, Comfort & Balance, Deep Wellness, Vitality Support, Gentle Support, and Exercise Recovery, each with recommended session times and descriptions",
    label: "6P/OS™ Pressure Profiles",
  },
]

export function ControlPanelViewer() {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  // Auto-advance the slideshow every 5 seconds. Pause while enlarged.
  useEffect(() => {
    if (open) return
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [open])

  const active = slides[index]

  return (
    <>
      <div className="group relative overflow-hidden rounded-xl border border-border bg-background">
        <div className="relative aspect-[1024/900]">
          {slides.map((slide, i) => (
            <Image
              key={slide.src}
              src={slide.src || "/placeholder.svg"}
              alt={slide.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className={`object-cover transition-opacity duration-700 ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onMouseEnter={() => setOpen(true)}
          onFocus={() => setOpen(true)}
          onClick={() => setOpen(true)}
          className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-foreground/80 px-3 py-1.5 text-xs font-medium text-background shadow-md transition-colors hover:bg-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label={`Enlarge ${active.label} image`}
        >
          <ZoomIn className="size-3.5" aria-hidden="true" />
          Enlarge
        </button>

        <div className="absolute bottom-3 left-3 flex items-center gap-2" aria-hidden="true">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-primary" : "w-2 bg-background/70 hover:bg-background"
              }`}
              aria-label={`Show ${slide.label}`}
            />
          ))}
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/70 p-4 backdrop-blur-sm sm:p-8"
          onMouseLeave={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`Enlarged view of ${active.label}`}
        >
          <div className="relative max-h-full w-full max-w-3xl overflow-hidden rounded-2xl border border-border bg-background shadow-2xl">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-3 top-3 z-10 inline-flex size-9 items-center justify-center rounded-full bg-foreground/80 text-background transition-colors hover:bg-foreground"
              aria-label="Close enlarged view"
            >
              <X className="size-5" aria-hidden="true" />
            </button>
            <Image
              src={active.src || "/placeholder.svg"}
              alt={`Enlarged view — ${active.alt}`}
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
