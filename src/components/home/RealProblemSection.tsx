"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";

const problemsRaw = [
  "Ads run without a clear buyer journey behind them",
  "Pipeline feels unpredictable — you're not sure where the next opportunity will come from",
  "Every month brings new pressure to hit targets with no clear path forward",
  "You're constantly pivoting and second-guessing what to do next",
  "Leads come in but sales doesn't trust them",
  "Your team is buried in execution with no time to think strategically",
];

export default function RealProblemSection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-[#0D0A1C]">
      <div className="absolute right-[-20%] top-0 w-[600px] h-[600px] rounded-full bg-brand-primary opacity-[0.06] blur-[120px] pointer-events-none" />

      <div className="container-site">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Left column: text */}
          <div>
            <FadeIn>
              <p className="section-label mb-5 text-[#9B8FF0]">The Real Problem</p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="font-headline text-display-lg text-[#EAE6F8] mb-4 text-balance">
                Most marketing teams aren&apos;t struggling because they&apos;re not doing enough.
              </h2>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="text-2xl md:text-3xl font-headline text-brand-light-purple mb-8">
                They&apos;re struggling because nothing is connected.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="space-y-3 text-[#C5C0E8] font-body text-lg leading-relaxed mb-8">
                <p>You&apos;re running campaigns. Testing channels. Launching new initiatives.</p>
                <p>And in the back of your mind, there&apos;s always the question:</p>
                <p className="text-[#EAE6F8] font-semibold text-xl italic">
                  &ldquo;Is any of this actually working?&rdquo;
                </p>
              </div>
            </FadeIn>

            <ul className="space-y-3 mb-10">
              {problemsRaw.map((p, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -32 : 32 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.05 * i }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-accent flex-shrink-0" />
                  <span className="text-[#C5C0E8] font-body leading-relaxed">{p}</span>
                </motion.li>
              ))}
            </ul>

            <FadeIn delay={0.3}>
              <p className="text-[#C5C0E8] font-body text-lg border-l-2 border-brand-primary pl-5 italic">
                This is what happens when everything is running but nothing is working together.
              </p>
            </FadeIn>
          </div>

          {/* Right column: Chaos to Conversions image */}
          <FadeIn delay={0.2} direction="right">
            <div className="relative rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="/images/Chaos to Conversions v2.png"
                alt="Diagram showing transformation from disconnected campaign chaos to consistent conversions"
                width={600}
                height={500}
                className="w-full h-auto object-contain"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
