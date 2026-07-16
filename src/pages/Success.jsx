import { Link } from "react-router-dom";

function Success() {
  return (
    <section className="success-page">
      <div className="success-card">
        <div className="success-icon">✓</div>

        <p className="eyebrow">Form Submitted</p>

        <h1>Thank you for reaching out.</h1>

        <p>
          Your request has been received. The church team will review your
          message and contact you as soon as possible using the details you
          provided.
        </p>

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