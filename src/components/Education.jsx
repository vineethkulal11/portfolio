import { education } from "../data/portfolioData";
import "../styles/Education.css";

export default function Education() {
  return (
    <section id="education">
      <div className="section-header">
        <span className="section-tag">// Academic Background</span>
        <h2 className="section-title">Education</h2>
        <div className="section-line" />
      </div>

      <div className="edu-grid">
        {education.map((e, i) => (
          <div className="edu-card" key={i}>
            <div className="edu-degree">{e.degree}</div>
            <div className="edu-school">{e.school}</div>
            <div className="edu-period">{e.period}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
