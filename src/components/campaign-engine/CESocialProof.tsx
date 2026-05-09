import { FadeIn } from "@/components/ui/FadeIn";

interface Testimonial {
  quote: string;
  attribution: string;
  resultTag: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Tiffany brings her vast skills in digital marketing and passion for performance excellence to every project. She has been the harbinger of success and optimization for not only our digital channels, but she also defined and implemented best practices for marketing automation technology. Impact on the team was immediate, quickly diving into all digital channels to connect marketing activities to recognized revenue and growth; increasing lead generation while decreasing CPL.",
    attribution: "Brandy Morton — Director of Demand Generation, Harland Clarke",
    resultTag: "Lead Gen & CPL",
  },
  {
    quote:
      "It’s rare to find someone who is as well rounded as she is. From big picture strategy, to marketing attribution and ROI, to the small creative details, Tiffany is the kind of leader who inspires the whole team.",
    attribution: "Matt Shore — Content Marketer, Validity Inc.",
    resultTag: "Strategy & Execution",
  },
  {
    quote:
      "She is technically proficient with a vast knowledge of marketing techniques. She is also extremely strategic and knows how to use data to predict future results. She can sort through vast amounts of data to get you to the right spot. One of the best marketers I have ever worked with.",
    attribution: "Jeff Hassemer — Founder & CEO, FirestarterMarketing.AI",
    resultTag: "Data-Driven Growth",
  },
];

export default function CESocialProof() {
  return (
    <section className="bg-[#0D0A1C] py-24 md:py-32">
      <div className="container-site">
        <FadeIn className="text-center mb-14">
          <p className="section-label justify-center mb-4">Results</p>
          <h2 className="font-headline text-display-md text-[#EAE6F8] text-balance">
            What the people say.
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <FadeIn key={t.attribution} delay={0.1 * i}>
              <div className="flex flex-col h-full bg-white/[0.04] border border-white/10 rounded-2xl p-8">
                {/* Large opening quote mark */}
                <span
                  className="text-5xl font-headline text-brand-primary/30 leading-none mb-4 select-none"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>

                <p className="text-[#EAE6F8] font-body text-base leading-relaxed flex-1">
                  {t.quote}
                </p>

                <div className="mt-4">
                  <span className="inline-flex items-center px-2 py-1 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-semibold font-body mb-3">
                    {t.resultTag}
                  </span>
                  <p className="text-[#9B8FF0] font-body text-sm">{t.attribution}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
