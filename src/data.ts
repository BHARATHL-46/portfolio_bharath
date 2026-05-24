/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  NavLink,
  StatCounter,
  BentoCard,
  SkillCategory,
  ProjectItem,
  ExperienceItem,
  EducationItem,
  CertificationItem
} from "./types";

export const navLinks: NavLink[] = [
  { label: "about", href: "#about" },
  { label: "skills", href: "#skills" },
  { label: "projects", href: "#projects" },
  { label: "experience", href: "#experience" },
  { label: "education", href: "#education" },
  { label: "contact", href: "#contact" }
];

export const statCounters: StatCounter[] = [
  { value: "6+", label: "ai systems built", subLabel: "End-to-end engineered" },
  { value: "3+", label: "years coding", subLabel: "Python & TypeScript" },
  { value: "12+", label: "tech stack", subLabel: "Tools, libraries, frameworks" },
  { value: "5+", label: "projects shipped", subLabel: "In production status" }
];

export const bentoCards: BentoCard[] = [
  {
    iconType: "brain",
    value: "6+",
    title: "AI Systems",
    description: "End-to-end deployed"
  },
  {
    iconType: "code",
    value: "5+",
    title: "Languages",
    description: "Proficient in"
  },
  {
    iconType: "bolt",
    value: "8+",
    title: "Frameworks",
    description: "Production experience"
  },
  {
    iconType: "terminal",
    value: "2027",
    title: "Graduation",
    description: "AI & DS @ BAIT"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "LANGUAGES",
    bulletColor: "bg-emerald-500",
    textColor: "text-emerald-400 border-emerald-950/45",
    skills: ["Python", "Java", "C", "C++", "JavaScript"]
  },
  {
    title: "AI & ML",
    bulletColor: "bg-purple-500",
    textColor: "text-purple-400 border-purple-950/45",
    skills: ["Machine Learning", "RAG", "Agentic AI", "NLP", "Prompt Engineering"]
  },
  {
    title: "FRAMEWORKS",
    bulletColor: "bg-blue-500",
    textColor: "text-blue-400 border-blue-950/45",
    skills: ["LangChain", "CrewAI", "FastAPI", "PyTorch", "OpenCV", "MediaPipe"]
  },
  {
    title: "FRONTEND",
    bulletColor: "bg-amber-500",
    textColor: "text-amber-400 border-amber-950/45",
    skills: ["React", "Next.js", "HTML/CSS"]
  },
  {
    title: "DEV TOOLS",
    bulletColor: "bg-teal-500",
    textColor: "text-teal-400 border-teal-950/45",
    skills: ["Git", "GitHub", "VS Code"]
  },
  {
    title: "CORE CS",
    bulletColor: "bg-yellow-500",
    textColor: "text-yellow-400 border-yellow-950/45",
    skills: ["OOP", "DSA", "System Design"]
  }
];

export const projectItems: ProjectItem[] = [
  {
    id: "jewellery-finder",
    title: "Jewellery Finder",
    subtitle: "Multimodal Search System",
    description: "Full-stack semantic search platform enabling joint image and text retrieval for jewellery products. Integrates CLIP embeddings for semantic similarity, OCR for product indexing, and clustering algorithms for efficient catalogue management.",
    highlightLine: "-> Automated product indexing pipeline with real-time admin dashboard and sub-second semantic retrieval.",
    tags: ["FastAPI", "PyTorch", "OpenAI CLIP", "OCR", "Python", "React"],
    githubUrl: "https://github.com/sakthibharath",
    liveUrl: "https://github.com/sakthibharath",
    isFeatured: true
  },
  {
    id: "ai-teaching-agency",
    title: "Personalised AI Powered Education Platform",
    subtitle: "AI-Powered Education Platform",
    description: "Built an AI-driven education platform using RAG architecture and LLMs to automate course content generation, doubt resolution, and student assessments. Processes uploaded learning materials into embeddings stored in Pinecone for semantic retrieval and context-aware AI tutoring.",
    highlightLine: "-> Integrated voice-based AI tutoring with real-time semantic retrieval, dynamic quiz generation, and multilingual conversational learning.",
    tags: ["Next.js", "Gemini 2.5 Flash", "RAG", "Pinecone", "Whisper", "GPT-4o-mini-TTS", "TypeScript"],
    githubUrl: "https://github.com/BHARATHL-46/AI-Training-Agency",
    liveUrl: "https://github.com/sakthibharath",
    isFeatured: true
  },
  {
    id: "loan-evaluator",
    title: "Regulatory Loan Evaluation Assistant",
    subtitle: "RAG-Powered Document Intelligence",
    description: "End-to-end AI system for automated loan document analysis. Extracts and understands complex regulatory documents using OCR + LangChain, implements FAISS-based similarity retrieval, and enforces factual accuracy via prompt guardrails.",
    highlightLine: "-> Reduced manual document review time by automating extraction, similarity search, and compliance checking workflows.",
    tags: ["Python", "LangChain", "FAISS", "OCR", "FastAPI", "Prompt Engineering"],
    githubUrl: "https://github.com/BHARATHL-46",
    liveUrl: "https://github.com/sakthibharath",
    isFeatured: true
  },
  {
    id: "genai-aptitude-generator",
    title: "Aptitude Generator",
    subtitle: "AI-Powered Assessment Generation Platform",
    description: "Developed a Generative AI-based aptitude platform that automatically creates quantitative, logical reasoning, verbal ability, and grammar questions using LLMs. The system generates adaptive quizzes, evaluates answers in real time, and provides personalized learning insights based on student performance.",
    highlightLine: "-> Built an AI-driven question generation engine with dynamic difficulty adjustment, instant evaluation, and personalized aptitude training.",
    tags: ["Generative AI", "LLMs", "React", "Node.js", "MongoDB", "Python", "REST API"],
    githubUrl: "https://github.com/BHARATHL-46/Prep-Apti",
    liveUrl: "https://github.com/sakthibharath",
    isFeatured: true
  },
  {
    id: "hotel-management-app",
    title: "Hotel Management App",
    subtitle: "Smart Hotel Operations System",
    description: "Developed a full-stack hotel management platform to streamline room booking, customer management, billing, and staff operations. Includes real-time room availability tracking, secure authentication, automated invoice generation, and centralized admin controls for efficient hotel management.",
    highlightLine: "-> Built an end-to-end hotel automation system with real-time booking management, analytics dashboard, and seamless customer handling.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS", "REST API"],
    githubUrl: "https://github.com/BHARATHL-46/Hotel-Management-System",
    liveUrl: "https://github.com/sakthibharath",
    isFeatured: false
  }
];

export const experienceItems: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Web Developer Intern",
    company: "Code Soft",
    locationState: "Online Internship",
    dateRange: "Feb 2025 - Mar 2025",
    description: "Developed responsive web applications using HTML, CSS, and JavaScript. Collaborated via Git/GitHub workflows and applied testing and debugging practices to deliver production-ready solutions.",
    tags: ["HTML", "CSS", "JavaScript", "Git", "GitHub"]
  }
];

export const educationItems: EducationItem[] = [
  {
    id: "edu-1",
    degree: "B.E. – Artificial Intelligence and Data Science",
    school: "Bannari Amman Institute of Technology",
    dateRange: "2023 - 2027",
    statusText: "Ongoing",
    metricLabel: "CGPA",
    metricValue: "81.04%"
  },
  {
    id: "edu-2",
    degree: "HSC (12th Standard)",
    school: "Vivek Vidyalaya Matric Higher Secondary School",
    dateRange: "2023",
    statusText: "Completed",
    metricLabel: "Score Range",
    metricValue: "91%"
  },
  {
    id: "edu-3",
    degree: "SSLC (10th Standard)",
    school: "Vivek Vidyalaya Matric Higher Secondary School",
    dateRange: "2021",
    statusText: "Completed",
    metricLabel: "Score Range",
    metricValue: "100%"
  }
];

export const contactDetails = {
  email: "sakthibharath1234@gmail.com",
  github: "github.com/BHARATHL-46",
  linkedin: "linkedin.com/in/bharath-l-326845322",
  location: "Tamil Nadu, India",
  fullAddress: "Tamil Nadu, Coimbatore, India",
  status: "open to opportunities"
};

export const certificationItems: CertificationItem[] = [
  {
    id: "cert-1",
    title: "Neural Networks and Deep Learning",
    issuer: "DeepLearning.AI",
    dateIssued: "2024",
    highlightTag: "ai"
  },
  {
    id: "cert-2",
    title: "Crash Course on Python",
    issuer: "Google Career Certificates",
    dateIssued: "2023",
    highlightTag: "python"
  },
  {
    id: "cert-3",
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "DeepLearning.AI",
    dateIssued: "2024",
    highlightTag: "ml"
  }
];
