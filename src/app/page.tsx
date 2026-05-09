import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import LogoBar from "@/components/home/LogoBar";
import RealProblemSection from "@/components/home/RealProblemSection";
import ReframeCampaignSection from "@/components/home/ReframeCampaignSection";
import CampaignEngineSection from "@/components/home/CampaignEngineSection";
import WarmTLCSection from "@/components/home/WarmTLCSection";
import OutcomesSection from "@/components/home/OutcomesSection";
import ZoneShift from "@/components/home/ZoneShift";
import PackagesSection from "@/components/home/PackagesSection";
import ResultsSection from "@/components/home/ResultsSection";
import FinalCTASection from "@/components/home/FinalCTASection";
import FAQSection from "@/components/home/FAQSection";

export const metadata: Metadata = {
  title: "B2B Campaign Execution for Lean Marketing Teams | 3rd + Taylor",
  description:
    "3rd + Taylor designs and launches end-to-end B2B campaigns that move buyers from first touch to pipeline. Campaign Engine — built and live in 45 days.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <LogoBar />
      <RealProblemSection />
      <ReframeCampaignSection />
      <CampaignEngineSection />
      <WarmTLCSection />
      <OutcomesSection />
      <ZoneShift />
      <ResultsSection />
      <PackagesSection />
      <FinalCTASection />
      <FAQSection />
    </>
  );
}
