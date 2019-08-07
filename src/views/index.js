import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Cart from "../components/cart";

export default class Main extends React.PureComponent {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={Cart} path="/cart" />
        </Switch>
      </Router>
    );
  }
}
