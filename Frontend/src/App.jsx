import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Gallery from "./Pages/Galary/Galary";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        {/* Gallery Route */}
        <Route path="/gallery" element={<Gallery />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;