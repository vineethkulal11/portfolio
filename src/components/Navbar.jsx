import "../styles/Navbar.css";

export default function Navbar({ onOpenQR, scrollTo }) {
  const links = ["About", "Skills", "Education", "Experience", "Projects", "Contact"];

  return (
    <nav className="nav">
      <div className="nav-logo">VK</div>
      <ul className="nav-links">
        {links.map((l) => (
          <li key={l}>
            <a
              href={`#${l.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(l.toLowerCase());
              }}
            >
              {l}
            </a>
          </li>
        ))}
        <li>
          <button className="nav-qr-btn" onClick={onOpenQR}>
            ⬇ Resume
          </button>
        </li>
      </ul>
    </nav>
  );
}
