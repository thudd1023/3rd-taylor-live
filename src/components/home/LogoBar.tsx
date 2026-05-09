import { FadeIn } from "@/components/ui/FadeIn";

const logos = [
  "LogiAnalytics",
  "Knowland",
  "VTS",
  "egnite Health",
  "Global Payments",
  "Harland Clarke",
  "AT&T",
];

export default function LogoBar() {
  const doubled = [...logos, ...logos];

  return (
    <section className="py-16 border-y border-white/[0.07] bg-[#0D0A1C]">
      <FadeIn className="container-site mb-10">
        <p className="text-center text-sm text-[#9B8FF0] font-body uppercase tracking-widest">
          Our marketers have driven results for some of the world&apos;s leading B2B brands.
        </p>
      </FadeIn>

      <div className="relative overflow-hidden">
        {/* fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#0D0A1C] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#0D0A1C] to-transparent pointer-events-none" />

        <div className="flex gap-0 animate-marquee whitespace-nowrap w-max">
          {doubled.map((name, i) => (
            <div
              key={i}
              className="inline-flex items-center px-10 text-[#C5C0E8] font-headline font-bold text-xl tracking-tight select-none"
            >
              <span>{name}</span>
              <span className="ml-10 text-[#9B8FF0]/40">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
