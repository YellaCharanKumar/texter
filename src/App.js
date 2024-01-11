import './App.css';
import Great from "./great.1";
import React, { useState } from 'react';
import Alert from './alert';
import Navbar from './navbar';
import About from './about';
// import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
export default function App() {
  const [darker, setDarker] = useState("light");
  const [text, setText] = useState(null);
  
  const ondark = () => {
    if (darker === "dark") {
      setDarker("light");
      setText("light mode enabled");
      setTimeout(() => {
        setText(null);
      }, 1000);
      document.body.style.backgroundColor = "grey";
    }
    else {
      setDarker("dark");
      setText("dark mode enabled")
      document.body.style.backgroundColor = "#253e5f";
      setTimeout(() => {
        setText(null);
      }, 1000);
    }
  }




  return (
  <>
    <Router>
      
        <Navbar mode={darker} ondark={ondark} />
        
          <Alert message={text} />
      <div className='container'>
        <Routes>
          <Route exact path="/about" element={<About mode={darker} />}>
          </Route>
          <Route exact path="/" element={<Great mode={darker} />}>
          </Route>
        </Routes>
      </div>
    </Router>
    {/* <div>
    <Navbar mode={darker} ondark={ondark} />
    </div>
       
        
        <Alert message={text} />
        <About mode={darker}/>
        <Great mode={darker}/> */}
    </>
  );
}


