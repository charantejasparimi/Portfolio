import Icon from "./Icon";
import { hero, links } from "../data/content";
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
    <div className="container hero-grid">
      <picture className="hero-photo" data-reveal>
        <source type="image/webp" srcSet={`${photo360} 360w, ${photo540} 540w`} sizes="(max-width: 760px) 120px, 360px" />
        <img src={photoJpg} width="540" height="540" alt="Charan smiling among green coffee plants." />
      </picture>
      <div className="hero-text" data-reveal>
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
  </section>
);

export default Hero;
