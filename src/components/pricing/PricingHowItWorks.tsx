import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";

const models = [
  {
    label: "Campaign Engine",
    title: "Flat-Fee",
    description: "Clear scope. Clear deliverables. No surprises.",
    bullets: [
      "Fixed price — no hourly billing",
      "No ad-spend markups or pass-through fees",
      "No surprise invoices mid-engagement",
    ],
    color: "border-brand-primary/30",
    accent: "text-brand-primary",
    bg: "bg-brand-primary/[0.04]",
    labelColor: "text-brand-primary",
  },
  {
    label: "Momentum",
    title: "Credits-Based Retainer",
    description: "One monthly budget, fully flexible allocation.",
    bullets: [
      "Apply credits across any service mix each month",
      "Roll unused credits forward — nothing wasted",
      "Shift priorities without renegotiating scope",
    ],
    color: "border-brand-light-purple/30",
    accent: "text-brand-light-purple",
    bg: "bg-brand-light-purple/[0.04]",
    labelColor: "text-brand-light-purple",
  },
  {
    label: "Partnership",
    title: "Revenue-Linked",
    description:
      "For companies with clean attribution and aligned sales/marketing, we offer a reduced retainer plus revenue share.",
    bullets: [
      "Reduced monthly retainer",
      "Revenue share tied to pipeline generated",
      "Shared risk. Shared reward.",
    ],
    color: "border-brand-accent/30",
    accent: "text-brand-accent",
    bg: "bg-brand-accent/[0.04]",
    labelColor: "text-brand-accent",
  },
];

export default function PricingHowItWorks() {
  return (
    <section className="bg-[#0D0A1C] py-24 md:py-32">
      <div className="container-site">
        <FadeIn className="text-center mb-14">
          <h2 className="font-headline text-display-md text-white text-balance">
            How Our Pricing Works
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
          {models.map((m, i) => (
            <FadeIn key={m.title} delay={0.1 * i}>
              <div
                className={`flex flex-col h-full rounded-2xl border p-8 ${m.color} ${m.bg}`}
              >
                <p className={`text-xs font-semibold uppercase tracking-widest font-body mb-2 ${m.labelColor}`}>
                  {m.label}
                </p>
                <h3 className={`font-headline text-xl text-white mb-3`}>{m.title}</h3>
                <p className="text-white/80 font-body text-sm leading-relaxed mb-5 flex-1">
                  {m.description}
                </p>
                <ul className="space-y-2" role="list">
                  {m.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-white/80 font-body text-sm">
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${m.accent === "text-brand-accent" ? "bg-brand-accent" : m.accent === "text-brand-light-purple" ? "bg-brand-light-purple" : "bg-brand-primary"}`} aria-hidden="true" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4} className="text-center">
          <p className="text-white/70 font-body text-base mb-5">
            Schedule a Discovery Call to see which path is best for you.
          </p>
          <Link
            href="#get-started"
            className="inline-flex items-center justify-center bg-brand-primary text-white font-semibold font-body px-6 py-3 rounded-lg text-sm hover:opacity-90 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9B8FF0] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D0A1C]"
          >
            Schedule a Discovery Call
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
