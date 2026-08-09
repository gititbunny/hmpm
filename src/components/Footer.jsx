import { Link } from "react-router-dom";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14 8.5h2.2V5.2C15.8 5.1 14.8 5 13.6 5c-2.5 0-4.2 1.5-4.2 4.3V12H6.7v3.7h2.7V24h3.7v-8.3h3.1l.5-3.7h-3.6V9.7c0-.8.2-1.2.9-1.2Z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21.6 7.2s-.2-1.5-.8-2.1c-.8-.8-1.7-.8-2.1-.9C15.8 4 12 4 12 4h-.1s-3.8 0-6.7.2c-.4.1-1.3.1-2.1.9-.6.6-.8 2.1-.8 2.1S2 9 2 10.8v1.7c0 1.8.2 3.6.2 3.6s.2 1.5.8 2.1c.8.8 1.9.8 2.4.9 1.7.2 6.6.2 6.6.2s3.8 0 6.7-.2c.4-.1 1.3-.1 2.1-.9.6-.6.8-2.1.8-2.1s.2-1.8.2-3.6v-1.7c0-1.8-.2-3.6-.2-3.6ZM10 14.5v-6l5.2 3-5.2 3Z" />
    </svg>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <h2>House Of Miracles Prophetic Ministries</h2>
          <p>
            Prayer, worship, testimonies, sermons, announcements, and spiritual
            guidance.
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <Link to="/about">About</Link>
          <Link to="/sermons">Sermons</Link>
          <Link to="/testimonies">Testimonies</Link>
          <Link to="/announcements">Announcements</Link>
          <Link to="/booking">One-on-One Booking</Link>
        </div>

        <div>
          <h3>Visit Us</h3>
          <p>Sunday Service: 11:30 AM</p>
          <p>One-on-One Sessions: Wednesday, Saturday, and Sunday</p>
          <p>Location details available on the contact page.</p>
        </div>

        <div>
          <h3>Contact</h3>
          <p>houseofmiraclespm@gmail.com</p>
          <p>Prayer line coming soon.</p>

          <div className="footer-social-links">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="House Of Miracles Facebook page"
            >
              <FacebookIcon />
            </a>

            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="House Of Miracles YouTube channel"
            >
              <YouTubeIcon />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {currentYear} House Of Miracles Prophetic Ministries. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;