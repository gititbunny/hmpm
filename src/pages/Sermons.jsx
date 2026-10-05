import { useState } from "react";
import { Link } from "react-router-dom";
import { servicePosters } from "../data/sermons";

function Sermons() {
  const [activePosterIndex, setActivePosterIndex] = useState(null);
  const [touchStart, setTouchStart] = useState(null);

  const latestSunday = servicePosters.find(
    (poster) => poster.serviceType === "Sunday Service"
  );

  const latestWednesday = servicePosters.find(
    (poster) => poster.serviceType === "Wednesday Service"
  );

  const featuredServices = [latestSunday, latestWednesday].filter(Boolean);
  const activePoster =
    activePosterIndex !== null ? servicePosters[activePosterIndex] : null;

  function openPoster(index) {
    setActivePosterIndex(index);
  }

  function closePoster() {
    setActivePosterIndex(null);
  }

  function showPreviousPoster() {
    setActivePosterIndex((currentIndex) =>
      currentIndex === 0 ? servicePosters.length - 1 : currentIndex - 1
    );
  }

  function showNextPoster() {
    setActivePosterIndex((currentIndex) =>
      currentIndex === servicePosters.length - 1 ? 0 : currentIndex + 1
    );
  }

  function handleTouchEnd(event) {
    if (touchStart === null) {
      return;
    }

    const touchEnd = event.changedTouches[0].clientX;
    const distance = touchStart - touchEnd;

    if (distance > 50) {
      showNextPoster();
    }

    if (distance < -50) {
      showPreviousPoster();
    }

    setTouchStart(null);
  }

  return (
    <>
      <section className="content-section sermons-latest-section">
        <div className="section-heading compact-sermon-heading">
          <p className="eyebrow">Services</p>
          <h2>Join us for worship, prayer, and the Word of God.</h2>
          <p>
            View the latest Sunday and Wednesday service posters from House Of
            Miracles Prophetic Ministries.
          </p>
        </div>

        <div className="latest-sermon-grid">
          {featuredServices.map((poster) => {
            const posterIndex = servicePosters.findIndex(
              (item) => item.id === poster.id
            );

            return (
              <article className="latest-sermon-card" key={poster.id}>
                <button
                  className="poster-button"
                  type="button"
                  onClick={() => openPoster(posterIndex)}
                >
                  <div className="latest-sermon-image-wrap poster-image-wrap">
                    <img
                      className="latest-sermon-image"
                      src={poster.image}
                      alt={`${poster.title} poster`}
                    />
                  </div>
                </button>

                <div className="latest-sermon-content">
                  <div className="sermon-meta">
                    <span>{poster.serviceType}</span>
                    <span>{poster.date}</span>
                  </div>

                  <h3>{poster.title}</h3>
                  <p>
                    Join us for a service filled with worship, prayer, teaching,
                    and spiritual encouragement.
                  </p>

                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={() => openPoster(posterIndex)}
                  >
                    View Poster
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="content-section live-section">
        <div>
          <p className="eyebrow">Watch Online</p>
          <h2>Connect with the ministry online.</h2>
          <p>
            Follow the official Facebook and YouTube pages for ministry updates,
            service moments, and live broadcasts when available.
          </p>
        </div>

        <div className="live-actions">
          <span>
            <a
              href="https://www.facebook.com/share/19Y3gigB9f/"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </span>

          <span>
            <a
              href="https://www.youtube.com/@HouseOfMiraclesPM"
              target="_blank"
              rel="noreferrer"
            >
              YouTube
            </a>
          </span>
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading compact-sermon-heading">
          <p className="eyebrow">Service Posters</p>
          <h2>Recent service announcements.</h2>
          <p>
            Click any poster to view it larger. New posters can be added for
            Sunday and Wednesday services.
          </p>
        </div>

        <div className="service-poster-grid">
          {servicePosters.map((poster, index) => (
            <article className="service-poster-card" key={poster.id}>
              <button
                className="service-poster-image-button"
                type="button"
                onClick={() => openPoster(index)}
              >
                <img
                  className="service-poster-image"
                  src={poster.image}
                  alt={`${poster.title} poster`}
                />
              </button>

              <div className="service-poster-content">
                <span>{poster.serviceType}</span>
                <h3>{poster.title}</h3>
                <p>{poster.date}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section sermons-cta">
        <div>
          <p className="eyebrow">Visit The Ministry</p>
          <h2>Join us for the next service.</h2>
          <p>
            View service times, location details, prayer line information, and
            directions before your visit.
          </p>
        </div>

        <div className="cta-actions">
          <Link className="btn btn-primary" to="/contact#find-us">
            Get Directions
          </Link>
          <Link className="btn btn-outline" to="/booking">
            Book One-on-One
          </Link>
        </div>
      </section>

      {activePoster && (
        <div className="poster-modal" role="dialog" aria-modal="true">
          <button
            className="poster-modal-backdrop"
            type="button"
            onClick={closePoster}
            aria-label="Close poster preview"
          ></button>

          <div
            className="poster-modal-card"
            onTouchStart={(event) =>
              setTouchStart(event.changedTouches[0].clientX)
            }
            onTouchEnd={handleTouchEnd}
          >
            <button
              className="poster-modal-close"
              type="button"
              onClick={closePoster}
              aria-label="Close poster preview"
            >
              ×
            </button>

            <button
              className="poster-modal-arrow poster-modal-arrow-left"
              type="button"
              onClick={showPreviousPoster}
              aria-label="Previous poster"
            >
              ‹
            </button>

            <img
              className="poster-modal-image"
              src={activePoster.image}
              alt={`${activePoster.title} poster`}
            />

            <button
              className="poster-modal-arrow poster-modal-arrow-right"
              type="button"
              onClick={showNextPoster}
              aria-label="Next poster"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Sermons;