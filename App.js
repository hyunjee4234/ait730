import React, { Fragment } from "react";

import "./App.css";
import Navbar from "./layout/Navbar";
import Landing from "./layout/Landing";

import Signin from "./layout/Signin";
import Signup from "./layout/Signup";
import ForgotPassword from "./layout/ForgotPassword";

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { render } from "@testing-library/react";

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />

        <section className="container">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/Signup" component={Signup} />
            <Route exact path="/Signin" component={Signin} />
            <Route exact path="/ForgotPassword" component={ForgotPassword} />

            <Route render={() => <Redirect to={{pathname: "/"}} />} />
          </Switch>
        </section>
      </Fragment>
    </Router>
  );
}




export default App;