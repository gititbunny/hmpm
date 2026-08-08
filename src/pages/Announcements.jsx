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
          Stay updated with important church announcements, event details,
          fraud alerts, support notices, and official communication updates.
        </p>
      </section>

      {featuredAnnouncement && (
        <section className="content-section featured-announcement-section">
          <article className={`featured-announcement ${featuredAnnouncement.type}`}>
            <div className="featured-announcement-image-wrap">
              <img
                className="featured-announcement-image"
                src={featuredAnnouncement.image}
                alt={featuredAnnouncement.title}
              />
            </div>

            <div className="featured-announcement-content">
              <span>{featuredAnnouncement.category}</span>
              <h2>{featuredAnnouncement.title}</h2>
              <strong>{featuredAnnouncement.date}</strong>
              <small>{featuredAnnouncement.time}</small>
              <p>{featuredAnnouncement.summary}</p>

              <div className="featured-announcement-details">
                {featuredAnnouncement.details.map((detail) => (
                  <p key={detail}>{detail}</p>
                ))}
              </div>

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
              <div className="announcement-card-image-wrap">
                <img
                  className="announcement-card-image"
                  src={announcement.image}
                  alt={announcement.title}
                />
              </div>

              <div className="announcement-card-content">
                <div className="announcement-card-top">
                  <span>{announcement.category}</span>
                  <small>{announcement.date}</small>
                </div>

                <strong className="announcement-time">{announcement.time}</strong>

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
              </div>
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