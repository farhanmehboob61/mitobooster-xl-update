import dynamic from "next/dynamic"
import { AnnouncementBar } from "@/components/announcement-bar"
import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"

// All below-fold sections are code-split to keep the initial JS bundle small
// and reduce Time to Interactive / Total Blocking Time on mobile.
const OverviewSection = dynamic(() =>
  import("@/components/overview-section").then((m) => m.OverviewSection)
)
const FeaturesSection = dynamic(() =>
  import("@/components/features-section").then((m) => m.FeaturesSection)
)
const OptionalFeaturesSection = dynamic(() =>
  import("@/components/optional-features-section").then((m) => m.OptionalFeaturesSection)
)
const InteriorLiningSection = dynamic(() =>
  import("@/components/interior-lining-section").then((m) => m.InteriorLiningSection)
)
const SpecificationsSection = dynamic(() =>
  import("@/components/specifications-section").then((m) => m.SpecificationsSection)
)
const FinancingSection = dynamic(() =>
  import("@/components/financing-section").then((m) => m.FinancingSection)
)
const ReviewsSection = dynamic(() =>
  import("@/components/reviews-section").then((m) => m.ReviewsSection)
)
const ContactSection = dynamic(() =>
  import("@/components/contact-section").then((m) => m.ContactSection)
)
const SiteFooter = dynamic(() =>
  import("@/components/site-footer").then((m) => m.SiteFooter)
)

export default function Page() {
  return (
    <div className="min-h-screen bg-background pt-10 text-foreground">
      <AnnouncementBar />
      <SiteHeader />
      <main>
        <HeroSection />
        <OverviewSection />
        <FeaturesSection />
        <OptionalFeaturesSection />
        <InteriorLiningSection />
        <SpecificationsSection />
        <FinancingSection />
        <ReviewsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}
