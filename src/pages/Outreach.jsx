import { Link } from "react-router-dom";
import { outreachFocusAreas, outreachProjects } from "../data/outreach";

function Outreach() {
  return (
    <>
      <section className="page-hero">
        <div>
          <p className="eyebrow">Outreach & Charity</p>
          <h1>Serving the community with faith, love, and compassion.</h1>
          <p>
            House Of Miracles Prophetic Ministries is committed to supporting
            people through prayer, charity, encouragement, and practical acts of
            care.
          </p>
        </div>
      </section>

      <section className="content-section outreach-intro-section">
        <div className="outreach-intro-content">
          <p className="eyebrow">Community Impact</p>
          <h2>Faith should be seen through love and service.</h2>
          <p>
            Outreach helps the ministry care for people beyond the church
            building. Through giving, prayer, visits, and community support, the
            church can be a source of hope for families and individuals.
          </p>

          <p>
            This page can be updated with real outreach stories, photos, dates,
            and testimonies as the church continues serving the community.
          </p>

          <div className="outreach-stats">
            <div className="outreach-stat">
              <strong>01</strong>
              <span>Community support projects</span>
            </div>

            <div className="outreach-stat">
              <strong>02</strong>
              <span>Prayer and encouragement visits</span>
            </div>

            <div className="outreach-stat">
              <strong>03</strong>
              <span>Charity and giving initiatives</span>
            </div>
          </div>
        </div>

        <div className="media-placeholder outreach-intro-visual">
          <span>Outreach Photo / Charity Video</span>
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <p className="eyebrow">Outreach Focus</p>
          <h2>How the ministry supports the community.</h2>
          <p>
            These focus areas can be adjusted to match the church’s real
            outreach programs and charity work.
          </p>
        </div>

        <div className="outreach-focus-grid">
          {outreachFocusAreas.map((area, index) => (
            <article className="outreach-focus-card" key={area.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <p className="eyebrow">Recent Outreach</p>
          <h2>Charity work, visits, and community moments.</h2>
          <p>
            Each outreach card can later open a full gallery or story page with
            images, videos, and more details.
          </p>
        </div>

        <div className="outreach-project-grid">
          {outreachProjects.map((project) => (
            <article className="outreach-project-card" key={project.id}>
              <div className="media-placeholder outreach-project-media">
                <span>{project.category} Photo / Video</span>
              </div>

              <div className="outreach-project-content">
                <div className="outreach-project-meta">
                  <span>{project.category}</span>
                  <span>{project.date}</span>
                </div>

                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section outreach-impact-section">
        <div className="outreach-impact-content">
          <p className="eyebrow">Why Outreach Matters</p>
          <h2>Outreach helps people feel seen, supported, and remembered.</h2>
          <p>
            A strong outreach page helps visitors understand that the ministry is
            not only focused on services, but also on caring for people in real
            and practical ways.
          </p>
        </div>

        <div className="impact-list">
          <article>
            <strong>Builds trust</strong>
            <p>
              People can see that the church is active, present, and involved in
              the community.
            </p>
          </article>

          <article>
            <strong>Shares impact</strong>
            <p>
              Photos and stories help show how the ministry is supporting
              families and individuals.
            </p>
          </article>

          <article>
            <strong>Invites partnership</strong>
            <p>
              Visitors and members can see opportunities to support or join
              future outreach work.
            </p>
          </article>
        </div>
      </section>

      <section className="content-section page-cta">
        <div>
          <p className="eyebrow">Partner With Outreach</p>
          <h2>Want to support the ministry’s charity work?</h2>
          <p>
            Contact the church to learn how you can support outreach, give
            essentials, volunteer, or partner with future community projects.
          </p>
        </div>

        <div className="cta-actions">
          <Link className="btn btn-primary" to="/contact">
            Contact Church
          </Link>
          <Link className="btn btn-outline" to="/ministries">
            Join a Ministry
          </Link>
        </div>
      </section>
    </>
  );
}

export default Outreach;