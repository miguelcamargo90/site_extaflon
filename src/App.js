import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Products from "./components/Products";
import ExperiencesPage from "./components/ExperiencesPage"; // Certifique-se de que este componente esteja criado
import headerBackground from "./images/background.jpg";
import FloatingLogo from "./components/FloatingLogo";


export default function App() {
  const appStyle = {
    backgroundImage: `url(${headerBackground})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
  };

  return (
    <Router>
      <main className="text-gray-400 bg-gray-900 body-font" style={appStyle}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={
            <React.Fragment>
              <About />
              <Projects />
              <Products />
              <Contact />
            </React.Fragment>
          } />
          <Route path="/experiences" element={<ExperiencesPage />} />
        </Routes>
        <FloatingLogo />
      </main>
    </Router>
  );
}
