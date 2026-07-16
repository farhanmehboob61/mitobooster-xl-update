import { Sparkles, Stethoscope, Dumbbell } from "lucide-react"

const applications = [
  {
    icon: Sparkles,
    title: "Wellness Centers & Spas",
    description:
      "A high-value treatment offering that supports skin rejuvenation, pain relief, and recovery, attracting clients seeking non-invasive wellness solutions.",
  },
  {
    icon: Stethoscope,
    title: "Medical & Rehabilitation Facilities",
    description:
      "An evidence-based adjunctive therapy supporting recovery from injuries, surgeries, and chronic conditions through inflammation reduction and tissue repair.",
  },
  {
    icon: Dumbbell,
    title: "Athletic Training Facilities",
    description:
      "Accelerates recovery and reduces muscle soreness, with adjustable protocols suited to training cycles and competition schedules.",
  },
]

export function OptionalFeaturesSection() {
  return (
    <section id="optional-features" className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Professional Applications</p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Purpose-built for professional environments
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            The MitoBooster XL is engineered to deliver consistent, clinical-grade red light therapy
            across a wide range of professional settings.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {applications.map((app) => (
            <div
              key={app.title}
              className="overflow-hidden rounded-2xl border-2 border-blue-200 bg-card p-8"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <app.icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-xl font-semibold">{app.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{app.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
