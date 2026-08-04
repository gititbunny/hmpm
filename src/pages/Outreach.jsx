import { Link } from "react-router-dom";
import { outreachFocusAreas, outreachProjects } from "../data/outreach";

import outreachHeroImage from "../assets/images/outreach/outreach-prayer.jpg";

function Outreach() {
  return (
    <>
      <section className="content-section outreach-intro">
        <div className="outreach-intro-content">
          <p className="eyebrow">Outreach</p>
          <h1>Serving the community with love and care.</h1>
          <p>
            The ministry supports people through charity work, prayer,
            visitation, and practical support.
          </p>

          <Link className="btn btn-primary" to="/contact">
            Contact Church
          </Link>
        </div>

        <div className="outreach-intro-image-wrap">
          <img
            className="outreach-intro-image"
            src={outreachHeroImage}
            alt="House Of Miracles outreach work"
          />
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading outreach-heading">
          <p className="eyebrow">What We Do</p>
          <h2>Outreach focus areas.</h2>
        </div>

        <div className="outreach-focus-grid">
          {outreachFocusAreas.map((area) => (
            <article className="outreach-focus-card" key={area.title}>
              <div className="outreach-focus-image-wrap">
                <img
                  className="outreach-focus-image"
                  src={area.image}
                  alt={`${area.title} outreach`}
                />
              </div>

              <div className="outreach-focus-content">
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading outreach-heading">
          <p className="eyebrow">Outreach Moments</p>
          <h2>Recent community support.</h2>
        </div>

        <div className="outreach-project-grid">
          {outreachProjects.map((project) => (
            <article className="outreach-project-card" key={project.id}>
              <div className="outreach-project-image-wrap">
                <img
                  className="outreach-project-image"
                  src={project.image}
                  alt={project.title}
                />
              </div>

              <div className="outreach-project-content">
                <span>{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section outreach-final-cta">
        <div>
          <p className="eyebrow">Support Outreach</p>
          <h2>Connect with the church about charity and community work.</h2>
        </div>

        <Link className="btn btn-primary" to="/contact">
          Contact Church
        </Link>
      </section>
    </>
  );
}

export default Outreach;