import { HashRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import "./App.css";
import React from "react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import News from "./pages/News";
import Subiecte from "./pages/Subiecte";
import PDFViewer from "./pages/PDFViewer";
import Participanti from "./pages/Participanti";
import Program from "./pages/Program";
import Sponsors from "./pages/Sponsors";
import Comisii from "./pages/Comisii";



function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes key={window.location.pathname}>
          <Route key="acasa" path="/" element={<Home />} />
          <Route key="anunturi" path="/news" element={<News />} />
          <Route key="contact" path="/contact" element={<Contact />} />
          <Route key="regulament" path="/regulament" element={<PDFViewer />} />
          <Route key="noPage" path="*" element={<NoPage />} />
          <Route key="subiecte" path="/subiecte" element={<Subiecte />}></Route>
          <Route key="program" path="/program" element={<Program />}></Route>
          <Route key="participanti" path="/participanti" element={<Participanti />}></Route>
          <Route key="sponsori" path="/sponsori" element={<Sponsors />}></Route>
          <Route key="comisii" path="/comisii" element={<Comisii />}></Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
