import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      <section className="page-hero">
        <div>
          <p className="eyebrow">Visit & Contact Us</p>
          <h1>Plan your visit to House Of Miracles Prophetic Ministries.</h1>
          <p>
            Find service times, one-on-one session information, prayer contact
            details, location guidance, and ways to connect with the ministry.
          </p>
        </div>
      </section>

      <section className="content-section contact-overview-section">
        <div className="contact-info-panel">
          <p className="eyebrow">Service Times</p>
          <h2>Join us for worship, prayer, and the Word.</h2>
          <p>
            Visitors are welcome to attend services and connect with the church
            team for prayer, guidance, and support.
          </p>

          <div className="service-time-list">
            <article className="service-time-card">
              <strong>Sunday Service</strong>
              <span>Every Sunday from 11:30 AM</span>
            </article>

            <article className="service-time-card">
              <strong>Wednesday Service</strong>
              <span>Midweek service after work hours. Exact time coming soon.</span>
            </article>

            <article className="service-time-card">
              <strong>One-on-One Sessions</strong>
              <span>
                Usually Saturdays and Sundays by appointment. The church team
                will contact you to confirm.
              </span>
            </article>
          </div>
        </div>

        <div className="contact-card-grid">
          <article className="contact-card">
            <span>01</span>
            <h3>Prayer Line</h3>
            <p>
              Call or message the church prayer line for prayer support and
              spiritual encouragement.
            </p>
            <a href="tel:+27000000000">Prayer line coming soon</a>
          </article>

          <article className="contact-card">
            <span>02</span>
            <h3>WhatsApp</h3>
            <p>
              Use WhatsApp for quick questions about service times, location,
              and one-on-one session requests.
            </p>
            <a href="https://wa.me/27000000000" target="_blank" rel="noreferrer">
              WhatsApp number coming soon
            </a>
          </article>

          <article className="contact-card">
            <span>03</span>
            <h3>Email</h3>
            <p>
              Send an email for general enquiries, partnership, outreach, or
              ministry-related questions.
            </p>
            <a href="mailto:info@example.com">Email coming soon</a>
          </article>
        </div>
      </section>

      <section className="content-section contact-form-map-section">
        <div>
          <div className="form-intro">
            <p className="eyebrow">Send a Message</p>
            <h2>Contact the church team.</h2>
            <p>
              Complete the form below and someone from the ministry team will
              contact you.
            </p>
          </div>

          <form
            className="church-form"
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            action="/success"
          >
            <input type="hidden" name="form-name" value="contact" />

            <p className="hidden-field">
              <label>
                Do not fill this out:
                <input name="bot-field" />
              </label>
            </p>

            <div className="form-grid">
              <label>
                Full Name
                <input
                  type="text"
                  name="fullName"
                  placeholder="Your full name"
                  required
                />
              </label>

              <label>
                Phone Number
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your phone number"
                  required
                />
              </label>

              <label>
                Email Address
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                />
              </label>

              <label>
                Enquiry Type
                <select name="enquiryType" required defaultValue="">
                  <option value="" disabled>
                    Select enquiry type
                  </option>
                  <option value="Prayer Request">Prayer Request</option>
                  <option value="One-on-One Session">One-on-One Session</option>
                  <option value="Service Information">Service Information</option>
                  <option value="Outreach / Charity">Outreach / Charity</option>
                  <option value="Partnership">Partnership</option>
                  <option value="General Enquiry">General Enquiry</option>
                </select>
              </label>
            </div>

            <label>
              Message
              <textarea
                name="message"
                rows="6"
                placeholder="Write your message here."
                required
              ></textarea>
            </label>

            <label className="checkbox-label">
              <input type="checkbox" name="contactConsent" required />
              <span>
                I consent to House Of Miracles Prophetic Ministries contacting
                me about my enquiry.
              </span>
            </label>

            <button className="btn btn-primary" type="submit">
              Send Message
            </button>
          </form>
        </div>

        <div className="map-panel">
          <p className="eyebrow">Location</p>
          <h2>Find the church location.</h2>
          <p>
            The exact church address and Google Maps embed will be added here
            once the final location details are confirmed.
          </p>

          <div className="media-placeholder map-placeholder">
            <span>Google Map Embed Coming Soon</span>
          </div>

          <a
            className="btn btn-secondary"
            href="https://www.google.com/maps"
            target="_blank"
            rel="noreferrer"
          >
            Open in Google Maps
          </a>
        </div>
      </section>

      <section className="content-section social-section">
        <div>
          <p className="eyebrow">Follow The Ministry</p>
          <h2>Stay connected online.</h2>
          <p>
            Follow the ministry for service updates, photos, videos, livestreams,
            and announcements.
          </p>
        </div>

        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            Facebook
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer">
            YouTube
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noreferrer">
            TikTok
          </a>
        </div>
      </section>

      <section className="content-section page-cta">
        <div>
          <p className="eyebrow">Need private prayer?</p>
          <h2>You can request a one-on-one prayer and guidance session.</h2>
          <p>
            Submit a booking request and the church team will contact you to
            confirm availability and session details.
          </p>
        </div>

        <div className="cta-actions">
          <Link className="btn btn-primary" to="/booking">
            Book One-on-One
          </Link>
          <Link className="btn btn-outline" to="/sermons">
            View Sermons
          </Link>
        </div>
      </section>
    </>
  );
}

export default Contact;