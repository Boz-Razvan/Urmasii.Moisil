import { HashRouter, Routes, Route } from "react-router-dom"
import { Navbar, Footer } from "./components"
import './App.css'
import React from "react"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import NoPage from "./pages/NoPage"
import News from "./pages/News"
import Participanti from "./pages/Participanti"
import Subiecte from "./pages/Subiecte"

function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route key="acasa" path="/" element={<Home />} />
          <Route key="anunturi" path="news" element={<News />} />
          <Route key="contact" path="contact" element={<Contact />} />
          <Route key="noPage" path="*" element={<NoPage />} />
          <Route key="subiecte" path="subiecte" element={<Subiecte />}></Route>
          <Route key="participanti" path="participanti" element={<Participanti />}></Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
