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
import Event from "./Pages/Events/Events";
import Contact from "./Pages/Contact/Contact";
<<<<<<< HEAD
import News from "./Pages/News/News";
import NewsDetails from "./Pages/NewsDetails/NewsDetails";
=======
>>>>>>> 7b24bb8cc0d0836998edbea79f453f488e030b02

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
        <Route path="/event" element={<Event />}/>
        
        



         {/* Contact page */}
        <Route path="/contact" element={<Contact/>}/>
>>>>>>> 72f1c9ebf619ff65685af803de6af94b9784ffe5
        

        {/* Default Route */}
      </Routes>
      <GetInTouch/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;