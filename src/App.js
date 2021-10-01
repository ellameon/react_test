import React from "react";
import './App.css';
import * as https from "https";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import Profile from "./components/Profile.jsx";



const App = () => {
    return (
        <div className= 'app-wrapper'>
            <Header />
            <Navbar />
            <Profile />
        </div>
    )
}


export default App;
