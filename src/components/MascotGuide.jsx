import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import { mascotScenes } from "../data/content";
import wave from "../assets/mascot.webp";

// Clips by name. Add more files here as action clips arrive, e.g.
// import laptop from "../assets/mascot/laptop.webp"; then { wave, laptop }.
const clips = { wave };

// A small companion in the bottom-right corner. It stays out of the way in
// the hero (where the big mascot already waves), then pops in and changes
// what it is doing and saying for each section as you scroll.
const MascotGuide = () => {
  const [scene, setScene] = useState(null);
  const [dir, setDir] = useState("");
  const [closed, setClosed] = useState(false);
  const lastY = useRef(0);
  const dirTimer = useRef(0);

  // Which section is in view.
  useEffect(() => {
    const els = mascotScenes.map((s) => document.getElementById(s.id)).filter(Boolean);
    const hero = document.getElementById("top");
    if (!("IntersectionObserver" in window)) return undefined;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          if (e.target === hero) setScene(null);
          else setScene(mascotScenes.find((s) => s.id === e.target.id) || null);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    els.forEach((el) => io.observe(el));
    if (hero) io.observe(hero);
    return () => io.disconnect();
  }, []);

  // Lean with the scroll: dips when you scroll down, hops when you scroll up.
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const d = y > lastY.current ? "down" : "up";
      lastY.current = y;
      setDir(d);
      clearTimeout(dirTimer.current);
      dirTimer.current = setTimeout(() => setDir(""), 260);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(dirTimer.current);
    };
  }, []);

  if (closed) return null;
  const visible = Boolean(scene);
  const clip = scene ? clips[scene.clip] || clips.wave : clips.wave;

  return (
    <aside className={`guide${visible ? " is-on" : ""}${dir ? ` lean-${dir}` : ""}`} aria-hidden={!visible}>
      {scene && (
        <p className="guide-say" key={scene.id} aria-live="polite">
          {scene.say}
        </p>
      )}
      <div className="guide-body">
        <img src={clip} width="300" height="300" alt="" />
        {scene && (
          <span className="guide-prop" key={`p-${scene.id}`} aria-hidden="true">
            {scene.prop}
          </span>
        )}
      </div>
      <button type="button" className="guide-close" onClick={() => setClosed(true)} aria-label="Hide the mascot" tabIndex={visible ? 0 : -1}>
        <Icon name="close" size={14} />
      </button>
    </aside>
  );
};

export default MascotGuide;
