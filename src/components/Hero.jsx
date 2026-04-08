import Counter from "./Counter";
import "../styles/Hero.css";

export default function Hero({ onOpenQR, scrollTo }) {
  return (
    <section className="hero" id="about">
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot" />
          FULL-STACK SOFTWARE ENGINEER
        </div>

        <h1 className="hero-name">VINEETH</h1>

        <p className="hero-title">
          Java · <span>Spring Boot</span> · React · Microservices
        </p>

        <p className="hero-desc">
          Results-driven engineer with 4+ years building scalable enterprise applications and
          e-governance platforms for Govt. of Karnataka &amp; India. Turning complex business
          requirements into high-performance digital solutions.
        </p>

        <div className="hero-cta-row">
          <button className="btn-primary" onClick={() => scrollTo("contact")}>
            Get In Touch
          </button>
          <button className="btn-secondary" onClick={() => scrollTo("experience")}>
            View Experience
          </button>
          <button className="btn-qr" onClick={onOpenQR}>
            <span>◉</span> Download Resume
          </button>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <Counter target={4} suffix="+" />
            <span className="stat-label">Years Exp.</span>
          </div>
          <div className="stat-item">
            <Counter target={4} />
            <span className="stat-label">Major Projects</span>
          </div>
          <div className="stat-item">
            <Counter target={10} suffix="+" />
            <span className="stat-label">Integrations</span>
          </div>
          {/* <div className="stat-item">
            <Counter target={35} suffix="%" />
            <span className="stat-label">Latency Cut</span>
          </div> */}
        </div>
      </div>

      <div className="scroll-indicator">
        <span className="scroll-text">SCROLL</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
