import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const allowedDayMap = {
  Wednesday: {
    code: "WED",
    dayIndex: 3,
  },
  Saturday: {
    code: "SAT",
    dayIndex: 6,
  },
  Sunday: {
    code: "SUN",
    dayIndex: 0,
  },
};

function Booking() {
  const [preferredDay, setPreferredDay] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [randomCode] = useState(() =>
    String(Math.floor(1000 + Math.random() * 9000))
  );

  const today = new Date().toISOString().split("T")[0];

  const bookingReference = useMemo(() => {
    if (!preferredDay || !preferredDate) {
      return "";
    }

    const dayCode = allowedDayMap[preferredDay]?.code;
    const cleanDate = preferredDate.split("-").join("");

    return `${dayCode}-${cleanDate}-${randomCode}`;
  }, [preferredDay, preferredDate, randomCode]);

  const dateMatchesSelectedDay = useMemo(() => {
    if (!preferredDay || !preferredDate) {
      return true;
    }

    const selectedDate = new Date(`${preferredDate}T12:00:00`);
    return selectedDate.getDay() === allowedDayMap[preferredDay]?.dayIndex;
  }, [preferredDay, preferredDate]);

  const successAction = bookingReference
    ? `/success?type=booking&ref=${encodeURIComponent(bookingReference)}`
    : "/success";

  return (
    <>
      <section className="booking-page-header">
        <div>
          <p className="eyebrow">One-on-One Booking</p>
          <h1>Book a private prophetic one-on-one session.</h1>
          <p>
            Choose your preferred day, leave your contact number, and keep your
            reference number for arrival.
          </p>
        </div>
      </section>

      <section className="content-section booking-simple-grid">
        <div className="booking-quick-info">
          <p className="eyebrow">How It Works</p>
          <h2>Simple, private, and straight to the point.</h2>

          <div className="booking-step-list">
            <article>
              <span>01</span>
              <p>Choose Wednesday, Saturday, or Sunday.</p>
            </article>

            <article>
              <span>02</span>
              <p>Submit your phone number and attendance details.</p>
            </article>

            <article>
              <span>03</span>
              <p>Save your booking reference number.</p>
            </article>
          </div>
        </div>

        <div className="booking-privacy-card">
          <strong>Privacy note</strong>
          <p>
            You do not need to explain your situation on this form. The form is
            only for booking and contact purposes.
          </p>
        </div>
      </section>

      <section className="content-section booking-form-section">
        <div className="booking-form-shell">
          <div className="form-intro">
            <p className="eyebrow">Booking Form</p>
            <h2>Secure your spot.</h2>
            <p>
              The church team will receive your booking by email. Your reference
              number helps the team identify your booking on the day.
            </p>
          </div>

          <form
            className="church-form booking-form"
            name="one-on-one-booking"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            action={successAction}
          >
            <input type="hidden" name="form-name" value="one-on-one-booking" />
            <input
              type="hidden"
              name="bookingReference"
              value={bookingReference}
            />

            <p className="hidden-field">
              <label>
                Do not fill this out:
                <input name="bot-field" />
              </label>
            </p>

            <div className="form-grid">
              <label>
                Preferred Day
                <select
                  name="preferredDay"
                  required
                  value={preferredDay}
                  onChange={(event) => setPreferredDay(event.target.value)}
                >
                  <option value="" disabled>
                    Select a day
                  </option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Saturday">Saturday</option>
                  <option value="Sunday">Sunday</option>
                </select>
              </label>

              <label>
                Preferred Date
                <input
                  type="date"
                  name="preferredDate"
                  min={today}
                  required
                  value={preferredDate}
                  onChange={(event) => setPreferredDate(event.target.value)}
                />
              </label>

              <label>
                Preferred Time
                <select name="preferredTime" required defaultValue="">
                  <option value="" disabled>
                    Select a time
                  </option>
                  <option value="Morning">Morning</option>
                  <option value="Afternoon">Afternoon</option>
                  <option value="Before Sunday service">
                    Before Sunday service
                  </option>
                  <option value="After Sunday service">
                    After Sunday service
                  </option>
                  <option value="Flexible">Flexible</option>
                </select>
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
                Initial & Surname
                <input
                  type="text"
                  name="initialAndSurname"
                  placeholder="Optional: N. Baloyi"
                />
              </label>

              <label>
                Email Address
                <input
                  type="email"
                  name="email"
                  placeholder="Optional: you@example.com"
                />
              </label>

              <label>
                Who is attending?
                <select name="attendingWith" required defaultValue="">
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="Just me">Just me</option>
                  <option value="Me and one person">Me and one person</option>
                  <option value="Me and family">Me and family</option>
                  <option value="Me and other people">
                    Me and other people
                  </option>
                </select>
              </label>

              <label>
                Number of people attending
                <input
                  type="number"
                  name="numberOfPeople"
                  min="1"
                  max="20"
                  placeholder="Example: 1"
                  required
                />
              </label>
            </div>

            {!dateMatchesSelectedDay && (
              <div className="booking-warning">
                The date you selected does not match the preferred day. Please
                choose a matching date.
              </div>
            )}

            <div className="booking-reference-box">
              <span>Your Booking Reference</span>
              <strong>{bookingReference || "Choose a day and date first"}</strong>
              <p>
                Format: day, date, and a private 4-digit code. Example:
                WED-20260730-1437.
              </p>
            </div>

            <label className="checkbox-label">
              <input type="checkbox" name="contactConsent" required />
              <span>
                I consent to House Of Miracles Prophetic Ministries contacting
                me about this booking.
              </span>
            </label>

            <label className="checkbox-label">
              <input type="checkbox" name="understanding" required />
              <span>
                I understand that I must keep my reference number and wait for
                the church team to confirm the session details.
              </span>
            </label>

            <button
              className="btn btn-primary"
              type="submit"
              disabled={!dateMatchesSelectedDay}
            >
              Submit Booking
            </button>
          </form>
        </div>
      </section>

      <section className="content-section booking-final-cta">
        <div>
          <p className="eyebrow">Need help?</p>
          <h2>Contact the church directly.</h2>
          <p>
            For prayer line details, service times, and directions, visit the
            contact page.
          </p>
        </div>

        <Link className="btn btn-outline" to="/contact">
          Contact Church
        </Link>
      </section>
    </>
  );
}

export default Booking;