import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logos/hmpm-logo.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <Link className="navbar-logo" to="/" onClick={closeMenu}>
          <img
            src={logo}
            alt="House Of Miracles Prophetic Ministries logo"
            className="navbar-logo-img"
          />

          <span className="navbar-logo-fallback">
            House Of Miracles Prophetic Ministries
          </span>
        </Link>

        <button
          className={isOpen ? "menu-toggle active" : "menu-toggle"}
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={isOpen ? "nav-links open" : "nav-links"}>
          <NavLink to="/" onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>

          <NavLink to="/sermons" onClick={closeMenu}>
            Sermons
          </NavLink>

          <NavLink to="/media" onClick={closeMenu}>
            Media
          </NavLink>

          <NavLink to="/ministries" onClick={closeMenu}>
            Ministries
          </NavLink>

          <NavLink to="/outreach" onClick={closeMenu}>
            Outreach
          </NavLink>

          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>

          <NavLink className="nav-cta" to="/booking" onClick={closeMenu}>
            Book One-on-One
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;