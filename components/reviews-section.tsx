import { Star } from "lucide-react"

const reviews = [
  {
    author: "Gary Rosen",
    location: "Florida",
    rating: 5,
    content: "Outstanding home delivery experience with professional setup by Michael Carroll. The white-glove installation exceeded all our expectations, and the attention to detail was exceptional.",
  },
  {
    author: "Brian Moser",
    location: "Illinois",
    rating: 5,
    content: "Over three years, I've worked with four different OHS representatives. Each one has been consistently outstanding, professional, and genuinely committed to our success.",
  },
  {
    author: "James Kabitzke",
    location: "Wisconsin",
    rating: 5,
    content: "Purchased the 34\" 2.0 ATA unit with white-glove delivery. Showroom visit was exceptional, and the team's product knowledge and professionalism set a new standard.",
  },
  {
    author: "Dual Unit Clinic",
    location: "Multi-location Clinic",
    rating: 5,
    content: "Exceptional build quality and remarkably quiet operation. Installation was seamless, and the system helps our patient manage MS symptoms significantly better than expected.",
  },
  {
    author: "Wellness Center Director",
    location: "New York",
    rating: 5,
    content: "Switched from competitors after comparing features. The built-in AC system and quiet operation were deciding factors. Our clients notice the difference immediately.",
  },
]

export function ReviewsSection() {
  return (
    <section id="reviews" className="border-b border-border bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-white border border-border px-3 py-1.5 mb-6">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="size-3.5 fill-yellow-400 text-yellow-400" aria-hidden="true" />
              ))}
            </div>
            <span className="text-xs font-semibold text-foreground">5.0 Rating · 128+ Reviews</span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Where Our Customers Recover
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Real stories from healthcare providers and wellness centers who trust the Vital Sphere 360
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <div key={review.author} className="rounded-xl border-2 border-blue-200 bg-white p-6">
              {/* Rating */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="size-4 fill-yellow-400 text-yellow-400"
                    aria-hidden="true"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-sm leading-relaxed text-foreground">{review.content}</p>

              {/* Author */}
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-sm font-semibold text-foreground">{review.author}</p>
                <p className="text-xs text-muted-foreground">{review.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
