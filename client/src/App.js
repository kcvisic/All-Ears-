import React from "react";
import { BrowserRouter as Router, Route, Link,  Switch } from "react-router-dom";
import Home from "./pages/Home";
import GroveRoom from "./pages/GroveRoom";
import ChatCards from "./components/ChatCards"
import UserDashBoard from "./pages/UserDashBoard";

import Nav from "./components/Nav";

const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/grooveroom/:id" component={GroveRoom} />
      </Switch>
    </div>
  </Router>;

export default App;
