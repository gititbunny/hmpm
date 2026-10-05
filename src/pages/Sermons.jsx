import { useState } from "react";
import { Link } from "react-router-dom";
import { servicePosters, weeklyServiceGallery } from "../data/sermons";

function Sermons() {
  const [activePosterIndex, setActivePosterIndex] = useState(null);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(null);
  const [touchStart, setTouchStart] = useState(null);

  const activePoster =
    activePosterIndex !== null ? servicePosters[activePosterIndex] : null;

  const activeGalleryImage =
    activeGalleryIndex !== null ? weeklyServiceGallery[activeGalleryIndex] : null;

  function closeModal() {
    setActivePosterIndex(null);
    setActiveGalleryIndex(null);
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

  function showPreviousGalleryImage() {
    setActiveGalleryIndex((currentIndex) =>
      currentIndex === 0 ? weeklyServiceGallery.length - 1 : currentIndex - 1
    );
  }

  function showNextGalleryImage() {
    setActiveGalleryIndex((currentIndex) =>
      currentIndex === weeklyServiceGallery.length - 1 ? 0 : currentIndex + 1
    );
  }

  function handlePosterTouchEnd(event) {
    if (touchStart === null) return;

    const touchEnd = event.changedTouches[0].clientX;
    const distance = touchStart - touchEnd;

    if (distance > 50) showNextPoster();
    if (distance < -50) showPreviousPoster();

    setTouchStart(null);
  }

  function handleGalleryTouchEnd(event) {
    if (touchStart === null) return;

    const touchEnd = event.changedTouches[0].clientX;
    const distance = touchStart - touchEnd;

    if (distance > 50) showNextGalleryImage();
    if (distance < -50) showPreviousGalleryImage();

    setTouchStart(null);
  }

  return (
    <>
      <section className="content-section services-intro-section">
        <div className="section-heading compact-sermon-heading">
          <p className="eyebrow">Services</p>
          <h2>Join us for worship, prayer, and the Word of God.</h2>
          <p>
            View the latest Sunday and Wednesday service posters from House Of
            Miracles Prophetic Ministries.
          </p>
        </div>

        <div className="service-poster-feature-grid">
          {servicePosters.map((poster, index) => (
            <article className="service-poster-feature-card" key={poster.id}>
              <button
                className="service-poster-feature-image-button"
                type="button"
                onClick={() => setActivePosterIndex(index)}
              >
                <img
                  className="service-poster-feature-image"
                  src={poster.image}
                  alt={`${poster.title} poster`}
                />
              </button>

              <div className="service-poster-feature-content">
                <div className="sermon-meta">
                  <span>{poster.serviceType}</span>
                  <span>{poster.time}</span>
                </div>

                <h3>{poster.title}</h3>
                <p>
                  Join us for a service filled with worship, prayer, teaching,
                  and spiritual encouragement.
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section live-section">
        <div>
          <p className="eyebrow">Watch Online</p>
          <h2>Live streaming coming soon.</h2>
          <p>
            The ministry will share live services and recent broadcasts here
            once Facebook Live or YouTube streaming is available.
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

      <section className="content-section weekly-gallery-section">
        <div className="section-heading compact-sermon-heading">
          <p className="eyebrow">Service Gallery</p>
          <h2>This week’s service moments.</h2>
          <p>
            A glimpse of worship, prayer, fellowship, and service moments from
            the week.
          </p>
        </div>

        <button
          className="weekly-gallery-card"
          type="button"
          onClick={() => setActiveGalleryIndex(0)}
        >
          {weeklyServiceGallery.slice(0, 4).map((item, index) => {
            const extraCount = weeklyServiceGallery.length - 4;

            return (
              <div className="weekly-gallery-preview" key={item.id}>
                <img src={item.image} alt={item.alt} />

                {index === 3 && extraCount > 0 && (
                  <span className="weekly-gallery-more">+{extraCount}</span>
                )}
              </div>
            );
          })}
        </button>
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
            onClick={closeModal}
            aria-label="Close poster preview"
          ></button>

          <div
            className="poster-modal-card"
            onTouchStart={(event) =>
              setTouchStart(event.changedTouches[0].clientX)
            }
            onTouchEnd={handlePosterTouchEnd}
          >
            <button
              className="poster-modal-close"
              type="button"
              onClick={closeModal}
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

      {activeGalleryImage && (
        <div className="poster-modal" role="dialog" aria-modal="true">
          <button
            className="poster-modal-backdrop"
            type="button"
            onClick={closeModal}
            aria-label="Close gallery preview"
          ></button>

          <div
            className="poster-modal-card gallery-modal-card"
            onTouchStart={(event) =>
              setTouchStart(event.changedTouches[0].clientX)
            }
            onTouchEnd={handleGalleryTouchEnd}
          >
            <button
              className="poster-modal-close"
              type="button"
              onClick={closeModal}
              aria-label="Close gallery preview"
            >
              ×
            </button>

            <button
              className="poster-modal-arrow poster-modal-arrow-left"
              type="button"
              onClick={showPreviousGalleryImage}
              aria-label="Previous image"
            >
              ‹
            </button>

            <img
              className="poster-modal-image gallery-modal-image"
              src={activeGalleryImage.image}
              alt={activeGalleryImage.alt}
            />

            <button
              className="poster-modal-arrow poster-modal-arrow-right"
              type="button"
              onClick={showNextGalleryImage}
              aria-label="Next image"
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