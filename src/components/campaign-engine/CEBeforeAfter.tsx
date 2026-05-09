import { FadeIn } from "@/components/ui/FadeIn";

const before = [
  "Campaigns stall in planning",
  "Channels run independently",
  "Leads trickle in but results are inconsistent",
  "The pressure to deliver pipeline gets bigger and bigger",
];

const after = [
  "You stop guessing what to do next",
  "You can clearly show what's driving pipeline",
  "Your team operates with focus instead of chaos",
  "Campaigns become repeatable instead of one-off efforts",
];

export default function CEBeforeAfter() {
  return (
    <section className="bg-[#0D0A1C] py-24 md:py-32 relative overflow-hidden">
      <div className="absolute left-[-10%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand-primary opacity-[0.05] blur-[100px] pointer-events-none" />

      <div className="container-site">
        <FadeIn className="text-center mb-14 max-w-3xl mx-auto">
          <h2 className="font-headline text-display-md text-[#EAE6F8] text-balance">
            Most teams aren&apos;t short on ideas. They&apos;re short on execution that actually works.
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-14">
          {/* Before */}
          <FadeIn delay={0.1} direction="left">
            <div className="rounded-2xl border border-red-400/15 bg-red-500/[0.04] p-8 h-full">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-red-400/60" />
                <p className="text-red-300/70 text-xs font-semibold uppercase tracking-widest font-body">
                  Before Campaign Engine
                </p>
              </div>
              <ul className="space-y-4">
                {before.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-red-400/50 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-[#C5C0E8] font-body leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* After */}
          <FadeIn delay={0.2} direction="right">
            <div className="rounded-2xl border border-brand-accent/25 bg-brand-accent/[0.04] p-8 h-full">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-brand-accent" />
                <p className="text-brand-accent text-xs font-semibold uppercase tracking-widest font-body">
                  After Campaign Engine
                </p>
              </div>
              <ul className="space-y-4">
                {after.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#EAE6F8] font-body leading-relaxed font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.3} className="text-center">
          <p className="font-headline text-xl md:text-2xl text-[#EAE6F8]">
            The goal isn&apos;t just activity. It&apos;s predictable pipeline.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
