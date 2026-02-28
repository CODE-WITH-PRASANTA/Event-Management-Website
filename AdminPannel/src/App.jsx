import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from './Layout/AppLayout/AppLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Layout wrapper */}
        <Route path="/" element={<AppLayout />}>

          

        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App;