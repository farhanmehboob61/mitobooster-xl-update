"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const slides = [
  {
    src: "/images/comfort-seating-cream.jpeg",
    alt: "Premium business-inspired fully adjustable comfort seating in cream — two quilted ivory leather captain's chairs with diamond stitching, integrated headrests, and padded armrests",
    label: "Cream Leather",
  },
  {
    src: "/images/comfort-seating-black-reclined.jpeg",
    alt: "Premium black quilted leather captain's chairs reclined with footrests extended, showing electric reclining and footrest adjustment",
    label: "Black Reclined",
  },
  {
    src: "/images/comfort-seating-gray-reclined.jpeg",
    alt: "Premium light gray quilted leather captain's chairs reclined with footrests extended, showing electric reclining and footrest adjustment",
    label: "Gray Reclined",
  },
]

export function SeatingSlideshow() {
  const [index, setIndex] = useState(0)

  // Auto-advance the slideshow every 6 seconds.
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-background">
      <div className="relative aspect-square">
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

      <div className="absolute bottom-3 left-3 flex items-center gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-6 bg-primary" : "w-2 bg-background/70 hover:bg-background"
            }`}
            aria-label={`Show ${slide.label} seating`}
          />
        ))}
      </div>
    </div>
  )
}
