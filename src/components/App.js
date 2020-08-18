import React from "react";
import Navigation from "./Navigation";
import Home from "./Home";
import Memory from "./Memory";
import Snake from "./Snake";
import Minesweeper from "./Minesweeper";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Navigation></Navigation>
      <Memory></Memory>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/Memory" component={Memory}> </Route>
        <Route path="/Snake" component={Snake}></Route>
        <Route path="/Minesweeper" component={Minesweeper}></Route>
      </Switch>
    </Router>
  );
}

export default App;