"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function CEHero() {
  const heroRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const blobY = useTransform(scrollYProgress, [0, 1], [0, -140]);

  const nextMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1);
  const month = nextMonth.toLocaleString("default", { month: "long", year: "numeric" });

  const eyebrowAnim = reduced
    ? {}
    : { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 } };
  const h1Anim = reduced
    ? {}
    : { initial: { opacity: 0, y: 52 }, animate: { opacity: 1, y: 0 } };
  const subheadAnim = reduced
    ? {}
    : { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } };
  const ctaAnim = reduced
    ? {}
    : { initial: { opacity: 0, y: 22 }, animate: { opacity: 1, y: 0 } };
  const microcopyAnim = reduced
    ? {}
    : { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 } };

  return (
    <section
      ref={heroRef}
      className="relative min-h-[88vh] flex items-center overflow-hidden bg-[#07050E]"
    >
      {/* Abstract gradient blobs + grid background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          style={{ y: blobY }}
          className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] rounded-full bg-brand-primary opacity-[0.18] blur-[120px]"
        />
        <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-brand-light-purple opacity-[0.10] blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[40%] w-[400px] h-[400px] rounded-full bg-brand-accent opacity-[0.05] blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container-site relative z-10 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            {...eyebrowAnim}
            transition={reduced ? { duration: 0 } : { duration: 0.5, ease: "easeOut", delay: 0.3 }}
            className="section-label mb-5 justify-center text-[#9B8FF0]"
          >
            Flagship Offering
          </motion.p>

          <motion.h1
            {...h1Anim}
            transition={
              reduced ? { duration: 0 } : { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.5 }
            }
            className="font-headline text-display-xl text-[#EAE6F8] mb-7 text-balance"
          >
            From Scattered Campaigns to a System That Drives Pipeline
          </motion.h1>

          <motion.p
            {...subheadAnim}
            transition={
              reduced ? { duration: 0 } : { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.7 }
            }
            className="text-lg text-[#C5C0E8] font-body max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Campaign Engine gives B2B teams a clear path from idea to execution. In 45 days, we
            build and launch a connected campaign system designed to generate pipeline and show
            measurable results.
          </motion.p>

          <motion.div
            {...ctaAnim}
            transition={
              reduced ? { duration: 0 } : { duration: 0.55, ease: "easeOut", delay: 0.85 }
            }
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link
              href="/campaign-engine#get-started"
              className="btn-accent px-7 py-3.5 text-base"
            >
              Reserve Your Campaign Engine
            </Link>
            <Link href="/gtm-scan" className="btn-ghost px-7 py-3.5 text-base">
              Get a Free GTM Scan
            </Link>
          </motion.div>

          <motion.p
            {...microcopyAnim}
            transition={
              reduced ? { duration: 0 } : { duration: 0.5, ease: "easeOut", delay: 1.05 }
            }
            className="mt-5 text-sm text-[#9B8FF0] font-body"
          >
            Now booking Campaign Engine builds for {month}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
