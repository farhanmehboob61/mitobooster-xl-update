import { CalendarClock, Building2, TrendingUp, UserRound } from "lucide-react"
import { FinancingDialog } from "@/components/financing-dialog"

const options = [
  {
    icon: CalendarClock,
    title: "6-Month Financing",
    description: "Short-term financing to get your red light therapy offering up and running fast. Contact us for details.",
  },
  {
    icon: Building2,
    title: "Business Financing",
    description:
      "Finance as low as $1,301/mo through our speedy-approval business finance partner — spread the cost of your MitoBooster XL over flexible terms.",
  },
  {
    icon: UserRound,
    title: "Personal Financing",
    description:
      "Personal financing options available through SweetPay — compare competitive offers from top digital lenders and pick the plan that fits you.",
  },
  {
    icon: TrendingUp,
    title: "Strong ROI",
    description:
      "Red light therapy sessions command premium pricing in wellness and medical settings, delivering a strong return on your $59,900 investment.",
  },
]

export function FinancingSection() {
  return (
    <section id="financing" className="border-b border-border bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Pricing &amp; Value</p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Flexible financing to fit your practice
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            The MitoBooster XL starts at <strong className="text-foreground">$59,900</strong>, with business
            financing available for as low as <strong className="text-foreground">$1,301/mo</strong> through
            our trusted financing partner — so you can start offering red light therapy sooner.
          </p>
          <div className="mt-6">
            <FinancingDialog />
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {options.map((option) => (
            <div key={option.title} className="rounded-2xl border-2 border-blue-200 bg-card p-8">
              <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <option.icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-xl font-semibold">{option.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{option.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
