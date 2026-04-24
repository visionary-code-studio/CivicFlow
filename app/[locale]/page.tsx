import Link from "next/link";
import { timelineStages } from "@/lib/data/timeline";
import { FadeInUp } from "@/components/ui/FadeInUp";
import { 
  CheckCircle2, 
  BookOpen, 
  Globe, 
  MessageSquare,
  ShieldCheck,
  Search,
  Scale
} from "lucide-react";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <div className="bg-civic-ivory dark:bg-civic-ivory min-h-screen pb-24 md:pb-0">
      {/* ===== HERO WITH VIDEO BACKGROUND ===== */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        {/* Background Video Layer */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-black" aria-hidden="true">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover opacity-70"
          >
            <source src="/Civic_Flow.mp4" type="video/mp4" />
          </video>
          {/* Dark overlay for contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        </div>

        <div className="container-civic relative z-10 py-24 md:py-32 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium mb-6 animate-fade-in-up backdrop-blur-md shadow-sm">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              Politically neutral · Educational only
            </div>

            <h1 className="text-white animate-fade-in-up delay-100 mb-6 text-5xl md:text-7xl font-extrabold tracking-tight">
              Understand Every Step of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Your Election</span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed mb-10 animate-fade-in-up delay-200 text-white/80 max-w-2xl font-medium">
              CivicFlow is your interactive civic education guide. Learn how elections work — from voter registration to result declaration — in clear, simple steps.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in-up delay-300">
              <Link href={`/${locale}/timeline`} className="btn-primary text-base px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white border-none shadow-lg shadow-amber-900/20">
                Start the Timeline
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="ml-2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <Link href={`/${locale}/assistant`} className="btn-secondary text-base px-8 py-4 bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-md">
                <MessageSquare className="w-5 h-5 mr-2" />
                Ask Assistant
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRUST STRIP ===== */}
      <section className="bg-civic-surface border-y border-civic-border py-8" aria-labelledby="trust-heading">
        <h2 id="trust-heading" className="sr-only">Platform Trust Details</h2>
        <div className="container-civic">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-civic-border">
            <div className="flex flex-col items-center p-4">
              <Scale className="w-8 h-8 text-civic-accent mb-3" />
              <h3 className="text-base font-bold text-civic-primary mb-1">Politically Neutral</h3>
              <p className="text-sm text-civic-secondary">No bias, no endorsements. Purely educational.</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <Search className="w-8 h-8 text-civic-accent mb-3" />
              <h3 className="text-base font-bold text-civic-primary mb-1">Fact-Based</h3>
              <p className="mb-6" style={{ color: "#A8A29E" }}>Ask CivicFlow&apos;s AI assistant about any country&apos;s election process.</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <MessageSquare className="w-8 h-8 text-civic-accent mb-3" />
              <h3 className="text-base font-bold text-civic-primary mb-1">AI-Powered</h3>
              <p className="text-sm text-civic-secondary">Get instant answers to complex civic questions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== INTERACTIVE TIMELINE (REDESIGNED) ===== */}
      <section className="section py-24 bg-civic-sand" aria-labelledby="timeline-heading">
        <div className="container-civic max-w-5xl">
          <FadeInUp>
            <div className="text-center mb-16">
              <span className="badge mb-4">The Process</span>
              <h2 id="timeline-heading">8 Stages of an Election</h2>
              <p className="mt-4 text-civic-secondary max-w-2xl mx-auto">Follow the journey from the first notification to the final result.</p>
            </div>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timelineStages.map((stage, index) => (
              <FadeInUp key={stage.slug} delay={index * 0.1}>
                <Link
                  href={`/${locale}/timeline/${stage.slug}`}
                  className="group relative block h-full bg-civic-surface p-6 rounded-2xl border border-civic-border shadow-sm hover:shadow-md transition-all hover:-translate-y-1 hover:border-civic-accent"
                  aria-label={`Stage ${stage.id}: ${stage.title}`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white bg-civic-accent">
                      {stage.id}
                    </span>
                    <span className="text-xs font-medium text-civic-muted px-2 py-1 bg-civic-surface-2 rounded-full">{stage.phase}</span>
                  </div>
                  <h3 className="text-lg font-bold text-civic-primary mb-2 group-hover:text-civic-accent transition-colors">{stage.title}</h3>
                  <p className="text-sm text-civic-secondary line-clamp-3">{stage.summary}</p>
                </Link>
              </FadeInUp>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href={`/${locale}/timeline`} className="btn-secondary px-6 py-3">
              View Full Details
            </Link>
          </div>
        </div>
      </section>

      {/* ===== ASSISTANT TEASER (SPLIT SCREEN) ===== */}
      <section className="py-24 bg-civic-surface border-y border-civic-border" aria-labelledby="assistant-heading">
        <div className="container-civic max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left">
              <FadeInUp>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-civic-accent-light text-civic-clay text-sm font-bold mb-6">
                  <MessageSquare className="w-4 h-4" /> AI Assistant
                </div>
                <h2 id="assistant-heading" className="text-4xl lg:text-5xl font-extrabold mb-6">Have a specific question?</h2>
                <p className="text-lg text-civic-secondary mb-8 max-w-xl mx-auto lg:mx-0">
                  Don&apos;t want to read through guides? Just ask our AI Assistant. Type your question in plain language and get an instant, clear, and neutral answer.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                  <Link href={`/${locale}/assistant`} className="btn-primary w-full sm:w-auto px-8 py-4">
                    Try the Assistant
                  </Link>
                  <p className="text-sm text-civic-muted">Available 24/7. No account needed.</p>
                </div>
              </FadeInUp>
            </div>
            
            <div className="flex-1 w-full max-w-md lg:max-w-none">
              <FadeInUp delay={0.2}>
                <div className="rounded-2xl border border-civic-border bg-civic-surface-2 p-6 shadow-xl relative overflow-hidden">
                  {/* Decorative Header */}
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-civic-border">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    <span className="text-xs font-semibold text-civic-muted ml-2">CivicFlow AI</span>
                  </div>
                  {/* Chat Bubbles */}
                  <div className="space-y-4">
                    <div className="flex justify-end">
                      <div className="bg-civic-accent text-white px-4 py-3 rounded-2xl rounded-tr-sm text-sm max-w-[85%] shadow-sm">
                        What is a VVPAT machine?
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-civic-surface border border-civic-border text-civic-primary px-4 py-3 rounded-2xl rounded-tl-sm text-sm max-w-[90%] shadow-sm leading-relaxed">
                        VVPAT stands for Voter Verifiable Paper Audit Trail. It is an independent verification system attached to electronic voting machines that allows voters to verify that their vote was cast correctly.
                      </div>
                    </div>
                  </div>
                  {/* Fake Input */}
                  <div className="mt-6 flex items-center gap-2 bg-civic-surface border border-civic-border rounded-full px-4 py-3">
                    <span className="text-sm text-civic-muted flex-1">Type your question...</span>
                    <div className="w-8 h-8 rounded-full bg-civic-accent flex items-center justify-center text-white">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                    </div>
                  </div>
                </div>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>

      {/* ===== QUICK TOOLS GRID ===== */}
      <section className="section py-24 bg-civic-ivory" aria-labelledby="tools-heading">
        <FadeInUp>
          <div className="text-center mb-16">
            <h2 id="tools-heading">Your Civic Toolkit</h2>
            <p className="mt-4 text-civic-secondary">Resources to help you stay informed and prepared.</p>
          </div>
        </FadeInUp>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { icon: BookOpen, title: "Glossary", desc: "Look up election terms with simple definitions.", href: `/${locale}/glossary`, cta: "Browse Terms" },
            { icon: CheckCircle2, title: "Voter Checklist", desc: "Track your preparation steps stage-by-stage.", href: `/${locale}/checklist`, cta: "Start Checklist" },
            { icon: Globe, title: "Global Resources", desc: "Official links for various election commissions.", href: `/${locale}/resources`, cta: "View Resources" },
          ].map((tool, index) => (
            <FadeInUp key={tool.title} delay={index * 0.1}>
              <Link href={tool.href} className="group h-full flex flex-col bg-civic-surface p-8 rounded-2xl border border-civic-border shadow-sm hover:shadow-md transition-all hover:-translate-y-1 hover:border-civic-accent">
                <tool.icon className="w-10 h-10 text-civic-accent mb-6" />
                <h3 className="text-xl font-bold text-civic-primary mb-3">{tool.title}</h3>
                <p className="text-base text-civic-secondary mb-8 flex-grow">{tool.desc}</p>
                <span className="text-sm font-bold text-civic-accent group-hover:underline flex items-center gap-1">
                  {tool.cta} <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </span>
              </Link>
            </FadeInUp>
          ))}
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="pb-24 px-4 bg-civic-ivory" aria-labelledby="cta-heading">
        <div className="max-w-5xl mx-auto">
          <FadeInUp>
            <div className="rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden shadow-2xl bg-gradient-to-br from-amber-600 to-amber-900 border border-amber-500/30">
              {/* Glassmorphic decorative overlay */}
              <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px]" aria-hidden="true" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" aria-hidden="true" />
              
              <div className="relative z-10 max-w-2xl mx-auto">
                <h2 id="cta-heading" className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                  Ready to Become a More Informed Citizen?
                </h2>
                <p className="mb-10 text-lg md:text-xl text-white/90 font-medium">
                  Start with the election timeline or ask the assistant your first question.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link href={`/${locale}/timeline`} className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-base transition-all hover:-translate-y-1 shadow-lg bg-white text-amber-700 hover:bg-amber-50">
                    Start the Timeline
                  </Link>
                  <Link href={`/${locale}/assistant`} className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-base transition-all hover:-translate-y-1 shadow-lg border-2 border-white/80 text-white hover:bg-white/10 backdrop-blur-sm">
                    Ask a Question
                  </Link>
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
}
