import { Outlet, Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <nav className="NavbarContainer">
        <div className="NavbarLinks">
          <Link className="NavbarLink" to="/">
            Acasă
          </Link>
          <Link className="NavbarLink" to="/news">
            Anunțuri
          </Link>
          <Link className="NavbarLink" to="/participanti">
            Participanți
          </Link>
          <Link className="NavbarLink" to="/*">
            Subiecte
          </Link>
          <Link className="NavbarLink" to="/*">
            Rezulate
          </Link>
          <Link className="NavbarLink" to="/*">
            Sponsori
          </Link>
          <Link className="NavbarLink" to="/contact">
            Contact
          </Link>
        </div>
        <button className="menu-button" onClick={toggleMenu}>
          &#9776;
        </button>
      </nav>
      <div className={`menu-list ${menuOpen ? "open" : ""}`}>
        <Link className="menu-link" to="/">
          <div className="menu-section">Acasă</div>
        </Link>
        <Link className="menu-link" to="/news">
          <div className="menu-section">Anunțuri</div>
        </Link>
        <Link className="menu-link" to="/participanti">
          <div className="menu-section">Participanți</div>{" "}
        </Link>
        <Link className="menu-link" to="/*">
          {" "}
          <div className="menu-section">Subiecte</div>
        </Link>
        <Link className="menu-link" to="/*">
          {" "}
          <div className="menu-section">Rezultate</div>
        </Link>
        <Link className="menu-link" to="/*">
          {" "}
          <div className="menu-section">Sponsori</div>
        </Link>
        <Link className="menu-link" to="/contact">
          {" "}
          <div className="menu-section">Contact</div>
        </Link>
        <br />
        <br />
        <br />
        <br />
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
