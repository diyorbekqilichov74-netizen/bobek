import { Link, NavLink } from "react-router-dom";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <header className="navbar">

      <Link to="/" className="logo">
        <span>✦</span>
        LuxeStay
      </Link>

      <nav className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/hotels">Hotels</NavLink>
        <NavLink to="/guides">Guides</NavLink>
      </nav>

      <div className="nav-actions">

        <button
          className="theme-button"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀" : "◐"}
        </button>

        <select className="language">
          <option>EN</option>
          <option>UZ</option>
          <option>RU</option>
        </select>

        <Link to="/login" className="login-link">
          Login
        </Link>

        <Link to="/register" className="gold-button">
          Register
        </Link>

      </div>

      <button
        className="mobile-menu"
        onClick={() => {
          document.body.classList.toggle("menu-open");
        }}
      >
        ☰
      </button>

    </header>
  );
}

export default Navbar;