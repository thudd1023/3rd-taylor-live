import type { Metadata } from "next";
import CEHero from "@/components/campaign-engine/CEHero";
import CEBeforeAfter from "@/components/campaign-engine/CEBeforeAfter";
import CEWhatYouGet from "@/components/campaign-engine/CEWhatYouGet";
import CEWarmTLC from "@/components/campaign-engine/CEWarmTLC";
import CEPackages from "@/components/campaign-engine/CEPackages";
import CEAddOns from "@/components/campaign-engine/CEAddOns";
import CESocialProof from "@/components/campaign-engine/CESocialProof";
import CEFinalCTA from "@/components/campaign-engine/CEFinalCTA";

export const metadata: Metadata = {
  title: "Campaign Engine | B2B Campaign Execution | 3rd + Taylor",
  description:
    "Launch a connected B2B campaign system in 45 days. Strategy, messaging, creative, paid media, and automation — built and deployed for you.",
};

export default function CampaignEnginePage() {
  return (
    <main>
      <CEHero />
      <CEBeforeAfter />
      <CEWhatYouGet />
      <CEWarmTLC />
      <CEPackages />
      <CEAddOns />
      <CESocialProof />
      <CEFinalCTA />
    </main>
  );
}
