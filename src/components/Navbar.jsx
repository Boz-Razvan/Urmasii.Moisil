import { Outlet, Link, useLocation } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import "./styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    window.scrollTo(0, 0);

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [location]);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };
  

  return (
    <>
      <nav className="NavbarContainer">
        <div className="NavbarLinks">
          <Link className="NavbarLink" to="/" onClick={handleLinkClick}>
            Acasă
          </Link>
          <p style={{ marginTop: "5px" }}>|</p>

          <Link className="NavbarLink" to="/news" onClick={handleLinkClick}>
            Anunțuri
          </Link>
          <p style={{ marginTop: "5px" }}>|</p>

          <Link
            className="NavbarLink"
            to="/participanti"
            onClick={handleLinkClick}
          >
            Participanți
          </Link>
          <p style={{ marginTop: "5px" }}>|</p>

          <Link className="NavbarLink" to="/program" onClick={handleLinkClick}>
            Program
          </Link>
          <p style={{ marginTop: "5px" }}>|</p>

          <Link
            className="NavbarLink"
            to="/Regulament"
            onClick={handleLinkClick}
          >
            Regulament
          </Link>
          <p style={{ marginTop: "5px" }}>|</p>

          <Link className="NavbarLink" to="/subiecte" onClick={handleLinkClick}>
            Subiecte
          </Link>
          <p style={{ marginTop: "5px" }}>|</p>

          <Link className="NavbarLink" to="/*" onClick={handleLinkClick}>
            Rezultate
          </Link>
          <p style={{ marginTop: "5px" }}>|</p>

          <Link className="NavbarLink" to="/comisii" onClick={handleLinkClick}>
            Comisii
          </Link>
          <p style={{ marginTop: "5px" }}>|</p>

          <Link className="NavbarLink" to="/sponsori" onClick={handleLinkClick}>
            Sponsori
          </Link>
          <p style={{ marginTop: "5px" }}>|</p>

          <Link className="NavbarLink" to="/contact" onClick={handleLinkClick}>
            Contact
          </Link>
        </div>
        <button className="menu-button" onClick={toggleMenu}>
          &#9776;
        </button>
      </nav>
      <div onClick={handleLinkClick} className={`menu-list ${menuOpen ? "open" : ""}`} ref={menuRef}>
        <Link className="menu-link" to="/">
          <div className="menu-section" onClick={handleLinkClick}>
            Acasă
          </div>
        </Link>
        <Link className="menu-link" to="/news">
          <div className="menu-section" onClick={handleLinkClick}>
            Anunțuri
          </div>
        </Link>
        <Link className="menu-link" to="/participanti">
          <div className="menu-section" onClick={handleLinkClick}>
            Participanți
          </div>{" "}
        </Link>
        <Link className="menu-link" to="/program">
          <div className="menu-section" onClick={handleLinkClick}>
            Program
          </div>{" "}
        </Link>
        <Link className="menu-link" to="/Regulament">
          <div className="menu-section" onClick={handleLinkClick}>
            Regulament
          </div>{" "}
        </Link>
        <Link className="menu-link" to="/subiecte">
          {" "}
          <div className="menu-section" onClick={handleLinkClick}>
            Subiecte
          </div>
        </Link>
        <Link className="menu-link" to="/*">
          {" "}
          <div className="menu-section" onClick={handleLinkClick}>
            Rezultate
          </div>
        </Link>
        <Link className="menu-link" to="/comisii">
          {" "}
          <div className="menu-section" onClick={handleLinkClick}>
            Comisii
          </div>
        </Link>
        <Link className="menu-link" to="/sponsori">
          {" "}
          <div className="menu-section" onClick={handleLinkClick}>
            Sponsori
          </div>
        </Link>
        <Link className="menu-link" to="/contact">
          {" "}
          <div className="menu-section" onClick={handleLinkClick}>
            Contact
          </div>
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
