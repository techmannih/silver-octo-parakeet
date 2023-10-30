import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from "./Pages/Home/Home"
import About from './Pages/About/About'
import Academic from "./Pages/Academic/Academic"
import Beyond_Academic from "./Pages/Beyond_Academic/Beyond_Academic"
import Admission  from './Pages/Admission/Admission'
import Enquiry from "./Pages/Enquiry/Enquiry"
import Footer from "./Pages/Footer/Footer"
import Gallery from "./Pages/Gallery/Gallery"
import Header from "./Pages/Header/Header"
import Infrastructure from "./Pages/Infrastructure/Infrastructure"
import New_Events from "./Pages/New_Events/New_Events"
import Results from "./Pages/Results/Results"
import Srijan  from "./Pages/Srijan/Srijan"



function App() {

  return (
    <div>
   <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/academic" element={<Academic/>} />
        <Route exact path="/admission" element={<Admission/>} />
        <Route exact path="/bacademic" element={<Beyond_Academic/>} />
        <Route exact path="/enquiry" element={<Enquiry/>} />
        <Route exact path="/footer" element={<Footer/>} />
        <Route exact path="/gallery" element={<Gallery/>} />
        <Route exact path="/header" element={<Header/>} />
        <Route exact path="/infrastructure" element={<Infrastructure/>} />
        <Route exact path="/events" element={<New_Events/>} />
        <Route exact path="/result" element={<Results/>} />
        <Route exact path="/srijan" element={<Srijan/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
