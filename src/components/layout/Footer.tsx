import Link from "next/link";

const footerColumns = [
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Why 3rd + Taylor", href: "/why-us" },
      { label: "Meet the Founder", href: "/about#founder" },
      { label: "Insights", href: "/insights" },
      { label: "Who We Serve (by role)", href: "/who-we-serve#by-role" },
      { label: "Who We Serve (by industry)", href: "/who-we-serve#by-industry" },
      { label: "FAQs", href: "/faqs" },
    ],
  },
  {
    heading: "Solutions",
    links: [
      { label: "Diagnose Growth Gaps", href: "/solutions/diagnose-growth-gaps" },
      { label: "Drive More Qualified Pipeline", href: "/solutions/qualified-pipeline" },
      { label: "Launch a New Product", href: "/solutions/launch-product" },
      { label: "Expand Internationally", href: "/solutions/expand-internationally" },
      { label: "Improve Pipeline Conversion", href: "/solutions/pipeline-conversion" },
      { label: "Win Target Accounts (ABM)", href: "/solutions/abm" },
      { label: "Scale Outbound Prospecting", href: "/solutions/scale-outbound" },
    ],
  },
  {
    heading: "Products & Engagements",
    links: [
      { label: "Revenue Growth Audit", href: "/revenue-growth-audit" },
      { label: "Campaign Engine", href: "/campaign-engine" },
      { label: "Pricing", href: "/pricing" },
      { label: "Add On Services", href: "/add-on-services" },
      { label: "ABM", href: "/add-on-services#abm" },
      { label: "Personalized Outbound at Scale", href: "/add-on-services#outbound" },
      { label: "Conversion Optimization", href: "/add-on-services#conversion" },
      { label: "Messaging & Positioning", href: "/add-on-services#messaging" },
      { label: "Retained Team", href: "/add-on-services#retained" },
    ],
  },
  {
    heading: "Get Started",
    links: [
      { label: "Start a Campaign Engine Engagement", href: "/campaign-engine#get-started" },
      { label: "Free GTM Scan", href: "/gtm-scan" },
      { label: "Book a Strategy Call", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#06060C] border-t border-white/[0.06]">
      {/* Main footer */}
      <div className="container-site py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="font-headline font-extrabold text-xl text-white">
              3rd + Taylor
            </Link>
            <p className="mt-4 text-sm text-white/50 font-body leading-relaxed max-w-[220px]">
              Marketing built for B2B tech brands that need pipeline, not just presence.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.1em] text-brand-accent mb-4 font-body">
                {col.heading}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 hover:text-white/90 transition-colors font-body"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06]">
        <div className="container-site py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30 font-body">
            © {new Date().getFullYear()} 3rd + Taylor. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {[
              { label: "Terms & Conditions", href: "/terms" },
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Sitemap", href: "/sitemap.xml" },
              { label: "LLMs.txt", href: "/llms.txt" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs text-white/30 hover:text-white/60 transition-colors font-body"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
