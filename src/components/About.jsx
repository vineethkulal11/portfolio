import "../styles/About.css";

const info = [
  { key: "Name",     val: "Vineeth" },
  { key: "Location", val: "Bangalore, KA" },
  { key: "Email",    val: "vineeth110697@gmail.com" },
  { key: "Phone",    val: "+91 63600 02719" },
  { key: "LinkedIn", val: "linkedin.com/in/vineeth-kulal" },
  { key: "GitHub",   val: "github.com/vineethkulal11" },
];

export default function About() {
  return (
    <section className="about-section" id="about-details">
      <div className="about-panel">
        <div>
          <div className="about-col-title">About Me</div>
          <p className="about-text">
            I'm a full-stack software engineer based in Bangalore specializing in Java / Spring Boot
            backends and React frontends. I build production-grade systems for government and
            enterprise clients, with a focus on clean architecture, performance, and scalability.
          </p>
        </div>
        <div>
          <div className="about-col-title">Quick Info</div>
          <ul className="about-info-list">
            {info.map(({ key, val }) => (
              <li key={key}>
                <span className="info-key">{key}</span>
                <span className="info-val">{val}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
