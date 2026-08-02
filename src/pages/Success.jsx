import { Link, useSearchParams } from "react-router-dom";

function Success() {
  const [searchParams] = useSearchParams();

  const type = searchParams.get("type");
  const bookingReference = searchParams.get("ref");

  const isBookingSuccess = type === "booking" && bookingReference;

  return (
    <section className="success-page">
      <div className="success-card">
        <div className="success-icon">✓</div>

        <p className="eyebrow">
          {isBookingSuccess ? "Booking Submitted" : "Form Submitted"}
        </p>

        <h1>
          {isBookingSuccess
            ? "Your booking request was received."
            : "Thank you for reaching out."}
        </h1>

        {isBookingSuccess ? (
          <>
            <p>
              Thank you for your booking. The church team will review your request and
              contact you to confirm your one-on-one session.
            </p>

            <div className="success-reference-box">
              <span>Your Booking Reference</span>
              <strong>{bookingReference}</strong>
            </div>

            <p className="success-small-note">
              Please keep this reference number safe. You will need it on the day of your
              one-on-one session.
            </p>
          </>
        ) : (
          <p>
            Your request has been received. The church team will review your
            message and contact you using the details you provided.
          </p> 
        )}

        <div className="success-actions">
          <Link className="btn btn-primary" to="/">
            Back to Home
          </Link>

          <Link className="btn btn-outline" to="/contact">
            Contact Page
          </Link>
        </div>

        <div className="success-help-links">
          <Link to="/booking">Book One-on-One</Link>
          <Link to="/sermons">View Sermons</Link>
          <Link to="/ministries">Explore Ministries</Link>
        </div>
      </div>
    </section>
  );
}

export default Success;