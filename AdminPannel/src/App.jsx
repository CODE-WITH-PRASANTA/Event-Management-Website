import { Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./layout/AppLayout/AppLayout";


function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        

      </Route>
    </Routes>
  );
}

export default App;
