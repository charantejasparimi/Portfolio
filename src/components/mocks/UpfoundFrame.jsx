import { links } from "../../data/content";
import shot900 from "../../assets/upfound-900.webp";
import shot1600 from "../../assets/upfound-1600.webp";
import shotJpg from "../../assets/upfound-1600.jpg";

// Screenshot of upfound.in inside a browser frame, linking to the live site.
const UpfoundFrame = () => (
  <figure className="mock browser live">
    <div className="browser-top" aria-hidden="true">
      <span className="dot" />
      <span className="dot" />
      <span className="dot" />
      <span className="url">upfound.in</span>
    </div>
    <a className="live-box" href={links.upfound} target="_blank" rel="noreferrer">
      <picture>
        <source type="image/webp" srcSet={`${shot900} 900w, ${shot1600} 1600w`} sizes="(max-width: 860px) 92vw, 520px" />
        <img
          src={shotJpg}
          width="1600"
          height="820"
          loading="lazy"
          alt="Upfound home page: Match with Minds. Move with Missions., with founder, candidate match and community cards."
        />
      </picture>
      <span className="live-cover" aria-hidden="true">
        <span>Open upfound.in</span>
      </span>
    </a>
  </figure>
);

export default UpfoundFrame;
