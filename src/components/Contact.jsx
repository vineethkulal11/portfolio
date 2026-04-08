import "../styles/ContactResume.css";

const contactItems = [
  {
    icon: "✉️",
    label: "Email",
    value: "vineeth110697@gmail.com",
    href: "mailto:vineeth110697@gmail.com",
  },
  {
    icon: "📱",
    label: "Phone",
    value: "+91 6360002719",
    href: "tel:+916360002719",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "linkedin.com/in/vineeth-kulal",
    href: "https://in.linkedin.com/in/vineeth-kulal-4a067b158",
    external: true,
  },
  {
    icon: "🐙",
    label: "GitHub",
    value: "github.com/vineethkulal11",
    href: "https://github.com/vineethkulal11",
    external: true,
  },
  {
    icon: "📍",
    label: "Location",
    value: "Bangalore, Karnataka",
    href: null,
  },
];

export default function Contact() {
  return (
    <>
      <section className="contact-section" id="contact">
        <div className="section-header">
          <span className="section-tag">// Let's Connect</span>
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-line" />
        </div>

        <div className="contact-grid">
          {contactItems.map(({ icon, label, value, href, external }) =>
            href ? (
              <a
                key={label}
                className="contact-card"
                href={href}
                {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
              >
                <span className="contact-card-icon">{icon}</span>
                <span className="contact-card-label">{label}</span>
                <span className="contact-card-value">{value}</span>
              </a>
            ) : (
              <div key={label} className="contact-card" style={{ cursor: "default" }}>
                <span className="contact-card-icon">{icon}</span>
                <span className="contact-card-label">{label}</span>
                <span className="contact-card-value">{value}</span>
              </div>
            )
          )}
        </div>
      </section>

      <footer className="footer">
        <span>
          ◈ VINEETH · FULL-STACK SOFTWARE ENGINEER · BANGALORE · {new Date().getFullYear()} ◈
        </span>
      </footer>
    </>
  );
}
