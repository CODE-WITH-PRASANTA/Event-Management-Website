import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AppLayout from "./Layout/AppLayout/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path ="/"         
        element={<AppLayout />}>
          
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;