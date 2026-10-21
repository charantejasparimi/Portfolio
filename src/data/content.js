// All copy and links for the site live here. Facts come from the resume only.

export const links = {
  email: "parimicharantejas@gmail.com",
  linkedin: "https://www.linkedin.com/in/charantejasparimi/",
  github: "https://github.com/charantejasparimi",
  leetcode: "https://leetcode.com/charantejasparimi",
  orcid: "https://orcid.org/0009-0006-5395-407X",
  upfound: "https://upfound.in",
  plant: "https://github.com/charantejasparimi/Plant_Disease_Detection",
  // Set to "/resume.pdf" once a current PDF (without phone number) is in public/.
  resume: null,
};

export const hero = {
  name: "Charan Tejas Parimi",
  lead: "Full stack AI engineer. I build web apps and the AI features inside them.",
  facts: ["Chennai, India", "Around 2 years of experience", "15-day notice period"],
};

export const projects = {
  upfound: {
    meta: "Freelance, Nov 2025 to Mar 2026",
    title: "Upfound",
    line: "An AI hiring and networking platform with 2.5K+ signups.",
    points: [
      "Candidate scoring and job matching with open-source LLMs and guardrails.",
      "Job applications and a networking feed, on Node.js, Prisma and PostgreSQL on AWS.",
      "Real-time chat with Convex, OAuth sign-in, and a React, TypeScript and Redux front end tested with Jest.",
    ],
    linkLabel: "Visit upfound.in",
  },
  plant: {
    meta: "Nov 2024 to Mar 2025. Published at IC4S 2024.",
    title: "Plant disease detection",
    line: "Upload a leaf photo. Get the disease and how to treat it.",
    stat: "95.68%",
    statCaption: "test accuracy on 54K images across 38 classes",
    points: [
      "Compared ResNet18, AlexNet and VGG19 on the PlantVillage dataset.",
      "React front end and a FastAPI back end tested with pytest.",
      "A RAG chatbot answers follow-up questions about the disease.",
    ],
    linkLabel: "View code on GitHub",
  },
};

export const experience = [
  {
    company: "Saptang Labs",
    role: "Junior Software Engineer",
    dates: "Jun 2025 to present",
    place: "Chennai",
    points: [
      "FastAPI services for document ingestion and chat over 2K+ documents (PDF, DOCX, XLSX, TXT) on a GraphRAG platform used by client analysts.",
      "Hybrid keyword and vector retrieval over ChromaDB with LangChain.",
      "LLM-based entity and relationship extraction into an ArangoDB graph database.",
    ],
  },
  {
    company: "Pinaca Technologies",
    role: "Software Development Intern",
    dates: "Dec 2024 to May 2025",
    place: "Chennai",
    points: [
      "React front end of a social media monitoring platform, with trend, sentiment and risk alert dashboards across 5 sources.",
      "Page load time cut by 30%, using TanStack Query for fetching and caching live data.",
      "MongoDB ingestion 40% faster, RabbitMQ pipelines for 1K+ posts a day, and a RAG chatbot over the data.",
    ],
  },
];

export const skills = [
  { group: "Frontend", items: ["React", "TypeScript", "Redux", "TanStack Query", "Tailwind CSS", "HTML", "CSS"] },
  { group: "Backend", items: ["FastAPI", "REST APIs", "GraphQL", "Node.js", "Express", "Prisma ORM", "RabbitMQ", "Convex", "OAuth", "Django"] },
  { group: "AI and LLMs", items: ["OpenAI SDK", "LangChain", "RAG", "GraphRAG", "Ollama", "CNNs", "LLM agents"] },
  { group: "Languages", items: ["Python", "TypeScript", "JavaScript", "SQL"] },
  { group: "Data and DevOps", items: ["PostgreSQL", "MongoDB", "Redis", "ChromaDB", "ArangoDB", "Docker", "Jenkins CI/CD", "AWS", "Git"] },
  { group: "Testing", items: ["pytest", "Jest", "React Testing Library"] },
];

export const education = {
  school: "Vishnu Institute of Technology, Bhimavaram",
  degree: "B.Tech in Computer Science, Honors in Artificial Intelligence",
  detail: "2021 to 2025. CGPA 8.8 out of 10.",
};

export const recognition = [
  {
    text: "Paper: Optimizing Crop Health: Evaluating CNN Performance in Plant Disease Detection, IC4S 2024.",
    link: { label: "ORCID profile", href: links.orcid },
  },
  { text: "Best Project Award, Full Stack Web Development showcase (StudyOwl)." },
  { text: "Second place, Machine Learning Hackathon at VIT." },
];
