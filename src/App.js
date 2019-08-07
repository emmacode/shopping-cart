import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cart from "./components/cart";

function App() {
  return (
    <div className="App">
      <Router>
        <div />
        <Navbar />
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={Cart} path="/cart" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
