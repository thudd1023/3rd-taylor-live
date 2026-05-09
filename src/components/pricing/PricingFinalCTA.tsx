"use client";

import { useEffect } from "react";
import { FadeIn } from "@/components/ui/FadeIn";

declare global {
  interface Window {
    hbspt: {
      forms: {
        create: (config: {
          region: string;
          portalId: string;
          formId: string;
          target: string;
        }) => void;
      };
    };
  }
}

function HubSpotForm() {
  useEffect(() => {
    const scriptId = "hs-forms-script-pricing";
    if (document.getElementById(scriptId)) {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "na1",
          portalId: "YOUR_PORTAL_ID",
          formId: "0075ae18-9ddb-4238-9b7b-388f2152061d",
          target: "#hs-form-container-pricing",
        });
      }
      return;
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.async = true;
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "na1",
          portalId: "YOUR_PORTAL_ID",
          formId: "0075ae18-9ddb-4238-9b7b-388f2152061d",
          target: "#hs-form-container-pricing",
        });
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div
      id="hs-form-container-pricing"
      className="[&_.hs-form]:font-body [&_input]:bg-white [&_input]:border [&_input]:border-[#D4CEFF] [&_input]:rounded-lg [&_input]:text-[#18153A] [&_input]:px-4 [&_input]:py-2.5 [&_input]:w-full [&_input]:mb-3 [&_input:focus]:outline-none [&_input:focus]:border-brand-primary [&_.hs-button]:bg-brand-accent [&_.hs-button]:text-[#09070E] [&_.hs-button]:font-semibold [&_.hs-button]:font-body [&_.hs-button]:w-full [&_.hs-button]:py-3 [&_.hs-button]:rounded-lg [&_.hs-button]:mt-2 [&_.hs-button]:cursor-pointer [&_label]:text-[#4A3F8C] [&_label]:text-sm [&_label]:font-body [&_label]:mb-1 [&_label]:block [&_.hs-error-msg]:text-red-500 [&_.hs-error-msg]:text-xs [&_.hs-error-msg]:mt-1"
    />
  );
}

export default function PricingFinalCTA() {
  return (
    <section id="get-started" className="bg-[#F6F4FF] py-24 md:py-32">
      <div className="container-site">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start max-w-5xl mx-auto">
          {/* Left */}
          <FadeIn direction="left">
            <div>
              <p className="section-label mb-4 text-brand-primary">Let&apos;s Talk</p>
              <h2 className="font-headline text-display-md text-[#18153A] mb-5 text-balance">
                Ready to shorten the path from idea to impact?
              </h2>
              <p className="text-[#4A3F8C] font-body text-lg leading-relaxed">
                Tell us about your goals and we&apos;ll recommend the right starting point.
              </p>
            </div>
          </FadeIn>

          {/* Right: form */}
          <FadeIn delay={0.15} direction="right">
            <div className="bg-white border border-[#D4CEFF] rounded-2xl p-8 shadow-sm">
              <HubSpotForm />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
