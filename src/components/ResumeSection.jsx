import { RESUME_DOWNLOAD_URL, QR_API_URL } from "../data/portfolioData";
import "../styles/ContactResume.css";

export default function ResumeSection() {
  return (
    <section className="resume-section">
      <div className="section-header" style={{ marginBottom: "40px" }}>
        <span className="section-tag">// Resume Access</span>
        <h2 className="section-title">Download My Resume</h2>
        <div className="section-line" />
      </div>

      <div className="resume-qr-container">
        <span className="resume-qr-label">◈ Scan QR Code ◈</span>
        <div className="resume-qr-title">Vineeth — Full-Stack Engineer</div>

        {/* Reuse the qr-frame style from QRModal.css — both are loaded globally */}
        <div className="qr-frame" style={{ margin: 0 }}>
          <img
            style={{ width: "200px", height: "200px", display: "block", imageRendering: "pixelated" }}
            src={QR_API_URL}
            alt="QR Code for resume download"
          />
        </div>

        <p className="resume-qr-desc">
          Scan with any camera app to instantly download the PDF resume, or click the button below.
        </p>

        <a
          className="resume-download-btn"
          href={RESUME_DOWNLOAD_URL}
          target="_blank"
          rel="noreferrer"
          download
        >
          ⬇ Download PDF Resume
        </a>
      </div>
    </section>
  );
}
