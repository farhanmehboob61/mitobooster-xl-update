"use client"

import { useEffect, useRef, useState } from "react"
import { Phone, Mail, Check, Loader2 } from "lucide-react"

const highlights = [
  "Free consultation & live demo",
  "Custom paint & chair configurations",
  "International voltage & plug options",
  "Professional installation & ongoing support",
]

export function ContactSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    const el = containerRef.current
    if (!el || showForm) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShowForm(true)
          observer.disconnect()
        }
      },
      { rootMargin: "400px" }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [showForm])

  return (
    <section id="contact" className="border-b border-border bg-primary">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-100">Get in Touch</p>
              <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Request pricing &amp; a personalized demo
              </h2>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-blue-100">
                Our team is ready to help you take the next step toward enhancing your services and
                improving patient outcomes. Reach out for a quote, financing details, or a demo.
              </p>
            </div>

            <ul className="grid gap-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-medium text-white">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-white/20 text-white">
                    <Check className="size-3.5" aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-2 flex flex-col gap-3">
              <a href="tel:+16308127865" className="flex items-center gap-3 text-base font-semibold text-white">
                <Phone className="size-5 text-white" aria-hidden="true" />
                {"+1 (630) 812-7865"}
              </a>
              <a href="mailto:sales@oxygenhealthsystems.com" className="flex items-center gap-3 text-base font-semibold text-white">
                <Mail className="size-5 text-white" aria-hidden="true" />
                sales@oxygenhealthsystems.com
              </a>
            </div>
          </div>

          <div
            ref={containerRef}
            style={{ height: "845px" }}
            className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
            suppressHydrationWarning
          >
            {showForm ? (
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/q7Cvk9Q8jvezhlCf06SP"
                loading="lazy"
                style={{ width: "100%", height: "100%", border: "none", borderRadius: "5px" }}
                id="inline-q7Cvk9Q8jvezhlCf06SP"
                data-layout={JSON.stringify({ id: "INLINE" })}
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Vital Sphere new page"
                data-height="845"
                data-layout-iframe-id="inline-q7Cvk9Q8jvezhlCf06SP"
                data-form-id="q7Cvk9Q8jvezhlCf06SP"
                title="Vital Sphere new page"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <Loader2 className="size-6 animate-spin text-muted-foreground" aria-hidden="true" />
                <span className="sr-only">Loading contact form…</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
