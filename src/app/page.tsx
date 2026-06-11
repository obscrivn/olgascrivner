"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Mail,
  ExternalLink,
  BookOpen,
  ArrowUpRight,
  Menu,
  X,
  MapPin,
  Send,
  Loader2,
  CheckCircle2,
  Sparkles,
  Shield,
  Activity,
  Search,
  Code,
  GraduationCap,
  Briefcase,
  Layers
} from "lucide-react";

// Custom brand icons
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

// OpenAI brand icon
const OpenAI = ({ size = 18, className = "" }: { size?: number; className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="1.5"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18.8 11.2c.5-1.1.2-2.4-.7-3.1-.9-.7-2.2-.7-3 .1l-1.3.9-.2-.7c-.3-1.2-1.3-2-2.5-2-1.2 0-2.2.8-2.5 2l-.2.7-1.3-.9c-.9-.8-2.2-.8-3-.1-.9.7-1.2 2-.7 3.1l.6.9-.9.3c-1.1.4-1.8 1.5-1.8 2.7S3.9 17.5 5 17.9l.9.3-.6.9c-.5 1.1-.2 2.4.7 3.1.9.7 2.2.7 3-.1l1.3-.9.2.7c.3 1.2 1.3 2 2.5 2 1.2 0 2.2-.8 2.5-2l.2-.7 1.3.9c.9.8 2.2.8 3 .1.9-.7 1.2-2 .7-3.1l-.6-.9.9-.3c1.1-.4 1.8-1.5 1.8-2.7s-.7-2.3-1.8-2.7l-.9-.3.6-.9z" />
  </svg>
);

import {
  personalInfo,
  projects,
  publications,
  researchProducts
} from "../data/portfolio";

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      alpha: number;
    }> = [];

    const colors = [
      "79, 70, 229",   // Indigo
      "124, 58, 237",  // Violet
      "99, 102, 241",  // Light Indigo
      "139, 92, 246",  // Light Violet
      "148, 163, 184"  // Slate
    ];

    const particleCount = Math.min(45, Math.floor((width * height) / 30000));
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.12, // extremely soft drift
        vy: (Math.random() - 0.5) * 0.12,
        radius: Math.random() * 3 + 1, // smaller particles
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.12 + 0.03
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw particle network lines
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0 || p1.x > width) p1.vx = -p1.vx;
        if (p1.y < 0 || p1.y > height) p1.vy = -p1.vy;

        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p1.color}, ${p1.alpha})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 130) {
            const alpha = (1 - dist / 130) * 0.04;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(124, 58, 237, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
    />
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Extract Radient AI flagship project
  const flagshipProject = projects.find((p) => p.title === "Radient AI");

  // Handle Contact Form Submit
  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setIsSubmitting(true);

    // Simulate network latency
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormState({ name: "", email: "", message: "" });

    // Reset success banner after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-warm-white selection:bg-accent-indigo/25">
      {/* Floating Glassmorphic Navigation Header */}
      <header className="sticky top-0 z-50 glass-nav transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a
            href="#"
            className="text-sm font-semibold tracking-tight text-charcoal flex items-center gap-2 hover:opacity-80 transition-opacity font-sans"
          >
            <span className="w-2 h-2 rounded-full bg-accent-violet animate-pulse"></span>
            Olga Scrivner
          </a>

          {/* Desktop Nav: Filtered down to exact links requested in mockup */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-xs font-semibold uppercase tracking-wider text-charcoal-muted hover:text-accent-violet transition-colors">About</a>
            <a href="#projects" className="text-xs font-semibold uppercase tracking-wider text-charcoal-muted hover:text-accent-violet transition-colors">Projects</a>
            <a href="#publications" className="text-xs font-semibold uppercase tracking-wider text-charcoal-muted hover:text-accent-violet transition-colors">Publications</a>
            {/* <a href="#contact" className="text-xs font-semibold uppercase tracking-wider text-charcoal-muted hover:text-accent-violet transition-colors">Contact</a> */}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-charcoal hover:text-accent-violet transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-warm-white/95 border-b border-charcoal/5 px-6 py-4 flex flex-col gap-4 animate-in slide-in-from-top duration-200">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs font-semibold uppercase tracking-wider text-charcoal-muted hover:text-accent-violet transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs font-semibold uppercase tracking-wider text-charcoal-muted hover:text-accent-violet transition-colors"
            >
              Projects
            </a>
            <a
              href="#publications"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs font-semibold uppercase tracking-wider text-charcoal-muted hover:text-accent-violet transition-colors"
            >
              Publications
            </a>
            {/* <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs font-semibold uppercase tracking-wider text-charcoal-muted hover:text-accent-violet transition-colors"
            >
              Contact
            </a> */}
          </div>
        )}
      </header>

      <main className="flex-grow">
        {/* Hero Section & About Section (Story & Badges matching mockup) */}
        <section id="about" className="relative overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-28 border-b border-charcoal/5">
          {/* Soft particles background */}
          <ParticleCanvas />
          
          {/* Radial light gradient overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(124,58,237,0.04),transparent_100%)] opacity-80 pointer-events-none"></div>
          
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Story, badges & CTAs */}
              <div className="lg:col-span-7 text-left space-y-6">
                <span className="text-[10px] font-bold tracking-widest text-accent-indigo uppercase animate-tagline">
                  AI Researcher • Educator • Entrepreneur
                </span>
                
                {/* Name title matching mockup balance */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-charcoal font-sans leading-none">
                  Olga Scrivner
                </h1>
                
                <p className="text-2xl sm:text-3xl font-light text-charcoal/90 leading-snug">
                  Building trustworthy AI systems for healthcare and society.
                </p>
                
                {/* Short Founder Story */}
                <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed max-w-xl font-light">
                  I work at the intersection of AI evaluation, agentic systems, and healthcare operations—translating research into reliable, human-aligned products.
                </p>

                {/* Horizontal badges row matching mockup visual dividers */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-6 border-t border-b border-charcoal/10 w-full lg:max-w-4xl">
                  {/* Badge 1 */}
                  <div className="flex gap-3">
                    <div className="text-accent-indigo mt-0.5 shrink-0">
                      <Sparkles size={16} />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold text-charcoal tracking-wide uppercase">Co-Founder & Head of AI</h4>
                      <p className="text-[10px] text-charcoal-muted leading-tight">Scrivner Solutions</p>
                    </div>
                  </div>
                  
                  {/* Badge 2 */}
                  <div className="flex gap-3 sm:border-l sm:border-charcoal/10 sm:pl-6 lg:pl-6">
                    <div className="text-accent-indigo mt-0.5 shrink-0">
                      <OpenAI size={16} className="text-accent-indigo" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold text-charcoal tracking-wide uppercase">Former Expert Consultant</h4>
                      <p className="text-[10px] text-charcoal-muted leading-tight">OpenAI</p>
                    </div>
                  </div>
                  
                  {/* Badge 3 */}
                  <div className="flex gap-3 lg:border-l lg:border-charcoal/10 lg:pl-6">
                    <div className="text-accent-indigo mt-0.5 shrink-0">
                      <GraduationCap size={16} />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold text-charcoal tracking-wide uppercase">Assistant Professor</h4>
                      <p className="text-[10px] text-charcoal-muted leading-tight">Computer Science & Software Engineering, Rose-Hulman Institute of Technology</p>
                    </div>
                  </div>

                  {/* Badge 4 */}
                  <div className="flex gap-3 sm:border-l lg:border-l sm:border-charcoal/10 lg:border-charcoal/10 sm:pl-6 lg:pl-6">
                    <div className="text-accent-indigo mt-0.5 shrink-0">
                      <Layers size={16} />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold text-charcoal tracking-wide uppercase">Research Scientist</h4>
                      <p className="text-[10px] text-charcoal-muted leading-tight">CNS Cyberinfrastructure for Network Science Center</p>
                    </div>
                  </div>
                </div>

                {/* Action CTA Buttons */}
                <div className="flex flex-wrap items-center gap-6 pt-4">
                  <a
                    href="#projects"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider bg-charcoal text-warm-white hover:bg-charcoal/90 active:bg-charcoal transition-all duration-200"
                  >
                    Explore Projects &rarr;
                  </a>
                  <a
                    href="#publications"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider bg-transparent text-charcoal border border-charcoal/15 hover:bg-charcoal/5 transition-all duration-200"
                  >
                    Publications
                  </a>
                  {/* <a
                    href="#contact"
                    className="inline-flex items-center justify-center text-xs font-bold uppercase tracking-wider text-charcoal hover:underline transition-all duration-200"
                  >
                    Contact
                  </a> */}
                </div>
              </div>

              {/* Right Column: Portrait with a restrained orbital accent */}
              <div className="headshot-visual lg:col-span-5 hidden lg:flex justify-center relative items-center py-10">
                <div className="headshot-glow" aria-hidden="true"></div>
                <div className="headshot-halo" aria-hidden="true">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="headshot-frame group">
                  <Image
                    src="/headshot.png"
                    alt="Olga Scrivner"
                    fill
                    sizes="285px"
                    priority
                    className="object-cover object-[42%_center] transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section: Flagship Showcase (Entire Dark Radient AI Section matching mockup) */}
        <section id="projects" className="py-24 text-white relative overflow-hidden" style={{ background: "linear-gradient(135deg, #071124, #0B1733, #1C1450)" }}>
          {/* Subtle gradient glows */}
          <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-accent-violet/[0.04] rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute left-10 top-0 w-80 h-80 bg-accent-indigo/[0.03] rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Stats Details */}
              <div className="lg:col-span-6 space-y-6 text-left">
                <span className="text-[10px] font-bold uppercase tracking-widest text-accent-violet block">Flagship Project</span>
                
                <h3 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  Radient AI
                </h3>
                
                <p className="text-white/80 leading-relaxed text-sm sm:text-base font-light max-w-xl">
                  An AI-powered operations intelligence platform designed to optimize radiology workflows, reduce report turnaround times, and assist healthcare systems with real-time operational insights.
                </p>
                
                {/* Translucent Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold px-3 py-1.5 rounded-md bg-white/5 text-white/95 border border-white/10 backdrop-blur-sm font-mono">
                    <Activity size={10} className="text-accent-indigo" />
                    Healthcare AI
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold px-3 py-1.5 rounded-md bg-white/5 text-white/95 border border-white/10 backdrop-blur-sm font-mono">
                    <Sparkles size={10} className="text-accent-violet" />
                    Agentic Systems
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold px-3 py-1.5 rounded-md bg-white/5 text-white/95 border border-white/10 backdrop-blur-sm font-mono">
                    <Layers size={10} className="text-accent-indigo" />
                    LLM Orchestration
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold px-3 py-1.5 rounded-md bg-white/5 text-white/95 border border-white/10 backdrop-blur-sm font-mono">
                    <Briefcase size={10} className="text-accent-violet" />
                    Operations
                  </span>
                </div>
                
                {/* Violet colored Role link */}
                <div className="text-xs font-semibold text-accent-violet pt-2">
                  <span className="text-white/60 font-light">Role: </span>
                  Co-Founder & Head of AI
                </div>
              </div>

              {/* Right Column: Custom CSS Dashboard Mockup */}
              <div className="lg:col-span-6 flex justify-center w-full">
                <div className="w-full max-w-xl bg-[#0c1322] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row h-[420px]">
                  {/* Left Sidebar */}
                  <div className="hidden md:flex flex-col w-44 bg-[#080d19] border-r border-white/5 p-4 shrink-0 justify-between">
                    <div>
                      {/* Logo / App Name */}
                      <div className="flex items-center gap-2 mb-6 px-1">
                        <span className="w-2.5 h-2.5 rounded-full bg-accent-violet animate-pulse shadow-[0_0_8px_#7c3aed]"></span>
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-white">Radient AI</span>
                      </div>
                      
                      {/* Navigation List */}
                      <div className="space-y-1">
                        <div className="flex items-center gap-2.5 px-2 py-1.5 rounded-md text-[10px] font-bold text-white bg-white/5 border-l-2 border-accent-indigo">
                          <Activity size={12} className="text-accent-indigo" />
                          <span>Exec Overview</span>
                        </div>
                        <div className="flex items-center gap-2.5 px-2 py-1.5 text-[10px] font-semibold text-white/40 hover:text-white/70 transition-colors">
                          <Layers size={12} />
                          <span>Modality Deep-Dive</span>
                        </div>
                        <div className="flex items-center gap-2.5 px-2 py-1.5 text-[10px] font-semibold text-white/40 hover:text-white/70 transition-colors">
                          <Code size={12} />
                          <span>Scenario Lab</span>
                        </div>
                        <div className="flex items-center justify-between px-2 py-1.5 text-[10px] font-semibold text-white/40 hover:text-white/70 transition-colors">
                          <div className="flex items-center gap-2.5">
                            <Sparkles size={12} />
                            <span>AI Insights</span>
                          </div>
                          <span className="text-[8px] px-1 py-0.2 rounded bg-accent-indigo/25 text-accent-indigo border border-accent-indigo/20 font-bold uppercase font-mono">AI</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* User profile or status at bottom of sidebar */}
                    <div className="border-t border-white/5 pt-3 flex items-center gap-2 px-1">
                      <div className="w-5 h-5 rounded-full bg-accent-indigo/20 flex items-center justify-center text-[9px] font-bold text-accent-indigo">
                        OS
                      </div>
                      <div className="min-w-0">
                        <p className="text-[8px] font-bold text-white/80 truncate">Olga Scrivner</p>
                        <p className="text-[7px] text-white/40 truncate font-light">System Admin</p>
                      </div>
                    </div>
                  </div>

                  {/* Main Panel */}
                  <div className="flex-1 p-5 flex flex-col justify-between min-w-0 bg-[#0c1322]/50">
                    {/* Top Section */}
                    <div>
                      {/* Header with Title & Live badge */}
                      <div className="flex items-center justify-between pb-3 border-b border-white/5 mb-3.5">
                        <h4 className="text-[12px] font-bold text-white tracking-wide">Executive Overview</h4>
                        <div className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 absolute"></span>
                          <span className="text-[8px] font-bold text-emerald-400 font-mono tracking-wider uppercase pl-1">Live Feed</span>
                        </div>
                      </div>

                      {/* Modality Filter Tabs */}
                      <div className="overflow-x-auto no-scrollbar flex gap-1.5 pb-2 mb-3">
                        {[
                          "All departments",
                          "CT",
                          "MRI",
                          "X-ray",
                          "Ultrasound",
                          "IR",
                          "NM",
                          "PET/CT",
                          "Mammography"
                        ].map((tab, i) => (
                          <button
                            key={i}
                            className={`px-2 py-1 rounded text-[8px] font-bold tracking-wide uppercase shrink-0 transition-colors ${
                              i === 0
                                ? "bg-white/10 text-white border border-white/10"
                                : "text-white/40 border border-white/5 hover:text-white/70 hover:bg-white/5"
                            }`}
                          >
                            {tab}
                          </button>
                        ))}
                      </div>

                      {/* 4 Stat Cards */}
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        {/* Card 1 */}
                        <div className="bg-white/[0.02] border border-white/5 rounded-lg p-2.5 flex flex-col justify-between">
                          <span className="text-[8px] text-white/40 uppercase tracking-wider block font-semibold">Labor Efficiency</span>
                          <div className="flex items-baseline justify-between mt-1">
                            <span className="text-sm font-extrabold text-white font-mono">1.60</span>
                            <span className="text-[8px] text-emerald-400 font-mono font-bold">+12% &uarr;</span>
                          </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white/[0.02] border border-white/5 rounded-lg p-2.5 flex flex-col justify-between">
                          <span className="text-[8px] text-white/40 uppercase tracking-wider block font-semibold">Scanner Utilization</span>
                          <div className="flex items-baseline justify-between mt-1">
                            <span className="text-sm font-extrabold text-white font-mono">69%</span>
                            <span className="text-[8px] px-1 py-0.2 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/10 font-bold uppercase scale-90">Optimal</span>
                          </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white/[0.02] border border-white/5 rounded-lg p-2.5 flex flex-col justify-between">
                          <span className="text-[8px] text-white/40 uppercase tracking-wider block font-semibold">Overtime Rate</span>
                          <div className="flex items-baseline justify-between mt-1">
                            <span className="text-sm font-extrabold text-white font-mono">2.6%</span>
                            <span className="text-[8px] text-emerald-400 font-mono font-bold">-0.8% &darr;</span>
                          </div>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-white/[0.02] border border-white/5 rounded-lg p-2.5 flex flex-col justify-between">
                          <span className="text-[8px] text-white/40 uppercase tracking-wider block font-semibold">Est. Annual Waste</span>
                          <div className="flex items-baseline justify-between mt-1">
                            <span className="text-sm font-extrabold text-white font-mono">$530K</span>
                            <span className="text-[8px] text-accent-indigo font-mono font-bold">-18% &darr;</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Operational Analytics Panel (Burnout Risk Circle Gauge + Graph) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3.5 border-t border-white/5">
                      {/* Circular Burnout Risk Meter */}
                      <div className="flex items-center gap-3">
                        <div className="relative w-14 h-14 shrink-0">
                          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                            {/* Track */}
                            <path
                              className="text-white/5"
                              strokeWidth="3.2"
                              stroke="currentColor"
                              fill="none"
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                            {/* Indicator: 26% */}
                            <path
                              className="text-accent-violet"
                              strokeDasharray="26, 100"
                              strokeWidth="3.2"
                              strokeLinecap="round"
                              stroke="currentColor"
                              fill="none"
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                          </svg>
                          <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-[11px] font-extrabold text-white font-mono leading-none">26</span>
                            <span className="text-[6px] text-white/40 uppercase font-semibold mt-0.5 leading-none">of 100</span>
                          </div>
                        </div>
                        
                        <div className="min-w-0">
                          <span className="text-[8px] text-white/40 uppercase block font-semibold">System Burnout Risk</span>
                          <span className="text-[10px] font-bold text-white/95">Low Severity</span>
                          {/* Small metrics */}
                          <div className="mt-1 flex flex-col gap-0.5">
                            <div className="flex items-center gap-1.5">
                              <span className="text-[7px] text-white/40 w-10">Overtime:</span>
                              <div className="flex-1 w-12 h-1 bg-white/5 rounded-full overflow-hidden">
                                <div className="h-full bg-accent-violet rounded-full" style={{ width: "35%" }}></div>
                              </div>
                              <span className="text-[7px] text-white/60 font-mono">35%</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <span className="text-[7px] text-white/40 w-10">Stress:</span>
                              <div className="flex-1 w-12 h-1 bg-white/5 rounded-full overflow-hidden">
                                <div className="h-full bg-accent-indigo rounded-full" style={{ width: "20%" }}></div>
                              </div>
                              <span className="text-[7px] text-white/60 font-mono">20%</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Throughput Area Chart */}
                      <div className="flex flex-col justify-between">
                        <span className="text-[8px] text-white/40 uppercase block font-semibold mb-1">Throughput Velocity</span>
                        <div className="h-12 w-full bg-white/[0.01] border border-white/5 rounded-lg p-1 flex items-end relative overflow-hidden">
                          <svg className="w-full h-full" viewBox="0 0 100 30" preserveAspectRatio="none">
                            <defs>
                              <linearGradient id="db-chart-glow" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.3" />
                                <stop offset="100%" stopColor="#4f46e5" stopOpacity="0.0" />
                              </linearGradient>
                            </defs>
                            <path 
                              d="M0,30 L0,20 Q15,10 30,22 T60,5 T90,18 L100,12 L100,30 Z" 
                              fill="url(#db-chart-glow)"
                            />
                            <path 
                              d="M0,20 Q15,10 30,22 T60,5 T90,18 L100,12" 
                              fill="none" 
                              stroke="#4f46e5" 
                              strokeWidth="1.2"
                              className="chart-path"
                            />
                          </svg>
                        </div>
                        {/* Visit Radient AI link */}
                        {flagshipProject && flagshipProject.link && (
                          <a
                            href={flagshipProject.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-1 text-right text-[8px] font-bold text-accent-violet hover:underline flex items-center justify-end gap-0.5 uppercase tracking-wider"
                          >
                            Explore Dashboard
                            <ArrowUpRight size={10} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section: Current Focus */}
        <section className="py-20 lg:py-24 border-b border-charcoal/5 bg-warm-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="max-w-2xl text-left mb-12">
              <span className="text-[10px] font-bold uppercase tracking-widest text-accent-indigo block mb-2">Core Competencies</span>
              <h2 className="text-3xl font-extrabold tracking-tight text-charcoal">Current Focus</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1: AI Evaluation */}
              <div className="bg-warm-card border border-charcoal/5 rounded-xl p-6 shadow-sm hover:border-accent-indigo/25 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-full bg-accent-indigo/5 flex items-center justify-center text-accent-indigo mb-5">
                    <Search size={16} />
                  </div>
                  <h3 className="text-sm font-bold text-charcoal mb-2 font-sans">AI Evaluation</h3>
                  <p className="text-xs text-charcoal-muted leading-relaxed font-light">
                    Building robust evals for LLMs and agentic systems to ensure safety and reliability.
                  </p>
                </div>
              </div>

              {/* Card 2: Agentic AI */}
              <div className="bg-warm-card border border-charcoal/5 rounded-xl p-6 shadow-sm hover:border-accent-violet/25 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-full bg-accent-violet/5 flex items-center justify-center text-accent-violet mb-5">
                    <Sparkles size={16} />
                  </div>
                  <h3 className="text-sm font-bold text-charcoal mb-2 font-sans">Agentic AI & Multi-Agent Systems</h3>
                  <p className="text-xs text-charcoal-muted leading-relaxed font-light">
                    Designing collaborative AI systems that can reason, plan, and act.
                  </p>
                </div>
              </div>

              {/* Card 3: Healthcare Operations Intelligence */}
              <div className="bg-warm-card border border-charcoal/5 rounded-xl p-6 shadow-sm hover:border-accent-slate/25 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-full bg-accent-slate/5 flex items-center justify-center text-accent-slate mb-5">
                    <Activity size={16} />
                  </div>
                  <h3 className="text-sm font-bold text-charcoal mb-2 font-sans">Healthcare Operations Intelligence</h3>
                  <p className="text-xs text-charcoal-muted leading-relaxed font-light">
                    Applying AI to real-world workflows to improve efficiency and patient outcomes.
                  </p>
                </div>
              </div>

              {/* Card 4: Responsible AI */}
              <div className="bg-warm-card border border-charcoal/5 rounded-xl p-6 shadow-sm hover:border-accent-indigo/25 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-full bg-accent-indigo/5 flex items-center justify-center text-accent-indigo mb-5">
                    <Shield size={16} />
                  </div>
                  <h3 className="text-sm font-bold text-charcoal mb-2 font-sans">Responsible AI</h3>
                  <p className="text-xs text-charcoal-muted leading-relaxed font-light">
                    Advancing human-centered, safe, transparent, and aligned AI systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Research Products (Shiny apps cards matching projects mockup header) */}
        <section className="py-20 lg:py-24 border-b border-charcoal/5 bg-warm-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="max-w-2xl text-left mb-12">
              <span className="text-[10px] font-bold uppercase tracking-widest text-accent-indigo block mb-2">Linguistic Analytics</span>
              <h2 className="text-3xl font-extrabold tracking-tight text-charcoal mb-4">Research Products</h2>
              <p className="text-charcoal-muted leading-relaxed text-sm">
                Interactive web platforms engineered for text corpora mining and linguistic variation analysis.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {researchProducts.map((prod, idx) => (
                <div key={idx} className="bg-warm-card border border-charcoal/5 rounded-xl p-8 hover:border-accent-violet/20 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-accent-violet/5 flex items-center justify-center text-accent-violet mb-6">
                      <Code size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-charcoal mb-3">{prod.title}</h3>
                    <p className="text-sm text-charcoal-muted leading-relaxed mb-6 font-light">
                      {prod.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {prod.tags.map((t, index) => (
                        <span key={index} className="text-[10px] font-semibold text-charcoal-muted/80 bg-warm-gray px-2 py-0.5 rounded border border-charcoal/5">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="pt-4 border-t border-charcoal/5 flex justify-between items-center">
                    <a
                      href={prod.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold uppercase tracking-wider text-accent-violet hover:text-accent-violet-hover inline-flex items-center gap-1 group"
                    >
                      Open Application
                      <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Publications */}
        <section id="publications" className="py-20 lg:py-24 border-b border-charcoal/5 bg-warm-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-12">
              
              {/* Left Column: Text & Scholar CTA */}
              <div className="lg:col-span-6 space-y-5 text-left">
                <span className="text-[10px] font-bold uppercase tracking-widest text-accent-indigo block">Research & Contributions</span>
                <h3 className="text-3xl font-extrabold tracking-tight text-charcoal">
                  Selected Publications
                </h3>
                <p className="text-sm text-charcoal-muted leading-relaxed font-light max-w-md">
                  A selection of peer-reviewed articles and research papers tracking AI evaluation, multi-agent systems alignment, and operations discrepancies in the labor market.
                </p>
                <div className="pt-2">
                  <a
                    href={personalInfo.socials.scholar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-transparent text-charcoal border border-charcoal/15 hover:bg-charcoal/5 transition-all"
                  >
                    View on Google Scholar
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>

              {/* Right Column: Visual stacked cards mockup */}
              <div className="lg:col-span-6 flex justify-center w-full">
                <div className="relative w-full max-w-sm h-48 flex items-center justify-center paper-stack">
                  
                  {/* Bottom stacked paper */}
                  <div className="absolute w-72 h-36 bg-warm-card border border-charcoal/5 rounded-lg shadow-sm paper-bottom translate-x-3 translate-y-3 rotate-2 transition-transform duration-300 opacity-60">
                    <div className="p-4 space-y-2">
                      <div className="h-2 w-12 bg-charcoal/10 rounded"></div>
                      <div className="h-3 w-40 bg-charcoal/10 rounded"></div>
                      <div className="h-2 w-24 bg-charcoal/5 rounded"></div>
                    </div>
                  </div>
                  
                  {/* Middle stacked paper */}
                  <div className="absolute w-72 h-36 bg-warm-card border border-charcoal/5 rounded-lg shadow-md paper-middle translate-x-1.5 translate-y-1.5 -rotate-1 transition-transform duration-300 opacity-80">
                    <div className="p-4 space-y-2">
                      <div className="h-2 w-16 bg-accent-violet/10 rounded"></div>
                      <div className="h-3 w-48 bg-charcoal/10 rounded"></div>
                      <div className="h-2 w-32 bg-charcoal/5 rounded"></div>
                    </div>
                  </div>

                  {/* Top active paper */}
                  <div className="absolute w-72 h-36 bg-white border border-charcoal/5 rounded-lg shadow-lg paper-top transition-transform duration-300 z-10">
                    <div className="p-4 space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-[8px] font-bold text-accent-indigo tracking-wider uppercase">PNAS 2018</span>
                        <BookOpen size={10} className="text-charcoal-muted" />
                      </div>
                      <h4 className="text-xs font-bold text-charcoal line-clamp-2 leading-snug">
                        Skill discrepancies between research, education, and jobs in AI
                      </h4>
                      <p className="text-[9px] text-charcoal-muted line-clamp-1">
                        O. Scrivner, B. M. AlShebli, S. Weyns, T. Rahwan...
                      </p>
                    </div>
                  </div>

                </div>
              </div>

            </div>

            {/* Selected publications lists */}
            <div className="pt-12 border-t border-charcoal/5">
              {/* Lists */}
              <div className="space-y-6 max-w-4xl mx-auto">
                <div className="divide-y divide-charcoal/5">
                  {publications.map((pub, idx) => (
                    <div key={idx} className="py-6 first:pt-0 last:pb-0">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-base font-bold text-charcoal leading-snug mb-1 font-sans">{pub.title}</h3>
                          <p className="text-sm text-charcoal-muted mb-2 font-light">{pub.authors}</p>
                          <p className="text-xs font-semibold text-charcoal-muted/70 flex items-center gap-2">
                            <span className="italic">{pub.venue}</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-charcoal/20"></span>
                            <span>{pub.year}</span>
                          </p>
                        </div>
                        {pub.link && (
                          <a
                            href={pub.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-charcoal-muted hover:text-accent-indigo border border-charcoal/5 hover:border-charcoal/10 rounded-lg bg-warm-card transition-colors"
                            title="Read Publication"
                          >
                            <ExternalLink size={14} />
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Section: Contact */}
        {/* 
        <section id="contact" className="py-20 lg:py-24 bg-warm-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-accent-indigo block mb-3">Get in Touch</span>
                <h2 className="text-3xl font-extrabold tracking-tight text-charcoal mb-6 font-sans">
                  Let&apos;s Collaborate
                </h2>
                <p className="text-charcoal-muted mb-10 leading-relaxed text-sm">
                  Whether you are looking to collaborate on academic AI research, explore custom engineering solutions for healthcare workflows, or discuss initiatives for public service tech, feel free to reach out.
                </p>

                <div className="space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-charcoal/5 text-charcoal rounded-xl border border-charcoal/5">
                      <Mail size={16} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-charcoal-muted/50 uppercase tracking-wider">Email Address</p>
                      <a href={`mailto:${personalInfo.email}`} className="text-sm font-medium text-charcoal hover:text-accent-indigo transition-colors">
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-charcoal/5 text-charcoal rounded-xl border border-charcoal/5">
                      <MapPin size={16} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-charcoal-muted/50 uppercase tracking-wider">Location</p>
                      <p className="text-sm font-medium text-charcoal">Terre Haute & Bloomington, Indiana</p>
                    </div>
                  </div>
                </div>
              </div>
*/}
              {/* Form Card */}
              {/*
              <div className="bg-warm-card border border-charcoal/5 rounded-xl p-8 shadow-sm">
                <form onSubmit={handleContactSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-[10px] font-bold text-charcoal-muted uppercase tracking-wider mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full text-sm px-4 py-3 rounded-lg border border-charcoal/5 focus:outline-none focus:ring-1 focus:ring-accent-indigo focus:border-accent-indigo bg-warm-gray transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-[10px] font-bold text-charcoal-muted uppercase tracking-wider mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full text-sm px-4 py-3 rounded-lg border border-charcoal/5 focus:outline-none focus:ring-1 focus:ring-accent-indigo focus:border-accent-indigo bg-warm-gray transition-all"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[10px] font-bold text-charcoal-muted uppercase tracking-wider mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full text-sm px-4 py-3 rounded-lg border border-charcoal/5 focus:outline-none focus:ring-1 focus:ring-accent-indigo focus:border-accent-indigo bg-warm-gray transition-all resize-none"
                      placeholder="Your message details..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-charcoal text-white hover:bg-charcoal/90 active:bg-charcoal transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin" size={14} />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send size={14} />
                        Send Message
                      </>
                    )}
                  </button>

                  {submitSuccess && (
                    <div className="flex items-center gap-2.5 p-4 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-100 text-xs font-medium animate-in fade-in duration-200">
                      <CheckCircle2 className="text-emerald-600 shrink-0" size={14} />
                      <span>Thank you! Your message was sent successfully.</span>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
        */}
      </main>

      {/* Dark Navy Footer matching mockup */}
      <footer className="border-t border-white/5 py-16 bg-[#080c14] text-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          
          {/* Column 1 */}
          <div className="space-y-4 text-left">
            <h3 className="text-base font-bold tracking-tight text-white flex items-center gap-2.5 font-sans">
              <span className="w-2 h-2 rounded-full bg-accent-violet"></span>
              Olga Scrivner
            </h3>
            <p className="text-xs text-white/60 leading-relaxed font-light max-w-xs">
              Building trustworthy AI systems for healthcare and society.
            </p>
          </div>
          
          {/* Column 2 */}
          <div className="space-y-4 text-left md:pl-12">
            <h4 className="text-[10px] font-bold text-white/40 tracking-wider uppercase">Connect</h4>
            <div className="flex flex-col gap-2.5 text-xs text-white/80">
              <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent-indigo flex items-center gap-2.5">
                <Linkedin size={14} />
                LinkedIn
              </a>
              <a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent-indigo flex items-center gap-2.5">
                <Github size={14} />
                GitHub
              </a>
              <a href={personalInfo.socials.scholar} target="_blank" rel="noopener noreferrer" className="hover:text-accent-indigo flex items-center gap-2.5">
                <BookOpen size={14} />
                Google Scholar
              </a>
              <a href={`mailto:${personalInfo.email}`} className="hover:text-accent-indigo flex items-center gap-2.5">
                <Mail size={14} />
                Email
              </a>
            </div>
          </div>
          
          {/* Column 3 */}
          <div className="space-y-4 text-left md:text-right md:ml-auto">
            <h4 className="text-[10px] font-bold text-white/40 tracking-wider uppercase">Based In</h4>
            <p className="text-xs font-semibold text-white/90">Indiana, USA</p>
            <p className="text-[10px] text-white/40 pt-4">
              &copy; {new Date().getFullYear()} Olga Scrivner. All rights reserved.
            </p>
          </div>
          
        </div>
      </footer>
    </div>
  );
}
