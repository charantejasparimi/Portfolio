import Icon from "./Icon";
import { hero, links, heroChips, marquee } from "../data/content";
import photo360 from "../assets/profile-360.webp";
import photo540 from "../assets/profile-540.webp";
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
        <picture className="hero-photo">
          <source type="image/webp" srcSet={`${photo360} 360w, ${photo540} 540w`} sizes="(max-width: 760px) 120px, 300px" />
          <img src={photoJpg} width="540" height="540" alt="Charan Tejas Parimi, smiling." />
        </picture>
        <ul className="chips" aria-hidden="true">
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
