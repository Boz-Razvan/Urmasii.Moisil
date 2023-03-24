import React from "react";
import "./styles/Comisii.css";
import { Footer } from "../components";

const data = [
  {
    NrCrt: "1",
    Numele: "Conf. Univ.dr. Adrian Iftene",
    Rolul: "Președinte de onoare",
    Instituția: "U.I.A.C. Iași, Facultatea de Informatică",
    Județul: "Iași",
    Mențiuni: "",
  },
  {
    NrCrt: "2",
    Numele: "Alina-Viorica Dumitrașcu",
    Rolul: "Președinte executiv",
    Instituția: "Ministerul Educației",
    Județul: "București",
    Mențiuni: "",
  },
  {
    NrCrt: "3",
    Numele: "Panaete Adrian",
    Rolul: "Vicepreședinte",
    Instituția: "Colegiul Național ”A.T. Laurian”",
    Județul: "Botoșani",
    Mențiuni: "",
  },
  {
    NrCrt: "4",
    Numele: "Cerchez Emanuela",
    Rolul: "Membru",
    Instituția: "Colegiul Național ”Emil Racoviță”",
    Județul: "Iași",
    Mențiuni: "",
  },
  {
    NrCrt: "5",
    Numele: "Șerban Paul-Marinel",
    Rolul: "Membru",
    Instituția: "Colegiul Național ”Emil Racoviță”",
    Județul: "Iași",
    Mențiuni: "",
  },
  {
    NrCrt: "6",
    Numele: "Pracsiu Narcis-Dan",
    Rolul: "Membru",
    Instituția: "Colegiul Național ”Emil Racoviță”",
    Județul: "Vaslui",
    Mențiuni: "Online",
  },
  {
    NrCrt: "7",
    Numele: "Costineanu Raluca-Veronica",
    Rolul: "Membru",
    Instituția: "Colegiul Național ”Ștefan cel Mare” ",
    Județul: "Suceava",
    Mențiuni: "Online",
  },
  {
    NrCrt: "8",
    Numele: "Frâncu Cristian",
    Rolul: "Membru",
    Instituția: "Centrul de pregătire ”Nerdvana”",
    Județul: "București",
    Mențiuni: "Online",
  },
  {
    NrCrt: "9",
    Numele: "Dăscălescu Ștefan-Cosmin",
    Rolul: "Membru",
    Instituția: "Universitatea din București",
    Județul: "București",
    Mențiuni: "",
  },
  {
    NrCrt: "10",
    Numele: "Rață Ovidiu",
    Rolul: "Membru",
    Instituția: "Universitatea ”Al. I. Cuza”",
    Județul: "Iași",
    Mențiuni: "",
  },
  {
    NrCrt: "11",
    Numele: "Neagu Alexandru",
    Rolul: "Membru",
    Instituția: "Universitatea ”Al. I. Cuza”",
    Județul: "Iași",
    Mențiuni: "Online",
  },
  {
    NrCrt: "12",
    Numele: "Arhire Andrei",
    Rolul: "Membru",
    Instituția: "Universitatea ”Al. I. Cuza”",
    Județul: "Iași",
    Mențiuni: "",
  },
  {
    NrCrt: "13",
    Numele: "Opriță Petru Simion",
    Rolul: "Membru",
    Instituția: "Liceul Regina Maria Dorohoi",
    Județul: "Botoșani",
    Mențiuni: "",
  },
];

const data2 = [
  {
    NrCrt: "15",
    Numele: "Andrioae Viorel",
    Rolul: "Membru - comisia tehnică",
    Instituția: "Liceul Regina Maria Dorohoi",
    Județul: "Botoșani",
    Mențiuni: "",
  },
  {
    NrCrt: "16",
    Numele: "Bolohan Mihai",
    Rolul: "Membru - comisia tehnică",
    Instituția: "Liceul Regina Maria Dorohoi",
    Județul: "Botoșani",
    Mențiuni: "",
  },
  {
    NrCrt: "18",
    Numele: "Amarie Bogdan",
    Rolul: "Membru - comisia tehnică",
    Instituția: "Liceul Regina Maria Dorohoi",
    Județul: "Botoșani",
    Mențiuni: "",
  },
  {
    NrCrt: "19",
    Numele: "Birta Andrei",
    Rolul: "Membru - comisia tehnică",
    Instituția: "Școala Mihail Kogălniceanu Dorohoi",
    Județul: "Botoșani",
    Mențiuni: "",
  },
  {
    NrCrt: "20",
    Numele: "Ștefănucă Alin Claudiu",
    Rolul: "Membru - comisia tehnică",
    Instituția: "Liceul Dimitrie Cantemir Darabani",
    Județul: "Botoșani",
    Mențiuni: "",
  },
];

const columns = Object.keys(data[0]);

function Comisii() {
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
        <h1 className="title-participanti">Comisii</h1>
        </div>
      <div className="divider1"></div>
      <h2 className="PinA">
      Comisia Științifică
      </h2>
      <table className="Comisii">
        <thead>
           <tr>
            {columns.map((column) => (
              <th  key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr className="Label" key={index}>
              {columns.map((column) => (
                <td key={column}>{row[column]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <h2 className="PinA">
      Comisia tehnică
      </h2>
      <table className="Comisii1">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data2.map((row, index) => (
            <tr className="Label" key={index}>
              {columns.map((column) => (
                <td key={column}>{row[column]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <Footer />
    </>
  );
}

export default Comisii;
