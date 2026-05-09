import { FadeIn } from "@/components/ui/FadeIn";

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className="flex-shrink-0 mt-0.5"
    >
      <circle cx="10" cy="10" r="10" fill="#C4E61A" fillOpacity="0.15" />
      <path
        d="M6 10.5L8.5 13L14 7.5"
        stroke="#C4E61A"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function CEWhatChanges() {
  return (
    <section className="bg-[#121028] py-24 md:py-32">
      <div className="container-site">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <p className="text-[#C5C0E8] font-body text-base leading-relaxed mb-10">
              This isn&apos;t just about launching a campaign. It&apos;s about what happens once
              it&apos;s live.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="font-headline text-display-md text-[#EAE6F8] text-center mb-10">
              What Changes After Campaign Engine
            </h2>
          </FadeIn>

          <ul className="space-y-4 text-left inline-flex flex-col" role="list">
            {[
              "You stop guessing what to do next",
              "You can clearly show what’s driving pipeline",
              "Your team operates with focus instead of chaos",
              "Campaigns become repeatable instead of one-off efforts",
            ].map((item, i) => (
              <FadeIn key={item} delay={0.15 + i * 0.1}>
                <li className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-[#EAE6F8] font-body text-base leading-relaxed">{item}</span>
                </li>
              </FadeIn>
            ))}
          </ul>

          <FadeIn delay={0.6}>
            <p className="font-headline text-xl text-[#EAE6F8] text-center mt-10">
              The goal isn&apos;t just activity. It&apos;s predictable pipeline.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
