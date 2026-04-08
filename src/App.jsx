import { useState } from "react";

import ParticleCanvas from "./components/ParticleCanvas";
import Cursor        from "./components/Cursor";
import Navbar        from "./components/Navbar";
import Hero          from "./components/Hero";
import About         from "./components/About";
import Skills        from "./components/Skills";
import Education     from "./components/Education";
import Experience    from "./components/Experience";
import Projects      from "./components/Projects";
import ResumeSection from "./components/ResumeSection";
import Contact       from "./components/Contact";
import QRModal       from "./components/QRModal";

import "./styles/global.css";

export default function App() {
  const [showQR, setShowQR] = useState(false);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      {/* Custom cursor */}
      <Cursor />

      {/* Ambient glow orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      {/* Animated particle background */}
      <ParticleCanvas />

      {/* QR resume modal */}
      {showQR && <QRModal onClose={() => setShowQR(false)} />}

      <div className="portfolio-wrapper">
        <Navbar onOpenQR={() => setShowQR(true)} scrollTo={scrollTo} />

        <Hero       onOpenQR={() => setShowQR(true)} scrollTo={scrollTo} />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <ResumeSection />
        <Contact />
      </div>
    </>
  );
}
