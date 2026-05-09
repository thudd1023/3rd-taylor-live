"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";

const outcomes = [
  {
    title: "Stronger Pipeline Quality",
    body: "No more vanity metrics. We help you attract and convert the right buyers through better targeting, clearer messaging, and campaigns built to qualify — not just capture.",
    icon: "◈",
  },
  {
    title: "Shorter Sales Cycles",
    body: "We pre-educate buyers before they ever speak to sales. Conversations start further along and move faster.",
    icon: "◎",
  },
  {
    title: "Better Alignment Across Teams",
    body: "We connect marketing, sales, and leadership around a unified GTM motion so everything works together.",
    icon: "◉",
  },
  {
    title: "More Effective Campaigns",
    body: "We build campaigns around real buyer behavior, then continuously refine what's working.",
    icon: "◐",
  },
  {
    title: "Measurable Revenue Impact",
    body: "We track what actually drives growth — pipeline contribution, conversion lift, and revenue outcomes.",
    icon: "◑",
  },
];

export default function OutcomesSection() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-32 bg-[#272058] border-y border-white/[0.06]">
      <div className="container-site max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="font-headline text-display-md text-[#EAE6F8] mb-4 text-balance max-w-2xl">
            We meet you where you are and take you where you&apos;re ready to go.
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-[#C5C0E8] font-body text-lg leading-relaxed max-w-2xl mb-14">
            Whether you&apos;re building your GTM function or trying to fix what&apos;s not
            working, we focus on outcomes that move your business forward — not just more activity.
          </p>
        </FadeIn>

        <div className="space-y-3">
          {outcomes.map((outcome, i) => {
            const isOpen = active === i;
            return (
              <FadeIn key={outcome.title} delay={0.08 * i}>
                <div
                  className={`rounded-xl border transition-all duration-300 cursor-pointer ${
                    isOpen
                      ? "border-brand-primary/40 bg-brand-primary/[0.08]"
                      : "border-white/[0.08] bg-white/[0.02] hover:border-white/[0.15] hover:bg-white/[0.04]"
                  }`}
                  onClick={() => setActive(isOpen ? null : i)}
                >
                  <div className="flex items-center justify-between px-6 py-5 gap-4">
                    <div className="flex items-center gap-4">
                      <span
                        className={`text-xl flex-shrink-0 transition-colors duration-300 ${
                          isOpen ? "text-brand-accent" : "text-white/25"
                        }`}
                      >
                        {outcome.icon}
                      </span>
                      <h3
                        className={`font-headline text-lg transition-colors duration-300 ${
                          isOpen ? "text-[#EAE6F8]" : "text-[#C5C0E8]"
                        }`}
                      >
                        {outcome.title}
                      </h3>
                    </div>
                    <span
                      className={`text-lg flex-shrink-0 transition-all duration-300 ${
                        isOpen ? "rotate-180 text-brand-accent" : "text-white/20"
                      }`}
                    >
                      ↓
                    </span>
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 text-[#C5C0E8] font-body leading-relaxed pl-16">
                          {outcome.body}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
