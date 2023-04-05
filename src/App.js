import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Pages/Home";
import Games from "./components/Pages/Games";
import Contact from "./components/Pages/Contact";
import Terms from "./components/Pages/Terms";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/games' element={<Games />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/Terms' element={<Terms />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
