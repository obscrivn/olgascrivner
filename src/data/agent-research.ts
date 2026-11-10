// Public content only. Evidence: docs/Olga_Scrivner_AI_Agent_Research_Portfolio.docx.
// Restrictions: docs/research-publication-guardrails.md.
const snapshot = "https://github.com/obscrivn/skillbench-meta-reseach/blob/21e69739ffadac3c9dd8e6cc3d6d003cc034d183";

export const researchOverview = {
  title: "How do we build AI agents that work reliably?",
  introduction: "I study reusable capabilities, evaluation methods and agent architectures, exploring how AI systems can act reliably and make effective use of their resources.",
};

export const researchAreas = [
  {
    title: "Reusable Agent Capabilities",
    description: "Discovering, representing and selecting skills that agents can reuse across tasks. A central question is what makes a capability understandable and inspectable.",
  },
  {
    title: "Evaluation and Reliability",
    description: "Assessing task benefit, diagnosing failures and investigating when capabilities should change. This includes examining the reliability of the evaluators themselves.",
  },
  {
    title: "Agent Architecture and Orchestration",
    description: "Exploring how agents, tools and human oversight work together in application workflows, with attention to the boundaries between evidence, explanation and action.",
  },
];

export const researchProjects = [
  {
    id: "codex-skill-miner",
    title: "Codex Skill Miner",
    status: "Implemented offline prototype",
    description: "Discovers recurring engineering workflows in normalized session records and produces candidates for human-reviewed skill development. Each candidate retains explicit Git references and a record of how it met the qualification criteria.",
    note: "Deterministic workflow matching; automatic skill generation remains future work.",
    links: [
      { label: "GitHub", href: "https://github.com/obscrivn/codex-skill-miner" },
      { label: "Engineering journal", href: "https://github.com/obscrivn/codex-skill-miner/blob/1cc75d8c45f7b164e3eaad30e4c10dd8f95a5f72/docs/JOURNAL.md" },
    ],
    reports: [],
  },
  {
    id: "agent-skills-research",
    title: "Agent Skills Research",
    status: "Descriptive studies · Experimental refinement",
    description: "Studies skill packaging, resource linkage and capabilities encoded in instructions, alongside experiments in conservative skill refinement. The work separates what a skill contains from how it might be exposed to, and used by, an agent.",
    note: "Independent validation and paired task evaluation remain future work; performance gains have not been established.",
    links: [{ label: "GitHub", href: "https://github.com/obscrivn/skillbench-meta-reseach" }],
    reports: [
      { label: "Corpus study", href: `${snapshot}/reports/M2-skill-deduplication.md` },
      { label: "Resource linkage", href: `${snapshot}/reports/M3.4-deterministic-resource-dependency-linkage.md` },
      { label: "Capability measurement", href: `${snapshot}/reports/M5.1F-encoded-capability-instrument-freeze.md` },
      { label: "Measurement development", href: `${snapshot}/reports/M5.1R-instrument-revision-rerun.md` },
      { label: "Refinement pilot", href: `${snapshot}/kaggle/m5.4-k/pilot/runtime/stage-4-status.json` },
      { label: "Evaluator errors", href: `${snapshot}/kaggle/reports/M5.4-K-P07-TOOLING-HARDENING.md` },
    ],
  },
];

export const appliedSystems = [
  {
    title: "TravelWell AI",
    status: "Personal prototype",
    description: "Coordinates fitness discovery, ranking and policy checking, distinguishing unknown amenities from confirmed unavailability. The original three-agent prototype explores how recommendations communicate uncertainty.",
    href: "https://github.com/obscrivn/travelwell-ai",
  },
  {
    title: "FDA AI Navigator",
    status: "Team-developed prototype",
    description: "Combines FDA device retrieval and trend analysis with model-generated explanations. This collaborative project provides a setting for examining the relationship between retrieved sources and generated answers.",
    href: "https://github.com/scrivner-solutions/FDA-AI-Devices",
  },
];

export const researchWriting = [
  {
    title: "The Science of AI Skills — Chapter 1: The Evolution of AI System Engineering",
    category: "Conceptual essay",
    attribution: "Olga Scrivner",
    date: "24 July 2026",
    description: "Positions reusable capabilities within the development of prompts, retrieval, agents and execution loops.",
    href: "https://medium.com/@obscrivn_21635/the-science-of-ai-skills-chapter-1-the-evolution-of-ai-system-engineering-f4218386e3ee",
  },
  {
    title: "The Science of AI Skills — Chapter 2: Defining the AI Skills",
    category: "Conceptual essay",
    attribution: "Olga Scrivner",
    date: "27 July 2026",
    description: "Compares reusable skill packaging across agent frameworks at the time of publication.",
    href: "https://medium.com/@obscrivn_21635/the-science-of-ai-skills-chapter-2-defining-the-ai-skills-23406c12b2d5",
  },
  {
    title: "The Science of AI Skills — Chapter 3: A Three-Dimensional Framework for Reusable AI Skills",
    category: "Conceptual essay",
    attribution: "Olga Scrivner",
    date: "30 July 2026",
    description: "Proposes architectural components, functional roles and composition levels as a descriptive vocabulary, without establishing a validated quality ladder.",
    href: "https://medium.com/@obscrivn_21635/the-science-of-ai-skills-chapter-3-a-three-dimensional-framework-for-reusable-ai-skills-02f439936e68",
  },
  {
    title: "Safety by Design: Prioritizing the Protection of Children and Youth in the Development of Generative AI Systems",
    category: "Related scholarship · Handbook chapter",
    attribution: "Rebecca S. Portnoff, Tiffany Saade, Prasanna Vijayanathan, Olga Scrivner and colleagues",
    date: "Online 15 August 2026 · Publisher citation year 2027",
    description: "A coauthored contribution to the AI and Ethics Handbook on child safety and governance in generative AI development.",
    href: "https://link.springer.com/rwe/10.1007/978-3-032-12201-8_18",
  },
];

export const researchQuestionThemes = [
  {
    title: "Capability Discovery and Representation",
    description: "When should a workflow become a reusable skill, and how should its instructions and resources relate to actual use?",
  },
  {
    title: "Evaluation, Reliability, and Improvement",
    description: "How should agents select and invoke skills or abstain, recover from failures and preserve capabilities through refinement? How can evaluation avoid inducing errors and test benefit on held-out tasks?",
  },
  {
    title: "Agent Architecture and Computational Efficiency",
    description: "How do orchestration, validation and approval boundaries shape task outcomes, token use, latency and computational cost?",
  },
];
