import Graph from "./components/Graph";
import { links, work, projects, skills, education, recognition } from "./data/content";

const Section = ({ id, title, children }) => (
  <section className="section" id={id} aria-labelledby={`${id}-title`}>
    <h2 className="section-title" id={`${id}-title`}>
      {title}
    </h2>
    <div className="section-body">{children}</div>
  </section>
);

const App = () => (
  <>
    <a className="skip" href="#work">
      Skip to content
    </a>
    <div className="page">
      <header className="top">
        <nav className="nav" aria-label="Sections">
          <a href="#work">Work</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#background">Background</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero" aria-label="Introduction">
          <div className="hero-text">
            <h1 className="hero-name">Charan Tejas Parimi</h1>
            <p className="hero-lead">
              Full-stack engineer in Chennai building LLM and RAG backends, with about a year and a
              half of professional experience.
            </p>
            <p className="hero-sub">I work in Python, FastAPI, React and Node.js.</p>
            <div className="hero-actions">
              <a className="button" href={links.resume} target="_blank" rel="noreferrer">
                Read my resume
              </a>
              <a className="textlink" href={`mailto:${links.email}`}>
                Email
              </a>
              <a className="textlink" href={links.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a className="textlink" href={links.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
          <Graph />
        </section>

        <Section id="work" title="Work">
          {work.map((job) => (
            <article className="entry" key={job.org}>
              <h3 className="entry-title">
                {job.title}, {job.link ? (
                  <a href={job.link} target="_blank" rel="noreferrer">
                    {job.org}
                  </a>
                ) : (
                  job.org
                )}
              </h3>
              <p className="entry-meta">{job.meta}</p>
              <p className="prose">{job.text}</p>
            </article>
          ))}
        </Section>

        <Section id="projects" title="Projects">
          {projects.map((p) => (
            <article className="entry" key={p.title}>
              <h3 className="entry-title">{p.title}</h3>
              <p className="entry-meta">{p.meta}</p>
              <p className="prose">{p.text}</p>
              <p className="entry-tags">{p.tags}</p>
              <p className="entry-links">
                {p.links.map((l) => (
                  <a key={l.href} href={l.href} target="_blank" rel="noreferrer">
                    {l.label}
                  </a>
                ))}
              </p>
            </article>
          ))}
        </Section>

        <Section id="skills" title="Skills">
          <dl className="skills">
            {skills.map((s) => (
              <div className="skills-row" key={s.group}>
                <dt>{s.group}</dt>
                <dd>{s.items}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="background" title="Background">
          <div className="entry">
            <h3 className="entry-title">Education</h3>
            <ul className="plain">
              {education.map((e) => (
                <li key={e.title}>
                  <span className="plain-main">{e.title}</span>
                  <span className="plain-sub">
                    {e.place}. {e.meta}.
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="entry">
            <h3 className="entry-title">Research and recognition</h3>
            <ul className="plain">
              {recognition.map((r) => (
                <li key={r}>
                  <span className="plain-main">{r}</span>
                </li>
              ))}
            </ul>
            <p className="entry-links">
              <a href={links.orcid} target="_blank" rel="noreferrer">
                ORCID profile
              </a>
            </p>
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <p className="contact-line">I am open to full-stack and AI engineer roles in India.</p>
          <p className="contact-mail">
            <a href={`mailto:${links.email}`}>{links.email}</a>
          </p>
          <p className="entry-links">
            <a href={links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={links.resume} target="_blank" rel="noreferrer">
              Resume
            </a>
          </p>
        </Section>
      </main>

      <footer className="foot">Charan Tejas Parimi, Chennai.</footer>
    </div>
  </>
);

export default App;
