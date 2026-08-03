import { Link } from "react-router-dom";
import { sermons } from "../data/sermons";

function Sermons() {
  const latestSunday = sermons.find(
    (sermon) => sermon.serviceType === "Sunday Service"
  );

  const latestWednesday = sermons.find(
    (sermon) => sermon.serviceType === "Wednesday Service"
  );

  const latestMessages = [latestSunday, latestWednesday].filter(Boolean);

  return (
    <>
      <section className="sermons-intro">
        <p className="eyebrow">Sermons</p>
        <h1>Watch, read, and revisit recent messages.</h1>
        <p>
          Find Sunday and Wednesday service messages, scriptures, prayer points,
          and service notes.
        </p>
      </section>

      <section className="content-section sermons-latest-section">
        <div className="section-heading compact-sermon-heading">
          <p className="eyebrow">Latest Messages</p>
          <h2>Recent services.</h2>
        </div>

        <div className="latest-sermon-grid">
          {latestMessages.map((sermon) => (
            <article className="latest-sermon-card" key={sermon.id}>
              <div className="latest-sermon-image-wrap">
                <img
                  className="latest-sermon-image"
                  src={sermon.image}
                  alt={`${sermon.theme} sermon`}
                />
              </div>

              <div className="latest-sermon-content">
                <div className="sermon-meta">
                  <span>{sermon.serviceType}</span>
                  <span>{sermon.date}</span>
                </div>

                <h3>{sermon.theme}</h3>
                <p>{sermon.summary}</p>

                <Link className="btn btn-primary" to={`/sermons/${sermon.slug}`}>
                  Open Sermon
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading compact-sermon-heading">
          <p className="eyebrow">Sermon Archive</p>
          <h2>Previous messages.</h2>
        </div>

        <div className="sermon-list">
          {sermons.map((sermon) => (
            <article className="sermon-list-card" key={sermon.id}>
              <img
                className="sermon-list-image"
                src={sermon.image}
                alt={`${sermon.theme} sermon thumbnail`}
              />

              <div className="sermon-list-content">
                <div className="sermon-meta small-meta">
                  <span>{sermon.serviceType}</span>
                  <span>{sermon.date}</span>
                  <span>{sermon.mainScripture}</span>
                </div>

                <h3>{sermon.theme}</h3>
                <p>{sermon.summary}</p>
              </div>

              <Link className="text-link" to={`/sermons/${sermon.slug}`}>
                Read Sermon
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section sermons-cta">
        <div>
          <p className="eyebrow">Need Prayer?</p>
          <h2>Book a one-on-one session.</h2>
          <p>
            Submit a private booking request and keep your reference number for
            the day.
          </p>
        </div>

        <Link className="btn btn-primary" to="/booking">
          Book One-on-One
        </Link>
      </section>
    </>
  );
}

export default Sermons;