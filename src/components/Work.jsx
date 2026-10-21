import Icon from "./Icon";
import ParticleField from "./ParticleField";
import UpfoundMock from "./mocks/UpfoundMock";
import PlantMock from "./mocks/PlantMock";
import { projects, links } from "../data/content";

const Work = () => {
  const up = projects.upfound;
  const pl = projects.plant;

  return (
    <section id="work" aria-labelledby="work-title">
      <div className="band band-night work-intro">
        <ParticleField />
        <div className="container work-intro-text" data-reveal>
          <h2 id="work-title" className="h2">
            Selected work.
          </h2>
          <p className="lead on-dark-2">Two recent projects, from the model to the interface.</p>
        </div>
      </div>

      <div className="band band-night work-tiles">
        <div className="container">
          <article className="tile tile-dark" data-reveal aria-labelledby="up-title">
            <div className="tile-text">
              <p className="meta on-dark-2">{up.meta}</p>
              <h3 id="up-title" className="h3">
                {up.title}
              </h3>
              <p className="tile-line">{up.line}</p>
              <ol className="numbered">
                {up.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ol>
              <a className="textlink on-dark" href={links.upfound}>
                {up.linkLabel}
                <Icon name="external" size={16} />
              </a>
            </div>
            <div className="tile-visual">
              <UpfoundMock />
            </div>
          </article>
        </div>
      </div>

      <div className="band band-mist">
        <div className="container">
          <article className="tile tile-light tile-mirror" data-reveal aria-labelledby="plant-title">
            <div className="tile-visual">
              <PlantMock />
            </div>
            <div className="tile-text">
              <p className="meta">{pl.meta}</p>
              <h3 id="plant-title" className="h3">
                {pl.title}
              </h3>
              <p className="tile-line">{pl.line}</p>
              <p className="stat">
                <span className="stat-num">{pl.stat}</span>
                <span className="stat-cap">{pl.statCaption}</span>
              </p>
              <ul className="ticks">
                {pl.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <a className="textlink" href={links.plant}>
                {pl.linkLabel}
                <Icon name="external" size={16} />
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Work;
