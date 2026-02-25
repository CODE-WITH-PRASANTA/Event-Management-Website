import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Gallery from "./Pages/Galary/Galary";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Pages/About/About";


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        {/* About Us Page */}
        <Route path="/about" element={<About />} />
    

        {/* Gallery Page */}
        <Route path="/gallery" element={<Gallery />} />

        {/* Default Route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;