import Link from "next/link";
import { timelineStages } from "@/lib/data/timeline";
import { FadeInUp } from "@/components/ui/FadeInUp";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <div style={{ background: "var(--bg-ivory)" }}>
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ paddingTop: "64px" }}>
        {/* Gradient BG */}
        <div className="absolute inset-0 hero-gradient" aria-hidden="true" />
        {/* Decorative circles */}
        <div className="absolute top-20 right-10 w-96 h-96 rounded-full opacity-20 blur-3xl" style={{ background: "radial-gradient(circle, #D97706, transparent)" }} aria-hidden="true" />
        <div className="absolute bottom-20 left-10 w-72 h-72 rounded-full opacity-15 blur-3xl" style={{ background: "radial-gradient(circle, #92400E, transparent)" }} aria-hidden="true" />

        <div className="container-civic relative z-10 py-24 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="badge mb-6 animate-fade-in-up" style={{ margin: "0 auto 1.5rem" }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              Politically neutral · Educational only
            </div>

            <h1 className="animate-fade-in-up delay-100 mb-6" style={{ color: "var(--text-primary)" }}>
              Understand Every Step of{" "}
              <span className="text-gradient">Your Election</span>
            </h1>

            <p className="text-lg leading-relaxed mb-8 animate-fade-in-up delay-200" style={{ color: "var(--text-secondary)", maxWidth: "36rem", margin: "0 auto 2rem" }}>
              CivicFlow is your interactive civic education guide. Learn how elections work — from voter registration to result declaration — in clear, simple steps. Built for first-time voters, students, and every curious citizen.
            </p>

            <div className="flex flex-wrap gap-4 justify-center animate-fade-in-up delay-300">
              <Link href={`/${locale}/timeline`} className="btn-primary text-base px-8 py-4">
                Learn the Process
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <Link href={`/${locale}/assistant`} className="btn-secondary text-base px-8 py-4">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
                Ask a Question
              </Link>
            </div>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-8 justify-center mt-12 pt-8 border-t animate-fade-in-up delay-400" style={{ borderColor: "var(--border)" }}>
              {[
                { value: "8", label: "Election Stages" },
                { value: "37+", label: "Glossary Terms" },
                { value: "10+", label: "Countries Covered" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-black" style={{ color: "var(--accent)" }}>{stat.value}</p>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ color: "var(--text-muted)" }}>
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </div>
      </section>

      {/* ===== LEARNING CARDS ===== */}
      <section className="section py-16" aria-labelledby="learn-heading">
        <FadeInUp>
          <div className="text-center mb-16">
            <span className="badge mb-4">Start Learning</span>
            <h2 id="learn-heading">Begin Your Civic Journey</h2>
            <p className="mt-4 max-w-xl mx-auto">Pick a topic to start with, or follow the full election timeline from beginning to end.</p>
          </div>
        </FadeInUp>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { emoji: "🗳️", title: "What is an Election?", desc: "Understand the basics of how democratic elections work and why they matter.", href: `/${locale}/learn` },
            { emoji: "📝", title: "How Do I Register?", desc: "A simple guide to voter registration — what you need and how to do it.", href: `/${locale}/timeline/voter-registration` },
            { emoji: "✅", title: "What Happens on Voting Day?", desc: "Know exactly what to expect when you walk into a polling station.", href: `/${locale}/timeline/voting-process` },
            { emoji: "🏆", title: "How Are Results Announced?", desc: "Learn how votes are counted and results are officially declared.", href: `/${locale}/timeline/result-declaration` },
          ].map((card, index) => (
            <FadeInUp key={card.title} delay={index * 0.1}>
            <Link href={card.href} className="card card-clickable group h-full flex flex-col" aria-label={card.title}>
              <div className="text-4xl mb-4" aria-hidden="true">{card.emoji}</div>
              <h3 className="text-base font-semibold mb-2" style={{ color: "var(--text-primary)" }}>{card.title}</h3>
              <p className="text-sm flex-grow" style={{ color: "var(--text-secondary)" }}>{card.desc}</p>
              <div className="mt-6 flex items-center gap-1 text-sm font-medium group-hover:gap-2 transition-all" style={{ color: "var(--accent)" }}>
                Explore
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
            </Link>
            </FadeInUp>
          ))}
        </div>
      </section>

      {/* ===== TIMELINE PREVIEW ===== */}
      <section className="section-full py-24 overflow-hidden" style={{ background: "#1C1917" }} aria-labelledby="timeline-heading">
        <div className="container-civic">
          <FadeInUp>
            <div className="text-center mb-14">
              <span className="badge" style={{ background: "rgba(217,119,6,0.2)", color: "#FCD34D" }}>Full Timeline</span>
              <h2 id="timeline-heading" className="mt-4" style={{ color: "white" }}>8 Stages of an Election</h2>
              <p className="mt-4" style={{ color: "#A8A29E" }}>From registration to result — understand every phase of the election process.</p>
              <Link href={`/${locale}/timeline`} className="btn-primary mt-8" style={{ display: "inline-flex" }}>
                View Full Timeline
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
          </FadeInUp>

          <div className="overflow-x-auto scrollbar-hide -mx-4 px-4 pb-4">
            <div className="flex gap-6 pb-4" style={{ minWidth: "max-content" }}>
              {timelineStages.map((stage) => (
                <Link
                  key={stage.slug}
                  href={`/${locale}/timeline/${stage.slug}`}
                  className="flex-shrink-0 w-52 p-5 rounded-2xl border transition-all hover:-translate-y-1"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    borderColor: "rgba(255,255,255,0.08)",
                  }}
                  aria-label={`Stage ${stage.id}: ${stage.title}`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0" style={{ background: stage.color }}>
                      {stage.id}
                    </span>
                    <span className="text-xs" style={{ color: "#78716C" }}>{stage.phase}</span>
                  </div>
                  <div className="text-2xl mb-2" aria-hidden="true">{stage.emoji}</div>
                  <p className="text-sm font-semibold" style={{ color: "white" }}>{stage.title}</p>
                  <p className="text-xs mt-1 line-clamp-2" style={{ color: "#78716C" }}>{stage.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRUST SECTION ===== */}
      <section className="section py-20" aria-labelledby="trust-heading">
        <FadeInUp>
          <div className="max-w-4xl mx-auto">
            <div className="rounded-3xl p-12 text-center border" style={{ background: "var(--surface-2)", borderColor: "var(--border)" }}>
              <div className="text-5xl mb-6" aria-hidden="true">🛡️</div>
              <h2 id="trust-heading" className="mb-6">Trusted, Neutral, Educational</h2>
              <p className="max-w-2xl mx-auto text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                CivicFlow is designed as a civic education tool. All content is{" "}
                <strong style={{ color: "var(--text-primary)" }}>politically neutral</strong> and intended for informational purposes only.
                We do not promote or oppose any candidate, party, or ideology.
              </p>
              <div className="flex flex-wrap gap-4 justify-center mt-10">
                {[
                  "Content is educational only",
                  "No political endorsements",
                  "Always verify with official sources",
                  "Country-neutral by default",
                ].map((item) => (
                  <span key={item} className="trust-badge py-2 px-4 text-sm">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeInUp>
      </section>

      {/* ===== QUICK LINKS ===== */}
      <section className="section py-16" aria-labelledby="tools-heading">
        <FadeInUp>
          <h2 id="tools-heading" className="text-center mb-16">Your Civic Toolkit</h2>
        </FadeInUp>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { emoji: "💬", title: "Ask Assistant", desc: "Type any election question in plain language and get an instant, clear answer.", href: `/${locale}/assistant`, cta: "Ask Now" },
            { emoji: "📖", title: "Glossary", desc: "Look up election terms — from 'ballot' to 'VVPAT' — with simple definitions.", href: `/${locale}/glossary`, cta: "Browse Terms" },
            { emoji: "✅", title: "Voter Checklist", desc: "Track your preparation steps with a stage-by-stage voter readiness checklist.", href: `/${locale}/checklist`, cta: "Start Checklist" },
            { emoji: "🌍", title: "Global Resources", desc: "Official election commission links for India, US, UK, Nepal, and more.", href: `/${locale}/resources`, cta: "View Resources" },
            { emoji: "ℹ️", title: "About CivicFlow", desc: "Learn about our mission, values, and commitment to civic education.", href: `/${locale}/about`, cta: "Learn More" },
            { emoji: "📅", title: "Election Timeline", desc: "Follow the complete 8-stage election process from start to finish.", href: `/${locale}/timeline`, cta: "View Timeline" },
          ].map((tool, index) => (
            <FadeInUp key={tool.title} delay={index * 0.1}>
            <Link href={tool.href} className="card card-clickable group h-full flex flex-col" aria-label={tool.title}>
              <div className="text-4xl mb-4" aria-hidden="true">{tool.emoji}</div>
              <h3 className="text-base font-semibold mb-2" style={{ color: "var(--text-primary)" }}>{tool.title}</h3>
              <p className="text-sm mb-6 flex-grow" style={{ color: "var(--text-secondary)" }}>{tool.desc}</p>
              <span className="text-sm font-semibold group-hover:underline" style={{ color: "var(--accent)" }}>{tool.cta} →</span>
            </Link>
            </FadeInUp>
          ))}
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="section py-16" aria-labelledby="cta-heading">
        <FadeInUp>
          <div className="rounded-3xl p-16 text-center text-white overflow-hidden relative shadow-2xl" style={{ background: "linear-gradient(135deg, #D97706 0%, #92400E 100%)" }}>
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} aria-hidden="true" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 id="cta-heading" style={{ color: "white", fontSize: "2.5rem", lineHeight: "1.2" }}>Ready to Become a More Informed Citizen?</h2>
              <p className="mt-6 mb-10 text-lg opacity-90">Start with the election timeline or ask the assistant your first question.</p>
              <div className="flex flex-wrap gap-6 justify-center">
                <Link href={`/${locale}/timeline`} className="px-8 py-4 rounded-xl font-bold text-base transition-all hover:-translate-y-1 shadow-lg" style={{ background: "white", color: "var(--accent)" }}>
                  Start the Timeline →
                </Link>
                <Link href={`/${locale}/assistant`} className="px-8 py-4 rounded-xl font-bold text-base border-2 border-white text-white transition-all hover:bg-white hover:text-amber-700 shadow-lg">
                  Ask a Question →
                </Link>
              </div>
            </div>
          </div>
        </FadeInUp>
      </section>
    </div>
  );
}
