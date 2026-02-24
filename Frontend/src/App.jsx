import { useState } from 'react'
import './App.css'
import AboutUsHome from './Components/AboutUsHome/AboutUsHome'

function App() {

  return (
  <>
  <Routes>
    <Route path="/AboutUs\Home"element={<AboutUsHome/>}/>
  </Routes>
  </>
  )
}

export default App
