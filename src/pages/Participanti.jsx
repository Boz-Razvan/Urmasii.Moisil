import { React, useState } from "react";
import "./styles/Participanti.css";
import Footer from '../components/Footer'

const Participanti = () => {
  return (
    <>
      <div className="header">
        <h1 className="title-participanti">Participanți  /  Înscriere</h1>
      </div>
      <div className="divider1" />
      <div className="body">
        <h2 className="content">
          Vă rugăm să confirmați participarea echipajelor din județul
          dumneavoastră completând formularul de înscriere:
        </h2>
        <div className="divider2"></div>
      </div>
      <iframe
        src="https://forms.gle/d2CgPHJ8fmQe69gJ6"
        height="700"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Loading…
      </iframe>
      <div className="body">
        <div className="divider2" style={{ marginTop: "30px" }}></div>
        <h2 className="content">
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

export default Participanti;
