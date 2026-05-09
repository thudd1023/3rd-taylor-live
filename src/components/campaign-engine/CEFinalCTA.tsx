"use client";

import { useEffect } from "react";
import Link from "next/link";
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
    const scriptId = "hs-forms-script-ce";
    if (document.getElementById(scriptId)) {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "na1",
          portalId: "YOUR_PORTAL_ID",
          formId: "024bc07a-d14b-445d-9354-270073879f8e",
          target: "#hs-form-container-ce",
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
          formId: "024bc07a-d14b-445d-9354-270073879f8e",
          target: "#hs-form-container-ce",
        });
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div
      id="hs-form-container-ce"
      className="[&_.hs-form]:font-body [&_input]:bg-white [&_input]:border [&_input]:border-[#D4CEFF] [&_input]:rounded-lg [&_input]:text-[#18153A] [&_input]:px-4 [&_input]:py-2.5 [&_input]:w-full [&_input]:mb-3 [&_input:focus]:outline-none [&_input:focus]:border-brand-primary [&_.hs-button]:btn-accent [&_.hs-button]:w-full [&_.hs-button]:mt-2 [&_label]:text-[#4A3F8C] [&_label]:text-sm [&_label]:font-body [&_label]:mb-1 [&_label]:block"
    />
  );
}

export default function CEFinalCTA() {
  return (
    <section id="get-started" className="bg-[#F6F4FF] py-24 md:py-32">
      <div className="container-site">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center max-w-5xl mx-auto">
          {/* Left: copy */}
          <FadeIn direction="left">
            <div>
              <h2 className="font-headline text-display-md text-[#18153A] mb-5 text-balance">
                Ready to kick off your Campaign Engine?
              </h2>
              <p className="text-[#4A3F8C] font-body text-lg leading-relaxed mb-8">
                Stop piecing together tactics and start running a system built to generate real
                pipeline.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <Link
                  href="#get-started"
                  className="inline-flex items-center justify-center bg-brand-accent text-[#09070E] font-semibold font-body px-6 py-3 rounded-lg hover:brightness-110 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
                >
                  Reserve Your Campaign Engine
                </Link>
                <Link
                  href="/gtm-scan"
                  className="inline-flex items-center justify-center border border-brand-primary text-brand-primary font-semibold font-body px-6 py-3 rounded-lg hover:bg-brand-primary hover:text-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
                >
                  Get a Free GTM Scan
                </Link>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl border border-brand-primary/20 bg-brand-primary/5">
                <span className="text-brand-primary text-lg" aria-hidden="true">✦</span>
                <p className="text-[#4A3F8C] font-body text-sm">
                  Not sure where to start?{" "}
                  <Link
                    href="/gtm-scan"
                    className="text-brand-primary hover:underline font-semibold"
                  >
                    Try a Free GTM Scan →
                  </Link>
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Right: form */}
          <FadeIn delay={0.15} direction="right">
            <div className="bg-white border border-[#D4CEFF] rounded-2xl p-8">
              <HubSpotForm />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
