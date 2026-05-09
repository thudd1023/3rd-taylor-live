"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { useScroll, useMotionValueEvent, motion, AnimatePresence } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const steps = [
  {
    number: 1,
    weeks: "Weeks 1–4",
    title: "Warm the Market",
    tagline: "Build recognition before asking for action.",
    bullets: [
      "Multi-channel visibility",
      "Messaging that reflects real buyer challenges",
      "Repetition that builds familiarity and trust",
    ],
    quote: "I&apos;ve seen them before. They understand the problem.",
    color: "border-brand-primary",
    numBg: "bg-brand-primary/20 text-brand-primary border-brand-primary/40",
  },
  {
    number: 2,
    weeks: "Weeks 3–8",
    title: "Drive Intentional Traffic",
    tagline: "Focus on attracting the right buyers, not just increasing volume.",
    bullets: [
      "Early-signal-based targeting",
      "Paid and organic distribution",
      "Landing pages aligned to buyer stage",
    ],
    quote: "This is relevant. I want to learn more.",
    color: "border-brand-light-purple",
    numBg: "bg-brand-light-purple/20 text-brand-light-purple border-brand-light-purple/40",
  },
  {
    number: 3,
    weeks: "Weeks 5–10",
    title: "Build Qualified Leads",
    tagline: "Turn engagement into real buying signals.",
    bullets: [
      "Nurture sequences that pre-educate buyers",
      "Retargeting",
      "Content that builds credibility and trust",
    ],
    quote: "This is helpful. I trust them.",
    color: "border-brand-accent",
    numBg: "bg-brand-accent/15 text-brand-accent border-brand-accent/40",
  },
  {
    number: 4,
    weeks: "Weeks 8–12",
    title: "Convert with Context",
    tagline: "Deliver sales-ready opportunities with full context.",
    bullets: [
      "Pre-educated leads ready for conversation",
      "Alignment between marketing and sales",
      "Clear next steps for buyers",
    ],
    quote: "I&apos;m ready to talk.",
    color: "border-brand-primary",
    numBg: "bg-brand-primary/20 text-brand-primary border-brand-primary/40",
  },
];

const ITEMS = steps.length;
const SCROLL_HEIGHT = `${(ITEMS + 1.5) * 100}vh`;

export default function CEWarmTLC() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(Math.min(ITEMS - 1, Math.floor(v * ITEMS)));
  });

  const cur = steps[active];

  return (
    <div ref={containerRef} style={{ height: SCROLL_HEIGHT }} className="relative">
      <div
        className="sticky top-[72px] overflow-hidden bg-[#1F1A48]"
        style={{ height: "calc(100vh - 72px)" }}
      >
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] rounded-full bg-brand-primary opacity-[0.07] blur-[120px] pointer-events-none" />

        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="container-site pt-10 pb-6 shrink-0 text-center max-w-3xl mx-auto w-full">
            <p className="section-label justify-center mb-3 text-[#9B8FF0]">The Warm T.L.C. Method</p>
            <h2 className="font-headline text-display-md text-[#EAE6F8] text-balance">
              The system behind every Campaign Engine.
            </h2>
            <p className="mt-3 text-[#C5C0E8] font-body max-w-2xl mx-auto">
              Campaign Engine isn&apos;t built as a linear funnel. It&apos;s a coordinated system designed around how buyers actually move — through a journey that&apos;s more rollercoaster than straight line.
            </p>
          </div>

          {/* Two-column layout */}
          <div className="container-site flex-1 min-h-0 pb-6 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-10 h-full">

              {/* Left: steps accordion — auto-advances on scroll */}
              <div className="h-full overflow-y-auto">
                {steps.map((step, i) => {
                  const isActive = i === active;
                  return (
                    <div
                      key={step.number}
                      className={`border-b cursor-pointer transition-colors duration-200 ${
                        isActive ? `border-l-2 pl-4 ${step.color}` : "border-white/[0.08]"
                      }`}
                      style={{ borderBottomColor: isActive ? "rgba(255,255,255,0.12)" : undefined }}
                      onClick={() => setActive(i)}
                    >
                      <div className="flex items-center gap-4 py-4">
                        <span className={`w-7 h-7 rounded-full border flex items-center justify-center text-xs font-bold font-headline flex-shrink-0 ${step.numBg}`}>
                          {step.number}
                        </span>
                        <div className="flex-1 min-w-0">
                          <p className={`text-[10px] font-semibold uppercase tracking-widest font-body mb-0.5 ${isActive ? "text-[#9B8FF0]" : "text-white/25"}`}>
                            {step.weeks}
                          </p>
                          <h3 className={`font-headline text-base md:text-lg transition-colors duration-300 ${isActive ? "text-[#EAE6F8]" : "text-white/40"}`}>
                            {step.title}
                          </h3>
                        </div>
                        <span className={`flex-shrink-0 text-sm transition-all duration-300 ${isActive ? "rotate-180 text-brand-accent" : "text-white/20"}`}>
                          ↓
                        </span>
                      </div>

                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="pb-5 pl-11">
                              <p className="text-[#C5C0E8] font-body text-sm italic mb-3">{step.tagline}</p>
                              <ul className="space-y-1.5 mb-4">
                                {step.bullets.map((b) => (
                                  <li key={b} className="flex items-start gap-2 text-[#C5C0E8] font-body text-sm">
                                    <span className="mt-1.5 w-1 h-1 rounded-full bg-brand-accent flex-shrink-0" />
                                    {b}
                                  </li>
                                ))}
                              </ul>
                              <div className="border-l-2 border-brand-accent/50 pl-3 py-1 bg-white/[0.03] rounded-r-lg">
                                <p className="text-[#C5C0E8] font-body text-sm italic">
                                  <span className="text-brand-accent font-semibold">Buyer mindset: </span>
                                  &ldquo;
                                  <span dangerouslySetInnerHTML={{ __html: step.quote }} />
                                  &rdquo;
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}

                <p className="text-brand-accent font-headline text-base mt-6">
                  This is what turns disconnected activity into pipeline.
                </p>
              </div>

              {/* Right: Buyer Rollercoaster image — always visible */}
              <div className="hidden lg:flex items-center justify-center h-full overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={reduced ? { opacity: 1 } : { opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={reduced ? { opacity: 1 } : { opacity: 0, scale: 0.98 }}
                    transition={reduced ? { duration: 0 } : { duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full max-w-lg"
                  >
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03]">
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1F1A48]/60 to-transparent pointer-events-none z-10" />
                      <Image
                        src="/images/Buyer Rollercoaster.png"
                        alt="The Buyer Rollercoaster — how B2B buyers actually move through the purchase journey"
                        width={600}
                        height={450}
                        className="w-full h-auto object-contain"
                      />
                      <div className="absolute bottom-4 left-4 right-4 z-20">
                        <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold font-body ${cur.numBg} border`}>
                          Step {cur.number}: {cur.title}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Section progress bar */}
          <div className="shrink-0 h-0.5 bg-white/5">
            <motion.div
              className="h-full bg-brand-accent"
              style={{ width: `${((active + 1) / ITEMS) * 100}%`, transition: "width 0.3s ease" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
