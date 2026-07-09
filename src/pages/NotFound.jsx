import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="page-shell">
      <h1>Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link className="btn btn-primary" to="/">
        Go Home
      </Link>
    </section>
  );
}

export default NotFound;