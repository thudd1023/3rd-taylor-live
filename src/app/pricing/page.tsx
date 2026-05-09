import type { Metadata } from "next";
import PricingHero from "@/components/pricing/PricingHero";
import PricingAICallout from "@/components/pricing/PricingAICallout";
import PricingAuditCallout from "@/components/pricing/PricingAuditCallout";
import PricingCampaignEngine from "@/components/pricing/PricingCampaignEngine";
import PricingMomentum from "@/components/pricing/PricingMomentum";
import PricingHowItWorks from "@/components/pricing/PricingHowItWorks";
import PricingFinalCTA from "@/components/pricing/PricingFinalCTA";

export const metadata: Metadata = {
  title: "Pricing | Campaign Engine & B2B Marketing Packages | 3rd + Taylor",
  description:
    "Flat-fee Campaign Engine builds, flexible retainers, and rev-share models. No bloated retainers or percentage-of-ad-spend markups.",
};

export default function PricingPage() {
  return (
    <main>
      <PricingHero />
      <PricingAICallout />
      <PricingAuditCallout />
      <PricingCampaignEngine />
      <PricingMomentum />
      <PricingHowItWorks />
      <PricingFinalCTA />
    </main>
  );
}
