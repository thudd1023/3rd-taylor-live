import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";

interface AddOn {
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
}

const addOns: AddOn[] = [
  {
    title: "ABM Layer",
    description:
      "Target and convert high-value accounts with coordinated, multi-touch programs built around early signals — identifying the accounts most likely to need what you offer before they&apos;re already evaluating vendors.",
    ctaLabel: "Learn More About the ABM Layer →",
    href: "/solutions/abm",
  },
  {
    title: "Personalized Outbound at Scale",
    description:
      "Extend your campaign with targeted outbound that feels relevant — because it is. We write sequences aligned to your campaign messaging, triggered by early signals in your target market and tailored to each prospect&apos;s role, industry, and buying stage.",
    ctaLabel: "Learn More About Outbound at Scale →",
    href: "/solutions/scale-outbound",
  },
  {
    title: "Momentum Marketing Team",
    description:
      "A flexible, ongoing team to keep campaigns moving and pipeline growing after your Campaign Engine engagement.",
    ctaLabel: "See How Momentum Works →",
    href: "/add-on-services#retained",
  },
];

export default function CEAddOns() {
  return (
    <section className="bg-[#07050E] py-24 md:py-32">
      <div className="container-site">
        <FadeIn className="text-center mb-4">
          <p className="section-label justify-center mb-4">Extend Your Campaign Engine</p>
          <h2 className="font-headline text-display-md text-[#EAE6F8] text-balance">
            Want to take your Campaign Engine further?
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-[#C5C0E8] font-body text-lg leading-relaxed text-center max-w-2xl mx-auto mt-4 mb-14">
            For teams ready to build a more advanced system, these services integrate directly into
            your Campaign Engine engagement.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {addOns.map((addOn, i) => (
            <FadeIn key={addOn.title} delay={0.1 * i}>
              <div className="flex flex-col h-full bg-white/[0.04] border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors">
                <h3 className="font-headline text-lg text-[#EAE6F8] mb-3">{addOn.title}</h3>
                <p
                  className="text-[#C5C0E8] font-body text-sm leading-relaxed flex-1 mb-6"
                  dangerouslySetInnerHTML={{ __html: addOn.description }}
                />
                <Link
                  href={addOn.href}
                  className="text-brand-accent font-body text-sm font-semibold hover:underline transition-colors"
                >
                  {addOn.ctaLabel}
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
