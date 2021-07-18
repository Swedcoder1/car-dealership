import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import CarWrap from "./components/services/CarWrap";
import CarWash from "./components/services/CarWash";
import RepairShop from "./components/services/RepairShop";
import AboutUs from "./components/AboutUs";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "../src/components/ScrollToTop";

const App = () => {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />

        <Switch>
          <Route exact path="/carwrap">
            <CarWrap />
          </Route>
          <Route exact path="/carwash">
            <CarWash />
          </Route>
          <Route exact path="/repairshop">
            <RepairShop />
          </Route>
          <Route exact path="/aboutus">
            <AboutUs />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
