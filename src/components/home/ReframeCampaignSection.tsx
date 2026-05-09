import { FadeIn } from "@/components/ui/FadeIn";

const requirements = [
  "A clear messaging arc",
  "Intentional sequencing across channels",
  "The right mix of paid, content, and nurture",
  "Someone to connect it all together",
];

export default function ReframeCampaignSection() {
  return (
    <section className="py-24 md:py-32 bg-[#121028] border-y border-white/[0.06]">
      <div className="container-site">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center max-w-6xl mx-auto">
          {/* Left: text */}
          <div>
            <FadeIn>
              <h2 className="font-headline text-display-md text-[#EAE6F8] mb-6 text-balance">
                What&apos;s a campaign, anyway?
              </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="space-y-4 text-[#C5C0E8] font-body leading-relaxed text-base md:text-lg">
                <p>
                  Most B2B teams think of a campaign as a single push — a set of ads, an email
                  blast, a one-off announcement.
                </p>
                <p>But that&apos;s not how buyers actually buy.</p>
                <p>
                  They research, revisit, and self-educate across multiple channels before they
                  ever talk to sales. The buying journey isn&apos;t a straight line — it&apos;s a
                  rollercoaster of decisions, detours, and discoveries.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Right: callout card */}
          <div>
            <FadeIn delay={0.15} direction="right">
              <div className="bg-brand-primary/10 border border-brand-primary/30 rounded-2xl p-8 md:p-10">
                <p className="font-headline text-xl text-[#EAE6F8] mb-6">
                  A campaign isn&apos;t a tactic. It&apos;s a complete system that moves buyers forward.
                </p>
                <p className="text-[#C5C0E8] font-body mb-6">It requires:</p>
                <ul className="space-y-3 mb-8">
                  {requirements.map((r, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-brand-accent/20 border border-brand-accent/40 flex items-center justify-center flex-shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                      </span>
                      <span className="text-[#C5C0E8] font-body">{r}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-[#C5C0E8] font-body text-sm italic">
                  That&apos;s where most teams get stuck. And that&apos;s exactly what we fix.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
