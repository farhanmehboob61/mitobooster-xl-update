"use client"

import { useEffect, useState } from "react"
import { X, ExternalLink, User, Building2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const FINANCE_URL = "https://www.oxygenhealthsystems.com/resources/finance/"

const financingPlans = [
  {
    icon: User,
    audience: "For Home Use",
    title: "Personal Financing",
    description:
      "SweetPay provides access to competitive loan offers and payment plans from the industry's top digital lenders. Using our streamlined application, you can receive offers and select the best one for you.",
    points: ["Competitive offers from top lenders", "Streamlined application", "Choose the plan that fits you"],
    cta: {
      label: "Apply with SweetPay",
      href: FINANCE_URL,
    },
  },
  {
    icon: Building2,
    audience: "For Clinics & Businesses",
    title: "Business Financing",
    description:
      "Up to $500K unsecured funding through partners like ROK Financial, with 5 or 7-year term loans and fixed monthly payments.",
    points: ["Rates from 7–15% based on credit", "No upfront fees or down payment", "Funding in 7–15 business days"],
    cta: {
      label: "Contact ROK Financial",
      href: "https://go.mypartner.io/business-financing/?ref=001Qk00000ic89lIAA",
    },
  },
]

export function FinancingDialog() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false)
    }
    if (open) {
      document.addEventListener("keydown", onKeyDown)
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <>
      <Button type="button" size="lg" onClick={() => setOpen(true)}>
        Explore Financing Options
      </Button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="financing-dialog-title"
        >
          <button
            type="button"
            className="absolute inset-0 cursor-default bg-foreground/60 backdrop-blur-sm"
            aria-label="Close financing options"
            onClick={() => setOpen(false)}
          />

          <div className="relative z-10 max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-border bg-card p-6 shadow-2xl sm:p-8">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Close"
            >
              <X className="size-4" aria-hidden="true" />
            </button>

            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Flexible Payment Solutions</p>
            <h3 id="financing-dialog-title" className="mt-2 text-2xl font-bold tracking-tight">
              Financing Options
            </h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              We offer flexible financing to make your hyperbaric chamber purchase more manageable — whether for
              personal use, a clinic, a wellness center, or a business.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {financingPlans.map((plan) => (
                <div key={plan.title} className="rounded-xl border border-border bg-background p-5">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <plan.icon className="size-5" aria-hidden="true" />
                  </span>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {plan.audience}
                  </p>
                  <h4 className="mt-1 text-lg font-semibold">{plan.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{plan.description}</p>
                  <ul className="mt-3 grid gap-2">
                    {plan.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-foreground">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  {plan.cta && (
                    <Button asChild size="sm" className="mt-4 w-full">
                      <a href={plan.cta.href} target="_blank" rel="noopener noreferrer">
                        {plan.cta.label}
                        <ExternalLink className="size-4" aria-hidden="true" />
                      </a>
                    </Button>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <a href={FINANCE_URL} target="_blank" rel="noopener noreferrer">
                  Apply Now
                  <ExternalLink className="size-4" aria-hidden="true" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
                <a href={FINANCE_URL} target="_blank" rel="noopener noreferrer">
                  Learn More
                  <ArrowRight className="size-4" aria-hidden="true" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
