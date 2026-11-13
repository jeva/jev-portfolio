import { useState } from "react";
import "../styles/navbar.css";
import navLinks from "../data/navLinks";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

 return (
    <nav className="navbar">
      <a href="#home" className="navbar-brand">
        <span className="brand-icon">&lt;JS /&gt;</span>
      </a>

      <button
        className="menu-toggle"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;