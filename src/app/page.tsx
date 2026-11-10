"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight, ArrowRight, Menu, X, Layers3, ChartNoAxesColumn,
  Network, BookOpen, Activity, Code2, GraduationCap, Sparkles,
} from "lucide-react";
import { personalInfo, experiences, projects, publications, researchProducts } from "@/data/portfolio";
import { researchAreas, researchProjects, researchWriting } from "@/data/agent-research";

const Github = ({ size = 18, className = "" }: { size?: number; className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 18, className = "" }: { size?: number; className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const areaIcons = [Layers3, ChartNoAxesColumn, Network];
const areaTones = ["bg-violet-50 border-violet-100", "bg-indigo-50 border-indigo-100", "bg-purple-50 border-purple-100"];
const affiliationIcons = [Sparkles, GraduationCap, Code2, Layers3];
const linkClass = "inline-flex items-center gap-1.5 text-sm font-semibold text-accent-indigo underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-indigo";
const headingClass = "text-2xl sm:text-3xl font-bold tracking-tight text-charcoal";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const flagshipProject = projects.find(project => project.title === "Radient AI");
  const navigation = [
    { label: "About", href: "#about" },
    { label: "Research", href: "#research" },
    { label: "Projects", href: "#projects" },
    { label: "Writing", href: "#writing" },
    { label: "Publications", href: "#publications" },
  ];

  return (
    <div className="min-h-screen bg-warm-white text-charcoal selection:bg-accent-indigo/25">
      <a href="#main-content" className="sr-only z-[60] rounded bg-warm-white p-3 focus:fixed focus:left-4 focus:top-4 focus:not-sr-only">Skip to content</a>
      <header className="glass-nav sticky top-0 z-50">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#about" className="text-sm font-bold tracking-tight">Olga Scrivner</a>
          <nav aria-label="Main navigation" className="hidden items-center gap-6 md:flex">
            {navigation.map(item => <a key={item.href} href={item.href} className={`text-xs font-semibold ${item.label === "Research" ? "text-accent-indigo" : "text-charcoal-muted hover:text-accent-violet"}`}>{item.label}</a>)}
            <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-accent-indigo/25 px-4 py-2 text-xs font-semibold text-accent-indigo hover:bg-indigo-50">LinkedIn</a>
          </nav>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-expanded={mobileMenuOpen} aria-controls="mobile-navigation" aria-label={mobileMenuOpen ? "Close menu" : "Open menu"} className="rounded p-2 focus-visible:outline-2 focus-visible:outline-accent-indigo md:hidden">
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {mobileMenuOpen && <nav id="mobile-navigation" aria-label="Mobile navigation" className="flex flex-col gap-4 border-t border-charcoal/5 bg-warm-white px-6 py-5 md:hidden">
          {navigation.map(item => <a key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold text-charcoal-muted">{item.label}</a>)}
          <Link href="/ai-agent-research" onClick={() => setMobileMenuOpen(false)} className={linkClass}>AI Agent Engineering Research<ArrowUpRight size={14} aria-hidden="true" /></Link>
        </nav>}
      </header>

      <main id="main-content">
        <section id="about" className="relative scroll-mt-24 overflow-hidden border-b border-charcoal/5">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(124,58,237,0.06),transparent_60%)]" />
          <div className="relative mx-auto max-w-6xl px-6 pb-12 pt-14 lg:pb-14 lg:pt-20">
            <div className="grid items-center gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-14">
              <div>
                <p className="mb-5 text-xs font-bold uppercase tracking-widest text-accent-indigo">Olga Scrivner · AI Researcher & Educator</p>
                <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">{personalInfo.headline}</h1>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-charcoal-muted">{personalInfo.bio}</p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="/ai-agent-research" className="inline-flex items-center gap-2 rounded-lg bg-charcoal px-5 py-3 text-sm font-semibold text-white hover:bg-accent-indigo">Explore my research<ArrowRight size={16} aria-hidden="true" /></Link>
                  <a href="#publications" className="inline-flex items-center gap-2 rounded-lg border border-charcoal/15 px-5 py-3 text-sm font-semibold hover:bg-warm-gray">Selected publications</a>
                </div>
              </div>
              <div className="relative mx-auto hidden h-80 w-80 items-center justify-center lg:flex">
                <div aria-hidden="true" className="absolute inset-2 rounded-full bg-violet-100/80 blur-2xl" />
                <div className="relative h-[285px] w-[285px] overflow-hidden rounded-full border-8 border-white/70 shadow-lg shadow-indigo-100/70">
                  <Image src="/headshot.png" alt="Olga Scrivner" fill sizes="285px" priority className="object-cover object-[42%_center]" />
                </div>
              </div>
            </div>
            <div className="mt-12 grid gap-x-7 gap-y-6 border-t border-charcoal/10 pt-7 sm:grid-cols-2 lg:grid-cols-4">
              {experiences.map((experience, i) => {
                const Icon = affiliationIcons[i];
                return <div key={experience.organization} className="flex items-start gap-3">
                  <Icon size={17} className="mt-0.5 shrink-0 text-accent-violet" aria-hidden="true" />
                  <div><p className="text-xs font-semibold leading-relaxed">{experience.current ? experience.role : `Former ${experience.role}`}</p><p className="mt-1 text-xs leading-relaxed text-charcoal-muted">{experience.organization}</p></div>
                </div>;
              })}
            </div>
          </div>
        </section>

        <section id="research" aria-labelledby="research-heading" className="scroll-mt-24 py-14 lg:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-7 flex flex-wrap items-end justify-between gap-5">
              <div><p className="mb-3 text-xs font-bold uppercase tracking-widest text-accent-indigo">Research</p><h2 id="research-heading" className={headingClass}>Understanding and engineering AI capabilities</h2></div>
              <Link href="/ai-agent-research" className={linkClass}>AI Agent Engineering Research<ArrowUpRight size={15} aria-hidden="true" /></Link>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {researchAreas.map((area, i) => {
                const Icon = areaIcons[i];
                return <Link key={area.title} href="/ai-agent-research#research" className={`group rounded-2xl border p-6 transition-colors hover:border-accent-violet/40 focus-visible:outline-2 focus-visible:outline-accent-indigo ${areaTones[i]}`}>
                  <Icon size={27} strokeWidth={1.6} className="mb-5 text-accent-violet" aria-hidden="true" />
                  <h3 className="mb-3 flex items-start justify-between gap-3 text-lg font-bold leading-snug">{area.title}<ArrowUpRight size={16} className="mt-1 shrink-0 text-accent-violet" aria-hidden="true" /></h3>
                  <p className="text-sm leading-relaxed text-charcoal-muted">{area.description}</p>
                </Link>;
              })}
            </div>
            <div className="mt-7 grid gap-6 rounded-2xl border border-charcoal/10 bg-warm-card p-6 sm:p-8 lg:grid-cols-[0.7fr_1.3fr]">
              <div><p className="text-xs font-semibold uppercase tracking-wider text-charcoal-muted">Selected investigations</p><p className="mt-3 text-sm leading-relaxed text-charcoal-muted">From recurring workflows to reusable skills, and from skill descriptions to careful evaluation.</p></div>
              <div className="grid gap-6 sm:grid-cols-2">
                {researchProjects.map(project => <div key={project.id}>
                  <Link href={`/ai-agent-research#${project.id}`} className={linkClass}>{project.title}<ArrowUpRight size={14} aria-hidden="true" /></Link>
                  <p className="mt-2 text-xs leading-relaxed text-charcoal-muted">{project.status}</p>
                </div>)}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" aria-labelledby="projects-heading" className="scroll-mt-24 bg-[#0b0f19] py-14 text-white lg:py-16">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div><p className="mb-3 text-xs font-bold uppercase tracking-widest text-violet-300">Applied work</p><h2 id="projects-heading" className="text-2xl font-bold tracking-tight sm:text-3xl">Research in application settings</h2><p className="mt-5 max-w-lg text-base leading-relaxed text-white/70">Healthcare and travel prototypes provide concrete settings for studying evidence, explanation, validation and human oversight.</p><Link href="/ai-agent-research#systems" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-indigo-200 hover:underline">See applied agent systems<ArrowUpRight size={15} aria-hidden="true" /></Link></div>
            {flagshipProject && <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
              <div className="mb-4 flex items-center gap-3 text-violet-300"><Activity size={23} aria-hidden="true" /><span className="text-xs font-semibold">Synthetic-data prototype</span></div>
              <h3 className="text-2xl font-bold">{flagshipProject.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-white/75">{flagshipProject.description}</p>
              <p className="mt-4 text-xs leading-relaxed text-white/60">The public demo presents architecture and synthetic scenarios; it does not establish clinical outcomes or hospital deployment.</p>
              {flagshipProject.link && <a href={flagshipProject.link} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-indigo-200 hover:underline">Public architecture and demo<ArrowUpRight size={15} aria-hidden="true" /></a>}
            </article>}
          </div>
        </section>

        <section aria-labelledby="tools-heading" className="py-14 lg:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-accent-indigo">Computational research</p><h2 id="tools-heading" className={headingClass}>Tools for language and text analysis</h2>
            <div className="mt-7 grid gap-6 md:grid-cols-2">
              {researchProducts.map(product => <article key={product.link} className="rounded-2xl border border-charcoal/10 bg-warm-card p-6 sm:p-8">
                <Code2 size={25} strokeWidth={1.6} className="mb-5 text-accent-violet" aria-hidden="true" /><h3 className="text-lg font-bold">{product.title}</h3><p className="mb-5 mt-3 text-sm leading-relaxed text-charcoal-muted">{product.description}</p><a href={product.link} target="_blank" rel="noopener noreferrer" className={linkClass}>Open application<ArrowUpRight size={14} aria-hidden="true" /></a>
              </article>)}
            </div>
          </div>
        </section>

        <section id="writing" aria-labelledby="writing-heading" className="scroll-mt-24 border-y border-charcoal/10 bg-indigo-50/40 py-14 lg:py-16">
          <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div><p className="mb-3 text-xs font-bold uppercase tracking-widest text-accent-indigo">Research writing</p><h2 id="writing-heading" className={headingClass}>The Science of AI Skills</h2><p className="mt-4 text-base leading-relaxed text-charcoal-muted">A three-part conceptual series on the evolution, definition and composition of reusable AI capabilities.</p><Link href="/ai-agent-research#publications" className={`${linkClass} mt-5`}>Research writing and scholarship<ArrowUpRight size={14} aria-hidden="true" /></Link></div>
            <ol className="divide-y divide-charcoal/10">
              {researchWriting.slice(0, 3).map((item, i) => <li key={item.href} className="py-4 first:pt-0 last:pb-0"><a href={item.href} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4"><span className="mt-1 font-mono text-xs text-accent-violet">0{i + 1}</span><div className="flex-1"><h3 className="text-base font-semibold group-hover:text-accent-indigo">{item.title.split(": ").slice(1).join(": ")}</h3><p className="mt-1 text-xs text-charcoal-muted">{item.date}</p></div><ArrowUpRight size={16} className="mt-1 shrink-0 text-accent-violet" aria-hidden="true" /></a></li>)}
            </ol>
          </div>
        </section>

        <section id="publications" aria-labelledby="publications-heading" className="scroll-mt-24 py-14 lg:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-5"><h2 id="publications-heading" className={headingClass}>Selected publications</h2><a href={personalInfo.socials.scholar} target="_blank" rel="noopener noreferrer" className={linkClass}>Full record on Google Scholar<ArrowUpRight size={14} aria-hidden="true" /></a></div>
            <div className="divide-y divide-charcoal/10">
              {publications.map(publication => <article key={publication.title} className="grid gap-3 py-6 first:pt-0 sm:grid-cols-[4rem_1fr]">
                <p className="text-sm font-semibold text-accent-indigo">{publication.year}</p>
                <div><h3 className="text-base font-semibold leading-relaxed">{publication.link ? <a href={publication.link} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:text-accent-indigo hover:underline">{publication.title}<ArrowUpRight size={14} className="ml-1 inline" aria-hidden="true" /></a> : publication.title}</h3><p className="mt-2 text-sm text-charcoal-muted">{publication.authors}</p><p className="mt-1 text-xs text-charcoal-muted">{publication.venue}</p></div>
              </article>)}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#080c14] py-12 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 sm:grid-cols-2 lg:grid-cols-3">
          <div><p className="text-base font-bold">Olga Scrivner</p><p className="mt-3 max-w-xs text-sm leading-relaxed text-white/65">AI research, teaching and applied engineering across domains.</p></div>
          <nav aria-label="Footer" className="flex flex-col items-start gap-3 text-sm text-white/80"><Link href="/ai-agent-research" className="hover:text-white">AI Agent Engineering Research</Link><a href={personalInfo.socials.scholar} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white"><BookOpen size={15} aria-hidden="true" />Google Scholar</a><a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white"><Linkedin size={15} aria-hidden="true" />Connect on LinkedIn</a></nav>
          <div className="flex flex-col gap-4 lg:items-end"><div className="flex gap-4"><a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-white/80 hover:text-white"><Github size={19} /></a></div><p className="text-xs text-white/60">Indiana, USA · &copy; {new Date().getFullYear()} Olga Scrivner</p></div>
        </div>
      </footer>
    </div>
  );
}
