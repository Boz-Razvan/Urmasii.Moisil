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
          <img
            className="mainLogo"
            src={require("./assets/logov1.webp")}
            alt="Logo"
          />
          <div className="textMain">
            <h1 className="text1">Grigore C. Moisil</h1>
            <h2 className="text2">Părintele informaticii românești</h2>
          </div>
        </div>
      </div>
      <div className="divider1" />
      <div className="body">
        <h2 className="content">
          În perioada 24 - 26 martie 2023 se va desfășura, la Colegiul Național
          ”A. T. Laurian” din Botoșani, Concursul Național de Informatică
          „Urmașii lui Moisil”.
        </h2>
        <div className="divider2" />
        <h2 className="content">
          Concursul Național de Informatică „Urmașii lui Moisil” este înscris
          în Calendarul concursurilor naționale școlare finanțate de către
          Ministerul Educației, la poziția 38, în anexa nr. 4 la OME nr.
          3027/12.01.2023.
        </h2>
        <div className="divider2" />
        <h2 className="content">
          Competiția a fost inițiată în anul 2001 de către Liceul Teoretic de
          Informatică „Grigore Moisil” din Iaşi, în onoarea patronului liceului,
          academicianul Grigore C. Moisil (1906 - 1973), fondator de şcoală de
          informatică în România, personalitate recunoscută pe plan mondial
          pentru fundamentarea informaticii ca ştiinţă.
        </h2>
        <div className="divider2" />
        <h2 className="content">
          La acest concurs participă echipe de elevi din clasele IX-XII, din
          toate judeţele ţării, din municipiul Bucureşti şi din Republica
          Moldova.
          <p>Nivelurile de concurs sunt următoarele:</p>
          <ul>
            <li>clasa a IX-a</li>
            <li>clasa a X-a</li>
            <li>clasele XI-XII</li>
          </ul>
        </h2>
        <div className="divider2" />
        <h2 className="content">
          Concursul de Informatică “Urmaşii lui Moisil” se desfăşoară într-o
          singură zi (25 martie 2023) şi constă într-o probă practică. Durata de
          desfășurare a probei practice este de trei ore și constă în rezolvarea
          a două probleme de natură algoritmică, cu ajutorul calculatorului.
        </h2>
        <div className="divider2" />
        <h2 className="content">
          În agenda competiției este inclusă o Sesiune Naţională de Comunicări
          Ştiinţifice cu tema:”INFO-CALITATE - asigurarea calităţii în
          învăţământul de informatică”, care se desfăşoară în paralel cu
          concursul “Urmaşii lui Moisil”. Materialele științifice vor fi trimise
          pe adresa rasandului@gmail.com , până la data de 24 martie 2023.
        </h2>
        <div className="divider2" />  
        <h2 className="content">
          Atât elevii, cât și profesorii însoțitori vor fi cazați la Hotel
          Europa, Str. Poștei nr. 6, Botoșani, sosirea acestora fiind în data de
          24 martie 2023, după ora 12.00.
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
