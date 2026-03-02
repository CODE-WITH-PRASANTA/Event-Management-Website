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
<<<<<<< HEAD
import RSVP from "./Pages/RSVP/RSVP";
=======
import News from "./Pages/News/News";
import NewsDetails from "./Pages/NewsDetails/NewsDetails";
<<<<<<< HEAD
import EventsDetail from "./Pages/EventsDetail/EventsDetail";
import OurTeam from "./Pages/OurTeam/OurTeam";
=======
import BookAppointement from "./Pages/BookAppointement/BookAppointement";
import Service from "./Pages/Service/Service";
>>>>>>> a7018e3960d31fe5c0f40a382f672d596423a490
>>>>>>> c6be23311aa91acb71118163260231acf3db07fa

function App() {
  return (
    <BrowserRouter>

      {/* ---------- Navbar ---------- */}
      <Navbar />

      {/* ---------- Routes ---------- */}
      <Routes>
        <Route path="/" element={<Home />} />
<<<<<<< HEAD
        <Route path="/rsvp" element={<RSVP />} />
        {/* About Us Page */}
=======
>>>>>>> c6be23311aa91acb71118163260231acf3db07fa
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
<<<<<<< HEAD
        <Route path="/our-team" element={<OurTeam />} />
=======
        <Route path="/our-team" element={<OurTeam/>}/>

         {/* Contact page */}
        <Route path="/contact" element={<Contact/>}/>

         {/* News page */}
        <Route path="/news" element={<News/>} />

         {/* News Details page */}
        <Route path="/news-details" element={<NewsDetails/>} />

         {/* Book Appointement */}
        <Route path="/appointment" element={<BookAppointement/>}/>

         {/* Service */}
        <Route path="/services" element={<Service/>}/>

        

        {/* Default Route */}
>>>>>>> a7018e3960d31fe5c0f40a382f672d596423a490
      </Routes>

      {/* ---------- Common Sections ---------- */}
      <GetInTouch />
      <Footer />

    </BrowserRouter>
  );
}

export default App;