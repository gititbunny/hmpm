import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="not-found-page">
      <div className="not-found-card">
        <span className="not-found-code">404</span>

        <h1>Page not found.</h1>

        <p>
          The page you are looking for may have been moved, renamed, or does not
          exist. You can return home or continue exploring the ministry website.
        </p>

        <div className="not-found-actions">
          <Link className="btn btn-primary" to="/">
            Back to Home
          </Link>

          <Link className="btn btn-outline" to="/contact">
            Contact Church
          </Link>

          <Link className="btn btn-outline" to="/sermons">
            View Sermons
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NotFound;