import { Zap, HeartPulse, Sparkles, Leaf } from "lucide-react"

const benefits = [
  {
    icon: Zap,
    title: "Cellular Rejuvenation & Energy",
    description:
      "Enhances mitochondrial function and ATP production for increased energy throughout the body.",
  },
  {
    icon: HeartPulse,
    title: "Pain Relief & Recovery",
    description:
      "Reduces inflammation and supports faster recovery from injury, surgery, or intense physical activity.",
  },
  {
    icon: Sparkles,
    title: "Skin Health & Appearance",
    description:
      "Stimulates collagen production, improving skin elasticity and texture.",
  },
  {
    icon: Leaf,
    title: "Additional Wellness Support",
    description:
      "May support metabolism, hair growth, sleep quality, and overall well-being with regular use.",
  },
]

export function BenefitsSection() {
  return (
    <section id="benefits" className="border-b border-border bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Key Benefits</p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            A valuable addition to any wellness facility
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="rounded-2xl border-2 border-blue-200 bg-card p-8">
              <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <benefit.icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-xl font-semibold">{benefit.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
