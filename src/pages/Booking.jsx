import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const saturdayBooking = {
  code: "SAT",
  dayIndex: 6,
};

function formatDateValue(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function formatDateLabel(date) {
  return new Intl.DateTimeFormat("en-ZA", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

function Booking() {
  const navigate = useNavigate();
  const [preferredDate, setPreferredDate] = useState("");
  const [randomCode] = useState(() =>
    String(Math.floor(1000 + Math.random() * 9000))
  );

  const availableDates = useMemo(() => {
    const dates = [];
    const currentDate = new Date();

    currentDate.setHours(12, 0, 0, 0);

    for (let index = 0; dates.length < 18 && index < 140; index += 1) {
      const possibleDate = new Date(currentDate);
      possibleDate.setDate(currentDate.getDate() + index);

      if (possibleDate.getDay() === saturdayBooking.dayIndex) {
        dates.push({
          value: formatDateValue(possibleDate),
          label: formatDateLabel(possibleDate),
        });
      }
    }

    return dates;
  }, []);

  const bookingReference = useMemo(() => {
    if (!preferredDate) {
      return "";
    }

    const cleanDate = preferredDate.split("-").join("");

    return `${saturdayBooking.code}-${cleanDate}-${randomCode}`;
  }, [preferredDate, randomCode]);

  const successAction = bookingReference
    ? `/success?type=booking&ref=${encodeURIComponent(bookingReference)}`
    : "/success";

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      navigate(successAction);
    } catch (error) {
      alert("Sorry, something went wrong. Please try again.");
    }
  };

  return (
    <>
      <section className="booking-intro">
        <p className="eyebrow">One-on-One Booking</p>
        <h1>Book your private one-on-one session.</h1>
        <p>
          One-on-one sessions are available on Saturdays by appointment. Choose
          your preferred Saturday, submit your contact details, and save your
          booking reference number.
        </p>

        <div className="booking-how-it-works">
          <article>
            <span>01</span>
            <p>Choose your preferred Saturday.</p>
          </article>

          <article>
            <span>02</span>
            <p>No personal story is needed on the form.</p>
          </article>

          <article>
            <span>03</span>
            <p>Use your reference number on arrival.</p>
          </article>
        </div>
      </section>

      <section className="content-section booking-form-section">
        <div className="booking-form-shell">
          <div className="form-intro">
            <p className="eyebrow">Booking Form</p>
            <h2>Secure your spot.</h2>
            <p>
              The church team will receive your booking by email and contact you
              to confirm your one-on-one session.
            </p>
          </div>

          <form
            className="church-form booking-form"
            name="one-on-one-booking"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            action={successAction}
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="one-on-one-booking" />
            <input type="hidden" name="preferredDay" value="Saturday" />
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
                Preferred Saturday Date
                <select
                  name="preferredDate"
                  required
                  value={preferredDate}
                  onChange={(event) => setPreferredDate(event.target.value)}
                >
                  <option value="" disabled>
                    Select a Saturday
                  </option>

                  {availableDates.map((date) => (
                    <option key={date.value} value={date.value}>
                      {date.label}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                Preferred Time
                <select name="preferredTime" required defaultValue="">
                  <option value="" disabled>
                    Select a time
                  </option>
                  <option value="Morning">Morning</option>
                  <option value="Afternoon">Afternoon</option>
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
                  placeholder="Example: N. Baloyi"
                  required
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
                Is this your first time attending?
                <select name="firstTimeOneOnOne" required defaultValue="">
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </label>
            </div>

            <div className="booking-reference-box">
              <span>Your Booking Reference</span>
              <strong>
                {bookingReference || "Reference Number"}
              </strong>
              <p>
                Please keep this reference number safe. You will need it when
                you arrive for your one-on-one session.
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
              disabled={!bookingReference}
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