"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// ─── Nav data ────────────────────────────────────────────────────────────────

const solutionsMenu = {
  columns: [
    {
      heading: "Strategy",
      items: [{ label: "Diagnose Growth Gaps", href: "/solutions/diagnose-growth-gaps" }],
    },
    {
      heading: "Pipeline Growth",
      items: [
        { label: "Drive More Qualified Pipeline", href: "/solutions/qualified-pipeline" },
        { label: "Launch a New Product", href: "/solutions/launch-product" },
        { label: "Expand Internationally", href: "/solutions/expand-internationally" },
        { label: "Win Target Accounts (ABM)", href: "/solutions/abm" },
        { label: "Automate and Scale Outbound Prospecting", href: "/solutions/scale-outbound" },
      ],
    },
    {
      heading: "Conversion & Efficiency",
      items: [{ label: "Improve Pipeline Conversion", href: "/solutions/pipeline-conversion" }],
    },
  ],
};

const whoWeServeMenu = {
  columns: [
    {
      heading: "By Role",
      items: [
        { label: "CEOs & Founders", href: "/who-we-serve/ceos-founders" },
        { label: "Marketing Leaders", href: "/who-we-serve/marketing-leaders" },
        { label: "Sales Leaders", href: "/who-we-serve/sales-leaders" },
        { label: "VC Operating Partners", href: "/who-we-serve/vc-operating-partners" },
      ],
    },
    {
      heading: "By Company Type",
      items: [
        { label: "B2B SaaS", href: "/who-we-serve/b2b-saas" },
        { label: "B2B FinTech", href: "/who-we-serve/b2b-fintech" },
        { label: "B2B MedTech", href: "/who-we-serve/b2b-medtech" },
        { label: "B2B AI-Native Tech", href: "/who-we-serve/b2b-ai-native" },
        { label: "Disruptive B2B Tech (Crypto, Blockchain, Web3)", href: "/who-we-serve/disruptive-tech" },
        { label: "Industrial Tech", href: "/who-we-serve/industrial-tech" },
      ],
    },
  ],
};

const workWithUsMenu = [
  { label: "Start with an Audit", href: "/revenue-growth-audit", description: "Uncover your biggest growth gaps" },
  { label: "Launch a Campaign", href: "/campaign-engine#get-started", description: "Full-funnel campaigns built for pipeline" },
  { label: "Retain a Marketing Team", href: "/revenue-growth-audit#get-started", description: "Embedded marketing leadership & execution" },
];

// ─── Mega menu panel ──────────────────────────────────────────────────────────

function MegaMenu({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 z-50"
    >
      <div className="bg-[#0e0c1e] border border-white/10 rounded-2xl shadow-2xl shadow-black/60 overflow-hidden">
        {children}
      </div>
    </motion.div>
  );
}

function ColumnMenu({ data }: { data: typeof solutionsMenu }) {
  return (
    <MegaMenu>
      <div className="flex gap-0 p-6 min-w-[680px]">
        {data.columns.map((col) => (
          <div key={col.heading} className="flex-1 px-4 first:pl-0 last:pr-0 border-r border-white/[0.06] last:border-r-0">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-accent mb-3 font-body">
              {col.heading}
            </p>
            <ul className="space-y-1">
              {col.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block text-sm text-white/70 hover:text-white py-1.5 px-2 rounded-lg hover:bg-white/5 transition-colors font-body"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </MegaMenu>
  );
}

function WorkWithUsDropdown() {
  return (
    <MegaMenu>
      <div className="p-4 w-72">
        {workWithUsMenu.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex flex-col gap-0.5 p-3 rounded-xl hover:bg-white/5 transition-colors group"
          >
            <span className="text-sm font-semibold text-white group-hover:text-brand-light-purple transition-colors font-body">
              {item.label}
            </span>
            <span className="text-xs text-white/50 font-body">{item.description}</span>
          </Link>
        ))}
      </div>
    </MegaMenu>
  );
}

// ─── Nav item with dropdown ───────────────────────────────────────────────────

function NavItem({
  label,
  href,
  children,
}: {
  label: string;
  href?: string;
  children?: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  if (!children) {
    return (
      <Link
        href={href ?? "#"}
        className="text-sm font-medium text-white/70 hover:text-white transition-colors px-1 py-2 font-body whitespace-nowrap"
      >
        {label}
      </Link>
    );
  }

  return (
    <div ref={ref} className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 text-sm font-medium text-white/70 hover:text-white transition-colors px-1 py-2 font-body whitespace-nowrap"
        aria-expanded={open}
      >
        {label}
        <svg
          className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <AnimatePresence>{open && children}</AnimatePresence>
    </div>
  );
}

// ─── Mobile nav ───────────────────────────────────────────────────────────────

function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="fixed inset-0 z-50 bg-brand-bg-dark overflow-y-auto"
        >
          <div className="flex items-center justify-between px-4 h-16 border-b border-white/10">
            <Link href="/" onClick={onClose} className="flex items-center">
              <Image
                src="/images/logo light.svg"
                alt="3rd + Taylor"
                width={140}
                height={12}
                className="h-6 w-auto"
              />
            </Link>
            <button onClick={onClose} className="p-2 text-white/70 hover:text-white">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="px-4 py-6 space-y-1">
            {/* Solutions */}
            <MobileSection title="Solutions">
              {solutionsMenu.columns.map((col) => (
                <div key={col.heading} className="mb-4">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-brand-accent mb-2 font-body">
                    {col.heading}
                  </p>
                  {col.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={onClose}
                      className="block py-2 text-sm text-white/70 hover:text-white font-body"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              ))}
            </MobileSection>

            {/* Who We Serve */}
            <MobileSection title="Who We Serve">
              {whoWeServeMenu.columns.map((col) => (
                <div key={col.heading} className="mb-4">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-brand-accent mb-2 font-body">
                    {col.heading}
                  </p>
                  {col.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={onClose}
                      className="block py-2 text-sm text-white/70 hover:text-white font-body"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              ))}
            </MobileSection>

            {[
              { label: "Campaign Engine", href: "/campaign-engine" },
              { label: "Pricing", href: "/pricing" },
              { label: "Why 3rd + Taylor", href: "/why-us" },
              { label: "Insights", href: "/insights" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="block py-3 text-base font-medium text-white/70 hover:text-white border-b border-white/5 font-body"
              >
                {item.label}
              </Link>
            ))}

            <MobileSection title="Work With Us">
              {workWithUsMenu.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="block py-2 text-sm text-white/70 hover:text-white font-body"
                >
                  {item.label}
                </Link>
              ))}
            </MobileSection>
          </nav>

          <div className="px-4 pb-8 flex flex-col gap-3">
            <Link href="/gtm-scan" onClick={onClose} className="btn-accent w-full text-center">
              Free GTM Scan
            </Link>
            <Link href="/contact" onClick={onClose} className="btn-ghost w-full text-center">
              Let&apos;s Talk
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function MobileSection({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/5">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center justify-between w-full py-3 text-base font-medium text-white/70 hover:text-white font-body"
      >
        {title}
        <svg
          className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden pl-2"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Main Navigation ──────────────────────────────────────────────────────────

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-brand-bg-dark/90 backdrop-blur-xl border-b border-white/[0.06]"
            : "bg-transparent"
        }`}
      >
        <div className="container-site">
          <div className="flex items-center h-16 lg:h-[72px] gap-10 lg:gap-14">
            {/* Logo */}
            <Link href="/" className="shrink-0 flex items-center">
              <Image
                src="/images/logo light.svg"
                alt="3rd + Taylor"
                width={120}
                height={10}
                priority
                className="h-5 w-auto"
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1 flex-1">
              <NavItem label="Solutions">
                <ColumnMenu data={solutionsMenu} />
              </NavItem>

              <NavItem label="Who We Serve">
                <ColumnMenu data={whoWeServeMenu} />
              </NavItem>

              <NavItem label="Campaign Engine" href="/campaign-engine" />
              <NavItem label="Pricing" href="/pricing" />
              <NavItem label="Why 3rd + Taylor" href="/why-us" />

              <NavItem label="Work With Us">
                <WorkWithUsDropdown />
              </NavItem>

              <NavItem label="Insights" href="/insights" />
            </nav>

            {/* CTA buttons */}
            <div className="hidden lg:flex items-center gap-3 shrink-0 ml-auto">
              <Link href="/gtm-scan" className="btn-accent text-sm px-4 py-2">
                Free GTM Scan
              </Link>
              <Link href="/contact" className="btn-ghost text-sm px-4 py-2">
                Let&apos;s Talk
              </Link>
            </div>

            {/* Mobile burger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 text-white/70 hover:text-white"
              aria-label="Open menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
