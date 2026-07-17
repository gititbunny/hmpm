import { Link } from "react-router-dom";
import { mediaCategories, mediaItems } from "../data/media";

function Media() {
  const featuredMedia = mediaItems[0];
  const galleryItems = mediaItems.slice(1);

  return (
    <>

      <section className="content-section featured-media-section">
        <div className="featured-media-card">
          <div className="featured-media-image-wrap">
            <img
              className="featured-media-image"
              src={featuredMedia.image}
              alt={featuredMedia.title}
            />
          </div>

          <div className="featured-media-content">
            <p className="eyebrow">Featured Media</p>
            <h2>{featuredMedia.title}</h2>
            <p>{featuredMedia.description}</p>

            <div className="media-meta-row">
              <span>{featuredMedia.category}</span>
              <span>{featuredMedia.type}</span>
            </div>

            <Link className="btn btn-primary" to="/sermons">
              View Sermons
            </Link>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <p className="eyebrow">Browse By Category</p>
          <h2>Explore the life of the ministry through media.</h2>
          <p>
            These categories make it easier for members and visitors to find
            photos and highlights from different church activities.
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
          <h2>Recent photos and highlights.</h2>
          <p>
            Replace or expand these items as more church photos, videos, and
            edited highlights become available.
          </p>
        </div>

        <div className="media-gallery-grid">
          {galleryItems.map((item) => (
            <article className="media-gallery-card" key={item.id}>
              <div className="media-gallery-image-wrap">
                <img
                  className="media-gallery-image"
                  src={item.image}
                  alt={item.title}
                />
              </div>

              <div className="media-gallery-content">
                <div className="media-meta-row small">
                  <span>{item.category}</span>
                  <span>{item.type}</span>
                </div>

                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section media-upload-section">
        <div>
          <p className="eyebrow">Media Team</p>
          <h2>Keep the ministry archive updated.</h2>
          <p>
            As the church grows online, the media team can continue adding new
            service photos, sermon clips, outreach moments, and event galleries.
          </p>
        </div>

        <div className="upload-guidelines">
          <article>
            <strong>Use clear file names</strong>
            <p>Example: sunday-service-july-2026-01.jpg</p>
          </article>

          <article>
            <strong>Organize by event</strong>
            <p>Keep Sunday, Wednesday, outreach, and event media separate.</p>
          </article>

          <article>
            <strong>Choose strong highlights</strong>
            <p>Use images that feel warm, clear, respectful, and welcoming.</p>
          </article>
        </div>
      </section>

      <section className="content-section page-cta">
        <div>
          <p className="eyebrow">Stay Connected</p>
          <h2>Follow the ministry and visit us in person.</h2>
          <p>
            View sermons, plan your visit, or contact the church for prayer and
            guidance.
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