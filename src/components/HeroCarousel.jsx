import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import heroWorship from "../assets/images/home/hero-worship.jpg";
import heroPrayer from "../assets/images/home/hero-prayer.jpg";
import heroOutreach from "../assets/images/home/hero-outreach.jpg";
import heroServiceVideo from "../assets/videos/services/hero-service.mp4";

const heroSlides = [
  {
    id: 1,
    type: "image",
    label: "Sunday Worship",
    title: "Experience worship, prayer, and the Word.",
    description:
      "Join House Of Miracles Prophetic Ministries for powerful Sunday services filled with worship, teaching, prayer, and spiritual guidance.",
    media: heroWorship,
  },
  {
    id: 2,
    type: "image",
    label: "Prayer & Guidance",
    title: "A place for prayer and spiritual support.",
    description:
      "Request prayer, connect with the ministry team, and find guidance through one-on-one sessions and church services.",
    media: heroPrayer,
  },
  {
    id: 3,
    type: "image",
    label: "Outreach & Charity",
    title: "Serving the community with love.",
    description:
      "The ministry supports the community through outreach, charity work, prayer, and practical acts of care.",
    media: heroOutreach,
  },
  {
    id: 4,
    type: "video",
    label: "Service Highlights",
    title: "Watch moments from the life of the ministry.",
    description:
      "Photos and videos from services, sermons, worship, and events help members and visitors stay connected.",
    media: heroServiceVideo,
  },
];

function HeroCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);

  const goToNextSlide = () => {
    setActiveSlide((currentSlide) =>
      currentSlide === heroSlides.length - 1 ? 0 : currentSlide + 1
    );
  };

  const goToPreviousSlide = () => {
    setActiveSlide((currentSlide) =>
      currentSlide === 0 ? heroSlides.length - 1 : currentSlide - 1
    );
  };

  useEffect(() => {
    const slideTimer = setInterval(() => {
      goToNextSlide();
    }, 6500);

    return () => clearInterval(slideTimer);
  }, []);

  const currentSlide = heroSlides[activeSlide];

  return (
    <section className="home-hero-carousel">
      <div className="hero-carousel-bg">
        {heroSlides.map((slide, index) => (
          <div
            className={
              index === activeSlide
                ? "hero-carousel-slide active"
                : "hero-carousel-slide"
            }
            key={slide.id}
            aria-hidden={index !== activeSlide}
          >
            {slide.type === "video" ? (
              <video
                className="hero-carousel-media"
                src={slide.media}
                autoPlay
                muted
                loop
                playsInline
              ></video>
            ) : (
              <img
                className="hero-carousel-media"
                src={slide.media}
                alt={slide.label}
              />
            )}
          </div>
        ))}
      </div>

      <div className="hero-carousel-overlay"></div>

      <button
        className="hero-arrow hero-arrow-left"
        type="button"
        aria-label="Previous hero slide"
        onClick={goToPreviousSlide}
      >
        ‹
      </button>

      <button
        className="hero-arrow hero-arrow-right"
        type="button"
        aria-label="Next hero slide"
        onClick={goToNextSlide}
      >
        ›
      </button>

      <div className="hero-carousel-content">
        <div className="hero-copy">
          <p className="eyebrow">
            Welcome to House Of Miracles Prophetic Ministries
          </p>

          <h1>{currentSlide.title}</h1>

          <p className="hero-text">{currentSlide.description}</p>

          <div className="hero-actions">
            <Link className="btn btn-primary" to="/contact">
              Join Us This Sunday
            </Link>

            <Link className="btn btn-hero-outline" to="/booking">
              Book One-on-One
            </Link>
          </div>
        </div>

        <div className="hero-service-strip">
          <article>
            <span>Sunday Service</span>
            <strong>Every Sunday from 11:30 AM</strong>
          </article>

          <article>
            <span>Wednesday Service</span>
            <strong>Midweek service</strong>
          </article>

          <article>
            <span>One-on-One</span>
            <strong>Weekends by appointment</strong>
          </article>
        </div>

        <div className="hero-dots" aria-label="Hero carousel slides">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.id}
              className={index === activeSlide ? "hero-dot active" : "hero-dot"}
              type="button"
              aria-label={`Go to ${slide.label} slide`}
              onClick={() => setActiveSlide(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroCarousel;