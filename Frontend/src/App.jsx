import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AboutUsHome from "./Components/AboutUsHome/AboutUsHome";
import Galary from "./Pages/Galary/Galary";
import Navbar from "./Components/Navbar/Navbar";
import Pricing from "./Pages/Pricing/Pricing";
import Footer from "./Components/Footer/Footer";
import GetInTouch from "./Components/GetInTouch/GetInTouch";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        {/* About Us Page */}
        <Route path="/about-us/home" element={<AboutUsHome />} />

        {/* Gallery Page */}
        <Route path="/gallery" element={<Galary />} />
        <Route path="/prices" element={<Pricing />}/>
        

        {/* Default Route */}
      </Routes>
      <GetInTouch/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;