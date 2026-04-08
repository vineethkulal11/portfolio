import { useEffect } from "react";
import { RESUME_DOWNLOAD_URL, QR_API_URL } from "../data/portfolioData";
import "../styles/QRModal.css";

export default function QRModal({ onClose }) {
  // Close on ESC key
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="qr-modal-overlay" onClick={onClose}>
      <div className="qr-modal" onClick={(e) => e.stopPropagation()}>
        <div className="qr-pulse-ring" />

        <button className="qr-modal-close" onClick={onClose}>✕</button>

        <span className="qr-modal-tag">◈ Resume Download ◈</span>
        <div className="qr-modal-title">Scan QR to Download</div>

        <div className="qr-frame">
          <img
            className="qr-image"
            src={QR_API_URL}
            alt="QR Code — scan to download Vineeth's resume"
          />
        </div>

        <span className="qr-scan-text">POINT YOUR PHONE CAMERA AT THE CODE</span>

        <a
          className="qr-download-btn"
          href={RESUME_DOWNLOAD_URL}
          target="_blank"
          rel="noreferrer"
          download
        >
          ⬇ Direct Download
        </a>
      </div>
    </div>
  );
}
