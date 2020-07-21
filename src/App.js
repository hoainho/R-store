import React, {Component} from 'react';
import './App.scss';
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/ProductHorizonSC';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        
        <div>
        <Navbar />
          <Switch>
          
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            {/* <Route path="/dashboard">
              <Dashboard />
            </Route> */}
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
