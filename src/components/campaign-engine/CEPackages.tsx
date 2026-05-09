import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";

interface Package {
  name: string;
  price: string;
  descriptor: string;
  bullets: string[];
  microcopy: string;
  cta: string;
  href: string;
  featured: boolean;
  badge?: string;
}

function getCurrentMonth() {
  return new Date().toLocaleString("default", { month: "long", year: "numeric" });
}

const packages: Package[] = [
  {
    name: "Strategy",
    price: "Starting at $5,000",
    descriptor: "For teams that want a clear campaign system they can execute internally.",
    bullets: [
      "Campaign strategy and architecture",
      "Messaging and positioning direction",
      "Channel and journey mapping",
    ],
    microcopy: "Fully credited toward a Campaign Engine engagement",
    cta: "Get Started Now",
    href: "/campaign-engine#get-started",
    featured: false,
  },
  {
    name: "Launch",
    price: "Starting at $15,000",
    descriptor: "We build and deploy your campaign in 45 days.",
    bullets: [
      "Strategy and messaging",
      "Creative and asset production",
      "Campaign setup and launch",
    ],
    microcopy: "Limited campaign slots available each month",
    cta: "Lock In Your Launch Window",
    href: "/campaign-engine#get-started",
    featured: false,
  },
  {
    name: "Campaign Engine 90-Day",
    price: "Starting at $25,000",
    descriptor: "The full system. Built, launched, and optimized.",
    bullets: [
      "45 days to build and launch",
      "45 days of optimization and refinement",
      "Sales enablement and handoff system",
      "Stakeholder interviews and GTM alignment",
    ],
    microcopy: `Now booking for ${getCurrentMonth()}`,
    cta: "Reserve Your Campaign Engine",
    href: "/campaign-engine#get-started",
    featured: true,
    badge: "Most Popular",
  },
];

export default function CEPackages() {
  return (
    <section className="bg-[#F0ECFF] py-24 md:py-32">
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
                {pkg.featured && pkg.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-accent text-brand-bg-dark text-xs font-bold font-body uppercase tracking-wider">
                      ⭐ {pkg.badge}
                    </span>
                  </div>
                )}

                <div className="mb-4">
                  <h3
                    className={`font-headline text-xl mb-2 ${
                      pkg.featured ? "text-brand-primary" : "text-[#18153A]"
                    }`}
                  >
                    {pkg.name}
                  </h3>
                  <p className="text-2xl font-headline text-[#18153A] font-bold">{pkg.price}</p>
                </div>

                <p className="text-[#4A3F8C] font-body text-sm leading-relaxed mb-5">
                  {pkg.descriptor}
                </p>

                <ul className="space-y-2 mb-6 flex-1" role="list">
                  {pkg.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2 text-[#4A3F8C] font-body text-sm"
                    >
                      <span className="text-brand-primary mt-1 flex-shrink-0 text-xs" aria-hidden="true">
                        ✓
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>

                <p className="text-[#9B8FF0] font-body text-xs mb-6 italic">{pkg.microcopy}</p>

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
