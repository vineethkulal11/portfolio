import { projects } from "../data/portfolioData";
import "../styles/Projects.css";

export default function Projects() {
  return (
    <section id="projects">
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
              {p.tags.map((t) => (
                <span className="project-tag" key={t}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
