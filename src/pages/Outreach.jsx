import { Link } from "react-router-dom";
import { outreachMoments, supportAreas, waysToHelp } from "../data/outreach";

import outreachHeroImage from "../assets/images/outreach/outreach-prayer.jpg";

function Outreach() {
  return (
    <>
      <section className="content-section outreach-intro">
        <div className="outreach-intro-content">
          <p className="eyebrow">Outreach & Charity</p>
          <h1>Supporting people with care, prayer, and practical help.</h1>
          <p>
            House Of Miracles Prophetic Ministries supports people through
            prayer, giving, visitation, church projects, and community care.
          </p>

          <Link className="btn btn-primary" to="/contact">
            Contact Church
          </Link>
        </div>

        <div className="outreach-intro-image-wrap">
          <img
            className="outreach-intro-image"
            src={outreachHeroImage}
            alt="House Of Miracles outreach and charity work"
          />
        </div>
      </section>

      <section className="content-section outreach-note-section">
        <p className="eyebrow">How Support Works</p>
        <h2>Some support is shared publicly. Some support is kept private.</h2>
        <p>
          The ministry may share approved outreach moments, church needs, and
          community support updates. However, some acts of support are kept
          private to protect the dignity of the people being helped.
        </p>
      </section>

      <section className="content-section">
        <div className="section-heading outreach-heading">
          <p className="eyebrow">Areas Of Support</p>
          <h2>How the ministry helps.</h2>
        </div>

        <div className="support-area-grid">
          {supportAreas.map((area) => (
            <article className="support-area-card" key={area.title}>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section ways-to-help-section">
        <div className="ways-to-help-intro">
          <p className="eyebrow">Ways To Help</p>
          <h2>Support can be given in different ways.</h2>
          <p>
            Some people prefer giving money. Others prefer buying supplies,
            materials, or offering their time. Please contact the official
            church team first to confirm current needs.
          </p>
        </div>

        <div className="ways-to-help-grid">
          {waysToHelp.map((item) => (
            <article className="way-to-help-card" key={item.title}>
              <span>{item.title}</span>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading outreach-heading">
          <p className="eyebrow">Approved Moments</p>
          <h2>Outreach, charity, and community care.</h2>
          <p>
            A look at outreach, charity, prayer, and community care through the ministry.
          </p>
        </div>

        <div className="outreach-moment-grid">
          {outreachMoments.map((moment) => (
            <article className="outreach-moment-card" key={moment.id}>
              <div className="outreach-moment-image-wrap">
                <img
                  className="outreach-moment-image"
                  src={moment.image}
                  alt={moment.title}
                />
              </div>

              <div className="outreach-moment-content">
                <span>{moment.category}</span>
                <h3>{moment.title}</h3>
                <p>{moment.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section outreach-final-cta">
        <div>
          <p className="eyebrow">Support The Work</p>
          <h2>Contact the church before sending money, supplies, or materials.</h2>
          <p>
            This helps confirm official needs and protects everyone from scams
            or incorrect information.
          </p>
        </div>

        <Link className="btn btn-primary" to="/contact">
          Contact Church
        </Link>
      </section>
    </>
  );
}

export default Outreach;