import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import GroveRoom from "./pages/GroveRoom";
import ChatCards from "./components/ChatCards"
import Nav from "./components/Nav";

const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/groveroom" component={GroveRoom} />
      </Switch>
    </div>
  </Router>;

export default App;
