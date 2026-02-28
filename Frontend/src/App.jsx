import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

/* ---------- Common Layout ---------- */
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import GetInTouch from "./Components/GetInTouch/GetInTouch";

/* ---------- Pages ---------- */
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Galary from "./Pages/Galary/Galary";
import Pricing from "./Pages/Pricing/Pricing";
import Event from "./Pages/Events/Events";
import Contact from "./Pages/Contact/Contact";
import News from "./Pages/News/News";
import NewsDetails from "./Pages/NewsDetails/NewsDetails";
import EventsDetail from "./Pages/EventsDetail/EventsDetail";
import OurTeam from "./Pages/OurTeam/OurTeam";

function App() {
  return (
    <BrowserRouter>

      {/* ---------- Navbar ---------- */}
      <Navbar />

      {/* ---------- Routes ---------- */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Galary />} />
        <Route path="/prices" element={<Pricing />} />
        <Route path="/event" element={<Event />} />
        <Route path="/event-details" element={<EventsDetail />} />
        <Route path="/contact" element={<Contact />} />

        {/* News */}
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<NewsDetails />} />

        {/* Our Team */}
        <Route path="/our-team" element={<OurTeam />} />
      </Routes>

      {/* ---------- Common Sections ---------- */}
      <GetInTouch />
      <Footer />

    </BrowserRouter>
  );
}

export default App;