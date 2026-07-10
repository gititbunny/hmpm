import { Link } from "react-router-dom";

function Booking() {
  return (
    <>
      <section className="page-hero booking-hero">
        <div>
          <p className="eyebrow">One-on-One Sessions</p>
          <h1>Request a private prayer and guidance session.</h1>
          <p>
            One-on-one sessions are available for individuals and families who
            would like private prayer, spiritual guidance, and support from the
            ministry team.
          </p>
        </div>
      </section>

      <section className="content-section booking-intro-grid">
        <div className="booking-info-card dark-card">
          <span>How It Works</span>
          <h2>Submit your request and our team will contact you.</h2>
          <p>
            After submitting the form, the church team will contact you to
            confirm availability, session details, and any required
            contribution/payment information.
          </p>
        </div>

        <div className="booking-details-list">
          <article>
            <strong>Available Days</strong>
            <p>
              Sessions usually take place on Saturdays and Sundays, depending on
              church availability and the number of appointments.
            </p>
          </article>

          <article>
            <strong>Saturday Sessions</strong>
            <p>
              Saturday sessions usually begin around 11:00 AM and may continue
              later depending on the number of people booked.
            </p>
          </article>

          <article>
            <strong>Sunday Sessions</strong>
            <p>
              Sunday sessions may be available before or after the main church
              service, depending on the schedule.
            </p>
          </article>

          <article>
            <strong>Confirmation</strong>
            <p>
              Your appointment is only confirmed after the church team contacts
              you directly.
            </p>
          </article>
        </div>
      </section>

      <section className="content-section guidance-section">
        <div>
          <p className="eyebrow">Before You Submit</p>
          <h2>Please share only a brief summary of your request.</h2>
        </div>

        <div className="guidance-card">
          <p>
            You do not need to explain your full situation on this form. Briefly
            tell us what you would like prayer or guidance for, such as marriage,
            family, work, health, spiritual matters, or personal challenges.
          </p>

          <p>
            The church team will speak with you directly when confirming your
            session. Please avoid sharing highly sensitive information unless it
            is necessary.
          </p>
        </div>
      </section>

      <section className="content-section form-section booking-form-section">
        <div className="form-intro">
          <p className="eyebrow">Booking Request</p>
          <h2>Complete the request form.</h2>
          <p>
            Fill in your details below. A member of the church team will contact
            you to confirm the appointment.
          </p>

          <div className="form-note">
            <strong>Important:</strong>
            <p>
              Submitting this form does not automatically confirm your
              appointment. The church team will contact you first.
            </p>
          </div>
        </div>

        <form
          className="church-form"
          name="one-on-one-booking"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          action="/success"
        >
          <input type="hidden" name="form-name" value="one-on-one-booking" />

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
              First-Time Visitor?
              <select name="firstTimeVisitor" required defaultValue="">
                <option value="" disabled>
                  Select an option
                </option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </label>

            <label>
              Preferred Day
              <select name="preferredDay" required defaultValue="">
                <option value="" disabled>
                  Select preferred day
                </option>
                <option value="Saturday">Saturday</option>
                <option value="Sunday before service">Sunday before service</option>
                <option value="Sunday after service">Sunday after service</option>
              </select>
            </label>

            <label>
              Preferred Time
              <select name="preferredTime" required defaultValue="">
                <option value="" disabled>
                  Select preferred time
                </option>
                <option value="Morning">Morning</option>
                <option value="Afternoon">Afternoon</option>
                <option value="After Sunday service">After Sunday service</option>
                <option value="Flexible">Flexible</option>
              </select>
            </label>
          </div>

          <label>
            What would you like prayer or guidance for?
            <textarea
              name="prayerRequest"
              rows="6"
              placeholder="Briefly mention the area you need prayer or guidance for. Example: family, marriage, work, health, spiritual matters, or personal challenges."
              required
            ></textarea>
          </label>

          <label>
            Additional Message
            <textarea
              name="additionalMessage"
              rows="4"
              placeholder="Optional: Add anything else the church team should know before contacting you."
            ></textarea>
          </label>

          <label className="checkbox-label">
            <input type="checkbox" name="contactConsent" required />
            <span>
              I consent to House Of Miracles Prophetic Ministries contacting me
              about my one-on-one session request.
            </span>
          </label>

          <label className="checkbox-label">
            <input type="checkbox" name="understanding" required />
            <span>
              I understand that my appointment is only confirmed after the church
              team contacts me directly and confirms the session details.
            </span>
          </label>

          <button className="btn btn-primary" type="submit">
            Submit Booking Request
          </button>
        </form>
      </section>

      <section className="content-section page-cta">
        <div>
          <p className="eyebrow">Need help instead?</p>
          <h2>You can also contact the church directly for prayer support.</h2>
          <p>
            Visit the contact page for the prayer line, location, service times,
            and social media links.
          </p>
        </div>

        <div className="cta-actions">
          <Link className="btn btn-primary" to="/contact">
            Contact Church
          </Link>
          <Link className="btn btn-outline" to="/sermons">
            View Sermons
          </Link>
        </div>
      </section>
    </>
  );
}

export default Booking;