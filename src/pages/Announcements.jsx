import { Link } from "react-router-dom";
import { announcements } from "../data/announcements";

function Announcements() {
  const featuredAnnouncement = announcements.find((item) => item.featured);
  const otherAnnouncements = announcements.filter((item) => !item.featured);

  return (
    <>
      <section className="content-section announcements-intro">
        <p className="eyebrow">Announcements</p>
        <h1>Church updates, notices, and upcoming events.</h1>
        <p>
          Stay updated with important church announcements, event details, fraud
          alerts, support notices, and official communication updates.
        </p>
      </section>

      {featuredAnnouncement && (
        <section className="content-section featured-announcement-section">
          <article className={`featured-announcement ${featuredAnnouncement.type}`}>
            <div>
              <span>{featuredAnnouncement.category}</span>
              <h2>{featuredAnnouncement.title}</h2>
              <strong>{featuredAnnouncement.date}</strong>
              <p>{featuredAnnouncement.summary}</p>
            </div>

            <div className="featured-announcement-details">
              {featuredAnnouncement.details.map((detail) => (
                <p key={detail}>{detail}</p>
              ))}

              <Link
                className="btn btn-primary"
                to={featuredAnnouncement.actionLink}
              >
                {featuredAnnouncement.actionLabel}
              </Link>
            </div>
          </article>
        </section>
      )}

      <section className="content-section announcement-category-section">
        <div className="announcement-category-grid">
          <article>
            <span>Events</span>
            <p>Upcoming services, all-night prayer, and special programmes.</p>
          </article>

          <article>
            <span>Alerts</span>
            <p>Fraud warnings, fake account notices, and safety updates.</p>
          </article>

          <article>
            <span>Support</span>
            <p>Building needs, supplies, giving notices, and approved requests.</p>
          </article>

          <article>
            <span>Church Notices</span>
            <p>Schedule changes, communication updates, and general notices.</p>
          </article>
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading announcements-heading">
          <p className="eyebrow">Latest Notices</p>
          <h2>Important updates from the ministry.</h2>
        </div>

        <div className="announcement-grid">
          {otherAnnouncements.map((announcement) => (
            <article
              className={`announcement-card ${announcement.type}`}
              key={announcement.id}
            >
              <div className="announcement-card-top">
                <span>{announcement.category}</span>
                <small>{announcement.date}</small>
              </div>

              <h3>{announcement.title}</h3>
              <p>{announcement.summary}</p>

              <div className="announcement-details">
                {announcement.details.map((detail) => (
                  <p key={detail}>{detail}</p>
                ))}
              </div>

              <Link className="text-link" to={announcement.actionLink}>
                {announcement.actionLabel}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section announcements-final-cta">
        <div>
          <p className="eyebrow">Need More Information?</p>
          <h2>Contact the church for confirmed updates.</h2>
          <p>
            For event details, official notices, support needs, or prayer line
            information, please contact the church directly.
          </p>
        </div>

        <Link className="btn btn-primary" to="/contact">
          Contact Church
        </Link>
      </section>
    </>
  );
}

export default Announcements;