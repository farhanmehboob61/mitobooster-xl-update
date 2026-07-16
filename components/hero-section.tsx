import { Button } from "@/components/ui/button"

const HERO_IMG_SRC =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MitoBooster%20XL%20hero%20image-dYUy8WyHgSN3fA1a0oNUsyZX8kN0x4.png"

export function HeroSection() {
  return (
    <section id="overview" className="overflow-hidden border-b border-border bg-background">
      <div className="relative w-full">
        {/* Hero Image Container - Full Width */}
        <div className="relative w-full bg-gradient-to-r from-blue-100 to-white">
          {/*
            LCP-critical hero: served as a direct external URL so it renders
            immediately without waiting on Next.js's on-demand image optimizer.
            The preload link is auto-hoisted to <head> by React 19.
          */}
          <link
            rel="preload"
            as="image"
            href={HERO_IMG_SRC}
            fetchPriority="high"
          />
          <img
            src={HERO_IMG_SRC}
            sizes="100vw"
            width={1600}
            height={650}
            alt="MitoBooster XL Red Light Therapy Bed"
            fetchPriority="high"
            decoding="async"
            className="h-auto w-full object-contain"
          />

          {/* Badges - Top Left Overlay */}
          <div className="absolute left-3 top-3 flex flex-col gap-2 sm:left-6 sm:top-6">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-xs font-semibold text-primary backdrop-blur-sm">
              <div className="size-1 rounded-full bg-primary" />
              6-Wavelength Red Light Therapy Bed
            </div>
          </div>
        </div>

        {/* Price and CTA Section */}
        <div className="border-b border-border bg-background">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-6 sm:py-8 lg:px-8">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Starting price · Finance for as low as $1,301/mo</p>
              <p className="text-3xl font-bold text-foreground sm:text-4xl">$59,900</p>
            </div>
            <div className="flex flex-col gap-2.5 sm:flex-row sm:gap-3">
              <Button size="lg" className="w-full sm:w-auto sm:px-8" asChild>
                <a href="#contact">Request a Demo &amp; Quote</a>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto sm:px-8" asChild>
                <a href="tel:+16308127865">Call +1 (630) 812-7865</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
