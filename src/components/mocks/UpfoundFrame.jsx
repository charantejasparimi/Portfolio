import { useEffect, useRef, useState } from "react";
import { links } from "../../data/content";

// Live, scaled-down preview of upfound.in inside a browser frame.
// The site renders at desktop width (1280x800) and is scaled to fit.
// It is a preview only: clicks go to the real site in a new tab.
const SITE_W = 1280;
const SITE_H = 800;

const UpfoundFrame = () => {
  const boxRef = useRef(null);
  const [scale, setScale] = useState(0.4);

  useEffect(() => {
    const box = boxRef.current;
    if (!box) return undefined;
    const fit = () => setScale(box.clientWidth / SITE_W);
    fit();
    if (!("ResizeObserver" in window)) return undefined;
    const ro = new ResizeObserver(fit);
    ro.observe(box);
    return () => ro.disconnect();
  }, []);

  return (
    <figure className="mock browser live">
      <div className="browser-top" aria-hidden="true">
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
        <span className="url">upfound.in</span>
      </div>
      <div className="live-box" ref={boxRef} style={{ height: SITE_H * scale }}>
        <iframe
          className="live-frame"
          src={links.upfound}
          title="Live preview of upfound.in"
          loading="lazy"
          tabIndex={-1}
          aria-hidden="true"
          referrerPolicy="no-referrer"
          sandbox="allow-scripts allow-same-origin"
          style={{ width: SITE_W, height: SITE_H, transform: `scale(${scale})` }}
        />
        <a className="live-cover" href={links.upfound} target="_blank" rel="noreferrer">
          <span>Open upfound.in</span>
        </a>
      </div>
    </figure>
  );
};

export default UpfoundFrame;
