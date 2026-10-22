import { useState } from "react";
import Icon from "./Icon";
import { experience, skills, education, recognition, links } from "../data/content";

export const Experience = () => (
  <section className="band band-paper" id="experience" aria-labelledby="exp-title">
    <div className="container">
      <h2 id="exp-title" className="h2" data-reveal>
        Where I&rsquo;ve worked.
      </h2>
      <ol className="timeline">
        {experience.map((job) => (
          <li className="job" key={job.company} data-reveal>
            <p className="job-dates">
              {job.dates}
              <span>{job.place}</span>
            </p>
            <div className="job-body">
              <h3 className="h3">{job.company}</h3>
              <p className="job-role">{job.role}</p>
              <ul className="ticks">
                {job.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export const Skills = () => (
  <section className="band band-mist" id="skills" aria-labelledby="skills-title">
    <div className="container">
      <div data-reveal>
        <h2 id="skills-title" className="h2">
          What I work with.
        </h2>
        <p className="lead muted">Comfortable across the stack, from the database to the interface.</p>
      </div>
      <div className="skills-grid">
        {skills.map((s) => (
          <div className="skill" key={s.group} data-reveal>
            <h3 className="skill-title">{s.group}</h3>
            <ul className="skill-list">
              {s.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const Background = () => (
  <section className="band band-paper" id="background" aria-labelledby="bg-title">
    <div className="container">
      <h2 id="bg-title" className="h2" data-reveal>
        Background.
      </h2>
      <div className="bg-grid">
        <div data-reveal>
          <h3 className="h3">Education</h3>
          <p className="bg-strong">{education.school}</p>
          <p>{education.degree}</p>
          <p className="muted">{education.detail}</p>
        </div>
        <div data-reveal>
          <h3 className="h3">Recognition</h3>
          <ul className="ticks">
            {recognition.map((r) => (
              <li key={r.text}>
                {r.text}{" "}
                {r.link && (
                  <a className="textlink" href={r.link.href}>
                    {r.link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(links.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${links.email}`;
    }
  };

  return (
    <section className="band band-night contact" id="contact" aria-labelledby="contact-title">
      <div className="container contact-inner" data-reveal>
        <h2 id="contact-title" className="h2">
          Let&rsquo;s talk.
        </h2>
        <p className="lead on-dark-2">
          Open to full stack and AI engineer roles in India.
        </p>
        <div className="contact-actions">
          <a className="button button-night" href={`mailto:${links.email}`}>
            <Icon name="mail" />
            {links.email}
          </a>
          <button type="button" className="ghost" onClick={copy}>
            <Icon name={copied ? "check" : "copy"} size={18} />
            {copied ? "Copied" : "Copy email"}
          </button>
          <span className="sr-only" aria-live="polite">
            {copied ? "Email address copied" : ""}
          </span>
        </div>
        <ul className="contact-links">
          <li>
            <a href={links.linkedin}>
              <Icon name="linkedin" /> LinkedIn
            </a>
          </li>
          <li>
            <a href={links.github}>
              <Icon name="github" /> GitHub
            </a>
          </li>
          <li>
            <a href={links.leetcode}>
              <Icon name="leetcode" /> LeetCode
            </a>
          </li>
          <li>
            <a href={links.orcid}>
              <Icon name="orcid" /> ORCID
            </a>
          </li>
        </ul>
      </div>
      <footer className="container footer">Charan Tejas Parimi. Chennai, India.</footer>
    </section>
  );
};
