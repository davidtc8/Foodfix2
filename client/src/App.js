import React from "react";
import { Container } from "@material-ui/core";
// import {BrowserRouter, Switch, Route } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
// import GoogleAuth from "./components/Auth/GoogleAuth";

// import test from './images/test.png'

const App = () => {

  return (

    <Router>
      <Container maxWidth="lg">
        <Navbar/>
          <Routes>
            <Route path ='/' exact element = {<Home/>}/>
            {/* <Route path ='/auth' exact element = {<GoogleAuth/>}/>             */}
            <Route path ='/auth' exact element = {<Auth/>}/>
          </Routes>
      </Container>
      {/* <Home/> */}
    </Router>


  );
};

export default App;
