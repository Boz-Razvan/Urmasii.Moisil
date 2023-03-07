import React from "react";
import "./styles/Home.css";
import { Footer } from "../components";

const Home = () => {
  return (
    <div className="Page">
      <div className="bg1">
        <div className="banner">
          <img className="Logo-ATL" src={require("./assets/ATLaurian.webp")} />
          <p className="npm">
            Concursul Național de Informatică Urmașii lui Moisil
          </p>
          <img className="Logo-sepi" src={require("./assets/sepi.webp")} />
        </div>
        <div className="container">
          <img id="mainLogo" src={require("./assets/logov1.webp")} alt="Logo" />
          <div className="textMain">
            <h1 className="text1">Grigore C. Moisil</h1>
            <h2 className="text2">Părintele informaticii românești</h2>
          </div>
        </div>
      </div>
      <div className="divider1" />
      <div className="body">

      <h1>Perioada de desfășurare: 24 - 26 martie 2023</h1>
        <div className="divider2" />
        <h2>
         <span className="align">Concursul</span> Naţional de Informatică “Urmaşii lui Moisil” se desfăşoară
          în conformitate cu prevederile Metodologiei-cadru de organizare şi
          desfăşurare a competiţiilor şcolare, aprobată cu O.M. Nr.
          3035/10.01.2012.{" "}
        </h2>
        <h2>
        <span className="align">Competiția</span> a fost inițiată în anul 2001 de către Liceul Teoretic de
          Informatică „Grigore Moisil” din Iaşi, în onoarea patronului liceului,
          academicianul Grigore C. Moisil (1906 – 1973), fondator de şcoală de
          informatică în România, personalitate recunoscută pe plan mondial
          pentru fundamentarea informaticii ca ştiinţă.
        </h2>       
        <h2>
        <span className="align">În</span> acest an școlar Concursul Naţional de Informatică “Urmaşii lui
          Moisil” este organizat de Inspectoratul Școlar Județean Botoșani, la
          Colegiul Național "A. T. Laurian", Botoșani.
        </h2>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default Home;
