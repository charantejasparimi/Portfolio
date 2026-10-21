import { useState } from "react";
import { getImageUrl } from "../utils";
import { nodes, edges } from "../data/content";

const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));

const neighbours = (id) => {
  const set = new Set([id]);
  edges.forEach(([a, b]) => {
    if (a === id) set.add(b);
    if (b === id) set.add(a);
  });
  return set;
};

const Graph = () => {
  const [hovered, setHovered] = useState(null);
  const [pinned, setPinned] = useState(null);
  const active = hovered || pinned;
  const near = active ? neighbours(active) : null;
  const activeNode = active ? byId[active] : null;

  const stateOf = (id) => {
    if (!active) return "";
    if (id === active) return "is-active";
    return near.has(id) ? "is-near" : "is-dim";
  };

  const onKey = (event, id) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setPinned((p) => (p === id ? null : id));
    }
  };

  return (
    <figure className="graph">
      <svg
        viewBox="0 0 640 580"
        role="group"
        aria-label="Map of Charan's work. Each circle is something he has built or used, and lines show how they connect."
      >
        <defs>
          <clipPath id="me-clip">
            <circle cx={byId.me.x} cy={byId.me.y} r={byId.me.r - 3} />
          </clipPath>
        </defs>

        {edges.map(([a, b], i) => {
          const from = byId[a];
          const to = byId[b];
          const on = active && (a === active || b === active);
          return (
            <line
              key={`${a}-${b}`}
              className={`graph-edge${on ? " is-on" : ""}${active && !on ? " is-off" : ""}`}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              pathLength="1"
              style={{ "--i": i }}
            />
          );
        })}

        {nodes.map((n, i) => (
          <g key={n.id} className="graph-appear" style={{ "--i": i }}>
            <g
              className={`graph-node graph-${n.kind} ${stateOf(n.id)}`}
              tabIndex={n.kind === "me" ? -1 : 0}
              role={n.kind === "me" ? "img" : "button"}
              aria-label={n.kind === "me" ? "Charan Tejas Parimi" : `${n.label}. ${n.text}`}
              aria-pressed={n.kind === "me" ? undefined : pinned === n.id}
              onMouseEnter={() => n.kind !== "me" && setHovered(n.id)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => n.kind !== "me" && setHovered(n.id)}
              onBlur={() => setHovered(null)}
              onClick={() => n.kind !== "me" && setPinned((p) => (p === n.id ? null : n.id))}
              onKeyDown={(e) => n.kind !== "me" && onKey(e, n.id)}
            >
              <circle className="graph-hit" cx={n.x} cy={n.y} r={n.r + 14} />
              {n.kind === "me" ? (
                <>
                  <circle className="graph-disc" cx={n.x} cy={n.y} r={n.r} />
                  <image
                    href={getImageUrl("hero/profilepic.jpg")}
                    x={n.x - 80}
                    y={n.y - 48}
                    width="160"
                    height="160"
                    clipPath="url(#me-clip)"
                    preserveAspectRatio="xMidYMid slice"
                  />
                </>
              ) : (
                <>
                  <circle className="graph-ring" cx={n.x} cy={n.y} r={n.r + 6} />
                  <circle className="graph-disc" cx={n.x} cy={n.y} r={n.r} />
                  <text className="graph-label" x={n.x} y={n.y + n.r + 20} textAnchor="middle">
                    {n.label}
                  </text>
                </>
              )}
            </g>
          </g>
        ))}
      </svg>

      <figcaption className="graph-caption" aria-live="polite">
        {activeNode ? (
          <>
            <strong>{activeNode.label}</strong> {activeNode.text}
          </>
        ) : (
          "Hover, tap or tab to a circle to see how the work connects."
        )}
      </figcaption>
    </figure>
  );
};

export default Graph;
