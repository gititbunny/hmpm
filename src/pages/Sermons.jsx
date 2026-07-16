import { Link } from "react-router-dom";
import { sermons } from "../data/sermons";

function Sermons() {
  const latestSunday = sermons.find(
    (sermon) => sermon.serviceType === "Sunday Service"
  );

  const latestWednesday = sermons.find(
    (sermon) => sermon.serviceType === "Wednesday Service"
  );

  return (
    <>
      <section className="page-hero sermons-hero">
        <div>
          <p className="eyebrow">Sermons & Messages</p>
          <h1>Read Sunday and Wednesday service messages.</h1>
          <p>
            Explore service notes, scriptures, key points, prayer points, and
            media from House Of Miracles Prophetic Ministries.
          </p>
        </div>
      </section>

      <section className="content-section latest-service-grid">
        {latestSunday && (
          <article className="featured-service-card">
            <div className="featured-service-media-wrap">
              <img
                className="featured-service-image"
                src={latestSunday.image}
                alt={`${latestSunday.theme} service highlight`}
              />
            </div>

            <div className="featured-service-content">
              <p className="eyebrow">{latestSunday.serviceType}</p>
              <h2>{latestSunday.theme}</h2>

              <div className="sermon-meta">
                <span>{latestSunday.date}</span>
                <span>{latestSunday.mainScripture}</span>
              </div>

              <p>{latestSunday.summary}</p>

              <div className="message-preview-box">
                <strong>Prophet’s Main Message</strong>
                <p>{latestSunday.prophetMessage.title}</p>
              </div>

              <div className="message-preview-box soft-box">
                <strong>Pastor’s Opening Message</strong>
                <p>{latestSunday.pastorMessage.title}</p>
              </div>

              <Link
                className="btn btn-primary"
                to={`/sermons/${latestSunday.slug}`}
              >
                View Full Sermon
              </Link>
            </div>
          </article>
        )}

        {latestWednesday && (
          <article className="featured-service-card">
            <div className="featured-service-media-wrap">
              <img
                className="featured-service-image"
                src={latestWednesday.image}
                alt={`${latestWednesday.theme} service highlight`}
              />
            </div>

            <div className="featured-service-content">
              <p className="eyebrow">{latestWednesday.serviceType}</p>
              <h2>{latestWednesday.theme}</h2>

              <div className="sermon-meta">
                <span>{latestWednesday.date}</span>
                <span>{latestWednesday.mainScripture}</span>
              </div>

              <p>{latestWednesday.summary}</p>

              <div className="message-preview-box">
                <strong>Prophet’s Main Message</strong>
                <p>{latestWednesday.prophetMessage.title}</p>
              </div>

              <div className="message-preview-box soft-box">
                <strong>Pastor’s Opening Message</strong>
                <p>{latestWednesday.pastorMessage.title}</p>
              </div>

              <Link
                className="btn btn-primary"
                to={`/sermons/${latestWednesday.slug}`}
              >
                View Full Sermon
              </Link>
            </div>
          </article>
        )}
      </section>

      <section className="content-section sermon-notes-section">
        <div className="section-heading">
          <p className="eyebrow">Service Notes</p>
          <h2>Every service can have a full sermon page.</h2>
          <p>
            Each Sunday and Wednesday service can include the pastor’s opening
            message, the prophet’s main message, scriptures, key lessons, prayer
            points, full notes, and media from that day.
          </p>
        </div>

        <div className="notes-grid">
          <article className="note-card">
            <span>01</span>
            <h3>Pastor’s Message</h3>
            <p>
              Add the opening message, scripture, summary, and key points from
              the pastor.
            </p>
          </article>

          <article className="note-card">
            <span>02</span>
            <h3>Prophet’s Message</h3>
            <p>
              Add the main sermon notes, scriptures, prayer points, and full
              teaching from the prophet.
            </p>
          </article>

          <article className="note-card">
            <span>03</span>
            <h3>Service Gallery</h3>
            <p>
              Add photos and videos from that specific Sunday or Wednesday
              service.
            </p>
          </article>
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <p className="eyebrow">Sermon Archive</p>
          <h2>Browse previous Sunday and Wednesday services.</h2>
          <p>
            Older sermons can stay available as an archive, while the homepage
            and top of this page focus on the latest services.
          </p>
        </div>

        <div className="sermon-grid">
          {sermons.map((sermon) => (
            <article className="sermon-card" key={sermon.id}>
              <div className="sermon-card-media-wrap">
                <img
                  className="sermon-card-image"
                  src={sermon.image}
                  alt={`${sermon.theme} sermon thumbnail`}
                />
              </div>

              <div className="sermon-card-content">
                <div className="sermon-meta small-meta">
                  <span>{sermon.serviceType}</span>
                  <span>{sermon.date}</span>
                </div>

                <h3>{sermon.theme}</h3>
                <p>{sermon.summary}</p>

                <div className="archive-message-list">
                  <p>
                    <strong>Pastor:</strong> {sermon.pastorMessage.title}
                  </p>
                  <p>
                    <strong>Prophet:</strong> {sermon.prophetMessage.title}
                  </p>
                </div>

                <Link className="text-link" to={`/sermons/${sermon.slug}`}>
                  View Full Sermon
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section page-cta">
        <div>
          <p className="eyebrow">Need prayer?</p>
          <h2>Request a one-on-one session or contact the prayer line.</h2>
          <p>
            If a message speaks to your situation and you would like prayer or
            spiritual guidance, you can reach out to the ministry team.
          </p>
        </div>

        <div className="cta-actions">
          <Link className="btn btn-primary" to="/booking">
            Book One-on-One
          </Link>
          <Link className="btn btn-outline" to="/contact">
            Contact Church
          </Link>
        </div>
      </section>
    </>
  );
}

export default Sermons;