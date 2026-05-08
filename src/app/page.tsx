import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "3rd + Taylor | B2B Tech Marketing Agency",
  description:
    "Marketing built for B2B tech brands that need pipeline, not just presence. Strategy, campaigns, and execution for SaaS, FinTech, MedTech, and AI-native companies.",
};

export default function HomePage() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Glow background */}
      <div className="absolute inset-0 bg-gradient-glow pointer-events-none" />

      <div className="container-site relative z-10 py-24">
        <div className="max-w-4xl">
          <p className="section-label mb-6">B2B Tech Marketing Agency</p>
          <h1 className="font-headline text-display-xl text-white mb-6">
            Marketing that moves{" "}
            <span className="gradient-text">pipeline forward.</span>
          </h1>
          <p className="text-lg text-white/60 font-body max-w-2xl mb-10 leading-relaxed">
            3rd + Taylor builds revenue-generating marketing programs for B2B tech brands — from
            strategy to full-funnel execution. No fluff, no vanity metrics. Just growth.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/gtm-scan" className="btn-accent px-6 py-3 text-base">
              Get Your Free GTM Scan
            </Link>
            <Link href="/contact" className="btn-ghost px-6 py-3 text-base">
              Let's Talk
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
