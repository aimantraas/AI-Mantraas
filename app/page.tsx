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
  { agency: "Manual list-building; variable quality", saarthi: "Live data enrichment + intent + tech stack filters" },
  { agency: "Copy depends on individual writers", saarthi: "Programmatic copy tuned to persona, offer, and channel" },
  { agency: "Follow-up inconsistency across reps", saarthi: "Sequenced, adaptive, and channel-aware follow-ups" },
  { agency: "Reporting arrives weekly", saarthi: "Real-time performance + pipeline health dashboard" },
  { agency: "Handoff friction to sales", saarthi: "Auto-booking with routing, calendar guardrails, and CRM writes" }
];

const platforms = ["HubSpot", "Salesforce", "Zoho", "Slack", "WhatsApp", "Custom API"];

export default function HomePage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-20 px-6 pb-24 pt-28 md:px-10 md:pt-32">
      <section className="relative overflow-hidden rounded-3xl border border-electric-500/30 bg-gradient-to-br from-[#0a1227] via-[#050915] to-[#081020] px-6 py-16 shadow-card backdrop-blur-xl md:px-12 md:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,213,255,0.15),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(80,120,255,0.14),transparent_30%)]" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <Reveal>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-electric-400/30 bg-electric-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-electric-300">
              AI SDR Automation • Premium B2B
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-heading text-2xl font-black leading-tight text-white sm:text-3xl md:text-4xl">
              Stop hunting leads. Start closing deals.
            </h1>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-3 text-2xl md:text-3xl font-bold uppercase tracking-[0.22em] text-electric-200 animate-pop-in inline-block px-4 py-2 rounded-lg bg-electric-500/10 border border-electric-400/30 shadow-[0_0_20px_rgba(0,212,255,0.3)]">
              SAARTHI - India&apos;s First A.I Sales Employee
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
              <h3 className="text-sm font-semibold text-electric-200">Why SAARTHI wins</h3>
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
                <h3 className="font-heading text-2xl font-black text-white">Outreach Agency vs SAARTHI</h3>
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
                      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-electric-200">SAARTHI</p>
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
            <h3 className="mt-2 font-heading text-3xl font-black text-white md:text-4xl">Full-funnel automation, human control.</h3>
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
              We review every application manually. Enterprise companies only. Tell us about your team and we'll get in touch with next steps.
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
            <div className="mt-10 flex justify-center">
              <div className="flex h-28 w-56 items-center justify-center rounded-xl border border-electric-500/20 bg-white transition-all duration-300 hover:border-electric-400/50 hover:shadow-[0_0_20px_rgba(0,212,255,0.2)]">
                <svg viewBox="0 0 512 136" className="h-14 w-auto" xmlns="http://www.w3.org/2000/svg">
                  <path d="M48.7 111.5c-13.2 0-24.1-4.5-32.4-13.3C8 89.4 3.8 78.3 3.8 64.9c0-13.5 4.2-24.7 12.5-33.4 8.3-8.8 19.2-13.3 32.4-13.3 10.3 0 19.2 2.8 26.5 8.3 7.3 5.5 12.2 13 14.5 22.3H72.3c-1.8-5.3-5-9.5-9.5-12.5-4.5-3-9.8-4.5-15.8-4.5-8.8 0-16 3-21.5 9-5.5 6-8.3 14-8.3 24s2.8 18 8.3 24c5.5 6 12.7 9 21.5 9 6 0 11.3-1.5 15.8-4.5 4.5-3 7.7-7.2 9.5-12.5h17.4c-2.3 9.3-7.2 16.8-14.5 22.3-7.3 5.5-16.2 8.3-26.5 8.3zm86.3-1.5h-16V19.7h16v90.3zm47.9 1.5c-8.8 0-16-2.5-21.5-7.5-5.5-5-8.3-11.8-8.3-20.3 0-8.5 3-15.3 8.3-20.3 5.5-5 12.7-7.5 21.5-7.5h21v-12c0-5.5-1.8-10-5.3-13.3-3.5-3.3-8.3-5-14.3-5-5.3 0-9.8 1.3-13.5 4-3.7 2.7-6 6.3-7 10.8h-16c1.3-8.5 5.3-15.3 11.8-20.5 6.5-5.2 14.8-7.8 24.8-7.8 10.8 0 19.5 3 26 9 6.5 6 9.8 14 9.8 24v46.8h-16v-12.5c-5.3 9.3-13.5 14-24.8 14zm3-13.5c7.3 0 13.3-2.3 18-7 4.7-4.7 7-10.5 7-17.5v-4h-20c-6 0-10.8 1.5-14.3 4.5-3.5 3-5.3 7-5.3 12 0 4.8 1.8 8.8 5.3 11.8 3.5 3.5 8.3 5.2 14.3 5.2zm72.5 13.5c-7.5 0-13.8-2-18.8-6-5-4-7.5-9.3-7.5-15.8h16c.3 3.3 1.8 6 4.5 8 2.7 2 6.3 3 10.5 3 4.3 0 7.8-.8 10.3-2.5 2.5-1.7 3.8-4 3.8-7 0-2.8-1.3-5-4-6.8-2.7-1.8-6.8-3.3-12.5-4.5-8.8-2-15.5-4.8-20-8.5-4.5-3.7-6.8-8.8-6.8-15.3 0-7 2.8-12.8 8.3-17.3 5.5-4.5 12.8-6.8 21.8-6.8 9 0 16.3 2.3 21.8 6.8 5.5 4.5 8.5 10.5 9 17.8h-16c-.3-3-1.8-5.5-4.3-7.5-2.5-2-6-3-10.3-3-4 0-7.3.8-9.8 2.5-2.5 1.7-3.8 4-3.8 7 0 2.5 1.3 4.5 4 6.3 2.7 1.8 7 3.3 13 4.8 8.5 2 15 4.8 19.5 8.5 4.5 3.7 6.8 8.8 6.8 15.3 0 7.3-2.8 13.3-8.5 17.8-5.7 4.5-13.2 6.8-22.5 6.8zm70.5-1.5h-16V19.7h16v90.3zm47.9 1.5c-8.8 0-16-2.5-21.5-7.5-5.5-5-8.3-11.8-8.3-20.3 0-8.5 3-15.3 8.3-20.3 5.5-5 12.7-7.5 21.5-7.5h21v-12c0-5.5-1.8-10-5.3-13.3-3.5-3.3-8.3-5-14.3-5-5.3 0-9.8 1.3-13.5 4-3.7 2.7-6 6.3-7 10.8h-16c1.3-8.5 5.3-15.3 11.8-20.5 6.5-5.2 14.8-7.8 24.8-7.8 10.8 0 19.5 3 26 9 6.5 6 9.8 14 9.8 24v46.8h-16v-12.5c-5.3 9.3-13.5 14-24.8 14zm3-13.5c7.3 0 13.3-2.3 18-7 4.7-4.7 7-10.5 7-17.5v-4h-20c-6 0-10.8 1.5-14.3 4.5-3.5 3-5.3 7-5.3 12 0 4.8 1.8 8.8 5.3 11.8 3.5 3.5 8.3 5.2 14.3 5.2zm72.5 13.5c-7.5 0-13.8-2-18.8-6-5-4-7.5-9.3-7.5-15.8h16c.3 3.3 1.8 6 4.5 8 2.7 2 6.3 3 10.5 3 4.3 0 7.8-.8 10.3-2.5 2.5-1.7 3.8-4 3.8-7 0-2.8-1.3-5-4-6.8-2.7-1.8-6.8-3.3-12.5-4.5-8.8-2-15.5-4.8-20-8.5-4.5-3.7-6.8-8.8-6.8-15.3 0-7 2.8-12.8 8.3-17.3 5.5-4.5 12.8-6.8 21.8-6.8 9 0 16.3 2.3 21.8 6.8 5.5 4.5 8.5 10.5 9 17.8h-16c-.3-3-1.8-5.5-4.3-7.5-2.5-2-6-3-10.3-3-4 0-7.3.8-9.8 2.5-2.5 1.7-3.8 4-3.8 7 0 2.5 1.3 4.5 4 6.3 2.7 1.8 7 3.3 13 4.8 8.5 2 15 4.8 19.5 8.5 4.5 3.7 6.8 8.8 6.8 15.3 0 7.3-2.8 13.3-8.5 17.8-5.7 4.5-13.2 6.8-22.5 6.8z" fill="#FF5C00"/>
                </svg>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
