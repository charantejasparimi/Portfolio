import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "../hooks/useReveal";

// Slow drifting stars plus one soft blue glow that shifts with scroll.
// Runs only while the band is on screen and the tab is visible.
const ParticleField = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext("2d");
    const reduced = prefersReducedMotion();
    let width = 0;
    let height = 0;
    let dpr = 1;
    let frame = 0;
    let running = false;
    let visible = true;
    let last = 0;
    let stars = [];

    const makeStars = () => {
      const count = width < 700 ? 34 : 70;
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: 0.6 + Math.random() * 1.6,
        speed: 4 + Math.random() * 8,
        phase: Math.random() * Math.PI * 2,
        twinkle: 0.6 + Math.random() * 1.2,
        tint: Math.random() < 0.25 ? "41,151,255" : "245,245,247",
      }));
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      makeStars();
    };

    const draw = (time) => {
      ctx.clearRect(0, 0, width, height);
      const rect = canvas.getBoundingClientRect();
      const progress = Math.max(-1, Math.min(1, rect.top / window.innerHeight));
      const gx = width * 0.62;
      const gy = height * 0.5 + progress * 40;
      const gr = Math.max(width, height) * 0.45;
      const glow = ctx.createRadialGradient(gx, gy, 0, gx, gy, gr);
      glow.addColorStop(0, "rgba(41,151,255,0.18)");
      glow.addColorStop(1, "rgba(41,151,255,0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);
      const t = time / 1000;
      stars.forEach((s) => {
        const alpha = reduced ? 0.6 : 0.25 + 0.45 * (0.5 + 0.5 * Math.sin(t * s.twinkle + s.phase));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${s.tint},${alpha.toFixed(3)})`;
        ctx.fill();
      });
    };

    const tick = (time) => {
      const dt = last ? Math.min((time - last) / 1000, 0.05) : 0;
      last = time;
      stars.forEach((s) => {
        s.y -= s.speed * dt;
        if (s.y < -4) {
          s.y = height + 4;
          s.x = Math.random() * width;
        }
      });
      draw(time);
      frame = requestAnimationFrame(tick);
    };

    const start = () => {
      if (running || reduced) return;
      running = true;
      last = 0;
      frame = requestAnimationFrame(tick);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(frame);
    };
    const update = () => (visible && !document.hidden ? start() : stop());

    resize();
    draw(0);

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      update();
    });
    io.observe(canvas);
    const onResize = () => {
      resize();
      draw(performance.now());
    };
    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", update);

    return () => {
      stop();
      io.disconnect();
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", update);
    };
  }, []);

  return <canvas ref={canvasRef} className="particles" aria-hidden="true" />;
};

export default ParticleField;
