import { NeonButton } from "@/components/neon-button";
import { Reveal } from "@/components/reveal";

export default function ProductsPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 pb-20 md:px-10">
      <section className="rounded-3xl border border-electric-500/30 bg-electric-900/35 px-6 py-12 shadow-card backdrop-blur-xl md:px-12 md:py-16">
        <Reveal>
          <h1 className="font-heading text-3xl font-extrabold uppercase sm:text-4xl md:text-5xl">Products</h1>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-4 max-w-3xl text-lg text-slate-200/85">
            AI MANTRAAS products are built to remove operational drag and accelerate growth through production-grade
            AI automations.
          </p>
        </Reveal>
      </section>

      <section className="mt-10">
        <Reveal>
          <article className="group relative overflow-hidden rounded-3xl border border-electric-500/35 bg-[#070f22]/90 p-8 shadow-card transition duration-300 hover:-translate-y-1 hover:border-electric-400/75 hover:shadow-neon md:p-10">
            <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-electric-500/20 blur-3xl transition duration-300 group-hover:bg-electric-400/25" />
            <p className="inline-flex rounded-full border border-electric-400/45 bg-electric-500/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.2em] text-electric-400">
              Product 01
            </p>
            <h2 className="mt-4 font-heading text-3xl font-black text-white md:text-4xl">AI SAARTHI</h2>
            <p className="mt-3 max-w-3xl text-lg text-slate-200/85">
              AI-powered Sales Engagement + Automation System designed for outbound velocity, reply optimization, and
              intelligent follow-up orchestration.
            </p>
            <div className="mt-6 grid gap-4 text-slate-200/85 md:grid-cols-2">
              <div className="rounded-xl border border-electric-500/25 bg-black/30 p-4">
                <h3 className="font-semibold text-electric-400">Key Features</h3>
                <ul className="mt-2 space-y-2">
                  <li>AI persona-based outreach personalization</li>
                  <li>Automated sequencing and multichannel follow-up</li>
                  <li>CRM sync with workflow intelligence</li>
                  <li>Performance analytics and conversion diagnostics</li>
                </ul>
              </div>
              <div className="rounded-xl border border-electric-500/25 bg-black/30 p-4">
                <h3 className="font-semibold text-electric-400">Pricing</h3>
                <p className="mt-2 text-3xl font-extrabold text-white">Coming Soon</p>
                <p className="mt-2 text-sm text-slate-300">Early access pricing will be announced for first adopters.</p>
              </div>
            </div>
            <div className="mt-8">
              <NeonButton href="#" label="Join the Waitlist" />
            </div>
          </article>
        </Reveal>
      </section>

      <section className="mt-10">
        <Reveal>
          <div className="rounded-2xl border border-dashed border-electric-400/35 bg-electric-900/20 px-6 py-10 text-center">
            <h3 className="font-heading text-2xl font-bold text-electric-400">More Products Incoming</h3>
            <p className="mt-3 text-slate-200/80">
              Additional AI systems and automation accelerators are in active development.
            </p>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
