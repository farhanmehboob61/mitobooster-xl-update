import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "The spacious design lets us treat entire teams at once. Our clients love the comfort, and we've seen faster healing than ever before.",
    name: "Director",
    role: "Sports Rehabilitation Center, Florida",
  },
  {
    quote:
      "The ability to treat multiple patients at once has been a game-changer for our business. Our patients feel relaxed and cared for, and we've seen a noticeable increase in bookings.",
    name: "Owner",
    role: "Wellness Clinic, California",
  },
]

export function TestimonialsSection() {
  return (
    <section className="border-b border-border bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Success Stories</p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Trusted by clinics and wellness centers
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure key={t.role} className="flex flex-col rounded-2xl border-2 border-blue-200 bg-card p-8">
              <div className="flex gap-0.5 text-primary" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 text-lg leading-relaxed text-pretty">
                {`"${t.quote}"`}
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <span className="block font-semibold">{t.name}</span>
                <span className="block text-sm text-muted-foreground">{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
