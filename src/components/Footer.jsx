import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-grid">

        <div className="footer-brand">
          <Link to="/" className="logo footer-logo">
            <span>✦</span>
            LuxeStay
          </Link>

          <p>
            Beautiful stays and authentic local experiences,
            all in one place.
          </p>
        </div>

        <div>
          <h4>Explore</h4>

          <Link to="/">Home</Link>
          <Link to="/hotels">Hotels</Link>
          <Link to="/guides">Guides</Link>
          <Link to="/register">Register</Link>
        </div>

        <div>
          <h4>Contact</h4>

          <span>hello@luxestay.com</span>
          <span>+998 90 000 00 00</span>
          <span>Samarkand, Uzbekistan</span>
        </div>

        <div>
          <h4>Follow Us</h4>

          <div className="social-icons">
            <span>◎</span>
            <span>◉</span>
            <span>◌</span>
            <span>◍</span>
          </div>
        </div>

      </div>

      <div className="copyright">
        © 2026 LuxeStay. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;