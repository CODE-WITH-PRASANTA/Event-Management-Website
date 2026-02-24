import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AboutUsHome from "./Components/AboutUsHome/AboutUsHome";
import Gallery from "./Pages/Galary/Galary";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* About Us Page */}
        <Route path="/about" element={<AboutUsHome />} />
    

        {/* Gallery Page */}
        <Route path="/gallery" element={<Gallery />} />

        {/* Default Route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;