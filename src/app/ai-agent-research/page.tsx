import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft, ArrowUpRight, Layers3, ChartNoAxesColumn,
  Network, Code2, Bot, LayoutGrid, BookOpen,
} from "lucide-react";
import {
  researchOverview, researchAreas, researchProjects, appliedSystems,
  researchWriting, researchQuestionThemes,
} from "@/data/agent-research";
import { personalInfo } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "AI Agent Engineering Research | Olga Scrivner",
  description: "Research on reliable AI agents, reusable capabilities, evaluation and agent architectures. Selected projects and writing by Olga Scrivner.",
  openGraph: {
    title: "AI Agent Engineering Research | Olga Scrivner",
    description: "Reusable capabilities, reliable evaluation and agent architectures: research, projects and open questions.",
    url: "https://olgascrivner.com/ai-agent-research",
  },
};

const icons = [Layers3, ChartNoAxesColumn, Network];
const tones = ["bg-violet-50 border-violet-100", "bg-indigo-50 border-indigo-100", "bg-purple-50 border-purple-100"];
const headingClass = "text-2xl sm:text-3xl font-bold tracking-tight text-charcoal";
const linkClass = "inline-flex items-center gap-1 text-sm font-semibold text-accent-indigo underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-indigo";

function SourceLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>{children}<ArrowUpRight size={14} aria-hidden="true" /></a>;
}

export default function AIAgentResearchPage() {
  return (
    <div className="min-h-screen bg-warm-white text-charcoal selection:bg-accent-indigo/25">
      <a href="#research-main" className="sr-only z-[60] rounded bg-warm-white p-3 focus:fixed focus:left-4 focus:top-4 focus:not-sr-only">Skip to research content</a>
      <header className="glass-nav sticky top-0 z-50">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-6 py-4">
          <Link href="/" className="flex items-center gap-2 text-sm font-bold"><ArrowLeft size={15} aria-hidden="true" /><span>Olga Scrivner</span><span className="hidden font-normal text-charcoal-muted sm:inline">/ Research</span></Link>
          <nav aria-label="Research sections" className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-charcoal-muted">
            <a href="#research" className="hover:text-accent-violet">Areas</a>
            <a href="#systems" className="hover:text-accent-violet">Projects</a>
            <a href="#publications" className="hover:text-accent-violet">Writing</a>
            <a href="#questions" className="hover:text-accent-violet">Questions</a>
          </nav>
        </div>
      </header>
      <main id="research-main" className="mx-auto max-w-6xl px-6">
        <section className="grid items-center gap-10 pb-14 pt-14 lg:grid-cols-[1.4fr_1fr] lg:gap-16 lg:pb-20 lg:pt-20">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-widest text-accent-indigo">AI Agent Engineering Research</p>
            <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl">{researchOverview.title}</h1>
            <p className="mb-7 mt-6 max-w-2xl text-lg leading-relaxed text-charcoal-muted">{researchOverview.introduction}</p>
            <a href="#systems" className={linkClass}>Explore selected work<ArrowUpRight size={15} aria-hidden="true" /></a>
          </div>
          <figure aria-label="Research connects agents, reusable capabilities, evaluation and applications" className="relative mx-auto flex w-full max-w-sm flex-col gap-3 px-5 py-5 sm:px-8">
            <div aria-hidden="true" className="absolute inset-0 rounded-[45%] bg-gradient-to-br from-indigo-100 via-violet-100/60 to-purple-100/50 blur-2xl" />
            {[
              { label: "Agents", Icon: Bot },
              { label: "Reusable capabilities", Icon: Layers3 },
              { label: "Evaluation", Icon: ChartNoAxesColumn },
              { label: "Applications", Icon: LayoutGrid },
            ].map(({ label, Icon }, i) => (
              <div key={label} className={`relative flex items-center gap-4 rounded-xl border border-white/90 bg-white/65 px-6 py-4 text-sm font-semibold shadow-sm ${i % 2 ? "translate-x-2" : "-translate-x-2"}`}>
                <Icon size={23} strokeWidth={1.6} className="text-accent-violet" aria-hidden="true" />{label}
              </div>
            ))}
          </figure>
        </section>

        <section id="research" aria-labelledby="areas-heading" className="scroll-mt-28 pb-14 lg:pb-20">
          <h2 id="areas-heading" className={headingClass}>Research areas</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {researchAreas.map((area, i) => {
              const Icon = icons[i];
              return <article key={area.title} className={`rounded-2xl border p-6 ${tones[i]}`}>
                <Icon size={27} strokeWidth={1.6} className="mb-5 text-accent-violet" aria-hidden="true" />
                <h3 className="mb-3 text-lg font-bold leading-snug">{area.title}</h3>
                <p className="text-sm leading-relaxed text-charcoal-muted">{area.description}</p>
              </article>;
            })}
          </div>
        </section>

        <section id="systems" aria-labelledby="projects-heading" className="scroll-mt-28 pb-14 lg:pb-20">
          <h2 id="projects-heading" className={headingClass}>Selected research and projects</h2>
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            {researchProjects.map((project, i) => {
              const Icon = i === 0 ? Code2 : Layers3;
              return <article key={project.id} id={project.id} className="flex scroll-mt-28 flex-col overflow-hidden rounded-2xl border border-charcoal/10 bg-warm-card shadow-sm">
                <div aria-hidden="true" className={`flex h-24 items-center justify-between px-6 ${i === 0 ? "bg-[#10182b] text-indigo-200" : "bg-gradient-to-br from-indigo-100 to-violet-100 text-accent-violet"}`}>
                  <Icon size={35} strokeWidth={1.3} /><span className="font-mono text-[11px] uppercase tracking-[0.15em]">{i === 0 ? "Workflow → Capability" : "Structure · Meaning · Use"}</span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-2 text-xl font-bold tracking-tight">{project.title}</h3>
                  <p className="mb-4 text-[11px] font-semibold text-accent-violet">{project.status}</p>
                  <p className="mb-3 text-sm leading-relaxed text-charcoal-muted">{project.description}</p>
                  <p className="mb-5 text-xs leading-relaxed text-charcoal-muted">{project.note}</p>
                  <div className="mt-auto flex flex-wrap gap-x-4 gap-y-3">{project.links.map(link => <SourceLink key={link.href} href={link.href}>{link.label}</SourceLink>)}</div>
                  {project.reports.length > 0 && <details className="mt-4 border-t border-charcoal/10 pt-4">
                    <summary className="cursor-pointer text-sm font-semibold text-accent-indigo">Studies and reports</summary>
                    <ul className="mt-3 space-y-3">{project.reports.map(link => <li key={link.href}><SourceLink href={link.href}>{link.label}</SourceLink></li>)}</ul>
                  </details>}
                </div>
              </article>;
            })}
            <article className="flex flex-col overflow-hidden rounded-2xl border border-charcoal/10 bg-warm-card shadow-sm">
              <div aria-hidden="true" className="flex h-24 items-center justify-between bg-gradient-to-br from-purple-100 to-indigo-50 px-6 text-accent-violet"><Network size={35} strokeWidth={1.3} /><span className="font-mono text-[11px] uppercase tracking-[0.15em]">Evidence → Explanation</span></div>
              <div className="p-6">
                <h3 className="mb-5 text-xl font-bold tracking-tight">Applied Agent Systems</h3>
                <div className="space-y-5">
                  {appliedSystems.map(system => <div key={system.href}>
                    <SourceLink href={system.href}>{system.title}</SourceLink>
                    <p className="mb-2 mt-1 text-[11px] font-semibold text-accent-violet">{system.status}</p>
                    <p className="text-sm leading-relaxed text-charcoal-muted">{system.description}</p>
                  </div>)}
                </div>
                <p className="mt-5 text-xs leading-relaxed text-charcoal-muted">Exploratory applications; task effectiveness and clinical validation have not been established.</p>
              </div>
            </article>
          </div>
        </section>

        <div className="grid gap-14 border-t border-charcoal/10 py-14 lg:grid-cols-2 lg:gap-12 lg:py-16">
          <section id="publications" aria-labelledby="writing-heading" className="min-w-0 scroll-mt-28">
            <h2 id="writing-heading" className={headingClass}>Research writing</h2>
            <div className="mt-6 rounded-2xl border border-charcoal/10 bg-warm-card p-6">
              <div className="mb-4 flex items-start gap-3"><BookOpen size={23} strokeWidth={1.6} className="shrink-0 text-accent-violet" aria-hidden="true" /><div><h3 className="text-lg font-bold">The Science of AI Skills</h3><p className="mt-1 text-xs text-charcoal-muted">Three conceptual essays by Olga Scrivner · July 2026</p></div></div>
              <p className="mb-3 text-sm leading-relaxed text-charcoal-muted">The series traces reusable skills as an engineering abstraction and proposes a vocabulary for their components, roles and composition.</p>
              <ol className="divide-y divide-charcoal/10">
                {researchWriting.slice(0, 3).map((item, i) => <li key={item.href} className="py-3">
                  <SourceLink href={item.href}>{i + 1}. {item.title.split(": ").slice(1).join(": ")}</SourceLink>
                  <p className="mt-1 text-xs text-charcoal-muted">{item.date}</p>
                </li>)}
              </ol>
            </div>
            {researchWriting.slice(3).map(item => <article key={item.href} className="mt-5 border-l-2 border-accent-violet/30 pl-5">
              <p className="mb-2 text-xs font-semibold text-accent-violet">{item.category}</p>
              <h3><SourceLink href={item.href}>{item.title}</SourceLink></h3>
              <p className="mt-2 text-xs leading-relaxed text-charcoal-muted">{item.attribution}</p>
              <p className="mt-1 text-xs leading-relaxed text-charcoal-muted">AI and Ethics Handbook · {item.date}</p>
            </article>)}
            <div className="mt-5"><SourceLink href={personalInfo.socials.scholar}>More publications on Google Scholar</SourceLink></div>
          </section>
          <section id="questions" aria-labelledby="questions-heading" className="scroll-mt-28">
            <h2 id="questions-heading" className={headingClass}>Current research questions</h2>
            <div className="mt-6 space-y-7">
              {researchQuestionThemes.map((theme, i) => {
                const Icon = icons[i];
                return <article key={theme.title} className="flex items-start gap-4">
                  <Icon size={24} strokeWidth={1.6} className="mt-1 shrink-0 text-accent-violet" aria-hidden="true" />
                  <div><h3 className="mb-2 text-base font-bold leading-snug">{theme.title}</h3><p className="text-sm leading-relaxed text-charcoal-muted">{theme.description}</p></div>
                </article>;
              })}
            </div>
          </section>
        </div>
      </main>
      <footer className="bg-[#080c14] py-9 text-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-5 px-6 text-sm">
          <Link href="/" className="font-semibold">Olga Scrivner</Link>
          <nav aria-label="Footer" className="flex flex-wrap gap-5 text-white/80"><Link href="/">Portfolio overview</Link><a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></nav>
          <p className="text-xs text-white/60">&copy; {new Date().getFullYear()} Olga Scrivner</p>
        </div>
      </footer>
    </div>
  );
}
