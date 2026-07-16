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
    description:
      "Serve through worship, singing, instruments, and helping lead the congregation into a meaningful worship experience.",
  },
  {
    title: "Ushering & Protocol",
    image: ministryUsheringImage,
    description:
      "Welcome visitors, guide members, support order during services, and help create a respectful church environment.",
  },
  {
    title: "Youth Ministry",
    image: ministryYouthImage,
    description:
      "Support young people through faith-based encouragement, fellowship, mentorship, and spiritual growth.",
  },
  {
    title: "Prayer & Intercession",
    image: ministryPrayerImage,
    description:
      "Stand in prayer for the church, families, visitors, one-on-one requests, and community needs.",
  },
  {
    title: "Media Team",
    image: ministryMediaImage,
    description:
      "Help capture photos, videos, service highlights, livestream support, editing, and online ministry content.",
  },
  {
    title: "Outreach & Charity",
    image: ministryOutreachImage,
    description:
      "Serve the community through giving, charity projects, visits, support drives, and acts of compassion.",
  },
  {
    title: "Children’s Ministry",
    image: ministryChildrenImage,
    description:
      "Create a safe and caring space for children to learn, grow, and participate in church life.",
  },
  {
    title: "Cleaning & Hospitality",
    image: ministryHospitalityImage,
    description:
      "Help keep the church welcoming, clean, organized, and prepared before, during, and after services.",
  },
];

function Ministries() {
  return (
    <>
      <section className="page-hero">
        <div>
          <p className="eyebrow">Ministries</p>
          <h1>Serve, grow, and belong through ministry.</h1>
          <p>
            There are many ways to be part of House Of Miracles Prophetic
            Ministries, from worship and prayer to outreach, media, hospitality,
            and youth support.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <p className="eyebrow">Where You Can Serve</p>
          <h2>Find a ministry where your gifts can make an impact.</h2>
          <p>
            These ministry areas can be updated as the church confirms its
            official departments and serving teams.
          </p>
        </div>

        <div className="ministry-grid ministry-media-grid">
          {ministries.map((ministry, index) => (
            <article className="ministry-card ministry-card-with-media" key={ministry.title}>
              <div className="ministry-card-image-wrap">
                <img
                  className="ministry-card-image"
                  src={ministry.image}
                  alt={`${ministry.title} at House Of Miracles`}
                />
              </div>

              <div className="ministry-card-content">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{ministry.title}</h3>
                <p>{ministry.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section serve-section serve-section-with-media">
        <img
          className="serve-section-image"
          src={servePreviewImage}
          alt="Church members serving in ministry"
        />

        <div className="serve-section-overlay"></div>

        <div className="serve-content">
          <p className="eyebrow">Why Serve?</p>
          <h2>Serving helps build the church and strengthen the community.</h2>
          <p>
            Every ministry plays a part in creating a welcoming, prayerful, and
            organized environment for members, visitors, families, and the wider
            community.
          </p>
        </div>

        <div className="serve-points">
          <div>
            <strong>Grow in faith</strong>
            <p>Serving creates space for spiritual growth, discipline, and connection.</p>
          </div>

          <div>
            <strong>Support others</strong>
            <p>Every act of service helps someone feel welcomed, guided, and cared for.</p>
          </div>

          <div>
            <strong>Use your gifts</strong>
            <p>Your skills, talents, and heart for service can strengthen the ministry.</p>
          </div>
        </div>
      </section>

      <section className="content-section form-section">
        <div className="form-intro">
          <p className="eyebrow">Get Involved</p>
          <h2>Interested in serving?</h2>
          <p>
            Complete this form and the church team will contact you about
            available ministry opportunities.
          </p>
        </div>

        <form
          className="church-form"
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
                <option value="Instruments">Instruments</option>
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

            <label>
              Availability
              <select name="availability" required defaultValue="">
                <option value="" disabled>
                  Select availability
                </option>
                <option value="Sundays">Sundays</option>
                <option value="Saturdays">Saturdays</option>
                <option value="Weekends">Weekends</option>
                <option value="Weekdays">Weekdays</option>
                <option value="Flexible">Flexible</option>
              </select>
            </label>

            <label>
              Experience Level
              <select name="experience" defaultValue="">
                <option value="" disabled>
                  Select experience
                </option>
                <option value="No experience yet">No experience yet</option>
                <option value="Some experience">Some experience</option>
                <option value="Experienced">Experienced</option>
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
              about ministry and serving opportunities.
            </span>
          </label>

          <button className="btn btn-primary" type="submit">
            Submit Interest
          </button>
        </form>
      </section>

      <section className="content-section page-cta">
        <div>
          <p className="eyebrow">Still deciding?</p>
          <h2>You are welcome to visit first and speak with the church team.</h2>
          <p>
            Join a Sunday service, meet the ministry, and learn more about where
            you can serve.
          </p>
        </div>

        <div className="cta-actions">
          <Link className="btn btn-primary" to="/contact">
            Plan Your Visit
          </Link>
          <Link className="btn btn-outline" to="/about">
            Learn About Us
          </Link>
        </div>
      </section>
    </>
  );
}

export default Ministries;