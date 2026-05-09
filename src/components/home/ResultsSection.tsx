"use client";

import { useRef, useEffect, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";

const stats = [
  {
    value: 4,
    suffix: "x",
    label: "ROAS for a B2B AdTech company",
    prefix: "",
  },
  {
    value: 426,
    suffix: "%",
    label: "increase in qualified demos booked in 30 days",
    prefix: "",
  },
  {
    value: 16,
    suffix: "K",
    label: "reduction in wasted Google Ad spend in 14 days for a B2B VoIP provider",
    prefix: "$",
  },
  {
    value: 15,
    suffix: "M",
    label: "in marketing-sourced revenue for a financial services MarTech company",
    prefix: "$",
  },
];

function CountUp({
  value,
  prefix,
  suffix,
}: {
  value: number;
  prefix: string;
  suffix: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 60, damping: 18 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) motionVal.set(value);
  }, [inView, motionVal, value]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (v) => setDisplay(Math.round(v)));
    return unsubscribe;
  }, [spring]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

export default function ResultsSection() {
  return (
    <section className="py-24 md:py-32 bg-[#EAE5FF] relative overflow-hidden">
      <div className="container-site">
        <FadeIn className="text-center mb-16">
          <h2 className="font-headline text-display-md text-[#18153A] text-balance max-w-xl mx-auto">
            Your partner for revenue-rising results.
          </h2>
        </FadeIn>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 max-w-5xl mx-auto">
          {stats.map((stat, i) => (
            <FadeIn key={i} delay={0.1 * i} className="text-center">
              <div className="font-headline text-display-lg bg-gradient-to-r from-brand-primary to-brand-bg-purple bg-clip-text text-transparent mb-3 leading-none">
                <CountUp value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <p className="text-[#4A3F8C] font-body text-sm leading-snug">{stat.label}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
