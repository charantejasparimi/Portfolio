export const links = {
  email: "parimicharantejas@gmail.com",
  linkedin: "https://www.linkedin.com/in/charantejasparimi/",
  github: "https://github.com/charantejasparimi",
  orcid: "https://orcid.org/0009-0006-5395-407X",
  resume:
    "https://drive.google.com/file/d/1k0t6x4XlqNFq0IZYTQzcAs0HeKUbYbqH/view?usp=sharing",
  upfound: "https://upfound.in",
};

export const work = [
  {
    title: "Junior Software Engineer",
    org: "Saptang Labs",
    meta: "Chennai, June 2025 to present",
    text: "I work on several projects at once, some of them on site with clients. The largest piece so far is a GraphRAG platform over more than 2,000 documents. I also build background jobs with Celery.",
  },
  {
    title: "Freelance developer",
    org: "Upfound",
    meta: "upfound.in",
    link: links.upfound,
    text: "Upfound is an AI-powered startup ecosystem with hiring, founder networking and community, a resume builder, profile analysis and talent search. It has more than 2,000 signups. I built it as freelance work. Its resume parser reads an uploaded resume and gives a startup-fit score, using open-source LLMs with guardrails. Redis is part of the stack.",
  },
];

export const projects = [
  {
    title: "Plant disease detection with CNNs",
    meta: "August to December 2023",
    text: "Compared VGG19, AlexNet and ResNet18 on plant disease images and built a real-time detection web app. ResNet was the most accurate, thanks to its skip connections. The paper was published at IC4S 2024.",
    tags: "Python, PyTorch, FastAPI, Firebase",
    links: [{ label: "Source", href: "https://github.com/charantejasparimi/Plant_Disease_Detection" }],
  },
  {
    title: "CampusCart",
    meta: "June to October 2023",
    text: "An e-commerce platform. It won the Best Project Award.",
    tags: "Node.js, Express.js, Firebase, JavaScript",
    links: [
      { label: "Demo", href: "https://youtu.be/XcFyzjXvoQk" },
      { label: "Source", href: "https://github.com/charantejasparimi/CampusCart_-3DBrains-" },
    ],
  },
  {
    title: "Sports scheduler",
    meta: "January to February 2024",
    text: "A full-stack scheduling app for admins and players, with game management and user sign-in.",
    tags: "Node.js, Express.js, PostgreSQL, Firebase",
    links: [
      { label: "Demo", href: "https://youtu.be/yKQztm-Yu6I" },
      { label: "Source", href: "https://github.com/charantejasparimi/sports-scheduler" },
    ],
  },
  {
    title: "Hostel complaint system",
    meta: "June to October 2023",
    text: "A web app for managing hostel complaints that improved communication between students and admins.",
    tags: "MongoDB, Express.js, React, Node.js, JWT",
    links: [
      { label: "Live site", href: "https://hostel-managment.netlify.app/" },
      { label: "Source", href: "https://github.com/charantejasparimi/Hostel-Complaints-Managment" },
    ],
  },
];

export const skills = [
  { group: "Languages", items: "Python, JavaScript, TypeScript, SQL" },
  {
    group: "Back end",
    items: "FastAPI, Django, Node.js, Express, REST APIs, GraphQL, Celery, RabbitMQ, Redis, webhooks, microservices",
  },
  { group: "Front end", items: "React, Redux, Tailwind, Jest, React Testing Library" },
  { group: "Data", items: "PostgreSQL, MongoDB, DynamoDB, PySpark" },
  {
    group: "LLMs and retrieval",
    items: "OpenAI SDK, LangChain, RAG pipelines, hybrid and vector retrieval, ChromaDB, GraphRAG with ArangoDB, LLM agents and tool calling, LLM evals, prompt engineering",
  },
  { group: "Tools", items: "AWS, Docker, Jenkins CI/CD, Git, Postman, Figma" },
];

export const education = [
  {
    title: "B.Tech in Computer Science and Engineering",
    place: "Vishnu Institute of Technology, Bhimavaram",
    meta: "2021 to 2025, 8.8 CGPA",
  },
  {
    title: "Intermediate",
    place: "Sasi Junior College, Visakhapatnam",
    meta: "2019 to 2021, 95.1%",
  },
  {
    title: "Secondary school",
    place: "Sri Chaitanya Techno School, Anakapalli",
    meta: "2017 to 2019, 9.5 CGPA",
  },
];

export const recognition = [
  "Published “Optimizing Crop Health: Evaluating CNN Performance in Plant Disease Detection” at IC4S 2024.",
  "Second place at the ML Hackathon 2k23.",
  "15th rank in the Google Developer Student Club 24-hour hackathon.",
  "Solved more than 100 data structures and algorithms problems on LeetCode.",
  "NPTEL certificates from IIT Kharagpur in Data Structures and Algorithms Using Java and in Programming in Java.",
  "AICTE virtual internship certificates in AI and ML and in cloud computing.",
];

/* Graph: ids, positions on a 640 x 580 canvas, and what each node says.
   Only connect things that are true: stack nodes attach to Charan, not to a
   specific project, unless that link is stated above. */
export const nodes = [
  { id: "me", kind: "me", x: 330, y: 300, r: 46, label: "Charan" },
  {
    id: "saptang", kind: "work", x: 170, y: 160, r: 24, label: "Saptang Labs",
    text: "Junior Software Engineer since June 2025, working on several projects at once.",
  },
  {
    id: "graphrag", kind: "leaf", x: 92, y: 72, r: 15, label: "GraphRAG platform",
    text: "A GraphRAG platform over more than 2,000 documents, built at Saptang Labs.",
  },
  {
    id: "celery", kind: "leaf", x: 52, y: 236, r: 12, label: "Celery",
    text: "Background jobs with Celery at Saptang Labs.",
  },
  {
    id: "upfound", kind: "work", x: 500, y: 140, r: 24, label: "Upfound",
    text: "An AI-powered startup ecosystem with 2,000+ signups, built as freelance work.",
  },
  {
    id: "parser", kind: "leaf", x: 578, y: 52, r: 15, label: "Resume parser",
    text: "Reads an uploaded resume and gives a startup-fit score, using open-source LLMs with guardrails.",
  },
  {
    id: "redis", kind: "leaf", x: 594, y: 232, r: 12, label: "Redis",
    text: "Part of the Upfound stack.",
  },
  {
    id: "research", kind: "research", x: 132, y: 452, r: 18, label: "Published research",
    text: "Compared three CNNs for plant disease detection. ResNet was the most accurate. Published at IC4S 2024.",
  },
  {
    id: "postgres", kind: "stack", x: 62, y: 352, r: 13, label: "PostgreSQL",
    text: "PostgreSQL and SQL for application data.",
  },
  {
    id: "fastapi", kind: "stack", x: 268, y: 520, r: 14, label: "FastAPI",
    text: "Python and FastAPI for APIs and LLM backends.",
  },
  {
    id: "react", kind: "stack", x: 424, y: 516, r: 14, label: "React",
    text: "React for the interfaces.",
  },
  {
    id: "node", kind: "stack", x: 560, y: 420, r: 14, label: "Node.js",
    text: "Node.js and Express for services.",
  },
];

export const edges = [
  ["me", "saptang"],
  ["me", "upfound"],
  ["me", "research"],
  ["me", "postgres"],
  ["me", "fastapi"],
  ["me", "react"],
  ["me", "node"],
  ["saptang", "graphrag"],
  ["saptang", "celery"],
  ["upfound", "parser"],
  ["upfound", "redis"],
];
