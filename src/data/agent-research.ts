// Public content only. Evidence: docs/Olga_Scrivner_AI_Agent_Research_Portfolio.docx.
// Restrictions: docs/research-publication-guardrails.md.
const snapshot = "https://github.com/obscrivn/skillbench-meta-reseach/blob/21e69739ffadac3c9dd8e6cc3d6d003cc034d183";

export interface ResearchArtifact {
  id: string;
  title: string;
  status: string;
  date: string;
  summary: string;
  evidence: string;
  limitation: string;
  links: { label: string; href: string }[];
}

export const researchOverview = {
  title: "AI Agent Engineering Research",
  introduction: "I study how reusable AI agent capabilities can be discovered, described and evaluated. My work combines deterministic analysis of skill packages, evidence-linked measurement and conservative refinement experiments.",
  context: "Application prototypes provide settings for investigating how retrieved evidence, model-generated explanations, validation and user approval interact.",
  reviewed: "9 November 2026",
};

export const researchFoundations = [
  {
    title: "Discovering reusable capabilities",
    description: "Recurring engineering workflows provide evidence for candidate skills. My work examines explicit qualification criteria and inspectable records before promotion into reusable capabilities.",
  },
  {
    title: "Describing skills and their contents",
    description: "I distinguish physical packaging, capabilities encoded in instructions and static resource linkage. These descriptive measures motivate further study of runtime exposure and actual use.",
  },
  {
    title: "Evaluating change conservatively",
    description: "Refinement requires evidence that a change is warranted. I investigate no-op decisions, capability preservation and evaluator errors before assessing downstream task benefit.",
  },
];

export const researchArtifacts: ResearchArtifact[] = [
  {
    id: "codex-skill-miner",
    title: "Codex Skill Miner",
    status: "Public offline MVP",
    date: "July 2026",
    summary: "An offline pipeline for discovering repeated engineering workflows in normalized session records, using exact fingerprints, explicit Git evidence and fixed qualification gates.",
    evidence: "The bundled demonstration identifies one qualified candidate from six canonical sessions, supported by three independent commits.",
    limitation: "Candidates require human review. Native transcript ingestion, semantic ranking and automatic skill generation remain future work; supplied session events do not prove causal success.",
    links: [
      { label: "Code and demonstration", href: "https://github.com/obscrivn/codex-skill-miner" },
      { label: "Engineering journal", href: "https://github.com/obscrivn/codex-skill-miner/blob/1cc75d8c45f7b164e3eaad30e4c10dd8f95a5f72/docs/JOURNAL.md" },
    ],
  },
  {
    id: "corpus-and-linkage",
    title: "Skill corpus and resource linkage",
    status: "Descriptive study",
    date: "August 2026",
    summary: "Deterministic corpus tooling identifies 250 byte-distinct skill implementations in a pinned snapshot of the external SkillsBench corpus and records static links to bundled resources.",
    evidence: "Of 654 resource files, 320 are directly linked, 16 are reached through local dependencies and 318 have no detected direct or local dependency path.",
    limitation: "Counts describe this snapshot. Byte identity is not semantic equivalence, and no detected path does not imply disuse. Static linkage does not establish runtime use, quality or performance benefit.",
    links: [
      { label: "Corpus study", href: `${snapshot}/reports/M2-skill-deduplication.md` },
      { label: "Public M3.4 linkage report", href: `${snapshot}/reports/M3.4-deterministic-resource-dependency-linkage.md` },
    ],
  },
  {
    id: "capability-instrument",
    title: "Encoded capability instrument",
    status: "Calibrated instrument",
    date: "August 2026",
    summary: "A versioned instrument describes capabilities encoded in skill instructions through evidence-linked labels for procedures, domain knowledge, demonstrations, tool guidance, validation and decision logic.",
    evidence: "The frozen v1.0.0 codebook separates instructional content from physical packaging and records explicit boundary decisions during calibration.",
    limitation: "Calibration used a single model. Independent annotation agreement and predictive validity for task performance have not been established.",
    links: [
      { label: "Instrument freeze", href: `${snapshot}/reports/M5.1F-encoded-capability-instrument-freeze.md` },
      { label: "Calibration record", href: `${snapshot}/reports/M5.1R-instrument-revision-rerun.md` },
    ],
  },
  {
    id: "refinement-pilot",
    title: "Conservative skill refinement",
    status: "Experimental pilot",
    date: "August 2026",
    summary: "Experimental review procedures investigate when to revise a skill, preserve it unchanged or reverse an attempted repair.",
    evidence: "The final seven-case pilot retained one refinement, produced five no-ops and reverted one change. The reverted case exposed tooling that misclassified external documentation URLs as local dependencies.",
    limitation: "The pilot stopped before paired task evaluation and demonstrates no downstream performance benefit. Some distributed validation helpers remain incomplete; the tooling does not establish enforced library safety.",
    links: [
      { label: "Final pilot record", href: `${snapshot}/kaggle/m5.4-k/pilot/runtime/stage-4-status.json` },
      { label: "Evaluator error analysis", href: `${snapshot}/kaggle/reports/M5.4-K-P07-TOOLING-HARDENING.md` },
    ],
  },
];

export const appliedPrototypes: ResearchArtifact[] = [
  {
    id: "travelwell-ai",
    title: "TravelWell AI",
    status: "Personal application prototype",
    date: "July 2026",
    summary: "A multi-agent fitness-finder prototype separating discovery, ranking and policy checking, including explicit unknown-versus-unavailable amenity states.",
    evidence: "The original implementation coordinates three ADK agents and includes authored skill packages for research, ranking and validation.",
    limitation: "Policy checking uses an LLM. Tools combine live data, fixtures and hardcoded facts. No controlled skill-loading experiment or measured ablation benefit has been established.",
    links: [{ label: "Original TravelWell AI", href: "https://github.com/obscrivn/travelwell-ai" }],
  },
  {
    id: "fda-ai-navigator",
    title: "FDA AI Navigator",
    status: "Team-developed prototype",
    date: "July 2026",
    summary: "An evidence exploration prototype combining deterministic FDA device retrieval and trend analysis with model-generated explanations.",
    evidence: "The public implementation includes database queries, FDA submission links, structured responses and a Gemini/ADK tool-calling path.",
    limitation: "Citation and summary grounding are not fully enforced; confidence is not independently validated. This is an exploration prototype without established clinical validation.",
    links: [{ label: "Team project", href: "https://github.com/scrivner-solutions/FDA-AI-Devices" }],
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
    questions: [
      "What evidence justifies promoting a recurring workflow into a reusable capability?",
      "How should skills represent packaged resources and encoded instructions, and how do these relate to runtime exposure and actual use?",
    ],
  },
  {
    title: "Evaluation, Reliability, and Improvement",
    questions: [
      "How should agents select and invoke capabilities, abstain when evidence is insufficient, and recover from failures?",
      "How can refinement preserve capabilities and avoid evaluator-induced errors, and which changes improve held-out performance under controlled, paired evaluation?",
    ],
  },
  {
    title: "Agent Architecture and Computational Efficiency",
    questions: [
      "How do agent composition, validation and approval boundaries affect reliability and task outcomes?",
      "How should task benefit be evaluated alongside token use, latency and computational cost?",
    ],
  },
];

export const researchStatus = "This work includes public research implementations, descriptive analyses, conceptual writing and application prototypes. Recorded results retain their stated scope. The capability instrument has not been independently validated, and the refinement pilot has not established downstream benchmark gains. Controlled paired evaluation and runtime tracing remain open research needs.";
