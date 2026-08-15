import { Link } from "react-router-dom";
import HeroCarousel from "../components/HeroCarousel";
import { testimonies } from "../data/testimonies";
import latestServiceImage from "../assets/images/home/latest-service.jpg";
import ministryWorshipImage from "../assets/images/home/ministry-worship.jpg";
import ministryYouthImage from "../assets/images/home/ministry-youth.jpg";
import ministryMediaImage from "../assets/images/home/ministry-media.jpg";
import ministryOutreachImage from "../assets/images/home/ministry-outreach.jpg";
import outreachPreviewImage from "../assets/images/home/outreach-preview.jpg";
import visitPreviewImage from "../assets/images/home/visit-preview.jpg";

function Home() {
  const recentTestimonies = testimonies.slice(0, 3);

  return (
    <>
      <HeroCarousel />

      <section className="home-section latest-service">
        <div className="section-heading">
          <p className="eyebrow">Latest Service</p>
          <h2>Sunday Service Highlight</h2>
          <p>
            Catch up on the latest sermon, scriptures, and service highlights.
          </p>
        </div>

        <div className="latest-card latest-card-with-media">
          <div className="latest-card-image-wrap">
            <img
              className="latest-card-image"
              src={latestServiceImage}
              alt="House Of Miracles Sunday service highlight"
            />
          </div>

          <div className="latest-card-content">
            <span className="card-label">Recent Message</span>
            <h3>Debt Cancellation Sunday Service</h3>
            <p>
              Read the latest message, key scriptures, prayer points, and notes
              from Sunday service.
            </p>
 
            <div className="latest-actions">
              <Link className="btn btn-secondary" to="/sermons">
                View Sermons
              </Link>
              <Link className="btn btn-outline" to="/testimonies">
                Read Testimonies
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section home-testimony-section">
        <div className="section-heading">
          <p className="eyebrow">Testimonies</p>
          <h2>Stories of faith, prayer, and breakthrough.</h2>
          <p>
            Read what God has done in the lives of people through prayer,
            worship, and spiritual guidance.
          </p>
        </div>

        <div className="home-testimony-grid">
          {recentTestimonies.map((testimony) => (
            <article className="home-testimony-card" key={testimony.id}>
              <span>{testimony.category}</span>
              <h3>{testimony.title}</h3>
              <p>{testimony.testimony}</p>

              <div className="home-testimony-meta">
                <strong>{testimony.name}</strong>
                <small>{testimony.date}</small>
              </div>
            </article>
          ))}
        </div>

        <div className="home-section-action">
          <Link className="btn btn-primary" to="/testimonies">
            View All Testimonies
          </Link>
        </div>
      </section>

      <section className="home-section service-grid-section">
        <div className="section-heading">
          <p className="eyebrow">Connect With Us</p>
          <h2>How you can be part of the ministry</h2>
        </div>

        <div className="info-grid">
          <article className="info-card">
            <span>01</span>
            <h3>Attend a Service</h3>
            <p>
              Join our Sunday service for worship, the Word, prayer, and
              fellowship.
            </p>
            <Link to="/contact">View service details</Link>
          </article>

          <article className="info-card">
            <span>02</span>
            <h3>Request Prayer</h3>
            <p>
              Reach out for prayer support and spiritual encouragement from the
              ministry team.
            </p>
            <Link to="/contact">Contact prayer line</Link>
          </article>

          <article className="info-card">
            <span>03</span>
            <h3>Book One-on-One</h3>
            <p>
              Book a private one-on-one session and keep your reference number.
            </p>
            <Link to="/booking">Book now</Link>
          </article>
        </div>
      </section>

      <section className="home-section split-section">
        <div className="split-content">
          <p className="eyebrow">Ministries</p>
          <h2>Serve, grow, and connect through ministry.</h2>
          <p>
            From praise and worship to media, outreach, and prayer support,
            there are many ways to serve.
          </p>
          <Link className="btn btn-primary" to="/ministries">
            Explore Ministries
          </Link>
        </div>

        <div className="split-card-list media-card-list">
          <div className="mini-card media-mini-card">
            <img src={ministryWorshipImage} alt="Praise and worship ministry" />
            <span>Praise & Worship</span>
          </div>

          <div className="mini-card media-mini-card">
            <img src={ministryYouthImage} alt="Youth ministry gathering" />
            <span>Youth Ministry</span>
          </div>

          <div className="mini-card media-mini-card">
            <img src={ministryMediaImage} alt="Church media team" />
            <span>Media Team</span>
          </div>

          <div className="mini-card media-mini-card">
            <img
              src={ministryOutreachImage}
              alt="Outreach and charity ministry"
            />
            <span>Outreach & Charity</span>
          </div>
        </div>
      </section>

      <section className="home-section outreach-preview media-background-section">
        <img
          className="media-background-image"
          src={outreachPreviewImage}
          alt="House Of Miracles outreach and charity work"
        />

        <div className="media-background-overlay"></div>

        <div className="media-background-content">
          <div className="section-heading">
            <p className="eyebrow">Outreach</p>
            <h2>Serving the community with love and compassion.</h2>
            <p>
              See the ministry’s charity work, outreach moments, and community
              impact stories.
            </p>
          </div>

          <Link className="btn btn-primary" to="/outreach">
            View Outreach Work
          </Link>
        </div>
      </section>

      <section className="home-section visit-preview">
        <div className="visit-card visit-card-with-media">
          <div className="visit-card-content">
            <p className="eyebrow">Visit Us</p>
            <h2>Plan your visit to House Of Miracles Prophetic Ministries.</h2>
            <p>
              Find service times, location details, prayer line information, and
              directions before your visit.
            </p>

            <Link className="btn btn-primary" to="/contact">
              Get Directions
            </Link>
          </div>

          <div className="visit-card-image-wrap">
            <img
              className="visit-card-image"
              src={visitPreviewImage}
              alt="Church visit and location preview"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;