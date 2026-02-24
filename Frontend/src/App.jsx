import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Gallery from "./Pages/Galary/Galary";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Gallery Route */}
        <Route path="/gallery" element={<Gallery />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;