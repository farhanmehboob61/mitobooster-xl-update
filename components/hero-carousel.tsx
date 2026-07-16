"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

type Slide = {
  src: string
  alt: string
  caption: string
}

const slides: Slide[] = [
  {
    src: "/images/vital-sphere-360-black.jpg",
    alt: "Vital Sphere 360 matte black upright walk-in hard-shell hyperbaric oxygen chamber with illuminated interior and external touchscreen panel",
    caption: "Vital Sphere 360 in Matte Black",
  },
  {
    src: "/images/vital-sphere-360-glossy-black.jpg",
    alt: "Vital Sphere 360 glossy black upright walk-in hard-shell hyperbaric oxygen chamber with illuminated interior and external touchscreen panel",
    caption: "Vital Sphere 360 in Glossy Black",
  },
  {
    src: "/images/vital-sphere-360-deep-blue.jpg",
    alt: "Vital Sphere 360 deep blue upright walk-in hard-shell hyperbaric oxygen chamber with illuminated interior and external touchscreen panel",
    caption: "Vital Sphere 360 in Deep Blue",
  },
  {
    src: "/images/vital-sphere-360-diagonal.jpg",
    alt: "Vital Sphere 360 white upright walk-in hard-shell hyperbaric oxygen chamber on caster wheels with polycarbonate window and touchscreen control panel",
    caption: "Vital Sphere 360 hard shell chamber",
  },
  {
    src: "/images/comfort-seating-black-reclined.jpeg",
    alt: "Motorized business-class reclining seats reclined inside the Vital Sphere 360 chamber",
    caption: "Motorized reclining comfort",
  },
  {
    src: "/images/internal-touchscreen.png",
    alt: "Interior touchscreen control panel showing session time, pressure, temperature, and oxygen readings",
    caption: "Interior smart touchscreen",
  },
  {
    src: "/images/dual-all-in-one-unit.jpeg",
    alt: "Dual all-in-one smart controller with redundant compressors and oxygen generators on caster wheels",
    caption: "Dual all-in-one controller",
  },
  {
    src: "/images/bibs-mask.png",
    alt: "BIBS oxygen mask for the Vital Sphere 360 chamber, delivering high-concentration oxygen during hyperbaric sessions",
    caption: "BIBS oxygen mask",
  },
]

export function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const goTo = useCallback((index: number) => {
    setCurrent((index + slides.length) % slides.length)
  }, [])

  const next = useCallback(() => goTo(current + 1), [current, goTo])
  const prev = useCallback(() => goTo(current - 1), [current, goTo])

  useEffect(() => {
    if (isPaused) return
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length)
    }, 4500)
    return () => clearInterval(id)
  }, [isPaused])

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="group"
      aria-roledescription="carousel"
      aria-label="Vital Sphere 360 product images"
    >
      <div className="absolute inset-0 -z-10 rounded-3xl bg-primary/5" aria-hidden="true" />
      <div className="overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-10">
        <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-secondary/40">
          {slides.map((slide, index) => (
            <div
              key={slide.src}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
              aria-hidden={index !== current}
            >
              <Image
                src={slide.src || "/placeholder.svg"}
                alt={slide.alt}
                fill
                priority={index === 0}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/70 to-transparent px-4 py-3">
                <p className="text-sm font-medium text-background">{slide.caption}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={prev}
          aria-label="Previous image"
          className="absolute left-9 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card/90 text-foreground shadow-sm transition hover:bg-card sm:left-14"
        >
          <ChevronLeft className="size-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next image"
          className="absolute right-9 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card/90 text-foreground shadow-sm transition hover:bg-card sm:right-14"
        >
          <ChevronRight className="size-5" aria-hidden="true" />
        </button>
      </div>

      <div className="mt-4 flex items-center justify-center gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => goTo(index)}
            aria-label={`Go to image ${index + 1}: ${slide.caption}`}
            aria-current={index === current}
            className={`h-2 rounded-full transition-all ${
              index === current ? "w-6 bg-primary" : "w-2 bg-border hover:bg-muted-foreground/50"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
