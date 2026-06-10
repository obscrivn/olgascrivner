export interface Project {
  title: string;
  description: string;
  longDescription?: string;
  category: "Flagship" | "Core Work" | "AI Impact" | "Community";
  tags: string[];
  link?: string;
  github?: string;
  role: string;
}

export interface Experience {
  role: string;
  organization: string;
  period: string;
  description: string;
  current?: boolean;
}

export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
  link?: string;
  type: "journal" | "conference" | "chapter" | "report";
}

export interface Talk {
  title: string;
  venue: string;
  date: string;
  type: "Keynote" | "Panel" | "Invited Talk" | "Presentation";
  link?: string;
}

export interface Article {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
}

export interface ResearchProduct {
  title: string;
  description: string;
  link: string;
  tags: string[];
}

export const personalInfo = {
  name: "Olga Scrivner",
  title: "AI Researcher • Educator • Builder",
  headline: "Building trustworthy AI systems for healthcare and society.",
  bio: "Working at the intersection of AI evaluation, agentic AI, healthcare operations, and responsible AI.",
  subHeadline: "Co-Founder & Head of AI at Scrivner Solutions • Building Radient AI • Former OpenAI Expert Consultant • Assistant Professor at Rose-Hulman Institute of Technology",
  email: "olga@scrivnersolutions.com",
  socials: {
    linkedin: "https://www.linkedin.com/in/olgascrivner/",
    github: "https://github.com/oscrivner",
    scholar: "https://scholar.google.com/citations?user=M4J1-awAAAAJ",
    orcid: "https://orcid.org/0000-0002-3687-7323",
  }
};

export const researchInterests = [
  "AI Evaluation",
  "Agentic AI & Multi-Agent Systems",
  "Healthcare Operations Intelligence",
  "Responsible AI",
  "Natural Language Processing",
  "Machine Learning"
];

export const experiences: Experience[] = [
  {
    role: "Co-Founder & Head of AI",
    organization: "Scrivner Solutions / Radient AI",
    period: "2021 – Present",
    description: "Directing AI architecture and product engineering for Radient AI, an operations intelligence platform deployed in clinical and healthcare settings to streamline radiology workflows.",
    current: true
  },
  {
    role: "Assistant Professor of Computer Science",
    organization: "Rose-Hulman Institute of Technology",
    period: "2020 – Present",
    description: "Teaching core computer science, machine learning, and AI. Directing student research initiatives in agentic workflows, natural language processing, and ethical AI development.",
    current: true
  },
  {
    role: "Expert Consultant",
    organization: "OpenAI",
    period: "2023 – 2024",
    description: "Contributed to OpenAI's human data initiatives, model alignment, and evaluations, ensuring safety, reliability, and precision of large-scale foundation models.",
  },
  {
    role: "Research Scientist",
    organization: "CNS Cyberinfrastructure for Network Science Center, Indiana University Bloomington",
    period: "2018 – 2020",
    description: "Conducted advanced NLP, machine learning, and network science research, focused on automated text mining, semantic analysis, and skill discrepancy mapping.",
  }
];

export const projects: Project[] = [
  {
    title: "Radient AI",
    description: "An AI-powered operations intelligence platform designed to optimize radiology workflows, reduce report turnaround times, and assist healthcare systems with real-time operational insights.",
    category: "Flagship",
    role: "Co-Founder & Head of AI",
    tags: ["Healthcare AI", "Agentic Systems", "LLM Orchestration", "Operations"],
    link: "https://scrivnersolutions.com"
  },
  {
    title: "Scrivner Solutions",
    description: "An AI consultancy and software development firm building custom generative AI pipelines, robust model evaluation frameworks, and enterprise agentic systems.",
    category: "Core Work",
    role: "Head of AI & Partner",
    tags: ["Consulting", "Generative AI", "Enterprise AI", "Engineering"],
    link: "https://scrivnersolutions.com"
  },
  {
    title: "AI Evaluation & Multi-Agent Workflows",
    description: "Designing frameworks for assessing LLM safety, output reliability, and multi-agent system coordination. Developing robust benchmark methods for industry-grade deployments.",
    category: "AI Impact",
    role: "Researcher & Consultant",
    tags: ["AI Evaluation", "Multi-Agent Systems", "Responsible AI", "Safety"]
  },
  {
    title: "IEEE HTC Initiatives",
    description: "Harnessing technology for humanitarian assistance. Coordinating initiatives to make AI and computer science resources accessible for public service and community alignment.",
    category: "Community",
    role: "Committee Chair",
    tags: ["Tech for Good", "AI Literacy", "Community Leadership"]
  }
];

export const researchProducts: ResearchProduct[] = [
  {
    title: "Language Variation Suite",
    description: "A theoretical and methodological web application for linguistic data analysis, enabling researchers to explore and analyze phonetic and syntactic variation dynamically.",
    link: "https://languagevariationsuite.shinyapps.io/Pages/",
    tags: ["Linguistics", "R Shiny", "Data Visualization", "Linguistic Analysis"]
  },
  {
    title: "Interactive Text Mining Suite",
    description: "A visual text mining suite built for literary studies and text corpora exploration, allowing users to run Topic Modeling, Sentiment Analysis, and word association algorithms interactively.",
    link: "https://languagevariationsuite.shinyapps.io/TextMining/",
    tags: ["NLP", "Text Mining", "R Shiny", "Topic Modeling", "Literary Analytics"]
  }
];

export const publications: Publication[] = [
  {
    title: "Skill discrepancies between research, education, and jobs reveal the critical need to supply soft skills for the data economy",
    authors: "O. Scrivner, B. M. AlShebli, S. Weyns, T. Rahwan, M. AlSayyed",
    venue: "Proceedings of the National Academy of Sciences (PNAS)",
    year: "2018",
    type: "journal",
    link: "https://www.pnas.org/doi/10.1073/pnas.1804130115"
  },
  {
    title: "Back to business and (re) employing workers? Labor market activity during state COVID-19 reopenings",
    authors: "O. Scrivner, et al.",
    venue: "NBER Working Paper / Policy Report",
    year: "2020",
    type: "report",
    link: "https://www.nber.org/papers/w27585"
  },
  {
    title: "Augmented reality digital technologies (ARDT) for foreign language teaching and learning",
    authors: "O. Scrivner, et al.",
    venue: "Computer Assisted Language Learning",
    year: "2016",
    type: "journal",
    link: "https://www.tandfonline.com/doi/abs/10.1080/09588221.2016.1144799"
  }
];

export const talks: Talk[] = [
  {
    title: "Building Reliable AI: From Evaluations to Clinical Deployments",
    venue: "Midwest Artificial Intelligence Conference",
    date: "Fall 2024",
    type: "Invited Talk"
  },
  {
    title: "Democratizing Agentic AI for Healthcare Systems",
    venue: "Women in Data Science (WiDS) Conference",
    date: "Spring 2024",
    type: "Keynote"
  },
  {
    title: "Responsible AI & Multi-Agent Collaboration: The Next Frontier",
    venue: "IEEE Central Indiana Section Seminar",
    date: "Late 2023",
    type: "Presentation"
  },
  {
    title: "Aligning Foundations Models: Human Feedback in the Loop",
    venue: "Indiana University Bloomington NLP Colloquium",
    date: "Fall 2023",
    type: "Invited Talk"
  }
];

export const writingArticles: Article[] = [
  {
    title: "Evaluating Agentic Workflows: Beyond Standard Accuracy Metrics",
    excerpt: "Standard LLM benchmarks fail when agents interact dynamically. We discuss state-space tracing, tool calling fidelity, and how to evaluate agentic systems for enterprise readiness.",
    date: "May 2026",
    readTime: "6 min read",
    slug: "evaluating-agentic-workflows"
  },
  {
    title: "Operationalizing AI in Radiology: A Practical Framework",
    excerpt: "Deploying AI in healthcare isn't just about model precision. It requires careful orchestration, human-in-the-loop validation, and addressing integration friction with legacy PACS systems.",
    date: "March 2026",
    readTime: "8 min read",
    slug: "operationalizing-ai-radiology"
  },
  {
    title: "Teaching the Next Generation of AI Builders at Rose-Hulman",
    excerpt: "How we structure computer science curriculum to move students from passive consumers of APIs to active developers of responsible, self-correcting machine learning systems.",
    date: "January 2026",
    readTime: "5 min read",
    slug: "teaching-next-gen-ai-builders"
  }
];
