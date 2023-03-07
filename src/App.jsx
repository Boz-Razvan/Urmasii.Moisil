import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navbar, Footer } from "./components"
import './App.css'
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import NoPage from "./pages/NoPage"
import News from "./pages/News"
import Participanti from "./pages/Participanti"

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route key="home" path="/" element={<Home />} />
          <Route key="blogs" path="news" element={<News />} />
          <Route key="contact" path="contact" element={<Contact />} />
          <Route key="noPage" path="*" element={<NoPage />} />
          <Route key="participanti" path="participanti" element={<Participanti />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;