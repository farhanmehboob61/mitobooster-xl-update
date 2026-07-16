import {
  Waves,
  Lightbulb,
  SlidersHorizontal,
  Timer,
  Armchair,
  Wind,
  ShieldCheck,
} from "lucide-react"

const features = [
  {
    icon: Lightbulb,
    title: "6-Wavelength Technology",
    description:
      "Delivers 635nm, 660nm, 700nm, 760nm, 810nm, 850nm and 940nm wavelengths with adjustable frequency, targeting both surface skin cells and deeper muscle and joint tissue in one session.",
  },
  {
    icon: Waves,
    title: "3,850 High-Powered LEDs",
    description:
      "Full-body coverage ensures every inch receives optimal light intensity, unlike single-panel or targeted devices.",
  },
  {
    icon: SlidersHorizontal,
    title: "Customizable Intensity & Frequency",
    description:
      "Adjustable power (0–100%) and frequency (1–5000 Hz) settings let users tailor sessions to their comfort level and therapeutic goals.",
  },
  {
    icon: Timer,
    title: "Built-In Session Timer",
    description:
      "Precision timer (0–30 min) prevents overexposure and ensures safe, controlled sessions.",
  },
  {
    icon: Armchair,
    title: "Cushioned, Contoured Design",
    description:
      "Relaxation-centric bed design supports full-body comfort during treatment.",
  },
  {
    icon: Wind,
    title: "Integrated Cooling System",
    description:
      "Keeps sessions comfortable even during extended, high-intensity treatments.",
  },
  {
    icon: ShieldCheck,
    title: "UV-Free, Skin-Safe Light",
    description:
      "Delivers therapeutic red and near-infrared wavelengths without harmful UV exposure.",
  },
]

export function FeaturesSection() {
  return (
    <section id="gallery" className="border-b border-border bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Engineered Features</p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Built for full-body coverage, precision, and comfort
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Every detail of the MitoBooster XL is designed to deliver effective, safe, and comfortable
            red light therapy sessions for professional wellness environments.
          </p>
        </div>

        {/* Alternating Full-Width Feature Blocks */}
        <div className="mt-10 space-y-0">
          {features.map((feature, idx) => {
            const isEven = idx % 2 === 0
            return (
              <div
                key={feature.title}
                className={`border-b border-border px-4 py-8 sm:px-6 sm:py-12 lg:px-8 ${
                  isEven ? "bg-background" : "bg-muted/40"
                }`}
              >
                <div className="mx-auto grid max-w-7xl items-center gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12">
                  {/* Icon card — always on top on mobile; alternates on desktop */}
                  <div
                    className={`flex items-center justify-center overflow-hidden rounded-lg border border-border bg-card py-16 ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <span className="flex size-20 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <feature.icon className="size-10" aria-hidden="true" />
                    </span>
                  </div>

                  {/* Text — always below icon on mobile; alternates on desktop */}
                  <div className={isEven ? "lg:order-1" : "lg:order-2"}>
                    <div className="flex items-center gap-3">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary sm:size-12">
                        <feature.icon className="size-5 sm:size-6" aria-hidden="true" />
                      </span>
                      <h3 className="text-lg font-bold tracking-tight sm:text-xl">{feature.title}</h3>
                    </div>
                    <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
