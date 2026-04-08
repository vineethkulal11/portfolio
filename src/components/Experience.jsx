import { experiences } from "../data/portfolioData";
import "../styles/Experience.css";

export default function Experience() {
  return (
    <section id="experience">
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
                {exp.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
