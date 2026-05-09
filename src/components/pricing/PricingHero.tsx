"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function PricingHero() {
  const heroRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const blobY = useTransform(scrollYProgress, [0, 1], [0, -120]);

  const eyebrowAnim = reduced ? {} : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };
  const h1Anim = reduced ? {} : { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 } };
  const subAnim = reduced ? {} : { initial: { opacity: 0, y: 28 }, animate: { opacity: 1, y: 0 } };
  const ctaAnim = reduced ? {} : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };

  return (
    <section
      ref={heroRef}
      className="relative min-h-[72vh] flex items-center overflow-hidden bg-[#07050E]"
    >
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          style={{ y: blobY }}
          className="absolute top-[-15%] left-[-8%] w-[600px] h-[600px] rounded-full bg-brand-primary opacity-[0.15] blur-[120px]"
        />
        <div className="absolute top-[20%] right-[-8%] w-[400px] h-[400px] rounded-full bg-brand-light-purple opacity-[0.08] blur-[100px]" />
        <div className="absolute bottom-0 left-[45%] w-[350px] h-[350px] rounded-full bg-brand-accent opacity-[0.04] blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container-site relative z-10 py-24 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            {...eyebrowAnim}
            transition={reduced ? { duration: 0 } : { duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className="section-label mb-5 justify-center text-[#9B8FF0]"
          >
            Transparent Pricing
          </motion.p>

          <motion.h1
            {...h1Anim}
            transition={reduced ? { duration: 0 } : { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay: 0.35 }}
            className="font-headline text-display-xl text-white mb-6 text-balance"
          >
            Pricing That Fits Your Growth Stage
          </motion.h1>

          <motion.p
            {...subAnim}
            transition={reduced ? { duration: 0 } : { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay: 0.5 }}
            className="text-lg text-white/80 font-body max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            We ditched the bloated retainers, ad-spend markups, and vague deliverables. Our pricing
            is built for results — not red tape.
          </motion.p>

          <motion.div
            {...ctaAnim}
            transition={reduced ? { duration: 0 } : { duration: 0.5, ease: "easeOut", delay: 0.65 }}
          >
            <Link href="#get-started" className="btn-accent px-8 py-3.5 text-base">
              Book a Discovery Call
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
