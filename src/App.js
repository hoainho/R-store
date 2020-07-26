import React, {Component} from 'react';
import './App.scss';
import Navbar from './components/navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Trademark from './components/trademark';
import ProductDetails from './components/ProductDetails';
import ScrollTop from './components/Scroll';
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          {/* Narbar */}
            <Navbar />
          {/* ----- */}
          {/* Content */}
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
          {/* ----- */}
          {/* Trademark */}
            <Trademark />
          {/* ----- */}
          {/* Product-Details */}
          <ProductDetails />
          {/* ----- */}
          {/* Scroll to Top */}
          <ScrollTop scrollStepInPx="50" delayInMs="16.66"/>
          {/* ----- */}
          {/* Footer */}
          <Footer />
          {/* ----- */}
        </div>
      </Router>
    </div>
  );
}

export default App;
