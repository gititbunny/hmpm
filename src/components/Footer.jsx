import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <h2>House Of Miracles Prophetic Ministries</h2>
          <p>
            A place of prayer, worship, spiritual guidance, and community
            transformation.
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <Link to="/about">About</Link>
          <Link to="/sermons">Sermons</Link>
          <Link to="/media">Media</Link>
          <Link to="/booking">One-on-One Booking</Link>
        </div>

        <div>
          <h3>Visit Us</h3>
          <p>Sunday Service: 11:30 AM</p>
          <p>One-on-One Sessions: Weekends by appointment</p>
          <p>Location details coming soon.</p>
        </div>

        <div>
          <h3>Contact</h3>
          <p>Prayer line coming soon.</p>
          <p>Email coming soon.</p>
          <p>Facebook / YouTube links coming soon.</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {currentYear} House Of Miracles Prophetic Ministries. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;