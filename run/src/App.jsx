// import React from 'react'
// import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import Home from './Home'
// import Write from './Write'
// import Library from './Library'
// import Profile from './Profile'
// import Stats from './Stats'
// import Stories from './Stories'
// function App() {
//   return(
    
//   <div>
//   <BrowserRouter>
//   <Routes>
//     <Route path='/' element={<Home/>}/>
//     <Route path='/Write' element={<Write/>}/>
//     <Route path='/Library' element={<Library/>}/>
//     <Route path='/Profile' element={<Profile/>}/>
//     <Route path='/Stats' element={<Stats/>}/>
//     <Route path='/Stories' element={<Stories/>}/>
//   </Routes>
//   </BrowserRouter>
//   </div>
//   )
// }
// export default App

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Write from "./Write";
import Sidebar from "./Sidebar";
import "./App.css";
import Profile from "./Profile";
import Stories from "./Stories";
import Library from "./Library";
import Stats from "./Stats";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        {/* Sidebar always visible */}
        <Sidebar />

        {/* Main content area */}
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Write" element={<Write />} />
            <Route path="/Profile" element={<Profile/>} />
             <Route path="/Stories" element={<Stories/>} />
            <Route path="/Library" element={<Library/>} />
            <Route path="/Stats" element={<Stats/>} />
         
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
