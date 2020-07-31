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
import Store from './components/Store/Main';
import News from './components/news/main';
import About from './components/About/Main';
import Contact from './components/contact/main';
import Login from './components/Customer/login';
import Logout from './components/Customer/logout';
import Storage from './components/Features/Cart';
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
              <Route  path="/Store">
                <Store />
              </Route>
              <Route  path="/News">
                <News />
              </Route>
              <Route  path="/About">
                <About />
              </Route>
              <Route  path="/Contact">
                <Contact />
              </Route>
              <Route  path="/Login">
                <Login />
              </Route>
              <Route  path="/Logout">
                <Logout />
              </Route>
              <Route  path="/Storage">
                <Storage/>
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
