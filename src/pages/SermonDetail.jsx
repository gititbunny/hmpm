import { Link, useParams } from "react-router-dom";
import { sermons } from "../data/sermons";

function SermonDetail() {
  const { slug } = useParams();
  const sermon = sermons.find((item) => item.slug === slug);

  if (!sermon) {
    return (
      <section className="page-shell">
        <h1>Sermon Not Found</h1>
        <p>The sermon you are looking for could not be found.</p>
        <Link className="btn btn-primary" to="/sermons">
          Back to Sermons
        </Link>
      </section>
    );
  }

  return (
    <>
      <section className="page-hero sermon-detail-hero">
        <div>
          <p className="eyebrow">{sermon.serviceType}</p>
          <h1>{sermon.theme}</h1>

          <div className="sermon-meta">
            <span>{sermon.date}</span>
            <span>{sermon.mainScripture}</span>
          </div>

          <p>{sermon.summary}</p>
        </div>
      </section>

      <section className="content-section sermon-detail-media-section">
        <div className="sermon-detail-main-media-wrap">
          <img
            className="sermon-detail-main-image"
            src={sermon.mainImage || sermon.image}
            alt={`${sermon.theme} service highlight`}
          />
        </div>
      </section>

      <section className="content-section sermon-message-section">
        <div className="message-section-heading">
          <p className="eyebrow">Opening Message</p>
          <h2>{sermon.pastorMessage.title}</h2>

          <div className="sermon-meta">
            <span>{sermon.pastorMessage.speaker}</span>
            <span>{sermon.pastorMessage.scripture}</span>
          </div>

          <p>{sermon.pastorMessage.summary}</p>
        </div>

        <div className="message-body-grid">
          <div className="sermon-points">
            <h3>Key Points</h3>
            <ul>
              {sermon.pastorMessage.keyPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>

          <div className="full-notes-card">
            <h3>Full Notes</h3>
            {sermon.pastorMessage.fullNotes.map((note) => (
              <p key={note}>{note}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section sermon-message-section prophet-message-section">
        <div className="message-section-heading">
          <p className="eyebrow">Main Message</p>
          <h2>{sermon.prophetMessage.title}</h2>

          <div className="sermon-meta">
            <span>{sermon.prophetMessage.speaker}</span>
            <span>{sermon.prophetMessage.scripture}</span>
          </div>

          <p>{sermon.prophetMessage.summary}</p>
        </div>

        <div className="message-body-grid">
          <div className="sermon-points">
            <h3>Key Points</h3>
            <ul>
              {sermon.prophetMessage.keyPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>

          <div className="sermon-points prayer-points-card">
            <h3>Prayer Points</h3>
            <ul>
              {sermon.prophetMessage.prayerPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>

          <div className="full-notes-card wide-notes-card">
            <h3>Full Notes</h3>
            {sermon.prophetMessage.fullNotes.map((note) => (
              <p key={note}>{note}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section service-gallery-section">
        <div className="section-heading">
          <p className="eyebrow">Service Gallery</p>
          <h2>Photos and videos from this service.</h2>
          <p>
            This section can include worship photos, prayer moments, short video
            clips, and highlights from this specific service.
          </p>
        </div>

        <div className="service-gallery-grid">
          {sermon.gallery.map((item, index) => (
            <article className="service-gallery-card" key={`${item.label}-${index}`}>
              {item.type === "video" ? (
                <video
                  className="service-gallery-media"
                  src={item.src}
                  controls
                  playsInline
                ></video>
              ) : (
                <img
                  className="service-gallery-media"
                  src={item.src}
                  alt={item.label}
                />
              )}

              <div className="service-gallery-caption">
                <span>{item.type === "video" ? "Video" : "Photo"}</span>
                <strong>{item.label}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section page-cta">
        <div>
          <p className="eyebrow">Stay Connected</p>
          <h2>Join the next service or request a one-on-one session.</h2>
          <p>
            You can visit the church, contact the prayer line, or request a
            private prayer and guidance session.
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

export default SermonDetail;