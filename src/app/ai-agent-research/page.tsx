import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Sparkles } from "lucide-react";
import {
  researchOverview, researchFoundations, researchArtifacts, appliedPrototypes,
  researchWriting, researchQuestionThemes, researchStatus, type ResearchArtifact,
} from "@/data/agent-research";
import { personalInfo } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "AI Agent Engineering Research | Olga Scrivner",
  description: "Research on reusable AI capabilities: workflow discovery, skill representation, evidence-linked measurement and conservative refinement experiments.",
  openGraph: {
    title: "AI Agent Engineering Research | Olga Scrivner",
    description: "Research implementations, descriptive studies and open questions about reusable AI agent capabilities.",
    url: "https://olgascrivner.com/ai-agent-research",
  },
};

const sectionClass = "scroll-mt-32 border-b border-charcoal/5 py-16 sm:py-20 lg:py-24";
const eyebrowClass = "mb-3 block text-[11px] font-bold uppercase tracking-widest text-accent-indigo";
const headingClass = "mb-4 text-3xl font-extrabold tracking-tight text-charcoal";
const linkClass = "inline-flex items-center gap-1 text-sm font-semibold text-accent-violet underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-indigo";

function ArtifactCard({ artifact }: { artifact: ResearchArtifact }) {
  return (
    <article id={artifact.id} className="scroll-mt-32 flex flex-col rounded-xl border border-charcoal/10 bg-warm-card p-6 shadow-sm sm:p-7">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <span className="rounded-full border border-accent-violet/15 bg-accent-violet/5 px-3 py-1 text-[11px] font-semibold text-accent-violet">{artifact.status}</span>
        <span className="text-xs text-charcoal-muted">{artifact.date}</span>
      </div>
      <h3 className="mb-3 text-xl font-bold tracking-tight text-charcoal">{artifact.title}</h3>
      <p className="mb-5 text-sm leading-relaxed text-charcoal-muted">{artifact.summary}</p>
      <p className="mb-5 text-sm leading-relaxed text-charcoal">{artifact.evidence}</p>
      <div className="mb-6 rounded-lg border border-charcoal/5 bg-warm-gray/70 p-4">
        <h4 className="mb-1 text-[11px] font-bold uppercase tracking-wider text-charcoal-muted">Evidence limits</h4>
        <p className="text-sm leading-relaxed text-charcoal-muted">{artifact.limitation}</p>
      </div>
      <div className="mt-auto flex flex-wrap gap-x-5 gap-y-3 border-t border-charcoal/10 pt-4">
        {artifact.links.map((link) => (
          <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
            {link.label}<ArrowUpRight size={14} aria-hidden="true" />
          </a>
        ))}
      </div>
    </article>
  );
}

export default function AIAgentResearchPage() {
  return (
    <div className="min-h-screen bg-warm-white text-charcoal selection:bg-accent-indigo/25">
      <a href="#research-main" className="sr-only z-[60] rounded bg-warm-white p-3 focus:fixed focus:left-4 focus:top-4 focus:not-sr-only">Skip to research content</a>
      <header className="glass-nav sticky top-0 z-50">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-6 py-4">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider">
            <Link href="/" className="flex items-center gap-1.5 text-charcoal-muted hover:text-accent-violet"><ArrowLeft size={14} aria-hidden="true" />Overview</Link>
            <span aria-hidden="true" className="text-charcoal/20">/</span><span>Agent Research</span>
          </div>
          <nav aria-label="Research sections" className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-charcoal-muted">
            <a href="#research" className="hover:text-accent-violet">Research</a>
            <a href="#systems" className="hover:text-accent-violet">Selected work</a>
            <a href="#publications" className="hover:text-accent-violet">Writing</a>
            <a href="#questions" className="hover:text-accent-violet">Open questions</a>
          </nav>
        </div>
      </header>
      <main id="research-main">
        <section className="relative overflow-hidden border-b border-charcoal/5 pb-20 pt-14 lg:pb-24 lg:pt-20">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(124,58,237,0.05),transparent_100%)]" />
          <div className="relative mx-auto max-w-5xl px-6">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent-violet/15 bg-accent-violet/5 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-accent-violet"><Sparkles size={12} aria-hidden="true" />Research agenda</span>
            <h1 className="mb-6 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">{researchOverview.title}</h1>
            <p className="mb-5 max-w-3xl text-lg leading-relaxed text-charcoal/85 sm:text-xl">{researchOverview.introduction}</p>
            <p className="max-w-3xl text-base leading-relaxed text-charcoal-muted">{researchOverview.context}</p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-charcoal/10 pt-6 text-sm">
              <a href="#research" className={linkClass}>Research foundations</a>
              <a href="#systems" className={linkClass}>Selected artifacts</a>
              <a href="#questions" className={linkClass}>Current questions</a>
            </div>
          </div>
        </section>
        <section id="research" className={sectionClass}>
          <div className="mx-auto max-w-5xl px-6">
            <span className={eyebrowClass}>What I have studied</span>
            <h2 className={headingClass}>Reusable capabilities as a research problem</h2>
            <p className="mb-10 max-w-3xl text-base leading-relaxed text-charcoal-muted">How does a successful agent workflow become a reusable capability with an inspectable contract? My work connects workflow discovery, skill representation and evidence for change.</p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {researchFoundations.map((item) => (
                <article key={item.title} className="rounded-xl border border-charcoal/10 bg-warm-card p-6 shadow-sm">
                  <h3 className="mb-3 text-lg font-bold">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-charcoal-muted">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="systems" className={sectionClass}>
          <div className="mx-auto max-w-5xl px-6">
            <span className={eyebrowClass}>What I have built or investigated</span>
            <h2 className={headingClass}>Selected research and engineering</h2>
            <p className="mb-10 max-w-3xl text-base leading-relaxed text-charcoal-muted">Public implementations and recorded studies make the research inspectable. The corpus, instrument and refinement pilot form a connected program within SkillBench Meta-Research.</p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">{researchArtifacts.map((artifact) => <ArtifactCard key={artifact.id} artifact={artifact} />)}</div>
            <div className="mb-8 mt-14 max-w-3xl">
              <h3 className="mb-3 text-2xl font-bold tracking-tight">Applied agent prototypes</h3>
              <p className="text-base leading-relaxed text-charcoal-muted">Application settings expose questions about evidence, uncertainty and validation. Each prototype retains its own implementation status and attribution.</p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">{appliedPrototypes.map((artifact) => <ArtifactCard key={artifact.id} artifact={artifact} />)}</div>
          </div>
        </section>
        <section id="publications" className={sectionClass}>
          <div className="mx-auto max-w-5xl px-6">
            <span className={eyebrowClass}>Publications and research writing</span>
            <h2 className={headingClass}>Conceptual framing and related scholarship</h2>
            <p className="mb-10 max-w-3xl text-base leading-relaxed text-charcoal-muted">The Science of AI Skills develops the conceptual vocabulary for this work. Public research reports accompany the selected artifacts above; related scholarship addresses safety and governance.</p>
            <div className="divide-y divide-charcoal/10">
              {researchWriting.map((item) => (
                <article key={item.href} className="py-6 first:pt-0">
                  <p className="mb-2 text-xs font-semibold text-accent-indigo">{item.category}</p>
                  <h3 className="mb-2 text-lg font-bold"><a href={item.href} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:text-accent-violet hover:underline">{item.title}<ArrowUpRight size={15} aria-hidden="true" className="ml-1 inline" /></a></h3>
                  <p className="mb-1 text-sm text-charcoal-muted">{item.attribution}</p>
                  <p className="mb-3 text-xs text-charcoal-muted">{item.date}</p>
                  <p className="max-w-3xl text-sm leading-relaxed text-charcoal-muted">{item.description}</p>
                </article>
              ))}
            </div>
            <a href={personalInfo.socials.scholar} target="_blank" rel="noopener noreferrer" className={`${linkClass} mt-6`}>Google Scholar profile<ArrowUpRight size={14} aria-hidden="true" /></a>
          </div>
        </section>
        <section id="questions" className={sectionClass}>
          <div className="mx-auto max-w-5xl px-6">
            <span className={eyebrowClass}>What I am trying to understand next</span>
            <h2 className={headingClass}>Current research questions</h2>
            <p className="mb-10 max-w-3xl text-base leading-relaxed text-charcoal-muted">These questions guide ongoing and proposed work, from capability discovery to controlled evaluation and computational efficiency.</p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {researchQuestionThemes.map((theme) => (
                <article key={theme.title} className="rounded-xl border border-accent-indigo/15 bg-warm-card p-6 shadow-sm">
                  <h3 className="mb-5 text-lg font-bold leading-snug">{theme.title}</h3>
                  <ul className="list-disc space-y-5 pl-4 text-sm leading-relaxed text-charcoal-muted marker:text-accent-violet">{theme.questions.map((question) => <li key={question}>{question}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>
        </section>
        <aside aria-labelledby="research-status" className="mx-auto max-w-5xl px-6 py-12">
          <h2 id="research-status" className="mb-3 text-sm font-bold uppercase tracking-wider">Research status</h2>
          <p className="max-w-4xl text-sm leading-relaxed text-charcoal-muted">{researchStatus}</p>
          <p className="mt-4 text-xs text-charcoal-muted">Evidence reviewed {researchOverview.reviewed}.</p>
        </aside>
      </main>
      <footer className="border-t border-white/5 bg-[#080c14] py-12 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center">
          <div><p className="text-sm font-bold">Olga Scrivner</p><p className="mt-1 text-xs text-white/70">AI Agent Engineering Research</p></div>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Portfolio overview</Link>
            <a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub</a>
            <a href={`mailto:${personalInfo.email}`} className="hover:text-white">Contact</a>
          </nav>
          <p className="text-xs text-white/60">&copy; {new Date().getFullYear()} Olga Scrivner</p>
        </div>
      </footer>
    </div>
  );
}
