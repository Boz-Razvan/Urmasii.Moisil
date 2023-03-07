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
        <h1>Text</h1>
        <div className="divider2" />
        <h2>Lorem ipsum dolor sit amet.</h2>

        <h1>Alt Text</h1>
        <div className="divider2" />
        <h2>Lorem ipsum dolor sit amet.</h2>
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
