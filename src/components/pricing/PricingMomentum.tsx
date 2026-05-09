import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";

const included = [
  "Dedicated senior marketing team",
  "Credits-based monthly allocation — fully flexible",
  "Roll unused credits forward, no forfeiture",
  "Apply credits across any service mix each month",
  "Shift priorities without renegotiating scope",
  "Monthly strategy sessions and performance reporting",
  "Priority access to all services and capabilities",
];

export default function PricingMomentum() {
  return (
    <section className="bg-[#121028] py-24 md:py-32 relative overflow-hidden">
      <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand-light-purple opacity-[0.06] blur-[100px] pointer-events-none" />

      <div className="container-site relative">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start max-w-5xl mx-auto">
          {/* Left */}
          <FadeIn direction="left">
            <div>
              <p className="section-label mb-4 text-[#9B8FF0]">Retained Team</p>
              <h2 className="font-headline text-display-md text-white mb-3 text-balance">
                Scale Without the Hiring Headache
              </h2>
              <p className="text-brand-accent font-headline text-2xl font-bold mb-5">
                Starting at $6,000/month
              </p>
              <p className="text-white/80 font-body text-base leading-relaxed mb-5">
                A full-stack marketing team on a credits-based retainer — flexing with your
                priorities each month.
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-6 py-4 border-y border-white/10">
                {["One agreement", "Total flexibility", "Zero friction"].map((phrase, i) => (
                  <span key={phrase} className="flex items-center gap-4">
                    <span className="font-headline text-lg text-white font-bold">{phrase}</span>
                    {i < 2 && <span className="text-brand-accent font-bold text-lg" aria-hidden="true">·</span>}
                  </span>
                ))}
              </div>
              <div className="p-4 rounded-xl border border-brand-light-purple/20 bg-brand-light-purple/[0.05] mb-8">
                <p className="text-white/80 font-body text-sm leading-relaxed">
                  <span className="text-brand-light-purple font-semibold">Early-stage option:</span>{" "}
                  $1,500/month + revenue share for pre-seed and seed companies. Typically follows a
                  Campaign Engine engagement.
                </p>
              </div>
              <Link
                href="#get-started"
                className="inline-flex items-center justify-center bg-brand-accent text-[#09070E] font-semibold font-body px-7 py-3.5 rounded-lg text-base hover:brightness-110 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9B8FF0] focus-visible:ring-offset-2 focus-visible:ring-offset-[#121028]"
              >
                See How Momentum Works →
              </Link>
            </div>
          </FadeIn>

          {/* Right */}
          <FadeIn delay={0.15} direction="right">
            <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-8">
              <p className="text-[#9B8FF0] font-body text-xs font-semibold uppercase tracking-widest mb-5">
                What&apos;s Included
              </p>
              <ul className="space-y-3.5" role="list">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/80 font-body text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
