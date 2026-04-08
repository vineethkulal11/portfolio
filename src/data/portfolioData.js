export const RESUME_DOWNLOAD_URL =
  "https://docs.google.com/document/d/1APVZzYZu09Iy3MexbddvOEfTGYlmYGLT/edit?usp=drivesdk&ouid=103122850026469445916&rtpof=true&sd=true";

export const QR_API_URL = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
  RESUME_DOWNLOAD_URL
)}&bgcolor=020510&color=00f5ff&margin=8&format=png`;

export const skills = [
  {
    icon: "☕",
    title: "Core Languages",
    tags: ["Java 8 / 11 / 17", "JavaScript ES6+", "TypeScript", "HTML5", "CSS3", "SQL"],
  },
  {
    icon: "⚙️",
    title: "Backend",
    tags: ["Spring Boot", "Spring MVC", "Spring Security", "Hibernate / JPA", "Microservices", "Apache Kafka", "Maven"],
  },
  {
    icon: "⚛️",
    title: "Frontend",
    tags: ["ReactJS", "React Native", "Redux", "Bootstrap", "Tailwind CSS", "Responsive Design"],
  },
  {
    icon: "🗄️",
    title: "Databases",
    tags: ["MySQL", "PostgreSQL", "MS SQL Server", "Redis", "Hibernate ORM"],
  },
  {
    icon: "☁️",
    title: "Cloud & DevOps",
    tags: ["Git", "GitLab", "GitHub", "Docker", "Linux"],
  },
  {
    icon: "🔐",
    title: "API & Security",
    tags: ["REST API Design", "Postman", "Swagger / OpenAPI", "JWT Auth", "RBAC", "OAuth2", "Spring Security"],
  },
  {
    icon: "🧪",
    title: "Testing & Tools",
    tags: ["JUnit 5", "Mockito", "IntelliJ IDEA", "Eclipse"],
  },
  {
    icon: "🏗️",
    title: "Architecture",
    tags: ["Microservices", "Event-Driven (Kafka)", "MVC Pattern", "RESTful Design"],
  },
];

export const education = [
  {
    degree: "Master Of Computer Applications — Computer Science",
    school: "St. Aloysius College, Mangalore  |  Computer Science",
    period: "2019 — 2021"
  },
  {
    degree: "Bachelor Of Computer Applications — Computer Science",
    school: "Mangalore university",
    period: "2015 — 2018"
  },
];

export const experiences = [
  {
    role: "Software Engineer",
    company: "Centre for Smart Governance (CSG) · Bangalore",
    period: "Jun 2025 — Present",
    project: "Karnataka Municipal Data Society (KMDS) — Govt. of Karnataka",
    bullets: [
      "Architected scalable Spring Boot microservices for e-governance apps serving 250+ Urban Local Bodies.",
      "Built React.js dashboards enabling real-time municipal data: taxation, approvals, citizen services.",
      "Reduced database query latency by 35%+ through optimized indexing and ORM-level tuning.",
      "Integrated Apache Kafka for event-driven pipelines handling high-volume municipal data streams.",
      "Implemented Spring Security with JWT-based auth and RBAC across all modules.",
      "Led peer code reviews, reducing bug density by ~20% over two sprints.",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "Centre for Smart Governance (CSG) · Bangalore",
    period: "Jul 2024 — May 2025",
    project: "Employee Management System (EMS)",
    bullets: [
      "Delivered full-cycle EMS modules: payroll, attendance, leave, appraisals, ticket tracking, asset management.",
      "Built React dashboards with dynamic forms, data grids, and printable payslip reports for 300+ employees.",
      "Automated payroll calculation and payslip generation via Spring Boot REST API.",
      "Implemented role-based access control and audit logging across all HR modules.",
    ],
  },
  {
    role: "Junior Software Engineer",
    company: "Centre for Smart Governance (CSG) · Bangalore",
    period: "Aug 2021 — Jun 2023",
    project: "LIMS + National Green Corps (NGC) — Ministry of Environment, Govt. of India",
    bullets: [
      "Revamped React.js UI with i18n multi-language support and WCAG-compliant responsive layouts.",
      "Reduced bundle size by 25% through React component architecture refactoring.",
      "Shipped cross-platform React Native mobile app adopted by thousands of students across India.",
      "Built Java Spring Boot backend & ReactJS portal for NGC's nationwide activity tracking platform.",
      "Implemented push notifications, OAuth2 authentication, and activity tracking.",
    ],
  },
];

export const projects = [
  {
    icon: "🏛️",
    title: "Karnataka Municipal Data Society",
    desc: "E-governance platform for 250+ Urban Local Bodies with real-time municipal data, taxation, approvals and citizen service tracking.",
    tags: ["Spring Boot", "Microservices", "ReactJS", "Kafka", "Postgres"],
    num: "01",
  },
  {
    icon: "👥",
    title: "Employee Management System",
    desc: "Enterprise HR platform handling payroll automation, attendance, leave management, and asset tracking for 300+ employees.",
    tags: ["Spring Boot", "React", "Mysql", "REST API", "JWT"],
    num: "02",
  },
  {
    icon: "🌿",
    title: "National Green Corps App",
    desc: "Cross-platform mobile & web platform adopted nationwide by thousands of students under Ministry of Environment.",
    tags: ["React Native", "Spring Boot", "ReactJS", "OAuth2", "Push Notification"],
    num: "03",
  },
  {
    icon: "🔬",
    title: "Laboratory Information Management System",
    desc: "Real-time sample tracking and compliance reporting with WCAG-compliant i18n multi-language support.",
    tags: ["ReactJS", "Spring Boot", "i18n", "REST API"],
    num: "04",
  },
];
