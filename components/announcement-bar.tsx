import { Star } from 'lucide-react'

export function AnnouncementBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex h-auto items-center justify-center gap-2 bg-primary px-3 py-2.5 text-center">
      <div className="flex shrink-0 gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className="size-3 fill-yellow-400 text-yellow-400 sm:size-3.5"
            aria-hidden="true"
          />
        ))}
      </div>
      {/* Mobile: shorter text */}
      <p className="text-xs font-medium text-white sm:hidden">
        10,000+ Happy Users &nbsp;·&nbsp; Free White-Glove Installation
      </p>
      {/* Desktop: full text */}
      <p className="hidden text-xs font-medium text-white sm:block">
        Featured on Top Doctor Magazine <span className="mx-1.5 text-blue-100">|</span> 10,000+ Happy Users{' '}
        <span className="mx-1.5 text-blue-100">|</span> Free White-Glove Installation
      </p>
    </div>
  )
}
