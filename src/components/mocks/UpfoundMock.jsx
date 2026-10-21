// A drawn browser window that hints at Upfound's three parts.
// Numbered badges match the numbered points next to it.
const Badge = ({ n }) => (
  <span className="badge" aria-hidden="true">
    {n}
  </span>
);

const Bar = ({ w, tone = "" }) => <span className={`bar ${tone}`} style={{ width: w }} />;

const UpfoundMock = () => (
  <figure className="mock browser" role="img" aria-label="Sketch of Upfound: a candidate card with a match score, a list of jobs and a chat window.">
    <div className="browser-top" aria-hidden="true">
      <span className="dot" />
      <span className="dot" />
      <span className="dot" />
      <span className="url">upfound.in</span>
    </div>
    <div className="browser-body" aria-hidden="true">
      <div className="up-card">
        <Badge n="1" />
        <div className="up-avatar" />
        <div className="up-lines">
          <Bar w="62%" tone="strong" />
          <Bar w="44%" />
          <div className="up-tags">
            <span />
            <span />
            <span />
          </div>
        </div>
        <svg className="ring" viewBox="0 0 48 48" width="56" height="56">
          <circle cx="24" cy="24" r="19" fill="none" stroke="#d2d2d7" strokeWidth="5" />
          <circle cx="24" cy="24" r="19" fill="none" stroke="#0066cc" strokeWidth="5" strokeLinecap="round" strokeDasharray="90 120" transform="rotate(-90 24 24)" />
        </svg>
      </div>

      <div className="up-jobs">
        <Badge n="2" />
        {["70%", "56%", "64%"].map((w) => (
          <div className="up-job" key={w}>
            <span className="up-logo" />
            <span className="up-job-lines">
              <Bar w={w} tone="strong" />
              <Bar w="38%" />
            </span>
            <span className="up-apply" />
          </div>
        ))}
      </div>

      <div className="up-chat">
        <Badge n="3" />
        <span className="bubble in">
          <Bar w="80%" />
          <Bar w="52%" />
        </span>
        <span className="bubble out">
          <Bar w="70%" tone="light" />
        </span>
      </div>
    </div>
  </figure>
);

export default UpfoundMock;
