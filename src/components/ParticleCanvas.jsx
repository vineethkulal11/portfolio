import { useEffect, useRef } from "react";

export default function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    let W, H;
    const particles = [];

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    class Particle {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.size = Math.random() * 1.4 + 0.3;
        this.speedX = (Math.random() - 0.5) * 0.28;
        this.speedY = (Math.random() - 0.5) * 0.28;
        this.opacity = Math.random() * 0.45 + 0.1;
        this.hue = Math.random() > 0.5 ? 185 : 270;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${this.hue}, 100%, 65%, ${this.opacity})`;
        ctx.fill();
      }
    }

    for (let i = 0; i < 110; i++) particles.push(new Particle());

    const drawFrame = () => {
      ctx.fillStyle = "rgba(2, 5, 16, 0.28)";
      ctx.fillRect(0, 0, W, H);

      // Grid lines
      ctx.strokeStyle = "rgba(0, 245, 255, 0.022)";
      ctx.lineWidth = 0.5;
      const g = 80;
      for (let x = 0; x < W; x += g) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
      }
      for (let y = 0; y < H; y += g) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
      }

      // Connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 115) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 245, 255, ${0.07 * (1 - d / 115)})`;
            ctx.lineWidth = 0.4;
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => { p.update(); p.draw(); });
      animId = requestAnimationFrame(drawFrame);
    };

    ctx.fillStyle = "#020510";
    ctx.fillRect(0, 0, W, H);
    drawFrame();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return <canvas ref={canvasRef} id="bg-canvas" />;
}
