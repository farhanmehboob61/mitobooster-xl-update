"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Is red light therapy effective for pain relief?",
    answer:
      "Yes. Clinical studies show red and near-infrared light can reduce inflammation and improve pain scores across various conditions, supported by meta-analyses of randomized controlled trials.",
  },
  {
    question: "How does the MitoBooster XL differ from at-home red light therapy devices?",
    answer:
      "It delivers full-body coverage via 3,850 LEDs across 6 wavelengths, versus the limited surface area and single-wavelength output of most at-home panels.",
  },
  {
    question: "How soon might I see results from using the MitoBooster XL?",
    answer:
      "Many users report increased energy and reduced soreness within the first few sessions, with skin and recovery benefits building with consistent use over several weeks.",
  },
  {
    question: "Is red light therapy safe?",
    answer:
      "Yes, it emits no harmful UV rays and uses built-in timers to prevent overexposure, making it safe for regular use.",
  },
  {
    question: "Can red light therapy help with weight loss?",
    answer:
      "It's not a standalone weight-loss method, but research suggests certain wavelengths may support metabolism and fat cell activity when combined with diet and exercise.",
  },
]

export function InteriorLiningSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  function toggle(idx: number) {
    setOpenIndex((prev) => (prev === idx ? null : idx))
  }

  return (
    <section id="interior-lining" className="border-b border-border bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">FAQ</p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <dl className="mt-12 divide-y divide-border rounded-2xl border-2 border-blue-200 bg-card">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div key={faq.question}>
                <dt>
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-semibold transition-colors hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`size-5 shrink-0 text-muted-foreground transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </dt>
                {isOpen && (
                  <dd className="px-6 pb-5 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {faq.answer}
                  </dd>
                )}
              </div>
            )
          })}
        </dl>
      </div>
    </section>
  )
}
