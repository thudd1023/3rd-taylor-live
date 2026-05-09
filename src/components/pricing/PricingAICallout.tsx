import { FadeIn } from "@/components/ui/FadeIn";

function IconClipboard() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
      <rect x="9" y="3" width="6" height="4" rx="1" />
      <path d="M9 12h6M9 16h4" />
    </svg>
  );
}

function IconLayers() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  );
}

function IconTrendUp() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  );
}

function IconUsers() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

const bullets = [
  {
    Icon: IconClipboard,
    title: "Smarter project management",
    body: "From brief to launch with less overhead and fewer handoff delays.",
  },
  {
    Icon: IconLayers,
    title: "Omni-channel campaigns, faster",
    body: "Turn strategy briefs into fully built, cross-channel campaign systems at speed.",
  },
  {
    Icon: IconTrendUp,
    title: "Relentless optimization",
    body: "Continuous performance tuning across every channel — without adding headcount.",
  },
  {
    Icon: IconUsers,
    title: "Personalization at scale",
    body: "Role-specific, signal-driven messaging that feels bespoke — even at volume.",
  },
];

export default function PricingAICallout() {
  return (
    <section className="bg-[#F0ECFF] py-20 md:py-28">
      <div className="container-site">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="text-center mb-4">
            <p className="section-label justify-center mb-4 text-brand-primary">
              AI-Enhanced, Human-Powered
            </p>
            <h2 className="font-headline text-display-md text-[#18153A] text-balance mb-5">
              Faster time-to-value. Passed directly to you.
            </h2>
            <p className="text-[#4A3F8C] font-body text-lg leading-relaxed max-w-2xl mx-auto">
              Our team uses AI to move faster, deliver better work, and keep pricing lean — so you
              get more done without paying for inefficiency.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 gap-5 mt-12">
            {bullets.map(({ Icon, title, body }, i) => (
              <FadeIn key={title} delay={0.1 * i}>
                <div className="flex gap-4 p-6 rounded-2xl bg-white border border-[#D4CEFF] hover:border-brand-primary/40 transition-colors">
                  <span className="text-brand-primary flex-shrink-0 mt-0.5">
                    <Icon />
                  </span>
                  <div>
                    <h3 className="font-headline text-base text-[#18153A] mb-1">{title}</h3>
                    <p className="text-[#4A3F8C] font-body text-sm leading-relaxed">{body}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
