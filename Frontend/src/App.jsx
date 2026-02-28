import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Galary from "./Pages/Galary/Galary";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Pages/About/About";
import Pricing from "./Pages/Pricing/Pricing";
import Footer from "./Components/Footer/Footer";
import GetInTouch from "./Components/GetInTouch/GetInTouch";
import Contact from "./Pages/Contact/Contact";
import OurTeam from "./Pages/OurTeam/OurTeam";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>

        <Route path="/" element={<Home />} />
        {/* About Us Page */}
        <Route path="/about" element={<About />} />
    

        {/* Gallery Page */}
        <Route path="/gallery" element={<Galary />} />
        <Route path="/prices" element={<Pricing />}/>

        {/* Our Team */}
        <Route path="/our-team" element={<OurTeam/>}/>

         {/* Contact page */}
        <Route path="/contact" element={<Contact/>}/>
        

        {/* Default Route */}
      </Routes>
      <GetInTouch/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;