import { ControlPanelViewer } from "@/components/control-panel-viewer"

const stats = [
  { value: "6", label: "Wavelengths (635-940nm)" },
  { value: "3,850", label: "High-Powered LEDs" },
  { value: "100-150", label: "mW/cm² Irradiance (Adjustable)" },
  { value: "0-30", label: "Session Timer (Minutes)" },
  { value: "6-Year", label: "Warranty" },
]

export function OverviewSection() {
  return (
    <section id="overview" className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        {/* Two-column layout: Image left, text right */}
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Left column: Chamber image — shows below text on mobile */}
          <div className="order-2 flex items-center justify-center rounded-lg bg-background lg:order-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Experience%20Advanced%20Whole-Body%20Red%20Light%20Therapy-HbNtwuXFJ9caMwFmP9OeAcZq6E2Ihz.png"
              alt="MitoBooster XL red light therapy bed open — showing glowing red LED panels inside"
              width={500}
              height={600}
              loading="lazy"
              className="h-auto w-full max-w-xs object-contain sm:max-w-sm lg:max-w-md"
            />
          </div>

          {/* Right column: Text content — shows first on mobile */}
          <div className="order-1 lg:order-2">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">The Overview</p>
            <h2 className="mt-3 text-balance text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
              Experience Advanced Whole-Body Red Light Therapy
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground sm:text-lg">
              The MitoBooster XL is a professional-grade red light therapy bed offering full-body coverage
              through a 6-wavelength system (635nm–940nm), combining red light and near-infrared spectrums.
              Unlike limited at-home devices or basic panels, it&apos;s engineered to optimize cellular function,
              support recovery, and deliver comprehensive therapeutic coverage in a single session.
            </p>
          </div>
        </div>
      </div>

      {/* Full-width stats row — 2-col on mobile, 3-col on sm, 5-col on lg */}
      <div className="border-b border-border bg-background">
        <dl className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-12">
          <div className="grid grid-cols-2 gap-0 sm:grid-cols-3 lg:grid-cols-5">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center gap-1.5 border-b border-border px-3 py-5 text-center last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0 ${
                  i === 4 ? "col-span-2 border-b-0 sm:col-span-1" : ""
                }`}
              >
                <dd className="text-xl font-bold text-primary sm:text-2xl lg:text-3xl">{stat.value}</dd>
                <dt className="text-xs font-medium uppercase tracking-widest text-muted-foreground">{stat.label}</dt>
              </div>
            ))}
          </div>
        </dl>
      </div>
    </section>
  )
}
