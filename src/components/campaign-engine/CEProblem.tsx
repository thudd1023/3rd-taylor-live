import { FadeIn } from "@/components/ui/FadeIn";

export default function CEProblem() {
  return (
    <section className="bg-[#0D0A1C] py-24 md:py-32">
      <div className="container-site">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <p className="text-xl text-[#EAE6F8] font-body leading-relaxed mb-6">
              Most teams aren&apos;t short on ideas. They&apos;re short on execution that actually
              works.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="text-lg text-[#C5C0E8] font-body leading-relaxed mb-6">
              Campaigns stall in planning. Channels run independently. Leads trickle in but results
              are inconsistent. And the pressure to deliver pipeline doesn&apos;t go away.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-lg text-[#C5C0E8] font-body leading-relaxed">
              Campaign Engine removes that burden. You get a system that&apos;s{" "}
              <span className="text-[#EAE6F8] font-semibold">
                planned, built, launched, and optimized
              </span>{" "}
              for you — so your team can focus on the work instead of figuring out what to do next.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
