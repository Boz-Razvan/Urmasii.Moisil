import React from "react";
import "./styles/Program.css";
import Footer from "../components/Footer";

const Program = () => {
  return (
    <>
      <div className="banner3">
        <img className="Logo-ATL" src={require("./assets/ATLaurian.webp")} />
        <p className="npm">
          Concursul Național de Informatică Urmașii lui Moisil
        </p>
        <img className="Logo-sepi" src={require("./assets/sepi.webp")} />
      </div>
      <div className="header">
        <div className="header-program">
          <h1 className="title-program">
            PROGRAMUL CONCURSULUI NAȚIONAL DE INFORMATICĂ
          </h1>
          <h2 className="subtitle-program">”URMAȘII LUI MOISIL”</h2>
          <h2 className="subtitle-program">Botoșani, 24 - 26 martie 2023</h2>
        </div>
      </div>
      <div className="divider1" />
      <div className="body">
        <h2 style={{marginBottom:'0px'}} className="content">Vineri, 24 martie 2023</h2>
        <div className="divider2" />
        <ul style={{ marginBottom: "20px" }}>
          <li style={{ marginBottom: "20px" }}>
            14:00 - 18:30 - Sosirea participanților (cazare - Hotel Europa Str.
            Poștei nr. 6, Botoșani)
          </li>
          <li style={{ marginBottom: "20px" }}>
            14:00 - 18:00 - Ședința tehnică a comisiei de concurs - Colegiul
            Național “A.T. Laurian” Botoșani
          </li>
          <li style={{ marginBottom: "20px" }}>
            19:00 - 20:00 - Deschiderea oficială a concursului - Aula Magna,
            Colegiul Național ”A.T. Laurian” Botoșani
          </li>
          <li style={{ marginBottom: "20px" }}>20:00 - 21:00 - Cina</li>
        </ul>
        <h2 style={{marginBottom:'0px'}} className="content">Sâmbătă, 25 martie 2023</h2>
        <div style={{marginTop:'0px'}} className="divider2" />
        <ul style={{ marginBottom: "20px" }}>
          <li style={{ marginBottom: "20px" }}>7:30 - 8:30 - Micul dejun</li>
          <li style={{ marginBottom: "20px" }}>
            8:30 - 12:00 - Concurs de programare - laboratoarele de informatică,
            Colegiul Național “A.T. Laurian” Botoșani
          </li>
          <li style={{ marginBottom: "20px" }}>
            8:30 - 12:00 - Sesiunea Naţională de Comunicări Ştiinţifice cu tema
            "INFO-CALITATE - asigurarea calităţii în învăţământul de
            informatică" - Aula Magna, Colegiul Național ”A.T. Laurian” Botoșani
          </li>
          <li style={{ marginBottom: "20px" }}>12:30 - 13:30 - Dejun</li>
          <li style={{ marginBottom: "20px" }}>
            14:30 - 17:00 - Program de vizitare a orașului
          </li>
          <li style={{ marginBottom: "20px" }}>
            14:00 - 16:00 - Evaluarea lucrărilor și afișarea rezultatelor pe
            site-ul concursului
          </li>
          <li style={{ marginBottom: "20px" }}>
            17:00 - 17:30 - Depunerea contestațiilor online
          </li>
          <li style={{ marginBottom: "20px" }}>
            17:30 - 18:00 - Rezolvarea contestațiilor
          </li>
          <li style={{ marginBottom: "20px" }}>
            19:00 - 20:00 - Festivitatea de premiere - Aula Magna, Colegiul
            Național ”A.T. Laurian” Botoșani
          </li>
          <li style={{ marginBottom: "20px" }}>20:00 - 21:00 - Cina</li>
        </ul>
        <h2 style={{marginBottom:'0px'}} className="content">Duminică, 26 martie 2023</h2>
        <div className="divider2" />
        <ul style={{ marginBottom: "20px" }}>
          <li style={{ marginBottom: "20px" }}>7:30 - 8:30 - Micul dejun</li>
          <li style={{ marginBottom: "20px" }}>
            9:00 - 12:00 - Activități de networking și încheierea concursului -
            Aula Magna, Colegiul Național ”A.T. Laurian” Botoșani
          </li>
          <li style={{ marginBottom: "20px" }}>12:30 - 13:30 - Dejun</li>
          <li style={{ marginBottom: "20px" }}>
            14:00 - 18:00 - Plecarea participanților
          </li>
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Program;
