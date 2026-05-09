import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";

const packages = [
  {
    name: "Strategy",
    price: "Starting at $5,000",
    description:
      "For teams who want a clear plan they can execute internally. Fully credited toward any Campaign Engine engagement.",
    cta: "Learn More →",
    href: "/pricing",
    featured: false,
  },
  {
    name: "Launch",
    price: "Starting at $15,000",
    description:
      "We build and launch your campaign in 45 days. Best for teams who can manage and optimize in-house after launch.",
    cta: "Lock In Your Window →",
    href: "/campaign-engine#get-started",
    featured: false,
  },
  {
    name: "Campaign Engine (90-Day)",
    price: "Starting at $25,000",
    description:
      "45 days to build and launch. 45 days to optimize and manage for growth. Built for teams who want predictable, ongoing pipeline.",
    cta: "See Full Pricing →",
    href: "/pricing",
    featured: true,
    badge: "Most Popular",
  },
];

export default function PackagesSection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-[#F0ECFF]">
      <div className="container-site">
        <FadeIn className="text-center mb-14">
          <h2 className="font-headline text-display-md text-[#18153A] text-balance">
            Choose how you want to get started.
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
          {packages.map((pkg, i) => (
            <FadeIn key={pkg.name} delay={0.1 * i}>
              <div
                className={`relative flex flex-col h-full rounded-2xl p-8 border transition-all duration-300 ${
                  pkg.featured
                    ? "border-brand-primary bg-white shadow-xl"
                    : "border-[#D4CEFF] bg-white shadow-md hover:border-brand-primary/50"
                }`}
              >
                {pkg.featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-accent text-brand-bg-dark text-xs font-bold font-body uppercase tracking-wider">
                      ⭐ {pkg.badge}
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3
                    className={`font-headline text-xl mb-2 ${
                      pkg.featured ? "text-brand-primary" : "text-[#18153A]"
                    }`}
                  >
                    {pkg.name}
                  </h3>
                  <p className="text-2xl font-headline text-[#18153A] font-bold">{pkg.price}</p>
                </div>

                <p className="text-[#4A3F8C] font-body text-sm leading-relaxed flex-1 mb-8">
                  {pkg.description}
                </p>

                <Link
                  href={pkg.href}
                  className={`w-full text-center rounded-lg px-5 py-3 text-sm font-semibold font-body transition-all duration-200 ${
                    pkg.featured
                      ? "bg-brand-accent text-brand-bg-dark hover:brightness-110"
                      : "border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white"
                  }`}
                >
                  {pkg.cta}
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
