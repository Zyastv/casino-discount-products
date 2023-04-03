import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Pages/Home";
import Games from "./components/Pages/Games";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/games' element={<Games />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
