"use client";

import { useRef, useState } from "react";
import { useScroll, useMotionValueEvent, motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const capabilities = [
  {
    title: "Campaign Strategy",
    body: "We dig into your market, audience, and competitors to craft positioning that cuts through noise and owns space in your buyers' minds.",
    icon: "◎",
    gradient: "from-brand-primary/25 to-brand-primary/5",
    accent: "border-brand-primary/40",
    color: "text-brand-primary",
  },
  {
    title: "Messaging & Creative",
    body: "Bold copy, sharp creative direction, and cohesive campaign identities that turn scrollers into believers.",
    icon: "◈",
    gradient: "from-brand-light-purple/25 to-brand-light-purple/5",
    accent: "border-brand-light-purple/40",
    color: "text-brand-light-purple",
  },
  {
    title: "Paid Media",
    body: "Performance campaigns across LinkedIn, Google, and beyond — built to drive measurable pipeline, not vanity metrics.",
    icon: "◉",
    gradient: "from-brand-accent/15 to-brand-accent/5",
    accent: "border-brand-accent/40",
    color: "text-brand-accent",
  },
  {
    title: "Nurture & Automation",
    body: "Sequences that keep buyers engaged long after the first click — and hand warm, pre-educated leads to sales with full context.",
    icon: "◐",
    gradient: "from-brand-primary/20 to-brand-light-purple/10",
    accent: "border-brand-light-purple/30",
    color: "text-brand-light-purple",
  },
];

const ITEMS = capabilities.length;
const SCROLL_HEIGHT = `${(ITEMS + 1.5) * 100}vh`;

export default function CampaignEngineSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(ITEMS - 1, Math.floor(v * ITEMS));
    setActiveIndex(idx);
  });

  const cap = capabilities[activeIndex];

  return (
    <div ref={containerRef} style={{ height: SCROLL_HEIGHT }} className="relative">
      <div
        className="sticky top-[72px] overflow-hidden bg-[#181438]"
        style={{ height: "calc(100vh - 72px)" }}
      >
        {/* Background accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full bg-brand-primary opacity-[0.06] blur-[120px] pointer-events-none" />

        <div className="h-full flex flex-col">
          {/* Header — always visible */}
          <div className="container-site pt-10 pb-6 shrink-0">
            <p className="section-label mb-3 text-[#9B8FF0]">Introducing Campaign Engine</p>
            <h2 className="font-headline text-display-md text-[#EAE6F8] text-balance max-w-2xl">
              A structured campaign system — developed, built, and launched for you.
            </h2>
            <p className="mt-3 text-[#C5C0E8] font-body max-w-xl text-base">
              Designed to meet buyers where they are, so when someone raises their hand,
              they&apos;re already halfway to yes.
            </p>
            <span className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full border border-brand-accent/30 bg-brand-accent/5 text-brand-accent text-xs font-semibold font-body uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
              Go live in 45 days. Then refine, optimize, and scale from there.
            </span>
          </div>

          {/* Main content area */}
          <div className="container-site flex-1 min-h-0 pb-8 overflow-hidden">
            <div className="flex gap-8 lg:gap-14 h-full">
              {/* Left: accordion list */}
              <div className="w-full lg:w-[500px] shrink-0 h-full overflow-y-auto">
                {capabilities.map((c, i) => {
                  const isActive = i === activeIndex;
                  return (
                    <div
                      key={c.title}
                      className={`border-b cursor-pointer transition-colors duration-200 ${
                        isActive ? "border-brand-primary/30" : "border-white/[0.08]"
                      }`}
                      onClick={() => setActiveIndex(i)}
                    >
                      <div className="flex items-center justify-between py-5 gap-4">
                        <div className="flex items-center gap-3">
                          <span
                            className={`text-lg transition-colors duration-300 ${
                              isActive ? "text-brand-accent" : "text-white/20"
                            }`}
                          >
                            {c.icon}
                          </span>
                          <h3
                            className={`font-headline text-lg md:text-xl transition-colors duration-300 ${
                              isActive ? "text-[#EAE6F8]" : "text-white/45"
                            }`}
                          >
                            {c.title}
                          </h3>
                        </div>
                        <span
                          className={`flex-shrink-0 text-base transition-all duration-300 ${
                            isActive ? "rotate-180 text-brand-accent" : "text-white/20"
                          }`}
                        >
                          ↓
                        </span>
                      </div>

                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.28, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <p className="pb-5 pl-8 text-[#C5C0E8] font-body leading-relaxed text-sm md:text-base">
                              {c.body}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}

                <div className="pt-8">
                  <Link href="/campaign-engine" className="btn-accent text-sm px-5 py-2.5">
                    See Campaign Engine →
                  </Link>
                </div>
              </div>

              {/* Right: animated card — hidden on mobile */}
              <div className="hidden lg:flex flex-1 items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={reduced ? { opacity: 1 } : { opacity: 0, y: 20, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={reduced ? { opacity: 1 } : { opacity: 0, y: -20, scale: 0.97 }}
                    transition={reduced ? { duration: 0 } : { duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                    className={`w-full max-w-md rounded-3xl p-8 md:p-10 bg-gradient-to-br ${cap.gradient} border ${cap.accent}`}
                  >
                    <div className={`text-5xl mb-6 ${cap.color}`}>
                      {cap.icon}
                    </div>
                    <h3 className="font-headline text-2xl text-[#EAE6F8] mb-4">
                      {cap.title}
                    </h3>
                    <p className="text-[#C5C0E8] font-body leading-relaxed text-base">
                      {cap.body}
                    </p>

                    {/* Progress dots */}
                    <div className="mt-8 flex gap-1.5 items-center">
                      {capabilities.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveIndex(i)}
                          aria-label={`Go to ${capabilities[i].title}`}
                          className={`rounded-full transition-all duration-300 ${
                            i === activeIndex
                              ? "w-8 h-1.5 bg-brand-accent"
                              : "w-2 h-1.5 bg-white/20 hover:bg-white/40"
                          }`}
                        />
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Progress bar at bottom of sticky panel */}
          <div className="shrink-0 h-0.5 bg-white/5">
            <motion.div
              className="h-full bg-brand-accent"
              style={{
                width: `${((activeIndex + 1) / ITEMS) * 100}%`,
                transition: "width 0.3s ease",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
