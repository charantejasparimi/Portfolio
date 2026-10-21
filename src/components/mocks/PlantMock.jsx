import Icon from "../Icon";

// A leaf inside a scan frame, a result panel, and the three steps of the app.
const PlantMock = () => (
  <figure className="mock plant" role="img" aria-label="Sketch of the plant app: a leaf being scanned, a result panel, and the steps upload, classify and ask.">
    <div className="plant-stage" aria-hidden="true">
      <svg className="leaf" viewBox="0 0 200 200" width="200" height="200">
        <rect x="18" y="18" width="164" height="164" rx="18" fill="none" stroke="#0066cc" strokeWidth="2.5" strokeDasharray="10 8" />
        <path d="M100 168c-38-8-62-40-56-84 4-30 26-52 56-62 30 10 52 32 56 62 6 44-18 76-56 84z" fill="#e3f1e6" stroke="#2f7d4f" strokeWidth="3" />
        <path d="M100 166V32M100 70l-24-16M100 96l-30-18M100 124l-26-14M100 70l24-16M100 96l30-18M100 124l26-14" fill="none" stroke="#2f7d4f" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="128" cy="112" r="9" fill="#b9813a" opacity="0.75" />
        <circle cx="76" cy="132" r="6" fill="#b9813a" opacity="0.6" />
        <line className="scanline" x1="30" x2="170" y1="100" y2="100" stroke="#0066cc" strokeWidth="2" opacity="0.6" />
      </svg>
      <div className="plant-result">
        <span className="bar strong" style={{ width: "70%" }} />
        <span className="bar" style={{ width: "90%" }} />
        <span className="bar" style={{ width: "60%" }} />
        <span className="plant-chip" />
      </div>
    </div>
    <ol className="steps">
      <li>
        <Icon name="upload" size={18} />
        Upload
      </li>
      <li>
        <Icon name="scan" size={18} />
        Classify
      </li>
      <li>
        <Icon name="chat" size={18} />
        Ask
      </li>
    </ol>
  </figure>
);

export default PlantMock;
