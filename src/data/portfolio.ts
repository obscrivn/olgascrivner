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
  subHeadline: "Co-Founder & Head of AI at Scrivner Solutions Inc • Building Radient AI • Former OpenAI Expert Consultant • Assistant Professor at Rose-Hulman Institute of Technology",
  email: "olga@scrivnersolutions.com",
  socials: {
    linkedin: "https://www.linkedin.com/in/olgascrivner/",
    github: "https://github.com/obscrivn",
    scholar: "https://scholar.google.com/citations?user=M4J1-awAAAAJ",
    orcid: "https://orcid.org/0000-0001-7267-1733",
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
    period: "2022 – Present",
    description: "Directing AI architecture and product engineering for Radient AI, an operations intelligence platform deployed in clinical and healthcare settings to streamline radiology workflows.",
    current: true
  },
  {
    role: "Assistant Professor of Computer Science",
    organization: "Rose-Hulman Institute of Technology",
    period: "2021 – Present",
    description: "Teaching core computer science, machine learning, and AI. Directing student research initiatives in agentic workflows, natural language processing, and ethical AI development.",
    current: true
  },
  {
    role: "Expert Consultant",
    organization: "OpenAI",
    period: "2024 – 2025",
    description: "Contributed to OpenAI's human data initiatives, model alignment, and evaluations, ensuring safety, reliability, and precision of large-scale foundation models.",
  },
  {
    role: "Research Scientist",
    organization: "CNS Cyberinfrastructure for Network Science Center, Indiana University Bloomington",
    period: "2017 – 2021",
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
    link: "https://github.com/scrivner-solutions/radient-ai-demo"
  },
  {
    title: "Scrivner Solutions",
    description: "An AI consultancy and software development firm building custom generative AI pipelines, robust model evaluation frameworks, and enterprise agentic systems.",
    category: "Core Work",
    role: "Head of AI & Partner",
    tags: ["Consulting", "Generative AI", "Enterprise AI", "Engineering"],
    link: "https://scrivner-solutions.com/"
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
    link: "https://www.pnas.org/doi/full/10.1073/pnas.1804247115"
  },
  {
    title: "Back to business and (re) employing workers? Labor market activity during state COVID-19 reopenings",
    authors: "O. Scrivner, et al.",
    venue: "NBER Working Paper / Policy Report",
    year: "2020",
    type: "report",
    link: "https://www.nber.org/system/files/working_papers/w27419/w27419.pdf"
  },
  {
    title: "Mapping the co-evolution of artificial intelligence, robotics, and the internet of things over 20 years (1998-2017)",
    authors: "O. Scrivner, et al.",
    venue: "Plos One",
    year: "2020",
    type: "journal",
    link: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0242984"
  },
  {
    title: "The AI Applications in Radiology: Regulation, Evaluation, and Usage",
    authors: "O. Scrivner, et al.",
    venue: "Proceedings of the Midwest Instruction and Computing Symposium",
    year: "2024",
    type: "conference",
    link: "https://d1wqtxts1xzle7.cloudfront.net/113150443/The_AI_Applications_in_Radiology_Olinger_Scrivner_Proceedings_MICS_2024-libre.pdf"
  }
];




