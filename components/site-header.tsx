"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Phone, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Model", href: "#overview" },
  { label: "Gallery", href: "#gallery" },
  { label: "Technical Details", href: "#specifications" },
  { label: "Financing", href: "#financing" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact Sales", href: "#contact" },
]

export function SiteHeader() {
  const [activeSection, setActiveSection] = useState<string>("")
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const sectionMap: Record<string, string> = {
      "#overview": "overview",
      "#gallery": "gallery",
      "#specifications": "specifications",
      "#financing": "financing",
      "#reviews": "reviews",
      "#contact": "contact",
    }

    const observer = new IntersectionObserver(
      (entries) => {
        let mostVisibleEntry: IntersectionObserverEntry | null = null
        let maxVisibility = 0
        entries.forEach((entry) => {
          if (entry.intersectionRatio > maxVisibility) {
            maxVisibility = entry.intersectionRatio
            mostVisibleEntry = entry
          }
        })
        if (mostVisibleEntry && (mostVisibleEntry as IntersectionObserverEntry).isIntersecting) {
          const sectionId = (mostVisibleEntry as IntersectionObserverEntry).target.id
          const matchingHref = Object.entries(sectionMap).find(([, id]) => id === sectionId)?.[0]
          if (matchingHref) setActiveSection(matchingHref)
        }
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] }
    )

    Object.values(sectionMap).forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleNavClick = () => setMobileOpen(false)

  return (
    <header className="sticky top-10 z-40 border-b border-border/60 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#overview" className="flex shrink-0 items-center" aria-label="Oxygen Health Systems home">
          <Image
            src="/images/oxygen-health-systems-logo-transparent.png"
            alt="Oxygen Health Systems"
            width={143}
            height={74}
            priority
            className="h-10 w-auto sm:h-12"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`border-b-2 pb-0.5 text-sm font-medium transition-all ${
                activeSection === link.href
                  ? "border-primary font-bold text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop right actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+16308127865"
            className="flex items-center gap-2 text-sm font-semibold text-foreground"
          >
            <Phone className="size-4 text-primary" aria-hidden="true" />
            +1 (630) 812-7865
          </a>
          <Button asChild size="sm">
            <a href="#contact">Request Pricing</a>
          </Button>
        </div>

        {/* Mobile right: phone icon + CTA + hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="tel:+16308127865"
            className="flex size-9 items-center justify-center rounded-md text-foreground"
            aria-label="Call us"
          >
            <Phone className="size-5 text-primary" aria-hidden="true" />
          </a>
          <Button asChild size="sm" className="hidden sm:flex">
            <a href="#contact">Request Pricing</a>
          </Button>
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="flex size-9 items-center justify-center rounded-md text-foreground"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileOpen && (
        <nav
          className="border-t border-border bg-background/95 backdrop-blur lg:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="mx-auto max-w-7xl divide-y divide-border/50 px-4 sm:px-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleNavClick}
                  className={`block py-3.5 text-sm font-medium transition-colors ${
                    activeSection === link.href
                      ? "font-bold text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="py-4">
              <Button asChild size="sm" className="w-full sm:hidden">
                <a href="#contact" onClick={handleNavClick}>Request Pricing</a>
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
