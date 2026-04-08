import { skills } from "../data/portfolioData";
import "../styles/Skills.css";

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-header">
        <span className="section-tag">// Technical Arsenal</span>
        <h2 className="section-title">Skills &amp; Technologies</h2>
        <div className="section-line" />
      </div>

      <div className="skills-grid">
        {skills.map((s) => (
          <div className="skill-card" key={s.title}>
            <span className="skill-card-icon">{s.icon}</span>
            <div className="skill-card-title">{s.title}</div>
            <div className="skill-tags">
              {s.tags.map((t) => (
                <span className="skill-tag" key={t}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
