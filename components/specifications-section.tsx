const specs = [
  { label: "LED Lifetime", value: "100,000 hours" },
  { label: "Power Supply", value: "220–240V" },
  { label: "Output Power", value: "3,850W" },
  { label: "Irradiance", value: "100–150 mW/cm² (Adjustable)" },
  { label: "Total LEDs", value: "3,850" },
  { label: "Wavelengths", value: "635nm / 660nm / 700nm / 760nm / 810nm / 850nm / 940nm (Frequency Adjustable)" },
  { label: "LED Strips", value: "88 pcs" },
  { label: "Power Adjustment", value: "0–100%" },
  { label: "Frequency Adjustment", value: "1–5000 Hz" },
  { label: "Time Adjustment", value: "0–30 min" },
  { label: "Total Dose (10 min)", value: "36–72 J/cm²" },
  { label: "Net Weight", value: "220–265 lbs" },
  { label: "Dimensions", value: '94.68" × 38.33" × 40.61"' },
  { label: "Warranty", value: "6 years" },
]

export function SpecificationsSection() {
  return (
    <section id="specifications" className="border-b border-border bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Specifications</p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Full technical specifications
          </h2>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border-2 border-blue-200 bg-card">
          <dl className="divide-y divide-border">
            {specs.map((spec) => (
              <div
                key={spec.label}
                className="grid grid-cols-2 gap-4 px-6 py-4 sm:grid-cols-3"
              >
                <dt className="text-sm font-semibold text-foreground">{spec.label}</dt>
                <dd className="col-span-1 text-sm leading-relaxed text-muted-foreground sm:col-span-2">
                  {spec.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
