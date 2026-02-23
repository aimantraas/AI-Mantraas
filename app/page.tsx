"use client";

import { Reveal } from "@/components/reveal";
import { WaitlistForm } from "@/components/waitlist-form";
import { CountdownTimer } from "@/components/countdown-timer";

const steps = [
  { title: "Finds ideal prospects", desc: "Precision ICP filters, firmographics, technographics, and buying intent." },
  { title: "Writes the right message", desc: "Persona-aware outreach with tone, proof, and offer matched to the account." },
  { title: "Follows up automatically", desc: "Adaptive sequencing across email, LinkedIn, and SMS with smart fallbacks." },
  { title: "Books the meeting", desc: "Calendar routing, conflict checks, and instant scheduling handoff to sales." }
];

const launchDate = "2026-03-06T18:35:00Z";

const advantages = [
  "Self-optimizing playbooks tuned to replies, not opens.",
  "Dynamic personalization at scale with live firmographic signals.",
  "Full-loop automation: sourcing → sequencing → scheduling → CRM sync."
];

const comparison = [
  { agency: "Manual list-building; variable quality", saarthi: "Personalised for every single prospect." },
  { agency: "Copy depends on individual writers", saarthi: "Inbox delivered. Every time. No spam." },
  { agency: "Follow-up inconsistency across reps", saarthi: "Your system. Your pipeline. Always." },
  { agency: "Reporting arrives weekly", saarthi: "Runs every day. Never stops. Never forgets." }
];

const platforms = ["HubSpot", "Salesforce", "Zoho", "Slack", "WhatsApp", "Custom API"];

export default function HomePage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-20 px-6 pb-24 pt-16 md:px-10 md:pt-20">
      <section className="relative overflow-hidden rounded-3xl border border-electric-500/30 bg-gradient-to-br from-[#0a1227] via-[#050915] to-[#081020] px-6 py-16 shadow-card backdrop-blur-xl md:px-12 md:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,213,255,0.15),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(80,120,255,0.14),transparent_30%)]" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <Reveal>
            <div className="mx-auto mb-8 flex justify-center">
              <div
                className="relative flex items-center justify-center rounded-2xl border border-electric-400/20 bg-electric-900/40 p-3 shadow-[0_0_30px_rgba(0,212,255,0.15)] backdrop-blur-md"
              >
                <img
                  src="/bglogo.png"
                  alt="AI MANTRAAS Logo"
                  className="h-32 w-auto md:h-40 object-contain transition-transform duration-700 hover:scale-110 drop-shadow-[0_0_15px_rgba(0,212,255,0.3)]"
                />
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-electric-400/30 bg-electric-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-electric-300">
              AI SDR Automation • Premium B2B
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <h1 className="font-heading text-2xl font-black leading-tight text-white sm:text-3xl md:text-4xl">
              Stop hunting leads. Start closing deals.
            </h1>
          </Reveal>
           <Reveal delay={0.14}>
            <p className="mt-3 text-2xl md:text-3xl font-bold uppercase tracking-[0.22em] text-electric-200 animate-pop-in inline-block px-4 py-2 rounded-lg bg-electric-500/10 border border-electric-400/30 shadow-[0_0_20px_rgba(0,212,255,0.3)]">
              <span className="saarthi text-saarthi-blue animate-saarthi-pop hover:scale-120 hover:shadow-saarthi-glow transition-transform duration-250 ease-in-out">SAARTHI</span> - India&apos;s First A.I Sales Employee
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-200/85 sm:text-xl">
              SAARTHI is the autonomous outreach system that finds, writes, follows up, and books meetings for you. Built for B2B teams that need consistent pipeline without more headcount.
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <div className="mx-auto mt-8 max-w-2xl">
              <CountdownTimer targetDate={launchDate} />
            </div>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#waitlist"
                className="relative inline-flex h-12 items-center justify-center rounded-full px-7 text-sm font-semibold uppercase tracking-[0.1em] text-white transition duration-300 hover:-translate-y-[1px]"
              >
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-electric-500 via-sky-500 to-electric-400 opacity-90 blur-lg transition duration-300" />
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-electric-500 via-sky-500 to-electric-400" />
                <span className="relative">Join the Waitlist</span>
              </a>
              <span className="text-sm font-semibold text-slate-200/75">Enterprise-grade • Human-in-the-loop optional</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="SAARTHI" className="rounded-3xl border border-electric-500/25 bg-[#060c19] p-6 shadow-card md:p-10">
        <div className="space-y-5">
          <Reveal delay={0.05}>
            <div className="rounded-2xl border border-electric-500/25 bg-gradient-to-br from-electric-500/10 via-transparent to-electric-400/10 p-5">
              <h3 className="text-sm font-semibold text-electric-200">Why <span className="saarthi text-saarthi-blue animate-saarthi-pop hover:scale-120 hover:shadow-saarthi-glow transition-transform duration-250 ease-in-out">SAARTHI</span> wins</h3>
              <ul className="mt-3 space-y-2 text-slate-100/90">
                {advantages.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-sky-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="rounded-2xl border border-electric-500/25 bg-[#070f21] p-5">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <h3 className="font-heading text-2xl font-black text-white">Outreach Agency vs <span className="saarthi text-saarthi-blue animate-saarthi-pop hover:scale-120 hover:shadow-saarthi-glow transition-transform duration-250 ease-in-out">SAARTHI</span></h3>
                <span className="inline-flex items-center rounded-full bg-electric-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-electric-200">
                  Systemized &gt; Manual
                </span>
              </div>
              <div className="mt-4 grid gap-3">
                {comparison.map((row) => (
                  <div
                    key={row.agency}
                    className="grid grid-cols-1 gap-2 rounded-xl border border-electric-500/15 bg-black/25 p-3 md:grid-cols-2"
                  >
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-red-200/70">Agency</p>
                      <p className="text-slate-200/85">{row.agency}</p>
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-electric-200"><span className="saarthi text-saarthi-blue animate-saarthi-pop hover:scale-120 hover:shadow-saarthi-glow transition-transform duration-250 ease-in-out">SAARTHI</span></p>
                      <p className="text-white">{row.saarthi}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="rounded-3xl border border-electric-500/25 bg-[#050b17] p-6 shadow-card md:p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-electric-300">How SAARTHI works</p>
            <h3 className="mt-2 font-heading text-3xl font-black text-white md:text-4xl">Your Ultimate Lead Chariot</h3>
            <p className="mt-3 max-w-2xl text-slate-200/80">
              Each stage is measurable, orchestrated, and can keep a human in the loop for approvals or let the system run autonomously.
            </p>
          </div>
          <span className="inline-flex items-center rounded-full border border-electric-500/25 bg-electric-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-electric-200">
            Smooth, observable, auditable
          </span>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {steps.map((step, idx) => (
            <div
              key={step.title}
              className="relative overflow-hidden rounded-2xl border border-electric-500/20 bg-gradient-to-b from-[#0b162b] to-[#060d1c] p-4 shadow-[0_10px_35px_rgba(0,0,0,0.35)]"
            >
              <div className="pointer-events-none absolute -right-6 -top-6 h-16 w-16 rounded-full bg-electric-500/15 blur-3xl" />
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-electric-500/25 bg-electric-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-electric-200">
                <span className="h-2 w-2 rounded-full bg-sky-400" />
                Step {idx + 1}
              </div>
              <h4 className="text-lg font-semibold text-white">{step.title}</h4>
              <p className="mt-2 text-sm text-slate-200/80">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-electric-500/25 bg-gradient-to-r from-[#071025] via-[#060c1b] to-[#08122a] p-6 shadow-card md:p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-electric-300">Custom Enterprise Integrations</p>
            <h3 className="mt-2 font-heading text-3xl font-black text-white md:text-4xl">Custom Enterprise Integrations</h3>
            <p className="mt-3 max-w-3xl text-slate-200/85">
              We also provide custom integration solutions for enterprises — including CRM sync, lead routing automation, custom workflows, API extensions, and deep integration with tools like HubSpot, Salesforce, Zoho, Slack, WhatsApp, and internal ops systems.
            </p>
          </div>
          <div className="inline-flex items-center rounded-full border border-electric-500/25 bg-electric-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-electric-200">
            Secure • Composable • Supported
          </div>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-3 md:grid-cols-6">
          {platforms.map((p) => (
            <div
              key={p}
              className="flex h-16 items-center justify-center rounded-xl border border-electric-500/15 bg-black/30 text-sm font-semibold text-white shadow-inner"
            >
              {p}
            </div>
          ))}
        </div>
      </section>

      <section
        id="waitlist"
        className="relative overflow-hidden rounded-3xl border border-electric-500/25 bg-[#060c18] px-6 py-12 shadow-card md:px-10"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(0,213,255,0.12),transparent_30%),radial-gradient(circle_at_85%_10%,rgba(80,120,255,0.12),transparent_28%)]" />
        <div className="relative z-10 grid gap-10 md:grid-cols-2 md:items-center">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-electric-300">Join Waitlist</p>
            <h3 className="font-heading text-3xl font-black text-white md:text-4xl">Built for enterprise go-to-market teams.</h3>
            <p className="text-slate-200/80">
              We review every application manually. Enterprise companies only. Tell us about your team and we&apos;ll get in touch with next steps.
            </p>
            <div className="inline-flex items-center gap-2 rounded-full border border-electric-500/20 bg-electric-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-electric-200">
              <span className="h-2 w-2 rounded-full bg-sky-400" />
              Fast onboarding • Human support
            </div>
          </div>
          <WaitlistForm />
        </div>
      </section>

      <section className="rounded-3xl border border-electric-500/25 bg-gradient-to-br from-[#0a1227] via-[#050915] to-[#081020] p-8 shadow-card md:p-12">
        <div className="text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-electric-300">Trusted By Industry Leaders</p>
            <h3 className="mt-2 font-heading text-3xl font-black text-white md:text-4xl">Our Partners</h3>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-wrap justify-center gap-8">
              {/* Apify Partner Logo Card */}
              <div className="flex flex-col items-center justify-center gap-4 rounded-xl bg-[#0D0D0D] p-8 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,92,0,0.3)]">
                <img
                  src="/apify.jpeg"
                  alt="Apify Partner Logo"
                  className="max-w-[240px] w-full h-auto"
                />
                <p className="text-sm font-medium text-gray-300">Official Integration Partner</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
