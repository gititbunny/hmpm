import { Link } from "react-router-dom";
import { mediaCategories, mediaItems } from "../data/media";

function Media() {
  return (
    <>
      <section className="page-hero">
        <div>
          <p className="eyebrow">Media Gallery</p>
          <h1>Photos, videos, and service highlights.</h1>
          <p>
            Explore moments from Sunday services, Wednesday services, outreach
            work, special events, worship, prayer, and prophetic gatherings.
          </p>
        </div>
      </section>

      <section className="content-section media-feature-section">
        <div className="media-placeholder media-feature-visual">
          <span>Featured Church Photo / Video</span>
        </div>

        <div className="media-feature-content">
          <p className="eyebrow">Featured Media</p>
          <h2>Capturing the life of the ministry.</h2>
          <p>
            This page helps the church share photos and videos beyond Facebook,
            making it easier for visitors and members to see what happens during
            services, outreach moments, and special events.
          </p>

          <div className="media-feature-list">
            <article>
              <strong>Service Highlights</strong>
              <span>
                Share worship moments, sermon clips, prayer moments, and weekly
                service galleries.
              </span>
            </article>

            <article>
              <strong>Outreach Stories</strong>
              <span>
                Document charity work, community support, giving moments, and
                ministry impact.
              </span>
            </article>

            <article>
              <strong>Video Moments</strong>
              <span>
                Add short clips from phones, cameras, or future livestream
                content.
              </span>
            </article>
          </div>

          <Link className="btn btn-primary" to="/sermons">
            View Sermons
          </Link>
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <p className="eyebrow">Browse Media</p>
          <h2>Organized by service, event, and ministry work.</h2>
          <p>
            Instead of placing too many photos on one page, media can be grouped
            by category or event so the website stays clean and easy to browse.
          </p>
        </div>

        <div className="media-category-grid">
          {mediaCategories.map((category, index) => (
            <article className="media-category-card" key={category.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <p className="eyebrow">Recent Media</p>
          <h2>Latest photos, videos, and event highlights.</h2>
          <p>
            These cards are placeholders for now. Later, each card can connect
            to a full gallery page or a specific sermon/service page.
          </p>
        </div>

        <div className="recent-media-grid">
          {mediaItems.map((item) => (
            <article className="media-card" key={item.id}>
              <div className="media-placeholder media-card-visual">
                <span>{item.type}</span>
              </div>

              <div className="media-card-content">
                <div className="media-card-meta">
                  <span>{item.category}</span>
                  <span>{item.date}</span>
                </div>

                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section media-guidance-section">
        <div>
          <p className="eyebrow">Media Tip</p>
          <h2>Keep the website fast by organizing photos properly.</h2>
        </div>

        <div className="media-guidance-list">
          <div>
            <strong>Use selected highlights first</strong>
            <p>
              Instead of uploading 100 full-size images onto one page, choose
              the strongest photos for the main page.
            </p>
          </div>

          <div>
            <strong>Create galleries by event</strong>
            <p>
              Group photos by Sunday service, Wednesday service, outreach,
              conference, or special event.
            </p>
          </div>

          <div>
            <strong>Compress images before uploading</strong>
            <p>
              Large images can slow down the website. We can resize and compress
              photos before adding them to the project.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section page-cta">
        <div>
          <p className="eyebrow">Stay Connected</p>
          <h2>Follow the ministry and revisit service highlights anytime.</h2>
          <p>
            Browse sermons, view service media, or contact the church for prayer
            and visit information.
          </p>
        </div>

        <div className="cta-actions">
          <Link className="btn btn-primary" to="/sermons">
            View Sermons
          </Link>
          <Link className="btn btn-outline" to="/contact">
            Contact Church
          </Link>
        </div>
      </section>
    </>
  );
}

export default Media;