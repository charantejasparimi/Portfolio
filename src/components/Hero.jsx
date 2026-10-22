import Icon from "./Icon";
import Mascot from "./Mascot";
import { hero, links, heroChips, marquee } from "../data/content";
import photoJpg from "../assets/profile-540.jpg";

export const SocialLinks = ({ className = "socials" }) => (
  <ul className={className}>
    <li>
      <a href={links.github} aria-label="GitHub">
        <Icon name="github" />
      </a>
    </li>
    <li>
      <a href={links.linkedin} aria-label="LinkedIn">
        <Icon name="linkedin" />
      </a>
    </li>
    <li>
      <a href={links.leetcode} aria-label="LeetCode">
        <Icon name="leetcode" />
      </a>
    </li>
  </ul>
);

const Hero = () => (
  <section className="hero band band-paper" id="top" aria-labelledby="hero-title">
    <div className="hero-grid-bg" aria-hidden="true" />
    <div className="container hero-grid">
      <div className="hero-visual" data-reveal>
        <svg className="orbit" viewBox="0 0 400 400" aria-hidden="true">
          <circle cx="200" cy="200" r="190" />
          <circle cx="200" cy="200" r="150" />
        </svg>
        <div className="hero-photo">
          <img
            src={links.avatar}
            width="460"
            height="460"
            alt="Charan Tejas Parimi, smiling, in front of misty green hills."
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = photoJpg;
            }}
          />
        </div>
        <Mascot />
        <ul className="chips has-mascot" aria-hidden="true">
          {heroChips.map((c, i) => (
            <li key={c.label} className={`chip chip-${i + 1}`} style={{ "--dot": c.color }}>
              <span className="chip-dot" />
              {c.label}
            </li>
          ))}
        </ul>
      </div>

      <div className="hero-text" data-reveal>
        <p className="status">
          <span className="status-dot" aria-hidden="true" />
          Open to full stack and AI roles
        </p>
        <h1 id="hero-title" className="display">
          {hero.name}
        </h1>
        <p className="lead">{hero.lead}</p>
        <ul className="facts">
          {hero.facts.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
        <div className="actions">
          <a className="button" href={`mailto:${links.email}`}>
            Email me
          </a>
          {links.resume && (
            <a className="textlink" href={links.resume}>
              View resume
            </a>
          )}
          <SocialLinks />
        </div>
      </div>
    </div>

    <div className="marquee" aria-label="Tools I use">
      <ul className="marquee-track">
        {[...marquee, ...marquee].map((m, i) => (
          <li key={`${m}-${i}`} aria-hidden={i >= marquee.length ? "true" : undefined}>
            {m}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Hero;
