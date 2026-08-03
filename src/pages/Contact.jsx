import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      <section className="content-section contact-start">
        <div className="section-heading contact-heading">
          <p className="eyebrow">Contact</p>
          <h1>Service times, prayer line, and church contact details.</h1>
        </div>

        <div className="contact-card-grid">
          <article className="contact-info-card">
            <span>Sunday Service</span>
            <h2>11:30 AM</h2>
            <p>Join us every Sunday for worship, prayer, and the Word.</p>
          </article>

          <article className="contact-info-card">
            <span>One-on-One</span>
            <h2>Wed, Sat & Sun</h2>
            <p>Book online and keep your reference number for the day.</p>
          </article>

          <article className="contact-info-card">
            <span>Prayer Line</span>
            <h2>Coming Soon</h2>
            <p>Add the official church prayer line or WhatsApp number here.</p>
          </article>
        </div>
      </section>

      <section className="content-section contact-main-section">
        <div className="contact-form-intro">
          <p className="eyebrow">Send A Message</p>
          <h2>Contact the church team.</h2>
          <p>
            Use this form for general questions, prayer requests, visit details,
            or ministry information.
          </p>

          <div className="contact-direct-list">
            <div>
              <strong>Email</strong>
              <span>church email coming soon</span>
            </div>

            <div>
              <strong>Phone</strong>
              <span>church number coming soon</span>
            </div>

            <div>
              <strong>Social</strong>
              <span>Facebook / YouTube links coming soon</span>
            </div>
          </div>
        </div>

        <form
          className="church-form contact-form"
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
              <input type="email" name="email" placeholder="you@example.com" />
            </label>

            <label>
              Reason For Contact
              <select name="reason" required defaultValue="">
                <option value="" disabled>
                  Select a reason
                </option>
                <option value="Prayer request">Prayer request</option>
                <option value="Service information">Service information</option>
                <option value="One-on-one booking help">
                  One-on-one booking help
                </option>
                <option value="Ministry information">Ministry information</option>
                <option value="General question">General question</option>
              </select>
            </label>
          </div>

          <label>
            Message
            <textarea
              name="message"
              rows="5"
              placeholder="Write your message here."
              required
            ></textarea>
          </label>

          <label className="checkbox-label">
            <input type="checkbox" name="consent" required />
            <span>
              I consent to House Of Miracles Prophetic Ministries contacting me
              using the details provided.
            </span>
          </label>

          <button className="btn btn-primary" type="submit">
            Send Message
          </button>
        </form>
      </section>

      <section className="content-section contact-location-section">
        <div>
          <p className="eyebrow">Location</p>
          <h2>Church location details coming soon.</h2>
          <p>
            Add the official church address and Google Maps link here before
            launch.
          </p>
        </div>

        <div className="map-placeholder">
          <span>Google Map</span>
        </div>
      </section>

      <section className="content-section contact-final-cta">
        <div>
          <p className="eyebrow">Need One-on-One?</p>
          <h2>Book online and save your reference number.</h2>
        </div>

        <Link className="btn btn-primary" to="/booking">
          Book One-on-One
        </Link>
      </section>
    </>
  );
}

export default Contact;