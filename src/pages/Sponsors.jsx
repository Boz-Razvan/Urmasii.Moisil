import React from "react";
import "./styles/Sponsors.css";
import Footer from "../components/Footer";
const Sponsors = () => {
  return (
    <>
      <div className="bg2">
        <div className="banner">
          <img className="Logo-ATL" src={require("./assets/ATLaurian.webp")} />
          <p className="npm">
            Concursul Național de Informatică Urmașii lui Moisil
          </p>
          <img className="Logo-sepi" src={require("./assets/sepi.webp")} />
        </div>
        <h1 className="title-participanti">Sponsori</h1>
      </div>
      <div className="divider1"></div>
      <div className="sponsors-container">
        <div className="sponsors-item " data-text="SEPI">
          <img
            src={require("./assets/Sepi_logo_XBJVm5fIV6.webp")}
            alt="sponsor"
          />
        </div>
        <div
          style={{ fontSize: "10px" }}
          className="sponsors-item"
          data-text="ASOCIAȚIA DE TINERET 2010 EUROPA"
        >
          <img
            src={require("./assets/logo-asociatia-europa 2010.jfif")}
            alt="sponsor"
          />
        </div>
        <div className="sponsors-item" data-text="Consiliul Judetean">
          <img
            src={require("./assets/logo Consiliul judetean.png")}
            alt="sponsor"
          />
        </div>
        <div className="sponsors-item" data-text="Liceul Regina Maria">
          <img
            src={require("./assets/liceu regina dorohoi.jfif")}
            alt="sponsor"
          />
        </div>
        <div
          className="sponsors-item"
          data-text="Colegiul National Mihai Eminescu"
        >
          <img
            style={{ paddingLeft: "5", paddingRight: "5%" }}
            src={require("./assets/CNME.jfif")}
            alt="sponsor"
          />
        </div>
        <div
          className="sponsors-item"
          data-text="Colegiul Tehnic Gheirghe Asachi Botosani"
        >
          <p className="sponsor">Colegiul Tehnic Ghiorghe Asachi Botosani</p>
        </div>
        <div className="sponsors-item" data-text="Liceul Pedagogic">
          <img
            style={{ height: "150px" }}
            src={require("./assets/peda.jpeg")}
            alt="sponsor"
          />
        </div>
        <div className="sponsors-item" data-text="Proteus Nord Consulting">
          <img
            style={{ height: "150px" }}
            src={require("./assets/logo proteus.jfif")}
            alt="sponsor"
          />
        </div>
        <div className="sponsors-item" data-text="Hotel Europa Botosani">
          <img
            src={require("./assets/logo-site europa hotel.png")}
            alt="sponsor"
          />
        </div>
        <div className="sponsors-item" data-text="Asociatia de Matematica ">
          <img
            src={require("./assets/logo_academia mate.jfif")}
            alt="sponsor"
          />
        </div>
        <div
          className="sponsors-item"
          data-text="SINDICATUL ÎNVĂȚĂMÂNTULUI PREUNIVERSITAR BOTOȘANI"
        >
          <img
            tyle={{ height: "250px" }}
            src={require("./assets/logo sindicat.png")}
            alt="sponsor"
          />
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </>
  );
};

export default Sponsors;
