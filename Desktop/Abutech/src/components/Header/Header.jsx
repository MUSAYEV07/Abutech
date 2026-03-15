import { useState } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { HiMenu, HiX } from "react-icons/hi";
import icon from './abutech-logo.svg'
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        {/* LOGO */}
        <div className="logo">
          <img src={icon} alt="" />
        </div>

        {/* Desktop menu */}
        <div className="right desktop">
          <div className="header-logo">
            <FiPhoneCall />
            <span className="phone">+998 90 123 45 67</span>
          </div>
          <select className="lang">
            <option>RU</option>
            <option>UZ</option>
            <option>EN</option>
          </select>
          <button className="contact type1">Contact</button>
        </div>

        {/* Hamburger menu icon */}
        <div
          className="hamburger mobile"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </div>
      </div>

      {/* Mobile overlay menu */}
      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <div className="mobile-content">
          <div className="header-logo">
            <FiPhoneCall />
            <span className="phone">+998 90 123 45 67</span>
          </div>
          <select className="lang">
            <option>RU</option>
            <option>UZ</option>
            <option>EN</option>
          </select>
          <button className="contact type1">Contact</button>
        </div>
      </div>
    </header>
  );
}

export default Header;