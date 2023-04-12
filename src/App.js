import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Games from "./components/Pages/Games";
import Contact from "./components/Pages/Contact";
import Terms from "./components/Pages/Terms";
import TableAccessories from "./components/Pages/TableAccessories";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/games' element={<Games />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/terms' element={<Terms />} />
          <Route path='/table-accessories' element={<TableAccessories />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
