import React from "react";
import "./styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p style={{ width: "30%" }}>A.T. Laurian</p>
        <img style={{ width: "15px", marginTop:'1px' }} src="faviconRaz.png"></img>
        <p style={{ width: "60%" }}>Powered by Boz Petru-Răzvan</p>
      </div>
    </footer>
  );
};

export default Footer;
