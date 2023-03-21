import { React, useState } from "react";
import "./styles/Inscriere.css";
import Footer from "../components/Footer";

const Inscriere = () => {
  const [width, setWidth] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });

  return (
    <>
      <div className="header">
      <div className="banner3">
          <img className="Logo-ATL" src={require("./assets/ATLaurian.webp")} />
          <p className="npm">
            Concursul Național de Informatică Urmașii lui Moisil
          </p>
          <img className="Logo-sepi" src={require("./assets/sepi.webp")} />
        </div>
        <h1 className="title-participanti">Anunțuri</h1>
      </div>
      <div className="divider1"></div>
      <div className="body">
        <h2 className="content">
          Vă rugăm să confirmați participarea echipajelor din județul
          dumneavoastră completând formularul de înscriere:
        </h2>
      </div>
      {width > 450 ? (
        <iframe
          title="Google Form"
          src="https://forms.gle/d2CgPHJ8fmQe69gJ6"
          width="320"
          height="600"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading...
        </iframe>
      ) : (
          <a
            className="button1"
            href="https://forms.gle/d2CgPHJ8fmQe69gJ6"
            target="_blank"
            rel="noopener noreferrer"
          >
            Formular Înscriere
          </a>
      )}
      <div className="body">
        <h2 style={{marginTop:'25px'}} className="content">
          Inspectorii școlari cu atribuții de coordonare pentru disciplina
          informatică din fiecare inspectorat școlar județean/Inspectoratul
          Școlar al Municipiului București sunt rugați să trimită, în vederea
          validării participanților, formularele de înscriere care cuprind
          datele elevilor și profesorului însoțitor, avizat de inspectorul
          școlar general, prin email la adresa daniela.nour@isjbt.ro sau
          adrian.panaete@gmail.com.
        </h2>
        <h2 className="content">
          Formularul editabil se poate descărca de aici:
        </h2>
        <a className="button" href="/Formular-Inscriere.docx" download>
          Formular Înscriere Word
        </a>
      </div>
      <Footer />
    </>
  );
};

export default Inscriere;
