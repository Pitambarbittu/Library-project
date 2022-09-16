import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./Pages/Home";
// import DarkExample from "./Components/Table";
import NavScrollExample from "./Components/Navbar";


function App() {
  return (
   <BrowserRouter>
   <NavScrollExample/>
   
   {/* <Home/> */}
    <Routes>
     <Route path="/" element={<Home/>}/>
    </Routes>
    
    
   </BrowserRouter>
  );
}

export default App;
