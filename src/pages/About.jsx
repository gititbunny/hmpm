import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <section className="page-hero about-hero">
        <div>
          <p className="eyebrow">About The Ministry</p>
          <h1>House Of Miracles Prophetic Ministries</h1>
          <p>
            A prophetic ministry dedicated to prayer, worship, spiritual
            guidance, healing, deliverance, and community transformation.
          </p>
        </div>
      </section>

      <section className="content-section two-column-section">
        <div>
          <p className="eyebrow">Our Story</p>
          <h2>A place where people gather in faith and expectation.</h2>
        </div>

        <div className="text-stack">
          <p>
            House Of Miracles Prophetic Ministries is a Christian ministry
            committed to creating a place where people can encounter God through
            worship, prayer, the Word, prophecy, and spiritual guidance.
          </p>

          <p>
            The ministry serves families, individuals, and the wider community
            through Sunday services, prayer support, one-on-one sessions,
            outreach work, and opportunities for members to serve in different
            ministries.
          </p>

          <p>
            As the ministry continues to grow, the church is building a stronger
            online presence to help members, visitors, and partners stay
            connected beyond Facebook and in-person services.
          </p>
        </div>
      </section>

      <section className="content-section mission-section">
        <div className="mission-card dark-card">
          <span>Mission</span>
          <h2>To lead people into prayer, worship, faith, and spiritual growth.</h2>
          <p>
            Our mission is to serve people through the Word of God, prayer,
            spiritual guidance, compassion, and community support.
          </p>
        </div>

        <div className="mission-card light-card">
          <span>Vision</span>
          <h2>To see lives transformed through faith, healing, and restoration.</h2>
          <p>
            Our vision is to be a ministry where people experience hope,
            direction, breakthrough, and a deeper relationship with God.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <p className="eyebrow">What We Believe</p>
          <h2>Faith, prayer, worship, and service are at the heart of the ministry.</h2>
          <p>
            These belief areas can be edited later to match the church’s exact
            doctrinal statement and wording.
          </p>
        </div>

        <div className="belief-grid">
          <article className="belief-card">
            <h3>Prayer</h3>
            <p>
              We believe in the power of prayer to bring comfort, strength,
              direction, healing, and spiritual breakthrough.
            </p>
          </article>

          <article className="belief-card">
            <h3>The Word</h3>
            <p>
              We believe in teaching and preaching the Word of God as a guide
              for faith, life, growth, and transformation.
            </p>
          </article>

          <article className="belief-card">
            <h3>Worship</h3>
            <p>
              We believe worship is a sacred part of gathering together and
              honouring God with our hearts and lives.
            </p>
          </article>

          <article className="belief-card">
            <h3>Prophetic Ministry</h3>
            <p>
              We believe in spiritual guidance, encouragement, and prayerful
              ministry that helps people seek God’s direction.
            </p>
          </article>

          <article className="belief-card">
            <h3>Community</h3>
            <p>
              We believe the church should be a place of love, support,
              fellowship, service, and belonging.
            </p>
          </article>

          <article className="belief-card">
            <h3>Outreach</h3>
            <p>
              We believe in serving the community through compassion, giving,
              charity work, and practical support.
            </p>
          </article>
        </div>
      </section>

      <section className="content-section leadership-section">
        <div className="section-heading">
          <p className="eyebrow">Leadership</p>
          <h2>Meet the leadership of House Of Miracles Prophetic Ministries.</h2>
          <p>
            Add real leadership names, photos, and roles here when the church
            provides the final information.
          </p>
        </div>

        <div className="leader-grid">
          <article className="leader-card">
            <div className="leader-image-placeholder">Photo</div>
            <h3>Prophet / Founder Name</h3>
            <p>Founder & Senior Leader</p>
          </article>

          <article className="leader-card">
            <div className="leader-image-placeholder">Photo</div>
            <h3>Pastor Name</h3>
            <p>Pastor / Ministry Leader</p>
          </article>

          <article className="leader-card">
            <div className="leader-image-placeholder">Photo</div>
            <h3>Ministry Leader Name</h3>
            <p>Church Leadership Team</p>
          </article>
        </div>
      </section>

      <section className="content-section page-cta">
        <div>
          <p className="eyebrow">Visit The Ministry</p>
          <h2>Join us this Sunday or request a one-on-one prayer session.</h2>
          <p>
            Whether you are visiting for the first time or looking for prayer
            and spiritual guidance, you are welcome to connect with the ministry.
          </p>
        </div>

        <div className="cta-actions">
          <Link className="btn btn-primary" to="/contact">
            Plan Your Visit
          </Link>
          <Link className="btn btn-outline" to="/booking">
            Book One-on-One
          </Link>
        </div>
      </section>
    </>
  );
}

export default About;