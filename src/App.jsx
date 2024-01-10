import React from "react";
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from "react-router-dom";
import {Routes, Route} from "react-router-dom";
import { Sliderdata } from './components/sliderdata'
import SignUp from "./components/pages/SignUp";
import Home from "./components/pages/Home";
import Imageslider from "./components/Imageslider";
import PropTypes from 'prop-types'
import Footer from "./components/footer";

function App() {
  return(
    <Router>
      <Navbar/>
      <Routes>
        {/* <Route path='/' exact Component={Home}/> */}
        <Route path="/" 
        render={(slides = {Sliderdata}) => <Imageslider {...slides} authed={true}/>}
        />
        <Route path='sign-up' exact Component={SignUp}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

