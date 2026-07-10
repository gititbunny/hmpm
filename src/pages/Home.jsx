import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="hero-content">
          <p className="eyebrow">Welcome to House Of Miracles Prophetic Ministries</p>

          <h1>A place of prayer, worship, prophecy, and transformation.</h1>

          <p className="hero-text">
            Join us as we gather in faith for Sunday services, prayer,
            spiritual guidance, and community outreach.
          </p>

          <div className="hero-actions">
            <Link className="btn btn-primary" to="/contact">
              Join Us This Sunday
            </Link>

            <Link className="btn btn-outline hero-outline" to="/booking">
              Book One-on-One
            </Link>
          </div>

          <div className="hero-service-card">
            <span>Sunday Service</span>
            <strong>Every Sunday from 11:30 AM</strong>
            <p>Come worship with us and experience a life-changing service.</p>
          </div>
        </div>

        <div className="hero-visual" aria-label="Church worship service preview">
          <div className="hero-image-card">
            <div className="hero-image-placeholder">
              <span>Church Photo / Service Image</span>
            </div>
          </div>

          <div className="floating-card">
            <span>One-on-One Sessions</span>
            <strong>Weekends by appointment</strong>
          </div>
        </div>
      </section>

      <section className="home-section latest-service">
        <div className="section-heading">
          <p className="eyebrow">Latest Service</p>
          <h2>Sunday Service Highlight</h2>
          <p>
            Sermon notes, photos, and service highlights will be shared here so
            members and visitors can stay connected throughout the week.
          </p>
        </div>

        <div className="latest-card">
          <div>
            <span className="card-label">Recent Message</span>
            <h3>Faith, Prayer, and Spiritual Breakthrough</h3>
            <p>
              This section will feature the latest message preached during
              Sunday service, including key scriptures, prayer points, and
              service highlights.
            </p>
          </div>

          <div className="latest-actions">
            <Link className="btn btn-secondary" to="/sermons">
              View Sermons
            </Link>
            <Link className="btn btn-outline" to="/media">
              View Gallery
            </Link>
          </div>
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
              Request a private prayer and guidance session. Our team will
              contact you to confirm availability.
            </p>
            <Link to="/booking">Request appointment</Link>
          </article>
        </div>
      </section>

      <section className="home-section split-section">
        <div className="split-content">
          <p className="eyebrow">Ministries</p>
          <h2>Serve, grow, and connect through ministry.</h2>
          <p>
            From praise and worship to ushering, media, outreach, and prayer
            support, there are many ways to serve and grow within the church.
          </p>
          <Link className="btn btn-primary" to="/ministries">
            Explore Ministries
          </Link>
        </div>

        <div className="split-card-list">
          <div className="mini-card">Praise & Worship</div>
          <div className="mini-card">Youth Ministry</div>
          <div className="mini-card">Media Team</div>
          <div className="mini-card">Outreach & Charity</div>
        </div>
      </section>

      <section className="home-section outreach-preview">
        <div className="section-heading">
          <p className="eyebrow">Outreach</p>
          <h2>Serving the community with love and compassion.</h2>
          <p>
            See the ministry’s charity work, outreach moments, and community
            impact stories.
          </p>
        </div>

        <Link className="btn btn-secondary" to="/outreach">
          View Outreach Work
        </Link>
      </section>

      <section className="home-section visit-preview">
        <div className="visit-card">
          <div>
            <p className="eyebrow">Visit Us</p>
            <h2>Plan your visit to House Of Miracles Prophetic Ministries.</h2>
            <p>
              Find our service times, location, prayer line, and contact details
              before your visit.
            </p>
          </div>

          <Link className="btn btn-primary" to="/contact">
            Get Directions
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;