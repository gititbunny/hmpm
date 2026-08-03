import { Link } from "react-router-dom";

import ministryPraiseImage from "../assets/images/ministries/ministry-praise.jpg";
import ministryUsheringImage from "../assets/images/ministries/ministry-ushering.jpg";
import ministryYouthImage from "../assets/images/ministries/ministry-youth.jpg";
import ministryPrayerImage from "../assets/images/ministries/ministry-prayer.jpg";
import ministryMediaImage from "../assets/images/ministries/ministry-media.jpg";
import ministryOutreachImage from "../assets/images/ministries/ministry-outreach.jpg";
import ministryChildrenImage from "../assets/images/ministries/ministry-children.jpg";
import ministryHospitalityImage from "../assets/images/ministries/ministry-hospitality.jpg";
import servePreviewImage from "../assets/images/ministries/serve-preview.jpg";

const ministries = [
  {
    title: "Praise & Worship",
    image: ministryPraiseImage,
    description: "Serve through worship, singing, and instruments.",
  },
  {
    title: "Ushering & Protocol",
    image: ministryUsheringImage,
    description: "Welcome visitors and help keep services organized.",
  },
  {
    title: "Youth Ministry",
    image: ministryYouthImage,
    description: "Support young people through faith, fellowship, and guidance.",
  },
  {
    title: "Prayer & Intercession",
    image: ministryPrayerImage,
    description: "Stand in prayer for the church, families, and visitors.",
  },
  {
    title: "Media Team",
    image: ministryMediaImage,
    description: "Help with photos, videos, livestreams, and church media.",
  },
  {
    title: "Outreach & Charity",
    image: ministryOutreachImage,
    description: "Serve the community through giving, care, and support.",
  },
  {
    title: "Children’s Ministry",
    image: ministryChildrenImage,
    description: "Create a safe and caring space for children.",
  },
  {
    title: "Cleaning & Hospitality",
    image: ministryHospitalityImage,
    description: "Help keep the church welcoming and prepared.",
  },
];

function Ministries() {
  return (
    <>
      <section className="content-section ministries-intro">
        <div>
          <p className="eyebrow">Ministries</p>
          <h1>Serve, grow, and be part of the work.</h1>
          <p>
            Find a ministry where you can serve with your gifts, time, and
            heart.
          </p>
        </div>
      </section>

      <section className="content-section ministries-grid-section">
        <div className="ministry-grid">
          {ministries.map((ministry) => (
            <article className="ministry-card" key={ministry.title}>
              <div className="ministry-card-image-wrap">
                <img
                  className="ministry-card-image"
                  src={ministry.image}
                  alt={`${ministry.title} at House Of Miracles`}
                />
              </div>

              <div className="ministry-card-content">
                <h3>{ministry.title}</h3>
                <p>{ministry.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section serve-section">
        <img
          className="serve-section-image"
          src={servePreviewImage}
          alt="Church members serving in ministry"
        />

        <div className="serve-section-overlay"></div>

        <div className="serve-content">
          <p className="eyebrow">Why Serve?</p>
          <h2>Serving helps build the church and support the community.</h2>
          <p>
            Every ministry plays a role in welcoming people, supporting worship,
            sharing the Word, and caring for the community.
          </p>
        </div>
      </section>

      <section className="content-section ministry-interest-section">
        <div className="ministry-interest-intro">
          <p className="eyebrow">Get Involved</p>
          <h2>Interested in serving?</h2>
          <p>
            Fill in the form and the church team will contact you about
            available ministry opportunities.
          </p>
        </div>

        <form
          className="church-form ministry-form"
          name="ministry-interest"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          action="/success"
        >
          <input type="hidden" name="form-name" value="ministry-interest" />

          <p className="hidden-field">
            <label>
              Do not fill this out:
              <input name="bot-field" />
            </label>
          </p>

          <div className="form-grid">
            <label>
              Full Name
              <input type="text" name="fullName" placeholder="Your full name" required />
            </label>

            <label>
              Phone Number
              <input type="tel" name="phone" placeholder="Your phone number" required />
            </label>

            <label>
              Email Address
              <input type="email" name="email" placeholder="you@example.com" />
            </label>

            <label>
              Area of Interest
              <select name="interest" required defaultValue="">
                <option value="" disabled>
                  Select a ministry
                </option>
                <option value="Praise & Worship">Praise & Worship</option>
                <option value="Ushering & Protocol">Ushering & Protocol</option>
                <option value="Youth Ministry">Youth Ministry</option>
                <option value="Prayer & Intercession">Prayer & Intercession</option>
                <option value="Media Team">Media Team</option>
                <option value="Outreach & Charity">Outreach & Charity</option>
                <option value="Children’s Ministry">Children’s Ministry</option>
                <option value="Cleaning & Hospitality">Cleaning & Hospitality</option>
                <option value="General Volunteer">General Volunteer</option>
              </select>
            </label>
          </div>

          <label>
            Message
            <textarea
              name="message"
              rows="5"
              placeholder="Tell us briefly how you would like to serve."
            ></textarea>
          </label>

          <label className="checkbox-label">
            <input type="checkbox" name="consent" required />
            <span>
              I consent to House Of Miracles Prophetic Ministries contacting me
              about ministry opportunities.
            </span>
          </label>

          <button className="btn btn-primary" type="submit">
            Submit Interest
          </button>
        </form>
      </section>

      <section className="content-section ministries-final-cta">
        <div>
          <p className="eyebrow">Still Deciding?</p>
          <h2>Visit first and speak with the church team.</h2>
          <p>
            Join a Sunday service and learn more about where you can serve.
          </p>
        </div>

        <Link className="btn btn-primary" to="/contact">
          Plan Your Visit
        </Link>
      </section>
    </>
  );
}

export default Ministries;