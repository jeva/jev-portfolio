import "../styles/navbar.css";
import navLinks from "../data/navLinks";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="brand-icon">&lt; JS /&gt;</span>
        <span className="brand-name"></span>
      </div>

      <ul className="nav-links">
        {navLinks.map((link) => (
          <li key={link.label}>
            <a href={link.href}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;