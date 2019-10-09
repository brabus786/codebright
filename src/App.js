import React from 'react';
import { BrowserRouter } from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Header/>
            <Body/>
            <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
