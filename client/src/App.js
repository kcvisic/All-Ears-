import React from "react";
import { BrowserRouter as Router, Link, Route,  Switch } from "react-router-dom";
import Home from "./pages/Home";
import GroveRoom from "./pages/GroveRoom";
import DashBoard from "./pages/DashBoard";
import Nav from "./components/Nav";

const App = () =>
  <Router>
    <div id="wrap">
      <Nav />
      <Switch>
        <Route exact path="/" component={DashBoard} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/grooveroom/:id" component={GroveRoom} />
      </Switch>
    </div>
  </Router>;

export default App;
