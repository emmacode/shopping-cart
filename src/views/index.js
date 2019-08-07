import React from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Cart from "../components/cart";

export default class Main extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={Cart} path="/cart" />
        </Switch>
      </React.Fragment>
    );
  }
}
