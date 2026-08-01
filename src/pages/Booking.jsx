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
  const [preferredDay, setPreferredDay] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [randomCode] = useState(() =>
    String(Math.floor(1000 + Math.random() * 9000))
  );

  const availableDates = useMemo(() => {
    if (!preferredDay) {
      return [];
    }

    const selectedDay = allowedDayMap[preferredDay];
    const dates = [];
    const currentDate = new Date();

    currentDate.setHours(12, 0, 0, 0);

    for (let index = 0; dates.length < 18 && index < 140; index += 1) {
      const possibleDate = new Date(currentDate);
      possibleDate.setDate(currentDate.getDate() + index);

      if (possibleDate.getDay() === selectedDay.dayIndex) {
        dates.push({
          value: formatDateValue(possibleDate),
          label: formatDateLabel(possibleDate),
        });
      }
    }

    return dates;
  }, [preferredDay]);

  const bookingReference = useMemo(() => {
    if (!preferredDay || !preferredDate) {
      return "";
    }

    const dayCode = allowedDayMap[preferredDay]?.code;
    const cleanDate = preferredDate.split("-").join("");

    return `${dayCode}-${cleanDate}-${randomCode}`;
  }, [preferredDay, preferredDate, randomCode]);

  const successAction = bookingReference
    ? `/success?type=booking&ref=${encodeURIComponent(bookingReference)}`
    : "/success";

  const handlePreferredDayChange = (event) => {
    setPreferredDay(event.target.value);
    setPreferredDate("");
  };

  return (
    <>
      <section className="booking-intro">
        <p className="eyebrow">One-on-One Booking</p>
        <h1>Book your private one-on-one session.</h1>
        <p>
          Choose an available day, submit your contact details, and save your
          booking reference number.
        </p>

        <div className="booking-how-it-works">
          <article>
            <span>01</span>
            <p>Choose Wednesday, Saturday, or Sunday.</p>
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
                  onChange={handlePreferredDayChange}
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
                Available Date
                <select
                  name="preferredDate"
                  required
                  value={preferredDate}
                  onChange={(event) => setPreferredDate(event.target.value)}
                  disabled={!preferredDay}
                >
                  <option value="" disabled>
                    {preferredDay
                      ? `Select an available ${preferredDay}`
                      : "Choose a day first"}
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