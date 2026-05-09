import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";

const steps = [
  {
    letter: "W",
    label: "Warm the market",
    desc: "Build familiarity before asking for action",
    color: "text-brand-primary",
    border: "border-brand-primary/40",
    bg: "bg-brand-primary/10",
  },
  {
    letter: "T",
    label: "Drive intentional Traffic",
    desc: "Attract the right buyers, not just more clicks",
    color: "text-brand-light-purple",
    border: "border-brand-light-purple/40",
    bg: "bg-brand-light-purple/10",
  },
  {
    letter: "L",
    label: "Build qualified Leads",
    desc: "Turn engagement into real buying signals",
    color: "text-brand-accent",
    border: "border-brand-accent/40",
    bg: "bg-brand-accent/10",
  },
  {
    letter: "C",
    label: "Convert with Context",
    desc: "No more cold form fills — sales gets warm, informed conversations",
    color: "text-[#EAE6F8]",
    border: "border-white/25",
    bg: "bg-white/5",
  },
];

export default function WarmTLCSection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-[#1F1A48]">
      <div className="absolute left-[-15%] bottom-0 w-[500px] h-[500px] rounded-full bg-brand-primary opacity-[0.08] blur-[100px] pointer-events-none" />

      <div className="container-site">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Left: copy */}
          <div>
            <FadeIn>
              <h2 className="font-headline text-display-md text-[#EAE6F8] mb-4 text-balance">
                Built on the Warm T.L.C.™ Method
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-[#C5C0E8] font-body text-lg leading-relaxed mb-10">
                Every Campaign Engine follows a proven system designed to move buyers from cold to
                sales-ready.
              </p>
            </FadeIn>

            <div className="space-y-4">
              {steps.map((step, i) => (
                <FadeIn key={step.letter} delay={0.1 + i * 0.08}>
                  <div
                    className={`flex items-start gap-4 p-4 rounded-xl border ${step.border} ${step.bg} transition-colors`}
                  >
                    <div
                      className={`w-10 h-10 rounded-lg border ${step.border} flex items-center justify-center flex-shrink-0`}
                    >
                      <span className={`font-headline font-bold text-lg ${step.color}`}>
                        {step.letter}
                      </span>
                    </div>
                    <div>
                      <p className="font-body font-semibold text-[#EAE6F8] text-sm">{step.label}</p>
                      <p className="text-[#C5C0E8] font-body text-sm mt-0.5">{step.desc}</p>
                    </div>
                    <span className="ml-auto text-white/20 text-sm font-body">→</span>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.5}>
              <Link href="/campaign-engine#warm-tlc" className="btn-ghost mt-8 inline-flex text-sm px-5 py-2.5">
                See How Warm T.L.C. Works →
              </Link>
            </FadeIn>
          </div>

          {/* Right: framework image */}
          <FadeIn delay={0.2} direction="right">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02]">
              <Image
                src="/images/Warm TLC Overview.png"
                alt="Warm T.L.C. Method Overview"
                width={600}
                height={450}
                className="w-full h-auto object-contain"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
