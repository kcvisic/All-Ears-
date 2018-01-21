import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import GroveRoom from "./pages/GroveRoom";
import UserDashBoard from "./pages/UserDashBoard";
import Nav from "./components/Nav";

const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={UserDashBoard} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/groveroom/ :id" component={GroveRoom} />
      </Switch>
    </div>
  </Router>;

export default App;
