import { useState, useEffect, useRef } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;500;600;700&family=Share+Tech+Mono&display=swap');

  :root {
    --primary: #00f5ff;
    --secondary: #7b2fff;
    --accent: #ff2d78;
    --gold: #ffd700;
    --bg-dark: #020510;
    --bg-card: rgba(6, 12, 35, 0.85);
    --bg-glass: rgba(0, 245, 255, 0.04);
    --text-primary: #e8f4ff;
    --text-dim: #7a9bb5;
    --glow-primary: 0 0 20px rgba(0, 245, 255, 0.5), 0 0 60px rgba(0, 245, 255, 0.2);
    --glow-secondary: 0 0 20px rgba(123, 47, 255, 0.5), 0 0 60px rgba(123, 47, 255, 0.2);
    --glow-accent: 0 0 20px rgba(255, 45, 120, 0.5);
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    background: var(--bg-dark);
    color: var(--text-primary);
    font-family: 'Rajdhani', sans-serif;
    overflow-x: hidden;
    cursor: none;
  }

  .cursor {
    position: fixed;
    width: 12px;
    height: 12px;
    background: var(--primary);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transform: translate(-50%, -50%);
    transition: transform 0.1s ease, background 0.3s;
    box-shadow: var(--glow-primary);
  }

  .cursor-ring {
    position: fixed;
    width: 36px;
    height: 36px;
    border: 1.5px solid rgba(0, 245, 255, 0.5);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9998;
    transform: translate(-50%, -50%);
    transition: all 0.15s ease;
  }

  /* Canvas Background */
  #bg-canvas {
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    z-index: 0;
  }

  .portfolio-wrapper {
    position: relative;
    z-index: 1;
  }

  /* NAV */
  .nav {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 100;
    padding: 18px 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(2, 5, 16, 0.8);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(0, 245, 255, 0.1);
  }

  .nav-logo {
    font-family: 'Orbitron', monospace;
    font-size: 20px;
    font-weight: 900;
    color: var(--primary);
    text-shadow: var(--glow-primary);
    letter-spacing: 3px;
  }

  .nav-links {
    display: flex;
    gap: 36px;
    list-style: none;
  }

  .nav-links a {
    font-family: 'Share Tech Mono', monospace;
    font-size: 13px;
    color: var(--text-dim);
    text-decoration: none;
    letter-spacing: 2px;
    text-transform: uppercase;
    transition: color 0.3s, text-shadow 0.3s;
  }

  .nav-links a:hover {
    color: var(--primary);
    text-shadow: var(--glow-primary);
  }

  /* HERO */
  .hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 120px 60px 60px;
    position: relative;
    overflow: hidden;
  }

  .hero-content {
    text-align: center;
    max-width: 900px;
  }

  .hero-badge {
    display: inline-block;
    font-family: 'Share Tech Mono', monospace;
    font-size: 12px;
    letter-spacing: 4px;
    color: var(--primary);
    border: 1px solid rgba(0, 245, 255, 0.3);
    padding: 8px 20px;
    margin-bottom: 32px;
    border-radius: 2px;
    animation: pulse-border 2s infinite;
  }

  @keyframes pulse-border {
    0%, 100% { border-color: rgba(0, 245, 255, 0.3); }
    50% { border-color: rgba(0, 245, 255, 0.8); box-shadow: var(--glow-primary); }
  }

  .hero-name {
    font-family: 'Orbitron', monospace;
    font-size: clamp(56px, 9vw, 110px);
    font-weight: 900;
    line-height: 1;
    margin-bottom: 20px;
    background: linear-gradient(135deg, #ffffff 0%, var(--primary) 50%, var(--secondary) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    filter: drop-shadow(0 0 30px rgba(0, 245, 255, 0.4));
    animation: name-glow 3s ease-in-out infinite alternate;
  }

  @keyframes name-glow {
    from { filter: drop-shadow(0 0 20px rgba(0, 245, 255, 0.3)); }
    to { filter: drop-shadow(0 0 50px rgba(0, 245, 255, 0.7)); }
  }

  .hero-title {
    font-family: 'Rajdhani', sans-serif;
    font-size: clamp(18px, 3vw, 26px);
    font-weight: 500;
    color: var(--text-dim);
    letter-spacing: 6px;
    text-transform: uppercase;
    margin-bottom: 28px;
  }

  .hero-title span { color: var(--primary); }

  .hero-desc {
    font-size: 17px;
    line-height: 1.8;
    color: #8fafc4;
    max-width: 680px;
    margin: 0 auto 48px;
    font-weight: 400;
  }

  .hero-cta-row {
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 60px;
  }

  .btn-primary {
    font-family: 'Share Tech Mono', monospace;
    font-size: 13px;
    letter-spacing: 3px;
    text-transform: uppercase;
    padding: 16px 40px;
    background: transparent;
    border: 2px solid var(--primary);
    color: var(--primary);
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: all 0.3s;
    clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
  }

  .btn-primary::before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--primary);
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    z-index: -1;
  }

  .btn-primary:hover::before { transform: translateX(0); }
  .btn-primary:hover { color: var(--bg-dark); box-shadow: var(--glow-primary); }

  .btn-secondary {
    font-family: 'Share Tech Mono', monospace;
    font-size: 13px;
    letter-spacing: 3px;
    text-transform: uppercase;
    padding: 16px 40px;
    background: transparent;
    border: 2px solid var(--secondary);
    color: var(--secondary);
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: all 0.3s;
    clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
  }

  .btn-secondary:hover { background: var(--secondary); color: white; box-shadow: var(--glow-secondary); }

  .hero-stats {
    display: flex;
    gap: 60px;
    justify-content: center;
    flex-wrap: wrap;
  }

  .stat-item {
    text-align: center;
  }

  .stat-number {
    font-family: 'Orbitron', monospace;
    font-size: 42px;
    font-weight: 900;
    color: var(--primary);
    text-shadow: var(--glow-primary);
    display: block;
  }

  .stat-label {
    font-size: 12px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: var(--text-dim);
  }

  /* SECTION GENERIC */
  section {
    padding: 100px 60px;
    position: relative;
  }

  .section-header {
    text-align: center;
    margin-bottom: 70px;
  }

  .section-tag {
    font-family: 'Share Tech Mono', monospace;
    font-size: 12px;
    letter-spacing: 5px;
    color: var(--secondary);
    text-transform: uppercase;
    margin-bottom: 12px;
    display: block;
  }

  .section-title {
    font-family: 'Orbitron', monospace;
    font-size: clamp(28px, 4vw, 46px);
    font-weight: 700;
    background: linear-gradient(90deg, var(--text-primary) 0%, var(--primary) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    position: relative;
    display: inline-block;
  }

  .section-line {
    width: 80px;
    height: 2px;
    background: linear-gradient(90deg, var(--primary), var(--secondary));
    margin: 20px auto 0;
    box-shadow: var(--glow-primary);
  }

  /* SKILLS */
  .skills-section { background: transparent; }

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 24px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .skill-card {
    background: var(--bg-card);
    border: 1px solid rgba(0, 245, 255, 0.12);
    padding: 28px 32px;
    position: relative;
    transition: all 0.4s ease;
    clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px));
    overflow: hidden;
  }

  .skill-card::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(0,245,255,0.05) 0%, transparent 60%);
    opacity: 0;
    transition: opacity 0.4s;
  }

  .skill-card:hover {
    border-color: rgba(0, 245, 255, 0.5);
    transform: translateY(-6px) perspective(600px) rotateX(3deg);
    box-shadow: 0 20px 60px rgba(0, 245, 255, 0.15), inset 0 0 40px rgba(0, 245, 255, 0.03);
  }

  .skill-card:hover::before { opacity: 1; }

  .skill-card-icon {
    font-size: 28px;
    margin-bottom: 12px;
    display: block;
  }

  .skill-card-title {
    font-family: 'Orbitron', monospace;
    font-size: 12px;
    letter-spacing: 3px;
    color: var(--primary);
    text-transform: uppercase;
    margin-bottom: 14px;
  }

  .skill-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .skill-tag {
    font-family: 'Share Tech Mono', monospace;
    font-size: 11px;
    padding: 5px 12px;
    background: rgba(0, 245, 255, 0.06);
    border: 1px solid rgba(0, 245, 255, 0.2);
    color: var(--text-dim);
    border-radius: 2px;
    letter-spacing: 1px;
    transition: all 0.2s;
  }

  .skill-tag:hover {
    background: rgba(0, 245, 255, 0.15);
    color: var(--primary);
    border-color: rgba(0, 245, 255, 0.5);
  }

  /* EXPERIENCE */
  .experience-section { background: transparent; }

  .timeline {
    max-width: 1000px;
    margin: 0 auto;
    position: relative;
  }

  .timeline::before {
    content: '';
    position: absolute;
    left: 30px;
    top: 0; bottom: 0;
    width: 1px;
    background: linear-gradient(180deg, var(--primary), var(--secondary), transparent);
    box-shadow: 0 0 10px rgba(0, 245, 255, 0.3);
  }

  .timeline-item {
    padding-left: 90px;
    margin-bottom: 60px;
    position: relative;
    animation: slideIn 0.5s ease forwards;
  }

  @keyframes slideIn {
    from { opacity: 0; transform: translateX(-20px); }
    to { opacity: 1; transform: translateX(0); }
  }

  .timeline-dot {
    position: absolute;
    left: 16px;
    top: 24px;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: var(--bg-dark);
    border: 2px solid var(--primary);
    box-shadow: var(--glow-primary);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .timeline-dot-inner {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--primary);
    animation: dot-pulse 2s infinite;
  }

  @keyframes dot-pulse {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.3); opacity: 0.7; }
  }

  .exp-card {
    background: var(--bg-card);
    border: 1px solid rgba(0, 245, 255, 0.1);
    padding: 32px 36px;
    position: relative;
    transition: all 0.4s;
    clip-path: polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 0 100%);
  }

  .exp-card::after {
    content: '';
    position: absolute;
    top: 0; right: 0;
    width: 24px; height: 24px;
    border-top: 1px solid rgba(0, 245, 255, 0.4);
    border-right: 1px solid rgba(0, 245, 255, 0.4);
  }

  .exp-card:hover {
    border-color: rgba(0, 245, 255, 0.35);
    transform: translateX(6px);
    box-shadow: -6px 0 30px rgba(0, 245, 255, 0.1), 0 10px 40px rgba(0, 245, 255, 0.08);
  }

  .exp-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 6px;
  }

  .exp-role {
    font-family: 'Orbitron', monospace;
    font-size: 17px;
    font-weight: 700;
    color: var(--text-primary);
  }

  .exp-period {
    font-family: 'Share Tech Mono', monospace;
    font-size: 12px;
    color: var(--primary);
    letter-spacing: 2px;
    background: rgba(0, 245, 255, 0.08);
    border: 1px solid rgba(0, 245, 255, 0.2);
    padding: 4px 12px;
    white-space: nowrap;
  }

  .exp-company {
    font-size: 14px;
    color: var(--secondary);
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 16px;
  }

  .exp-project {
    font-family: 'Share Tech Mono', monospace;
    font-size: 12px;
    color: var(--gold);
    letter-spacing: 2px;
    margin-bottom: 16px;
    padding: 8px 14px;
    background: rgba(255, 215, 0, 0.06);
    border-left: 2px solid var(--gold);
    display: inline-block;
  }

  .exp-bullets {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .exp-bullets li {
    font-size: 14px;
    line-height: 1.7;
    color: #7a9bb5;
    padding-left: 22px;
    position: relative;
  }

  .exp-bullets li::before {
    content: '▹';
    position: absolute;
    left: 0;
    color: var(--primary);
    font-size: 12px;
  }

  /* PROJECTS / HIGHLIGHTS */
  .projects-section { background: transparent; }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    gap: 28px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .project-card {
    background: var(--bg-card);
    border: 1px solid rgba(123, 47, 255, 0.15);
    padding: 36px;
    position: relative;
    overflow: hidden;
    transition: all 0.4s ease;
    cursor: pointer;
  }

  .project-card::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: conic-gradient(from 0deg, transparent 0%, rgba(123,47,255,0.04) 25%, transparent 50%);
    animation: rotate-bg 8s linear infinite;
    opacity: 0;
    transition: opacity 0.4s;
  }

  .project-card:hover::before { opacity: 1; }

  @keyframes rotate-bg {
    to { transform: rotate(360deg); }
  }

  .project-card:hover {
    border-color: rgba(123, 47, 255, 0.5);
    transform: translateY(-8px) perspective(800px) rotateY(-3deg);
    box-shadow: 0 30px 80px rgba(123, 47, 255, 0.2);
  }

  .project-num {
    font-family: 'Orbitron', monospace;
    font-size: 48px;
    font-weight: 900;
    color: rgba(123, 47, 255, 0.12);
    position: absolute;
    top: 16px;
    right: 24px;
    line-height: 1;
  }

  .project-icon {
    font-size: 36px;
    margin-bottom: 16px;
    display: block;
  }

  .project-title {
    font-family: 'Orbitron', monospace;
    font-size: 15px;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 12px;
    line-height: 1.4;
  }

  .project-desc {
    font-size: 14px;
    line-height: 1.7;
    color: var(--text-dim);
    margin-bottom: 20px;
  }

  .project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .project-tag {
    font-family: 'Share Tech Mono', monospace;
    font-size: 10px;
    padding: 4px 10px;
    background: rgba(123, 47, 255, 0.1);
    border: 1px solid rgba(123, 47, 255, 0.3);
    color: #a67dff;
    letter-spacing: 1px;
  }

  /* CONTACT */
  .contact-section {
    text-align: center;
  }

  .contact-grid {
    display: flex;
    gap: 24px;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 900px;
    margin: 0 auto 60px;
  }

  .contact-card {
    background: var(--bg-card);
    border: 1px solid rgba(0, 245, 255, 0.1);
    padding: 28px 36px;
    min-width: 200px;
    position: relative;
    transition: all 0.3s;
    clip-path: polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%);
    text-decoration: none;
    display: block;
  }

  .contact-card:hover {
    border-color: var(--primary);
    box-shadow: var(--glow-primary);
    transform: translateY(-4px);
  }

  .contact-card-icon { font-size: 24px; margin-bottom: 10px; display: block; }

  .contact-card-label {
    font-family: 'Share Tech Mono', monospace;
    font-size: 11px;
    letter-spacing: 3px;
    color: var(--text-dim);
    text-transform: uppercase;
    display: block;
    margin-bottom: 6px;
  }

  .contact-card-value {
    font-size: 14px;
    color: var(--primary);
    font-weight: 600;
  }

  .footer {
    text-align: center;
    padding: 30px;
    border-top: 1px solid rgba(0, 245, 255, 0.08);
    font-family: 'Share Tech Mono', monospace;
    font-size: 12px;
    color: var(--text-dim);
    letter-spacing: 2px;
  }

  /* SCROLL INDICATOR */
  .scroll-indicator {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    animation: bounce 2s infinite;
  }

  @keyframes bounce {
    0%, 100% { transform: translateX(-50%) translateY(0); }
    50% { transform: translateX(-50%) translateY(8px); }
  }

  .scroll-text {
    font-family: 'Share Tech Mono', monospace;
    font-size: 10px;
    letter-spacing: 3px;
    color: var(--text-dim);
  }

  .scroll-line {
    width: 1px;
    height: 40px;
    background: linear-gradient(180deg, var(--primary), transparent);
    box-shadow: 0 0 8px var(--primary);
  }

  /* GLOW ORBS */
  .orb {
    position: fixed;
    border-radius: 50%;
    filter: blur(100px);
    pointer-events: none;
    z-index: 0;
    opacity: 0.12;
  }

  .orb-1 { width: 600px; height: 600px; background: var(--primary); top: -200px; right: -200px; }
  .orb-2 { width: 500px; height: 500px; background: var(--secondary); bottom: 200px; left: -200px; }
  .orb-3 { width: 300px; height: 300px; background: var(--accent); bottom: -100px; right: 300px; }

  @media (max-width: 768px) {
    nav { padding: 18px 24px; }
    .nav-links { display: none; }
    section { padding: 80px 24px; }
    .hero { padding: 120px 24px 60px; }
    .hero-stats { gap: 30px; }
    .stat-number { font-size: 32px; }
    .timeline::before { left: 16px; }
    .timeline-item { padding-left: 56px; }
    .timeline-dot { left: 2px; }
  }
`;

// ---- DATA ----
const skills = [
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
    tags: ["ReactJS", "React Native", "Redux", "React Router", "Bootstrap", "Responsive Design"],
  },
  {
    icon: "🗄️",
    title: "Databases",
    tags: ["MySQL", "PostgreSQL", "MS SQL Server", "Redis"],
  },
  {
    icon: "☁️",
    title: "Cloud & DevOps",
    tags: ["Git", "GitLab", "GitHub", "Docker", "Linux", "Bash"],
  },
  {
    icon: "🔌",
    title: "API & Testing",
    tags: ["REST API Design", "Postman", "Swagger / OpenAPI", "JWT Auth", "RBAC", "OAuth2"],
  },
];

const experiences = [
  {
    role: "Software Engineer",
    company: "Centre for Smart Governance (CSG) · Bangalore",
    period: "Jun 2025 — Present",
    project: "Karnataka Municipal Data Society (KMDS) — Govt. of Karnataka",
    bullets: [
      "Architected scalable Spring Boot microservices for e-governance apps serving 250+ Urban Local Bodies.",
      "Built React.js dashboards enabling real-time municipal data access — taxation, approvals, citizen services.",
      "Reduced database query latency by 35%+ through optimized indexing and ORM-level tuning.",
      "Integrated Apache Kafka for event-driven pipelines handling high-volume municipal data streams.",
      "Implemented Spring Security with JWT-based authentication and RBAC across all modules.",
      "Led peer code reviews, reducing bug density by ~20%.",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "Centre for Smart Governance (CSG) · Bangalore",
    period: "Jul 2024 — May 2025",
    project: "Employee Management System (EMS)",
    bullets: [
      "Delivered full-cycle EMS modules: payroll, attendance, leave, appraisals, ticket tracking, asset management.",
      "Built React dashboards with dynamic forms, data grids, and printable payslip reports used by 300+ employees.",
      "Automated payroll calculation and payslip generation via Spring Boot REST API integration.",
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

const projects = [
  {
    icon: "🏛️",
    title: "Karnataka Municipal Data Society",
    desc: "E-governance platform for 250+ Urban Local Bodies with real-time municipal data, taxation, approvals and citizen service tracking.",
    tags: ["Spring Boot", "Microservices", "ReactJS", "Kafka", "MS SQL"],
    num: "01",
  },
  {
    icon: "👥",
    title: "Employee Management System",
    desc: "Enterprise HR platform handling payroll automation, attendance, leave management, and asset tracking for 300+ employees.",
    tags: ["Spring Boot", "React", "PostgreSQL", "REST API", "JWT"],
    num: "02",
  },
  {
    icon: "🌿",
    title: "National Green Corps App",
    desc: "Cross-platform mobile & web platform adopted nationwide by thousands of students and teachers under Ministry of Environment.",
    tags: ["React Native", "Spring Boot", "ReactJS", "OAuth2", "Push Notif"],
    num: "03",
  },
  {
    icon: "🔬",
    title: "Laboratory Information Management System",
    desc: "Real-time sample tracking and compliance reporting system with WCAG-compliant i18n multi-language support.",
    tags: ["ReactJS", "Spring Boot", "i18n", "WCAG", "REST API"],
    num: "04",
  },
];

// ---- CANVAS BACKGROUND ----
function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    let W, H;
    let particles = [];

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    class Particle {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.size = Math.random() * 1.5 + 0.3;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.5 + 0.1;
        this.hue = Math.random() > 0.5 ? 185 : 270; // cyan or purple
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${this.hue}, 100%, 65%, ${this.opacity})`;
        ctx.fill();
      }
    }

    for (let i = 0; i < 120; i++) particles.push(new Particle());

    const draw = () => {
      ctx.fillStyle = "rgba(2, 5, 16, 0.3)";
      ctx.fillRect(0, 0, W, H);

      // Grid
      ctx.strokeStyle = "rgba(0, 245, 255, 0.025)";
      ctx.lineWidth = 0.5;
      const gridSize = 80;
      for (let x = 0; x < W; x += gridSize) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
      }
      for (let y = 0; y < H; y += gridSize) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
      }

      // Connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 245, 255, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      particles.forEach(p => { p.update(); p.draw(); });
      animId = requestAnimationFrame(draw);
    };

    // Initial full fill
    ctx.fillStyle = "#020510";
    ctx.fillRect(0, 0, W, H);
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return <canvas ref={canvasRef} id="bg-canvas" />;
}

// ---- COUNTER ----
function Counter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 1600;
          const step = Math.ceil(target / (duration / 16));
          const timer = setInterval(() => {
            start += step;
            if (start >= target) { setCount(target); clearInterval(timer); }
            else setCount(start);
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref} className="stat-number">{count}{suffix}</span>;
}

// ---- MAIN COMPONENT ----
export default function VineethPortfolio() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + "px";
        cursorRef.current.style.top = e.clientY + "px";
      }
      setTimeout(() => {
        if (ringRef.current) {
          ringRef.current.style.left = e.clientX + "px";
          ringRef.current.style.top = e.clientY + "px";
        }
      }, 80);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <style>{styles}</style>
      <div ref={cursorRef} className="cursor" />
      <div ref={ringRef} className="cursor-ring" />

      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      <ParticleCanvas />

      <div className="portfolio-wrapper">
        {/* NAV */}
        <nav className="nav">
          <div className="nav-logo">VK</div>
          <ul className="nav-links">
            {["About", "Skills", "Experience", "Projects", "Contact"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} onClick={(e) => { e.preventDefault(); scrollTo(l.toLowerCase()); }}>
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* HERO */}
        <section className="hero" id="about">
          <div className="hero-content">
            <div className="hero-badge">◈ FULL-STACK SOFTWARE ENGINEER ◈</div>
            <h1 className="hero-name">VINEETH</h1>
            <p className="hero-title">
              Java · <span>Spring Boot</span> · React · Microservices
            </p>
            <p className="hero-desc">
              Results-driven engineer with 4+ years building scalable enterprise applications and
              e-governance platforms. Turning complex business requirements into high-performance
              digital solutions.
            </p>
            <div className="hero-cta-row">
              <button className="btn-primary" onClick={() => scrollTo("contact")}>
                Get In Touch
              </button>
              <button className="btn-secondary" onClick={() => scrollTo("experience")}>
                View Experience
              </button>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <Counter target={4} suffix="+" />
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <Counter target={6} suffix="+" />
                <span className="stat-label">Support Project</span>
              </div>
              <div className="stat-item">
                <Counter target={4} suffix="+" />
                <span className="stat-label">Integrations</span>
              </div>
              <div className="stat-item">
                <Counter target={4} suffix="" />
                <span className="stat-label">Major Projects</span>
              </div>
            </div>
          </div>
          <div className="scroll-indicator">
            <span className="scroll-text">SCROLL</span>
            <div className="scroll-line" />
          </div>
        </section>

        {/* SKILLS */}
        <section className="skills-section" id="skills">
          <div className="section-header">
            <span className="section-tag">// Technical Arsenal</span>
            <h2 className="section-title">Skills & Technologies</h2>
            <div className="section-line" />
          </div>
          <div className="skills-grid">
            {skills.map((s) => (
              <div className="skill-card" key={s.title}>
                <span className="skill-card-icon">{s.icon}</span>
                <div className="skill-card-title">{s.title}</div>
                <div className="skill-tags">
                  {s.tags.map((t) => <span className="skill-tag" key={t}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="experience-section" id="experience">
          <div className="section-header">
            <span className="section-tag">// Career Trajectory</span>
            <h2 className="section-title">Work Experience</h2>
            <div className="section-line" />
          </div>
          <div className="timeline">
            {experiences.map((exp, i) => (
              <div className="timeline-item" key={i}>
                <div className="timeline-dot">
                  <div className="timeline-dot-inner" />
                </div>
                <div className="exp-card">
                  <div className="exp-header">
                    <span className="exp-role">{exp.role}</span>
                    <span className="exp-period">{exp.period}</span>
                  </div>
                  <div className="exp-company">{exp.company}</div>
                  <div className="exp-project">▸ {exp.project}</div>
                  <ul className="exp-bullets">
                    {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section className="projects-section" id="projects">
          <div className="section-header">
            <span className="section-tag">// Featured Work</span>
            <h2 className="section-title">Key Projects</h2>
            <div className="section-line" />
          </div>
          <div className="projects-grid">
            {projects.map((p) => (
              <div className="project-card" key={p.num}>
                <div className="project-num">{p.num}</div>
                <span className="project-icon">{p.icon}</span>
                <div className="project-title">{p.title}</div>
                <p className="project-desc">{p.desc}</p>
                <div className="project-tags">
                  {p.tags.map((t) => <span className="project-tag" key={t}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact-section" id="contact">
          <div className="section-header">
            <span className="section-tag">// Let's Connect</span>
            <h2 className="section-title">Get In Touch</h2>
            <div className="section-line" />
          </div>
          <div className="contact-grid">
            <a className="contact-card" href="mailto:vineeth110697@gmail.com">
              <span className="contact-card-icon">✉️</span>
              <span className="contact-card-label">Email</span>
              <span className="contact-card-value">vineeth110697@gmail.com</span>
            </a>
            <a className="contact-card" href="tel:+916360002719">
              <span className="contact-card-icon">📱</span>
              <span className="contact-card-label">Phone</span>
              <span className="contact-card-value">+91 6360002719</span>
            </a>
            <a className="contact-card" href="https://in.linkedin.com/in/vineeth-kulal-4a067b158" target="_blank" rel="noreferrer">
              <span className="contact-card-icon">💼</span>
              <span className="contact-card-label">LinkedIn</span>
              <span className="contact-card-value">linkedin.com/in/vineeth</span>
            </a>
            <a className="contact-card" href="https://github.com/vineethkulal11" target="_blank" rel="noreferrer">
              <span className="contact-card-icon">🐙</span>
              <span className="contact-card-label">GitHub</span>
              <span className="contact-card-value">github.com/vineethkulal11</span>
            </a>
            <div className="contact-card" style={{ cursor: "default" }}>
              <span className="contact-card-icon">📍</span>
              <span className="contact-card-label">Location</span>
              <span className="contact-card-value">Bangalore, Karnataka</span>
            </div>
          </div>
        </section>

        <footer className="footer">
          <span>◈ VINEETH · FULL-STACK SOFTWARE ENGINEER · BANGALORE ◈</span>
        </footer>
      </div>
    </>
  );
}
