"use client";

import { useRef, useState } from "react";
import { useScroll, useMotionValueEvent, motion, AnimatePresence } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const items = [
  {
    title: "Campaign Strategy & Structure",
    badge: null as string | null,
    bullets: [
      "Offer development and campaign angle",
      "ICP segmentation and targeting strategy",
      "Messaging hierarchy and narrative flow",
      "Channel selection and sequencing plan",
    ],
    icon: "◎",
    color: "from-brand-primary/20 to-brand-primary/5",
    border: "border-brand-primary/40",
    accent: "text-brand-primary",
  },
  {
    title: "Messaging & Creative System",
    badge: null as string | null,
    bullets: [
      "Campaign narrative and messaging arc",
      "Ad copy across platforms",
      "Landing page messaging and structure",
      "Email and nurture sequences",
      "Creative direction and asset briefs",
    ],
    icon: "◈",
    color: "from-brand-light-purple/20 to-brand-light-purple/5",
    border: "border-brand-light-purple/40",
    accent: "text-brand-light-purple",
  },
  {
    title: "Campaign Build & Launch",
    badge: null as string | null,
    bullets: [
      "Paid media setup (LinkedIn, Google, and more)",
      "Landing page builds or optimization",
      "Retargeting campaign setup",
      "Conversion paths and calls to action",
      "Campaign deployment across all channels",
    ],
    icon: "◉",
    color: "from-brand-accent/15 to-brand-accent/5",
    border: "border-brand-accent/40",
    accent: "text-brand-accent",
  },
  {
    title: "Automation & Tracking",
    badge: null as string | null,
    bullets: [
      "Marketing automation workflow buildout",
      "Lead scoring and routing logic",
      "CRM integration and tracking",
      "Attribution and reporting setup",
    ],
    icon: "◐",
    color: "from-brand-primary/20 to-brand-light-purple/10",
    border: "border-brand-light-purple/30",
    accent: "text-brand-light-purple",
  },
  {
    title: "Sales Enablement & Handoff",
    badge: "Full Engagement only" as string | null,
    bullets: [
      "Sales playbooks tied to campaign engagement",
      "Messaging and follow-up frameworks",
      "Stakeholder interviews to identify GTM gaps",
      "Internal training for alignment",
    ],
    icon: "◑",
    color: "from-brand-primary/25 to-brand-primary/8",
    border: "border-brand-primary/40",
    accent: "text-brand-primary",
  },
];

const ITEMS = items.length;
const SCROLL_HEIGHT = `${(ITEMS + 1.5) * 100}vh`;

export default function CEWhatYouGet() {
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

  const cur = items[active];

  return (
    <div ref={containerRef} style={{ height: SCROLL_HEIGHT }} className="relative">
      <div
        className="sticky top-[72px] overflow-hidden bg-[#181438]"
        style={{ height: "calc(100vh - 72px)" }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full bg-brand-primary opacity-[0.06] blur-[100px] pointer-events-none" />

        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="container-site pt-10 pb-5 shrink-0">
            <p className="section-label mb-3 text-[#9B8FF0]">What You Get</p>
            <h2 className="font-headline text-display-md text-[#EAE6F8] text-balance max-w-2xl">
              A fully executed campaign system — not a strategy you have to figure out on your own.
            </h2>
          </div>

          {/* Content */}
          <div className="container-site flex-1 min-h-0 pb-8 overflow-hidden">
            <div className="flex gap-8 lg:gap-14 h-full">
              {/* Left: accordion list — auto-advances on scroll, clickable too */}
              <div className="w-full lg:w-[480px] shrink-0 h-full overflow-y-auto">
                {items.map((item, i) => {
                  const isActive = i === active;
                  return (
                    <div
                      key={item.title}
                      className={`border-b cursor-pointer transition-colors duration-200 ${
                        isActive ? "border-brand-primary/30" : "border-white/[0.08]"
                      }`}
                      onClick={() => setActive(i)}
                    >
                      <div className="flex items-center justify-between py-4 gap-4">
                        <div className="flex items-center gap-3">
                          <span className={`text-base transition-colors duration-300 ${isActive ? item.accent : "text-white/20"}`}>
                            {item.icon}
                          </span>
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className={`font-headline text-base md:text-lg transition-colors duration-300 ${isActive ? "text-[#EAE6F8]" : "text-white/40"}`}>
                              {item.title}
                            </h3>
                            {item.badge && (
                              <span className="hidden sm:inline text-[10px] px-2 py-0.5 rounded-full border border-brand-accent/30 text-brand-accent font-body font-semibold">
                                {item.badge}
                              </span>
                            )}
                          </div>
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
                            <ul className="pb-4 pl-7 space-y-1.5">
                              {item.bullets.map((b) => (
                                <li key={b} className="flex items-start gap-2 text-[#C5C0E8] font-body text-sm">
                                  <span className="mt-1.5 w-1 h-1 rounded-full bg-brand-accent flex-shrink-0" />
                                  {b}
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              {/* Right: animated detail card */}
              <div className="hidden lg:flex flex-1 items-center justify-center h-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={reduced ? { opacity: 1 } : { opacity: 0, y: 24, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={reduced ? { opacity: 1 } : { opacity: 0, y: -24, scale: 0.97 }}
                    transition={reduced ? { duration: 0 } : { duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className={`w-full max-w-md rounded-3xl p-8 md:p-10 bg-gradient-to-br ${cur.color} border ${cur.border}`}
                  >
                    <div className={`text-4xl mb-5 ${cur.accent}`}>{cur.icon}</div>
                    <h3 className="font-headline text-2xl text-[#EAE6F8] mb-2">{cur.title}</h3>
                    {cur.badge && (
                      <span className="inline-block mb-4 text-xs px-2.5 py-1 rounded-full border border-brand-accent/40 text-brand-accent font-body font-semibold">
                        {cur.badge}
                      </span>
                    )}
                    <ul className="space-y-2.5 mt-4">
                      {cur.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2.5">
                          <svg
                            className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                            aria-hidden="true"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-[#C5C0E8] font-body text-sm leading-relaxed">{b}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 flex gap-1.5">
                      {items.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setActive(i)}
                          aria-label={`Go to ${items[i].title}`}
                          className={`rounded-full transition-all duration-300 ${
                            i === active ? "w-8 h-1.5 bg-brand-accent" : "w-2 h-1.5 bg-white/20 hover:bg-white/40"
                          }`}
                        />
                      ))}
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
