import { NeonButton } from "@/components/neon-button";
import { Reveal } from "@/components/reveal";

const modules = [
  "Day 1-3: AI Foundations, Prompt Engineering, and Workflow Design Thinking",
  "Day 4-6: n8n Core Nodes, Webhooks, API Integrations, and Data Routing",
  "Day 7-9: Lead Capture Automations, CRM Sync, and AI Enrichment Pipelines",
  "Day 10-12: Multi-step Agent Workflows, Human-in-the-loop Checks, and Error Recovery",
  "Day 13-14: Sales Automation Systems and Internal Ops Automations for Real Teams",
  "Day 15: Capstone Build, Demo Review, and Deployment Roadmap"
];

export default function ProgramPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 pb-20 md:px-10">
      <section className="rounded-3xl border border-electric-500/30 bg-electric-900/35 px-6 py-12 shadow-card backdrop-blur-xl md:px-12 md:py-16">
        <Reveal>
          <h1 className="font-heading text-3xl font-extrabold uppercase sm:text-4xl md:text-5xl">
            15-Day Automation Learning Program
          </h1>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-4 max-w-3xl text-lg text-slate-200/85">
            Build real AI + n8n automations in a structured, mentor-guided sprint. This is designed for founders,
            freelancers, operators, and teams who want practical implementation speed.
          </p>
        </Reveal>
      </section>

      <section className="mt-10 grid gap-5 md:grid-cols-2">
        {modules.map((module, index) => (
          <Reveal key={module} delay={index * 0.05}>
            <article className="group rounded-2xl border border-electric-500/30 bg-[#081126]/85 p-6 transition duration-300 hover:-translate-y-1 hover:border-electric-400/70 hover:shadow-neon">
              <p className="text-sm uppercase tracking-[0.22em] text-electric-400">Module {index + 1}</p>
              <h2 className="mt-3 text-xl font-semibold text-white">{module}</h2>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="mt-10 grid gap-5 md:grid-cols-3">
        <Reveal>
          <article className="rounded-2xl border border-electric-500/25 bg-black/25 p-6">
            <h3 className="font-heading text-xl font-bold text-electric-400">Interactive Learning</h3>
            <p className="mt-2 text-slate-200/80">
              Daily live sessions, guided breakdowns, and implementation sprints with direct Q&A.
            </p>
          </article>
        </Reveal>
        <Reveal delay={0.07}>
          <article className="rounded-2xl border border-electric-500/25 bg-black/25 p-6">
            <h3 className="font-heading text-xl font-bold text-electric-400">Hands-On Projects</h3>
            <p className="mt-2 text-slate-200/80">
              Build complete automations, from lead intake systems to AI-powered internal assistants.
            </p>
          </article>
        </Reveal>
        <Reveal delay={0.12}>
          <article className="rounded-2xl border border-electric-500/25 bg-black/25 p-6">
            <h3 className="font-heading text-xl font-bold text-electric-400">Real-World Workflows</h3>
            <p className="mt-2 text-slate-200/80">
              Architect robust AI workflows with observability, fallback logic, and scale-ready practices.
            </p>
          </article>
        </Reveal>
      </section>

      <Reveal delay={0.15}>
        <div className="mt-12">
          <NeonButton href="#" label="Register for the 15-day Program" />
        </div>
      </Reveal>
    </div>
  );
}
