import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 border-b border-background/15 pb-12 lg:flex-row lg:items-center">
          <div className="max-w-xl">
            <h2 className="text-balance text-2xl font-bold tracking-tight sm:text-3xl">
              Take the next step — invest in the Vital Sphere 360 2.0 ATA hard-shell chamber today
            </h2>
            <p className="mt-3 text-background/70">
              Enhance your facility with state-of-the-art HBOT. Contact us to schedule a consultation
              or demo.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href="#contact">Request Pricing</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-background/30 bg-transparent text-background hover:bg-background/10 hover:text-background"
            >
              <a href="tel:+16308127865" className="flex items-center gap-2">
                <Phone className="size-4" aria-hidden="true" />
                {"+1 (630) 812-7865"}
              </a>
            </Button>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 pt-8 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2">
            <span className="flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <span className="text-base font-bold leading-none">O</span>
            </span>
            <span className="text-sm font-semibold">Oxygen Health Systems</span>
          </div>
          <p className="text-xs text-background/60">
            © {new Date().getFullYear()} Oxygen Health Systems. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
