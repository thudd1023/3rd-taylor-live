import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";

function getCurrentNextMonth() {
  const d = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1);
  return d.toLocaleString("default", { month: "long", year: "numeric" });
}

const packages = [
  {
    name: "Strategy",
    price: "$5,000",
    bestFor: "Teams executing internally",
    bullets: [
      "Campaign strategy and architecture",
      "Messaging and positioning direction",
      "Channel and journey mapping",
      "90-day campaign roadmap",
    ],
    microcopy: "Fully credited toward a Launch or Campaign Engine engagement",
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Launch",
    price: "$15,000",
    bestFor: "Teams ready to go live fast",
    bullets: [
      "Full campaign strategy and messaging",
      "Creative direction and asset production",
      "Paid media setup and launch",
      "Landing pages and conversion paths",
    ],
    microcopy: "Built and deployed in 45 days",
    cta: "Lock In Your Launch Window",
    featured: false,
  },
  {
    name: "Campaign Engine 90-Day",
    price: "$25,000",
    bestFor: "Teams who want predictable pipeline",
    bullets: [
      "45 days to build and launch",
      "45 days of optimization and refinement",
      "Sales enablement and handoff system",
      "Stakeholder interviews and GTM alignment",
      "Full attribution and reporting setup",
    ],
    microcopy: "",
    cta: "Reserve Your Campaign Engine",
    featured: true,
    badge: "Most Popular",
  },
];

const addOns = [
  {
    icon: "◈",
    title: "ABM Layer",
    body: "Add account-level precision with coordinated multi-touch programs targeting your highest-value accounts.",
  },
  {
    icon: "◉",
    title: "Personalized Outbound at Scale",
    body: "Extend your campaign with AI-enhanced, role-specific outbound sequences aligned to your campaign messaging.",
  },
];

export default function PricingCampaignEngine() {
  const nextMonth = getCurrentNextMonth();

  return (
    <section className="bg-[#EAE5FF] py-24 md:py-32">
      <div className="container-site">
        {/* Header */}
        <FadeIn className="text-center mb-4">
          <p className="section-label justify-center mb-4 text-brand-primary">Campaign Engine</p>
          <h2 className="font-headline text-display-md text-[#18153A] text-balance">
            The Core Engagement
          </h2>
        </FadeIn>
        <FadeIn delay={0.1} className="text-center mb-14">
          <p className="text-[#4A3F8C] font-body text-lg max-w-2xl mx-auto leading-relaxed">
            A complete campaign system — designed, built, and launched for your team in 45 days.
          </p>
        </FadeIn>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch mb-6">
          {packages.map((pkg, i) => (
            <FadeIn key={pkg.name} delay={0.1 * i}>
              <div
                className={`relative flex flex-col h-full rounded-2xl p-8 border transition-all duration-300 ${
                  pkg.featured
                    ? "border-brand-primary bg-white shadow-xl"
                    : "border-[#D4CEFF] bg-white shadow-md hover:border-brand-primary/50"
                }`}
              >
                {pkg.featured && pkg.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-accent text-[#09070E] text-xs font-bold font-body uppercase tracking-wider">
                      ⭐ {pkg.badge}
                    </span>
                  </div>
                )}

                <div className="mb-1">
                  <h3
                    className={`font-headline text-xl mb-1 ${
                      pkg.featured ? "text-brand-primary" : "text-[#18153A]"
                    }`}
                  >
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-[#9B8FF0] font-body uppercase tracking-wider mb-3">
                    Best for: {pkg.bestFor}
                  </p>
                  <p className="text-3xl font-headline text-[#18153A] font-bold">{pkg.price}</p>
                </div>

                <hr className="border-[#E5E0FF] my-5" />

                <ul className="space-y-2 mb-6 flex-1" role="list">
                  {pkg.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2 text-[#4A3F8C] font-body text-sm"
                    >
                      <span className="text-brand-primary mt-0.5 flex-shrink-0" aria-hidden="true">✓</span>
                      {bullet}
                    </li>
                  ))}
                </ul>

                {pkg.featured ? (
                  <p className="text-[#9B8FF0] font-body text-xs mb-5 italic">
                    Now booking for {nextMonth}
                  </p>
                ) : (
                  <p className="text-[#9B8FF0] font-body text-xs mb-5 italic">{pkg.microcopy}</p>
                )}

                <Link
                  href="#get-started"
                  className={`w-full text-center rounded-lg px-5 py-3 text-sm font-semibold font-body transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 ${
                    pkg.featured
                      ? "bg-brand-accent text-[#09070E] hover:brightness-110"
                      : "border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white"
                  }`}
                >
                  {pkg.cta}
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Add-ons */}
        <FadeIn delay={0.4} className="max-w-5xl mx-auto">
          <div className="rounded-2xl border border-[#D4CEFF] bg-white p-8 md:p-10">
            <p className="section-label mb-4 text-brand-primary">Add-Ons Available</p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {addOns.map((a) => (
                <div key={a.title} className="flex gap-4">
                  <span className="text-xl text-brand-primary flex-shrink-0 mt-0.5" aria-hidden="true">
                    {a.icon}
                  </span>
                  <div>
                    <h3 className="font-headline text-base text-[#18153A] mb-1">{a.title}</h3>
                    <p className="text-[#4A3F8C] font-body text-sm leading-relaxed">{a.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-5 border-t border-[#E5E0FF]">
              <p className="text-[#9B8FF0] font-body text-sm italic">
                Add-on pricing based on scope. Discussed during your discovery call.
              </p>
              <Link
                href="/campaign-engine"
                className="inline-flex items-center gap-1.5 text-brand-primary font-body font-semibold text-sm hover:underline whitespace-nowrap"
              >
                Explore Campaign Engine →
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
