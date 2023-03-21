import { React, useState } from "react";
import "./styles/Inscriere.css";
import Footer from "../components/Footer";

const Participanti = () => {
  const [width, setWidth] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });

  return (
    <>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
      <Footer />
    </>
  );
};

export default Participanti;
