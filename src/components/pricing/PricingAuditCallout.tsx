import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";

export default function PricingAuditCallout() {
  return (
    <section className="bg-[#07050E] py-16 md:py-20">
      <div className="container-site">
        <FadeIn>
          <div className="rounded-3xl border border-brand-primary/30 bg-brand-primary/[0.06] p-8 md:p-12 flex flex-col lg:flex-row gap-10 lg:gap-16 items-start lg:items-center">
            {/* Left */}
            <div className="flex-1">
              <p className="section-label mb-4 text-[#9B8FF0]">Diagnose Before You Build</p>
              <h2 className="font-headline text-display-sm text-white mb-2 text-balance">
                Start with a solid foundation.
              </h2>
              <p className="text-brand-accent font-headline text-2xl font-bold mb-4">
                Revenue Growth Audit — $8,500
              </p>
              <p className="text-white/80 font-body text-base leading-relaxed mb-6 max-w-xl">
                You can&apos;t build a campaign system on a broken foundation. Our Revenue Growth
                Audit goes deep — stakeholder interviews, CRM access, ad account analysis, marketing
                and sales funnel performance, messaging assessment — and delivers a 90-day
                prioritized roadmap to fix what&apos;s stalling growth.
              </p>
              <ul className="space-y-2.5">
                {[
                  "Delivered in 30 business days",
                  "Fully creditable toward your first Campaign Engine engagement",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-white/80 font-body text-sm">
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
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right */}
            <div className="flex-shrink-0">
              <Link
                href="#get-started"
                className="inline-flex items-center justify-center bg-brand-accent text-[#09070E] font-semibold font-body px-8 py-4 rounded-xl text-base hover:brightness-110 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9B8FF0] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07050E] whitespace-nowrap"
              >
                Start with the Audit →
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
