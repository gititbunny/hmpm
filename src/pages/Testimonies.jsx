import { Link } from "react-router-dom";
import { testimonies } from "../data/testimonies";

function Testimonies() {
  const featuredTestimony = testimonies[0];
  const otherTestimonies = testimonies.slice(1);

  return (
    <>
      <section className="testimonies-intro">
        <p className="eyebrow">Testimonies</p>
        <h1>Stories of faith, prayer, and breakthrough.</h1>
        <p>
          Read testimonies from people who have experienced encouragement,
          prayer, healing, direction, and breakthrough through the ministry.
        </p>
      </section>

      <section className="content-section featured-testimony-section">
        <article className="featured-testimony-card">
          <div className="featured-testimony-image-wrap">
            <img
              className="featured-testimony-image"
              src={featuredTestimony.image}
              alt={featuredTestimony.title}
            />
          </div>

          <div className="featured-testimony-content">
            <span>{featuredTestimony.category}</span>
            <h2>{featuredTestimony.title}</h2>
            <p>{featuredTestimony.testimony}</p>

            <div className="testimony-meta">
              <strong>{featuredTestimony.name}</strong>
              <small>{featuredTestimony.date}</small>
            </div>
          </div>
        </article>
      </section>

      <section className="content-section">
        <div className="section-heading compact-heading">
          <p className="eyebrow">Recent Testimonies</p>
          <h2>What God has done.</h2>
          <p>
            Testimonies of faith, prayer, healing, and breakthrough from people touched through the ministry.
          </p>
        </div>

        <div className="testimony-grid">
          {otherTestimonies.map((testimony) => (
            <article className="testimony-card" key={testimony.id}>
              <div className="testimony-image-wrap">
                <img
                  className="testimony-image"
                  src={testimony.image}
                  alt={testimony.title}
                />
              </div>

              <div className="testimony-card-content">
                <div className="testimony-label-row">
                  <span>{testimony.category}</span>
                  <small>{testimony.date}</small>
                </div>

                <h3>{testimony.title}</h3>
                <p>{testimony.testimony}</p>

                <strong>{testimony.name}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section testimony-cta">
        <div>
          <p className="eyebrow">Share Your Testimony</p>
          <h2>Has God done something in your life?</h2>
          <p>
            Contact the church if you would like to share your testimony with
            the ministry.
          </p>
        </div>

        <Link className="btn btn-primary" to="/contact">
          Contact Church
        </Link>
      </section>
    </>
  );
}

export default Testimonies;